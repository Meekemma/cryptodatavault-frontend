import React, { useState } from 'react'
import DashBoardFooter from './DashBoardFooter';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const CustomWithdrawal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [withdrawalType, setWithdrawalType] = useState('crypto'); 
  const [formData, setFormData] = useState({
    amount:'',
    bank_name: '',
    bank_account_number: '',
    bank_account_name: '',
    bank_swift_code: '',
    bank_routing_number: '',
    crypto_currency: '',
    crypto_address: '',
  });

  const handleTypeChange = (type) => {
    setWithdrawalType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await axiosInstance.post('payment/withdrawal/', formData);
      if (response.status === 201) {
        toast.success("Processing Withdrawal");
        setFormData({
          amount: '',
          bank_name: '',
          bank_account_number: '',
          bank_account_name: '',
          bank_swift_code: '',
          bank_routing_number: '',
          crypto_currency: '',
          crypto_address: '',
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        const shownMessages = new Set();
  
        // Display field-specific errors
        Object.keys(errorData).forEach((field) => {
          if (Array.isArray(errorData[field])) {
            errorData[field].forEach((message) => {
              if (!shownMessages.has(message)) {
                toast.error(message);
                shownMessages.add(message);
              }
            });
          }
        });
  
        // Handle non-field errors specifically
        if (errorData.non_field_errors && Array.isArray(errorData.non_field_errors)) {
          errorData.non_field_errors.forEach((message) => {
            if (!shownMessages.has(message)) {
              toast.error(message);
              shownMessages.add(message);
            }
          });
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  
  
  

  return (
    <> 
      <div className='container mx-auto px-4 my-8'>
        <div>
          <h2>Withdrawal Request</h2>

          <div className="flex justify-around mb-8">
            <div
              className={`cursor-pointer p-4 border rounded-lg text-center w-1/2 mx-2 ${withdrawalType === 'bank' ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => handleTypeChange('bank')}
            >
              <h3 className={`${withdrawalType === 'bank' ? 'text-red-500' : ''}`}>
                Bank
              </h3>
            </div>

            <div
              className={`cursor-pointer p-4 border rounded-lg text-center w-1/2 mx-2 ${withdrawalType === 'crypto' ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => handleTypeChange('crypto')}
            >
              <h3 className={`${withdrawalType === 'crypto' ? 'text-red-500' : ''}`}>
                Crypto Wallet
              </h3>
            </div>
          </div>

          {withdrawalType && (
            <form onSubmit={handleSubmit}>
              {withdrawalType === 'bank' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="amount">Amount</label>
                    <input 
                      type="number" 
                      id="amount" 
                      name="amount" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="mb-4">
                    <label htmlFor="bank_name">Bank Name</label>
                    <input 
                      type="text" 
                      id="bank_name" 
                      name="bank_name" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter bank name"
                      value={formData.bank_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="bank_account_number">Bank Account Number</label>
                    <input 
                      type="text" 
                      id="bank_account_number" 
                      name="bank_account_number" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter bank account number"
                      value={formData.bank_account_number}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="bank_account_number">Bank Account Name</label>
                    <input 
                      type="text" 
                      id="bank_account_name" 
                      name="bank_account_name" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter bank account number"
                      value={formData.bank_account_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="swiftCode">Bank Swift Code</label>
                    <input 
                      type="text" 
                      id="bank_swift_code" 
                      name="bank_swift_code" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter bank swift code"
                      value={formData.bank_swift_code}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="routingNumber">Bank Routing Number</label>
                    <input 
                      type="text" 
                      id="bank_routing_number" 
                      name="bank_routing_number" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter bank routing number"
                      value={formData.bank_routing_number}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {withdrawalType === 'crypto' && (
                <>
                   <div className="mb-4">
                    <label htmlFor="amount">Amount</label>
                    <input 
                      type="number" 
                      id="amount" 
                      name="amount" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="mb-4">
                  <label htmlFor="cryptoCurrency">Cryptocurrency</label>
                  <select
                    id="crypto_currency"
                    name="crypto_currency"
                    className="border px-4 py-2 w-full"
                    value={formData.crypto_currency}
                    onChange={handleChange}
                  >
                    <option value="">Select Cryptocurrency</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="LTC">Litecoin</option>
                    <option value="BCH">Bitcoin Cash</option>
                    <option value="USDT">Tether</option>
                  </select>
                </div>

                  <div className="mb-4">
                    <label htmlFor="cryptoAddress">Crypto Address</label>
                    <input 
                      type="text" 
                      id="crypto_address" 
                      name="crypto_address" 
                      className="border px-4 py-2 w-full" 
                      placeholder="Enter crypto address"
                      value={formData.crypto_address}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <button 
                  type="submit" 
                  className="bg-[#1D2B53] text-white px-4 py-2 rounded hover:bg-[#4A4A4A] rounded-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit Withdrawal'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Note for Withdrawals */}
      <div className='container mx-auto px-4 mt-8 mb-12'>
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-lg font-semibold mb-2'>Important Information Regarding Withdrawals:</h3>
          <p className='text-gray-700'>
            Before proceeding with your withdrawal request, please review the following:
          </p>
          <ul className='list-disc list-inside mt-2 text-gray-700'>
            <li><strong>Processing Time:</strong> Withdrawals may take between 1 to 5 business days to be fully processed, depending on your selected withdrawal method and financial institution.</li>
            <li><strong>Fees:</strong> Some withdrawal methods may incur fees. Please ensure you understand any potential charges that may apply to your transaction.</li>
            <li><strong>Limits:</strong> There may be minimum and maximum withdrawal limits based on your selected method. Ensure your request falls within these limits.</li>
            <li><strong>Security:</strong> For your protection, ensure the information provided is correct. We will not ask for sensitive data via email. If you encounter any issues, contact our support team immediately.</li>
          </ul>
          <p className='text-gray-700 mt-4'>For further assistance, please feel free to contact our support team at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.</p>
        </div>
      </div>

      <DashBoardFooter />
    </>
  )
}

export default CustomWithdrawal;
