import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../constants'
import { Edit, Eye, Trash2 } from 'lucide-react-native'

const CommonGrid = ({ item, fields, navigation, onEdit, onDelete, setData }) => {



    return (
        <View style={styles.gridCard}>
            <Image source={Images.PROFILE1} resizeMode='contain' style={styles.image} />

            {/* Render all fields dynamically */}
            <View style={{ flex: 1, marginLeft: 10 }}>
                {fields.map((field) => {
                    let value = item[field.key];

                    // special handling for parent field
                    if (field.key === "parent") {
                        if (value && typeof value === "object") {
                            value = value.name || value._id;
                        } else if (!value) {
                            value = "—"; // 👈 safe fallback if null/undefined
                        }
                    }

                    // fallback: convert objects to string safely
                    if (typeof value === "object") {
                        value = JSON.stringify(value);
                    }

                    return value ? (
                        <Text key={field.key} style={styles.fieldText}>
                            {/* <Text style={{ fontWeight: "600" }}>{field.label}: </Text> */}
                            {value}
                        </Text>
                    ) : null;
                })}
            </View>

            {/* Action buttons */}
            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.iconButton}
                >
                    <Eye size={18} color={Colors.PRIMARY} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => {
                    // console.log('setData', setData());
                    // setData(item);
                    onEdit(item);
                }}>
                    <Edit size={18} color={Colors.SECONDARY} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => onDelete(item)}>
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
        padding: 8,
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


{/* Render all fields dynamically */ }
// <View style={{ flex: 1, marginLeft: 5, marginVertical: 5 }}>
//     {fields.map((field) => (
//         item[field.key] ? (
//             <Text key={field.key} style={styles.gridText}>
//                 {item[field.key]}
//             </Text>
//         ) : null
//     ))}
// </View>