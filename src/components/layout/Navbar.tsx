
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

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-lg", 
        isScrolled ? "bg-zinc-900/70 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-minecraft text-orange-500 text-2xl tracking-tight animate-pulse-slow">
                DDM<span className="text-orange-300">Games</span>
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center">
            <Button 
              variant="default" 
              className="minecraft-btn px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600"
              onClick={() => console.log('Регистрация!')}
            >
              Регистрация
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/90 backdrop-blur-lg border-t border-zinc-800">
          <div className="px-3 py-2">
            <Button 
              variant="default" 
              className="minecraft-btn w-full py-2 text-sm bg-orange-500 hover:bg-orange-600"
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
