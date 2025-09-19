import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useProjects } from '@/hooks/useProjects';
import { 
  ExternalLink, 
  Github,
  ArrowRight,
  Calendar,
  Users,
  Code,
  Star,
  TrendingUp,
  Award,
  Zap,
  Eye,
  Heart,
  Download,
  Play,
  CheckCircle,
  BarChart3,
  Smartphone,
  Monitor,
  Tablet,
  Globe
} from 'lucide-react';

// Import project images
import ecommerceImg from '@/assets/portfolio-ecommerce.jpg';
import bankingImg from '@/assets/portfolio-banking.jpg';
import saasImg from '@/assets/portfolio-saas.jpg';
import crmImg from '@/assets/portfolio-crm.jpg';

const Portfolio = () => {
  const { projects: dbProjects, loading } = useProjects();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [allProjects, setAllProjects] = useState<any[]>([]);

  const categories = [
    { id: 'all', label: 'All Projects', count: 8 },
    { id: 'web', label: 'Web Apps', count: 4 },
    { id: 'mobile', label: 'Mobile Apps', count: 2 },
    { id: 'enterprise', label: 'Enterprise', count: 2 },
  ];

  // Default projects to merge with database projects
  const defaultProjects = [
    {
      id: 'default-1',
      title: 'EcoShop - E-Commerce Platform',
      category: 'web',
      shortDescription: 'Next-generation e-commerce platform with AI-powered recommendations and sustainable shopping features.',
      fullDescription: 'A comprehensive e-commerce solution featuring real-time inventory management, advanced analytics, AI-powered product recommendations, and seamless payment processing. Built with modern React architecture and microservices backend.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      image: ecommerceImg,
      mockupType: 'laptop',
      liveUrl: 'https://ecoshop-demo.predevs.dev',
      githubUrl: 'https://github.com/predevs/ecoshop',
      duration: '4 months',
      teamSize: '6 developers',
      results: {
        performance: '40% faster load times',
        conversion: '25% increase in sales',
        users: '10K+ active users',
        revenue: '$2M+ processed'
      },
      testimonial: {
        text: "PREDEVS delivered beyond our expectations. Our conversion rate increased by 25% within the first month!",
        author: "Sarah Johnson",
        role: "CEO, EcoShop Inc.",
        rating: 5
      },
      features: [
        'Real-time inventory tracking',
        'AI product recommendations', 
        'Advanced analytics dashboard',
        'Multi-payment gateway support',
        'Mobile-responsive design',
        'SEO optimized structure'
      ],
      tags: ['Featured', 'Award Winner', 'High Performance']
    },
    {
      id: 'default-2',
      title: 'SecureBank Mobile - Banking App',
      category: 'mobile',
      shortDescription: 'Secure mobile banking app with biometric authentication and real-time transaction features.',
      fullDescription: 'A cutting-edge mobile banking application featuring biometric authentication, real-time transaction processing, budget tracking, and investment portfolio management. Built with React Native and robust security protocols.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API', 'AWS', 'Node.js'],
      image: bankingImg,
      mockupType: 'mobile',
      liveUrl: 'https://apps.apple.com/securebank-mobile',
      githubUrl: 'https://github.com/predevs/securebank-mobile',
      duration: '6 months',
      teamSize: '8 developers',
      results: {
        downloads: '100K+ downloads',
        rating: '4.8/5 app store rating',
        security: '0 security incidents',
        satisfaction: '95% user satisfaction'
      },
      testimonial: {
        text: "The most secure and user-friendly banking app we've ever developed. Our customers love it!",
        author: "Michael Chen",
        role: "CTO, SecureBank",
        rating: 5
      },
      features: [
        'Biometric authentication',
        'Real-time transactions',
        'Budget tracking & insights',
        'Investment portfolio',
        'Bill payment automation',
        'Multi-language support'
      ],
      tags: ['Security First', 'User Favorite', 'Cross-Platform']
    },
    {
      id: 'default-3',
      title: 'DataViz Pro - Analytics Dashboard',
      category: 'web',
      shortDescription: 'Advanced analytics dashboard with real-time data visualization and reporting.',
      fullDescription: 'A powerful SaaS analytics platform offering real-time data visualization, custom reporting, predictive analytics, and team collaboration features. Built with modern web technologies and optimized for performance.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      image: saasImg,
      mockupType: 'desktop',
      liveUrl: 'https://dataviz-pro.predevs.dev',
      githubUrl: 'https://github.com/predevs/dataviz-pro',
      duration: '5 months',
      teamSize: '7 developers',
      results: {
        processing: '1M+ data points/sec',
        accuracy: '99.9% uptime',
        clients: '500+ enterprise clients',
        growth: '300% user growth'
      },
      testimonial: {
        text: "PREDEVS transformed how we understand our business data. The insights and performance are incredible!",
        author: "Lisa Rodriguez",
        role: "Data Director, TechCorp Analytics",
        rating: 5
      },
      features: [
        'Real-time data processing',
        'Custom dashboard builder',
        'Predictive analytics',
        'Team collaboration',
        'API integrations',
        'White-label options'
      ],
      tags: ['Scalable', 'Enterprise Ready', 'Performance Leader']
    },
    {
      id: 'default-4',
      title: 'SmartCRM - AI-Powered CRM System',
      category: 'enterprise',
      shortDescription: 'Enterprise CRM with AI-powered lead scoring and automation workflows for sales teams.',
      fullDescription: 'An intelligent customer relationship management system featuring AI-powered lead scoring, automated workflows, advanced reporting, and seamless integrations. Designed for enterprise-scale operations.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB', 'Docker', 'Kubernetes'],
      image: crmImg,
      mockupType: 'tablet',
      liveUrl: 'https://smartcrm-demo.predevs.dev',
      githubUrl: 'https://github.com/predevs/smartcrm',
      duration: '8 months',
      teamSize: '10 developers',
      results: {
        efficiency: '60% faster lead processing',
        accuracy: '85% lead scoring accuracy',
        revenue: '$5M+ pipeline value',
        adoption: '98% user adoption rate'
      },
      testimonial: {
        text: "SmartCRM's AI capabilities have revolutionized our sales process. Our team is more productive than ever!",
        author: "David Park",
        role: "VP Sales, Enterprise Solutions",
        rating: 5
      },
      features: [
        'AI lead scoring',
        'Automated workflows',
        'Advanced reporting',
        'Integration hub',
        'Mobile apps',
        'Custom fields & objects'
      ],
      tags: ['AI-Powered', 'Enterprise Scale', 'Innovation Award']
    }
  ];

  // Merge database projects with default projects
  useEffect(() => {
    const dbProjectsWithMeta = dbProjects.map(project => ({
      ...project,
      shortDescription: project.description,
      fullDescription: project.long_description,
      technologies: project.technologies || [],
      image: project.image_url || ecommerceImg,
      mockupType: 'laptop',
      liveUrl: project.project_url,
      githubUrl: project.github_url,
      duration: '3-6 months',
      teamSize: '4-8 developers',
      results: {
        performance: 'Excellent performance',
        satisfaction: '95%+ client satisfaction',
        delivery: 'On-time delivery',
        quality: 'High-quality code'
      },
      testimonial: {
        text: "Outstanding work! The team delivered exactly what we needed.",
        author: project.client_name || "Client",
        role: "Project Stakeholder",
        rating: 5
      },
      features: [
        'Custom development',
        'Responsive design',
        'Performance optimized',
        'Scalable architecture'
      ],
      tags: ['Custom Project', 'Client Work']
    }));

    setAllProjects([...dbProjectsWithMeta, ...defaultProjects]);
  }, [dbProjects]);

  const stats = [
    { label: 'Projects Delivered', value: '50+', icon: CheckCircle, color: 'text-success' },
    { label: 'Happy Clients', value: '98%', icon: Heart, color: 'text-pink-500' },
    { label: 'Years Experience', value: '5+', icon: Award, color: 'text-primary' },
    { label: 'Revenue Generated', value: '$10M+', icon: TrendingUp, color: 'text-green-500' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  if (loading) {
    return (
      <section id="portfolio" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-xl text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge variant="outline" className="mb-6 text-base px-6 py-2">
            <Star className="mr-2 h-4 w-4" />
            Award-Winning Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Projects That Make
            <br />
            <span className="gradient-text">Clients Say WOW</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each project is a masterpiece crafted with precision, innovation, and passion. 
            Explore our portfolio of digital excellence that drives real business results.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/40 hover:border-primary/50 transition-all duration-500 animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-6 text-center relative z-10">
                <div className="mb-4">
                  <stat.icon className={`h-8 w-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 hover-scale ${
                activeCategory === category.id 
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25' 
                  : 'hover:border-primary/50'
              }`}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border-border/40 hover:border-primary/30 transition-all duration-700 animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image with Mockup */}
              <div className="relative overflow-hidden h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-background/80 backdrop-blur-sm animate-scale-in"
                      style={{ animationDelay: `${tagIndex * 100}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Device Frame Indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full z-30">
                  {project.mockupType === 'laptop' && <Monitor className="h-4 w-4 text-primary" />}
                  {project.mockupType === 'mobile' && <Smartphone className="h-4 w-4 text-primary" />}
                  {project.mockupType === 'desktop' && <Globe className="h-4 w-4 text-primary" />}
                  {project.mockupType === 'tablet' && <Tablet className="h-4 w-4 text-primary" />}
                  <span className="text-xs font-medium capitalize">{project.mockupType}</span>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium animate-fade-in"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                  {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                       <div className="text-lg font-bold text-primary">{String(value)}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial Preview */}
                {project.testimonial && (
                  <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 p-4 rounded-lg mb-6 border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2 line-clamp-2">
                      "{project.testimonial.text}"
                    </p>
                    <div className="text-xs">
                      <span className="font-medium text-foreground">{project.testimonial.author}</span>
                      <span className="text-muted-foreground"> • {project.testimonial.role}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-primary/30 hover:border-primary/50 hover-scale group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <BarChart3 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Case Study
                  </Button>
                </div>

                {/* Project Meta */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/40 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-primary-glow/10 to-primary/5 backdrop-blur-xl border-primary/20 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            <CardContent className="p-12 relative z-10">
              <div className="mb-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join our portfolio of successful clients. Let&apos;s transform your vision into a digital masterpiece that drives real results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 px-8 py-4 text-lg hover-scale group"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 hover:border-primary/50 px-8 py-4 text-lg hover-scale group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Portfolio
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Detail Modal/Overlay would go here */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border-border">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold gradient-text">{selectedProject.title}</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedProject(null)}
                  className="hover-scale"
                >
                  ×
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Project Overview</h4>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Project Results</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(selectedProject.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-bold text-primary">{String(value)}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default Portfolio;