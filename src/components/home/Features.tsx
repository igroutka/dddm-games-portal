
import { useEffect, useRef } from 'react';
import { ShieldCheck, Award, Zap } from 'lucide-react';

const Features = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-4 md:px-6 bg-zinc-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 text-pink-300 font-medium rounded-full px-4 py-1.5 text-sm mb-3">
            Особенности
          </div>
          <h2 
            ref={titleRef} 
            className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Почему стоит участвовать
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Участие в турнире — это не только соревнование, но и возможность стать частью активного сообщества игроков Minecraft.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll"
        >
          <div className="bg-zinc-800 rounded-xl p-6 glass-card">
            <div className="p-3 inline-block bg-purple-500/10 text-pink-300 rounded-lg mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Честная игра</h3>
            <p className="text-zinc-400">
              Все матчи проходят под наблюдением опытных судей, что гарантирует соблюдение правил всеми участниками.
            </p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 glass-card">
            <div className="p-3 inline-block bg-purple-500/10 text-pink-300 rounded-lg mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ценные призы</h3>
            <p className="text-zinc-400">
              Победители и финалисты получают не только признание, но и ценные внутриигровые предметы и ресурсы.
            </p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 glass-card">
            <div className="p-3 inline-block bg-purple-500/10 text-pink-300 rounded-lg mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Адреналин</h3>
            <p className="text-zinc-400">
              Захватывающие матчи, полные неожиданных поворотов и стратегических решений, не оставят равнодушными ни участников, ни зрителей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
