import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants'
import { ScreenHeader } from '../../../components';

const DocumentsScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />
    </View>
  )
}

export default DocumentsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
})