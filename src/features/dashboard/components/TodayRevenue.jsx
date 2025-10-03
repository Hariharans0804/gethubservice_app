import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from '../../../constants'

const TodayRevenue = ({ data }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.card]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.amount}>{item.amount}</Text>
                <Text style={[styles.percentage, { color: item.color }]}>{item.percentage}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.scrollContainer}
        />
    )
}

export default TodayRevenue

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        margin: 8,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 2,
    },
    title: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: '#555',
        marginBottom: 8,
    },
    amount: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginBottom: 4,
    },
    percentage: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        fontFamily: Fonts.POPPINS_REGULAR,
    },
})