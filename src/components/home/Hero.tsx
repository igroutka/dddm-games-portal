
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRegistrationClick = () => {
    window.open('https://qform.link/form_8OfyRqTxAY-9-sbkNnTZHX24sUY8RavZ', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-zinc-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full blur-3xl -bottom-20 -right-20 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="inline-block bg-purple-500/20 text-pink-300 font-medium rounded-full px-4 py-1.5 text-sm mb-6">
              Minecraft Турнир
            </div>
          </div>

          <div
            className={`w-full max-w-md transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <img 
              src="/lovable-uploads/e5e0569c-dd24-49c4-8fb2-fb1ba360fea3.png" 
              alt="DDMGames Logo" 
              className="w-full h-auto"
            />
          </div>

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
            <Button 
              className="minecraft-btn px-6 py-6 text-base bg-purple-600 hover:bg-pink-600"
              onClick={handleRegistrationClick}
            >
              Регистрация на турнир
            </Button>
          </div>

          <div 
            className={`pt-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-b from-transparent to-zinc-900/50 rounded-xl overflow-hidden glass-card border-purple-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="pixelated-border bg-zinc-900/70 px-6 py-3 rounded-md backdrop-blur-sm border border-pink-500/30">
                  <p className="font-minecraft text-white text-lg">Начало турнира: Скоро</p>
                </div>
              </div>
              <img 
                src="/lovable-uploads/e5e0569c-dd24-49c4-8fb2-fb1ba360fea3.png" 
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
