import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Zap, ArrowRight, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DigitalTransformation = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, scalable solutions that drive business growth.',
      features: ['Cloud migration', 'API integration', 'Data modernization', 'Security enhancement']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      features: ['RPA implementation', 'Workflow design', 'AI integration', 'Performance monitoring']
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital roadmap', 'Technology assessment', 'ROI analysis', 'Change management']
    }
  ];

  const benefits = [
    'Increased operational efficiency by up to 40%',
    'Reduced IT maintenance costs by 30-50%',
    'Improved customer experience and satisfaction',
    'Enhanced data security and compliance',
    'Faster time-to-market for new products',
    'Better decision-making with real-time insights'
  ];

  const industries = [
    { name: 'Healthcare', description: 'Electronic health records, telemedicine platforms' },
    { name: 'Finance', description: 'Digital banking, blockchain, fintech solutions' },
    { name: 'Retail', description: 'E-commerce platforms, inventory management' },
    { name: 'Manufacturing', description: 'IoT integration, supply chain optimization' },
    { name: 'Education', description: 'Learning management systems, virtual classrooms' },
    { name: 'Government', description: 'Citizen services, digital governance platforms' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                Digital{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Transformation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Accelerate your business growth with comprehensive digital transformation strategies and cutting-edge technology solutions.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Start Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Transformation Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We help organizations reimagine their operations, modernize their technology stack, and create new value through digital innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                  Why Digital Transformation Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  In today's rapidly evolving business landscape, digital transformation isn't just an option—it's essential for survival and growth.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <h3 className="text-2xl font-poppins font-bold mb-6 text-foreground text-center">
                    Our Transformation Process
                  </h3>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'Assessment', description: 'Analyze current state and identify opportunities' },
                      { step: '02', title: 'Strategy', description: 'Develop comprehensive transformation roadmap' },
                      { step: '03', title: 'Implementation', description: 'Execute digital initiatives with expert guidance' },
                      { step: '04', title: 'Optimization', description: 'Continuous improvement and performance monitoring' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Industry Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We bring deep industry knowledge and specialized solutions to organizations across various sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 animate-scale-in">
              {[
                { value: '500+', label: 'Transformations Completed' },
                { value: '95%', label: 'Client Satisfaction Rate' },
                { value: '40%', label: 'Average Efficiency Gain' },
                { value: '18 Months', label: 'Average ROI Timeline' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how digital transformation can unlock new opportunities and drive sustainable growth for your organization.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTransformation;