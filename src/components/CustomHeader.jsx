import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import React from 'react';
import { Colors, Fonts, Images } from '../constants';
import { getFromStorage, removeFromStorage } from '../utils/mmkvStorage';
import Toast from 'react-native-toast-message';

const CustomHeader = ({ title, navigation, isLoggedIn, setIsLoggedIn }) => {

    const handleLogout = () => {
        // clear token & user data
        removeFromStorage('token', null);
        removeFromStorage('users', null);

        // Check storage works
        console.log('Stored User:', getFromStorage('users'));
        console.log('Stored Token:', getFromStorage('token'));

        Alert.alert('Success', 'Logout successfully.');
        // navigation.navigate('App', { screen: 'Dashboard' });

        // success case
        Toast.show({
            type: 'success',
            text1: 'Logout Successful',
            text2: 'Welcome back!',
        });

        setIsLoggedIn(false);
        navigation.navigate('App', { screen: 'Home' }); // redirect to home screen
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={{ flex: 0.5 }} onPress={() => navigation.toggleDrawer()} activeOpacity={0.8}>
                {/* <Menu size={32} color={Colors.DEFAULT_WHITE} /> */}
                <Image source={Images.HAMBURGER} resizeMode="contain" style={styles.ham} />
            </TouchableOpacity>

            <Text style={[styles.headerText, { flex: 1.5 }]}>{title}</Text>

            {/* Dynamic button */}
            {isLoggedIn ? (
                <TouchableOpacity
                    style={[styles.loginButton, { flex: 1 }]}
                    activeOpacity={0.8}
                    onPress={handleLogout}
                >
                    <Text style={styles.loginText}>Logout</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={[styles.loginButton, { flex: 1 }]}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 25
    },
    headerText: {
        fontSize: 22,
        lineHeight: 22 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_WHITE
    },
    loginButton: {
        backgroundColor: Colors.DEFAULT_LIGHT_YELLOW,
        borderRadius: 8
    },
    loginText: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_SKY_BLUE,
        padding: 5,
        textAlign: 'center'
    },
    ham: {
        width: 34,
        height: 30
    },
})