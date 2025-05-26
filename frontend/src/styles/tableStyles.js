import { StyleSheet, Platform } from 'react-native';

// Estilos usados para la tabla, botones, paginación y otros componentes relacionados
export const tableStyles = StyleSheet.create({
  // Contenedor general de la tabla
  tableContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },

  // Botón principal para agregar un nuevo elemento (ej: producto)
  addButton: {
    backgroundColor: '#007bff', // color azul
    paddingVertical: 12,
    borderRadius: 8, // bordes redondeados
    alignItems: 'center', // centra texto horizontalmente
    marginBottom: 16,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // Elevación para Android
    elevation: 3,
  },

  // Texto del botón agregar
  addButtonText: {
    color: '#fff', // texto blanco
    fontSize: 18,
    fontWeight: '600',
  },

  // Campo de texto para búsqueda / filtro
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  // Encabezado de la tabla (fila con títulos)
  tableHeader: {
    flexDirection: 'row', // fila horizontal
    backgroundColor: '#007bff', // azul de fondo
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
  },

  // Cada celda del encabezado
  columnHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Texto dentro del encabezado de columna
  columnHeaderText: {
    color: '#fff', // blanco
    fontWeight: '700',
    fontSize: 14,
  },

  // Estilo para la columna ID, con flex pequeño para menos ancho
  idColumn: {
    flex: 0.7,
  },

  // Columna para el nombre, más ancho que el resto
  nameColumn: {
    flex: 2.5,
    alignItems: 'flex-start', // texto a la izquierda
    paddingLeft: 12,
  },

  // Columna para el precio, ancho intermedio
  priceColumn: {
    flex: 1,
  },

  // Fila de datos
  tableRow: {
    flexDirection: 'row', // fila horizontal
    backgroundColor: '#fafafa', // fondo gris claro
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6, // separación vertical entre filas
    alignItems: 'center',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // Elevación para Android
    elevation: 2,
  },

  // Texto dentro de cada celda
  tableCell: {
    color: '#333', // gris oscuro
    fontSize: 16,
  },

  // Celda para ID, alineado centrado y con flex pequeño
  idCell: {
    flex: 0.7,
    textAlign: 'center',
  },

  // Celda para nombre, alineado a la izquierda con padding
  nameCell: {
    flex: 2.5,
    paddingLeft: 12,
    textAlign: 'left',
  },

  // Celda para precio, centrado
  priceCell: {
    flex: 1,
    textAlign: 'center',
  },

  // Contenedor para mensajes cuando la tabla está vacía
  emptyContainer: {
    flex: 1,
    justifyContent: 'center', // centra vertical
    alignItems: 'center', // centra horizontal
    marginTop: 40,
  },

  // Texto que indica que no hay datos
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },

  // Texto para mostrar errores (color rojo)
  errorText: {
    fontSize: 16,
    color: '#dc3545',
  },

  // -------- ESTILOS DE PAGINACIÓN --------
  paginationContainer: {
    flexDirection: 'column', // paginación organizada en columna
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingHorizontal: 8,
  },

  // Wrapper para los botones y números de página (fila)
  pagesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Botón para navegar páginas
  paginationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 2,
    backgroundColor: '#007bff', // azul
    borderRadius: 5,
  },

  // Estilo para botones deshabilitados (color azul claro)
  paginationButtonDisabled: {
    backgroundColor: '#a0c4ff',
  },

  // Texto dentro de los botones de paginación
  paginationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  // Número de página (botón normal)
  paginationPageNumber: {
    marginHorizontal: 3,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#eee',
  },

  // Número de página activo (resaltado)
  paginationPageNumberActive: {
    backgroundColor: '#007bff',
  },

  // Texto de número de página normal
  paginationPageNumberText: {
    color: '#333',
    fontWeight: '600',
  },

  // Texto de número de página activo (blanco)
  paginationPageNumberTextActive: {
    color: '#fff',
  },

  // Tres puntos entre páginas si hay paginación larga
  paginationDots: {
    marginHorizontal: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },

  // Fecha que aparece a la derecha en la paginación (opcional)
  paginationFecha: {
    marginLeft: 'auto',
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },

  // Contenedor para selector de items por página
  itemsPerPageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    justifyContent: 'center', // centrado horizontal
    gap: 4, // espacio entre elementos
  },

  // Texto para la etiqueta del selector "Items por página"
  itemsPerPageLabel: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },

  // Estilo para el picker/select (dropdown)
  picker: {
    height: 32,
    width: 100,
    color: '#000',
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
  },
});
