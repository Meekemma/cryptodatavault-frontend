import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/CustomCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50; // Controls speed
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

const CallBack = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <>
      <div className='trade text-center' data-aos="fade-up">
        <h4 className='text-4xl font-extrabold'>Request Call Back</h4>

        <form action="/your-endpoint" method="POST" className='mt-8 max-w-lg mx-auto'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-left text-lg font-semibold'>
              Name
            </label>
            <input type='text' id='name' name='name' required className='w-full p-2 border border-gray-300 rounded' />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-left text-lg font-semibold'>
              Email Address
            </label>
            <input type='email' id='email' name='email' required className='w-full p-2 border border-gray-300 rounded' />
          </div>

          <div className='mb-4'>
            <label htmlFor='phone' className='block text-left text-lg font-semibold'>
              Phone Number
            </label>
            <input type='tel' id='phone' name='phone' required className='w-full p-2 border border-gray-300 rounded' />
          </div>

          <button type='submit' className='create-button py-2 px-4 rounded'>
            Request Call Back
          </button>
        </form>
      </div>

      <div className='mt-10' ref={ref}>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='flex flex-col items-center w-54' data-aos="fade-right">
          <h2 className='text-4xl font-bold text-[#1D2B53]'>
            {hasAnimated && <Counter end={15} suffix="M+" />}
          </h2>
          <h2 className='text-lg font-medium text-[#4A4A4A] text-center'>Total Asset</h2>
        </div>

        <div className='flex flex-col items-center w-54' data-aos="fade-left">
          <h2 className='text-4xl font-bold text-[#1D2B53]'>
            {hasAnimated && <Counter end={2853} suffix="+" />}
          </h2>
          <h2 className='text-lg font-medium text-[#4A4A4A] text-center'>Qualified traders</h2>
        </div>

        <div className='flex flex-col items-center w-54' data-aos="fade-right">
          <h2 className='text-4xl font-bold text-[#1D2B53]'>
            {hasAnimated && <Counter end={13} suffix="M+" />}
          </h2>
          <h2 className='text-lg font-medium text-[#4A4A4A] text-center'>Years of experience</h2>
        </div>

        <div className='flex flex-col items-center w-54' data-aos="fade-left">
          <h2 className='text-4xl font-bold text-[#1D2B53]'>
            {hasAnimated && <Counter end={57} />}
          </h2>
          <h2 className='text-lg font-medium text-[#4A4A4A] text-center'>Countries supported</h2>
        </div>
      </div>

      </div>
    </>
  );
};

export default CallBack;
