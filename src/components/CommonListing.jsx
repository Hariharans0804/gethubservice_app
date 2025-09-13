import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../constants'
import { Edit, Eye, Trash2 } from 'lucide-react-native'

const CommonListing = ({ item, fields, navigation, onEdit }) => {
    return (
        <View style={styles.customerCard}>
            <Image source={Images.PROFILE1} resizeMode='contain' style={styles.image} />

            {/* Render all fields dynamically */}
            <View style={{ flex: 1, marginLeft: 10 }}>
                {fields.map((field) => (
                    item[field.key] ? (
                        <Text key={field.key} style={styles.fieldText}>
                            {/* <Text style={{ fontWeight: "600" }}>{field.label}: </Text> */}
                            {item[field.key]}
                        </Text>
                    ) : null
                ))}
            </View>

            {/* Action buttons */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
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

export default CommonListing

const styles = StyleSheet.create({
    customerCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        borderRadius: 12,
        backgroundColor: "#fafafa",
        marginBottom: 10,
        elevation: 2,
        borderWidth: 1,
        marginHorizontal: 10,
    },
    image: {
        width: 40,
        height: 40,
    },
    customerName: { fontSize: 16, fontWeight: "600" },
    customerEmail: { color: "#666", marginTop: 2 },
    customerPhone: { color: "#444", marginTop: 2 },
    customerAddress: { color: "#888", marginTop: 2, fontStyle: "italic" },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 90
    },
    emptyText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_DARK_GRAY
    },
})

//    <View style={{ flex: 1, marginLeft: 10 }}>
//         <Text style={styles.customerName}>{item.name}</Text>
//         <Text style={styles.customerEmail}>{item.email}</Text>
//         <Text style={styles.customerPhone}>{item.phone}</Text>
//         {item.address ? (
//             <Text style={styles.customerAddress}>{item.address}</Text>
//         ) : null}
//     </View>