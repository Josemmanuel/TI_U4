// quiz.js — Controlador del Quiz interactivo
// Responsabilidad única: estado y lógica del quiz

import { quizBank } from './quiz-data.js';

const QUESTIONS_PER_ROUND = 5;

export class Quiz {
  #overlay   = null;
  #queue     = [];
  #index     = 0;
  #score     = 0;
  #answered  = false;

  constructor() {
    this.#overlay = document.getElementById('quiz-overlay');
    this.#bindEvents();
  }

  #bindEvents() {
    document.getElementById('btn-quiz-open')
      ?.addEventListener('click', () => this.open());
    document.getElementById('btn-quiz-close')
      ?.addEventListener('click', () => this.close());
    document.getElementById('btn-quiz-next')
      ?.addEventListener('click', () => this.#nextQuestion());
  }

  open() {
    this.#queue = [...quizBank]
      .sort(() => Math.random() - 0.5)
      .slice(0, QUESTIONS_PER_ROUND);
    this.#index = 0;
    this.#score = 0;
    this.#overlay?.classList.add('is-open');
    this.#renderQuestion();
  }

  close() {
    this.#overlay?.classList.remove('is-open');
  }

  get isOpen() {
    return this.#overlay?.classList.contains('is-open') ?? false;
  }

  // ── Internal ─────────────────────────────────────────────────────────────
  #renderQuestion() {
    this.#answered = false;
    const q = this.#queue[this.#index];

    this.#el('quiz-question').textContent = q.q;
    this.#el('quiz-feedback').textContent  = '';
    this.#el('quiz-feedback').className    = 'quiz-feedback';
    this.#el('btn-quiz-next').hidden       = true;
    this.#updateScore();

    const optsEl = this.#el('quiz-options');
    optsEl.innerHTML = '';
    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.addEventListener('click', () => this.#answer(i));
      optsEl.appendChild(btn);
    });
  }

  #answer(chosen) {
    if (this.#answered) return;
    this.#answered = true;

    const q    = this.#queue[this.#index];
    const opts = this.#el('quiz-options').querySelectorAll('.quiz-opt');

    opts.forEach(b => (b.disabled = true));
    opts[q.correct].classList.add('is-correct');

    const feedbackEl = this.#el('quiz-feedback');
    if (chosen === q.correct) {
      this.#score++;
      feedbackEl.textContent = `✓ Correcto. ${q.exp}`;
      feedbackEl.classList.add('is-correct');
    } else {
      opts[chosen].classList.add('is-wrong');
      feedbackEl.textContent = `✗ Incorrecto. ${q.exp}`;
      feedbackEl.classList.add('is-wrong');
    }

    this.#updateScore();

    const isLast = this.#index >= this.#queue.length - 1;
    if (!isLast) {
      this.#el('btn-quiz-next').hidden = false;
    } else {
      feedbackEl.textContent += `  •  Resultado: ${this.#score} / ${this.#queue.length}`;
    }
  }

  #nextQuestion() {
    this.#index++;
    if (this.#index < this.#queue.length) this.#renderQuestion();
  }

  #updateScore() {
    this.#el('quiz-score').textContent =
      `Pregunta ${this.#index + 1} / ${this.#queue.length}  •  Correctas: ${this.#score}`;
  }

  #el(id) { return document.getElementById(id); }
}
