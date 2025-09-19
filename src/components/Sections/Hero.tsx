import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { track } from '@vercel/analytics';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { content } = useSiteContent();

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-secondary opacity-60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
            <span className="text-sm font-medium text-primary-glow">✨ Professional Development Team</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {content?.hero_title ? (
              <span className="gradient-text">{content.hero_title}</span>
            ) : (
              <>
                <span className="gradient-text">PRECODES</span>
                <br />
                <span className="text-foreground">Professional</span>
                <br />
                <span className="gradient-text">Development</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {content?.hero_subtitle || 
              "We craft exceptional digital experiences that elevate your business. Expert development, reliable solutions, extraordinary results."
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="hover-glow interactive-scale group"
              onClick={() => track('hero_view_work_clicked')}
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="interactive-scale group"
              onClick={() => track('hero_watch_demo_clicked')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '8+', label: 'Years Experience' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="glass-card p-4 rounded-lg hover-glow transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;