import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <button onClick={() => window.history.back()} className="flex items-center text-blue-600 hover:text-blue-800">
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-700"><strong>Last Updated:</strong> May 1, 2025</p>
      <p>Welcome to Trexiz.com! These Terms and Conditions ("Terms") govern your access and use of our crypto investment platform. By accessing or using our platform, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our platform.</p>

      <h2 className="text-2xl font-bold mt-6">1. Acceptance of Terms</h2>
      <p>By creating an account and using our services, you agree to abide by these Terms and our Privacy Policy. If you do not agree, please do not use our platform.</p>

      <h2 className="text-2xl font-bold mt-6">2. Eligibility</h2>
      <ul className="list-disc pl-6">
        <li>You must be at least 18 years old to use our platform.</li>
        <li>By registering, you confirm that you have the legal capacity to enter into a contract.</li>
        <li>You are not a resident of a jurisdiction where cryptocurrency trading or investment is prohibited.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">3. Account Registration and Security</h2>
      <ul className="list-disc pl-6">
        <li>You are responsible for providing accurate and up-to-date information during registration.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
        <li>Any unauthorized use of your account must be reported to us immediately.</li>
        <li>We reserve the right to suspend or terminate accounts with incomplete or inaccurate information.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">4. Investment Plans and Payments</h2>
      <p>We offer three subscription plans: <strong>Starter, Standard, and Advance</strong>.</p>
      <ul className="list-disc pl-6">
        <li>Users must pay the required subscription fee to enroll in an investment plan.</li>
        <li>Investment funds will grow over time, with tokens added to the account balance as per the plan’s terms.</li>
        <li>Payments must be made using the approved payment methods available on our platform.</li>
        <li>All payments are final and non-refundable unless otherwise stated in these Terms.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">5. Returns and Investment Growth</h2>
      <ul className="list-disc pl-6">
        <li>Returns on investment are calculated based on the selected plan.</li>
        <li>Growth of funds and distribution of tokens is subject to market conditions and platform policies.</li>
        <li>We do not guarantee specific profits or returns on investments.</li>
        <li>Past performance is not indicative of future results.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">6. Referral Program and Bonuses</h2>
      <ul className="list-disc pl-6">
        <li>Users can earn bonuses through referrals.</li>
        <li>Referral bonuses are subject to the platform's policies and may change at any time.</li>
        <li>Abuse of the referral program (e.g., creating fake accounts) will result in account termination and forfeiture of bonuses.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">7. Withdrawal Policy</h2>
      <ul className="list-disc pl-6">
        <li>Users may withdraw funds as per the conditions of their selected plan.</li>
        <li>Withdrawals must be requested through the platform and are subject to processing times.</li>
        <li>We reserve the right to review and approve withdrawal requests to prevent fraudulent activities.</li>
        <li>Withdrawal fees may apply, depending on the payment method and plan.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">8. Newsletter Subscription</h2>
      <ul className="list-disc pl-6">
        <li>By subscribing to our newsletter, you agree to receive updates, promotions, and investment insights.</li>
        <li>You may unsubscribe at any time through the provided link in our emails.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">9. Prohibited Activities</h2>
      <ul className="list-disc pl-6">
        <li>Engage in fraudulent or illegal activities.</li>
        <li>Use the platform for money laundering or other unlawful financial activities.</li>
        <li>Attempt to hack, disrupt, or interfere with the platform’s operations.</li>
        <li>Use the platform to violate any laws, regulations, or third-party rights.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">10. Security and Liability</h2>
      <ul className="list-disc pl-6">
        <li>We implement security measures to protect user accounts and transactions.</li>
        <li>However, we are not responsible for losses due to hacking, unauthorized access, or unforeseen cyber threats.</li>
        <li>Users are advised to take necessary precautions, such as enabling two-factor authentication (2FA).</li>
        <li>We are not liable for losses caused by user negligence, such as sharing login credentials.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">11. Intellectual Property</h2>
      <ul className="list-disc pl-6">
        <li>All content, logos, and trademarks on the platform are the property of Trexiz.com and are protected by intellectual property laws.</li>
        <li>You may not use, copy, or distribute any content without our prior written consent.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">12. Modifications to Terms</h2>
      <ul className="list-disc pl-6">
        <li>We reserve the right to update or modify these Terms at any time.</li>
        <li>Users will be notified of significant changes through email or platform announcements.</li>
        <li>Continued use of the platform after changes constitutes acceptance of the updated Terms.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">13. Termination of Account</h2>
      <ul className="list-disc pl-6">
        <li>We may suspend or terminate accounts that violate these Terms.</li>
        <li>Users may request account closure, but obligations related to past transactions will remain enforceable.</li>
        <li>Upon termination, any remaining funds in your account will be processed according to our withdrawal policy.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">14. Limitation of Liability</h2>
      <ul className="list-disc pl-6">
        <li>We do not guarantee profits or the security of investments.</li>
        <li>We are not liable for losses due to market fluctuations, technical issues, or unforeseen circumstances.</li>
        <li>Users invest at their own risk.</li>
        <li>Our total liability to you for any claims arising from these Terms or your use of the platform is limited to the amount you have paid us in the last 12 months.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">15. Indemnification</h2>
      <p>You agree to indemnify and hold Trexiz.com, its affiliates, and their respective officers, directors, and employees harmless from any claims, losses, or damages arising from your use of the platform or violation of these Terms.</p>

      <h2 className="text-2xl font-bold mt-6">16. Governing Law and Dispute Resolution</h2>
      <ul className="list-disc pl-6">
        <li>These Terms are governed by the laws of your applicable jurisdiction.</li>
        <li>Any disputes shall be resolved through arbitration or legal proceedings as per applicable laws.</li>
        <li>You agree to waive your right to participate in a class-action lawsuit or class-wide arbitration.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">17. Force Majeure</h2>
      <p>We are not liable for any failure or delay in performance due to events beyond our control, including but not limited to natural disasters, war, terrorism, or technical failures.</p>

      <h2 className="text-2xl font-bold mt-6">18. Severability</h2>
      <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>

      <h2 className="text-2xl font-bold mt-6">19. Contact Information</h2>
      <p>For any questions or concerns regarding these Terms, please contact us at <a href="mailto:support@trexiz.com" className="text-blue-600">support@trexiz.com</a>.</p>
    </div>
  );
};

export default TermsConditions;
