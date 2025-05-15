import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Dashboard from './pages/Dashboard';
import SignUp from './components/SignUp';
import Verification from './components/Verification';
import Referral from './components/Referral';
import ReferralList from './components/ReferralList';
import ChangePassword from './components/ChangePassword';
import ResetPassword from './components/ResetPassword';
import CustomLogin from './components/CustomLogin';

import PageNotFound from './pages/PageNotFound';
import Market from './pages/Market';

import Side from './components/Side';
import PrivateRoute from './utils/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import CustomPayment from './pages/CustomPayment';
import Withdrawal from './pages/Withdrawal';
import Transaction from './pages/Transaction';
import CookieConsent from './components/CookieConsent';
import CookiePolicy from './components/CookiePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import ScrollToTop from './components/ScrollToTop';
import Qrcode from './pages/Qrcode';
import Translate from './components/Translate';


const App = () => {
  return (
    <Router> {/* Wrap your app with Router */}
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account-type" element={<Account />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/about-us" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/referral-page" element={<ReferralList />} />
          <Route path="/change-password" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<CustomLogin />} />
          <Route path="/markets" element={<Market />} />
          <Route path="/deposit" element={<CustomPayment />} />
          <Route path="/complete_payment" element={<Qrcode/>} />

          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/Transactions" element={<Transaction />} />

          <Route path="/terms-condition" element={<TermsConditions/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/cookie-policy" element={<CookiePolicy/>} />



          <Route path="*" element={<PageNotFound />} />
          
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Side /></PrivateRoute>} />

        </Routes>
        <Translate />
        <ScrollToTop />
        <ToastContainer />
        <CookieConsent />
        
      </AuthProvider>
    </Router>
  );
};

export default App;
