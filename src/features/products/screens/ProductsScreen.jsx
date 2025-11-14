import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../../../constants'
import { Plus, CircleX, Grid, List } from 'lucide-react-native'
import { CommonGrid, CommonListing, ScreenHeader } from '../../../components';
import Toast from 'react-native-toast-message';
import { createProductAPI, deleteProductAPI, editProductAPI, fetchCategoriesAPI, fetchProductsAPI } from '../api/productApi';
import { buildCategoryTree } from '../../../utils';
import { productsFields } from '../data/productFields';

// remove category field
const listingFields = productsFields.filter(f => f.key !== "category");


const ProductsScreen = ({ title, navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);   // 👈 list
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);   // 👈 list
  const [product, setProduct] = useState({});     // 👈 single item
  const [viewType, setViewType] = useState('list'); // 'list' or 'grid'



  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);


  const handleDelete = async (item) => {
    try {
      await deleteProductAPI(item._id);
      Toast.show({ type: "success", text1: "Product deleted successfully!" });
      fetchProducts();  // refresh list
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Delete failed!",
        text2: error.message || "Please try again.",
      });
    }
  }


  const fetchProducts = async () => {
    try {
      setLoading(true);
      const result = await fetchProductsAPI();
      console.log('productList', result?.data?.data);
      setProducts(result?.data?.data);

    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setLoading(false);
    }
  }

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const result = await fetchCategoriesAPI();
      // console.log('categoryList', result.data);

      // Build tree
      const treeOptions = buildCategoryTree(result.data.data);
      setCategories(treeOptions);

      // Assign to productsFields
      productsFields.forEach((field) => {
        if (field.key === "category") {
          field.options = treeOptions;
        }
      });

    } catch (err) {
      console.error("Failed to fetch categories:", err);
    } finally {
      setLoading(false);
    }
  };



  const handleProductSubmit = async (productData) => {
    try {
      if (productData?._id) {
        await editProductAPI(productData._id, productData);
        Toast.show({ type: "success", text1: "Category updated successfully!" });
      } else {
        await createProductAPI(productData);
        Toast.show({ type: "success", text1: "Category created successfully!" });
      }

      setProduct({});      // reset form state
      fetchProducts();     // refresh list
    } catch (error) {
      console.error("Failed to save category:", error);
      Toast.show({
        type: "error",
        text1: "Product save failed!",
        text2: "Please try again.",
      });
    }
  };


  const handleAdd = () => {
    setProduct({});
    navigation.navigate("Add", {
      fields: productsFields,
      title: 'Product',
      data: {},
      onSubmit: handleProductSubmit,
    })
  }

  // 👇 parent handlers
  const handleEdit = (product) => {
    navigation.navigate('Add', {
      fields: productsFields,
      title: 'Product',
      data: product,  // pass existing product
      onSubmit: handleProductSubmit,
    });
  };


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

      <ScreenHeader
        searchText={searchText}
        setSearchText={setSearchText}
        title={title}
        handleAdd={handleAdd}
      />

      {viewType === 'list' ? (
        <FlatList
          key={"list"}   // 👈 force re-render
          data={products}
          keyExtractor={(item, index) => (item._id || item.id || index).toString()}
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonListing
              item={item}
              fields={listingFields}
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
              onDelete={handleDelete}
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
          keyExtractor={(item, index) => (item._id || item.id || index).toString()}
          numColumns={2} // grid layout
          style={styles.flatListContainer}
          renderItem={({ item }) => (
            <CommonGrid
              item={item}
              fields={listingFields}
              navigation={navigation}
              onEdit={handleEdit}     // 👈 pass parent handlers
              onDelete={handleDelete}
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



