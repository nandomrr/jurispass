    /* ==========================================================================
       FLASHCARDS 3D
       ========================================================================== */
    function renderFlashcards() {
      let cur = STATE.cardFcAtual || 0;
      if (cur >= FLASHCARDS.length) cur = 0;

      function updateCard() {
        const fc = FLASHCARDS[cur];
        const dom = STATE.flashcardsDominados[cur];
        const cardElem = document.getElementById('main-flashcard');
        if (cardElem) cardElem.classList.remove('flipped');

        document.getElementById('fc-cat').textContent = fc.categoria;
        document.getElementById('fc-counter').textContent = `${cur + 1} de ${FLASHCARDS.length}`;
        document.getElementById('fc-front-text').textContent = fc.pergunta;
        document.getElementById('fc-back-text').textContent = fc.resposta;
        document.getElementById('fc-legal').textContent = fc.fundamento;

        const btnDom = document.getElementById('btn-fc-dom');
        if (btnDom) {
          btnDom.innerHTML = dom ? `${SVG.check} Conceito Dominado` : '○ Marcar como Dominado';
          btnDom.style.background = dom ? 'var(--c-blue)' : 'var(--bg-surface)';
          btnDom.style.color = dom ? '#fff' : 'var(--tx-muted)';
        }
      }

      app.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem">
          <button class="btn-topic-action" style="max-width:130px" onclick="navigate('#/')">${SVG.arrowLeft} Início</button>
          <h2>Flashcards 3D (Flip Motion)</h2>
          <div style="font-size:0.85rem; color:var(--tx-muted)">Clique para virar</div>
        </div>

        <div class="flashcards-container">
          <div id="main-flashcard" class="flashcard" onclick="flipCard()">
            <div class="card-face front">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:var(--c-blue); text-transform:uppercase">
                <span id="fc-cat"></span>
                <span id="fc-counter"></span>
              </div>
              <div style="text-align:center; margin:1.5rem 0">
                <div style="display:flex; justify-content:center; margin-bottom:1rem; color:var(--c-blue)">${SVG.scale}</div>
                <h3 id="fc-front-text" style="line-height:1.4"></h3>
                <div style="font-size:0.84rem; color:var(--tx-faint); margin-top:1.25rem">Clique para girar em 3D</div>
              </div>
              <div style="text-align:center; font-size:0.8rem; color:var(--tx-faint)">Processo Penal II</div>
            </div>

            <div class="card-face back">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700; color:var(--c-emerald); text-transform:uppercase">
                <span>Resposta & Fundamentação</span>
                <span>Regra Legal</span>
              </div>
              <div style="text-align:center; margin:1.5rem 0">
                <p id="fc-back-text" style="font-size:1.02rem; color:var(--tx-main); line-height:1.6"></p>
                <div id="fc-legal" class="badge-code" style="margin-top:1rem; display:inline-block"></div>
              </div>
              <div style="text-align:center; font-size:0.8rem; color:var(--c-blue)">Clique para voltar à pergunta</div>
            </div>
          </div>

          <div class="flashcard-controls">
            <button class="btn-fc-nav" onclick="prevCard()">${SVG.arrowLeft}</button>
            <button class="btn-fc-flip" onclick="flipCard()">Girar Cartão (Flip 3D)</button>
            <button class="btn-fc-nav" onclick="nextCard()">${SVG.arrowRight}</button>
          </div>

          <div style="display:flex; justify-content:center; margin-top:1.25rem">
            <button id="btn-fc-dom" class="btn-topic-action" style="max-width:240px; padding:0.6rem 1.4rem" onclick="toggleDominadoCard()">
              ○ Marcar como Dominado
            </button>
          </div>
        </div>
      `;

      window.flipCard = () => {
        playBeep(480, 'sine', 0.05);
        document.getElementById('main-flashcard').classList.toggle('flipped');
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
        STATE.flashcardsDominados[cur] = !STATE.flashcardsDominados[cur];
        saveState();
        playBeep(STATE.flashcardsDominados[cur] ? 660 : 360, 'sine', 0.08);
        if (STATE.flashcardsDominados[cur]) launchConfetti();
        updateCard();
      };

      updateCard();
    }

