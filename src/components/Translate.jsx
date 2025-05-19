import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Translate = () => {
  const location = useLocation();

  useEffect(() => {
    // Clear existing widget to prevent duplicates
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
      translateElement.innerHTML = ''; // Clear previous content
    }

    // Prevent multiple script initializations
    if (window.googleTranslateInitialized && window.google && window.google.translate) {
      window.googleTranslateElementInit();
      return;
    }

    window.googleTranslateInitialized = true;

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load Google Translate script if not already present
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => console.error('Failed to load Google Translate script');
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    // Cleanup on unmount
    return () => {
      if (translateElement) {
        translateElement.innerHTML = '';
      }
    };
  }, [location.pathname]);

  return <div id="google_translate_element" />;
};

export default Translate;