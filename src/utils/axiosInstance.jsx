import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(async req => {
    let token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;
    const refresh_token = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : null;

    if (token) {
        const user = jwtDecode(token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) {
            req.headers.Authorization = `Bearer ${token}`;
            return req;
        }

        try {
            const response = await axios.post(`${BASE_URL}token/refresh/`, { refresh: refresh_token });
            if (response.status === 200) {
                const newAccessToken = response.data.access;
                localStorage.setItem('access_token', newAccessToken);
                req.headers.Authorization = `Bearer ${newAccessToken}`;
                // console.log('New token set in headers');
                return req;
            } else {
                console.error('Failed to refresh token:', response.statusText);
                logoutUser();
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            logoutUser();
        }
    } else {
        console.error('No token found');
    }
    return req;
}, error => {
    return Promise.reject(error);
});

const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('is_verified');
    window.location.href = '/login'; 
};

export default axiosInstance;
