
// Use baseURL from environment variable
import { API_HOST } from '@env';


export const fetchCategoriesAPI = async () => {
    try {
        const response = await fetch(`${API_HOST}/api/business-types/categories`, {
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
        console.log('categories', categories);

        // Transform the data into the required format
        const allTypes = Object.values(categories).flatMap((cat) =>
            cat.types.map((type) => ({
                value: type.value,
                label: `${type.label}`,
            }))
        );

        console.log(allTypes);

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


// export const fetchCategoriesAPI = async () => {
//     try {
//         const response = await fetch(`/api/business-types/categories`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         const categories = result.data;
//         console.log('categories', categories);

//         // Transform the data into the required format
//         const allTypes = Object.values(categories).flatMap((cat) =>
//             cat.types.map((type) => ({
//                 value: type.value,
//                 label: `${type.label}`,
//             }))
//         );

//         console.log(allTypes);

//         return {
//             success: true,
//             data: allTypes
//         };

//     } catch (error) {
//         console.error('Fetch categories error:', error);
//         return {
//             success: false,
//             error: error.message
//         };
//     }
// };

