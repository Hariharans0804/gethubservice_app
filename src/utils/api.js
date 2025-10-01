import { API_HOST } from "@env";
import { getFromStorage } from "./mmkvStorage";

// common API function
export const apiCall = async ({ endpoint, method = "GET", body = null, token = true }) => {
  try {
    const headers = {};

    // 🔑 Add Authorization header only if token=true
    if (token) {
      const savedToken = getFromStorage("token");
      if (!savedToken) throw new Error("No token found");
      headers["Authorization"] = `Bearer ${savedToken}`;
    }

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

    // ✅ Normalize
    // if backend already sends { success, data }, keep it
    // if (data && typeof data === "object" && "success" in data && "data" in data) {
    //   return data;
    // }

    // if backend just sends an array or object, wrap it
    return { success: true, data };

    // return data; // ✅ unwrap, return clean data directly

  } catch (error) {
    console.error("API Error:", error);
    return { success: false, error: error.message };
    // throw error; // ✅ throw instead of wrapping, so components can catch
  }
};
