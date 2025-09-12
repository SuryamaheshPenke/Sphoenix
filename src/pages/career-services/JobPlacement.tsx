import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const JobPlacement = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '95%', label: 'Placement Success Rate', description: 'of our candidates land jobs within 3 months' },
    { value: '500+', label: 'Partner Companies', description: 'across various industries and technologies' },
    { value: '15K+', label: 'Successful Placements', description: 'careers launched and dreams achieved' },
    { value: '24/7', label: 'Support Available', description: 'dedicated assistance throughout your journey' }
  ];

  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Job Matching',
      description: 'AI-powered matching system that connects you with roles that fit your skills and career goals.',
      features: ['Skill-based matching', 'Salary expectations', 'Location preferences', 'Career level']
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Employer Network',
      description: 'Access to our extensive network of top-tier companies actively seeking talent.',
      features: ['Fortune 500 companies', 'Startups & scale-ups', 'Remote opportunities', 'International roles']
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Guidance',
      description: 'Personalized career coaching to help you make informed decisions about your future.',
      features: ['Career path planning', 'Industry insights', 'Salary negotiation', 'Growth opportunities']
    }
  ];

  const process = [
    { title: 'Profile Creation', description: 'Complete skills assessment and career preferences' },
    { title: 'Job Matching', description: 'Receive curated job opportunities tailored to you' },
    { title: 'Application Support', description: 'Get help with applications and interview preparation' },
    { title: 'Placement Success', description: 'Land your dream job with ongoing support' }
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
                Job{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Placement
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Connect with top employers and land your dream job with our comprehensive placement services.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Find My Job
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 animate-scale-in">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-xl font-poppins font-semibold mb-2 text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Comprehensive Placement Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From initial consultation to successful placement, we're with you every step of the way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                How It Works
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Success Stories
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Software Engineer at Google', story: 'Landed my dream job at Google within 2 months of completing the program!' },
                { name: 'Michael Chen', role: 'Data Scientist at Microsoft', story: 'The personalized coaching and interview prep made all the difference.' },
                { name: 'Emily Davis', role: 'Product Manager at Apple', story: 'From career change to tech leader - Sphoenix made it possible!' }
              ].map((story, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">{story.name}</h3>
                    <p className="text-sm text-primary mb-4">{story.role}</p>
                    <p className="text-muted-foreground italic">"{story.story}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Launch Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through our placement services.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobPlacement;