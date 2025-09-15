import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c4e3?w=100&h=100&fit=crop&crop=face',
      content: 'Sphoenix transformed my career completely. Their comprehensive training program equipped me with cutting-edge skills in cloud computing and DevOps. The personalized mentorship and job placement assistance helped me land my dream job at a Fortune 500 company.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'DataFlow Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'The IT consulting services provided by Sphoenix were exceptional. They helped us modernize our entire data infrastructure and implement machine learning solutions that increased our efficiency by 40%. Their expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Working with Sphoenix for our staffing needs was a game-changer. They provided us with highly skilled developers who seamlessly integrated into our team. The quality of candidates and their technical expertise exceeded our expectations.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'StartupX',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Sphoenix\'s digital transformation consulting helped us scale from a small startup to a thriving tech company. Their strategic guidance and technical expertise were instrumental in our 300% growth over two years.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Full Stack Developer',
      company: 'WebSolutions Inc',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c4e3?w=100&h=100&fit=crop&crop=face',
      content: 'The career coaching and interview preparation I received was outstanding. Not only did I improve my technical skills, but I also gained confidence in presenting myself professionally. I received three job offers within a month of completing the program.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-primary font-semibold mb-4">Client Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped professionals and businesses achieve their goals
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 animate-scale-in">
          <Card className="bg-gradient-card border-border/50 shadow-large">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-primary/30" />
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-center mb-8 text-foreground leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-center">
                  <div className="font-poppins font-semibold text-lg text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-primary font-medium">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {currentTestimonial.company}
                  </div>
                  <div className="flex justify-center mt-2">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="rounded-full hover-scale transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="rounded-full hover-scale transition-smooth"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Small Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-in-right">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover-lift transition-smooth cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;