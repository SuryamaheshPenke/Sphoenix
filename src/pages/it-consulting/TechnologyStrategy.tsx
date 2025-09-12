import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Settings, ArrowRight, CheckCircle, Target, BarChart3, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TechnologyStrategy = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Strategic Planning',
      description: 'Develop comprehensive technology roadmaps aligned with business objectives.',
      features: ['Business-IT alignment', 'Technology roadmapping', 'Investment planning', 'Risk assessment']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Technology Assessment',
      description: 'Evaluate current technology landscape and identify optimization opportunities.',
      features: ['Infrastructure audit', 'Application portfolio review', 'Performance analysis', 'Gap identification']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Strategy',
      description: 'Foster innovation through emerging technologies and strategic partnerships.',
      features: ['Emerging tech evaluation', 'Innovation frameworks', 'R&D planning', 'Partnership strategy']
    }
  ];

  const frameworks = [
    {
      name: 'TOGAF',
      description: 'Enterprise Architecture framework for strategic IT planning'
    },
    {
      name: 'COBIT',
      description: 'IT governance and management framework'
    },
    {
      name: 'ITIL',
      description: 'IT service management best practices'
    },
    {
      name: 'Agile',
      description: 'Iterative development and delivery methodologies'
    }
  ];

  const benefits = [
    'Align technology investments with business goals',
    'Reduce IT costs through optimization',
    'Improve operational efficiency and productivity',
    'Enhance competitive advantage through innovation',
    'Minimize technology risks and security vulnerabilities',
    'Enable scalable and sustainable growth'
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
                Technology{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Strategy
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Develop winning technology strategies that drive business growth and competitive advantage in the digital age.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Build Strategy
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
                Strategic Technology Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technology strategy consulting helps organizations make informed decisions about their technology investments and future direction.
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Our Strategic Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a proven methodology to develop technology strategies that deliver measurable business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 animate-fade-in-up">
              {[
                { step: '01', title: 'Discovery', description: 'Understand business goals and current state' },
                { step: '02', title: 'Analysis', description: 'Assess technology landscape and capabilities' },
                { step: '03', title: 'Strategy', description: 'Develop comprehensive technology roadmap' },
                { step: '04', title: 'Planning', description: 'Create detailed implementation plans' },
                { step: '05', title: 'Execution', description: 'Support strategy implementation and monitoring' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                  Industry-Standard Frameworks
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We leverage proven frameworks and methodologies to ensure your technology strategy is built on solid foundations and industry best practices.
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
                <div className="grid grid-cols-2 gap-6">
                  {frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-3">{framework.name}</h3>
                      <p className="text-sm text-muted-foreground">{framework.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Measurable Results
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 animate-scale-in">
              {[
                { value: '300+', label: 'Strategic Projects', description: 'Successfully delivered' },
                { value: '85%', label: 'Cost Reduction', description: 'Average IT cost savings' },
                { value: '2.5x', label: 'ROI Improvement', description: 'Technology investment returns' },
                { value: '60%', label: 'Faster Delivery', description: 'Time-to-market improvement' }
              ].map((metric, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-poppins font-semibold mb-2 text-foreground">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Industry Experience
              </h2>
            </div>
            
            <div className="grid md:grid-cols-6 gap-6 animate-fade-in-up">
              {[
                'Financial Services',
                'Healthcare',
                'Manufacturing',
                'Retail & E-commerce',
                'Government',
                'Education'
              ].map((industry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <span className="text-foreground font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Define Your Technology Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to develop a comprehensive technology strategy that drives innovation and delivers sustainable competitive advantage.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Start Strategy Development
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyStrategy;