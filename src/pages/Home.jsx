import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomAppBar from '../components/CustomAppBar';
import CustomCarousel from '../components/CustomCarousel';
import CustomCards from '../components/CustomCards';
import Trade from '../components/Trade';
import CallBack from '../components/CallBack';
import Why from '../components/Why';
import Footer from '../components/Footer';
import { CryptoContextProvider } from '../context/CryptoContext';
import AccountStep from '../components/AccountStep';


const Home = () => {
   const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100); // slight delay ensures DOM is ready
        }
      }
    }, [location]);
  return (
    <>
      <CryptoContextProvider>
        <CustomAppBar />
        <CustomCarousel/>
        {/* <CustomCards/> */}
        <Trade/>  
        <AccountStep />
        <CallBack/>
        <Why/>
        <Footer/>
      </CryptoContextProvider>

    </>
  );
};

export default Home;
