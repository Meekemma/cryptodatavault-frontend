import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Emma Thompson',
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    message: 'Trexiz made trading simpler and more profitable for me. Their platform is both intuitive and secure.',
  },
  {
    name: 'James Carter',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    message: 'The IB program is unmatched. I’ve been able to build consistent passive income through referrals.',
  },
  {
    name: 'Olivia Martinez',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    message: 'Customer support is always quick and helpful. Trexiz is a platform I genuinely trust.',
  },
  {
    name: 'William Harris',
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    message: 'Fast withdrawals, transparent commissions, and excellent reporting tools. What more could I ask for?',
  },
  {
    name: 'Sophia Anderson',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    message: 'From onboarding to payouts, everything feels smooth. Highly recommended for serious traders.',
  },
  {
    name: 'Benjamin Clark',
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
    message: 'I’ve referred friends and earned solid commissions. Trexiz delivers exactly what it promises.',
  },
  {
    name: 'Charlotte Davies',
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    message: 'Reliable, fast, and professional — Trexiz has been a game changer in my trading experience.',
  },
  {
    name: 'Ethan Reynolds',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
    message: 'I’ve tried several platforms, but none feel as stable and rewarding as Trexiz.',
  },
  {
    name: 'Isabella Turner',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    message: 'The IB dashboard updates in real time. Watching my commissions grow is motivating!',
  },
  {
    name: 'Liam Walker',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    message: 'Trexiz treats partners with respect and professionalism. I feel valued and supported.',
  },
];



const TestimonialComponent = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + slidesToShow >= testimonials.length ? 0 : prev + slidesToShow
      );
    }, 4000);

    return () => clearInterval(slideIntervalRef.current);
  }, [slidesToShow]);

  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Partners Say
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(100 / slidesToShow) * testimonials.length}%`,
            transform: `translateX(-${(100 / testimonials.length) * currentIndex}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4"
              style={{
                width: `${100 / testimonials.length}%`,
              }}
            >
              <div className="bg-white rounded-2xl shadow-md p-6 text-center min-h-[320px] flex flex-col items-center justify-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      testimonial.name
                    )}&background=3b82f6&color=fff&size=80`;
                  }}
                />
                <h4 className="font-semibold text-lg mb-2">{testimonial.name}</h4>
                <p className="text-gray-600 italic text-sm">"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * slidesToShow)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentIndex / slidesToShow) === idx
                  ? 'bg-blue-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
