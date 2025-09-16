import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import phoenixLogo from '@/assets/phoenix-logo-blue.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const careerServicesItems = [
    { label: 'Technology Training', path: '/career-services/technology-training' },
    { label: 'Resume Enhancement', path: '/career-services/resume-enhancement' },
    { label: 'Interview Guidance', path: '/career-services/interview-guidance' },
    { label: 'Job Placement', path: '/career-services/job-placement' },
    { label: 'Skill Assessment', path: '/career-services/skill-assessment' },
  ];

  const itConsultingItems = [
    { label: 'Digital Transformation', path: '/it-consulting/digital-transformation' },
    { label: 'Technology Strategy', path: '/it-consulting/technology-strategy' },
    { label: 'Cloud Infrastructure', path: '/it-consulting/cloud-infrastructure' },
    { label: 'Software Architecture', path: '/it-consulting/software-architecture' },
    { label: 'Business Analysis', path: '/it-consulting/business-analysis' },
  ];

  const itStaffingItems = [
    { label: 'Contract Staffing', path: '/it-staffing/contract-staffing' },
    { label: 'Permanent Staffing', path: '/it-staffing/permanent-staffing' },
    { label: 'Dedicated Teams', path: '/it-staffing/dedicated-teams' },
    { label: 'Executive Hiring', path: '/it-staffing/executive-hiring' },
    { label: 'Remote Teams', path: '/it-staffing/remote-teams' },
  ];

  const careersItems = [
    { label: 'Open Positions', path: '/careers/open-positions' },
    { label: 'Internships', path: '/careers/internships' },
    { label: 'How to Apply', path: '/careers/how-to-apply' },
    { label: 'Benefits & Culture', path: '/careers/benefits-culture' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth animate-fade-in-down ${
        isScrolled
          ? 'glass-effect shadow-medium'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Company Name */}
          <div
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3 cursor-pointer hover-scale animate-bounce-subtle"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden animate-pulse-glow">
              <img 
                src={phoenixLogo} 
                alt="Sphoenix" 
                className="w-full h-full object-contain hover-scale filter drop-shadow-lg"
              />
            </div>
            <span className="font-poppins font-bold text-xl text-foreground gradient-text">
              Sphoenix
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-left">
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/')}
              className="font-medium transition-smooth hover:text-primary hover-scale animate-delay-100"
            >
              Home
            </Button>

            <Button
              variant="ghost"
              onClick={() => handleNavigation('/about')}
              className="font-medium transition-smooth hover:text-primary hover-scale animate-delay-200"
            >
              About Us
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium transition-smooth hover:text-primary hover-scale flex items-center gap-1 animate-delay-300"
                >
                  Career Services
                  <ChevronDown className="h-4 w-4 animate-bounce-subtle" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-border/50">
                {careerServicesItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="cursor-pointer transition-smooth hover:bg-primary/10"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium transition-smooth hover:text-primary flex items-center gap-1"
                >
                  IT Consulting
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-border/50">
                {itConsultingItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="cursor-pointer transition-smooth hover:bg-primary/10"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium transition-smooth hover:text-primary flex items-center gap-1"
                >
                  IT Staffing
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-border/50">
                {itStaffingItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="cursor-pointer transition-smooth hover:bg-primary/10"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium transition-smooth hover:text-primary flex items-center gap-1"
                >
                  Careers
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-effect border-border/50">
                {careersItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="cursor-pointer transition-smooth hover:bg-primary/10"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-gradient-primary text-primary-foreground font-medium px-6 py-2 rounded-full transition-smooth hover-scale shadow-glow animate-pulse-glow animate-delay-500"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover-scale transition-smooth animate-pulse-glow"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 glass-effect rounded-lg mt-2 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => handleNavigation('/')}
                className="justify-start"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('/about')}
                className="justify-start"
              >
                About Us
              </Button>
              
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Career Services</div>
              {careerServicesItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className="justify-start pl-6 text-sm"
                >
                  {item.label}
                </Button>
              ))}
              
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">IT Consulting</div>
              {itConsultingItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className="justify-start pl-6 text-sm"
                >
                  {item.label}
                </Button>
              ))}
              
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">IT Staffing</div>
              {itStaffingItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className="justify-start pl-6 text-sm"
                >
                  {item.label}
                </Button>
              ))}
              
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Careers</div>
              {careersItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className="justify-start pl-6 text-sm"
                >
                  {item.label}
                </Button>
              ))}
              
              <div className="border-t border-border my-2"></div>
              <Button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-primary text-primary-foreground mx-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;