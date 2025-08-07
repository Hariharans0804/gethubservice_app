import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AboutScreen, FeaturesScreen, HomeScreen, PricingScreen, TemplatesScreen } from '../screens';

const RootNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Features' component={FeaturesScreen} />
            <Drawer.Screen name='Templates' component={TemplatesScreen} />
            <Drawer.Screen name='Pricing' component={PricingScreen} />
        </Drawer.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})