import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomAppBar from './CustomAppBar';
import partner_img1 from '../assets/images/partner_img1.svg';
import partner_img2 from '../assets/images/partner_img2.svg';
import partner_img3 from '../assets/images/partner_img3.svg';
import partner_img4 from '../assets/images/partner_img4.svg';
import partner_img5 from '../assets/images/partner_img5.svg';
import Footer from './Footer';
import '../styles/CustomCarousel.css';

const CustomPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,once: true, });
  }, []);

  return (
    <>
      <CustomAppBar />

      <div className="container mx-auto px-4 my-8 space-y-8">
        {/* FLEX ONE */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 p-4 flex justify-center order-1 md:order-none" data-aos="fade-right">
            <img src={partner_img1} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>
          <div className="md:w-1/2 p-4 order-none md:order-1" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              What is an Introducing Broker (IB)?
            </h3>
            <h5 className="text-xl mb-4">
              Introducing Broker is a partnership program where you can grow your business and earn high rebates as your network expands and your trading volume increases.
            </h5>
            <p className="text-lg">
              Introduce new traders to Trexiz LTD Trade, 
              build your network as a professional trader and grow your circle with our partnership program. 
              IB program offers an attractive side business to your already successful trading. 
              It means generating extra revenue!
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>

        {/* FLEX TWO */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 p-4 flex justify-center order-1 md:order-1" data-aos="fade-right">
            <img src={partner_img2} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>
          <div className="md:w-1/2 p-4 order-none md:order-none" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              How to refer a Friend
            </h3>
            <p className="text-lg">
              Satisfied with our service? Tell your friends!
              Once your friends start trading, you will start earning commissions! 
              Bring more friends, earn more commissions! Refer a Friend program is available to all clients! 
              Send your friend a request to join us via Trexiz LTD Trade page. 
              Alternatively, you can notify an Account Manager directly by e-mailing us at support@safefxside.com
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>

        {/* FLEX THREE */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 p-4 flex justify-center order-1 md:order-none" data-aos="fade-right">
            <img src={partner_img3} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>
          <div className="md:w-1/2 p-4 order-none md:order-1" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              How are the IB commissions added to my account?
            </h3>
            <p className="text-lg">
              Whenever your client makes a trade, 
              it will be shown automatically in your IB Room with the calculated commission. 
              The commissions are added to your IB balance for each and every trade that has been closed by your client and can then be immediately withdrawable.
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>

        {/* FLEX FOUR */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 p-4 flex justify-center order-1 md:order-1" data-aos="fade-right">
            <img src={partner_img4} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>
          <div className="md:w-1/2 p-4 order-none md:order-none" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              How can I withdraw my IB commissions?
            </h3>
            <h5 className="text-xl mb-4">
              Introducing Broker is a partnership program where you can grow your business and earn high rebates as your network expands and your trading volume increases.
            </h5>
            <p className="text-lg">
              You can withdraw your IB commission anytime you want by filling in a withdrawal form from the ClientArea.
              You can transfer the funds to your Trexiz LTD Trade live account or withdraw them to your bank account or any other available option.
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>

        {/* FLEX FIVE */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="md:w-1/2 p-4 flex justify-center order-1 md:order-none" data-aos="fade-right">
            <img src={partner_img5} alt="Broker" className="max-w-full h-auto md:max-w-sm" />
          </div>
          <div className="md:w-1/2 p-4 order-none md:order-1" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              Is there a Master Introducer Program available?
            </h3>
            <p className="text-lg">
              Yes, a MIB program allows you to refer other partners (Sub IBs) and earn rewards from their clients.
              If you want to register a client as a Sub IB, they need to register using a special MIB referral link.
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CustomPartner;
