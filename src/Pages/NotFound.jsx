import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center mt-10">
 
      <h1 className="text-7xl md:text-9xl font-black text-[#ff69b4] mb-4 drop-shadow-md">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        ¡Ups! Página no encontrada.
      </h2>
      
      <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
        Parece que te perdiste buscando el termo perfecto. 
        La página que intentas visitar no existe o ha sido movida
      </p>
   
      <Link 
        to="/" 
        className="bg-[#ff69b4] hover:bg-[#e0569a] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;