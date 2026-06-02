export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy & Cookie Notice</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Privacy Policy</h2>
            <p>
              Mencine Co. Ltd ("we," "us," or "our") operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
                <ul className="list-circle list-inside space-y-1 ml-4 mt-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </li>
              <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Data</h2>
            <p>
              Mencine Co. Ltd uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> These are required for the website to function properly and cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors use our website so we can improve our services.</li>
              <li><strong>Marketing Cookies:</strong> These track your activity on our website and other websites to help advertisers deliver more relevant advertising.</li>
              <li><strong>Functional Cookies:</strong> These remember your preferences to provide you with enhanced, more personalized features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Management</h2>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
            <p>
              Most browsers allow you to control cookies through their settings. You can typically find these settings in your browser's "Options" or "Preferences" menu. Popular browsers include instructions for managing cookies at the following links:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. You also have the right to data portability and to object to processing of your personal data. To exercise any of these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p>
              Our service may contain links to third-party websites that are not operated by us. This privacy policy applies only to information collected through our service. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party site or service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the bottom of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy & Cookie Notice, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold">Mencine Co. Ltd</p>
              <p>Email: <a href="mailto:info@mencine.com" className="text-blue-600 hover:underline">info@mencine.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
            </div>
          </section>

          <section className="text-sm text-gray-500 mt-12 pt-8 border-t">
            <p>Last updated: {new Date().getFullYear()}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
