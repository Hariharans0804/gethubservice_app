import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Plus } from 'lucide-react-native'
import { Colors, Fonts } from '../../constants'

const AddButton = () => {
    return (
        <TouchableOpacity
            style={styles.addButton}
            // onPress={handleAdd}
        >
            <Plus size={20} color={Colors.DEFAULT_WHITE} />
            <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        padding: 10
    },
    addButtonText: {
        fontSize: 16,
        lineHeight: 16 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        // paddingVertical: 10,
        // paddingHorizontal:15,
        color: Colors.DEFAULT_WHITE
    },
})