import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CloudInfrastructure = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Migration strategy', 'Data transfer', 'Testing & validation']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Security assessment', 'Compliance management', 'Identity & access management', 'Threat monitoring']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      features: ['Resource optimization', 'Auto-scaling', 'Performance monitoring', 'Cost optimization']
    }
  ];

  const cloudProviders = [
    { name: 'AWS', services: ['EC2', 'S3', 'RDS', 'Lambda', 'EKS'] },
    { name: 'Azure', services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions', 'AKS'] },
    { name: 'Google Cloud', services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'GKE'] }
  ];

  const benefits = [
    'Reduce infrastructure costs by 20-40%',
    'Improve scalability and flexibility',
    'Enhance disaster recovery capabilities',
    'Enable remote work and collaboration',
    'Accelerate application deployment',
    'Improve business continuity'
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
                Cloud{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Build scalable, secure, and cost-effective cloud infrastructure solutions that power your business growth.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Migrate to Cloud
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
                Cloud Infrastructure Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From strategy to implementation, we provide end-to-end cloud infrastructure services that transform your IT operations.
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

        {/* Cloud Providers Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Multi-Cloud Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're certified experts across all major cloud platforms, helping you choose the right solution for your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <h3 className="text-3xl font-bold text-primary mb-6">{provider.name}</h3>
                  <div className="space-y-3">
                    {provider.services.map((service, idx) => (
                      <div key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                  Cloud Infrastructure Benefits
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Move beyond traditional infrastructure limitations and unlock the full potential of cloud computing for your business.
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
                    Migration Timeline
                  </h3>
                  <div className="space-y-6">
                    {[
                      { phase: 'Week 1-2', title: 'Assessment', description: 'Infrastructure audit and migration planning' },
                      { phase: 'Week 3-6', title: 'Preparation', description: 'Environment setup and security configuration' },
                      { phase: 'Week 7-10', title: 'Migration', description: 'Gradual migration with testing at each phase' },
                      { phase: 'Week 11-12', title: 'Optimization', description: 'Performance tuning and cost optimization' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-20 px-2 py-1 bg-gradient-primary text-primary-foreground rounded text-xs text-center flex-shrink-0">
                          {item.phase}
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

        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Success Stories
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
              {[
                {
                  industry: 'E-commerce',
                  result: '40% Cost Reduction',
                  description: 'Migrated high-traffic e-commerce platform to AWS with auto-scaling'
                },
                {
                  industry: 'Healthcare',
                  result: '99.9% Uptime',
                  description: 'Implemented multi-region Azure infrastructure for critical healthcare systems'
                },
                {
                  industry: 'Finance',
                  result: '300% Performance',
                  description: 'Modernized legacy banking systems on Google Cloud with microservices'
                }
              ].map((story, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center">
                  <div className="text-sm text-primary font-semibold mb-2">{story.industry}</div>
                  <div className="text-3xl font-bold text-foreground mb-3">{story.result}</div>
                  <p className="text-muted-foreground text-sm">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Embrace the Cloud?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your infrastructure with our proven cloud migration and optimization strategies.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Start Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudInfrastructure;