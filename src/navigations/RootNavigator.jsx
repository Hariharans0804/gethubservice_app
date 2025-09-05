import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Colors } from '../constants';
import CustomDrawerContent from './CustomDrawerContent';
import { drawerListAfterLogin, drawerListBeforeLogin } from '../data/drawerList';
import { LoginScreen } from '../screens/Auth';
import { CustomHeader } from '../components';
import { getFromStorage } from '../utils/mmkvStorage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppDrawer = ({ isLoggedIn, setIsLoggedIn }) => {

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
                        header: () => <CustomHeader
                            title={item.label}
                            navigation={navigation}
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    })}
                />
            ))}
        </Drawer.Navigator>
    )
}


const RootNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true); // show splash until check is done

    useEffect(() => {
        const checkLogin = async () => {
            const token = getFromStorage('token');   // read from MMKV
            if (token) {
                setIsLoggedIn(true);
            }
            setLoading(false);
        };

        checkLogin();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App">
                {() => <AppDrawer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
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