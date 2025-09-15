import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { OnboardCard } from '../../components'
import { Fonts, Colors, General } from '../../constants';
import { saveToStorage } from '../../utils/mmkvStorage';

const pageStyle = isActive =>
    isActive
        ? styles.page
        : { ...styles.page, backgroundColor: Colors.DEFAULT_DARK_GRAY };


const Pagination = ({ index }) => {
    return (
        <View style={styles.pageContainer}>
            {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
                i === index ? (
                    <View style={pageStyle(true)} key={i} />
                ) : (
                    <View style={pageStyle(false)} key={i} />
                ),
            )}
        </View>
    )
}



const OnboardScreen = ({ navigation }) => {

    const [welcomeListIndex, setWelcomeListIndex] = useState(0);
    const welcomeList = useRef();
    const onViewRef = useRef(({ changed }) => {
        setWelcomeListIndex(changed[0].index);
    });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const pageScroll = () => {
        welcomeList.current.scrollToIndex({
            index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={Colors.DEFAULT_WHITE} translucent />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    ref={welcomeList}
                    data={General.WELCOME_CONTENTS}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode='never'
                    viewabilityConfig={viewConfigRef.current}
                    onViewableItemsChanged={onViewRef.current}
                    renderItem={({ item }) => <OnboardCard {...item} />}
                />
            </View>

            <Pagination index={welcomeListIndex} />

            {welcomeListIndex === 2 ? (
                <TouchableOpacity
                    style={styles.gettingStartedButton}
                    activeOpacity={0.8}
                    onPress={() => {
                        saveToStorage('onboarded', 'true');  // mark onboarding complete
                        navigation.navigate('App', { screen: 'Home' }); // go Home after onboarding
                    }}
                >
                    <Text style={styles.gettingStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.8}
                        style={{ marginLeft: 10 }}
                        onPress={() => welcomeList.current.scrollToEnd()}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                        style={styles.button} onPress={() => pageScroll()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    welcomeListContainer: {
        height: 60,
    },
    pageContainer: {
        flexDirection: 'row',
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 90,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_BOLD,
        lineHeight: 16 * 1.4,
    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingVertical: 20,
        paddingHorizontal: 11,
        borderRadius: 32,
    },
    gettingStartedButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    gettingStartedButtonText: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
})