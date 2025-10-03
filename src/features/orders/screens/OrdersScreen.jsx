import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenHeader } from '../../../components'
import { Colors } from '../../../constants'

const OrdersScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');



  return (
    <View style={styles.container}>
      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
})