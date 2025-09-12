import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Internships = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Internship Programs
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Currently, we don't have any internship programs available. We're planning to launch exciting internship opportunities in the future!
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8 mb-8 text-center animate-scale-in">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">No Current Internships</h2>
                <p className="text-muted-foreground mb-6">
                  We're currently developing our internship program and will be launching it soon. 
                  We believe in nurturing the next generation of tech talent and providing valuable learning experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="bg-gradient-primary text-primary-foreground hover-scale"
                >
                  Express Interest
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/careers/benefits-culture')}
                  className="hover-scale"
                >
                  Learn About Our Culture
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Future Programs</h3>
                <p className="text-muted-foreground mb-4">
                  When we launch our internship program, we plan to offer:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Software Development Internships
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    DevOps & Cloud Infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Business Analysis
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">What to Expect</h3>
                <p className="text-muted-foreground mb-4">
                  Our future internship program will include:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Hands-on project experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Mentorship from senior developers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Professional skill development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Networking opportunities
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Get Notified</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to know when we launch our internship program:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Follow us on LinkedIn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Join our mailing list
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Connect with our recruiters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Check back regularly
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

export default Internships;