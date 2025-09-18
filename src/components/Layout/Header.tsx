import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">P.R.E</h1>
            <p className="text-xs text-muted-foreground -mt-1">Professional • Reliable • Exceptional</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium smooth-underline transition-smooth"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {user ? (
              <>
                {isAdmin && (
                  <Button variant="outline" size="sm" asChild className="hover-glow">
                    <Link to="/admin">
                      <Shield className="w-4 h-4 mr-2" />
                      Admin
                    </Link>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={signOut} className="hover-glow">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild className="hover-glow">
                  <Link to="/auth">Admin Login</Link>
                </Button>
                <Button variant="default" className="hover-glow">
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-smooth"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button variant="outline" size="sm" asChild className="w-full hover-glow">
                        <Link to="/admin">
                          <Shield className="w-4 h-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={signOut} className="w-full hover-glow">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" asChild className="w-full hover-glow">
                      <Link to="/auth">Admin Login</Link>
                    </Button>
                    <Button variant="default" className="w-full hover-glow">
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;