// Use baseURL from environment variable
import { API_HOST } from '@env';
import { getFromStorage } from '../utils';


const token = getFromStorage('token'); // Adjust this function to your storage solution
console.log('Fetched token:', token);

export const editProductAPI = async (id, productData) => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        // ✅ no need to remap type anymore
        const payload = { ...productData };

        const response = await fetch(`${API_HOST}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Backend error response:", errorData); // 👈 log server details
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Create Category API response:', data);

        // 👇 Return only the category object
        return data.data;

    } catch (error) {
        console.error('Create Category API error:', error);
        throw error;
    }
}

// ==================================================================================//

const cleanCategoryPayload = (data) => {
    let payload = { ...data };

    // handle parent
    if (!payload.parent || payload.parent === "") {
        payload.parent = null;
    } else if (typeof payload.parent === "object" && payload.parent._id) {
        // In case parent comes as object from API, extract its id
        payload.parent = payload.parent._id;
    }

    return payload;
};

export const editCategoriesAPI = async (id, categoryData) => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        // ✅ no need to remap type anymore
        // const payload = { ...categoryData };
        const payload = cleanCategoryPayload(categoryData);  // ✅ sanitize here

        const response = await fetch(`${API_HOST}/categories/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Backend error response:", errorData); // 👈 log server details
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Create Category API response:', data);

        // 👇 Return only the category object
        return data.data;


    } catch (error) {
        console.error('Create Category API error:', error);
        throw error;
    }
}

// ==================================================================================//