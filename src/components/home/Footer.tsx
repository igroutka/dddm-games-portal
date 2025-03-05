
import { Github, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-minecraft-dark text-white pt-16 pb-8 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-minecraft text-3xl text-white">
                DDM<span className="text-minecraft-primary">Games</span>
              </span>
            </a>
            <p className="text-gray-300 max-w-md mb-6">
              DDMGames — турнир по игре Столбы в мире Minecraft, объединяющий лучших игроков и предлагающий незабываемые состязания.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">Github</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-minecraft text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#о-турнире" className="text-gray-300 hover:text-white transition-colors">О турнире</a>
              </li>
              <li>
                <a href="#правила" className="text-gray-300 hover:text-white transition-colors">Правила</a>
              </li>
              <li>
                <a href="#галерея" className="text-gray-300 hover:text-white transition-colors">Галерея</a>
              </li>
              <li>
                <a href="#участники" className="text-gray-300 hover:text-white transition-colors">Участники</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-minecraft text-lg mb-4">Контакты</h3>
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

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DDMGames. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
