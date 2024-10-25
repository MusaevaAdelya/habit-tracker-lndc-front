import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {API_URL} from "./config";

const API = axios.create({
    baseURL: `${API_URL}`,
});


API.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                console.error('Unauthorized or forbidden, redirecting to login...');
                localStorage.removeItem('accessToken');

                const navigate = useNavigate();
                navigate("/login")
            } catch (error) {
                console.error('Error handling authentication:', error);
            }
        }

        return Promise.reject(error);
    }
);


export default API;