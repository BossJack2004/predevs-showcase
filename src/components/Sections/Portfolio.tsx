import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github,
  ArrowRight,
  Calendar,
  Users,
  Code
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Modern e-commerce platform with real-time inventory, secure payments, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      duration: '3 months',
      teamSize: '4 developers',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Application',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      technologies: ['React Native', 'Firebase', 'Plaid API', 'AWS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      duration: '6 months',
      teamSize: '5 developers',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard for SaaS companies with real-time data visualization and reporting.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Supabase'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      duration: '4 months',
      teamSize: '3 developers',
    },
    {
      title: 'AI-Powered CRM',
      category: 'Enterprise Solution',
      description: 'Customer relationship management system with AI-powered lead scoring and automation.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      duration: '8 months',
      teamSize: '6 developers',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Team Members', value: '12' },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Showcasing <span className="gradient-text">Exceptional</span> Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we transform ideas into digital reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card hover-glow interactive-scale transition-smooth overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-secondary flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary opacity-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.teamSize}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1 group">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group">
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Like What You See?</h3>
              <p className="text-muted-foreground mb-6">
                Ready to discuss your project? Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-glow group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;