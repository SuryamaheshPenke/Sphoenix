import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Users, Zap, Globe, ArrowRight, Cog, Shield, Clock, Target } from 'lucide-react';

const DedicatedTeams = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Complete Teams",
      description: "Fully-formed, experienced teams ready to work on your projects immediately"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Scaling",
      description: "Scale your development capacity quickly without hiring overhead"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Talent",
      description: "Access top talent from around the world with diverse expertise"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Dedicated Focus",
      description: "Team works exclusively on your projects with full commitment"
    }
  ];

  const teamTypes = [
    {
      title: "Product Development Teams",
      description: "End-to-end product development with product managers, designers, and developers",
      roles: ["Product Manager", "UI/UX Designer", "Frontend Developer", "Backend Developer", "QA Engineer"],
      icon: <Cog className="h-8 w-8" />
    },
    {
      title: "Mobile App Teams",
      description: "Specialized teams for iOS, Android, and cross-platform mobile applications",
      roles: ["Mobile Architect", "iOS Developer", "Android Developer", "UI/UX Designer", "QA Specialist"],
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Data Science Teams",
      description: "Analytics, machine learning, and AI-focused teams for data-driven solutions",
      roles: ["Data Scientist", "ML Engineer", "Data Engineer", "Analytics Specialist", "AI Researcher"],
      icon: <Clock className="h-8 w-8" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Gathering",
      description: "Understanding your project scope, technology stack, and team composition needs"
    },
    {
      step: "02",
      title: "Team Assembly",
      description: "Carefully selecting and assembling the perfect team for your specific requirements"
    },
    {
      step: "03",
      title: "Team Integration",
      description: "Seamless integration with your existing processes and communication channels"
    },
    {
      step: "04",
      title: "Project Execution",
      description: "Dedicated team works exclusively on your projects with regular updates"
    },
    {
      step: "05",
      title: "Ongoing Management",
      description: "Continuous team optimization and performance monitoring"
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
              IT Staffing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dedicated Development Teams
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get complete, pre-assembled teams of skilled developers who work exclusively on your projects with full dedication and commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Get Your Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Users className="mr-2 h-5 w-5" />
                Discuss Team Needs
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
              Why Choose Dedicated Teams?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete development teams that integrate seamlessly with your business
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

      {/* Team Types Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Team Configurations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pre-configured teams optimized for different types of projects
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamTypes.map((team, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {team.icon}
                  </div>
                  <CardTitle className="text-xl">{team.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {team.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-3">Team Composition:</p>
                    {team.roles.map((role, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team Setup Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined process to get your dedicated team up and running quickly
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

      {/* Pricing Models Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the engagement model that best fits your project and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Fixed Price</CardTitle>
                <CardDescription>
                  Best for well-defined projects with clear scope and timeline
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Predictable costs</li>
                  <li>• Fixed deliverables</li>
                  <li>• Clear milestones</li>
                  <li>• Risk mitigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50 border-primary/30">
              <CardHeader>
                <Badge className="mb-4 bg-gradient-primary text-primary-foreground">Most Popular</Badge>
                <CardTitle className="text-2xl mb-4">Time & Material</CardTitle>
                <CardDescription>
                  Ideal for evolving projects with changing requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Flexible scope</li>
                  <li>• Pay for actual work</li>
                  <li>• Easy scaling</li>
                  <li>• Transparent billing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Dedicated Team</CardTitle>
                <CardDescription>
                  Perfect for long-term projects requiring ongoing development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Full-time dedication</li>
                  <li>• Team continuity</li>
                  <li>• Direct communication</li>
                  <li>• Long-term partnership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale with a Dedicated Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a complete development team that works exclusively on your projects and integrates seamlessly with your processes
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Build Your Dedicated Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DedicatedTeams;