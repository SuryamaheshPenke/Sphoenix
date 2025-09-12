import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Heart, Globe, Trophy, ArrowRight, Users, Zap, Shield, Star, Coffee, Laptop, Plane, BookOpen } from 'lucide-react';

const BenefitsCulture = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration First",
      description: "We believe the best solutions come from diverse perspectives working together",
      details: "Cross-functional teams, open communication, and inclusive decision-making processes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Mindset",
      description: "We encourage experimentation and learning from both successes and failures",
      details: "Hackathons, innovation time, experimental projects, and learning from failures"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Our work creates meaningful solutions that make a difference worldwide",
      details: "Working with clients across continents to solve real-world challenges"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence & Growth",
      description: "We strive for excellence while supporting each other's continuous growth",
      details: "High standards, constructive feedback, mentorship, and professional development"
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      icon: <Heart className="h-6 w-6" />,
      items: [
        "Comprehensive health, dental, and vision insurance",
        "Mental health support and counseling services",
        "Annual wellness stipend for gym, yoga, or fitness",
        "Flexible working hours for work-life balance"
      ]
    },
    {
      category: "Professional Development",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
        "$3,000 annual learning and development budget",
        "Conference attendance and speaking opportunities",
        "Internal mentorship and coaching programs",
        "Certification and training course reimbursement"
      ]
    },
    {
      category: "Work Flexibility",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "100% remote work options",
        "Flexible working hours across time zones",
        "Unlimited paid time off policy",
        "Sabbatical opportunities for long-term employees"
      ]
    },
    {
      category: "Financial Benefits",
      icon: <Trophy className="h-6 w-6" />,
      items: [
        "Competitive salary with performance bonuses",
        "Equity participation in company growth",
        "401(k) matching up to 6%",
        "Annual profit-sharing program"
      ]
    },
    {
      category: "Equipment & Tools",
      icon: <Laptop className="h-6 w-6" />,
      items: [
        "Top-tier laptop and equipment allowance",
        "Home office setup stipend",
        "Premium software subscriptions and tools",
        "Yearly tech upgrade budget"
      ]
    },
    {
      category: "Team & Culture",
      icon: <Coffee className="h-6 w-6" />,
      items: [
        "Annual company retreats and team building",
        "Quarterly virtual social events",
        "Employee resource groups and communities",
        "Family-friendly policies and support"
      ]
    }
  ];

  const perks = [
    {
      title: "Innovation Days",
      description: "Monthly hack days to work on passion projects and experimental ideas",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Travel Opportunities",
      description: "Opportunities to travel for client meetings, conferences, and team retreats",
      icon: <Plane className="h-6 w-6" />
    },
    {
      title: "Open Source Contributions",
      description: "Dedicated time to contribute to open source projects and give back to the community",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Diversity & Inclusion",
      description: "Strong commitment to building diverse teams and inclusive workplace culture",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Full-Stack Developer",
      quote: "The learning opportunities here are incredible. I've grown more in 2 years than I did in my previous 5 years combined.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager",
      quote: "The flexibility to work remotely while still feeling connected to the team has been game-changing for my work-life balance.",
      avatar: "MR"
    },
    {
      name: "Priya Patel",
      role: "DevOps Engineer",
      quote: "I love how we're encouraged to experiment and try new technologies. Innovation isn't just encouraged, it's expected.",
      avatar: "PP"
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
              Benefits & Culture
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              More Than Just a Job
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our culture of innovation, growth, and meaningful work. We're building more than software – we're building careers and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/careers/open-positions')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Sphoenix
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      {value.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {value.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We invest in your success, well-being, and professional growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((category, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Perks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unique Perks & Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Special programs and initiatives that make Sphoenix unique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, index) => (
              <Card 
                key={index} 
                className="text-center glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {perk.icon}
                  </div>
                  <CardTitle className="text-lg">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {perk.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our team members about their experience at Sphoenix
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Remote-First Culture
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we maintain strong connections and collaboration across the globe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Globe className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Global Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Team members across 15+ countries working together seamlessly with overlapping hours and async communication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Coffee className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Virtual Coffee Chats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Regular informal meetups, virtual coffee breaks, and social hours to maintain strong personal connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Plane className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Annual Retreats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Company-wide retreats in exciting locations where the whole team comes together for planning and fun.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diversity & Inclusion
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a workplace where everyone can thrive and bring their authentic selves
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-muted-foreground">Women in leadership</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Nationalities represented</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Employee resource groups</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Inclusive hiring practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Part of Our Culture?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join a team that values your growth, well-being, and contribution to meaningful work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/careers/open-positions')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BenefitsCulture;