import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../constants'
import { Edit, Eye, Trash2 } from 'lucide-react-native'

const CommonGrid = ({ item, fields, navigation, onEdit }) => {
    return (
        <View style={styles.gridCard}>
            <Image source={Images.PROFILE1} resizeMode='contain' style={styles.image} />

            {/* Render all fields dynamically */}
            <View style={{ flex: 1, marginLeft: 5, marginVertical: 5 }}>
                {fields.map((field) => (
                    item[field.key] ? (
                        <Text key={field.key} style={styles.gridText}>
                            {item[field.key]}
                        </Text>
                    ) : null
                ))}
            </View>

            {/* Action buttons */}
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.iconButton}
                >
                    <Eye size={18} color={Colors.PRIMARY} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => onEdit(item)}>
                    <Edit size={18} color={Colors.SECONDARY} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Trash2 size={18} color={Colors.ERROR} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CommonGrid

const styles = StyleSheet.create({
    gridCard: {
        borderWidth: 1,
        // flex: 1,
        width: '45%',
        margin: 8,
        padding: 10,
        borderRadius: 12,
    },
    image: {
        width: '100%',
        height: 40,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 90,
        marginTop: 5,
    },
})