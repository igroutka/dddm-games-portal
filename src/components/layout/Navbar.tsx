
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#о-турнире', label: 'О турнире' },
    { href: '#правила', label: 'Правила' },
    { href: '#галерея', label: 'Галерея' },
    { href: '#участники', label: 'Участники' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-lg", 
        isScrolled ? "bg-white/70 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-minecraft text-minecraft-primary text-2xl tracking-tight animate-pulse-slow">
                DDM<span className="text-minecraft-accent">Games</span>
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-sm text-foreground/80 hover:text-minecraft-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-bottom-right after:scale-x-0 after:bg-minecraft-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="minecraft-btn px-4 py-2 text-sm"
              onClick={() => console.log('Регистрация!')}
            >
              Регистрация
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-minecraft-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-t">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-minecraft-primary hover:bg-muted/50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button 
              variant="default" 
              className="minecraft-btn w-full py-2 text-sm"
              onClick={() => {
                console.log('Регистрация!');
                setIsOpen(false);
              }}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
