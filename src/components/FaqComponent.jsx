import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Trexiz?',
    answer: 'Trexiz is an innovative online trading platform that offers access to global financial markets including forex, commodities, and indices. We also offer a rewarding Introducing Broker (IB) program for partners.',
  },
  {
    question: 'Who can open a trading account with Trexiz?',
    answer: 'Anyone aged 18 or older who meets our KYC requirements can open a trading account with Trexiz.',
  },
  {
    question: 'Is Trexiz regulated?',
    answer: 'Yes, Trexiz operates under the legal framework of Trexiz Limited and complies with global AML and KYC regulations.',
  },
  {
    question: 'What trading platforms does Trexiz offer?',
    answer: 'Trexiz supports MetaTrader 5 (MT5), accessible via web, desktop, and mobile.',
  },
  {
    question: 'What is the minimum deposit to start trading?',
    answer: 'The minimum deposit is $50, depending on your selected plan.',
  },
  {
    question: 'What is the Trexiz Introducing Broker (IB) Program?',
    answer: 'It allows you to earn commissions by referring clients. The more your referrals trade, the more you earn.',
  },
  {
    question: 'How do I become an IB partner?',
    answer: 'Register through our website. Once approved, you’ll get a unique referral link and dashboard access.',
  },
  {
    question: 'Can I earn from Sub-IBs under me?',
    answer: 'Yes, Trexiz offers a Master IB structure where you also earn from your sub-IBs’ performance.',
  },
  {
    question: 'Where can I track my clients and commissions?',
    answer: 'From your secure IB dashboard inside the Trexiz Client Area.',
  },
  {
    question: 'Do IBs need to be active traders?',
    answer: 'No. You can earn purely through referrals without actively trading.',
  },
  {
    question: 'How are IB commissions calculated?',
    answer: 'Based on trading volume of referred clients. Each trade earns you a rebate.',
  },
  {
    question: 'When are commissions credited?',
    answer: 'Commissions are credited in real time once client trades are closed.',
  },
  {
    question: 'How can I withdraw my IB commissions?',
    answer: 'Through bank transfer, crypto, or other supported options inside your Client Area.',
  },
  {
    question: 'Is there a minimum withdrawal amount?',
    answer: 'Yes, $10 for most methods. It may vary based on your withdrawal channel.',
  },
  {
    question: 'Can I transfer my IB earnings to my trading account?',
    answer: 'Yes, instantly from the Client Area.',
  },
  {
    question: 'Is my data and account secure?',
    answer: 'Yes, with encryption, secure servers, and optional 2FA enabled.',
  },
  {
    question: 'What documents are required for verification?',
    answer: 'A government-issued ID and a utility bill or bank statement for address verification.',
  },
  {
    question: 'How do I contact Trexiz support?',
    answer: 'Via live chat or email at support@trexiz.com. We’re available 24/7.',
  },
  {
    question: 'Can I update my personal info after registration?',
    answer: 'Yes, from your Client Area. Some changes may require re-verification.',
  },
  {
    question: 'What if I forget my password?',
    answer: 'Use the "Forgot Password" option on the login page to reset it securely via email.',
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqComponent;
