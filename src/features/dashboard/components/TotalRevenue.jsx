import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from '../../../constants'

const TotalRevenue = ({ data }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.card, { borderColor: item.color }]}>
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
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        />
    )
}

export default TotalRevenue

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        marginRight: 12,
        borderWidth: 1,
        minWidth: 170,
        alignItems: 'center',
        elevation: 2,
    },
    title: {
        fontSize: 14,
        lineHeight: 14 * 1.4,
        color: '#555',
        marginBottom: 8,
        fontFamily:Fonts.POPPINS_MEDIUM
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