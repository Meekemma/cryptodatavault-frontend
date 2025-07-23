import { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    if (window.googleTranslateInitialized) return;

    window.googleTranslateInitialized = true;

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

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="google_translate_element" />
  );
};

export default Translate;
