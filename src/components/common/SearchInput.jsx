import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import { CircleX } from 'lucide-react-native'

const SearchInput = ({ searchText, setSearchText }) => {
    return (
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
    )
}

export default SearchInput

const styles = StyleSheet.create({
    textInputContainer: {
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between'
        gap: 2,
        width: '73%',
        borderRadius: 30,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderColor: Colors.DEFAULT_DARK_GRAY,
    },
    textInput: {
        width: '82%',
        // paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 15
    },
})