import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Colors, Fonts } from '../constants';
import { CheckCircle } from 'lucide-react-native';
import { colorCombos, themes } from '../data/createsiteData';



const ThemeColorsForm = ({ onContinue }) => {
    const [selectedTheme, setSelectedTheme] = useState('1');
    const [selectedColorCombo, setSelectedColorCombo] = useState('1');

    const renderThemeCard = ({ item }) => {
        const isSelected = selectedTheme === item.id;
        return (
            <TouchableOpacity
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => setSelectedTheme(item.id)}
                activeOpacity={0.8}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', /*borderWidth: 1*/ }}>
                    <Text style={[styles.cardTitle]}>{item.title}</Text>
                    {isSelected && <CheckCircle color={Colors.DEFAULT_SKY_BLUE} size={20} />}
                </View>
                <Text style={styles.cardDesc}>{item.desc}</Text>
                <View style={styles.colorRow}>
                    {item.colors.map((c, i) => (
                        <View key={i} style={[styles.colorDot, { backgroundColor: c }]} />
                    ))}
                </View>
            </TouchableOpacity>
        );
    };

    const renderColorCombo = ({ item }) => {
        const isSelected = selectedColorCombo === item.id;
        return (
            <TouchableOpacity
                style={[styles.colorCard, isSelected && styles.colorCardSelected]}
                onPress={() => setSelectedColorCombo(item.id)}
                activeOpacity={0.8}
            >
                <View style={styles.colorRow}>
                    <View style={[styles.colorDotLarge, { backgroundColor: item.primary }]} />
                    <View style={[styles.colorDotLarge, { backgroundColor: item.accent }]} />
                </View>
                <Text style={styles.colorComboText}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        // <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ /*borderWidth: 1,*/ borderRadius: 12, backgroundColor: Colors.DEFAULT_WHITE, width: '100%', marginVertical: 10, paddingVertical: 20, paddingHorizontal: 10 }}>


            <View style={styles.stepsContainer}>
                <Text style={styles.stepCount}>2</Text>
                <View>
                    <Text style={styles.stepText}>Step 2</Text>
                    <Text style={styles.stepDetails}>Theme & Colors</Text>
                </View>
            </View>

            <Text style={[styles.headerText, { color: Colors.DEFAULT_BLACK, fontSize: 22, fontFamily: Fonts.POPPINS_SEMI_BOLD, lineHeight: 22 * 1.4, marginVertical: 10 }]}>Choose your website style</Text>
            <Text style={[styles.headerText1, { fontSize: 16, lineHeight: 16 * 1.4, marginVertical: 5, marginHorizontal: 10 }]}>Pick a theme and colors that match your brand personality</Text>

            <Text style={styles.sectionTitle}>Website Theme</Text>
            <FlatList
                data={themes}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={renderThemeCard}
                scrollEnabled={false}
            />

            <Text style={styles.sectionTitle}>Color Combination</Text>
            <FlatList
                data={colorCombos}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderColorCombo}
            />

            <TouchableOpacity style={[styles.headerButton]} activeOpacity={0.8} onPress={onContinue}>
                <Text style={[styles.headerButtonText]}>Continue to Account Setup</Text>
            </TouchableOpacity>

        </View>
        // {/* </ScrollView> */ }
    );
};

export default ThemeColorsForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 32 * 1.4,
        fontFamily: Fonts.POPPINS_EXTRA_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    headerText1: {
        textAlign: 'center',
        fontSize: 22,
        lineHeight: 22 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_DARK_GRAY,
        marginVertical: 10
    },
    heading: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
        marginTop: 15,
    },
    subHeading: {
        fontSize: 14,
        color: Colors.DEFAULT_DARK_GRAY,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginVertical: 10,
        color: Colors.DEFAULT_BLACK,
    },
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        width: '48%',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cardSelected: {
        borderColor: Colors.DEFAULT_SKY_BLUE,
        borderWidth: 2,
    },
    cardTitle: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    cardDesc: {
        fontSize: 12,
        color: Colors.DEFAULT_DARK_GRAY,
        marginVertical: 6,
    },
    colorRow: {
        flexDirection: 'row',
        marginTop: 4,
    },
    colorDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 4,
    },
    colorCard: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
        alignItems: 'center',
    },
    colorCardSelected: {
        borderColor: Colors.DEFAULT_SKY_BLUE,
        borderWidth: 2,
    },
    colorDotLarge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 4,
    },
    colorComboText: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
    },
    stepsContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 10
    },
    stepCount: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        color: Colors.DEFAULT_WHITE,
        padding: 15,
        borderRadius: 20,
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    stepText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_SKY_BLUE
    },
    stepDetails: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK
    },
    headerButton: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 10,
        // marginVertical: 10
        marginTop: 20
    },
    headerButtonText: {
        fontSize: 20,
        lineHeight: 20 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_WHITE,
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
});
