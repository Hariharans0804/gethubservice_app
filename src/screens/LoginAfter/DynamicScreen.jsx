import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import ProductsScreen from './ProductsScreen';

const DynamicScreen = ({ route }) => {
    const { screenId, title, description } = route.params || {};
    console.log('DynamicScreen route params:', route.params);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} </Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )}

            {screenId == 'menu-management' && (
                <ProductsScreen screenId={screenId} />  
            )}

        </View>
    )
}

export default DynamicScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
