import React from 'react'
import CustomMarket from '../components/CustomMarket'
import { CryptoContextProvider } from '../context/CryptoContext';
import Footer from '../components/Footer'

const Market = () => {
  return (
    <>
      <CryptoContextProvider>
        <CustomMarket />    
        <Footer />  
      </CryptoContextProvider>
    </>
  )
}

export default Market