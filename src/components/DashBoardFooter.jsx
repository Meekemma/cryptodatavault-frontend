import React, { useEffect, useState } from 'react';

const DashBoardFooter = () => {
  const [isFooterFixed, setIsFooterFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const contentHeight = document.body.offsetHeight;
        setIsFooterFixed(contentHeight <= viewportHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={`footer ${isFooterFixed ? 'fixed bottom-0 left-0 w-full text-center text-[#1D2B53] border-t border-gray-700 bg-white py-2' : 'static mt-auto w-full text-center text-[#1D2B53] border-t border-gray-700 bg-white py-2'}`}
    >
      <p className="text-sm">© {new Date().getFullYear()} BOBBYGRAM. All Rights Reserved.</p>
    </div>
  );
};

export default DashBoardFooter;
