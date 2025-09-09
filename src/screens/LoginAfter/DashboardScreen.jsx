import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { CircleX, Plus } from 'lucide-react-native';
import { getFromStorage } from '../../utils/mmkvStorage';
import { fetchSidebarData } from '../../api/getApi';

const DashboardScreen = () => {

    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getFromStorage("users");
        if (userData) {
            setUser(userData);
        }
        fetchSidebarData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products</Text>

            <View style={styles.searchContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
                        selectionColor={Colors.DEFAULT_DARK_GRAY}
                        style={styles.textInput}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    {searchText && (
                        <TouchableOpacity onPress={() => setSearchText('')} activeOpacity={0.8}>
                            <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Plus size={20} color={Colors.DEFAULT_WHITE} />
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {user ? (
                <>
                    <Text style={{ fontSize: 18 }}>Welcome {user.userName} 👋</Text>
                    <Text>Email: {user.userEmail}</Text>
                    <Text>Role: {user.userRole}</Text>
                </>
            ) : (
                <Text>No user data found</Text>
            )}

        </View>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE
    },
    heading: {
        fontSize: 22,
        // lineHeight: 22 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        padding: 10,
        color: Colors.DEFAULT_SKY_BLUE
    },
    searchContainer: {
        // borderWidth: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInputContainer: {
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between'
        gap: 10,
        width: '78%',
        borderRadius: 30,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderColor: Colors.DEFAULT_DARK_GRAY,
    },
    textInput: {
        width: '82%',
        // paddingHorizontal: 10,
        fontSize: 18,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 15
    },
    addButton: {
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        padding: 10
    },
    addButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        // paddingVertical: 10,
        // paddingHorizontal:15,
        color: Colors.DEFAULT_WHITE
    }
})