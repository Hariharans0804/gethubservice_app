// import { apiCall } from "../../../utils"

// export const loginAPI = (loginData) => {
//     return apiCall({ endpoint: "/users/login", method: "POST", body: loginData, token: false });
// }

// Use baseURL from environment variable
import { API_HOST } from '@env';

export const loginAPI = async (loginData) => {
    try {
        const response = await fetch(`${API_HOST}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Login API response:', data);
        return data;
    } catch (error) {
        console.error('Login API error:', error);
        throw error;
    }
};
