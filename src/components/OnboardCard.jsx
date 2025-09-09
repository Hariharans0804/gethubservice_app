import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts, Images } from '../constants'

const OnboardCard = ({ title, content, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode='contain' />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    )
}

export default OnboardCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    image: {
        height: 30,
        width: 60,
    },
    titleText: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
    },
    contentText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20,
    },
})