import { ActivityIndicator, Alert, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Colors, Fonts, Images } from '../../constants'
import { ArrowLeft, CircleArrowRight, CircleX, Eye, EyeOff } from 'lucide-react-native';
import { loginAPI } from '../../api/postApi';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const emailError = useMemo(() => {
    if (!touched.email) return '';
    if (!email) return 'Email is required';
    if (!EMAIL_REGEX.test(email)) return 'Enter a valid email address';
    return '';
  }, [email, touched.email]);

  const passwordError = useMemo(() => {
    if (!touched.password) return '';
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Use at least 8 characters';
    return '';
  }, [password, touched.password]);

  const formValid = !emailError && !passwordError && email && password;

  const handleLogin = async () => {
    // reveal errors if the user taps before filling correctly
    setTouched({ email: true, password: true });
    setApiError('');
    if (!formValid || loading) return;

    try {
      setLoading(true);
      const data = await loginAPI({ email: email.trim(), password });
      console.log('Login successful:', data);
      // OPTIONAL: store token/user for later
      // await AsyncStorage.setItem('token', data?.token ?? '');
      // await AsyncStorage.setItem('user', JSON.stringify(data?.user ?? {}));

      Alert.alert('Success', 'Logged in successfully.');
      // Navigate wherever makes sense in your app:
      // navigation.replace('Home');  // or navigation.navigate('Home')
    } catch (error) {
      // Normalize common server error shapes
      const msg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        (Array.isArray(error?.response?.data?.errors)
          ? error.response.data.errors[0]?.msg || 'Validation error'
          : '') ||
        error?.message ||
        'Something went wrong. Please try again.';
      setApiError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_SKY_BLUE} translucent />

      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.goBack()}>
        <ArrowLeft size={30} color={Colors.DEFAULT_SKY_BLUE} />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={Images.logo} resizeMode='contain' style={styles.image} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Welcome back — we missed you 👋
        </Text>
      </View>

      {/* Server error banner */}
      {!!apiError && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorBannerText}>{apiError}</Text>
        </View>
      )}

      {/* Email */}
      <Text style={styles.textInputHeading}>Email</Text>
      <View style={[styles.textInputContainer, !!emailError && { borderColor: Colors.ERROR ?? Colors.DEFAULT_DARK_RED },]}>
        <TextInput
          placeholder='abc@gmail.com'
          placeholderTextColor={Colors.DEFAULT_SKY_BLUE}
          selectionColor={Colors.DEFAULT_SKY_BLUE}
          style={[styles.textInput,]}
          value={email}
          onChangeText={setEmail}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        {email && (
          <TouchableOpacity onPress={() => setEmail('')} activeOpacity={0.8}>
            <CircleX size={20} color={Colors.DEFAULT_SKY_BLUE} style={{ marginRight: 5 }} />
          </TouchableOpacity>
        )}
      </View>
      {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}

      {/* Password */}
      <Text style={styles.textInputHeading}>Password</Text>
      <View style={[styles.textInputContainer, !!passwordError && { borderColor: Colors.ERROR ?? Colors.DEFAULT_DARK_RED },]}>
        <TextInput
          placeholder='your password'
          placeholderTextColor={Colors.DEFAULT_SKY_BLUE}
          selectionColor={Colors.DEFAULT_SKY_BLUE}
          style={[styles.textInput,]}
          value={password}
          onChangeText={setPassword}
          onBlur={() => setTouched((t) => ({ ...t, password: true }))}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          returnKeyType="go"
          textContentType="password"
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} activeOpacity={0.8}>
          {showPassword ? (
            <Eye size={20} color={Colors.DEFAULT_SKY_BLUE} style={{ marginRight: 5 }} />
          ) : (
            <EyeOff size={20} color={Colors.DEFAULT_SKY_BLUE} style={{ marginRight: 5 }} />
          )}
        </TouchableOpacity>
      </View>
      {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity
        style={[styles.headerButton]}
        activeOpacity={0.8}
        onPress={handleLogin}
      // disabled={!formValid}
      >
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.DEFAULT_WHITE}
          />
        ) : (
          <>
            <Text style={styles.headerButtonText}>Login</Text>
            <CircleArrowRight size={22} color={Colors.DEFAULT_WHITE} />
          </>
        )}
      </TouchableOpacity>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.DEFAULT_LIGHT_BLUE_2,
    // paddingHorizontal: 20,
    paddingTop: 70
  },
  logoContainer: {
    width: '100%',
    // borderWidth: 1,
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    gap: 6,
    // marginTop: 12
    marginHorizontal: 20,
    marginBottom: 20
  },
  title: {
    color: Colors.DEFAULT_SKY_BLUE,
    fontSize: 28,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  subtitle: {
    color: Colors.DEFAULT_SKY_LIGHT_BLUE,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  textInputHeading: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 18 * 1.4,
    padding: 10,
    color: Colors.DEFAULT_SKY_BLUE,
    marginHorizontal: 20,
  },
  textInputContainer: {
    borderWidth: 1.5,
    borderColor: Colors.DEFAULT_SKY_BLUE,
    marginHorizontal: 20,
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
    color: Colors.DEFAULT_SKY_BLUE
    // lineHeight: 18 * 1.4,
  },
  headerButton: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  headerButtonText: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE,
    // paddingHorizontal: 30,
    paddingVertical: 15,
    // textAlign: 'center'
  },
  errorText: {
    color: Colors.ERROR ?? Colors.DEFAULT_DARK_RED,
    fontSize: 13,
    marginTop: 6,
    marginHorizontal: 25
  },
})