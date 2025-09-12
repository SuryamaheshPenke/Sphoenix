import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, CheckCircle, ArrowRight, Briefcase, Target, Calendar } from 'lucide-react';

const ContractStaffing = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Rapid Deployment",
      description: "Deploy skilled contractors within 48-72 hours for urgent project needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Flexible Scaling",
      description: "Scale your team up or down based on project requirements and budget"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Specialized Skills",
      description: "Access niche technical skills for specific projects or technologies"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Project-Based",
      description: "Perfect for short-term projects, seasonal work, or specific deliverables"
    }
  ];

  const roles = [
    "Full-Stack Developers",
    "Frontend Specialists",
    "Backend Engineers",
    "DevOps Engineers",
    "Data Scientists",
    "Cloud Architects",
    "Mobile Developers",
    "QA Engineers",
    "Cybersecurity Experts",
    "UI/UX Designers"
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your project needs, timeline, and required skill sets"
    },
    {
      step: "02",
      title: "Talent Matching",
      description: "Our team identifies and vets the best contractors for your specific needs"
    },
    {
      step: "03",
      title: "Quick Onboarding",
      description: "Fast-track onboarding process to get contractors productive immediately"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous support and performance monitoring throughout the contract"
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
              Contract Staffing Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access top-tier IT contractors for your short-term projects, peak workloads, and specialized technical needs with flexible engagement models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Find Contractors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Discuss Requirements
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
              Why Choose Contract Staffing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible, cost-effective, and rapid access to specialized talent for your project needs
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

      {/* Available Roles Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contract Roles Available
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide skilled contractors across all major technology domains
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 glass-effect rounded-lg hover-scale animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Contract Staffing Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined process to get you the right contractors quickly
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Hire Contract Staff?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get access to pre-vetted IT contractors who can start immediately and deliver results
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Start Hiring Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContractStaffing;