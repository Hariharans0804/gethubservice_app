import { apiCall } from "../../../utils";

// GET categories
export const fetchCategoriesAPI = () => {
    return apiCall({ endpoint: "/categories", method: "GET" });
};

// GET products
export const fetchProductsAPI = () => {
    return apiCall({ endpoint: "/products", method: "GET" });
};

// POST products
export const createProductAPI = (productData) => {
    return apiCall({ endpoint: "/products", method: "POST", body: productData });
};

// PUT products
export const editProductAPI = (id, productData) => {
    return apiCall({ endpoint: `/products/${id}`, method: "PUT", body: productData });
};

// DELETE products
export const deleteProductAPI = (id) => {
    return apiCall({ endpoint: `/products/${id}`, method: "DELETE" });
};