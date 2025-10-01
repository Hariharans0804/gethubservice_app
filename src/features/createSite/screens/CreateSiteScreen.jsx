import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../../../constants'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { Dropdown } from 'react-native-element-dropdown'
import { CircleX, Eye, EyeOff, Fish, LifeBuoy, Sailboat, ShieldCheck, Ship } from 'lucide-react-native'
// import { fetchBusinessTypeCategoriesAPI } from '../../../api/getApi'
// import { siteCreationAPI } from '../../../api/postApi';
// import { AccountSetupForm, BusinessDetailsForm, ThemeColorsForm } from '../../../components'
import { Country, State, City } from "country-state-city";
import BusinessDetailsForm from '../components/BusinessDetailsForm'
import ThemeColorsForm from '../components/ThemeColorsForm'
import AccountSetupForm from '../components/AccountSetupForm'
import { fetchBusinessTypeCategoriesAPI, siteCreationAPI } from '../api/createSiteApi'

// const schema = Yup.object().shape({
//   businessName: Yup.string()
//     .required('Business Name is Required'),
//   businessType: Yup.string()
//     .required('Business Type is Required'),
//   businessDescription: Yup.string()
//     .required('Address is Required'),
//   websiteAddress: Yup.string()
//     .required('Website Address is Required'),
//   fullName: Yup.string()
//     .required('FullName is Required'),
//   email: Yup.string()
//     .required('Email is Required'),
//   phoneNumber: Yup.string()
//     .required('PhoneNumber is Required'),
//   password: Yup.string()
//     .required('Password is Required'),
//   cPassword: Yup.string()
//     .required('Confirm Password is Required')
//     .oneOf([Yup.ref('password'), null], 'Password Must Match'),
//   address: Yup.string()
//     .required('Address is Required'),
//   city: Yup.string()
//     .required('City is Required'),
//   state: Yup.string()
//     .required('State is Required'),
//   pincode: Yup.string()
//     .required('Pincode is Required'),
// })

const businessSchema = Yup.object().shape({
  businessName: Yup.string().required('Business Name is Required'),
  businessType: Yup.string().required('Business Type is Required'),
  businessDescription: Yup.string(), // optional
  websiteAddress: Yup.string().required('Website Address is Required'),
});

const accountSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is Required'),
  email: Yup.string().required('Email is Required').email('Invalid Email'),
  phoneNumber: Yup.string().required('Phone Number is Required'),
  password: Yup.string().required('Password is Required'),
  cPassword: Yup.string()
    .required('Confirm Password is Required')
    .oneOf([Yup.ref('password'), null], 'Password Must Match'),
  address: Yup.string().required('Address is Required'),
  city: Yup.string().required('City is Required'),
  state: Yup.string().required('State is Required'),
  pincode: Yup.string().required('Pincode is Required'),
});


const CreateSiteScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);


  const fetchBusinessType = async () => {
    const result = await fetchBusinessTypeCategoriesAPI();
    // console.log('result', result);
    if (result.success) {
      setBusinessType(result.data);
    } else {
      console.error('Failed to fetch business types:', result.error);
    }
  }


  useEffect(() => {
    fetchBusinessType();
    const indiaStates = State.getStatesOfCountry("IN");
    // console.log('indiaStates', indiaStates);
    setStates(indiaStates);
  }, [])

  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      businessName: '',
      businessType: '',
      businessDescription: '',
      websiteAddress: '',
      fullName: '',
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      cPassword: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    },
    // resolver: yupResolver(schema),
    resolver: yupResolver(step === 1 ? businessSchema : accountSchema),
  });

  const renderInput = (name, placeholder, options = {}) => {
    const { secure = false, multiline = false, isDropdown = false } = options;

    // ✅ Business Type Dropdown
    if (isDropdown) {
      return (
        <>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <>
                <View style={styles.dropdownWrapper}>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      value ? { borderColor: Colors.DEFAULT_SKY_BLUE } : null
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={businessType}
                    search
                    maxHeight={250}
                    labelField="label"
                    valueField="value"
                    placeholder={placeholder}
                    searchPlaceholder="Search..."
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
              </>
            )}
          />
          {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
        </>
      );
    }

    // ✅ State Dropdown
    if (name === "state") {
      return (
        <>
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, value } }) => (
              <View style={styles.dropdownWrapper}>
                <Dropdown
                  style={[styles.dropdown, value ? { borderColor: Colors.DEFAULT_SKY_BLUE } : null]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={states}
                  search
                  maxHeight={250}
                  labelField="name"
                  valueField="name"
                  placeholder={placeholder}
                  searchPlaceholder="Search state..."
                  value={value}
                  onChange={(item) => {
                    console.log("📍 Selected State:", item);   // 👈 full state object log
                    console.log("📍 State Value:", item.name);  // 👈 only name log

                    onChange(item.name); // store name in form
                    setCities(City.getCitiesOfState("IN", item.isoCode)); // fetch cities
                    setValue("city", ""); // reset city
                  }}
                  renderLeftIcon={() => (
                    <ShieldCheck
                      style={styles.icon}
                      color={value ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_DARK_GRAY}
                      size={20}
                    />
                  )}
                />
              </View>
            )}
          />
          {errors["state"] && <Text style={styles.errorText}>{errors["state"]?.message}</Text>}
        </>
      );
    }

    // ✅ City Dropdown
    if (name === "city") {
      return (
        <>
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <View style={styles.dropdownWrapper}>
                <Dropdown
                  style={[styles.dropdown, value ? { borderColor: Colors.DEFAULT_SKY_BLUE } : null]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={cities}
                  search
                  maxHeight={250}
                  labelField="name"
                  valueField="name"
                  placeholder={placeholder}
                  searchPlaceholder="Search city..."
                  value={value}
                  onChange={(item) => {
                    console.log("🏙️ Selected City:", item);   // 👈 full city object log
                    console.log("🏙️ City Value:", item.name); // 👈 only name log

                    onChange(item.name);
                  }}
                  renderLeftIcon={() => (
                    <ShieldCheck
                      style={styles.icon}
                      color={value ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_DARK_GRAY}
                      size={20}
                    />
                  )}
                />
              </View>
            )}
          />
          {errors["city"] && <Text style={styles.errorText}>{errors["city"]?.message}</Text>}
        </>
      );
    }

    return (
      <>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                selectionColor={Colors.DEFAULT_DARK_GRAY}
                style={[
                  styles.textInput,
                  multiline && { height: 100, textAlignVertical: 'top' }
                ]}
                // secureTextEntry={secure}
                secureTextEntry={
                  (name === 'password' && !showPassword) ||
                    (name === 'cPassword' && !showCPassword)
                    ? true
                    : false
                }
                value={value}
                onChangeText={(text) => {
                  onChange(text);

                  // 🔑 Sync logic here
                  if (name === 'businessName') {
                    const formatted = text.toLowerCase().replace(/\s+/g, '');
                    setValue('websiteAddress', formatted);
                    setValue('userName', formatted);
                  }
                }}
                multiline={multiline}
              />

              {/* 🔑 show/hide icons */}
              {name === 'password' && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  activeOpacity={0.8}
                >
                  {showPassword ? (
                    <Eye size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                  ) : (
                    <EyeOff size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                  )}
                </TouchableOpacity>
              )}
              {name === 'cPassword' && (
                <TouchableOpacity
                  onPress={() => setShowCPassword(!showCPassword)}
                  activeOpacity={0.8}
                >
                  {showCPassword ? (
                    <Eye size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                  ) : (
                    <EyeOff size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                  )}
                </TouchableOpacity>
              )}

              {/* {!multiline && ( */}
              {!multiline &&
                name !== 'password' &&
                name !== 'cPassword' &&
                !!value && (
                  <TouchableOpacity onPress={() => onChange('')} activeOpacity={0.8}>
                    <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                  </TouchableOpacity>
                )}
            </View>
          )}
        />
        {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
      </>
    );
  };

  const handleBusinessData = (data) => {
    console.log("Business Data:", data);
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
    setStep(2);
  };

  const handleThemeData = (themeData) => {
    console.log("Theme Data:", themeData);
    setFormData(prevData => ({
      ...prevData,
      selectedTemplate: themeData.template,
      selectedFeatures: themeData.features,
      additionalSettings: {
        templateCustomizations: {
          colors: themeData.colors
        }
      }
    }));
    setStep(3);
  };

  const handleAccountData = async (data) => {
    try {
      setIsLoading(true);
      console.log("Account Data:", data);

      // Combine all form data
      const finalFormData = {
        ...formData,
        ...data
      };

      console.log("📤 Submitting data to API:", finalFormData);

      const response = await siteCreationAPI(finalFormData);

      if (response.success) {
        console.log("✅ API Response:", response);
        Alert.alert(
          "Success",
          "Your website has been created successfully!",
          [
            {
              text: "OK",
              onPress: () => navigation?.navigate('Login', { siteId: response.data.siteId })
            }
          ]
        );
      } else {
        throw new Error(response.error || 'Failed to create website');
      }
    } catch (error) {
      console.error("❌ API Error:", error);
      Alert.alert(
        "Error",
        error.message || "Failed to create your website. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">

          <View style={styles.header}>
            <Text style={styles.headerText}>Create Your Professional Website</Text>
            <Text style={styles.headerText1}>
              Let's build something amazing together - it only takes a few minutes!
            </Text>

            {step === 1 && (
              <BusinessDetailsForm
                renderInput={renderInput}
                onContinue={() => { handleSubmit(handleBusinessData)() }}
              />
            )}
            {step === 2 && (
              <ThemeColorsForm
                onContinue={handleThemeData}
                isLoading={isLoading}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <AccountSetupForm
                renderInput={renderInput}
                onContinue={() => { handleSubmit(handleAccountData)() }}
                onBack={() => setStep(2)}
              />
            )}
          </View>


          <Text style={styles.socialMediaText}>social media</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 15, marginVertical: 10, marginHorizontal: 30 }}>
            <TouchableOpacity style={styles.iconButton}>
              <Ship
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
              {/* <Image source={Images.INSTAGRAM} resizeMode="contain" style={styles.socialMediaImages}/> */}
              {/* <INSTAGRAM width={25} height={25} fill={Colors.DEFAULT_SKY_BLUE} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Fish
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
              {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Sailboat
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
              {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <LifeBuoy
                size={20}
                color={Colors.DEFAULT_SKY_BLUE}
              />
              {/* <INSTAGRAM width={30} height={30} fill={Colors.DEFAULT_SKY_BLUE}/> */}
            </TouchableOpacity>
          </View>

        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default CreateSiteScreen

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: Colors.DEFAULT_SKY_BLUE,
    // borderRadius: 20,
    backgroundColor: Colors.DEFAULT_LIGHT_BLUE_2,
  },
  heading: {
    // fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 32 * 1.4,
    fontFamily: Fonts.POPPINS_EXTRA_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  headerText1: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_DARK_GRAY,
    marginVertical: 10
  },
  dropdownWrapper: {
    // backgroundColor: Colors.DEFAULT_WHITE,
    width: '100%',
    // paddingVertical: 16,
    // marginHorizontal: 10,
    paddingHorizontal: 10,
    // borderWidth:1
  },
  dropdown: {
    height: 55,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.DEFAULT_WHITE,
    left: 22,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    borderRadius: 5
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
  errorText: {
    color: Colors.DEFAULT_DARK_RED,
    fontSize: 14,
    lineHeight: 14 * 1.4,
    marginLeft: 15,
    marginTop: 5
  },
  textInputContainer: {
    borderWidth: 1.5,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 5,
    borderRadius: 8
  },
  textInput: {
    // borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    // lineHeight: 18 * 1.4,
  },
  socialMediaText: {
    fontSize: 30,
    lineHeight: 30 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_DARK_GRAY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textTransform: 'uppercase'
  },
  iconButton: {
    // backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_SKY_BLUE,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10
  },
})


{/* <Text style={[styles.headerText, { color: Colors.DEFAULT_SKY_BLUE, fontSize: 28, fontFamily: Fonts.POPPINS_SEMI_BOLD, lineHeight: 28 * 1.4, marginVertical: 10 }]}>Choose Your Industry</Text> */ }

{/* <View style={styles.dropdownWrapper}>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, (isFocus || value) && { borderColor: Colors.DEFAULT_SKY_BLUE }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={businessTypeData}
              search
              maxHeight={250}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Your Business Type ' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <ShieldCheck
                  style={styles.icon}
                  color={(isFocus || value) ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_DARK_GRAY}
                  size={20}
                />
              )}
            />
          </View> */}
