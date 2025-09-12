import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Globe, Clock, DollarSign, ArrowRight, Wifi, Users, Shield, Zap } from 'lucide-react';

const RemoteTeams = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Talent Pool",
      description: "Access top developers from around the world without geographical constraints"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Effective",
      description: "Reduce operational costs while maintaining high-quality development standards"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Development",
      description: "Follow-the-sun development model for continuous progress on your projects"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Scaling",
      description: "Scale your development capacity quickly without office space limitations"
    }
  ];

  const services = [
    {
      title: "Offshore Development Teams",
      description: "Complete development teams working from cost-effective locations",
      features: ["Full project ownership", "Dedicated team leads", "Regular communication", "Quality assurance"],
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Nearshore Collaboration",
      description: "Teams in similar time zones for better collaboration and communication",
      features: ["Overlapping work hours", "Cultural alignment", "Easy travel access", "Real-time collaboration"],
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Hybrid Remote Teams",
      description: "Mix of on-site and remote developers for optimal flexibility",
      features: ["Flexible arrangement", "Best of both worlds", "Scalable model", "Risk mitigation"],
      icon: <Users className="h-8 w-8" />
    }
  ];

  const technologies = [
    "React & Angular",
    "Node.js & Python",
    "AWS & Azure",
    "Docker & Kubernetes",
    "MongoDB & PostgreSQL",
    "Machine Learning",
    "Mobile Development",
    "DevOps & CI/CD"
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your project needs, timeline, and preferred collaboration model"
    },
    {
      step: "02",
      title: "Team Selection",
      description: "Carefully selecting remote developers with the right skills and experience"
    },
    {
      step: "03",
      title: "Setup & Integration",
      description: "Setting up communication channels, tools, and integration processes"
    },
    {
      step: "04",
      title: "Project Execution",
      description: "Agile development with regular updates and transparent communication"
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Continuous quality monitoring and performance optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Remote Teams
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Remote Development Teams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build high-performing remote development teams with global talent that delivers exceptional results from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Build Remote Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Wifi className="mr-2 h-5 w-5" />
                Explore Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Remote Teams?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage the power of distributed development for your projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Remote Team Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the remote development model that best fits your needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-3">Key Features:</p>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our remote teams are skilled in the latest technologies and frameworks
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 glass-effect rounded-lg hover-scale animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Remote Team Setup Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined process to establish effective remote development teams
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security measures for remote development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Data Protection</h3>
              <p className="text-sm text-muted-foreground">GDPR compliant data handling and protection measures</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Secure Access</h3>
              <p className="text-sm text-muted-foreground">VPN and secure connection protocols for all team members</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Background Checks</h3>
              <p className="text-sm text-muted-foreground">Thorough vetting and background verification of all team members</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">IP Protection</h3>
              <p className="text-sm text-muted-foreground">Comprehensive NDAs and intellectual property protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Go Remote?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Build your high-performing remote development team and access global talent without boundaries
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Start Building Your Remote Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RemoteTeams;