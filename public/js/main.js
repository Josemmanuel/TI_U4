// main.js — Punto de entrada
// Responsabilidad: instanciar módulos y conectarlos (composición, no herencia)

import { Deck }         from './deck.js';
import { UI }           from './ui.js';
import { Quiz }         from './quiz.js';
import { PDFExporter }  from './pdf.js';
import { bindKeyboard } from './keyboard.js';

document.addEventListener('DOMContentLoaded', () => {
  const deck = new Deck('#slide-container');
  const ui   = new UI(deck);
  const quiz = new Quiz();

  // El Deck notifica cambios → la UI se actualiza
  deck.onChange((index, slideData) => ui.update(index, slideData));

  // Atajos de teclado unificados
  bindKeyboard({ deck, ui, quiz });

  // Botones de navegación del DOM
  document.getElementById('btn-prev')
    ?.addEventListener('click', () => deck.prev());
  document.getElementById('btn-next')
    ?.addEventListener('click', () => deck.next());
  document.getElementById('btn-pdf')
    ?.addEventListener('click', () => PDFExporter.generatePDF());
});
