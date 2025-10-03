import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenHeader } from '../../../components';

const AnalyticsScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />
    </View>
  )
}

export default AnalyticsScreen

const styles = StyleSheet.create({})