import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Colors } from '../constants';
import CustomDrawerContent from './CustomDrawerContent';
import { CustomHeader } from '../components';
import { getFromStorage } from '../utils/mmkvStorage';
import { LoginScreen, SplashScreen } from '../features/auth';
import { AddScreen, DynamicScreen } from '../features/core';
import { fetchSidebarData } from '../features/core/api/coreApi';
import { CreateSiteScreen } from '../features/createSite';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppDrawer = ({ isLoggedIn, setIsLoggedIn }) => {
    const [sidebarData, setSidebarData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSidebarData = async () => {
            setIsLoading(true);
            if (isLoggedIn) {
                try {
                    const res  = await fetchSidebarData();  // res = { success, data }
                    console.log("Parsed sidebar:", res?.data?.sidebar?.sections);

                    if (res?.success && res?.data?.sidebar?.sections?.length) {
                        setSidebarData(res?.data.sidebar.sections);
                    } else {
                        setSidebarData([]);
                    }

                } catch (error) {
                    console.error('Error fetching sidebar data:', error);
                     setSidebarData([]);
                }
            }
            setIsLoading(false);
        };
        getSidebarData();
    }, [isLoggedIn]);

    // const drawerList = isLoggedIn ? (sidebarData || []) : drawerListBeforeLogin;
    const drawerList = isLoggedIn && (sidebarData || []);

    const transformApiData = (item) => {
        return {
            ...item,
            route: item.route || item.id, // Use route if available, fallback to id
            component: DynamicScreen, // Use our dynamic screen component
            icon: item.icon // Keep the original icon string
        };
    };

    const getAllScreens = () => {
        let screens = [];
        drawerList?.forEach(item => {
            if (item.children) {
                screens.push(...item.children.map(transformApiData));
            } else {
                screens.push(transformApiData(item));
            }
        });
        return screens;
    }

    // Get all available screens
    const screens = getAllScreens();
    const initialRouteName = screens[0]?.route || 'Home';

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.DEFAULT_SKY_BLUE} />
        </View>;
    }

    if (!drawerList || drawerList.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={Colors.DEFAULT_SKY_BLUE} />
            </View>
        );
    }

    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerStyle: {
                    backgroundColor: Colors.DEFAULT_WHITE,
                },
            })}
            initialRouteName={screens[0]?.route || 'home'}
            drawerContent={(props) => <CustomDrawerContent {...props} drawerList={drawerList} />}
        >
            {screens.map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.route || item.id}
                    component={item.component}
                    initialParams={{
                        screenId: item.id,
                        title: item.label,
                        description: item.description
                    }}
                    options={({ navigation }) => ({
                        header: () => (
                            <CustomHeader
                                title={item.label}
                                navigation={navigation}
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        ),
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
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Stack.Screen name="App">
                    {() => <AppDrawer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            ) : (
                <Stack.Screen name="Login">
                    {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            )}
            <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: true }} />
            <Stack.Screen name="CreateSite" component={CreateSiteScreen} options={{ headerShown: true }} />
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