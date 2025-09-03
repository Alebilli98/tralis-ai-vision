import { ArrowRight, Database, BarChart3, Settings, Brain, Zap, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Custom BI Dashboards",
      description: "CFO/CEO/Sales/Operations views tailored to your business needs and decision-making processes."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Integration", 
      description: "APIs, DBs, Excel/CSV; accounting, CRM, ERP, payments, bank feeds - all connected seamlessly."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Data Cleaning & Modeling",
      description: "Validation, reconciliations, scalable models that grow with your business."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "KPI Design",
      description: "Clear definitions, thresholds, owners - metrics that drive action and results."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Insights & Forecasting",
      description: "Summaries, variance explanations, cash-flow forecasts powered by advanced AI."
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "Automation & Alerts",
      description: "Scheduled refresh; email/Slack alerts to keep your team informed and responsive."
    }
  ];

  const faqs = [
    {
      question: "What tools do you use?",
      answer: "We work with your existing tools and can integrate with most modern platforms including QuickBooks, Salesforce, Excel, and custom APIs."
    },
    {
      question: "Where is our data stored?",
      answer: "Data can be hosted in your preferred environment - cloud or on-premise. We follow enterprise security standards and compliance requirements."
    },
    {
      question: "Who owns the deliverables?",
      answer: "You own all custom dashboards and data models we create. We retain rights to generic components and frameworks for future projects."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-6">
              Are you ready to upgrade your financial performance?
            </h1>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              From data collection to AI insights. We handle every step so you can focus on making decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-sora text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Demo video section */}
      <section className="container-max my-12">
       <video
       src="/video_per_sito.mp4"
       autoPlay
       muted
       loop
       playsInline
       className="w-full rounded-lg shadow-lg"
       />
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-text-muted text-lg">
                Common questions about our services and approach
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-glass animate-slide-up"
                      style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardContent className="p-6">
                    <h3 className="font-sora font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-text-muted">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="text-center animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">
              Request a consultation
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a tailored solution
            </p>
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/contact">
                Get started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
