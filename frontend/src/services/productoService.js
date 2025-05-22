// frontend/src/services/productoService.js

const mockProducts = [
  { id: '1', name: 'Hamburguesa Clásica', description: 'Una deliciosa hamburguesa con queso, lechuga y tomate.', price: 8.99 },
  { id: '2', name: 'Papas Fritas', description: 'Crujientes papas fritas doradas.', price: 3.49 },
  { id: '3', name: 'Refresco Grande', description: 'Tu bebida favorita en tamaño grande.', price: 2.99 },
  { id: '4', name: 'Nuggets de Pollo (6 piezas)', description: 'Tiernos nuggets de pollo empanizados.', price: 5.79 },
];

let nextId = 5; // To generate new IDs for created products

export const getProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Mock: Fetching all products');
      resolve([...mockProducts]); // Return a copy to avoid direct mutation outside
    }, 800); // Simulate network delay
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mock: Fetching product with ID: ${id}`);
      const product = mockProducts.find(p => p.id === id);
      if (product) {
        resolve({ ...product }); // Return a copy
      } else {
        reject(new Error(`Mock: Product with ID ${id} not found.`));
      }
    }, 600); // Simulate network delay
  });
};

export const createProduct = async (productData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Mock: Creating product', productData);
      const newProduct = { id: (nextId++).toString(), ...productData };
      mockProducts.push(newProduct);
      resolve({ message: 'Mock: Producto creado exitosamente', product: newProduct });
    }, 1000); // Simulate network delay
  });
};

export const updateProduct = async (id, updatedData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mock: Updating product with ID: ${id}`, updatedData);
      const index = mockProducts.findIndex(p => p.id === id);
      if (index !== -1) {
        // Create a new product object with updated data
        const updatedProduct = { ...mockProducts[index], ...updatedData, id: id };
        // Replace the old product in the array
        mockProducts[index] = updatedProduct;
        resolve({ message: `Mock: Producto con ID ${id} actualizado.`, product: updatedProduct });
      } else {
        reject(new Error(`Mock: Producto con ID ${id} no encontrado para actualizar.`));
      }
    }, 800); // Simulate network delay
  });
};

export const deleteProduct = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mock: Deleting product with ID: ${id}`);
      const initialLength = mockProducts.length;
      // Filter out the product to simulate deletion
      const updatedProducts = mockProducts.filter(p => p.id !== id);
      if (updatedProducts.length < initialLength) {
        // Update the mock array in place or reassign (filter returns a new array)
         mockProducts.splice(0, mockProducts.length, ...updatedProducts); // Efficient way to replace array contents
        resolve({ message: `Mock: Producto con ID ${id} eliminado.` });
      } else {
        reject(new Error(`Mock: Producto con ID ${id} no encontrado para eliminar.`));
      }
    }, 700); // Simulate network delay
  });
};
