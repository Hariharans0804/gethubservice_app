import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Colors } from '../constants';
import CustomDrawerContent from './CustomDrawerContent';
import { drawerListAfterLogin, drawerListBeforeLogin } from '../data/drawerList';
import { LoginScreen } from '../screens/Auth';
import { CustomHeader } from '../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppDrawer = ({ isLoggedIn }) => {

    const drawerList = isLoggedIn ? drawerListAfterLogin : drawerListBeforeLogin;

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
                // headerShown: false,
                drawerStyle: {
                    backgroundColor: Colors.DEFAULT_WHITE,
                    // width: 320,
                },
            })}
            initialRouteName={isLoggedIn ? 'Dashboard' : 'Home'}
            drawerContent={(props) => <CustomDrawerContent {...props} drawerList={drawerList} />}
        >

            {getAllScreens().map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                    options={({ navigation }) => ({
                        header: () => <CustomHeader title={item.label} navigation={navigation} />
                    })}
                />
            ))}
        </Drawer.Navigator>
    )
}


const RootNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App">
                {() => <AppDrawer isLoggedIn={isLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default RootNavigator

{/* <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Features' component={FeaturesScreen} />
            <Drawer.Screen name='Templates' component={TemplatesScreen} />
            <Drawer.Screen name='Pricing' component={PricingScreen} />
            <Drawer.Screen name='Industries' component={IndustriesScreen} /> */}