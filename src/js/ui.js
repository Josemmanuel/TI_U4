// ui.js — Controlador de interfaz
// Responsabilidad: actualizar el HUD y gestionar paneles (índice)

import { indexMap } from './index-map.js';

export class UI {
  #deck       = null;
  #indexOpen  = false;

  // DOM refs
  #progressFill = null;
  #sectionLabel = null;
  #slideCounter = null;
  #indexPanel   = null;
  #indexOverlay = null;
  #indexItems   = [];

  constructor(deck) {
    this.#deck = deck;
    this.#bindElements();
    this.#buildIndex();
    this.#bindEvents();

    // Sync initial state
    this.update(deck.currentIndex, deck.currentSlide);
  }

  // ── DOM binding ──────────────────────────────────────────────────────────
  #bindElements() {
    this.#progressFill = document.getElementById('progress-fill');
    this.#sectionLabel = document.getElementById('section-label');
    this.#slideCounter = document.getElementById('slide-counter');
    this.#indexPanel   = document.getElementById('index-panel');
    this.#indexOverlay = document.getElementById('index-overlay');
  }

  // ── Index panel construction ─────────────────────────────────────────────
  #buildIndex() {
    const list = document.getElementById('index-list');
    let slideFlat = 0;

    indexMap.forEach(group => {
      const header = document.createElement('div');
      header.className = 'index-group-header';
      header.textContent = group.section;
      list.appendChild(header);

      group.slides.forEach(s => {
        const item = document.createElement('button');
        item.className = 'index-item';
        item.dataset.index = slideFlat;
        item.innerHTML = `<span class="index-num">${String(s.id).padStart(2,'0')}</span>${s.title}`;
        item.addEventListener('click', () => {
          this.#deck.goTo(slideFlat, slideFlat > this.#deck.currentIndex ? 'next' : 'prev');
          this.closeIndex();
        });
        list.appendChild(item);
        this.#indexItems.push(item);
        slideFlat++;
      });
    });
  }

  // ── Event binding ────────────────────────────────────────────────────────
  #bindEvents() {
    document.getElementById('btn-index')
      ?.addEventListener('click', () => this.toggleIndex());
    this.#indexOverlay
      ?.addEventListener('click', () => this.closeIndex());
    document.getElementById('btn-close-index')
      ?.addEventListener('click', () => this.closeIndex());
  }

  // ── Public update (called by deck.onChange) ──────────────────────────────
  update(index, slideData) {
    // Progress bar
    const pct = ((index + 1) / this.#deck.total) * 100;
    if (this.#progressFill) this.#progressFill.style.width = pct + '%';

    // Section label
    if (this.#sectionLabel) this.#sectionLabel.textContent = slideData.section;

    // Slide counter
    if (this.#slideCounter) {
      this.#slideCounter.textContent = `${index + 1} / ${this.#deck.total}`;
    }

    // Index highlight + scroll into view
    this.#indexItems.forEach((el, i) => {
      const active = i === index;
      el.classList.toggle('is-current', active);
      if (active) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }

  // ── Index panel ──────────────────────────────────────────────────────────
  toggleIndex() {
    this.#indexOpen ? this.closeIndex() : this.openIndex();
  }

  openIndex() {
    this.#indexOpen = true;
    this.#indexPanel?.classList.add('is-open');
    this.#indexOverlay?.classList.add('is-visible');
    // Scroll active item into view after panel opens
    setTimeout(() => {
      this.#indexItems[this.#deck.currentIndex]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 180);
  }

  closeIndex() {
    this.#indexOpen = false;
    this.#indexPanel?.classList.remove('is-open');
    this.#indexOverlay?.classList.remove('is-visible');
  }

  get isIndexOpen() { return this.#indexOpen; }
}
