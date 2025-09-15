import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Make A Call',
      details: '+91 7673949165',
      action: 'tel:+917673949165'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: 'info@sphoenixit.com',
      action: 'mailto:info@sphoenixit.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Opening Hours',
      details: 'Mon-Friday, 10am - 6pm',
      action: null
    }
  ];

  const offices = [
    {
      country: 'USA',
      flag: '🇺🇸',
      address: '17201, NW Viola Street, Portland 97229, Oregon'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      address: 'North York, Ontario, Canada'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      address: 'B.K.Guda, SR Nagar, Hyderabad-500038'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-primary font-semibold mb-4">Contact Us</div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your career or business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 animate-slide-in-left">
          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="bg-gradient-card border-border/50 shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md border border-border/50 bg-background/50 focus:border-primary transition-smooth"
                      >
                        <option value="">Select Service</option>
                        <option value="career-services">Career Services</option>
                        <option value="it-consulting">IT Consulting</option>
                        <option value="it-staffing">IT Staffing</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-full hover-scale transition-smooth shadow-glow"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover-lift transition-smooth cursor-pointer"
                  onClick={() => info.action && window.open(info.action)}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">
                        {info.details}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Locations */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-poppins flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Our Global Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-smooth">
                    <div className="text-2xl">{office.flag}</div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {office.country}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {office.address}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-poppins font-bold mb-2">
                  Ready to Get Started?
                </h3>
                <p className="mb-4 opacity-90">
                  Join thousands of satisfied clients worldwide
                </p>
                <Button
                  variant="secondary"
                  className="font-semibold"
                >
                  Schedule a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;