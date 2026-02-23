// In production, the React app is served from the same server as the API
// So we don't need to specify a different base URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (
    import.meta.env.PROD ? '' : "http://localhost:3001"
)
