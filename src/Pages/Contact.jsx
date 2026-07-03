import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!formData.email.trim()) nuevosErrores.email = 'El correo electrónico es obligatorio.';
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'Por favor, escribe un mensaje.';

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setErrores({});
      setFormData({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 3000);
    } else {
      setErrores(nuevosErrores);
      setEnviado(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-sm mt-10 border border-[#FFD1DC] mb-12">
      <h1 className="text-3xl font-bold text-[#ff69b4] mb-6 text-center">Contáctanos</h1>
      
      {enviado && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 text-center font-medium">
          ¡Mensaje enviado con éxito! Te responderemos pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Nombre completo</label>
          <input 
            type="text" name="nombre" value={formData.nombre} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#ff69b4] focus:ring-1 focus:ring-[#ff69b4] transition-colors"
            placeholder=""
          />
          {errores.nombre && <p className="text-red-500 text-sm mt-1.5">{errores.nombre}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#ff69b4] focus:ring-1 focus:ring-[#ff69b4] transition-colors"
            placeholder="@gmail.com"
          />
          {errores.email && <p className="text-red-500 text-sm mt-1.5">{errores.email}</p>}
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
          <textarea 
            name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#ff69b4] focus:ring-1 focus:ring-[#ff69b4] transition-colors"
            placeholder="Escribe tu consulta aquí..."
          ></textarea>
          {errores.mensaje && <p className="text-red-500 text-sm mt-1.5">{errores.mensaje}</p>}
        </div>
        
        <button type="submit" className="w-full bg-[#ff69b4] hover:bg-[#e0569a] text-white font-bold py-3.5 rounded-full transition-colors duration-300 shadow-md">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;