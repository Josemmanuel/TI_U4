// pdf.js — Generación de PDF de la presentación
// Responsabilidad: capturar contenido y generar descarga en PDF

export class PDFExporter {
  static generatePDF() {
    console.log('Iniciando generación de PDF...');
    
    // Cargar html2pdf desde CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    
    script.onload = () => {
      console.log('html2pdf cargado');
      setTimeout(() => {
        try {
          const activeSlide = document.querySelector('.slide.is-active');
          if (!activeSlide) {
            alert('No hay diapositiva activa');
            return;
          }
          
          // Clonar el slide y resetear posicionamiento absoluto
          const slideClone = activeSlide.cloneNode(true);
          slideClone.style.cssText = `
            position: static !important;
            transform: none !important;
            display: block !important;
            opacity: 1 !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            padding: 20px !important;
          `;
          
          const opt = {
            margin: [10, 10, 10, 10],
            filename: 'presentacion-sistemas-memoria.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
              scale: 2,
              backgroundColor: '#080c14',
              useCORS: true,
              allowTaint: true
            },
            jsPDF: { orientation: 'landscape', unit: 'mm', format: 'a4' }
          };
          
          window.html2pdf().set(opt).from(slideClone).save();
        } catch (err) {
          console.error('Error:', err);
          alert('Error al generar PDF');
        }
      }, 500);
    };
    
    script.onerror = () => {
      alert('Error al cargar la librería de PDF');
    };
    
    document.head.appendChild(script);
  }
}
