import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-text-muted text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <Card className="card-glass animate-slide-up">
              <CardContent className="p-8 prose prose-invert max-w-none">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Controller Contact</h2>
                    <p className="text-text-muted">
                      TRALIS AI<br />
                      Email: contact@tralisai.com
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Data Processing Purposes</h2>
                    <p className="text-text-muted mb-2">We collect and process your personal data for the following purposes:</p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1">
                      <li>Lead management and customer relationship management</li>
                      <li>Business communications and consultation scheduling</li>
                      <li>Service delivery and project management</li>
                      <li>Marketing communications (with your consent)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Legal Basis</h2>
                    <p className="text-text-muted mb-2">We process your data based on:</p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1">
                      <li><strong>Consent:</strong> For marketing communications and optional data processing</li>
                      <li><strong>Legitimate Interest:</strong> For lead management and business operations</li>
                      <li><strong>Contract:</strong> For service delivery when you engage our services</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Data Retention</h2>
                    <p className="text-text-muted">
                      We retain your personal data for up to 24 months from last contact, unless:
                    </p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                      <li>You request deletion of your data</li>
                      <li>Legal requirements mandate longer retention</li>
                      <li>You become a client (separate retention policies apply)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Your Rights</h2>
                    <p className="text-text-muted mb-2">Under GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1">
                      <li>Access your personal data</li>
                      <li>Rectify inaccurate data</li>
                      <li>Erase your data ("right to be forgotten")</li>
                      <li>Restrict processing</li>
                      <li>Data portability</li>
                      <li>Object to processing</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                    <p className="text-text-muted mt-3">
                      To exercise these rights, contact us at contact@tralisai.com
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">Data Processors</h2>
                    <p className="text-text-muted">
                      We may share your data with trusted service providers including:
                    </p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                      <li>Cloud hosting providers (AWS, Google Cloud)</li>
                      <li>Email service providers</li>
                      <li>Analytics platforms</li>
                      <li>CRM systems</li>
                    </ul>
                    <p className="text-text-muted mt-3">
                      All processors are bound by data processing agreements ensuring appropriate safeguards.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sora text-xl font-semibold mb-3">International Transfers</h2>
                    <p className="text-text-muted">
                      Your data may be transferred outside the EEA. We ensure adequate protection through:
                    </p>
                    <ul className="list-disc pl-6 text-text-muted space-y-1 mt-2">
                      <li>Standard Contractual Clauses (SCCs)</li>
                      <li>Adequacy decisions</li>
                      <li>Certification schemes</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 p-4 rounded-lg border border-border">
                    <p className="text-sm text-text-muted">
                      <strong>Legal Notice:</strong> This is a template privacy policy. Please review with qualified legal counsel 
                      before implementation to ensure compliance with applicable laws and regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;