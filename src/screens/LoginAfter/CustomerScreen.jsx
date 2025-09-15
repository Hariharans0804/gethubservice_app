import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, } from '../../constants'
import { Plus, CircleX, Grid, List, } from 'lucide-react-native'
import { CommonGrid, CommonListing } from '../../components';

const customerFields = [
  {
    key: "name",
    label: "Customer Name",
    type: "text",
    placeholder: "Enter customer name",
    required: true,
  },
  {
    key: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter customer email",
    required: true,
  },
  {
    key: "phone",
    label: "Phone Number",
    type: "number",
    placeholder: "Enter customer phone number",
    required: true,
  },
  {
    key: "address",
    label: "Address",
    type: "textarea",
    placeholder: "Enter customer address",
    required: false,
  }
];

const CustomerScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [customers, setCustomers] = useState([]);
  const [customerFormFields, setCustomerFormFields] = useState([]);
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'


  useEffect(() => {
    setCustomerFormFields((prev) => {
      // let exists = customerFields.filter(item => item.key != 'email');
      // console.log('exists', exists);
      return [...customerFields,
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
      <Text style={styles.heading}>Customers</Text>

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

      <View style={styles.searchContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder='Search'
            placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
            selectionColor={Colors.DEFAULT_DARK_GRAY}
            style={styles.textInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText && (
            <TouchableOpacity onPress={() => setSearchText('')} activeOpacity={0.8}>
              <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Add', {
            fields: customerFormFields,
            title: 'Customer',
            setData: setCustomers,
            onSubmit: addCustomer,
          })}
        >
          <Plus size={20} color={Colors.DEFAULT_WHITE} />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

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

export default CustomerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  heading: {
    fontSize: 22,
    // lineHeight: 22 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    padding: 10,
    color: Colors.DEFAULT_SKY_BLUE
  },
  searchContainer: {
    // borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  textInputContainer: {
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between'
    gap: 2,
    width: '73%',
    borderRadius: 30,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderColor: Colors.DEFAULT_DARK_GRAY,
  },
  textInput: {
    width: '82%',
    // paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 15
  },
  addButton: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    padding: 10
  },
  addButtonText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    // paddingVertical: 10,
    // paddingHorizontal:15,
    color: Colors.DEFAULT_WHITE
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10
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

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";
// import { CircleX, Plus, Edit, Eye, Trash2 } from "lucide-react-native"; // icons
// import { Colors } from "../../constants";
// // import Colors from "../constants/Colors"; // adjust path

// const customerFields = [
//   { key: "name", label: "Customer Name", type: "text", placeholder: "Enter customer name", required: true },
//   { key: "email", label: "Email", type: "text", placeholder: "Enter customer email", required: true },
//   { key: "phone", label: "Phone Number", type: "text", placeholder: "Enter customer phone number", required: true },
//   { key: "address", label: "Address", type: "textarea", placeholder: "Enter customer address", required: false },
// ];

// const PAGE_SIZE = 10;

// const CustomerScreen = ({ navigation }) => {
//   const [searchText, setSearchText] = useState("");
//   const [customers, setCustomers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchCustomers();
//   }, [page]);

//   const fetchCustomers = useCallback(() => {
//     if (loading || !hasMore) return;
//     setLoading(true);

//     // simulate API call
//     setTimeout(() => {
//       const newData = Array.from({ length: PAGE_SIZE }, (_, i) => {
//         const id = (page - 1) * PAGE_SIZE + i + 1;
//         return {
//           id,
//           name: `Customer ${id}`,
//           email: `customer${id}@mail.com`,
//           phone: `+91 98765${id}`,
//           address: id % 2 === 0 ? `Address ${id}` : "",
//         };
//       });

//       setCustomers((prev) => [...prev, ...newData]);
//       if (newData.length < PAGE_SIZE) setHasMore(false);
//       setLoading(false);
//     }, 1200);
//   }, [page, loading, hasMore]);

//   const handleLoadMore = () => {
//     if (!loading && hasMore) setPage((prev) => prev + 1);
//   };

//   const handleDelete = (id) => {
//     setCustomers((prev) => prev.filter((c) => c.id !== id));
//   };

//   const renderCustomer = ({ item }) => (
//     <View style={styles.card}>
//       <View style={{ flex: 1 }}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.email}>{item.email}</Text>
//         <Text style={styles.phone}>{item.phone}</Text>
//         {item.address ? <Text style={styles.address}>{item.address}</Text> : null}
//       </View>
//       <View style={styles.actions}>
//         <TouchableOpacity onPress={() => navigation.navigate("ViewCustomer", { customer: item })}>
//           <Eye size={20} color={Colors.PRIMARY} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate("EditCustomer", { customer: item })}>
//           <Edit size={20} color={Colors.SECONDARY} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleDelete(item.id)}>
//           <Trash2 size={20} color={Colors.ERROR} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Customers</Text>

//       {/* Search + Add */}
//       <View style={styles.searchContainer}>
//         <View style={styles.textInputContainer}>
//           <TextInput
//             placeholder="Search"
//             placeholderTextColor={Colors.DEFAULT_DARK_GRAY}
//             style={styles.textInput}
//             value={searchText}
//             onChangeText={setSearchText}
//           />
//           {searchText && (
//             <TouchableOpacity onPress={() => setSearchText("")}>
//               <CircleX size={20} color={Colors.DEFAULT_DARK_GRAY} />
//             </TouchableOpacity>
//           )}
//         </View>

//         <TouchableOpacity
//           style={styles.addButton}
//           onPress={() =>
//             navigation.navigate("Add", {
//               fields: [...customerFields, { key: "age", label: "Age", type: "text", placeholder: "Enter age", required: false }],
//               title: "Customer",
//               setData: setCustomers,
//             })
//           }
//         >
//           <Plus size={20} color={Colors.DEFAULT_WHITE} />
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       {/* FlatList with Pagination */}
//       <FlatList
//         data={customers.filter((c) =>
//           c.name.toLowerCase().includes(searchText.toLowerCase())
//         )}
//         renderItem={renderCustomer}
//         keyExtractor={(item) => item.id.toString()}
//         onEndReached={handleLoadMore}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={
//           loading ? <ActivityIndicator size="small" color={Colors.PRIMARY} /> : null
//         }
//         ListEmptyComponent={
//           !loading && <Text style={styles.emptyText}>No customers found</Text>
//         }
//         contentContainerStyle={{ paddingBottom: 50 }}
//       />
//     </View>
//   );
// };

// export default CustomerScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: "#fff" },
//   heading: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
//   searchContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
//   textInputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f1f1f1",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   textInput: { flex: 1, paddingVertical: 8 },
//   addButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.PRIMARY,
//     borderRadius: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//   },
//   addButtonText: { color: Colors.DEFAULT_WHITE, marginLeft: 6, fontWeight: "600" },
//   card: {
//     flexDirection: "row",
//     padding: 14,
//     borderRadius: 12,
//     backgroundColor: "#fafafa",
//     marginBottom: 10,
//     elevation: 2,
//   },
//   name: { fontSize: 16, fontWeight: "600" },
//   email: { color: "#666", marginTop: 2 },
//   phone: { color: "#444", marginTop: 2 },
//   address: { color: "#888", marginTop: 2, fontStyle: "italic" },
//   actions: { flexDirection: "row", justifyContent: "space-between", width: 90 },
//   emptyText: { textAlign: "center", marginTop: 20, color: "#888" },
// });
