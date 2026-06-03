// keyboard.js — Gestión centralizada de atajos de teclado
// Principio: un solo listener global, despacha a los módulos correctos

export function bindKeyboard({ deck, ui, quiz }) {
  document.addEventListener('keydown', e => {
    // Quiz open → solo Escape actúa
    if (quiz.isOpen) {
      if (e.key === 'Escape') quiz.close();
      return;
    }

    // Index open → Escape cierra
    if (ui.isIndexOpen) {
      if (e.key === 'Escape') ui.closeIndex();
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        deck.next();
        break;
      case 'ArrowLeft':
        deck.prev();
        break;
      case 'i':
      case 'I':
        ui.toggleIndex();
        break;
      case 'p':
      case 'P':
        document.getElementById('btn-pdf')?.click();
        break;
      case 'q':
      case 'Q':
        quiz.open();
        break;
    }
  });
}
