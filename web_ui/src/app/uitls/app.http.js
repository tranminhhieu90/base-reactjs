import axios from 'axios';
import { basedUrl, basedUrlPro, isProSite } from './baseUrl.json';
import storage from "./storage";
// Create axios client, pre-configured with baseURL
// "basedUrl": "http://127.0.0.1:3333/api/v1/",
//"basedUrl": "http://52.77.241.11:3333/api/v1",
let HTTP = axios.create({
    baseURL: isProSite ? basedUrlPro : basedUrl,
    timeout: 120000,
    validateStatus: (status) => {
        // ignore api exception status
        return true;
    }
});

// HTTP.interceptors.request.use(function (config) {
//     config.headers.session = token;
//     return config;
// });

if (storage.isLoggednIn()) {
    HTTP.defaults.headers["authorization"] = storage.getToken();
}
export const setAuthorizationHeader = (accessToken) => {
    HTTP.defaults.headers["authorization"] = accessToken;
}
export default HTTP;