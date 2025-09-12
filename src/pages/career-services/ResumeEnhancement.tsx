import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ResumeEnhancement = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Professional Templates',
      description: 'Access to industry-specific resume templates designed by HR professionals.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with keyword optimization.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Personal Branding',
      description: 'Develop a compelling personal brand that showcases your unique value proposition.'
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '$99',
      features: ['Resume review', 'Basic formatting', 'ATS optimization', '1 revision']
    },
    {
      name: 'Professional',
      price: '$199',
      features: ['Complete resume rewrite', 'Cover letter', 'LinkedIn optimization', '3 revisions']
    },
    {
      name: 'Executive',
      price: '$399',
      features: ['Executive resume', 'Cover letter', 'LinkedIn profile', 'Personal branding', 'Unlimited revisions']
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
                Resume{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enhancement
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transform your resume into a powerful career tool that gets you noticed by top employers.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Why Choose Our Resume Enhancement Service?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expert team knows what employers are looking for and how to make your resume stand out in today's competitive job market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Choose Your Package
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate('/contact')}
                    className="w-full bg-gradient-primary text-primary-foreground hover-scale transition-smooth"
                  >
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeEnhancement;