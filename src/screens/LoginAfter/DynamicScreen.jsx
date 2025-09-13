import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import ProductsScreen from './ProductsScreen';
import CustomerScreen from './CustomerScreen';
import EmployeesScreen from './EmployeesScreen';
import ServicesScreen from './ServicesScreen';
import AppointmentsScreen from './AppointmentsScreen';

const DynamicScreen = ({ route, navigation }) => {

    const { screenId, title, description } = route.params || {};
    console.log('DynamicScreen route params:', route.params);

    return (
        <View style={styles.container}>

            {/* <Text style={styles.title}>{title} </Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )} */}

            {screenId === 'menu-management' && (
                <ProductsScreen screenId={screenId} navigation={navigation} />
            )}

            {screenId === 'customers' && (
                <CustomerScreen screenId={screenId} navigation={navigation} />
            )}

            {screenId === 'staff' && (
                <EmployeesScreen screenId={screenId} navigation={navigation} />
            )}

            {screenId === 'services' && (
                <ServicesScreen screenId={screenId} navigation={navigation} />
            )}
            
            {screenId === 'appointments' && (
                <AppointmentsScreen screenId={screenId} navigation={navigation} />
            )}
            
            {screenId === 'analytics' && (
                <ProductsScreen screenId={screenId} navigation={navigation} />
            )}


        </View>
    )
}

export default DynamicScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    title: {
        fontSize: 24,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_SKY_BLUE,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_REGULAR,
        color: Colors.DEFAULT_BLACK,
    },
})
