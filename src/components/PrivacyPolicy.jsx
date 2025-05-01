import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <button onClick={() => window.history.back()} className="flex items-center text-blue-600 hover:text-blue-800">
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Last Updated:</strong> May 1, 2025</p>
      <p>Welcome to Trexiz! This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our crypto investment platform. By accessing or using our platform, you agree to the terms outlined in this Privacy Policy. If you do not agree with this policy, please do not use our platform.</p>
      
      <h2 className="text-2xl font-bold mt-6">1. Information We Collect</h2>
      <ul className="list-disc pl-6">
        <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and payment details.</li>
        <li><strong>Account Information:</strong> Login credentials, user preferences, and security settings.</li>
        <li><strong>Transaction Information:</strong> Payment history, investment details, withdrawals, and referral bonuses.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system, and usage logs.</li>
        <li><strong>Location Information:</strong> Approximate location derived from your IP address or device settings.</li>
        <li><strong>Communication Data:</strong> Records of your interactions with our customer support team.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6">
        <li>To create, manage, and secure your account.</li>
        <li>To process payments, investments, and withdrawals.</li>
        <li>To provide customer support and respond to inquiries.</li>
        <li>To send updates, promotions, newsletters, and investment insights.</li>
        <li>To improve our platform’s security, functionality, and user experience.</li>
        <li>To comply with legal and regulatory requirements.</li>
        <li>To detect and prevent fraud, money laundering, and other illegal activities.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">3. Sharing of Information</h2>
      <ul className="list-disc pl-6">
        <li>We do not sell or rent your personal data to third parties.</li>
        <li>We may share data with trusted service providers (e.g., payment processors, cloud hosting providers) to facilitate transactions and platform operations.</li>
        <li>We may disclose information if required by law, legal processes, or government requests.</li>
        <li>In the event of a merger, acquisition, or sale of assets, user data may be transferred to the new entity.</li>
        <li>We may share aggregated or anonymized data for analytics, research, or marketing purposes.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">4. Data Security</h2>
      <ul className="list-disc pl-6">
        <li>We implement industry-standard security measures, including encryption, firewalls, and access controls, to protect user data.</li>
        <li>Despite our efforts, no system is completely secure. Users are encouraged to enable two-factor authentication (2FA) and use strong passwords.</li>
        <li>We are not responsible for losses due to unauthorized access resulting from user negligence (e.g., sharing login credentials).</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">5. Cookies and Tracking Technologies</h2>
      <ul className="list-disc pl-6">
        <li>We use cookies and similar technologies to enhance user experience, analyze platform performance, and deliver targeted advertisements.</li>
        <li>Users can manage cookie preferences through their browser settings or our platform’s cookie consent tool.</li>
        <li>Disabling cookies may affect the functionality of certain platform features.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">6. User Rights</h2>
      <ul className="list-disc pl-6">
        <li><strong>Access:</strong> Users can request access to their personal data.</li>
        <li><strong>Correction:</strong> Users can request corrections to inaccurate or incomplete information.</li>
        <li><strong>Deletion:</strong> Users can request the deletion of their personal data, subject to legal and regulatory obligations.</li>
        <li><strong>Opt-Out:</strong> Users can opt out of marketing communications at any time.</li>
        <li><strong>Data Portability:</strong> Users can request a copy of their data in a machine-readable format.</li>
        <li>To exercise these rights, please contact us at support@trexiz.com.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">7. Data Retention</h2>
      <ul className="list-disc pl-6">
        <li>We retain personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</li>
        <li>Transaction records and account information may be retained for regulatory compliance and audit purposes.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">8. International Data Transfers</h2>
      <ul className="list-disc pl-6">
        <li>Your data may be transferred to and processed in countries outside your jurisdiction, where data protection laws may differ.</li>
        <li>We ensure that such transfers comply with applicable data protection laws and that your data is protected through appropriate safeguards.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">9. Children’s Privacy</h2>
      <p>Our platform is not intended for individuals under the age of 18. We do not knowingly collect or process personal data from minors. If we become aware of such data, we will take steps to delete it.</p>
      
      <h2 className="text-2xl font-bold mt-6">10. Third-Party Links</h2>
      <p>Our platform may contain links to third-party websites or services. This Privacy Policy does not apply to such third parties. We encourage you to review their privacy policies before providing any personal data.</p>
      
      <h2 className="text-2xl font-bold mt-6">11. Changes to This Policy</h2>
      <ul className="list-disc pl-6">
        <li>We reserve the right to update this Privacy Policy at any time.</li>
        <li>Significant changes will be communicated via email or platform notifications.</li>
        <li>Continued use of the platform after changes constitutes acceptance of the updated Privacy Policy.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">12. Contact Information</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at support@trexiz.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
