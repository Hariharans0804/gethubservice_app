import { API_HOST } from '@env';

// GET Business Type Categories API
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

// POST Site Creation API
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