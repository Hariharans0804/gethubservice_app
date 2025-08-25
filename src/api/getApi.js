import axios from "axios";
import { API_HOST } from '@env'

const axiosInstance = axios.create({
    baseURL: API_HOST,
    timeout: 5000        // Set timeout to 5 seconds
});


export const fetchCategoriesAPI = async () => {
    try {
        const response = await axiosInstance.get(`/api/business-types/categories`);
        const categories = response.data.data;

        // Transform the data into the required format
        const allTypes = Object.values(categories).flatMap((cat) =>
            cat.types.map((type) => ({
                value: type.value,
                label: `${type.label}`,
            }))
        );

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
