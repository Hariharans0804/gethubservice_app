// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Colors, Fonts } from '../../constants'
// import { CircleX } from 'lucide-react-native'

// const SearchInput = ({ searchText, setSearchText }) => {
//     return (
//         <View style={styles.textInputContainer}>
//             <TextInput
//                 placeholder='Search'
//                 placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
//                 selectionColor={Colors.DEFAULT_DARK_GRAY}
//                 style={styles.textInput}
//                 value={searchText}
//                 onChangeText={setSearchText}
//             />
//             {searchText && (
//                 <TouchableOpacity onPress={() => setSearchText('')} activeOpacity={0.8}>
//                     <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
//                 </TouchableOpacity>
//             )}
//         </View>
//     )
// }

// export default SearchInput

// const styles = StyleSheet.create({
//     textInputContainer: {
//         borderWidth: 1.5,
//         flexDirection: 'row',
//         alignItems: 'center',
//         // justifyContent:'space-between'
//         gap: 2,
//         width: '73%',
//         borderRadius: 30,
//         backgroundColor: Colors.DEFAULT_WHITE,
//         borderColor: Colors.DEFAULT_DARK_GRAY,
//     },
//     textInput: {
//         width: '82%',
//         // paddingHorizontal: 10,
//         fontSize: 16,
//         fontFamily: Fonts.POPPINS_MEDIUM,
//         marginLeft: 15
//     },
// })

import React, { useMemo } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../../constants';
import { CircleX } from 'lucide-react-native';
import { useResponsive } from '../../utils';

const SearchInput = ({ searchText, setSearchText }) => {
  const R = useResponsive();

  const styles = useMemo(() => StyleSheet.create({
    textInputContainer: {
      borderWidth: 1.5,
      flexDirection: 'row',
      alignItems: 'center',
      gap: R.space(6),
      flex: 1, // better than width:'73%'
      borderRadius: R.radius(30),
      backgroundColor: Colors.DEFAULT_WHITE,
      borderColor: Colors.DEFAULT_DARK_GRAY,
      paddingVertical: R.vsize(8),
      paddingHorizontal: R.size(12),
    },
    textInput: {
      flex: 1,
      fontSize: R.font(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginLeft: R.space(3),
      paddingVertical: 0,
    },
    icon: { marginRight: R.space(2) },
  }), [R.width, R.height]);

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
        selectionColor={Colors.DEFAULT_DARK_GRAY}
        style={styles.textInput}
        value={searchText}
        onChangeText={setSearchText}
        allowFontScaling
      />
      {searchText ? (
        <TouchableOpacity
          onPress={() => setSearchText('')}
          activeOpacity={0.8}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <CircleX size={R.size(20)} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchInput;
