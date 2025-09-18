import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Professional',
      description: 'Expert team with proven track record in modern web development and cutting-edge technologies.',
    },
    {
      icon: Target,
      title: 'Reliable',
      description: 'Consistent delivery, clear communication, and dependable support throughout every project lifecycle.',
    },
    {
      icon: Award,
      title: 'Exceptional',
      description: 'Going beyond expectations to deliver outstanding results that drive business growth and success.',
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'Leveraging the latest technologies and best practices to create future-ready digital solutions.',
    },
  ];

  const team = [
    { name: 'Alex Chen', role: 'Lead Developer', speciality: 'Full-Stack Architecture' },
    { name: 'Sarah Kim', role: 'UI/UX Designer', speciality: 'Design Systems' },
    { name: 'Marcus Rodriguez', role: 'DevOps Engineer', speciality: 'Cloud Infrastructure' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">About P.R.E</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet the Team Behind <span className="gradient-text">Exceptional</span> Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a dedicated team of professionals who believe in delivering reliable, 
            exceptional digital solutions that make a real impact.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="glass-card border-primary/20 hover-glow transition-smooth">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Our Mission</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To empower businesses with cutting-edge digital solutions that are not just functional, 
                but transformative. We combine technical expertise with creative vision to deliver 
                results that exceed expectations and drive meaningful growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={value.title}
                className="glass-card hover-glow interactive-scale transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 gradient-text">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Core Team</h3>
          <p className="text-muted-foreground">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="glass-card hover-glow interactive-scale transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.speciality}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;