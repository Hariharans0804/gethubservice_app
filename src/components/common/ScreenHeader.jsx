// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Colors, Fonts } from '../../constants'
// import AddButton from './AddButton'
// import SearchInput from './SearchInput'

// const ScreenHeader = ({ handleAdd, hideSections, searchText, setSearchText, title }) => {
//     console.log('handleAdd', handleAdd);
    
//     return (
//         <View style={styles.container}>
//             {hideSections?.title !== true && (
//                 <Text style={styles.title}>{title}</Text>
//             )}

//             <View style={styles.searchContainer}>
//                 {hideSections?.search !== true && (
//                     <SearchInput searchText={searchText} setSearchText={setSearchText} />
//                 )}
//                 {hideSections?.addButton !== true && (
//                     <AddButton handleAdd={ handleAdd } />
//                 )}
//             </View>
//         </View>
//     )
// }

// export default ScreenHeader

// const styles = StyleSheet.create({
//     title: {
//         fontSize: 22,
//         // lineHeight: 22 * 1.4,
//         fontFamily: Fonts.POPPINS_SEMI_BOLD,
//         padding: 10,
//         color: Colors.DEFAULT_SKY_BLUE
//     },
//     searchContainer: {
//         // borderWidth: 1,
//         marginHorizontal: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 20
//     },
// })


import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts } from '../../constants';
import AddButton from './AddButton';
import SearchInput from './SearchInput';
import { useResponsive } from '../../utils';

const ScreenHeader = ({ handleAdd, hideSections, searchText, setSearchText, title }) => {
  const R = useResponsive();

  const styles = useMemo(() => StyleSheet.create({
    container: { paddingTop: R.space(10) },
    title: {
      fontSize: R.font(22),
      // lineHeight: R.font(22 * 1.3),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      padding: R.space(10),
      color: Colors.DEFAULT_SKY_BLUE,
    },
    searchContainer: {
      marginHorizontal: R.space(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: R.space(20),
      gap: R.space(10),
    },
  }), [R.width, R.height]);

  return (
    <View style={styles.container}>
      {hideSections?.title !== true && <Text style={styles.title}>{title}</Text>}
      <View style={styles.searchContainer}>
        {hideSections?.search !== true && (
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
        )}
        {hideSections?.addButton !== true && (
          <AddButton handleAdd={handleAdd} />
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;
