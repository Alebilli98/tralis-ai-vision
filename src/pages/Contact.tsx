import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interests: [] as string[],
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Dashboards',
    'Data integration', 
    'AI insights',
    'Forecasting',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to contact@tralisai.com
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-screen flex items-center">
          <div className="container-max">
            <Card className="card-glass max-w-2xl mx-auto animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h2 className="font-sora text-2xl font-bold mb-4">Thanks for reaching out!</h2>
                <p className="text-text-muted mb-6">
                  We'll get back to you within 1 business day.
                </p>
                <Button asChild className="btn-secondary">
                  <a href="/">Back to Home</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-6">
              Let's discuss your goals
            </h1>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              Tell us about your goals and data sources. We'll reply to schedule a call.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-glass animate-slide-up">
                <CardHeader>
                  <CardTitle className="font-sora text-2xl">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Work email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Areas of interest</Label>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={formData.interests.includes(interest)}
                              onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                            />
                            <Label htmlFor={interest} className="text-sm">{interest}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                        className="mt-1"
                        placeholder="Tell us about your current challenges and what you're hoping to achieve..."
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        required
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData(prev => ({...prev, consent: checked as boolean}))}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I agree to the processing of my personal data according to the{' '}
                        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. *
                      </Label>
                    </div>

                    <Button type="submit" className="btn-primary w-full">
                      Send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="card-glass">
                <CardContent className="p-6">
                  <h3 className="font-sora font-semibold text-lg mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:contact@tralisai.com" className="text-text-muted text-sm hover:text-primary transition-colors">
                          contact@tralisai.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 mt-4">
                     <MapPin className="w-5 h-5 text-primary mt-1" />
                     <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-text-muted text-sm">We serve clients worldwide</p>
                     </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-text-muted text-sm">Within 1 business day</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
