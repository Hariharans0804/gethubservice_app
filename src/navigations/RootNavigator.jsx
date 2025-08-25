import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Colors } from '../constants';
import CustomDrawerContent from './CustomDrawerContent';
import { drawerList } from '../data/drawerList';
import { LoginScreen } from '../screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppDrawer = () => {

    const getAllScreens = () => {
        let screens = [];
        drawerList.forEach(item => {
            if (item.children) {
                screens.push(...item.children);
            } else {
                screens.push(item);
            }
        });
        return screens;
    }

    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    backgroundColor: Colors.DEFAULT_WHITE,
                    // width: 320,
                },
            })}
            initialRouteName='Home'
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            {/* {drawerList.map((item, index) => ( */}
            {getAllScreens().map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                />
            ))}
        </Drawer.Navigator>
    )
}


const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='App' component={AppDrawer} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})

{/* <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Features' component={FeaturesScreen} />
            <Drawer.Screen name='Templates' component={TemplatesScreen} />
            <Drawer.Screen name='Pricing' component={PricingScreen} />
            <Drawer.Screen name='Industries' component={IndustriesScreen} /> */}