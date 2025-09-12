import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, Users, Clock, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const InterviewGuidance = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Mock Interviews',
      description: 'Practice with industry professionals and receive detailed feedback on your performance.',
      features: ['Technical interviews', 'Behavioral questions', 'Video call simulation', 'Performance analysis']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Group Interview Prep',
      description: 'Learn to excel in group interviews and assessment center activities.',
      features: ['Team exercises', 'Group discussions', 'Leadership scenarios', 'Collaboration skills']
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Interview Strategy',
      description: 'Develop winning strategies for different types of interviews and companies.',
      features: ['Company research', 'Question preparation', 'STAR method', 'Salary negotiation']
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Industry-Specific Prep',
      description: 'Tailored preparation for specific industries and role requirements.',
      features: ['Tech interviews', 'Finance sector', 'Healthcare', 'Consulting']
    }
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
                Interview{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Guidance
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Master the art of interviewing with expert guidance and personalized coaching sessions.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Start Preparation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Comprehensive Interview Preparation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured approach helps you build confidence and develop the skills needed to excel in any interview scenario.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 animate-scale-in">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Our Proven Process
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 animate-slide-in-right">
              {[
                { step: '01', title: 'Assessment', description: 'Evaluate your current interview skills and identify improvement areas.' },
                { step: '02', title: 'Preparation', description: 'Develop personalized strategies and practice materials.' },
                { step: '03', title: 'Practice', description: 'Conduct mock interviews with detailed feedback sessions.' },
                { step: '04', title: 'Success', description: 'Achieve confidence and land your dream job.' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who have mastered their interview skills with our expert guidance.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InterviewGuidance;