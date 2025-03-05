
import { Github, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-minecraft text-3xl text-white">
                DDM<span className="text-orange-500">Games</span>
              </span>
            </a>
            <p className="text-gray-300 max-w-md mb-6">
              DDMGames — турнир по игре Столбы в мире Minecraft, объединяющий лучших игроков и предлагающий незабываемые состязания.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github size={20} />
                <span className="sr-only">Github</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-minecraft text-lg mb-6 text-orange-400">Регистрация</h3>
            <Button className="minecraft-btn px-6 py-5 text-base w-full bg-orange-500 hover:bg-orange-600">
              Регистрация на турнир
            </Button>
            
            <div className="mt-8">
              <h4 className="font-minecraft text-md mb-4 text-orange-300">Контакты</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">
                  <span className="block text-gray-400 text-sm">Email:</span>
                  info@ddmgames.ru
                </li>
                <li className="text-gray-300">
                  <span className="block text-gray-400 text-sm">Discord:</span>
                  discord.gg/ddmgames
                </li>
                <li className="text-gray-300">
                  <span className="block text-gray-400 text-sm">Сервер:</span>
                  play.ddmgames.ru
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DDMGames. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
