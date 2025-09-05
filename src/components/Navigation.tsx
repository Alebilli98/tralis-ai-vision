import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b-2 border-white/20">
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/Tralis_logo.png" alt="TRALIS AI Logo" className="h-14 w-auto" />
            <span className="ml-2 font-sora font-semibold text-xl text-foreground">TRALIS AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-text-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-primary">
              <Link to="/contact">Request a consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-text-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="btn-primary w-full mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request a consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
