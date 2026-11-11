/* ==========================================================================
   JURISPASS - DECK DE FLASHCARDS 3D COM REPETIÇÃO ESPAÇADA & FLIP MOTION
   ========================================================================== */

function renderFlashcards() {
  updateSidebarUI();
  let cur = STATE.cardFcAtual || 0;
  if (cur >= FLASHCARDS.length) cur = 0;

  const totalDominados = Object.keys(STATE.flashcardsDominados || {}).filter(k => STATE.flashcardsDominados[k]).length;
  const pctDominio = Math.round((totalDominados / FLASHCARDS.length) * 100);

  function updateCard() {
    const fc = FLASHCARDS[cur];
    const dom = STATE.flashcardsDominados && STATE.flashcardsDominados[cur];
    const cardElem = document.getElementById('main-flashcard');
    if (cardElem) cardElem.classList.remove('flipped');

    const elCat = document.getElementById('fc-cat');
    if (elCat) elCat.textContent = fc.categoria || 'Direito Penal';

    const elCounter = document.getElementById('fc-counter');
    if (elCounter) elCounter.textContent = `Cartão ${cur + 1} de ${FLASHCARDS.length}`;

    const elFront = document.getElementById('fc-front-text');
    if (elFront) elFront.textContent = fc.pergunta;

    const elBack = document.getElementById('fc-back-text');
    if (elBack) elBack.textContent = fc.resposta;

    const elLegal = document.getElementById('fc-legal');
    if (elLegal) elLegal.textContent = fc.fundamento || 'Artigo / Súmula';

    const btnDom = document.getElementById('btn-fc-dom');
    if (btnDom) {
      btnDom.innerHTML = dom ? `${SVG.check} Conceito Dominado` : '○ Marcar como Dominado';
      btnDom.style.background = dom ? 'var(--c-emerald)' : 'var(--bg-surface)';
      btnDom.style.color = dom ? '#ffffff' : 'var(--tx-muted)';
      btnDom.style.borderColor = dom ? 'var(--c-emerald)' : 'var(--bd)';
    }

    const elProg = document.getElementById('fc-header-prog');
    if (elProg) elProg.textContent = `${totalDominados}/${FLASHCARDS.length} dominados (${pctDominio}%)`;
  }

  const container = getViewContainer('view-flashcards');
  container.innerHTML = `
    <!-- Top Header & Breadcrumb -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:140px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/')">
          ${SVG.arrowLeft} Início
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Flashcards 3D</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted)" id="fc-header-prog">
        ${totalDominados}/${FLASHCARDS.length} dominados (${pctDominio}%)
      </div>
    </div>

    <!-- Cabeçalho -->
    <div class="view-header-block" style="margin-bottom: 2rem; text-align:center">
      <div class="status-island" style="margin:0 auto 0.6rem; display:inline-flex">
        <span class="status-badge" style="background:var(--c-purple-glow); color:var(--c-purple)">
          ${SVG.cards} Repetição Espaçada
        </span>
        <span><strong>${FLASHCARDS.length} Conceitos Chave</strong></span>
      </div>
      <h1 style="font-size:clamp(1.8rem, 3.8vw, 2.4rem); font-weight:800; margin:0.2rem 0">Flashcards 3D com Flip Motion</h1>
      <p style="font-size:0.95rem; color:var(--tx-muted); margin:0.35rem auto 0; max-width:600px">
        Clique no cartão para girar em 3D e conferir a fundamentação jurídica. Use as setas do teclado para navegar.
      </p>
    </div>

    <!-- Container do Cartão 3D -->
    <div class="flashcards-container">
      <div id="main-flashcard" class="flashcard" onclick="flipCard()">
        <!-- Face Frontal -->
        <div class="card-face front">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; font-weight:700; color:var(--c-blue); text-transform:uppercase; letter-spacing:0.04em">
            <span id="fc-cat" class="card-pill-tag"></span>
            <span id="fc-counter" style="color:var(--tx-faint); font-family:'JetBrains Mono', monospace"></span>
          </div>

          <div style="text-align:center; margin:2rem 0 1.5rem">
            <div style="display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; border-radius:50%; background:var(--c-blue-glow); color:var(--c-blue); margin-bottom:1.25rem">
              ${SVG.scale}
            </div>
            <h3 id="fc-front-text" style="font-size:clamp(1.2rem, 2.6vw, 1.45rem); line-height:1.45; font-weight:700"></h3>
            <div style="font-size:0.82rem; color:var(--tx-faint); margin-top:1.5rem">
              👆 Clique no cartão para virar (ou pressione Espaço)
            </div>
          </div>

          <div style="text-align:center; font-size:0.8rem; color:var(--tx-faint)">
            JurisPass • Memorização de Alta Performance
          </div>
        </div>

        <!-- Face Traseira -->
        <div class="card-face back">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; font-weight:700; color:var(--c-emerald); text-transform:uppercase; letter-spacing:0.04em">
            <span class="card-pill-tag" style="background:var(--c-emerald-glow); color:var(--c-emerald)">Gabarito & Fundamentação</span>
            <span style="color:var(--c-emerald)">Base Legal</span>
          </div>

          <div style="text-align:center; margin:1.75rem 0 1.25rem">
            <p id="fc-back-text" style="font-size:1.05rem; color:var(--tx-main); line-height:1.65; font-weight:500"></p>
            <div id="fc-legal" class="badge-code" style="margin-top:1.1rem; display:inline-block; font-size:0.88rem; padding:0.35rem 0.8rem"></div>
          </div>

          <div style="text-align:center; font-size:0.82rem; color:var(--c-blue); cursor:pointer">
            ↺ Clique para retornar à pergunta
          </div>
        </div>
      </div>

      <!-- Controles de Navegação -->
      <div class="flashcard-controls">
        <button type="button" class="btn-fc-nav" onclick="prevCard()" title="Cartão Anterior (Seta Esquerda)">
          ${SVG.arrowLeft}
        </button>
        <button type="button" class="btn-fc-flip" onclick="flipCard()">
          Girar Cartão (Flip 3D)
        </button>
        <button type="button" class="btn-fc-nav" onclick="nextCard()" title="Próximo Cartão (Seta Direita)">
          ${SVG.arrowRight}
        </button>
      </div>

      <!-- Botão Marcar como Dominado -->
      <div style="display:flex; justify-content:center; margin-top:1.5rem">
        <button id="btn-fc-dom" class="btn-topic-action" style="max-width:260px; padding:0.65rem 1.6rem; font-size:0.9rem" onclick="toggleDominadoCard()">
          ○ Marcar como Dominado
        </button>
      </div>

      <div style="text-align:center; font-size:0.8rem; color:var(--tx-faint); margin-top:1rem">
        Dica: use as teclas <strong>←</strong> e <strong>→</strong> para navegar, <strong>Espaço</strong> para virar, e <strong>D</strong> para dominar.
      </div>
    </div>
  `;

  window.flipCard = () => {
    playBeep(480, 'sine', 0.05);
    const card = document.getElementById('main-flashcard');
    if (card) card.classList.toggle('flipped');
  };

  window.nextCard = () => {
    cur = (cur + 1) % FLASHCARDS.length;
    STATE.cardFcAtual = cur;
    saveState();
    playBeep(520, 'sine', 0.04);
    updateCard();
  };

  window.prevCard = () => {
    cur = (cur - 1 + FLASHCARDS.length) % FLASHCARDS.length;
    STATE.cardFcAtual = cur;
    saveState();
    playBeep(420, 'sine', 0.04);
    updateCard();
  };

  window.toggleDominadoCard = () => {
    if (!STATE.flashcardsDominados) STATE.flashcardsDominados = {};
    STATE.flashcardsDominados[cur] = !STATE.flashcardsDominados[cur];
    saveState();
    const dom = STATE.flashcardsDominados[cur];
    playBeep(dom ? 660 : 360, 'sine', 0.08);
    if (dom) {
      launchConfetti();
      showToast('Conceito dominado com sucesso!', 'success');
    }
    updateCard();
  };

  // Keyboard navigation listener (remove old if present)
  if (window._fcKeyHandler) {
    window.removeEventListener('keydown', window._fcKeyHandler);
  }
  window._fcKeyHandler = (e) => {
    if (location.hash !== '#/flashcards') return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowRight') {
      window.nextCard();
    } else if (e.key === 'ArrowLeft') {
      window.prevCard();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      window.flipCard();
    } else if (e.key === 'd' || e.key === 'D') {
      window.toggleDominadoCard();
    }
  };
  window.addEventListener('keydown', window._fcKeyHandler);

  updateCard();
}
window.renderFlashcards = renderFlashcards;
