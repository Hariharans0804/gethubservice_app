import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants'
import { ScreenHeader } from '../../../components';

const ReviewsScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />
    </View>
  )
}

export default ReviewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
})