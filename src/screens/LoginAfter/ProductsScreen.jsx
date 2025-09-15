import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { Plus, CircleX, Grid, List } from 'lucide-react-native'
import { CommonGrid, CommonListing } from '../../components';

// product NativeModules, sku, category, price, priceperday

const productFields = [
  {
    key: "name",
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
    required: true,
  }, {
    key: "price",
    label: "Product Price",
    type: "number",
    placeholder: "Enter product price",
    required: true,
  }, {
    key: "description",
    label: "Product Description",
    type: "textarea",
    placeholder: "Enter product description",
    required: false,
  }
];

const ProductsScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [productFormFields, setProductFormFields] = useState([]);
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    setProductFormFields((prev) => {
      // let exists = productFields.filter(item => item.key != 'price');
      // console.log('exists', exists);
      return [...productFields,
      {
        key: "quantity",
        label: "Product Quantity",
        type: "number",
        placeholder: "Enter quantity",
        required: false,
      }]
    })
  }, []);

  const addProduct = () => {
    console.log('Products after addition:', products);
  };

  // 👇 parent handlers
  const handleEdit = (product) => {
    console.log('Edit product:', product);
    navigation.navigate('Add', {
      fields: productFormFields,
      title: 'Product',
      setData: setProducts,
      onSubmit: addProduct,
      data: product,  // pass existing product
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

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
            fields: productFormFields,
            title: 'Product',
            setData: setProducts,
            onSubmit: addProduct,
          })}
        >
          <Plus size={20} color={Colors.DEFAULT_WHITE} />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {viewType === 'list' ? (
        <FlatList
          key={"list"}   // 👈 force re-render
          data={products}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonListing
              item={item}
              fields={productFormFields}
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No products yet</Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <FlatList
          key={"grid"}   // 👈 different key 
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // grid layout
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonGrid
              item={item}
              fields={productFormFields}
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No products yet</Text>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

    </View>
  )
}

export default ProductsScreen

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
  productCard: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_GRAY,
  },
  productName: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_SKY_BLUE,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.DEFAULT_DARK_GRAY,
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