import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Users, Shield, TrendingUp, ArrowRight, Heart, Star, Trophy, Building } from 'lucide-react';

const PermanentStaffing = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "90-day replacement guarantee for all permanent placements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Cultural Fit",
      description: "Thorough assessment of cultural alignment and team compatibility"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Focus on long-term career growth and professional development"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "Deep understanding of technology roles across various industries"
    }
  ];

  const roles = [
    {
      category: "Leadership Roles",
      positions: ["CTO", "VP Engineering", "Engineering Manager", "Technical Lead", "Product Manager"]
    },
    {
      category: "Development",
      positions: ["Senior Full-Stack Developer", "Frontend Architect", "Backend Engineer", "Mobile Developer"]
    },
    {
      category: "Infrastructure",
      positions: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Platform Engineer"]
    },
    {
      category: "Data & AI",
      positions: ["Data Engineer", "Machine Learning Engineer", "Data Scientist", "AI Research Scientist"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Job Requirements Analysis",
      description: "Deep dive into role requirements, team dynamics, and company culture"
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      description: "Leverage our network and advanced sourcing techniques to find top talent"
    },
    {
      step: "03",
      title: "Comprehensive Screening",
      description: "Technical assessments, cultural fit evaluation, and background verification"
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "Manage the entire interview process from scheduling to feedback collection"
    },
    {
      step: "05",
      title: "Offer Management",
      description: "Negotiate terms and ensure smooth transition for successful candidates"
    },
    {
      step: "06",
      title: "Onboarding Support",
      description: "Support during the first 90 days to ensure successful integration"
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
              Permanent Staffing Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build your dream tech team with permanent hires who will drive your company's growth and innovation for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Hire Permanent Staff
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Heart className="mr-2 h-5 w-5" />
                Build Your Team
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
              Why Choose Permanent Staffing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Long-term investment in talent that grows with your organization
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

      {/* Roles Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Permanent Roles We Fill
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From entry-level to executive positions across all technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {roles.map((category, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.positions.map((position, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{position}</span>
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
              Our Permanent Staffing Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive approach to finding the perfect long-term team members
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven success in permanent placements across the tech industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Placement Success Rate</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">30</div>
              <p className="text-muted-foreground">Days Average Time to Hire</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">2Y+</div>
              <p className="text-muted-foreground">Average Tenure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us help you find permanent team members who will contribute to your success for years to come
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Start Building Your Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PermanentStaffing;