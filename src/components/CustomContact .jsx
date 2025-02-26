import React, { useEffect } from 'react';
import CustomAppBar from './CustomAppBar';
import Footer from './Footer';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomMap from './CustomMap';

const CustomContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <CustomAppBar />

      <div className="container mx-auto px-4 my-8">

        <h2
          className="text-3xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Contact Now
        </h2>
        
        <form className="max-w-lg mx-auto my-4" data-aos="fade-up">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="create-button">Submit Now</button>
          </div>
        </form>

        <CustomMap />

        <div className="trade mt-8" data-aos="fade-in">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="text-left mb-4 md:mb-0">
              <h4 className="text-4xl font-extrabold">Share and follow</h4>
              <p className="mt-3">
                Casting a wary glance to see if they were being overheard.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                <FaTiktok size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CustomContact;
