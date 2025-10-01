import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../../constants'
import { Edit, Eye, Trash2 } from 'lucide-react-native'

const CommonListing = ({ item, fields, navigation, onEdit, onDelete, setData }) => {


    return (
        <View style={styles.customerCard}>
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

                    if (!value) return null;

                    // ✅ Only show label for sku & pricePerDay
                    const showLabel = field.key === "sku" || field.key === "pricePerDay";

                    return (
                        <Text key={field.key} style={styles.fieldText}>
                            {showLabel ? (
                                <>
                                    <Text>{field.label} : </Text>
                                    {value}
                                </>
                            ) : (
                                value
                            )}
                        </Text>
                    );
                })}
            </View>

            {/* Action buttons */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
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
        width: 30,
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


{/* Render all fields dynamically */ }
{/* <View style={{ flex: 1, marginLeft: 10 }}>
                {fields.map((field) => (
                    item[field.key] ? (
                        <Text key={field.key} style={styles.fieldText}>
                            {item[field.key]}
                        </Text>
                    ) : null
                ))}
            </View> */}