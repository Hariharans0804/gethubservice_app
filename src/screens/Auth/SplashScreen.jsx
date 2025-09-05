import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../../constants'
import { getFromStorage } from '../../utils/mmkvStorage'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const loginUser = getFromStorage('users');
        // Simulate a short delay for the splash screen
        const timer = setTimeout(() => {
            if (loginUser) {
                navigation.navigate('App', { screen: 'Dashboard' });
            } else {
                navigation.navigate('App', { screen: 'Home' });
            }
        }, 2000); // Adjust splash delay as needed

        return () => clearTimeout(timer);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.DEFAULT_GREEN} translucent />
            <Image source={Images.logo} resizeMode='contain' style={styles.image} />
            <Text style={styles.titleText}>FooDelivery</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
        width: 60,
        height: 30,
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_LIGHT,
    },
})