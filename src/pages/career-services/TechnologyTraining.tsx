import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Database, Cloud, Smartphone, Globe, Shield, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const TechnologyTraining = () => {
  const navigate = useNavigate();

  const courses = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full Stack Development',
      duration: '6 months',
      level: 'Beginner to Advanced',
      description: 'Master modern web development with React, Node.js, and databases.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript']
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Science & Analytics',
      duration: '4 months',
      level: 'Intermediate',
      description: 'Learn Python, machine learning, and data visualization techniques.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Tableau']
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Computing (AWS/Azure)',
      duration: '3 months',
      level: 'Intermediate',
      description: 'Become certified in cloud platforms and DevOps practices.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile App Development',
      duration: '5 months',
      level: 'Beginner to Advanced',
      description: 'Build native and cross-platform mobile applications.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Cybersecurity',
      duration: '4 months',
      level: 'Intermediate to Advanced',
      description: 'Learn ethical hacking, security analysis, and threat prevention.',
      technologies: ['Kali Linux', 'Wireshark', 'Metasploit', 'CISSP', 'CEH']
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Digital Marketing & SEO',
      duration: '3 months',
      level: 'Beginner',
      description: 'Master online marketing strategies and search optimization.',
      technologies: ['Google Ads', 'Analytics', 'SEMrush', 'Social Media', 'Content Marketing']
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend classes to fit your schedule'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Industry Certification',
      description: 'Get certified and recognized credentials upon completion'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Job Placement Support',
      description: '90% placement rate with dedicated career support'
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
                Technology{' '}
                <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Training
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Hands-on training in in-demand technologies. Master the skills that employers are looking for.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Available Courses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of technology courses designed to advance your career
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover-lift transition-smooth"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-poppins text-foreground mb-2">
                          {course.title}
                        </CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>📅 {course.duration}</span>
                          <span>📊 {course.level}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Why Choose Our Training?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 text-center hover-lift transition-smooth"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-poppins font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Ready to Start Your Tech Career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers through our training programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover-scale transition-smooth shadow-glow"
                >
                  Get Started Today
                </Button>
                <Button
                  onClick={() => navigate('/career-services/resume-enhancement')}
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-4 rounded-full hover-scale transition-smooth"
                >
                  Learn About Resume Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyTraining;