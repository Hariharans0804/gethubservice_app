import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../../constants'
import { useForm } from 'react-hook-form'

const AccountSetupForm = ({ renderInput, onContinue, onBack }) => {

    return (
        <View style={{ /*borderWidth: 1,*/ borderRadius: 12, backgroundColor: Colors.DEFAULT_WHITE, width: '100%', marginVertical: 10, paddingVertical: 20, paddingHorizontal: 10 }}>

            <View style={styles.stepsContainer}>
                <Text style={styles.stepCount}>3</Text>
                <View>
                    <Text style={styles.stepText}>Step 3</Text>
                    <Text style={styles.stepDetails}>Account Setup</Text>
                </View>
            </View>

            <Text style={[styles.headerText, { color: Colors.DEFAULT_BLACK, fontSize: 22, fontFamily: Fonts.POPPINS_SEMI_BOLD, lineHeight: 22 * 1.4, marginVertical: 10 }]}>User Account Details</Text>
            <Text style={[styles.headerText1, { fontSize: 16, lineHeight: 16 * 1.4, marginVertical: 5, marginHorizontal: 10 }]}>Create your account to complete your website setup</Text>

            {/* Inputs */}
            <Text style={styles.textInputHeading}>Full Name</Text>
            {renderInput('fullName', 'John Doe')}

            <Text style={styles.textInputHeading}>Username</Text>
            {renderInput('userName', 'Truck food')}

            <Text style={styles.textInputHeading}>Email Address</Text>
            {renderInput('email', 'john@gmail.com')}

            <Text style={styles.textInputHeading}>Phone Number</Text>
            {renderInput('phoneNumber', '1234567890')}

            <Text style={styles.textInputHeading}>Password</Text>
            {renderInput('password', 'Enter a strong password', { secure: true })}

            <Text style={styles.textInputHeading}>Confirm Password</Text>
            {renderInput('cPassword', 'Confirm strong password', { secure: true })}

            <Text style={styles.textInputHeading}>Address</Text>
            {renderInput('address', '123 main street...', { multiline: true })}

            <Text style={styles.textInputHeading}>State</Text>
            {renderInput('state', 'select your state')}

            <Text style={styles.textInputHeading}>City</Text>
            {renderInput('city', 'select your city')}

            <Text style={styles.textInputHeading}>Pincode</Text>
            {renderInput('pincode', '123456')}

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.headerButton, { backgroundColor: Colors.DEFAULT_LIGHT_BLUE_2, borderWidth: 1.2, borderColor: Colors.DEFAULT_DARK_GRAY }]} onPress={onBack} >
                    <Text style={[styles.headerButtonText, { color: Colors.DEFAULT_BLACK }]}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.headerButton]} activeOpacity={0.8} onPress={onContinue}>
                    <Text style={[styles.headerButtonText]}>Continue to Account Setup</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AccountSetupForm

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
        // lineHeight: 18 * 1.4,
    },
    icon: {
        marginRight: 5,
    },
    headerButton: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 10,
        // marginVertical: 10
        marginTop: 20
    },
    headerButtonText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_WHITE,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    errorText: {
        color: Colors.DEFAULT_DARK_RED,
        fontSize: 14,
        lineHeight: 14 * 1.4,
        marginLeft: 15,
        marginTop: 5
    }
})


// let renderCount = 0;

// //abc@gmail.com
// const schema = Yup.object().shape({
//     fullName: Yup.string()
//         .required('Name is Required')
//         .matches(/^[A-Z][a-z]+$/, 'Enter Your Fullname'),
//     userName: Yup.string()
//         .required('Username is Required')
//         .matches(/^[A-Z][a-z]+$/, 'Enter Your Username'),
//     email: Yup.string()
//         .required('Email is Required')
//         .email('Enter a valid Email')
//         .matches(/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/, 'Enter a valid Email'),
//     phoneNumber: Yup.number()
//         .typeError('Phone Number must be a number') // if user types letters
//         .integer('Phone Number must be an integer')
//         .positive('Phone Number must be positive')
//         .required('Phone Number is Required')
//         .test('len', 'Phone number must be exactly 10 digits', val =>
//             val && val.toString().length === 10
//         ),
//     password: Yup.string().required('Password is Required'),
//     cPassword: Yup.string()
//         .required('Confirm Password is Required')
//         .oneOf([Yup.ref('password'), null], 'Password Must Match'),
//     address: Yup.string()
//         .required('Address is Required'),
//     city: Yup.string()
//         .required('City is Required'),
//     state: Yup.string()
//         .required('State is Required'),
//     pincode: Yup.number()
//         .typeError('Pincode must be a number') // catches letters/symbols
//         .integer('Pincode must be an integer')
//         .positive('Pincode must be positive')
//         .required('Pincode is Required')
//         .test('len', 'Pincode must be exactly 6 digits', val =>
//             val && val.toString().length === 6
//         ),
// })


//  const { control, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             fullName: '',
//             userName: '',
//             email: '',
//             phoneNumber: '',
//             password: '',
//             cPassword: '',
//             address: '',
//             city: '',
//             state: '',
//             pincode: ''
//         },
//         resolver: yupResolver(schema)
//     });

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

// ===================================================================================================//

{/* <Text style={styles.textInputHeading}>Full Name</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Jhon Doe'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('fullName')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Username</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Truck food'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('userName')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Email Address</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='jhon@gmail.com'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('email')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Phone Number</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='1234567890'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('phoneNumber')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Password</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Enter a strong password'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    secureTextEntry
                    {...register('password')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Confirm Password</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Confirm your password'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    secureTextEntry
                    {...register('cPassword')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Address</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='123 main street...'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={[styles.textInput, { height: 100, textAlignVertical: 'top' }]} // textAlignVertical keeps text at top
                    multiline={true}
                    numberOfLines={5}
                    {...register('address')}
                />
            </View> */}

{/* <Text style={styles.textInputHeading}>City</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Kollam'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('city')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>State</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='Kerala'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('state')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}

{/* <Text style={styles.textInputHeading}>Pincode</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder='123456'
                    placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                    selectionColor={Colors.DEFAULT_DARK_GRAY}
                    style={styles.textInput}
                    {...register('pincode')}
                />
                <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </View> */}
