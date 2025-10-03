import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, } from '../../../constants'
import { Plus, CircleX, Grid, List, } from 'lucide-react-native'
import { CommonGrid, CommonListing, ScreenHeader } from '../../../components';
import { customersFields } from '../data/customerFields';

const CustomersScreen = ({ title,navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [customers, setCustomers] = useState([]);
  const [customerFormFields, setCustomerFormFields] = useState([]);
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'


  useEffect(() => {
    setCustomerFormFields((prev) => {
      // let exists = customersFields.filter(item => item.key != 'email');
      // console.log('exists', exists);
      return [...customersFields,
      {
        key: "age",
        label: "Age",
        type: "number",
        placeholder: "Enter age address",
        required: false,
      }]
    })
  }, []);

  const addCustomer = () => {
    console.log('customerData', customers);
  };


  // 👇 parent handlers
  const handleEdit = (customer) => {
    console.log('Edit customer:', customer);
    navigation.navigate('Add', {
      fields: customerFormFields,
      title: 'Customer',
      setData: setCustomers,
      onSubmit: addCustomer,
      data: customer,  // pass existing customer
    });
  }

  return (
    <View style={styles.container}>

      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />

      {/* Toggle View Button */}
      <TouchableOpacity
        style={styles.viewToggleButton}
        activeOpacity={0.8}
        onPress={() => setViewType(viewType === 'list' ? 'grid' : 'list')}
      >
        {viewType === 'list' ? (
          <>
            <Text style={styles.viewTypeText}>Grid</Text>
            <Grid size={18} color={Colors.DEFAULT_SKY_BLUE} />
          </>
        ) : (
          <>
            <Text style={styles.viewTypeText}>List</Text>
            <List size={18} color={Colors.DEFAULT_SKY_BLUE} />
          </>
        )}
      </TouchableOpacity>



      {viewType === 'list' ? (
        <FlatList
          key={"list"}   // 👈 force re-render
          data={customers}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonListing
              item={item}
              fields={customerFormFields}
              navigation={navigation}
              onEdit={handleEdit}  // 👈 pass handler
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No customers yet</Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <FlatList
          key={"grid"}   // 👈 different key 
          data={customers}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // grid layout
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonGrid
              item={item}
              fields={customerFormFields}
              navigation={navigation}
              onEdit={handleEdit}  // 👈 pass handler
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No customers yet</Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}


    </View>
  )
}

export default CustomersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_DARK_GRAY
  },
  viewToggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    gap: 6,
    top: 8,
    right: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    padding: 5,
    borderRadius: 8,
  },
  viewTypeText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_SKY_BLUE
  },
  flatListContainer: {
    // borderWidth:1,
    paddingHorizontal: 5,
  }
})