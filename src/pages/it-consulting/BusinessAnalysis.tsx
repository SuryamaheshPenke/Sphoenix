import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BarChart3, ArrowRight, CheckCircle, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BusinessAnalysis = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Requirements Analysis',
      description: 'Comprehensive analysis of business requirements and system specifications.',
      features: ['Stakeholder interviews', 'Process mapping', 'Requirement documentation', 'Gap analysis']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Process Optimization',
      description: 'Identify inefficiencies and design optimized business processes.',
      features: ['Process modeling', 'Workflow analysis', 'Automation opportunities', 'Performance metrics']
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for informed decision-making.',
      features: ['Data visualization', 'Trend analysis', 'Predictive modeling', 'KPI development']
    }
  ];

  const methodologies = [
    {
      name: 'Agile Analysis',
      description: 'Iterative requirements gathering and analysis',
      practices: ['User stories', 'Sprint planning', 'Backlog grooming', 'Retrospectives']
    },
    {
      name: 'Lean Six Sigma',
      description: 'Process improvement and waste reduction',
      practices: ['DMAIC methodology', 'Root cause analysis', 'Statistical analysis', 'Continuous improvement']
    },
    {
      name: 'Design Thinking',
      description: 'Human-centered problem solving approach',
      practices: ['Empathy mapping', 'Ideation workshops', 'Prototyping', 'User testing']
    }
  ];

  const deliverables = [
    'Business Requirements Document (BRD)',
    'Functional Requirements Specification (FRS)',
    'Process Flow Diagrams',
    'Use Case Documentation',
    'Gap Analysis Reports',
    'ROI Analysis and Business Case',
    'Risk Assessment Matrix',
    'Implementation Roadmap'
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
                Business{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Analysis
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Bridge the gap between business needs and technology solutions with expert business analysis services.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Analyze Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Business Analysis Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our business analysts help organizations understand their needs, optimize processes, and make data-driven decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodologies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Proven Methodologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We leverage industry-standard methodologies and frameworks to ensure consistent, high-quality analysis results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 animate-slide-in-right">
              {methodologies.map((methodology, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth"
                >
                  <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground text-center">
                    {methodology.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    {methodology.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Practices:</h4>
                    <ul className="space-y-2">
                      {methodology.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Our Analysis Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to understanding your business and delivering actionable insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 animate-fade-in-up">
              {[
                { step: '01', title: 'Discovery', description: 'Understand business context and objectives' },
                { step: '02', title: 'Analysis', description: 'Gather and analyze requirements' },
                { step: '03', title: 'Documentation', description: 'Create detailed specifications' },
                { step: '04', title: 'Validation', description: 'Verify requirements with stakeholders' },
                { step: '05', title: 'Support', description: 'Ongoing support during implementation' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                  Key Deliverables
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our comprehensive documentation ensures all stakeholders have a clear understanding of requirements and implementation plans.
                </p>
                <ul className="space-y-3">
                  {deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift transition-smooth">
                  <h3 className="text-2xl font-poppins font-bold mb-6 text-foreground text-center">
                    Analysis Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: '40%', label: 'Faster Delivery' },
                      { metric: '60%', label: 'Fewer Changes' },
                      { metric: '25%', label: 'Cost Reduction' },
                      { metric: '95%', label: 'Stakeholder Satisfaction' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Industry Experience
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 animate-scale-in">
              {[
                'Financial Services',
                'Healthcare',
                'Manufacturing',
                'Retail',
                'Government',
                'Education',
                'Technology',
                'Non-Profit'
              ].map((industry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-card border border-border/50 hover-lift transition-smooth text-center"
                >
                  <span className="text-foreground font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
              Ready to Optimize Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with our business analysts to unlock insights and drive meaningful improvements in your organization.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
            >
              Start Analysis Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessAnalysis;