import React from 'react';
import { useNavigate } from 'react-router-dom';
import Subscription from './Subscription';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Market", path: "/markets" },
    { name: "Account-type", path: "/account-type" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const resources = [
  { name: "How it works", path: "#how-it-works" },
  { name: "Why Trexix LTD", path: "#why-trexix" },
];


  const legalInfo = [
    { name: "Terms & Condition", path: "/terms-condition" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  return (
    <footer className="bg-[#1D2B53] text-white py-8">
      <div className="container mx-auto px-4 footer">
        <Subscription />

        <div className="flex flex-wrap justify-between gap-8">
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">ADDRESS</h3>
            <p>
              20 Battersea Road,<br />
              Bristol, England, BS5 6AL
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(item.path)} 
                    className="hover:underline cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">RESOURCES</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <button 
                 onClick={() => {
                  // If we're already on the homepage, scroll smoothly to the section
                  if (window.location.pathname === "/") {
                    const el = document.querySelector(item.path);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // If not, navigate to the homepage with the hash
                    window.location.href = `/${item.path}`;
                  }
                }}



 
                    className="hover:underline cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Information */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-bold mb-4 text-red-500">LEGAL INFORMATION</h3>
            <ul className="space-y-2">
              {legalInfo.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(item.path)} 
                    className="hover:underline cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="bottom-0 w-full py-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Trexiz LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
