import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, ArrowRight, CheckCircle, Layers, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SoftwareArchitecture = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'System Design',
      description: 'Design scalable and maintainable software architectures for complex systems.',
      features: ['Microservices architecture', 'API design', 'Event-driven systems', 'Distributed computing']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Architecture',
      description: 'Optimize data flow and storage solutions for maximum performance and reliability.',
      features: ['Database design', 'Data modeling', 'ETL pipelines', 'Data governance']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Enhance system performance through architectural improvements and best practices.',
      features: ['Load balancing', 'Caching strategies', 'Query optimization', 'Resource management']
    }
  ];

  const architectures = [
    {
      name: 'Microservices',
      description: 'Scalable, maintainable service-oriented architecture',
      benefits: ['Independent deployment', 'Technology diversity', 'Fault isolation', 'Team autonomy']
    },
    {
      name: 'Event-Driven',
      description: 'Reactive systems with asynchronous communication',
      benefits: ['Real-time processing', 'Loose coupling', 'Scalability', 'Resilience']
    },
    {
      name: 'Serverless',
      description: 'Function-as-a-Service for cost-effective computing',
      benefits: ['Auto-scaling', 'Pay-per-use', 'No server management', 'Fast deployment']
    }
  ];

  const technologies = [
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go', '.NET'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
    { category: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'Next.js'] }
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
                Software{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Architecture
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Design robust, scalable, and maintainable software architectures that power your applications and drive innovation.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Design Architecture
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
                Architecture Advisory Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our software architecture experts help you build systems that scale, perform, and evolve with your business needs.
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

        {/* Architecture Patterns */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Modern Architecture Patterns
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We implement proven architectural patterns that ensure your software is scalable, maintainable, and future-ready.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              {architectures.map((arch, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                >
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground text-center">
                    {arch.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    {arch.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Benefits:</h4>
                    <ul className="space-y-2">
                      {arch.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Technology Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work with cutting-edge technologies to build architectures that leverage the best tools for your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <div key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Our Architecture Process
              </h2>
            </div>
            
            <div className="grid md:grid-cols-6 gap-6 animate-scale-in">
              {[
                { step: '01', title: 'Requirements', description: 'Analyze functional and non-functional requirements' },
                { step: '02', title: 'Design', description: 'Create comprehensive system architecture' },
                { step: '03', title: 'Review', description: 'Validate design with stakeholders' },
                { step: '04', title: 'Prototype', description: 'Build proof of concept' },
                { step: '05', title: 'Implement', description: 'Guide development teams' },
                { step: '06', title: 'Optimize', description: 'Monitor and improve performance' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 animate-slide-in-right">
              {[
                { value: '200+', label: 'Architectures Designed', description: 'Successful system implementations' },
                { value: '99.9%', label: 'System Uptime', description: 'Average availability across projects' },
                { value: '10x', label: 'Performance Gain', description: 'Average improvement in system performance' },
                { value: '50%', label: 'Development Speed', description: 'Faster delivery with proper architecture' }
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

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Build Better Software?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our architecture experts help you design systems that scale with your business and stand the test of time.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Discuss Your Architecture
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SoftwareArchitecture;