// Mapa del índice de navegación — agrupado por sección
export const indexMap = [
  {
    section: 'Introducción y Objetivos',
    slides: [
      { id: 1,  title: 'Portada de la Sesión' },
      { id: 2,  title: 'Objetivos Académicos' },
    ],
  },
  {
    section: 'Bloque 1: El Escenario Físico',
    slides: [
      { id: 3,  title: 'La Brecha de Rendimiento' },
      { id: 4,  title: 'Evolución: El Muro de Memoria' },
      { id: 5,  title: 'Jerarquía de Memoria: El Trilema' },
      { id: 6,  title: 'La Pirámide del Hardware' },
      { id: 7,  title: 'Las Tres Variables del Trilema' },
      { id: 8,  title: 'Métricas Comparativas del Hardware' },
    ],
  },
  {
    section: 'Bloque 2: Memorias Internas',
    slides: [
      { id: 9,  title: 'Registros del CPU' },
      { id: 10, title: 'SRAM vs DRAM: Fundamentos de Silicio' },
      { id: 11, title: 'Esquema Eléctrico de Celdas' },
      { id: 12, title: 'Evolución DDR' },
    ],
  },
  {
    section: 'Bloque 3: Memoria Caché',
    slides: [
      { id: 13, title: 'Arquitectura Caché Intermedia' },
      { id: 14, title: 'Interconexión y Flujo de Tags' },
      { id: 15, title: 'Visión del DIE de Silicio' },
      { id: 16, title: 'Principios de Localidad' },
      { id: 17, title: 'Hit Rate y su Impacto Crítico' },
    ],
  },
  {
    section: 'Bloque 4: Almacenamiento Persistente',
    slides: [
      { id: 18, title: 'Memoria Externa y Persistencia' },
      { id: 19, title: 'HDD vs SSD' },
      { id: 20, title: 'HDD: Detalles Mecánicos' },
      { id: 21, title: 'Infraestructuras de Datos Masivos' },
    ],
  },
  {
    section: 'Bloque 5: El Rol del Software',
    slides: [
      { id: 22, title: 'Gestión de Memoria por el S.O.' },
      { id: 23, title: 'Responsabilidades del Kernel' },
      { id: 24, title: 'Espacio de Direcciones Lógicas' },
      { id: 25, title: 'Mecanismos de Swapping' },
      { id: 26, title: 'Estructuras de Control de Espacio Libre' },
      { id: 27, title: 'Modelos de Particionamiento' },
      { id: 28, title: 'Algoritmos de Asignación' },
      { id: 29, title: 'El Fenómeno de la Fragmentación' },
      { id: 30, title: 'Compactación: Mitigación por Fuerza Bruta' },
    ],
  },
  {
    section: 'Bloque 6: Actividad Práctica de Aula',
    slides: [
      { id: 31, title: 'Taller Práctico de Asignación' },
      { id: 32, title: 'Análisis Paso a Paso' },
      { id: 33, title: 'Matriz de Estado Final del Sistema' },
    ],
  },
  {
    section: 'Bloque 7: Memoria Virtual',
    slides: [
      { id: 34, title: 'Memoria Virtual: El Paradigma Definitivo' },
      { id: 35, title: 'Mecánica de Paginación' },
      { id: 36, title: 'La Tabla de Páginas' },
      { id: 37, title: 'El Mecanismo de Traducción Lógica' },
      { id: 38, title: 'Unidad de Gestión de Memoria (MMU)' },
      { id: 39, title: 'Protocolo Page Fault' },
      { id: 40, title: 'El TLB' },
    ],
  },
  {
    section: 'Conclusión',
    slides: [
      { id: 41, title: 'Síntesis y Buenas Prácticas' },
      { id: 42, title: 'Cierre y Preguntas' },
    ],
  },
];
