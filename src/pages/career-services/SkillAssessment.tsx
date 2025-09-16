import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, BarChart3, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SkillAssessment = () => {
  const navigate = useNavigate();

  const assessmentTypes = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Technical Skills Assessment',
      description: 'Comprehensive evaluation of your programming and technical abilities.',
      areas: ['Programming Languages', 'Frameworks & Libraries', 'Database Management', 'System Design', 'Problem Solving']
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Soft Skills Evaluation',
      description: 'Assessment of communication, leadership, and interpersonal skills.',
      areas: ['Communication', 'Leadership', 'Teamwork', 'Time Management', 'Adaptability']
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Industry-Specific Tests',
      description: 'Specialized assessments tailored to specific industries and roles.',
      areas: ['DevOps', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'Mobile Development']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Behavioral Assessment',
      description: 'Understanding your work style and cultural fit preferences.',
      areas: ['Work Style', 'Team Dynamics', 'Stress Management', 'Decision Making', 'Innovation']
    }
  ];

  const benefits = [
    'Identify skill gaps and improvement areas',
    'Receive personalized learning recommendations',
    'Compare your skills with industry standards',
    'Get certified skill verification for employers',
    'Track your progress over time',
    'Access tailored job recommendations'
  ];

  const process = [
    { step: 'Registration', description: 'Sign up and choose your assessment package' },
    { step: 'Assessment', description: 'Complete online tests and practical exercises' },
    { step: 'Analysis', description: 'Receive detailed skill analysis and report' },
    { step: 'Recommendations', description: 'Get personalized learning and career guidance' }
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
                Skill{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Assessment
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Discover your strengths, identify areas for growth, and accelerate your career with comprehensive skill assessments.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Assessment Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Comprehensive Assessment Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our multi-dimensional assessment approach evaluates both technical expertise and soft skills to provide a complete picture of your capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 animate-scale-in">
              {assessmentTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {type.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Assessment Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.areas.map((area, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                  Why Take Our Skill Assessment?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our scientifically-designed assessments provide actionable insights that help you make informed career decisions and accelerate your professional growth.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <h3 className="text-2xl font-poppins font-bold mb-6 text-foreground text-center">
                    Assessment Features
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: '200+', label: 'Skill Areas' },
                      { metric: '30 min', label: 'Average Time' },
                      { metric: '95%', label: 'Accuracy Rate' },
                      { metric: '24/7', label: 'Availability' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Assessment Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process ensures you get comprehensive results quickly and efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-foreground">{step.step}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Discover Your Potential?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards understanding your skills and unlocking new career opportunities.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillAssessment;