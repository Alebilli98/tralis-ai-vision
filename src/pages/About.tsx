import { ArrowRight, Target, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision",
      description: "Every metric matters. We ensure accuracy and reliability in all data models."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Speed", 
      description: "Fast delivery without compromising quality. From weeks to live dashboard."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security",
      description: "Enterprise-grade security and compliance standards protect your data."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Partnership",
      description: "We work as an extension of your team, not just a vendor."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Former McKinsey consultant with 10+ years in financial modeling and data architecture.",
      linkedin: "#"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-founder", 
      bio: "Ex-Google engineer specializing in AI/ML applications for enterprise finance solutions.",
      linkedin: "#"
    },
    {
      name: "Michael Kumar",
      role: "Head of Data Engineering",
      bio: "Previously led data teams at Scale AI and Stripe, expert in real-time data pipelines.",
      linkedin: "#"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-sora text-4xl lg:text-5xl font-bold mb-6">
              Clarity for modern finance teams
            </h1>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              We give finance and leadership a clear, reliable view of performance, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Most finance teams spend 80% of their time collecting and cleaning data, 
              leaving only 20% for actual analysis and decision-making. We flip this ratio. 
              By automating data collection and providing AI-powered insights, we help finance 
              professionals focus on what matters: strategic decisions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-text-muted text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Experienced professionals from top consulting and tech companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-glass hover:shadow-xl transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-sora font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-sora font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-text-muted text-sm mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin} 
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    LinkedIn →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center animate-fade-in">
            <h2 className="font-sora text-3xl lg:text-4xl font-bold mb-4">
              Let's map your KPIs
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform how your finance team works? Let's start the conversation.
            </p>
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/contact">
                Start the conversation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;