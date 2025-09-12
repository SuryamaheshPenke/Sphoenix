import { Shield, Trophy, Users, Zap, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Tailored Consulting Solutions',
      description: 'We provide customized consulting services to address your unique challenges and opportunities. Our team works closely with you to develop strategies that align with your business objectives.',
      stat: '100%',
      statLabel: 'Custom Solutions'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Comprehensive Job Training',
      description: 'Our job training programs are designed to equip your workforce with the skills and knowledge they need to excel. We offer comprehensive training modules tailored to your industry.',
      stat: '95%',
      statLabel: 'Success Rate'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Proven Track Record',
      description: 'With a history of successful projects and satisfied clients, we bring a track record of excellence to every engagement. You can trust us to deliver results and value.',
      stat: '35K+',
      statLabel: 'Projects Done'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Industry Expertise',
      description: 'Our team comprises industry experts with deep knowledge in various sectors. This allows us to provide specialized solutions tailored to the specific needs of your industry.',
      stat: '8+',
      statLabel: 'Years Experience'
    }
  ];

  const achievements = [
    { number: '90%', label: 'Placement Success', description: 'Our job training program boasts an impressive placement success rate' },
    { number: '95%', label: 'Personalized Assistance', description: 'Dedicated placement assistance team provides individualized support' },
    { number: '100%', label: 'Client Satisfaction', description: 'We maintain excellence in every project and relationship' }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-primary font-semibold mb-4">Get Know Why Us</div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
            Empowering Futures,{' '}
            <span className="gradient-text">Transforming Careers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Code Hire Global Solutions, we specialize in providing comprehensive technology training, 
            job placement assistance, and personalized career counseling services. Our mission is to equip 
            individuals with the skills and knowledge needed to excel in the ever-evolving tech industry.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-scale-in">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
            >
              <div className="text-5xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-xl font-poppins font-semibold mb-2 text-foreground">{achievement.label}</div>
              <div className="text-muted-foreground">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-in-right">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth group"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-smooth">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-primary">{feature.stat}</div>
                  <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Ready to Transform Your Career or Business?
            </h3>
            <p className="mb-6 opacity-90">
              Join thousands of professionals who have trusted us with their growth journey
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/50"></div>
                ))}
              </div>
              <div className="text-sm opacity-90">5M+ Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;