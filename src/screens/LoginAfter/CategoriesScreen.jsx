import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts } from '../../constants';
import { CircleX, Cone, Grid, List, Plus } from 'lucide-react-native';
import { CommonGrid, CommonListing } from '../../components';
import { createCategoriesAPI, editCategoriesAPI } from '../../api/postApi';
import Toast from 'react-native-toast-message';
import { fetchCategoriesAPI } from '../../api/getApi';

const categoriesFields = [
    {
        key: "name",
        label: "Category Name",
        type: "text",
        placeholder: "Enter category name",
        required: true,
    },
    {
        key: "type",
        label: "Category Type",
        type: "dropdown",
        options: [
            { label: "Product", value: "product" },
            { label: "Service", value: "service" },
            { label: "Both", value: "both" },
        ],
        placeholder: "Select category type",
        required: true,
    },
    {
        key: "description",
        label: "Category Description",
        type: "textarea",
        placeholder: "Enter category description",
        required: false,
    },
    {
        key: "icon",
        label: "Category Icon",
        type: "text",
        placeholder: "e.g., any emoji",
        required: false,
    },
    {
        key: "parent",
        label: "Parent Category",
        type: "dropdown",
        options: [], // This can be populated with existing categories
        placeholder: "Select parent category",
        required: false,
    }
];

const CategoriesScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [categories, setCategories] = useState([]);   // 👈 list
    const [category, setCategory] = useState({});       // 👈 single item
    const [categoryFormFields, setCategoryFormFields] = useState([]);
    const [viewType, setViewType] = useState('list'); // 'list' or 'grid'


    useEffect(() => {
        fetchCategories();
    }, []);

    // const fetchCategories = async () => {
    //     try {
    //         const result = await fetchCategoriesAPI();
    //         if (result.success) {
    //             setCategories(result.data);

    //             // update parent dropdown dynamically
    //             setCategoryFormFields([
    //                 ...categoriesFields.map((field) =>
    //                     field.key === "parent"
    //                         ? {
    //                             ...field,
    //                             options: result.data
    //                                 .filter((c) => c._id !== category?._id)   // 👈 exclude self
    //                                 .map((c) => ({
    //                                     label: c.name,
    //                                     value: c._id,
    //                                 })),
    //                         }
    //                         : field
    //                 ),
    //             ]);
    //         }
    //     } catch (err) {
    //         console.error("Failed to fetch categories:", err);
    //     }
    // };


    const fetchCategories = async () => {
        try {
            const result = await fetchCategoriesAPI();
            if (result.success) {
                setCategories(result.data);
            }
        } catch (err) {
            console.error("Failed to fetch categories:", err);
        }
    };

    // 👇 whenever categories OR category changes, rebuild parent dropdown
    useEffect(() => {
        if (categories.length > 0) {
            let updatededCategoryFiels =[...categoriesFields]
           

            setCategoryFormFields(
                 updatededCategoryFiels.map((field) =>
                    field.key === "parent"
                        ? {
                            ...field,
                            options: categories
                                .filter((c) => c._id !== category?._id) // exclude self if editing
                                .map((c) => ({
                                    label: c.name,
                                    value: c._id,
                                })),
                        }
                        : field
                )
            );
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
                await editCategoriesAPI(formData._id, formData);
                Toast.show({ type: "success", text1: "Category updated successfully!" });
            } else {
                await createCategoriesAPI(formData);
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

    const handleAdd = () => {
        setCategory({});
        navigation.navigate("Add", {
            fields: categoryFormFields,
            title: "Category",
            data: {}, // empty object
            onSubmit: handleCategorySubmit,
        });
    };

    const handleEdit = (item) => {
        setCategory(item);
        navigation.navigate("Add", {
            fields: categoryFormFields,
            title: "Category",
            data: item, // single category object
            onSubmit: handleCategorySubmit,
        });
    };

    console.log('category - 01', category);
    // console.log('categories - ', categories);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Categories</Text>

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
                    onPress={handleAdd}
                >
                    <Plus size={20} color={Colors.DEFAULT_WHITE} />
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>


            {viewType === 'list' ? (
                <FlatList
                    key={"list"}   // 👈 force re-render
                    data={categories}
                    keyExtractor={(item, index) => (item._id || item.id || index).toString()}
                    style={styles.flatListContainer}
                    renderItem={({ item }) => (
                        <CommonListing
                            item={item}
                            fields={categoryFormFields}   // 👈 pass fields
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
                    data={categories}
                    keyExtractor={(item, index) => (item._id || item.id || index).toString()}
                    numColumns={2}
                    style={styles.flatListContainer}
                    renderItem={({ item }) => (
                        <CommonGrid
                            item={item}
                            fields={categoryFormFields}   // 👈 pass field 
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

export default CategoriesScreen

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



// const fetchCategories = async () => {
//     const result = await fetchCategoriesAPI();
//     console.log('result', result);
//     if (result.success) {
//         setCategories(result.data);
//     } else {
//         console.error('Failed to fetch categories:', result.error);
//     }
// };


// useEffect(() => {
//     setCategoryFormFields((prev) => {
//         // let exists = customerFields.filter(item => item.key != 'email');
//         // console.log('exists', exists);
//         return [...categoriesFields,
//         {
//             key: "additionalInfo",
//             label: "Additional Info",
//             type: "textarea",
//             placeholder: "Enter any additional info",
//             required: false,
//         }]
//     });

//     fetchCategories();
//     console.log('Render');

// }, []);


// const fetchCategories = async () => {
//     const result = await fetchCategoriesAPI();
//     if (result.success) {
//         // populate parent dropdown with categories
//         setCategoryFormFields([
//             ...categoriesFields.map(field =>
//                 field.key === "parent"
//                     ? { ...field, options: result.data.map(c => ({ label: c.name, value: c._id })) }
//                     : field
//             ),
//             {
//                 key: "additionalInfo",
//                 label: "Additional Info",
//                 type: "textarea",
//                 placeholder: "Enter any additional info",
//                 required: false,
//             }
//         ]);
//         setCategories(result.data);
//     } else {
//         console.error('Failed to fetch categories:', result.error);
//     }
// };

// const addCategory = async (formData, existing) => {
//     try {
//         if (existing) {
//             await editCategoriesAPI(existing._id, formData);
//             Toast.show({ type: 'success', text1: 'Category updated successfully!' });
//         } else {
//             await createCategoriesAPI(formData);
//             Toast.show({ type: 'success', text1: 'Category created successfully!' });
//         }
//         fetchCategories();
//     } catch (error) {
//         console.error("Failed to save category:", error);
//         Toast.show({
//             type: 'error',
//             text1: 'Category save failed!',
//             text2: 'Please try again.',
//         });
//     }
// };


// const handleAdd = () => {
//     navigation.navigate('Add', {
//         fields: categoryFormFields,
//         title: 'Category',
//         setData: setCategories,
//         onSubmit: addCategory,
//     });
// };

// const handleEdit = (category) => {
//     navigation.navigate('Add', {
//         fields: categoryFormFields,
//         title: 'Category',
//         setData: setCategories,
//         onSubmit: addCategory,
//         data: category,  // existing for edit
//     });
// };

