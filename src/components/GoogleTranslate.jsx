import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Prevent multiple initializations
    if (window.googleTranslateInitialized) return;

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
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      // If script exists and google object is ready, initialize manually
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        minWidth: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default GoogleTranslate;