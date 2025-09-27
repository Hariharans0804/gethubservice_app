import { apiCall } from "../../../utils";

// helper to clean category payload
const cleanCategoryPayload = (data) => {
  let payload = { ...data };
  if (!payload.parent || payload.parent === "") {
    payload.parent = null;
  } else if (typeof payload.parent === "object" && payload.parent._id) {
    payload.parent = payload.parent._id;
  }
  return payload;
};

// GET categories
export const fetchCategoriesAPI = () => {
  return apiCall({ endpoint: "/categories", method: "GET" });
};

// POST category
export const createCategoryAPI = (categoryData) => {
  const payload = cleanCategoryPayload(categoryData);
  return apiCall({ endpoint: "/categories", method: "POST", body: payload });
};

// PUT category
export const editCategoryAPI = (id, categoryData) => {
  const payload = cleanCategoryPayload(categoryData);
  return apiCall({ endpoint: `/categories/${id}`, method: "PUT", body: payload });
};

// DELETE category
export const deleteCategoryAPI = (id) => {
  return apiCall({ endpoint: `/categories/${id}`, method: "DELETE" });
};


// import { API_HOST } from '@env';
// import { getFromStorage } from '../../../utils';


// const token = getFromStorage('token');
// console.log('Fetched token post:', token);

// //  GET
// export const fetchCategoriesAPI = async () => {
//     try {
//         if (!token) {
//             throw new Error('No token found');
//         }

//         const response = await fetch(`${API_HOST}/categories`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Fetch Categories API response:', data);
//         return { success: true, data: data.data };

//     } catch (error) {
//         console.error('Fetch Categories API error:', error);
//         return { success: false, error: error.message };
//     }
// };

// const cleanCategoryPayload = (data) => {
//     let payload = { ...data };

//     // handle parent
//     if (!payload.parent || payload.parent === "") {
//         payload.parent = null;
//     } else if (typeof payload.parent === "object" && payload.parent._id) {
//         // In case parent comes as object from API, extract its id
//         payload.parent = payload.parent._id;
//     }

//     return payload;
// };

// //  POST
// export const createCategoryAPI = async (categoryData) => {
//     try {
//         if (!token) {
//             throw new Error('No token found');
//         }

//         // ✅ no need to remap type anymore
//         // const payload = { ...categoryData };
//         const payload = cleanCategoryPayload(categoryData);  // ✅ sanitize here

//         //   console.log('API_HOST',API_HOST);

//         const response = await fetch(`${API_HOST}/categories`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             console.error("Backend error response:", errorData); // 👈 log server details
//             throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Create Category API response:', data);

//         // 👇 Return only the category object
//         return data.data;


//     } catch (error) {
//         console.error('Create Category API error:', error);
//         throw error;
//     }
// }

// //  PUT
// export const editCategoryAPI = async (id, categoryData) => {
//     try {
//         if (!token) {
//             throw new Error('No token found');
//         }

//         // ✅ no need to remap type anymore
//         // const payload = { ...categoryData };
//         const payload = cleanCategoryPayload(categoryData);  // ✅ sanitize here

//         const response = await fetch(`${API_HOST}/categories/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             console.error("Backend error response:", errorData); // 👈 log server details
//             throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Update Category API response:', data);

//         // 👇 Return only the category object
//         return data.data;


//     } catch (error) {
//         console.error('Update Category API error:', error);
//         throw error;
//     }
// }

// // DELETE
// export const deleteCategoryAPI = async (id) => {
//     try {
//         if (!token) {
//             throw new Error('No token found');
//         }

//         const response = await fetch(`${API_HOST}/categories/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 // ❌ Don't send Content-Type unless sending a body
//             },
//         });

//         if (!response.ok) {
//             let errorData;
//             try {
//                 errorData = await response.json();
//             } catch {
//                 errorData = { message: "Unknown error from server" };
//             }
//             console.error("Backend error response:", errorData);
//             // throw new Error(errorData.message || `HTTP error! status: ${response.status}`);

//             // ✅ pick error message correctly
//             throw new Error(
//                 errorData.message || errorData.error || `HTTP error! status: ${response.status}`
//             );

//         }

//         // Some backends return 204 No Content → no JSON body
//         let data = null;
//         try {
//             data = await response.json();
//         } catch {
//             data = { success: true }; // fallback if no response body
//         }

//         console.log('Delete Category API response:', data);
//         return data; // could be { success: true } or deleted category object
//     } catch (error) {
//         console.error('Delete Category API error:', error);
//         throw error;
//     }
// };
