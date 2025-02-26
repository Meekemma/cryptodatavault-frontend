import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <button onClick={() => window.history.back()} className="flex items-center text-blue-600 hover:text-blue-800">
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p><strong>Last Updated:</strong> [Date]</p>
      <p>This Cookie Policy explains how [Platform Name] ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our platform. By using our platform, you consent to the use of cookies as described in this policy. If you do not agree with this policy, please adjust your browser settings or refrain from using our platform.</p>
      
      <h2 className="text-2xl font-bold mt-6">1. What Are Cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help improve user experience by remembering preferences, enabling essential functionalities, and providing insights into website performance. We also use similar technologies such as web beacons, pixels, and local storage.</p>
      
      <h2 className="text-2xl font-bold mt-6">2. How We Use Cookies</h2>
      <p>We use cookies and similar technologies to:</p>
      <ul className="list-disc pl-6">
        <li>Authenticate users and maintain secure sessions.</li>
        <li>Remember user preferences, such as language and theme settings.</li>
        <li>Analyze website traffic and improve platform functionality.</li>
        <li>Deliver personalized content and advertisements.</li>
        <li>Detect and prevent fraudulent activities.</li>
        <li>Measure the effectiveness of our marketing campaigns.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">3. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for the platform to function properly. They enable core functionalities such as user authentication, account security, and payment processing. Without these cookies, certain features may not work.
        </li>
        <li>
          <strong>Performance Cookies:</strong> These cookies collect anonymous data on how users interact with our platform, such as page visits and error messages. They help us improve performance and user experience.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies remember your preferences (e.g., language, region) to provide a personalized experience.
        </li>
        <li>
          <strong>Targeting/Advertising Cookies:</strong> These cookies track your browsing behavior to deliver relevant ads and offers. They may also be used to measure the effectiveness of advertising campaigns.
        </li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">4. Managing Cookies</h2>
      <ul className="list-disc pl-6">
        <li>You can control or delete cookies through your browser settings. Most browsers allow you to block or remove cookies, but disabling essential cookies may affect your ability to use certain features of our platform.</li>
        <li>To manage cookies, refer to your browser’s help section or visit <a href="https://www.allaboutcookies.org" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a> for detailed instructions.</li>
        <li>You can also use our platform’s cookie consent tool to manage your preferences for non-essential cookies.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">5. Third-Party Cookies</h2>
      <ul className="list-disc pl-6">
        <li>We may use third-party services, such as analytics providers (e.g., Google Analytics) and advertising partners, which may set their own cookies.</li>
        <li>These third-party cookies are governed by the respective privacy policies of the third parties. We do not have control over these cookies.</li>
        <li>For more information about how these third parties use cookies, please review their privacy policies.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">6. Other Tracking Technologies</h2>
      <ul className="list-disc pl-6">
        <li><strong>Web Beacons:</strong> Small graphic images used to track user activity and measure campaign effectiveness.</li>
        <li><strong>Pixels:</strong> Code snippets used to track conversions and user behavior.</li>
        <li><strong>Local Storage:</strong> Used to store data on your device for faster load times and improved performance.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">7. Changes to This Policy</h2>
      <ul className="list-disc pl-6">
        <li>We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements.</li>
        <li>Significant changes will be communicated via email or platform notifications.</li>
        <li>Your continued use of the platform after changes constitutes acceptance of the updated policy.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6">8. Contact Information</h2>
      <p>If you have any questions or concerns about this Cookie Policy, please contact us at [Support Email].</p>
    </div>
  );
};

export default CookiePolicy;