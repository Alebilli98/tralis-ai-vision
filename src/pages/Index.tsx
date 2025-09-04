import { ArrowRight, CheckCircle, BarChart3, Brain, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const valuePillars = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "One source of truth",
      description: "Bring spreadsheets, accounting, CRM, bank feeds, and more into a single model."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Designed for decisions",
      description: "KPIs that match your goals."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI assistance",
      description: "Summaries, variance explanations, forecasting."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast delivery",
      description: "From brief to live dashboard in weeks."
    }
  ];

  const howItWorks = [
    { step: "01", title: "Discovery", description: "Understand your business and data sources" },
    { step: "02", title: "Data & model", description: "Connect and clean your data streams" },
    { step: "03", title: "Dashboard", description: "Build custom views for your team" },
    { step: "04", title: "Iterate", description: "Refine and expand based on feedback" }
  ];

  const capabilities = [
    "Consolidated P&L and cash flow",
    "Budget vs actuals with drill-downs",
    "Alerts on variances",
    "Sales funnel and cohort analysis", 
    "AI-powered forecasting",
    "PDF/Excel exports & scheduled emails"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="text-primary text-sm font-medium">From API to KPI</span>
            </div>
            
            <h1 className="font-sora text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom finance dashboards built on{" "}
              <span className="text-gradient">your data</span>
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">
              Increase your revenue by 40%
            </p>
            
            <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect Excel, APIs, and ERP. See clear metrics, get AI summaries and forecasts, 
              and make faster decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Request a consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary text-lg px-8 py-4">
                <Link to="/services">See our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-text-muted text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              From discovery to deployment, we make it simple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center animate-slide-up" 
                   style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-sora font-bold">{item.step}</span>
                </div>
                <h3 className="font-sora font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">Featured capabilities</h2>
              <p className="text-text-muted text-lg">
                Everything you need to make data-driven decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-up"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="card-glass max-w-4xl mx-auto animate-scale-in">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <blockquote className="text-xl lg:text-2xl text-foreground mb-6 font-light leading-relaxed">
                "TRALIS AI turned our scattered spreadsheets into one dashboard. 
                We make decisions in hours, not weeks."
              </blockquote>
              <div className="text-text-muted">
                <div className="font-semibold">Sarah Mitchell</div>
                <div className="text-sm">CFO, TechFlow Solutions</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="text-center animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">
              Ready to transform your finance operations?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and show you how TRALIS AI can help
            </p>
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/contact">
                Request a consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
