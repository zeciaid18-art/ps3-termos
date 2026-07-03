export const getProductos = async () => {
  try {
    const respuesta = await fetch('https://6a1a2b85489e4715751aca8d.mockapi.io/productos'); 
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return []; 
  }
};