
// Use baseURL from environment variable
import { API_HOST } from '@env';
import { getFromStorage } from '../utils';

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
        const token = getFromStorage('token'); // Adjust this function to your storage solution
        console.log('Fetched token:', token);

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

export const createCategoriesAPI = async (categoryData) => {
    try {
        const token = getFromStorage('token'); // Adjust this function to your storage solution
        console.log('Fetched token:', token);

        if (!token) {
            throw new Error('No token found');
        }

        // ✅ no need to remap type anymore
        // const payload = { ...categoryData };
        const payload = cleanCategoryPayload(categoryData);  // ✅ sanitize here

        //   console.log('API_HOST',API_HOST);

        const response = await fetch(`${API_HOST}/categories`, {
            method: 'POST',
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

export const siteCreationAPI = async (siteData) => {
    try {
        console.log('🚀 API Request Payload:', {
            url: `${API_HOST}/site-creation/create-public`,
            data: siteData
        });
        const transformedData = {
            // Site Details
            businessName: siteData.businessName,
            businessType: siteData.businessType,
            subdomain: siteData.websiteAddress?.toLowerCase().replace(/[^a-z0-9]/g, '') || siteData.businessName?.toLowerCase().replace(/[^a-z0-9]/g, ''),
            selectedFeatures: siteData.selectedFeatures || [],
            selectedTemplate: siteData.selectedTemplate || "modern-business",
            businessTypeData: {
                description: siteData.businessDescription || "A professional business establishment",
                coreFeatures: []
            },

            // User Details
            contactEmail: siteData.email,
            userPassword: siteData.password,
            contactPhone: siteData.phoneNumber,
            createAccount: true,

            // Optional Customizations
            additionalSettings: {
                templateCustomizations: {
                    colors: {
                        primary: "#059669",
                        secondary: "#34d399",
                        accent: "#f59e0b"
                    }
                }
            }
        };

        // Validate required fields
        const requiredFields = [
            'businessName',
            'businessType',
            'subdomain',
            'contactEmail',
            'userPassword',
            'contactPhone'
        ];

        const missingFields = requiredFields.filter(field => !transformedData[field]);

        if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }

        console.log('📤 Transformed Request Data:', transformedData);

        const response = await fetch(`${API_HOST}/site-creation/create-public`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transformedData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `HTTP error! status: ${response.status}`);
        }

        console.log('✅ API Response:', {
            status: response.status,
            data: data
        });

        const responseData = {
            success: true,
            message: data.message,
            data: {
                siteId: data.data.siteId,
                subdomain: data.data.subdomain,
                customDomain: data.data.customDomain,
                deploymentStatus: data.data.deploymentStatus,
                estimatedCompletionTime: data.data.estimatedCompletionTime,
                features: data.data.features,
                template: data.data.template,
                hasDefaultContent: data.data.hasDefaultContent,
                createdWithoutImages: data.data.createdWithoutImages,
                userStatus: data.data.userStatus,
                accessToken: data.data.accessToken,
                redirectTo: data.data.redirectTo
            }
        };

        console.log('🔄 Processed Response:', responseData);
        return responseData;
    } catch (error) {
        console.log('❌ API Error:', {
            message: error.message,
        });

        const errorResponse = {
            success: false,
            error: error.message
        };

        console.log('🔄 Error Response:', errorResponse);
        return errorResponse;
    }
};
