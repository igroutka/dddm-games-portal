
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
      alt: "Minecraft gameplay screenshot 1",
      caption: "Финальный матч сезона 3"
    },
    {
      src: "https://images.unsplash.com/photo-1639252498000-c6d79d0fd1c4?q=80&w=1000&auto=format&fit=crop",
      alt: "Minecraft gameplay screenshot 2",
      caption: "Строительство базы команды Dragons"
    },
    {
      src: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1000&auto=format&fit=crop",
      alt: "Minecraft gameplay screenshot 3",
      caption: "Эпичное сражение на центральной платформе"
    },
    {
      src: "https://images.unsplash.com/photo-1637984135921-301ab0f935d4?q=80&w=1000&auto=format&fit=crop",
      alt: "Minecraft gameplay screenshot 4",
      caption: "Победное восхождение по столбу"
    }
  ];

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

  const nextImage = () => {
    setActiveImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="галерея" className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-minecraft-accent/10 text-minecraft-accent font-medium rounded-full px-4 py-1.5 text-sm mb-3">
            Галерея
          </div>
          <h2 
            ref={sectionRef} 
            className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Моменты турнира
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Самые яркие и запоминающиеся моменты соревнований DDMGames
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[16/9] relative">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                  <p className="text-white font-medium text-sm md:text-base">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        <div className="flex items-center justify-center mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-colors ${
                index === activeImage ? 'bg-minecraft-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                index === activeImage
                  ? 'ring-2 ring-minecraft-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-2">
            Просмотреть все изображения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
