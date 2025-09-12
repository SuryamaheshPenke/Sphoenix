import { CheckCircle, Target, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: '90% Placement Success',
      description: 'Our job training program boasts an impressive placement success rate, demonstrating our commitment to launching careers.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '95% Personalized Assistance',
      description: 'Our dedicated placement assistance team provides individualized support to every trainee with resume building and interview prep.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Industry Expertise',
      description: 'Our team comprises industry experts with deep knowledge in various sectors, providing specialized solutions.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="text-primary font-semibold mb-4">About Us</div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
              Empowering Careers with Comprehensive Training and{' '}
              <span className="gradient-text">Placement Assistance</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Code Hire Global, we are dedicated to shaping the careers of aspiring professionals through rigorous job training programs. Our training modules are designed to equip individuals with the skills and knowledge needed to excel in their chosen fields. We go the extra mile by providing personalized placement assistance to ensure that our trainees step confidently into the professional world.
            </p>
            <Button
              onClick={() => navigate('/about')}
              className="bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-full hover-scale transition-smooth"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-poppins font-bold mb-6 text-foreground">
              Unlocking Growth Exploring the Powerhouse Features of Our Business Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">Trusted Global Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">35K+</div>
                <div className="text-muted-foreground">Project Complete</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground">Years Of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;