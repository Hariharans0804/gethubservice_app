import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Colors, Fonts } from '../../../constants';
import { CircleX, Cone, Grid, List, Plus } from 'lucide-react-native';
import Toast from 'react-native-toast-message';
import { createCategoryAPI, deleteCategoryAPI, editCategoryAPI, fetchCategoriesAPI } from '../api/categoryApi';
import CategoriesListing from '../components/CategoriesListing';
import { buildCategoryTree } from '../../../utils';
import { categoriesFields } from '../data/categoryFields';
import { ScreenHeader } from '../../../components';



const CategoriesScreen = ({ title, navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);   // 👈 list
    const [category, setCategory] = useState({});       // 👈 single item


    const handleDelete = async (item) => {
        try {
            await deleteCategoryAPI(item._id);
            Toast.show({ type: "success", text1: "Category deleted successfully!" });
            fetchCategories(); // refresh list
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Delete failed!",
                text2: error.message || "Please try again.",
            });
        }
    };


    useEffect(() => {
        fetchCategories();
    }, []);


    const fetchCategories = async () => {
        try {
            setLoading(true);
            const result = await fetchCategoriesAPI();
            console.log('result', result);
            if (result.success) {
                const tree = buildCategoryTree(result.data.data);
                console.log('tree', tree);

                setCategories(tree);
            }
        } catch (err) {
            console.error("Failed to fetch categories:", err);
        } finally {
            setLoading(false);
        }
    };


    // 👇 whenever categories OR category changes, rebuild parent dropdown
    useEffect(() => {
        if (categories.length > 0) {

        }
    }, [categories, category]);

    const handleCategorySubmit = async (formData) => {
        try {

            // prevent category being its own parent
            if (formData._id && formData.parent === formData._id) {
                Toast.show({
                    type: "error",
                    text1: "Invalid Parent",
                    text2: "Category cannot be its own parent",
                });
                return; // stop submit
            }


            if (formData?._id) {
                await editCategoryAPI(formData._id, formData);
                Toast.show({ type: "success", text1: "Category updated successfully!" });
            } else {
                await createCategoryAPI(formData);
                Toast.show({ type: "success", text1: "Category created successfully!" });
            }

            setCategory({});      // reset form state
            fetchCategories();    // refresh list
        } catch (error) {
            console.error("Failed to save category:", error);
            Toast.show({
                type: "error",
                text1: "Category save failed!",
                text2: "Please try again.",
            });
        }
    };



    const handleGetParentCategory = (item = null) => {
        const tree = categories.filter((c) => c._id !== item?._id); // exclude self

        return categoriesFields.map((field) =>
            field.key === "parent"
                ? { ...field, type: "treeDropdown", options: tree } // 👈 full tree pass
                : field
        );
    };


    const handleAdd = () => {
        setCategory({});
        navigation.navigate("Add", {
            fields: handleGetParentCategory(),
            title: "Category",
            data: {}, // empty object
            onSubmit: handleCategorySubmit,
        });
    };

    const handleEdit = (item) => {
        navigation.navigate("Add", {
            fields: handleGetParentCategory(item),
            title: "Category",
            data: item, // single category object
            onSubmit: handleCategorySubmit,
        });
    };


    return (
        <View style={styles.container}>

            <ScreenHeader searchText={searchText} setSearchText={setSearchText} title={title} />

            <FlatList
                key={"list"}   // 👈 force re-render
                data={categories}
                keyExtractor={(item, index) => (item._id || item.id || index).toString()}
                style={styles.flatListContainer}
                renderItem={({ item }) => (
                    <CategoriesListing
                        item={item}
                        fields={categoriesFields}   // 👈 pass fields
                        navigation={navigation}
                        setData={setCategory}
                        onEdit={handleEdit}     // 👈 pass parent handlers
                        onDelete={handleDelete}     // 👈 pass parent handlers
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No categories yet</Text>
                }
                contentContainerStyle={{ paddingBottom: 20 }}
            />

        </View>
    )
}

export default CategoriesScreen

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


