
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="правила" className="py-24 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-minecraft-accent/10 text-minecraft-accent font-medium rounded-full px-4 py-1.5 text-sm mb-3">
            Правила игры
          </div>
          <h2 
            ref={sectionRef} 
            className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Как играть в Столбы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Познакомьтесь с основными правилами и механиками этой увлекательной игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div 
            ref={(el) => cardsRefs.current[0] = el} 
            className="animate-on-scroll bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="h-48 bg-minecraft-primary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="font-minecraft text-4xl text-minecraft-primary">1</span>
                <h3 className="font-semibold mt-2">Подготовка</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                Команды начинают игру на противоположных сторонах арены. У каждой команды есть своя база и ресурсы для строительства столбов.
              </p>
            </div>
          </div>

          <div 
            ref={(el) => cardsRefs.current[1] = el} 
            className="animate-on-scroll bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="h-48 bg-minecraft-primary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="font-minecraft text-4xl text-minecraft-primary">2</span>
                <h3 className="font-semibold mt-2">Строительство</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                Игроки строят вертикальные столбы, по которым нужно подниматься. Столбы должны быть стратегически расположены для создания путей к центру арены.
              </p>
            </div>
          </div>

          <div 
            ref={(el) => cardsRefs.current[2] = el} 
            className="animate-on-scroll bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="h-48 bg-minecraft-primary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <span className="font-minecraft text-4xl text-minecraft-primary">3</span>
                <h3 className="font-semibold mt-2">Победа</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground">
                Побеждает команда, которая первой захватит центральную точку арены или уничтожит всех игроков противоположной команды.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={(el) => cardsRefs.current[3] = el} 
          className="animate-on-scroll bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Особенности турнира</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-minecraft-primary/10 p-1 rounded text-minecraft-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Различные арены</h4>
                    <p className="text-sm text-muted-foreground">Каждый матч проходит на уникальной арене с различными условиями и препятствиями.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-minecraft-primary/10 p-1 rounded text-minecraft-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Система рейтинга</h4>
                    <p className="text-sm text-muted-foreground">Все участники получают рейтинговые очки за каждый матч, что определяет их место в турнирной таблице.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-minecraft-primary/10 p-1 rounded text-minecraft-primary mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Прямые трансляции</h4>
                    <p className="text-sm text-muted-foreground">Все матчи транслируются в прямом эфире с комментариями опытных игроков.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="minecraft-btn px-5 py-2.5">
                  Подробные правила
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg pixelated-border">
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" 
                  alt="Minecraft gameplay" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
