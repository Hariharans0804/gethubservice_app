export const productsFields = [
  {
    key: "name",
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
    required: true,
  },
  {
    key: "sku",
    label: "SKU",
    type: "text",
    placeholder: "Enter SKU",
    required: true,
  },
  {
    key: "pricePerDay",   // 👈 backend expectation
    label: "Price",
    type: "number",
    placeholder: "$ 0.00",
    required: true,
  },
  {
    key: "category",
    label: "Choose Category",
    type: "treeDropdown",
    options: [], // This can be populated with existing categories
    placeholder: "Select category",
    required: true,
  },
];