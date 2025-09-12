import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional IT consulting team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
              Partnering for{' '}
              <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Unlocking Your Business Potential with Expert Guidance and Navigate the Digital Landscape with Confidence
            </p>
          </div>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth hover-scale shadow-glow text-lg"
            >
              Get Started
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => navigate('/about')}
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-smooth hover:bg-white/20 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-right grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">5M+</div>
              <div className="text-gray-300 text-sm">Global Customers</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">35K+</div>
              <div className="text-gray-300 text-sm">Projects Complete</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">8+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full blur-sm animate-bounce"></div>
    </section>
  );
};

export default Hero;