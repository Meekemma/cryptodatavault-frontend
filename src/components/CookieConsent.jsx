import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import '../styles/consent.css';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show banner if no cookie is set yet
    if (!cookies.cookieConsent && location.pathname !== '/login' && location.pathname !== '/signup') {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [cookies, location.pathname]);

  const handleAccept = () => {
    setCookie('cookieConsent', 'accepted', { path: '/', maxAge: 3600 * 24 * 30 }); // 30 days
    setVisible(false);
  };

  const handleReject = () => {
    setCookie('cookieConsent', 'rejected', { path: '/', maxAge: 3600 * 24 * 30 }); // 30 days
    setVisible(false);
  };

  if (!visible) return null;

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
