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
    name: 'Alessio Bulletti',
    role: 'Co-Founder',
    bio: "Alessio is an established financial advisor with extensive experience in the financial and investment analysis sector. He holds an M.A. in Finance from the University of Siena. His career includes roles as a trader and later as a financial advisor at Fideuram, a leading Italian banking group, where he advised clients on investment strategies and financial planning. His deep understanding of market dynamics and client needs from a practical advisory perspective is invaluable for shaping Tralis AI's service offerings and ensuring they meet real-world financial demands.",
    linkedin:  'https://www.linkedin.com/in/alessio-bulletti-495ba3173/', 
    image: '/75f5242a-bbe2-4d72-b472-f6f3bbd77fa0.png',
  },
  {
    name: 'Martín Sannuto',
    role: 'Co-Founder',
    bio: "Martín is a finance professional with extensive experience in financial analysis, risk management and auditing in international settings. Martín holds a M.A. in Economics and Development from the University of Florence and began his career in Ernst & Young with experiences in Luxembourg and Australia in investment funds and corporate sector. After a short experience in Amazon Spain, driven by his entrepreneurial spirit decided to found Tralis AI.",
    linkedin:  'https://www.linkedin.com/in/mart%C3%ADn-sannuto-8b35939a/',
    image: '/fa9a40b5-80ee-42f5-a610-9fa2914746dc.png',
  },
  {
    name: 'Juan Ceruli',
    role: 'Co-Founder',
    bio: "Juan began his career as a trader at a major bank before transitioning to computer science, driven by a passion for electronic trading. He holds a Master's Degree in Computer Science from Northeastern University in Boston, MA, and a Bachelor's in Accounting from the University of Buenos Aires in Argentina. Juan's passions lie in finance, coding, problem-solving, and learning new technologies.",
    linkedin: 'https://www.linkedin.com/in/juan-ceruli/',
    image: '/e06d78f8-74ac-4ad4-a59a-1da046a59389.png',
  },
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
                  <img
  src={member.image}
  alt={member.name}
  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
/>

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
