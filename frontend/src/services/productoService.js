// frontend/src/services/productoService.js

const productosSimulados = Array.from({ length: 150 }, (_, i) => {
  const nombres = [
    'Hamburguesa Clásica',
    'Papas Fritas',
    'Refresco Grande',
    'Nuggets de Pollo (6 piezas)',
    'Combo Familiar',
    'Ensalada César',
    'Sándwich de Pollo',
    'Helado de Vainilla',
    'Pizza Personal',
    'Café Expreso',
  ];

  const descripciones = [
    'Una deliciosa opción para cualquier momento del día.',
    'Crujientes y doradas al estilo tradicional.',
    'Fresca, saludable y llena de sabor.',
    'Perfecto para compartir en familia.',
    'Una bebida refrescante para acompañar.',
    'Postre cremoso y dulce para cerrar con broche de oro.',
    'Caliente, fuerte y con aroma intenso.',
    '¡Ideal para los más pequeños!',
    'Receta especial de la casa con ingredientes frescos.',
    'Empanizados al punto, acompañados de salsa especial.',
  ];

  const autores = [
    'Sebastian Ibarra',
    'Javier Ibarra',
    'Cachupin Ibarra',
    'Wololoooo',
    'Ana Torres',
    'Luis Martínez',
    'Majo Castillo',
    'Camilo Pérez',
    'Andrea Gómez',
    'Ximena Soto',
  ];

  // Generar valores aleatorios
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
  const price = (Math.random() * 15 + 2).toFixed(2); // $2.00 - $17.00
  const creadoPor = autores[Math.floor(Math.random() * autores.length)];

  // Fecha aleatoria entre 2024-01-01 y 2024-12-31
  const start = new Date(2024, 0, 1);
  const end = new Date(2024, 11, 31);
  const fecha = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const fechaFormateada = fecha.toLocaleDateString('es-CL');

  return {
    id: (i + 1).toString(),
    name: nombre,
    description: descripcion,
    price: parseFloat(price),
    creadoPor,
    fecha: fechaFormateada,
  };
});

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...productosSimulados]), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productosSimulados.find(p => p.id === id);
      if (product) resolve({...product});
      else reject('No encontrado');
    }, 500);
  });
};

export const createProduct = (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProduct = {
        ...product,
        id: productosSimulados.length ? productosSimulados[productosSimulados.length - 1].id + 1 : 1,
        creadoPor: 'Simulado',
        fecha: new Date().toISOString().slice(0, 10),
      };
      productosSimulados.push(newProduct);
      resolve(newProduct);
    }, 500);
  });
};

export const updateProduct = (id, updatedProduct) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = productosSimulados.findIndex(p => p.id === id);
      if (index >= 0) {
        productosSimulados[index] = {
          ...productosSimulados[index],
          ...updatedProduct,
        };
        resolve(productosSimulados[index]);
      } else {
        reject('No encontrado');
      }
    }, 500);
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = productosSimulados.findIndex(p => p.id === id);
      if (index >= 0) {
        productosSimulados.splice(index, 1);
        resolve(true);
      } else {
        reject('No encontrado');
      }
    }, 500);
  });
};