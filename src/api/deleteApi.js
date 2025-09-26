// Use baseURL from environment variable
import { API_HOST } from '@env';
import { getFromStorage } from '../utils';

const token = getFromStorage('token'); // Adjust this function to your storage solution
console.log('Fetched token:', token);

export const deleteProductAPI = async (id) => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${API_HOST}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                // ❌ Don't send Content-Type unless sending a body
            },
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                errorData = { message: "Unknown error from server" };
            }
            console.error("Backend error response:", errorData);
            // throw new Error(errorData.message || `HTTP error! status: ${response.status}`);

            // ✅ pick error message correctly
            throw new Error(
                errorData.message || errorData.error || `HTTP error! status: ${response.status}`
            );

        }

        // Some backends return 204 No Content → no JSON body
        let data = null;
        try {
            data = await response.json();
        } catch {
            data = { success: true }; // fallback if no response body
        }

        console.log('Delete Category API response:', data);
        return data; // could be { success: true } or deleted category object
    } catch (error) {
        console.error('Delete Category API error:', error);
        throw error;
    }
};

export const deleteCategoriesAPI = async (id) => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${API_HOST}/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                // ❌ Don't send Content-Type unless sending a body
            },
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                errorData = { message: "Unknown error from server" };
            }
            console.error("Backend error response:", errorData);
            // throw new Error(errorData.message || `HTTP error! status: ${response.status}`);

            // ✅ pick error message correctly
            throw new Error(
                errorData.message || errorData.error || `HTTP error! status: ${response.status}`
            );

        }

        // Some backends return 204 No Content → no JSON body
        let data = null;
        try {
            data = await response.json();
        } catch {
            data = { success: true }; // fallback if no response body
        }

        console.log('Delete Category API response:', data);
        return data; // could be { success: true } or deleted category object
    } catch (error) {
        console.error('Delete Category API error:', error);
        throw error;
    }
};