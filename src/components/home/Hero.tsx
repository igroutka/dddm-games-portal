
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-zinc-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-72 h-72 bg-orange-300/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="inline-block bg-orange-500/20 text-orange-300 font-medium rounded-full px-4 py-1.5 text-sm mb-6">
              Minecraft Турнир
            </div>
          </div>

          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-minecraft tracking-tight text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            DDM<span className="text-orange-500">Games</span>
          </h1>

          <p 
            className={`text-xl md:text-2xl text-gray-300 max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            Легендарный турнир по игре в Столбы — проверь свои навыки в самом захватывающем соревновании Minecraft
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <Button className="minecraft-btn px-6 py-6 text-base bg-orange-500 hover:bg-orange-600">
              Регистрация на турнир
            </Button>
          </div>

          <div 
            className={`pt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-b from-transparent to-zinc-900/50 rounded-xl overflow-hidden glass-card border-orange-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="pixelated-border bg-zinc-900/70 px-6 py-3 rounded-md backdrop-blur-sm border border-orange-500/30">
                  <p className="font-minecraft text-white text-lg">Начало турнира: Скоро</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1000&auto=format&fit=crop" 
                alt="Minecraft blocks" 
                className="w-full h-full object-cover object-center opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
