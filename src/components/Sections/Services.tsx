import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['React Native', 'Native iOS/Android', 'App Store Deployment', 'Push Notifications'],
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with deployment automation and monitoring.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring & Logs'],
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      features: ['Design Systems', 'User Research', 'Prototyping', 'Accessibility'],
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing solutions.',
      features: ['Penetration Testing', 'Code Reviews', 'Automated QA', 'Compliance'],
      gradient: 'from-red-500 to-red-700',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Make your applications faster, more efficient, and cost-effective.',
      features: ['Speed Optimization', 'Database Tuning', 'CDN Setup', 'Monitoring'],
      gradient: 'from-orange-500 to-orange-700',
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
    { step: '02', title: 'Planning', description: 'Strategic roadmap and architecture' },
    { step: '03', title: 'Development', description: 'Agile development with regular updates' },
    { step: '04', title: 'Launch', description: 'Deployment and go-live support' },
    { step: '05', title: 'Growth', description: 'Ongoing optimization and scaling' },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive</span> Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end services to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="glass-card hover-glow interactive-scale transition-smooth group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-6 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
                <h4 className="font-bold mb-2 gradient-text">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help transform your ideas into exceptional digital experiences.
              </p>
              <Button size="lg" className="hover-glow">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;