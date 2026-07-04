import React from 'react';

const Ofertas = () => {
  const ofertasData = [
    {
      id: 1,
      nombre: "Termo Pink Classic",
      precioOriginal: 89.90,
      precioOferta: 59.90,
      descuento: "33% DCTO.",
      imagen: "/assets/images/termo-agarre.jpg" 
    },
    {
      id: 2,
      nombre: "Termo Corazón Special",
      precioOriginal: 109.90,
      precioOferta: 79.90,
      descuento: "27% DCTO.",
      imagen: "/assets/images/termo-corazon.jfif"
    },
    {
      id: 3,
      nombre: "Termo Unicorn Magic",
      precioOriginal: 120.00,
      precioOferta: 85.00,
      descuento: "29% DCTO.",
      imagen: "/assets/images/termo-unicornio.jfif"
    }
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F34484] mb-4">Ofertas Exclusivas</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Aprovecha nuestros descuentos especiales por tiempo limitado. ¡No te quedes sin tu termo favorito!.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {ofertasData.map((producto) => (
          <div key={producto.id} className="bg-[#FFF0F5] rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 relative flex flex-col items-center text-center border border-pink-100">

            <div className="absolute top-4 left-4 bg-[#E94057] text-white text-xs font-black px-3 py-1.5 rounded-md tracking-wider">
              {producto.descuento}
            </div>

            <div className="bg-white w-full h-56 rounded-2xl flex justify-center items-center mb-6 overflow-hidden p-4 shadow-inner">
               <img 
                 src={producto.imagen} 
                 alt={producto.nombre} 
                 className="h-full object-contain hover:scale-110 transition-transform duration-500" 
               />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{producto.nombre}</h3>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-gray-400 line-through text-lg font-medium">S/ {producto.precioOriginal.toFixed(2)}</span>
              <span className="text-[#F34484] font-black text-2xl">S/ {producto.precioOferta.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#F34484] hover:bg-[#D81B60] text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md">
              Agregar al Carrito pinky
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;