import React from 'react';

const Home = () => {
  return (

    <div 
      className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/fondo-3.jpg')" }}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex items-center">

        <div className="max-w-lg flex flex-col items-start text-left">

          <h1 
            className="text-5x3 md:text-6xl font-black 
            text-[#F34484] leading-tight mb-7"
            style={{ 
              textShadow: '2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff, 0px 4px 10px rgba(0,0,0,0.1)' 
            }}
          >
            Termos Pinkys<br />Estilo y Calidad
          </h1>

          <p className="text-white text-sm md:text-base font-medium leading-relaxed mb-8 drop-shadow-md">
            Descubre nuestra colección exclusiva de termos rosados con diseños únicos. Material premium que mantiene tus bebidas a la temperatura ideal por horas. ¡Y recibe un mini termo de regalo con cada compra!
          </p>

          <button className="bg-white text-[#F34484] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300 uppercase tracking-widest text-sm">
            Ver Colección
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;