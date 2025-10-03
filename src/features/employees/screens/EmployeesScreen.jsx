import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, } from '../../../constants'
import { Plus, CircleX, Grid, List, } from 'lucide-react-native'
import { CommonGrid, CommonListing, ScreenHeader } from '../../../components';
import { employeesFields } from '../data/employeeFields';



const EmployeesScreen = ({ title, navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [employees, setEmployees] = useState([]);
  const [employeeFormFields, setEmployeeFormFields] = useState([]);
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    setEmployeeFormFields((prev) => {
      // let exists = employeesFields.filter(item => item.key != 'email');
      // console.log('exists', exists);
      return [...employeesFields,
      {
        key: "role",
        label: "Role",
        type: "text",
        placeholder: "Enter the role",
        required: false,
      }]
    })
  }, []);

  const addEmployee = () => {
    console.log('employeeData', employees);
  };

  // 👇 parent handlers
  const handleEdit = (employee) => {
    console.log('Edit employee:', employee);
    navigation.navigate('Add', {
      fields: employeeFormFields,
      title: 'Employee',
      setData: setEmployees,
      onSubmit: addEmployee,
      data: employee,  // pass existing employee
    });
  }


  return (
    <View style={styles.container}>

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

      <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />

      {viewType === 'list' ? (
        <FlatList
          key={"list"}   // 👈 force re-render
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonListing
              item={item}
              fields={employeeFormFields}   // 👈 pass fields
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No employees yet</Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <FlatList
          key={"grid"}   //   👈 different key 
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonGrid
              item={item}
              fields={employeeFormFields}   // 👈 pass field 
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
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

export default EmployeesScreen

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