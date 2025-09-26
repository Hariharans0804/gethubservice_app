import { API_HOST } from "@env";
import { getFromStorage } from "./mmkvStorage";

// common API function
export const apiCall = async ({ endpoint, method = "GET", body = null }) => {
  try {
    const token = getFromStorage("token");
    if (!token) throw new Error("No token found");

    const headers = {
      "Authorization": `Bearer ${token}`,
    //   "Content-Type": "application/json",
    };

      // add content-type only if body exists
    if (body) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_HOST}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "Unknown error from server" };
      }
      throw new Error(errorData.message || errorData.error || `HTTP error! status: ${response.status}`);
    }

    // handle empty response (DELETE often returns 204)
    let data = null;
    try {
      data = await response.json();
    } catch {
      data = { success: true };
    }

    return { success: true, data };
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, error: error.message };
  }
};
