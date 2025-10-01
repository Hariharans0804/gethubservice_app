import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { Controller } from 'react-hook-form'
import { Dropdown } from 'react-native-element-dropdown'
import { Calendar } from 'react-native-calendars'
import { CalendarHeart, ShieldCheck } from 'lucide-react-native'
import TreeDropdown from './TreeDropdown'

const FormInputs = ({
  control,
  name,
  rules = {},
  placeholder,
  label,
  secureTextEntry,
  multiline,
  errors,
  type,
  options = [], // dropdown options
  setValue,
  watchName,
}) => {

  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  // console.log(`FormInputs render: ${name}`); // 👀 will log whenever this component re-renders

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => {
          // console.log(`FormInputs (${name}) field render with value:`, value); // logs on each keystroke

          // 👇 auto SKU logic
          if (watchName === "name") {
            return (
              <TextInput
                value={value}
                onChangeText={(text) => {
                  onChange(text);
                  // auto fill SKU
                  const sku = text.toLowerCase().replace(/\s+/g, "");
                  setValue("sku", sku, { shouldValidate: true });
                }}
                placeholder={placeholder}
                style={[styles.input, errors[name] && styles.errorInput]}
              />
            );
          }

          if (name === "sku") {
            return (
              <TextInput
                value={value}
                editable={false}   // 👈 read-only
                placeholder={placeholder}
                style={[styles.input, ]}
              />
            );
          }

          if (type === "treeDropdown") {
            return (
              <TreeDropdown
                data={options} // 👈 already tree வடிவில் pass பண்ணும்
                placeholder={placeholder}   // 👈 pass placeholder
                value={value}               // 👈 current selected value
                onSelect={(selected) => onChange(selected._id)}
              />
            );
          }


          if (type === 'dropdown') {
            // For simplicity, using TextInput to simulate dropdown behavior
            return (
              <View style={styles.dropdownWrapper}>
                <Dropdown
                  style={[styles.dropdown, errors[name] && styles.errorInput]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  // data={options.map(opt => ({ label: opt, value: opt }))}
                  data={options}
                  search
                  searchPlaceholder="Search service..."
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder={placeholder}
                  value={value}
                  onChange={item => onChange(item.value)}
                  renderLeftIcon={() => (
                    <ShieldCheck
                      style={styles.icon}
                      color={value ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_DARK_GRAY}
                      size={20}
                    />
                  )}
                />
              </View>
            );
          }

          if (type === 'date') {
            // Format function
            const formatDate = (dateStr) => {
              if (!dateStr) return '';
              const [year, month, day] = dateStr.split('-');
              return `${day}-${month}-${year}`; // 04-09-2025
            };

            // For simplicity, using TextInput to simulate date picker behavior
            return (
              <>
                <View style={styles.dateInputWrapper}>
                  <TextInput
                    // value={value}
                    value={formatDate(value)}   // 👈 show formatted value
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    style={[
                      styles.dateInput,
                      multiline && styles.multilineInput,
                      errors[name] && styles.errorInput
                    ]}
                    secureTextEntry={secureTextEntry}
                    multiline={multiline}
                    editable={false} // 👈 prevent manual typing
                  />
                  <TouchableOpacity acoptiveOpacity={0.8} onPress={() => setIsCalendarVisible(true)}>
                    <CalendarHeart size={20} style={{ paddingHorizontal: 15, color: Colors.DEFAULT_DARK_RED }} />
                  </TouchableOpacity>
                </View>

                <Modal visible={isCalendarVisible} transparent={true} animationType="slide">
                  <View style={styles.modalOverlay}>
                    <View style={styles.calendarContainer}>

                      <Calendar
                        theme={{
                          textDayFontSize: 12,       // dates (1,2,3...)
                          textMonthFontSize: 12,     // month title (September 2025)
                          textDayHeaderFontSize: 12, // weekdays (Sun, Mon, Tue...)
                        }}
                        onDayPress={(day) => {
                          onChange(day.dateString); // stored in react-hook-form
                          setIsCalendarVisible(false);
                        }}
                        markedDates={
                          value
                            ? { [value]: { selected: true, marked: true, selectedColor: Colors.DEFAULT_SKY_BLUE } }
                            : {}
                        }
                      />

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between', // spread buttons
                          alignItems: 'center',
                          marginHorizontal: 12,
                          // marginTop: 10,
                          paddingVertical: 8,
                          borderTopWidth: 1,
                          borderColor: Colors.DEFAULT_LIGHT_GRAY,
                        }}
                      >
                        <TouchableOpacity onPress={() => onChange(null)}>
                          <Text style={{ fontSize: 16, paddingHorizontal: 10, color: Colors.DEFAULT_DARK_GRAY }}>Clear</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setIsCalendarVisible(false)}>
                          <Text style={{ fontSize: 16, paddingHorizontal: 10, color: Colors.DEFAULT_DARK_RED }}>Close</Text>
                        </TouchableOpacity>
                      </View>


                    </View>
                  </View>
                </Modal>
              </>
            );
          }

          return (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[
                styles.input,
                multiline && styles.multilineInput,
                errors[name] && styles.errorInput
              ]}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
            />
          )
        }}
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name].message}</Text>
      )}
    </View>
  )
}

export default FormInputs

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,

  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
    color: Colors.DEFAULT_BLACK,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorInput: {
    borderColor: Colors.DEFAULT_DARK_RED,
  },
  errorText: {
    color: Colors.DEFAULT_DARK_RED,
    fontSize: 12,
    marginTop: 4,
  },
  dropdownWrapper: {
    // backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    // paddingVertical: 16,
    // marginHorizontal: 10,
    // paddingHorizontal: 10,
    // borderWidth:1
  },
  dropdown: {
    height: 40,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_DARK_GRAY
  },
  selectedTextStyle: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_SKY_BLUE
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dateInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    borderRadius: 8,
  },
  dateInput: {
    flex: 1,
    // borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    height: '62%',
  },
})