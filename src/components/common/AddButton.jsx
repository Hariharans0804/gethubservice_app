// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Plus } from 'lucide-react-native'
// import { Colors, Fonts } from '../../constants'

// const AddButton = ({ handleAdd }) => {
//     return (
//         <TouchableOpacity
//             style={styles.addButton}
//             onPress={handleAdd}
//         >
//             <Plus size={20} color={Colors.DEFAULT_WHITE} />
//             <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//     )
// }

// export default AddButton

// const styles = StyleSheet.create({
//     addButton: {
//         backgroundColor: Colors.DEFAULT_SKY_BLUE,
//         borderRadius: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         // justifyContent: 'space-around',
//         padding: 10
//     },
//     addButtonText: {
//         fontSize: 16,
//         lineHeight: 16 * 1.4,
//         fontFamily: Fonts.POPPINS_SEMI_BOLD,
//         // paddingVertical: 10,
//         // paddingHorizontal:15,
//         color: Colors.DEFAULT_WHITE
//     },
// })


import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { Colors, Fonts } from '../../constants';
import { useResponsive } from '../../utils';

const AddButton = ({ handleAdd }) => {
  const R = useResponsive();

  const styles = useMemo(() => StyleSheet.create({
    addButton: {
      backgroundColor: Colors.DEFAULT_SKY_BLUE,
      borderRadius: R.radius(10),
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: R.vsize(10),
      paddingHorizontal: R.size(12),
      gap: R.space(8),
    },
    addButtonText: {
      fontSize: R.font(16),
      lineHeight: R.font(16 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      color: Colors.DEFAULT_WHITE,
    },
  }), [R.width, R.height]);

  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={handleAdd}
      activeOpacity={0.8}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Plus size={R.size(20)} color={Colors.DEFAULT_WHITE} />
      <Text style={styles.addButtonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
