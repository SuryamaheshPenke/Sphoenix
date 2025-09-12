import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Code, Globe, Star } from 'lucide-react';

const OpenPositions = () => {
  const navigate = useNavigate();

  const jobCategories = [
    {
      category: "Engineering",
      icon: <Code className="h-6 w-6" />,
      openings: 12,
      jobs: [
        {
          title: "Senior Full-Stack Developer",
          location: "Remote / New York",
          type: "Full-time",
          level: "Senior",
          description: "Lead development of our core platform using React, Node.js, and AWS",
          skills: ["React", "Node.js", "AWS", "TypeScript"]
        },
        {
          title: "DevOps Engineer",
          location: "Remote / San Francisco",
          type: "Full-time",
          level: "Mid-Senior",
          description: "Build and maintain our CI/CD pipelines and cloud infrastructure",
          skills: ["Docker", "Kubernetes", "AWS", "Terraform"]
        },
        {
          title: "Mobile Developer",
          location: "Remote",
          type: "Full-time",
          level: "Senior",
          description: "Develop cross-platform mobile applications using React Native",
          skills: ["React Native", "iOS", "Android", "JavaScript"]
        }
      ]
    },
    {
      category: "Product & Design",
      icon: <Star className="h-6 w-6" />,
      openings: 5,
      jobs: [
        {
          title: "Product Manager",
          location: "Remote / London",
          type: "Full-time",
          level: "Senior",
          description: "Drive product strategy and work with engineering teams to deliver features",
          skills: ["Product Strategy", "Analytics", "User Research", "Agile"]
        },
        {
          title: "UX/UI Designer",
          location: "Remote",
          type: "Full-time",
          level: "Mid-Senior",
          description: "Design intuitive user experiences for our web and mobile applications",
          skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
        }
      ]
    },
    {
      category: "Business & Operations",
      icon: <Users className="h-6 w-6" />,
      openings: 8,
      jobs: [
        {
          title: "Business Development Manager",
          location: "New York / Remote",
          type: "Full-time",
          level: "Senior",
          description: "Identify and pursue new business opportunities and partnerships",
          skills: ["Sales", "Partnerships", "Strategy", "Communication"]
        },
        {
          title: "Talent Acquisition Specialist",
          location: "Remote",
          type: "Full-time",
          level: "Mid-Senior",
          description: "Lead recruiting efforts to build our world-class team",
          skills: ["Recruiting", "HR", "Interview", "Sourcing"]
        },
        {
          title: "Operations Manager",
          location: "Remote / Chicago",
          type: "Full-time",
          level: "Senior",
          description: "Streamline operations and improve internal processes",
          skills: ["Operations", "Process Improvement", "Analytics", "Leadership"]
        }
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible remote work options",
    "Comprehensive health insurance",
    "Professional development budget",
    "Unlimited PTO policy",
    "Top-tier equipment and tools",
    "Team building and retreats",
    "Performance bonuses"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Careers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Growing Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build the future of technology consulting with us. We're looking for passionate individuals who want to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                View All Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/careers/how-to-apply')}
                className="hover-scale"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                How to Apply
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Open Positions</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Remote Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role across different departments and expertise areas
            </p>
          </div>
          
          <div className="space-y-12">
            {jobCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.openings} open positions</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.jobs.map((job, jobIndex) => (
                    <Card 
                      key={jobIndex} 
                      className="glass-effect hover-scale border-border/50 cursor-pointer"
                      onClick={() => navigate('/#contact')}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <Badge variant="outline">{job.level}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                        </div>
                        <CardDescription className="mt-2">
                          {job.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          className="w-full mt-4 bg-gradient-primary text-primary-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/#contact');
                          }}
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer competitive benefits and a culture that values growth and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 glass-effect rounded-lg hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes Sphoenix a great place to work
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Global Remote Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Work from anywhere with team members across the globe. We embrace async communication and flexible schedules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Growth Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Continuous learning and development opportunities. We invest in your professional growth and career advancement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Star className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Work on cutting-edge projects with the latest technologies. Your ideas and innovations are valued and implemented.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple and straightforward application process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  01
                </div>
                <h3 className="text-lg font-semibold mb-2">Choose Position</h3>
                <p className="text-muted-foreground text-sm">Find a role that matches your skills and interests from our open positions.</p>
              </div>
              
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  02
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                <p className="text-muted-foreground text-sm">Send us your resume and a brief cover letter explaining your interest.</p>
              </div>
              
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  03
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview Process</h3>
                <p className="text-muted-foreground text-sm">Join our interview process including technical assessment and cultural fit evaluation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the next step in your career and help us build the future of technology consulting
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Apply Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenPositions;