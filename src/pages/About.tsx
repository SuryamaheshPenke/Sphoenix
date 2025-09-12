import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To empower professionals and businesses through comprehensive technology training, expert consulting, and strategic staffing solutions that drive innovation and growth.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Vision',
      description: 'To be the global leader in technology talent development and digital transformation, creating a world where every professional and business can thrive in the digital age.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Values',
      description: 'Integrity, Innovation, Excellence, and Impact. We believe in delivering exceptional value while maintaining the highest ethical standards in all our relationships.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Commitment',
      description: 'We are committed to providing personalized solutions that meet the unique needs of each client, ensuring measurable results and long-term success.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
                About{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sphoenix
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Empowering careers and transforming businesses through innovative technology solutions and expert guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-poppins font-bold mb-8 text-foreground">
                Our Story
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Founded with a vision to bridge the gap between talent and technology, Sphoenix has been 
                  at the forefront of digital transformation for over 8 years. What started as a small consultancy 
                  has grown into a global leader in technology training, IT consulting, and strategic staffing.
                </p>
                <p>
                  Our journey began when we recognized the urgent need for skilled professionals in the rapidly 
                  evolving tech landscape. We saw talented individuals struggling to keep pace with technological 
                  advancements, and businesses challenged to find the right expertise for their digital initiatives.
                </p>
                <p>
                  Today, we've successfully trained over 35,000 professionals, completed thousands of consulting 
                  projects, and helped countless businesses achieve their digital transformation goals. Our success 
                  is measured not just in numbers, but in the careers we've launched and the businesses we've transformed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">5M+</div>
                <div className="text-xl font-poppins font-semibold mb-2 text-foreground">Global Customers</div>
                <div className="text-muted-foreground">Trusted by millions worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">35K+</div>
                <div className="text-xl font-poppins font-semibold mb-2 text-foreground">Projects Complete</div>
                <div className="text-muted-foreground">Successful deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-xl font-poppins font-semibold mb-2 text-foreground">Success Rate</div>
                <div className="text-muted-foreground">Client satisfaction guaranteed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">8+</div>
                <div className="text-xl font-poppins font-semibold mb-2 text-foreground">Years Experience</div>
                <div className="text-muted-foreground">Industry expertise</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;