
// Use baseURL from environment variable
import { API_HOST } from '@env';
import { getFromStorage } from '../utils';

const token = getFromStorage('token'); // Adjust this function to your storage solution
console.log('Fetched token:', token);

export const fetchProductsAPI = async () => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${API_HOST}/products`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetch Categories API response:', data);
        return { success: true, data: data};

    } catch (error) {
        console.error('Fetch Categories API error:', error);
        return { success: false, error: error.message };
    }
}

export const fetchCategoriesAPI = async () => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${API_HOST}/categories`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetch Categories API response:', data);
        return { success: true, data: data.data };

    } catch (error) {
        console.error('Fetch Categories API error:', error);
        return { success: false, error: error.message };
    }
};

export const fetchSidebarData = async () => {
    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch(`${API_HOST}/sidebar/sidebar-sections`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log('Sidebar API Response:', data);

        if (data.success) {
            // return data.data;

            // 👇 return whole response, not data.data
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Sidebar API Error:', error);
        throw error;
    }
};

export const fetchBusinessTypeCategoriesAPI = async () => {
    try {
        const response = await fetch(`${API_HOST}/business-types/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const categories = result.data;
        // console.log('categories', categories);

        // Transform the data into the required format
        const allTypes = Object.values(categories).flatMap((cat) =>
            cat.types.map((type) => ({
                value: type.value,
                label: `${type.label}`,
            }))
        );

        // console.log(allTypes);

        return {
            success: true,
            data: allTypes
        };

    } catch (error) {
        console.error('Fetch categories error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};


