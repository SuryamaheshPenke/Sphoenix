import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, MessageCircle, ArrowRight, CheckCircle, Clock, AlertCircle, Mail } from 'lucide-react';

const HowToApply = () => {
  const navigate = useNavigate();

  const applicationSteps = [
    {
      step: "01",
      title: "Prepare Your Application",
      description: "Gather your resume, cover letter, and any relevant portfolio work or project examples",
      icon: <FileText className="h-6 w-6" />,
      tips: [
        "Tailor your resume to the specific role",
        "Include relevant projects and achievements",
        "Keep your resume to 1-2 pages maximum",
        "Use a clean, professional format"
      ]
    },
    {
      step: "02",
      title: "Submit Application",
      description: "Send your application through our contact form or email with the position title in the subject line",
      icon: <Mail className="h-6 w-6" />,
      tips: [
        "Use the position title as email subject",
        "Include a brief cover letter in the email body",
        "Attach resume and portfolio as PDF files",
        "Double-check all attachments before sending"
      ]
    },
    {
      step: "03",
      title: "Initial Screening",
      description: "Our HR team will review your application and conduct a brief phone or video screening",
      icon: <MessageCircle className="h-6 w-6" />,
      tips: [
        "Be available for a 20-30 minute call",
        "Prepare to discuss your background",
        "Have questions ready about the role",
        "Find a quiet location for the call"
      ]
    },
    {
      step: "04",
      title: "Technical Assessment",
      description: "Complete a technical challenge or take-home project relevant to the position",
      icon: <CheckCircle className="h-6 w-6" />,
      tips: [
        "Read instructions carefully",
        "Ask questions if anything is unclear",
        "Submit before the deadline",
        "Include documentation with your solution"
      ]
    },
    {
      step: "05",
      title: "Final Interviews",
      description: "Meet with the hiring manager and potential team members for cultural and technical fit",
      icon: <Calendar className="h-6 w-6" />,
      tips: [
        "Research our company and values",
        "Prepare specific examples from your experience",
        "Have thoughtful questions about the role",
        "Be authentic and show your personality"
      ]
    }
  ];

  const requirements = [
    {
      title: "Resume & CV",
      description: "Up-to-date resume highlighting relevant experience and skills",
      required: true
    },
    {
      title: "Cover Letter",
      description: "Brief letter explaining your interest in the role and company",
      required: true
    },
    {
      title: "Portfolio",
      description: "Examples of your work (for design, development, or creative roles)",
      required: false
    },
    {
      title: "References",
      description: "Contact information for 2-3 professional references",
      required: false
    }
  ];

  const tips = [
    {
      category: "Resume Tips",
      icon: <FileText className="h-5 w-5" />,
      suggestions: [
        "Quantify your achievements with specific numbers and metrics",
        "Use action verbs to describe your accomplishments",
        "Include relevant keywords from the job description",
        "Proofread for spelling and grammatical errors"
      ]
    },
    {
      category: "Interview Preparation",
      icon: <MessageCircle className="h-5 w-5" />,
      suggestions: [
        "Practice explaining technical concepts in simple terms",
        "Prepare STAR method examples for behavioral questions",
        "Research common interview questions for your role",
        "Test your video call setup if it's a remote interview"
      ]
    },
    {
      category: "Technical Assessment",
      icon: <CheckCircle className="h-5 w-5" />,
      suggestions: [
        "Write clean, well-commented code",
        "Consider edge cases and error handling",
        "Include a README with setup instructions",
        "Don't be afraid to ask clarifying questions"
      ]
    }
  ];

  const timeline = [
    { phase: "Application Submission", duration: "Immediate" },
    { phase: "Initial Review", duration: "3-5 business days" },
    { phase: "Phone Screening", duration: "1 week" },
    { phase: "Technical Assessment", duration: "1-2 weeks" },
    { phase: "Final Interviews", duration: "1 week" },
    { phase: "Decision & Offer", duration: "3-5 business days" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Application Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              How to Apply
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete guide to applying for positions at Sphoenix. Learn about our process, requirements, and tips for success.
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
                <Mail className="mr-2 h-5 w-5" />
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Application Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our structured application process ensures we find the best fit for both you and our team
            </p>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {applicationSteps.map((step, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="glass-effect border-border/50">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-22">
                    <div className="space-y-2">
                      <p className="font-medium text-sm mb-3">Pro Tips:</p>
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Application Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What you need to prepare for your application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                    <Badge variant={req.required ? "default" : "secondary"}>
                      {req.required ? "Required" : "Optional"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {req.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Tips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insider tips to help you stand out during the application process
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips.map((tipCategory, index) => (
              <Card 
                key={index}
                className="glass-effect hover-scale animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      {tipCategory.icon}
                    </div>
                    <CardTitle className="text-lg">{tipCategory.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tipCategory.suggestions.map((suggestion, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expected Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what to expect in terms of timing for each stage
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <Card 
                  key={index}
                  className="text-center glass-effect hover-scale animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 text-primary-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{item.phase}</CardTitle>
                    <Badge variant="outline" className="mx-auto">
                      {item.duration}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our application process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="glass-effect animate-fade-in-up border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Can I apply for multiple positions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can apply for multiple positions, but we recommend focusing on roles that best match your skills and interests. Please submit separate applications for each position.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect animate-fade-in-up border-border/50" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  What if I don't hear back?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We aim to respond to all applications within 1-2 weeks. If you haven't heard from us after this time, feel free to follow up with a polite email.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect animate-fade-in-up border-border/50" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Do you accept remote applications?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We're a remote-first company and welcome applications from candidates worldwide. Some positions may have timezone preferences for better collaboration.
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
              Ready to Apply?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Now that you know our process, take the next step and start your application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/careers/open-positions')}
                className="bg-gradient-primary text-primary-foreground shadow-glow hover-scale"
              >
                Browse Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/#contact')}
                className="hover-scale"
              >
                Contact HR Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToApply;