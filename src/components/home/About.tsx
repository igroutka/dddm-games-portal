
import { useEffect, useRef } from 'react';
import { Trophy, Users, Flag, Crosshair } from 'lucide-react';

const AboutFeature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={featureRef} 
      className="animate-on-scroll p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-start space-y-3 hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-3 bg-minecraft-primary/10 rounded-lg text-minecraft-primary">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="о-турнире" className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-minecraft-accent/10 text-minecraft-accent font-medium rounded-full px-4 py-1.5 text-sm mb-3">
            О DDMGames
          </div>
          <h2 
            ref={sectionRef} 
            className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Что такое турнир по Столбам?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Столбы — это уникальный формат соревнований в Minecraft, где игроки демонстрируют свое мастерство, стратегическое мышление и умение адаптироваться.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutFeature 
            icon={Crosshair} 
            title="Уникальная механика" 
            description="Игра в Столбы требует особых навыков строительства, паркура и тактического мышления."
          />
          <AboutFeature 
            icon={Users} 
            title="Командные сражения" 
            description="Формат соревнований предполагает командную работу и координацию действий для достижения победы."
          />
          <AboutFeature 
            icon={Flag} 
            title="Динамичные матчи" 
            description="Каждый матч не похож на предыдущий благодаря различным стратегиям игроков и непредсказуемости."
          />
          <AboutFeature 
            icon={Trophy} 
            title="Ценные награды" 
            description="Победители получают не только признание сообщества, но и ценные игровые призы."
          />
        </div>

        <div className="mt-20 bg-gradient-to-r from-minecraft-primary/5 to-minecraft-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">История турнира</h3>
              <p className="text-muted-foreground mb-6">
                DDMGames зародился как небольшое соревнование среди друзей, но быстро вырос в одно из самых престижных событий в мире Minecraft. Каждый сезон привлекает всё больше участников, желающих проверить свои навыки в этой уникальной дисциплине.
              </p>
              <p className="text-muted-foreground">
                Сегодня турнир объединяет игроков разного уровня мастерства, предлагая захватывающие матчи и незабываемые моменты для всех участников и зрителей.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden pixelated-border">
                <img 
                  src="https://images.unsplash.com/photo-1637984135921-301ab0f935d4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Minecraft tournament" 
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

export default About;
