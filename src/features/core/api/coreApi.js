import { apiCall } from "../../../utils"

// GET sidebar sections
export const fetchSidebarData = () => {
    return apiCall({ endpoint: "/sidebar/sidebar-sections", method: "GET" });
}