import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Crown, Target, Network, ArrowRight, Star, Users, TrendingUp, Shield } from 'lucide-react';

const ExecutiveHiring = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: "C-Suite Expertise",
      description: "Specialized in placing CTOs, VPs, and other technology leadership roles"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Executive Network",
      description: "Access to an exclusive network of senior technology executives"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Fit",
      description: "Focus on strategic alignment and long-term vision compatibility"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Confidential Process",
      description: "Discreet and confidential executive search process"
    }
  ];

  const roles = [
    {
      title: "Chief Technology Officer (CTO)",
      description: "Technology strategy and overall technical leadership",
      requirements: ["15+ years tech experience", "Previous CTO/VP role", "Team building expertise", "Strategic vision"]
    },
    {
      title: "VP of Engineering",
      description: "Engineering operations and large team management",
      requirements: ["12+ years experience", "Large team leadership", "Process optimization", "Technical excellence"]
    },
    {
      title: "Head of Product",
      description: "Product strategy and roadmap leadership",
      requirements: ["10+ years product", "Market strategy", "User experience focus", "Cross-functional leadership"]
    },
    {
      title: "Chief Data Officer",
      description: "Data strategy and analytics leadership",
      requirements: ["Data strategy expertise", "AI/ML knowledge", "Governance experience", "Business impact focus"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Executive Brief",
      description: "Detailed consultation on role requirements, company culture, and strategic objectives"
    },
    {
      step: "02",
      title: "Market Research",
      description: "Comprehensive market analysis and competitive intelligence gathering"
    },
    {
      step: "03",
      title: "Executive Search",
      description: "Targeted outreach to pre-qualified executives in our network"
    },
    {
      step: "04",
      title: "Assessment & Validation",
      description: "Rigorous evaluation including leadership assessment and cultural fit"
    },
    {
      step: "05",
      title: "Interview Facilitation",
      description: "Coordinated interview process with board members and key stakeholders"
    },
    {
      step: "06",
      title: "Offer & Integration",
      description: "Negotiation support and smooth transition planning"
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
              Executive Search
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Executive Hiring Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find transformational technology leaders who will drive your organization's strategic vision and innovation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Find Your Executive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Crown className="mr-2 h-5 w-5" />
                Executive Search
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
              Why Choose Our Executive Search?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise in technology executive recruitment
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

      {/* Executive Roles Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Executive Roles We Place
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Senior technology leadership positions across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {role.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-3">Key Requirements:</p>
                    {role.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{req}</span>
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
              Our Executive Search Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive and confidential executive search methodology
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

      {/* Success Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Executive Search Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven track record in executive placements
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">60</div>
              <p className="text-muted-foreground">Days Average Search</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">5Y+</div>
              <p className="text-muted-foreground">Average Tenure</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Executive search across diverse technology sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "SaaS & Cloud",
              "Fintech",
              "Healthcare Tech",
              "E-commerce",
              "AI & Machine Learning",
              "Cybersecurity",
              "Blockchain",
              "IoT & Hardware"
            ].map((industry, index) => (
              <div 
                key={index}
                className="text-center p-4 glass-effect rounded-lg hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2 text-primary-foreground">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <p className="font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Next Executive?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us help you find transformational technology leaders who will drive your organization forward
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Start Executive Search
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveHiring;