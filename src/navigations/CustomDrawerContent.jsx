import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Colors, Fonts, Images } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

const CustomDrawerContent = (props) => {

    const { routeNames, index } = props.state;
    const focusedRoute = routeNames[index];
    const { drawerList } = props; // 🔑 pass drawerList dynamically

    const [expanded, setExpanded] = useState({}); // store expansion states

    const toggleExpand = (label) => {
        setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    };

    return (
        <>
            <DrawerContentScrollView {...props}>
                {/* Custom Header */}
                <View style={styles.loginContainer}>
                    <Image source={Images.MAN} resizeMode="contain" style={styles.image} />
                    <View style={styles.loginTextContainer}>
                        <Text numberOfLines={1} style={styles.loginTextName}>Jhon Doe</Text>
                        <Text style={styles.loginTextRole}>Admin</Text>
                    </View>
                </View>

                {/* Drawer Items */}
                {drawerList.map((item, i) => {
                    if (item.children) {
                        return (
                            <View key={i}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.parentItem}
                                    onPress={() => toggleExpand(item.label)}
                                >
                                    <item.icon size={30} color={Colors.DEFAULT_SKY_BLUE} />
                                    <Text style={styles.parentText}>{item.label}</Text>
                                    {expanded[item.label]
                                        ? <ChevronUp size={20} color={Colors.DEFAULT_SKY_BLUE} />
                                        : <ChevronDown size={20} color={Colors.DEFAULT_SKY_BLUE} />}
                                </TouchableOpacity>

                                {expanded[item.label] &&
                                    item.children.map((child, ci) => (
                                        <DrawerItem
                                            key={ci}
                                            label={child.label}
                                            onPress={() => props.navigation.navigate(child.route)}
                                            icon={() =>
                                                <child.icon
                                                    size={26}
                                                    color={focusedRoute === child.route ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE}
                                                />
                                            }
                                            focused={focusedRoute === child.route}
                                            activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                                            activeTintColor={Colors.DEFAULT_WHITE}
                                            inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                                            labelStyle={styles.childLabel}
                                        />
                                    ))}
                            </View>
                        );
                    }

                    return (
                        <DrawerItem
                            key={i}
                            label={item.label}
                            onPress={() => props.navigation.navigate(item.route)}
                            icon={() =>
                                <item.icon
                                    size={30}
                                    color={focusedRoute === item.route ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE}
                                />
                            }
                            focused={focusedRoute === item.route}
                            activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                            activeTintColor={Colors.DEFAULT_WHITE}
                            inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                            labelStyle={styles.childLabel}
                        />
                    );
                })}

            </DrawerContentScrollView>
        </>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // width: Display.setWidth(75),
        width: '100%',
        // marginVertical: 10,
        marginBottom: 10,
        paddingVertical: 10,
        // borderWidth: 1,
    },
    loginTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        // borderWidth:1
    },
    loginTextName: {
        fontSize: 24,
        lineHeight: 24 * 1.4,
        // textAlign: 'center',
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_SKY_BLUE,
        textTransform: 'capitalize'
        // marginBottom: 10
    },
    loginTextRole: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_DARK_RED,
    },
    image: {
        // width: Display.setWidth(20),
        // height: Display.setHeight(7),
        width: 100,
        height: 80,
    },
    parentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        // borderWidth:1,
        // marginTop:5
    },
    parentText: {
        flex: 1,
        fontSize: 20,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: 20,
        color: Colors.DEFAULT_SKY_BLUE,
        // marginTop:5
        // paddingTop:5
    },
    childLabel: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: 10,
    },
})




{/* {drawerList.map((item, i) => (
                    <DrawerItem
                        key={i}
                        label={item.label}
                        onPress={() => props.navigation.navigate(item.route)}
                        icon={() =>
                            <item.icon
                                size={30}
                                color={focusedRoute === item.route ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE}
                            />
                        }
                        focused={focusedRoute === item.route}
                        activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                        activeTintColor={Colors.DEFAULT_WHITE}
                        inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                        labelStyle={{
                            fontSize: 20,
                            lineHeight: 28,
                            fontFamily: Fonts.POPPINS_SEMI_BOLD,
                        }}
                    />
                ))} */}


{/* <DrawerItem
                    label="Home"
                    onPress={() => props.navigation.navigate('Home')}
                    icon={() =>
                        <Home size={30} color={focusedRoute === 'Home' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'Home'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem>
                <DrawerItem
                    label="About"
                    onPress={() => props.navigation.navigate('About')}
                    icon={() =>
                        <Anvil size={30} color={focusedRoute === 'About' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'About'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem>
                <DrawerItem
                    label="Features"
                    onPress={() => props.navigation.navigate('Features')}
                    icon={() =>
                        <ShieldPlus size={30} color={focusedRoute === 'Features' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'Features'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem>
                <DrawerItem
                    label="Templates"
                    onPress={() => props.navigation.navigate('Templates')}
                    icon={() =>
                        <Layout size={30} color={focusedRoute === 'Templates' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'Templates'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem>
                <DrawerItem
                    label="Pricing"
                    onPress={() => props.navigation.navigate('Pricing')}
                    icon={() =>
                        <Gem size={30} color={focusedRoute === 'Pricing' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'Pricing'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem>
                <DrawerItem
                    label="Industries"
                    onPress={() => props.navigation.navigate('Industries')}
                    icon={() =>
                        <Factory size={30} color={focusedRoute === 'Industries' ? Colors.DEFAULT_WHITE : Colors.DEFAULT_SKY_BLUE} />
                    }
                    focused={focusedRoute === 'Industries'}
                    activeBackgroundColor={Colors.DEFAULT_SKY_BLUE}
                    activeTintColor={Colors.DEFAULT_WHITE}
                    inactiveTintColor={Colors.DEFAULT_SKY_BLUE}
                    labelStyle={{ fontSize: 20, lineHeight: 20 * 1.4, fontFamily: Fonts.POPPINS_SEMI_BOLD, }}
                >
                </DrawerItem> */}