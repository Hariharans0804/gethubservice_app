import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const DashboardMenu = ({ data, onPress }) => {

  const renderItem = ({ item }) => {
    const IconComponent = item.icon; // lucide icon component

    return (
      <TouchableOpacity 
      activeOpacity={0.8}
        style={styles.card}
        // onPress={() => onPress && onPress(item)}
      >
        <View style={[styles.iconCircle, { borderColor: item.color,backgroundColor: item.bgColor }]}>
          <IconComponent size={28} color={item.color} />
        </View>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    />
  )
}

export default DashboardMenu

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
  },
  card: {
    alignItems: 'center',
    marginRight: 20,
    // borderWidth: 1,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
})
