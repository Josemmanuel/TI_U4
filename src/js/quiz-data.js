// Banco de preguntas — Sistemas de Memoria
export const quizBank = [
  {
    q: '¿Qué fenómeno describe la brecha creciente entre la velocidad del CPU y la latencia de la RAM?',
    opts: ['Cache Miss', 'Memory Wall (Muro de Memoria)', 'Page Fault', 'TLB Miss'],
    correct: 1,
    exp: 'El "Muro de Memoria" describe la divergencia histórica: los CPUs crecen ~60% anual mientras la DRAM solo mejora ~7%, generando ciclos de espera vacíos en el procesador.',
  },
  {
    q: '¿Cuántos transistores utiliza una celda SRAM por cada bit almacenado?',
    opts: ['1 transistor + 1 capacitor', '2 transistores', '4 transistores', '6 transistores'],
    correct: 3,
    exp: 'La SRAM usa 6 transistores por bit formando inversores cruzados biestables, lo que la hace más rápida pero más costosa y de menor densidad que la DRAM.',
  },
  {
    q: '¿Qué principio de localidad explica por qué los bucles "for" aprovechan eficientemente la caché?',
    opts: ['Localidad Espacial', 'Localidad Temporal', 'Localidad Secuencial', 'Principio de Inclusión'],
    correct: 1,
    exp: 'La Localidad Temporal indica que si se accede a una dirección, es muy probable que se vuelva a acceder en el corto plazo. Los contadores de bucles son el ejemplo clásico.',
  },
  {
    q: 'En el algoritmo Best-Fit, ¿cuál es su principal desventaja?',
    opts: [
      'Es demasiado lento en asignación',
      'Agota los bloques grandes rápidamente',
      'Genera residuos microscópicos e inutilizables',
      'No funciona con particiones dinámicas',
    ],
    correct: 2,
    exp: 'Best-Fit busca el hueco más ajustado, lo que preserva bloques grandes pero genera fragmentos residuales muy pequeños que ningún proceso puede aprovechar.',
  },
  {
    q: '¿Qué hardware intercepta cada acceso a memoria y resuelve la traducción de dirección virtual a física?',
    opts: ['Controlador de DMA', 'Scheduler del Kernel', 'MMU (Memory Management Unit)', 'TLB exclusivamente'],
    correct: 2,
    exp: 'La MMU es el coprocesador integrado en el silicio del CPU que intercepta y traduce cada acceso de memoria virtual a dirección física en nanosegundos.',
  },
  {
    q: '¿Qué sucede cuando el bit de validez en la Tabla de Páginas vale 0?',
    opts: [
      'Se busca en la caché L3',
      'Se dispara un Page Fault',
      'El proceso termina con error',
      'El TLB resuelve la dirección',
    ],
    correct: 1,
    exp: 'Un bit de validez en 0 indica que la página NO está en RAM. La MMU interrumpe el ciclo y dispara una excepción Page Fault para que el kernel cargue la página desde disco.',
  },
  {
    q: '¿Cuál es el objetivo del TLB (Translation Lookaside Buffer)?',
    opts: [
      'Reemplazar la Tabla de Páginas completa',
      'Cachear las últimas traducciones página→marco para evitar accesos extra a RAM',
      'Gestionar los fallos de página en disco',
      'Almacenar páginas en modo swap',
    ],
    correct: 1,
    exp: 'El TLB es una caché asociativa de alta velocidad que guarda las traducciones más recientes, evitando que la MMU deba acceder a la RAM para cada traducción de dirección.',
  },
  {
    q: '¿Qué tipo de fragmentación elimina la Memoria Virtual con paginación?',
    opts: ['Fragmentación Interna', 'Fragmentación Externa', 'Ambas', 'Ninguna'],
    correct: 1,
    exp: 'La paginación elimina la fragmentación externa porque cualquier página lógica puede ocupar cualquier marco físico disponible, sin necesidad de contigüidad en la RAM.',
  },
];
