// deck.js — Controlador principal de la presentación
// Responsabilidad única: gestionar el estado y la transición entre slides

import { slides } from './slides-data.js';

const TRANSITION_MS = 380;

export class Deck {
  #current = 0;
  #container = null;
  #slideEls  = [];
  #onChangeCallbacks = [];

  constructor(containerSelector) {
    this.#container = document.querySelector(containerSelector);
    this.#render();
  }

  // ── Renderizado inicial ──────────────────────────────────────────────────
  #render() {
    this.#container.innerHTML = slides.map((s, i) => `
      <article
        class="slide${i === 0 ? ' is-active' : ''}"
        data-index="${i}"
        aria-hidden="${i !== 0}"
        aria-label="Diapositiva ${s.id} de ${slides.length}"
      >
        ${s.html}
      </article>
    `).join('');

    this.#slideEls = Array.from(this.#container.querySelectorAll('.slide'));
  }

  // ── Navegación ───────────────────────────────────────────────────────────
  goTo(index, direction = 'next') {
    if (index === this.#current) return;
    if (index < 0 || index >= slides.length) return;

    const leaving  = this.#slideEls[this.#current];
    const entering = this.#slideEls[index];
    const dir      = direction === 'next' ? 1 : -1;

    leaving.classList.add(dir > 0 ? 'is-leaving-left' : 'is-leaving-right');
    entering.classList.add(dir > 0 ? 'is-entering-right' : 'is-entering-left');
    entering.classList.add('is-active');
    entering.removeAttribute('aria-hidden');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        leaving.classList.add('is-transitioning');
        entering.classList.add('is-transitioning');

        leaving.classList.remove('is-leaving-left', 'is-leaving-right');
        entering.classList.remove('is-entering-right', 'is-entering-left');

        setTimeout(() => {
          leaving.classList.remove('is-active', 'is-transitioning');
          entering.classList.remove('is-transitioning');
          leaving.setAttribute('aria-hidden', 'true');
        }, TRANSITION_MS);
      });
    });

    this.#current = index;
    this.#onChangeCallbacks.forEach(cb => cb(index, slides[index]));
  }

  next() {
    const next = Math.min(this.#current + 1, slides.length - 1);
    this.goTo(next, 'next');
  }

  prev() {
    const prev = Math.max(this.#current - 1, 0);
    this.goTo(prev, 'prev');
  }

  // ── Observers ────────────────────────────────────────────────────────────
  onChange(callback) {
    this.#onChangeCallbacks.push(callback);
  }

  // ── Getters ──────────────────────────────────────────────────────────────
  get currentIndex()  { return this.#current; }
  get total()         { return slides.length; }
  get currentSlide()  { return slides[this.#current]; }
}
