import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import AddButton from './AddButton'
import SearchInput from './SearchInput'

const ScreenHeader = ({ hideSections, searchText, setSearchText, title }) => {
    return (
        <View style={styles.container}>
            {hideSections?.title !== true && (

                <Text style={styles.title}>{title}</Text>
            )}

            <View style={styles.searchContainer}>
                {hideSections?.search !== true && (
                    <SearchInput searchText={searchText} setSearchText={setSearchText} />
                )}
                {hideSections?.addButton !== true && (
                    <AddButton />
                )}
            </View>
        </View>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({
    title: {
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
        marginBottom: 20
    },
})