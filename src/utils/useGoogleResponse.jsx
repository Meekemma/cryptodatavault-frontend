import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useGoogleResponse = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const accessToken = queryParams.get('access_token');
        const refreshToken = queryParams.get('refresh_token');
        const email = queryParams.get('email');
        const firstName = queryParams.get('first_name');
        const lastName = queryParams.get('last_name');
        const isVerified = queryParams.get('is_verified');
        const userId = queryParams.get('id');

        // Check if tokens are present
        if (accessToken && refreshToken) {
            // Store tokens and user info in local storage if available
            if (userId) localStorage.setItem('user_id', userId);  // Store user ID
            if (isVerified !== null) localStorage.setItem('is_verified', JSON.stringify(isVerified)); // Store verification status
            if (email && firstName && lastName) {
                localStorage.setItem('user', JSON.stringify({ email, firstName, lastName }));  // Store user details
            }
            
            // Store tokens as plain strings
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);

            // Navigate to the dashboard after storing the information
            navigate('/');
        }
    }, [location, navigate]);
};

export default useGoogleResponse;
