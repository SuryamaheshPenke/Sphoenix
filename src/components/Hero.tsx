import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in-up">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 animate-scale-in">
        <img
          src={heroImage}
          alt="Professional IT consulting team"
          className="w-full h-full object-cover animate-shimmer"
        />
        <div className="absolute inset-0 bg-gradient-hero animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in-up animate-delay-300">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight animate-typing">
              Partnering for{' '}
              <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
                Digital Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-500">
              Unlocking Your Business Potential with Expert Guidance and Navigate the Digital Landscape with Confidence
            </p>
          </div>

          <div className="animate-scale-in animate-delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full transition-smooth hover-scale shadow-glow text-lg hover-glow animate-pulse-glow"
            >
              Get Started
              <TrendingUp className="ml-2 h-5 w-5 animate-bounce-subtle" />
            </Button>
            <Button
              onClick={() => navigate('/about')}
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-full transition-smooth hover:bg-white/20 text-lg hover-glow"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 animate-wave" />
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-right animate-delay-700 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto stagger-animation">
            <div className="glass-effect rounded-2xl p-6 text-center hover-glow animate-float" style={{"--stagger": 1} as any}>
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-accent animate-pulse-glow" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-bounce-subtle">5M+</div>
              <div className="text-gray-300 text-sm">Global Customers</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center hover-glow animate-float" style={{"--stagger": 2} as any}>
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-accent animate-pulse-glow animate-delay-200" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-bounce-subtle animate-delay-200">35K+</div>
              <div className="text-gray-300 text-sm">Projects Complete</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-center hover-glow animate-float" style={{"--stagger": 3} as any}>
              <div className="flex justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-accent animate-pulse-glow animate-delay-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-bounce-subtle animate-delay-300">8+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse animate-delay-500 animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full blur-sm animate-bounce-subtle animate-rotate-slow"></div>
    </section>
  );
};

export default Hero;