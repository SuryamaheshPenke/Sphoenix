import { 
  GraduationCap, 
  FileText, 
  MessageSquare, 
  Zap, 
  Settings, 
  Cloud, 
  Code, 
  Users, 
  UserPlus, 
  Target, 
  Crown,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const careerServices = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Technology Training',
      description: 'Hands-on training in in-demand technologies.',
      path: '/career-services/technology-training'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Resume Enhancement',
      description: 'Professional resume writing tailored to the tech industry.',
      path: '/career-services/resume-enhancement'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Interview Guidance',
      description: 'Mock interviews, feedback, and preparation tips.',
      path: '/career-services/interview-guidance'
    }
  ];

  const consultingServices = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Digital Transformation Consulting',
      description: 'Modernizing legacy systems and processes.',
      path: '/it-consulting/digital-transformation'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Technology Strategy & Planning',
      description: 'Aligning IT investments with business goals.',
      path: '/it-consulting/technology-strategy'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud & Infrastructure Consulting',
      description: 'Scalable, secure, and cost-effective cloud solutions.',
      path: '/it-consulting/cloud-infrastructure'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Software Architecture Advisory',
      description: 'Designing robust and scalable application architectures.',
      path: '/it-consulting/software-architecture'
    }
  ];

  const staffingServices = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Contract Staffing',
      description: 'Short-term and project-based tech talent.',
      path: '/it-staffing/contract-staffing'
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: 'Permanent Staffing',
      description: 'Full-time tech professionals tailored to your needs.',
      path: '/it-staffing/permanent-staffing'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Dedicated Teams',
      description: 'Offshore/nearshore tech teams fully aligned with your workflow.',
      path: '/it-staffing/dedicated-teams'
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: 'Executive & Niche Hiring',
      description: 'Senior roles and hard-to-find technology specialists.',
      path: '/it-staffing/executive-hiring'
    }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <Card 
      className="group hover-lift hover-glow transition-smooth bg-gradient-card border-border/50 overflow-hidden animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-smooth animate-pulse-glow animate-rotate-slow group-hover:animate-bounce-subtle">
          {service.icon}
        </div>
        <CardTitle className="text-xl font-poppins group-hover:text-primary transition-smooth">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          onClick={() => navigate(service.path)}
          className="group-hover:text-primary transition-smooth p-0 h-auto font-medium flex items-center"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-primary font-semibold mb-4">Service We Provide</div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
            Explore IT Service to Grow your{' '}
            <span className="gradient-text">Career/Business</span>
          </h2>
        </div>

        {/* Career Services */}
        <div id="career-services" className="mb-16">
          <h3 className="text-2xl font-poppins font-semibold mb-8 text-center text-foreground">
            Career Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {careerServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* IT Consulting */}
        <div className="mb-16">
          <h3 className="text-2xl font-poppins font-semibold mb-8 text-center text-foreground">
            IT Consulting
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
            {consultingServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* IT Staffing */}
        <div>
          <h3 className="text-2xl font-poppins font-semibold mb-8 text-center text-foreground">
            IT Staffing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
            {staffingServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-500">
          <Button
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow hover-glow animate-pulse-glow"
          >
            Get Started with Our Services
            <ArrowRight className="ml-2 h-5 w-5 animate-wave" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;