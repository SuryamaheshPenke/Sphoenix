import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Calendar, MapPin, ArrowRight, Users, Code, Lightbulb, Trophy } from 'lucide-react';

const Internships = () => {
  const navigate = useNavigate();

  const internshipPrograms = [
    {
      title: "Software Development Internship",
      duration: "12 weeks",
      location: "Remote / On-site",
      description: "Work on real projects with our development teams and learn modern software engineering practices",
      skills: ["React", "Node.js", "Python", "Git", "Agile"],
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Product Management Internship",
      duration: "10 weeks",
      location: "Remote",
      description: "Learn product strategy, user research, and work directly with product managers on live products",
      skills: ["Product Strategy", "Analytics", "User Research", "Design Thinking"],
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: "Data Science Internship",
      duration: "12 weeks",
      location: "Remote / On-site",
      description: "Apply machine learning and data analytics to solve real business problems",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      icon: <Trophy className="h-8 w-8" />
    }
  ];

  const benefits = [
    {
      title: "Real Project Experience",
      description: "Work on actual client projects and see your contributions make a real impact",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Mentorship Program",
      description: "Get paired with senior team members who will guide your learning journey",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Professional Development",
      description: "Access to training resources, workshops, and industry conferences",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals across the technology industry",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const timeline = [
    {
      phase: "Application Period",
      duration: "Rolling admissions",
      description: "Submit your application with resume, cover letter, and any relevant portfolio work"
    },
    {
      phase: "Initial Screening",
      duration: "1-2 weeks",
      description: "Phone/video interview to discuss your background and interests"
    },
    {
      phase: "Technical Assessment",
      duration: "1 week",
      description: "Complete a take-home project or technical challenge relevant to your track"
    },
    {
      phase: "Final Interview",
      duration: "1 week",
      description: "Meet with team members and discuss your project and career goals"
    },
    {
      phase: "Internship Begins",
      duration: "10-12 weeks",
      description: "Start your internship journey with orientation and team integration"
    }
  ];

  const requirements = [
    "Currently pursuing Bachelor's or Master's degree in Computer Science, Engineering, or related field",
    "Strong academic performance (3.0+ GPA preferred)",
    "Basic programming knowledge and problem-solving skills",
    "Excellent communication and collaboration abilities",
    "Passion for technology and eagerness to learn",
    "Available for 10-12 week commitment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Internship Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Launch Your Tech Career
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our comprehensive internship program and gain hands-on experience working on real projects with industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/#contact')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Apply for Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/careers/how-to-apply')}
                className="hover-scale"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized tracks designed to accelerate your career
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {internshipPrograms.map((program, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {program.location}
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-medium text-sm">You'll Learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-4 bg-gradient-primary text-primary-foreground"
                      onClick={() => navigate('/#contact')}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
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
              Why Intern With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the support and experience you need to jumpstart your career
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
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Application Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what to expect during the application and selection process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{phase.phase}</h3>
                      <Badge variant="outline" className="w-fit">{phase.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eligibility Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What we're looking for in our intern candidates
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 glass-effect rounded-lg animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span className="text-sm">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intern Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our former interns who are now thriving in their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-effect hover-scale animate-fade-in-up border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    JS
                  </div>
                  <div>
                    <CardTitle className="text-lg">Jessica Smith</CardTitle>
                    <CardDescription>Now Full-Stack Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The internship gave me real-world experience that I couldn't get in the classroom. I'm now a full-time developer here!"
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    MJ
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Johnson</CardTitle>
                    <CardDescription>Product Manager at Tech Startup</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The mentorship and exposure to product strategy helped me land my dream job. The experience was invaluable."
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-scale animate-fade-in-up border-border/50" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    AL
                  </div>
                  <div>
                    <CardTitle className="text-lg">Alex Liu</CardTitle>
                    <CardDescription>Data Scientist at Fortune 500</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Working on real data science projects gave me the portfolio and confidence to pursue my career goals."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Apply now for our internship program and take the first step towards an exciting tech career
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
            >
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;