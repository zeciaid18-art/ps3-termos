import { Link } from 'react-router-dom';
import fbIcon from '../assets/facebook.png';
import igIcon from '../assets/instagram.png';
import tkIcon from '../assets/tik-tok.png';
import waIcon from '../assets/whatsapp.png';

const Footer = () => {
  return (
 <footer className="bg-[#2d2d2d] text-white pt-12 pb-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h3 className="text-[#FF77B4] text-2xl font-bold mb-4">Pinkys</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Termos rosados con estilo para mujeres modernas.
            </p>
            <div className="flex space-x-3">
              <img src={fbIcon} alt="Facebook" 
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition" />
              <img src={igIcon} alt="Instagram" 
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition" />
              <img src={tkIcon} alt="TikTok" 
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition" />
              <img src={waIcon} alt="WhatsApp" 
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-[#FF77B4] transition">Inicio
              </Link></li>
              <li><Link to="/productos" className="hover:text-[#FF77B4] transition">Productos
              </Link></li>
              <li><Link to="/ofertas" className="hover:text-[#FF77B4] transition">Ofertas
              </Link></li>
              <li><Link to="/contacto" className="hover:text-[#FF77B4] transition">Contacto
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-00 text-sm">
              <li>TermosPinkys@gmail.com</li>
              <li>+51 951036114</li>
              <li>Av. Principal 123, Lima</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 TermosPinkys. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;