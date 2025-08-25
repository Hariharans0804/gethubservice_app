import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'
import { useForm } from 'react-hook-form';

const BusinessDetailsForm = ({ onContinue, renderInput }) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, (isFocus || value) && { color: Colors.DEFAULT_SKY_BLUE }]}>
                    Business Type
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={{ /*borderWidth: 1,*/ borderRadius: 12, backgroundColor: Colors.DEFAULT_WHITE, width: '100%', marginVertical: 10, paddingVertical: 20, paddingHorizontal: 10 }}>

            <View style={styles.stepsContainer}>
                <Text style={styles.stepCount}>1</Text>
                <View>
                    <Text style={styles.stepText}>Step 1</Text>
                    <Text style={styles.stepDetails}>Choose Industry</Text>
                </View>
            </View>

            <Text style={[styles.headerText, { color: Colors.DEFAULT_BLACK, fontSize: 22, fontFamily: Fonts.POPPINS_SEMI_BOLD, lineHeight: 22 * 1.4, marginVertical: 10 }]}>Tell us about your business</Text>
            <Text style={[styles.headerText1, { fontSize: 16, lineHeight: 16 * 1.4, marginVertical: 5, marginHorizontal: 10 }]}>Help us create the perfect website for your business</Text>

            <Text style={styles.textInputHeading}>Business Name</Text>
            {renderInput('businessName', 'Famous food')}

            <Text style={styles.textInputHeading}>Business Type</Text>
            {renderInput('businessType', 'Select Your Business Type', { isDropdown: true })}

            <Text style={styles.textInputHeading}>Business Description (Optional)</Text>
            {renderInput('businessDescription', 'Tell us what makes your business special...', { multiline: true }/*false, true*/)}

            <View style={{flexDirection:'row',alignItems:'center',/*borderWidth:1,marginHorizontal:10*/}}>
                <Text style={styles.textInputHeading}>Your Website Address</Text>
                <Text style={styles.getHubServiceText2}>(.gethubservice)</Text>
            </View>
            {renderInput('websiteAddress', 'your company')}

            {/* <View style={{ alignItems: 'flex-end',marginHorizontal: 15 }}>
                <Text style={styles.getHubServiceText}>.gethubservice</Text>
            </View> */}

            <TouchableOpacity
                style={[styles.headerButton]}
                activeOpacity={0.8}
                onPress={onContinue}
            >
                <Text style={[styles.headerButtonText]}>Continue to Themes</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BusinessDetailsForm

const styles = StyleSheet.create({
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
    headerButton: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 10,
        // marginVertical: 10
        marginTop: 20
    },
    headerButtonText: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_WHITE,
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    textInputHeading: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 18 * 1.4,
        padding: 10
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
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight: 16 * 1.4,
    },
    getHubServiceText: {
        borderStartWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
        borderColor: Colors.DEFAULT_DARK_GRAY,
        color: Colors.DEFAULT_DARK_GRAY
    },
    getHubServiceText2: {
        color: Colors.DEFAULT_DARK_GRAY
    },
    stepsContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 10
    },
    stepCount: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        color: Colors.DEFAULT_WHITE,
        padding: 15,
        borderRadius: 20,
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    stepText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_SKY_BLUE
    },
    stepDetails: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK
    },
    errorText: {
        color: Colors.DEFAULT_DARK_RED,
        fontSize: 14,
        lineHeight: 14 * 1.4,
        marginLeft: 15,
        marginTop: 5
    }
})



// const renderInput = (name, placeholder, options = {}) => {
//     const { secure = false, multiline = false, isDropdown = false } = options;

//     if (isDropdown) {
//         // For Dropdown
//         return (
//             <>
//                 <Controller
//                     control={control}
//                     name={name}
//                     render={({ field: { onChange, value } }) => (
//                         <View style={styles.dropdownWrapper}>
//                             <Dropdown
//                                 style={[
//                                     styles.dropdown,
//                                     value ? { borderColor: Colors.DEFAULT_SKY_BLUE } : null
//                                 ]}
//                                 placeholderStyle={styles.placeholderStyle}
//                                 selectedTextStyle={styles.selectedTextStyle}
//                                 inputSearchStyle={styles.inputSearchStyle}
//                                 iconStyle={styles.iconStyle}
//                                 data={businessTypeData}
//                                 search
//                                 maxHeight={250}
//                                 labelField="label"
//                                 valueField="value"
//                                 placeholder={placeholder}
//                                 searchPlaceholder="Search..."
//                                 value={value}
//                                 onChange={item => onChange(item.value)}
//                                 renderLeftIcon={() => (
//                                     <ShieldCheck
//                                         style={styles.icon}
//                                         color={value ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_DARK_GRAY}
//                                         size={20}
//                                     />
//                                 )}
//                             />
//                         </View>
//                     )}
//                 />
//                 {errors[name] && (
//                     <Text style={styles.errorText}>{errors[name]?.message}</Text>
//                 )}
//             </>
//         );
//     }

//     // For TextInput
//     return (
//         <>
//             <Controller
//                 control={control}
//                 name={name}
//                 render={({ field: { onChange, value } }) => (
//                     <View style={styles.textInputContainer}>
//                         <TextInput
//                             placeholder={placeholder}
//                             placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
//                             selectionColor={Colors.DEFAULT_DARK_GRAY}
//                             style={[
//                                 styles.textInput,
//                                 multiline && { height: 100, textAlignVertical: 'top' }
//                             ]}
//                             secureTextEntry={secure}
//                             value={value}
//                             onChangeText={onChange}
//                             multiline={multiline}
//                         />
//                         {!multiline && (
//                             <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
//                         )}
//                     </View>
//                 )}
//             />
//             {errors[name] && (
//                 <Text style={styles.errorText}>{errors[name]?.message}</Text>
//             )}
//         </>
//     );
// };

//  const { control, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             businessName: '',
//             businessType: '',
//             businessDescription: '',
//             websiteAddress: ''
//         },
//         resolver: yupResolver(schema)
//     });

//     console.log('000', errors);

// const schema = Yup.object().shape({
//     businessName: Yup.string()
//         .required('Business Name is Required')
//         .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, 'Enter Your Business Name'),
//     businessType: Yup.string()
//         .required('Business Type is Required'),
//     businessDescription: Yup.string()
//         .required('Address is Required'),
//     websiteAddress: Yup.string()
//         .required('Website Address is Required')
//         .matches(/^[a-z]+$/, 'Enter Your Website Address'),
// })

// ===================================================================================================//

{/* <Text style={styles.textInputHeading}>Business Name</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Famous food'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    label='Name'
                    {...register('name')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}


{/* <Text style={styles.textInputHeading}>Business Description (Optional)</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Tell us what makes your business special...'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={[styles.textInput, { height: 100, textAlignVertical: 'top' }]} // textAlignVertical keeps text at top
                    multiline={true}
                    numberOfLines={5}
                />
            </View> */}


{/* <Text style={styles.textInputHeading}>Your Website Address</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='your conpany'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}



// const renderInput = (name, placeholder, secure = false, multiline = false) => (
//     <>
//         <Controller
//             control={control}
//             name={name}
//             render={({ field: { onChange, value } }) => (
//                 <View style={styles.textInputContainer}>
//                     <TextInput
//                         placeholder={placeholder}
//                         placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
//                         selectionColor={Colors.DEFAULT_DARK_GRAY}
//                         style={[styles.textInput, multiline && { height: 100, textAlignVertical: 'top' }]}
//                         secureTextEntry={secure}
//                         value={value}
//                         onChangeText={onChange}
//                         multiline={multiline}
//                     />
//                     {!multiline && <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />}
//                 </View>
//             )}
//         />

//         {errors[name] && (
//             <Text style={styles.errorText}>
//                 {errors[name]?.message}
//             </Text>
//         )}
//     </>
// );



// =============================================================================================//

// const renderLabel = () => {
//     if (value || isFocus) {
//         return (
//             <Text style={[styles.label, (isFocus || value) && { color: Colors.DEFAULT_SKY_BLUE }]}>
//                 Business Type
//             </Text>
//         );
//     }
//     return null;
// };


{/* <Text style={styles.textInputHeading}>Business Type</Text>
            <View style={styles.dropdownWrapper}>
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