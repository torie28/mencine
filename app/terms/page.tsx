export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on this website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display (commercial or non-commercial)
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Disclaimer
            </h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim and
              negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
            <p>
              Further, we do not warrant or make any representations concerning
              the accuracy, likely results, or reliability of the use of the
              materials on the website, or otherwise relating to such materials
              or on any sites linked to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Limitations
            </h2>
            <p>
              In no event shall we or our suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on this website, even if we or an
              authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on this website could include technical,
              typographical, or photographic errors. We do not warrant that any
              of the materials on our website are accurate, complete, or
              current. We may make changes to the materials contained on our
              website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and
              are not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by us of the
              site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Modifications
            </h2>
            <p>
              We may revise these terms of service for our website at any time
              without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the United Kingdom, and you
              irrevocably submit to the exclusive jurisdiction of the courts
              located in the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p className="font-semibold">Mencine Co. Ltd</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@mencine.com"
                  className="text-blue-600 hover:underline"
                >
                  info@mencine.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p>
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
