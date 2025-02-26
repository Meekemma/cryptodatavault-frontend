import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../styles/consent.css';

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(['cookieConsent']);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.cookieConsent) {
            return;
        }
    }, [cookies]);

    const handleAccept = () => {
        setCookie('cookieConsent', 'accepted', { path: '/', maxAge: 3600 * 24 * 30 });
    };

    const handleReject = () => {
        setCookie('cookieConsent', 'rejected', { path: '/', maxAge: 3600 * 24 * 30 });
    };


    if (cookies.cookieConsent || location.pathname === '/login' || location.pathname === '/signup') {
        return null;
    }

    return (
        <div className="cookie-consent-banner" role="dialog" aria-labelledby="cookie-consent-heading">
            <p id="cookie-consent-heading">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze site traffic. 
                By clicking 'Accept', you consent to our use of cookies. You can manage your preferences or reject cookies at any time. 
                For more details, please refer to our{' '}
                <a className="text-blue-500 underline" href="/privacy-policy">Privacy Policy</a> and{' '}
                <a className="text-blue-500 underline" href="/cookie-policy">Cookie Policy</a>.
            </p>
            <div>
                <button onClick={handleAccept} aria-label="Accept cookies">Accept</button>
                <button onClick={handleReject} aria-label="Reject cookies">Reject All</button>
            </div>
        </div>
    );
};

export default CookieConsent;