import React from 'react';

const Productos = () => {

  const productosData = [
    {
      id: 1,
      nombre: "Termo Pink Classic",
      precio: 89.90,
      imagen: "/assets/images/termo-agarre.jpg" 
    },
    {
      id: 2,
      nombre: "Termo Corazón Special",
      precio: 109.90,
      imagen: "/assets/images/termo-corazon.jfif"
    },
    {
      id: 3,
      nombre: "Termo Unicorn Magic",
      precio: 120.00,
      imagen: "/assets/images/termo-unicornio.jfif"
    },
    {
      id: 4,
      nombre: "Termo Black Elegance",
      precio: 95.00,
      imagen: "/assets/images/termo-sport.jpg" 
    },
    {
      id: 5,
      nombre: "Termo Blue Ocean",
      precio: 85.00,
      imagen: "/assets/images/tmo-deporte.jpg" 
    },
    {
      id: 6,
      nombre: "Termo Green Nature",
      precio: 90.00,
      imagen: "/assets/images/termo-brillante.jpg" 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF69B4]">
          Nuestros productos Pinky
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {productosData.map((producto) => (
          <div key={producto.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center pb-6">
 
            <div className="w-full h-80 flex justify-center items-center overflow-hidden mb-5 bg-gray-50/50">
               <img 
                 src={producto.imagen} 
                 alt={producto.nombre} 
                 className="w-full h-full object-cover" 
               />
            </div>

            <span className="bg-[#FFD1DC] text-gray-800 text-[10px] font-bold px-3 py-1 rounded-md mb-3 tracking-wider">
              {producto.categoria}
            </span>

            <h3 className="text-lg font-bold text-gray-800 mb-2 px-4">
              {producto.nombre}
            </h3>
 
            <div className="text-[#FF69B4] font-black text-2xl mb-1">
              S/. {producto.precio.toFixed(2)}
            </div>

            <p className="text-gray-400 text-xs mb-5">
              Stock: {producto.stock} unidades
            </p>
            <div className="px-6 w-full mt-auto">
              <button className="w-full border-2 border-[#FFB6C1] text-[#FF69B4] font-bold py-2 rounded-md hover:bg-[#FFF0F5] transition-colors duration-300">
                Agregar al Carrito
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;