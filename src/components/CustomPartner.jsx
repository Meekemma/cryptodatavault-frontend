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
    AOS.init({ duration: 1000, once: true });
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
              Introduce new traders to Trexiz Limited, 
              build your network as a professional trader and grow your circle with our partnership program. 
              The IB program offers an attractive side business to your already successful trading — it means generating extra revenue!
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
              Once your friends start trading, you’ll start earning commissions! 
              Bring more friends, earn more commissions. Our Refer-a-Friend program is open to all clients.
              Invite your friends directly via your Trexiz LTD Trade dashboard, or notify an Account Manager by emailing <a href="mailto:support@Trexiz.com" className="underline text-blue-700">support@Trexiz.com</a>.
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
              Whenever your referred client makes a trade, 
              the calculated commission appears instantly in your IB Room. 
              All closed trades generate commission, which is automatically added to your IB balance and becomes withdrawable immediately.
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
              Withdraw your commissions anytime, with full flexibility.
            </h5>
            <p className="text-lg">
              Simply complete a withdrawal request via your Client Area. 
              You can transfer funds to your Trexiz LTD Trade live account or withdraw to your bank account or any supported payment method.
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
              Yes. The Master Introducing Broker (MIB) program allows you to refer other partners (Sub IBs) and earn commissions from their referred clients.
              To register someone as a Sub IB, they must sign up using your unique MIB referral link.
            </p>
            <button className="create-account-button">Register now</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CustomPartner;
