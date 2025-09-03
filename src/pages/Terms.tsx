import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-text-muted text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <Card className="card-glass animate-slide-up">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p className="text-text-muted">
                    By accessing and using the TRALIS AI website and services, you accept and agree to be bound by 
                    the terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">2. Website Usage</h2>
                  <p className="text-text-muted mb-3">
                    You may use our website for lawful purposes only. You agree not to use the site:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1">
                    <li>In any way that violates applicable laws or regulations</li>
                    <li>To transmit or send unsolicited commercial communications</li>
                    <li>To impersonate any person or entity</li>
                    <li>To interfere with or disrupt the service or servers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">3. Intellectual Property Rights</h2>
                  <p className="text-text-muted">
                    The content, design, graphics, and other materials on this website are protected by intellectual 
                    property laws. TRALIS AI retains all rights to proprietary methodologies, frameworks, and 
                    generic software components. Client-specific deliverables are owned by the client upon full payment.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">4. Service Delivery</h2>
                  <p className="text-text-muted mb-3">
                    Our services are provided on a project basis with terms defined in separate service agreements:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1">
                    <li>Project scope and deliverables will be documented in writing</li>
                    <li>Timelines are estimates and may vary based on data availability</li>
                    <li>Client cooperation is required for successful project completion</li>
                    <li>Changes to scope may result in additional fees</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">5. Data Protection and Privacy</h2>
                  <p className="text-text-muted">
                    We are committed to protecting your privacy and handling your data responsibly. 
                    Please refer to our Privacy Policy for detailed information about data collection, 
                    processing, and your rights under applicable data protection laws.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">6. Limitation of Liability</h2>
                  <p className="text-text-muted">
                    TRALIS AI shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages, including without limitation, loss of profits, data, use, 
                    goodwill, or other intangible losses, resulting from your use of the service.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">7. Disclaimers</h2>
                  <p className="text-text-muted mb-3">
                    The information on this website is provided on an "as is" basis:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1">
                    <li>We make no warranties about completeness, accuracy, or reliability</li>
                    <li>Any action taken based on website information is at your own risk</li>
                    <li>We do not guarantee uninterrupted or error-free service</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">8. Indemnification</h2>
                  <p className="text-text-muted">
                    You agree to defend, indemnify, and hold harmless TRALIS AI from and against any 
                    claims, damages, obligations, losses, liabilities, costs, or debt arising from 
                    your use of and access to the service.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">9. Termination</h2>
                  <p className="text-text-muted">
                    We may terminate or suspend your access to our service immediately, without prior notice, 
                    for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">10. Governing Law</h2>
                  <p className="text-text-muted">
                    These Terms shall be interpreted and governed by the laws of the United Arab Emirates. 
                    Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">11. Changes to Terms</h2>
                  <p className="text-text-muted">
                    We reserve the right to modify these terms at any time. Changes will be effective 
                    immediately upon posting to the website. Your continued use constitutes acceptance 
                    of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">12. Contact Information</h2>
                  <p className="text-text-muted">
                    Questions about the Terms of Service should be sent to contact@tralisai.com
                  </p>
                </div>

                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-text-muted">
                    <strong>Legal Notice:</strong> This is a template terms of service document. 
                    Please review with qualified legal counsel before implementation to ensure compliance 
                    with applicable laws and regulations in your jurisdiction.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;