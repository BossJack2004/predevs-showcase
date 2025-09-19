import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useInquiries } from '@/hooks/useInquiries';
import { useSiteContent } from '@/hooks/useSiteContent';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const { submitInquiry } = useInquiries();
  const { settings } = useSiteContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: settings?.contact_email || 'hello@predevs.com',
      link: `mailto:${settings?.contact_email || 'hello@predevs.com'}`,
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: settings?.phone || '+1 (555) 123-4567',
      link: `tel:${settings?.phone || '+15551234567'}`,
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: settings?.address || 'San Francisco, CA',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM PST',
      link: '#',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      await submitInquiry(formData);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card hover-glow transition-smooth">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center">
                <MessageSquare className="mr-2 h-6 w-6" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe" 
                    className="glass-card border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@company.com" 
                    className="glass-card border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Your Company" 
                    className="glass-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Project Inquiry" 
                    className="glass-card border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your project..." 
                    rows={6}
                    className="glass-card border-primary/20 focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading}
                  className="w-full hover-glow interactive-scale group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information & CTA */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="glass-card hover-glow interactive-scale transition-smooth"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{info.title}</h4>
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="glass-card border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 gradient-text">Prefer a Quick Call?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a 15-minute consultation to discuss your project requirements.
                </p>
                <Button variant="outline" size="lg" className="hover-glow group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Teaser */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Frequently Asked Questions</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Find answers to common questions about our services, process, and pricing.
                </p>
                <Button variant="ghost" size="sm" className="p-0">
                  View FAQ →
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