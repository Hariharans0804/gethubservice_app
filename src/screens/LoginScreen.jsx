import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
          <Text>hello world!</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE
    }
})