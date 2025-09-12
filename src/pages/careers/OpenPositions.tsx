import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const OpenPositions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Open Positions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Currently, we don't have any open positions available. We're always looking for talented individuals to join our team, so please check back soon!
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 mb-8 text-center animate-scale-in">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V6m8 0H8" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">No Current Openings</h2>
                <p className="text-muted-foreground mb-6">
                  We're not currently hiring, but we're always interested in connecting with talented professionals. 
                  Feel free to send us your resume and we'll keep it on file for future opportunities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="bg-gradient-primary text-primary-foreground hover-scale"
                >
                  Send Your Resume
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/careers/how-to-apply')}
                  className="hover-scale"
                >
                  Learn How to Apply
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-slide-in-right">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Stay Connected</h3>
                <p className="text-muted-foreground mb-4">
                  Join our talent community to be the first to know about new opportunities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Follow us on LinkedIn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Subscribe to our newsletter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Check back regularly
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">What We Look For</h3>
                <p className="text-muted-foreground mb-4">
                  When we do have openings, we typically seek candidates with:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Strong technical expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Excellent communication skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Passion for innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OpenPositions;