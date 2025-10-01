import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductsScreen } from '../../products';
import { CategoriesScreen } from '../../categories';
import { Colors, Fonts } from '../../../constants';
import { ServicesScreen } from '../../services';
import { CustomersScreen } from '../../customers';
import { EmployeesScreen } from '../../employees';
import { AppointmentsScreen } from '../../appointments';

const DynamicScreen = ({ route, navigation }) => {

  const { screenId, title, description } = route.params || {};
  console.log('DynamicScreen route params:', route.params);

  return (
    <View style={styles.container}>

      {/* <Text style={styles.title}>{title} </Text>
            {description && (
                <Text style={styles.description}>{description}</Text>
            )} */}

      {screenId === 'products' && (
        <ProductsScreen screenId={screenId} navigation={navigation} />
      )}

      {screenId === 'categories' && (
        <CategoriesScreen screenId={screenId} navigation={navigation} />
      )}

      {screenId === 'menu-management' && (
        <ServicesScreen screenId={screenId} navigation={navigation} />
      )}

      {screenId === 'staff' && (
        <EmployeesScreen screenId={screenId} navigation={navigation} />
      )}

      {screenId === 'reservations' && (
        <AppointmentsScreen screenId={screenId} navigation={navigation} />
      )}

      {screenId === 'customers' && (
        <CustomersScreen screenId={screenId} navigation={navigation} />
      )}



    </View>
  )
}

export default DynamicScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_BLACK,
  },
})