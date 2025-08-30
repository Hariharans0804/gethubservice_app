import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '../constants';
import { Menu } from 'lucide-react-native';

const CustomHeader = ({ title, navigation }) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={{ flex: 0.5 }} onPress={() => navigation.toggleDrawer()} activeOpacity={0.8}>
                <Menu size={32} color={Colors.DEFAULT_WHITE} />
            </TouchableOpacity>

            <Text style={[styles.headerText, { flex: 1.5 }]}>{title}</Text>

            <TouchableOpacity style={[styles.loginButton, { flex: 1 }]} activeOpacity={0.8} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
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
    }
})
