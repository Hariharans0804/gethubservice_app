export const categoriesFields = [
    {
        key: "name",
        label: "Category Name",
        type: "text",
        placeholder: "Enter category name",
        required: true,
    },
    // {
    //     key: "type",
    //     label: "Category Type",
    //     type: "dropdown",
    //     options: [
    //         { label: "Product", value: "product" },
    //         { label: "Service", value: "service" },
    //         { label: "Both", value: "both" },
    //     ],
    //     placeholder: "Select category type",
    //     required: true,
    // },
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
        type: "treeDropdown",
        options: [], // This can be populated with existing categories
        placeholder: "Select parent category",
        required: false,
    }
];