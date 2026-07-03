import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (

    <nav className="bg-[#ff69b4] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
          <img 
            src={logo} 
            alt="Logo Termos Pinky" 

            className="w-10 h-10 mr-3 rounded-full object-cover bg-white" 
          />
          <span className="text-white text-2xl font-bold tracking-wide">
            Termos Pinky
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-white font-medium hover:text-gray-200 transition-colors duration-300">
            Inicio
          </Link>
          <Link to="/productos" className="text-white font-medium hover:text-gray-200 transition-colors duration-300">
            Productos
          </Link>
          <Link to="/ofertas" className="text-white font-medium hover:text-gray-200 transition-colors duration-300">
            Ofertas
          </Link>
          <Link to="/contacto" className="text-white font-medium hover:text-gray-200 transition-colors duration-300">
            Contacto
          </Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-white text-[#ff69b4] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-sm">
            Mi Cuenta
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-gray-200 focus:outline-none">
            <svg className="w-8 h-8" fill="none" 
            stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" 
              strokeLinejoin="round"
               strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
               </path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;