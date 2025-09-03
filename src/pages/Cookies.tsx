import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Cookies = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-4">Cookies Policy</h1>
              <p className="text-text-muted text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <Card className="card-glass animate-slide-up">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">What are Cookies?</h2>
                  <p className="text-text-muted">
                    Cookies are small text files stored on your device when you visit our website. 
                    They help us improve your browsing experience and understand how our site is used.
                  </p>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">Types of Cookies We Use</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-card/50 p-4 rounded-lg border border-border">
                      <h3 className="font-sora font-medium mb-2">Necessary Cookies</h3>
                      <p className="text-text-muted text-sm">
                        Essential for the website to function properly. These cannot be disabled as they are 
                        necessary for providing services you have requested.
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        <strong>Examples:</strong> Session management, security features, load balancing
                      </p>
                    </div>

                    <div className="bg-card/50 p-4 rounded-lg border border-border">
                      <h3 className="font-sora font-medium mb-2">Analytics Cookies</h3>
                      <p className="text-text-muted text-sm">
                        Help us understand how visitors use our website by collecting anonymous information 
                        about page visits, time spent, and user interactions.
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        <strong>Examples:</strong> Google Analytics, heatmap tracking
                      </p>
                    </div>

                    <div className="bg-card/50 p-4 rounded-lg border border-border">
                      <h3 className="font-sora font-medium mb-2">Marketing Cookies</h3>
                      <p className="text-text-muted text-sm">
                        Used to track visitors across websites to display relevant advertisements and 
                        measure advertising campaign effectiveness.
                      </p>
                      <p className="text-text-muted text-sm mt-2">
                        <strong>Examples:</strong> LinkedIn Insight Tag, Google Ads tracking
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">Managing Your Cookie Preferences</h2>
                  <p className="text-text-muted mb-3">
                    You can control cookie settings through our cookie banner that appears when you first visit our site. 
                    You can also manage cookies through your browser settings:
                  </p>
                  
                  <ul className="list-disc pl-6 text-text-muted space-y-1">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">Cookie Consent</h2>
                  <p className="text-text-muted">
                    We obtain your consent before placing non-essential cookies on your device. 
                    You can withdraw consent at any time by:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                    <li>Adjusting your browser settings</li>
                    <li>Using our cookie preference center</li>
                    <li>Contacting us at contact@tralisai.com</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">Third-Party Cookies</h2>
                  <p className="text-text-muted">
                    Some cookies are set by third-party services that appear on our pages. We do not control these cookies. 
                    Please refer to their respective privacy policies:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                    <li>Google Analytics: policies.google.com/privacy</li>
                    <li>LinkedIn: linkedin.com/legal/privacy-policy</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-sora text-xl font-semibold mb-3">Impact of Disabling Cookies</h2>
                  <p className="text-text-muted">
                    Disabling certain cookies may affect website functionality:
                  </p>
                  <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                    <li>Some features may not work properly</li>
                    <li>Your preferences may not be remembered</li>
                    <li>Website performance may be reduced</li>
                  </ul>
                </div>

                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <p className="text-sm text-text-muted">
                    <strong>Contact Us:</strong> If you have questions about our cookie policy, 
                    please contact us at contact@tralisai.com
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

export default Cookies;