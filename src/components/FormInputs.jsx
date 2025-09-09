import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../constants'
import { Controller } from 'react-hook-form'

const FormInputs = ({ 
  control, 
  name, 
  rules = {}, 
  placeholder, 
  label,
  secureTextEntry,
  multiline,
  errors
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
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
        )}
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
    borderColor: Colors.DEFAULT_GRAY,
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
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  }
})