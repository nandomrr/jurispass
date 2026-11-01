    /* ==========================================================================
       SIMULADO ESTILO OAB (25 QUESTÕES)
       ========================================================================== */
    let filtroMateria = -1;
    function renderQuestoes() {
      const filtradas = QUESTOES.map((q, idx) => ({ ...q, originalIdx: idx }))
        .filter(q => filtroMateria === -1 || q.materiaId === filtroMateria);

      const totalRespondidas = Object.keys(STATE.respostasQuiz).length;
      const totalAcertos = QUESTOES.filter((q, i) => STATE.respostasQuiz[i] === q.correta).length;

      app.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem">
          <button class="btn-topic-action" style="max-width:130px" onclick="navigate('#/')">${SVG.arrowLeft} Início</button>
          <h2>Simulado Estilo OAB & Concursos</h2>
          <div style="font-size:0.9rem; font-weight:700">
            <span style="color:var(--c-emerald)">${totalAcertos} acertos</span> de ${totalRespondidas} respondidas
          </div>
        </div>

        <div style="margin-bottom: 1.5rem; display:flex; gap:0.6rem; align-items:center">
          <label style="font-weight:600; font-size:0.88rem">Tema:</label>
          <select id="select-filtro-questoes" style="padding:0.45rem 1rem; border-radius:var(--radius-pill); background:var(--bg-surface); color:var(--tx-main); border:0.5px solid var(--bd)" onchange="filtrarQuestoes(this.value)">
            <option value="-1" ${filtroMateria === -1 ? 'selected' : ''}>Todos os Módulos (${QUESTOES.length} Questões)</option>
            ${MATERIA.map((m, i) => `<option value="${i}" ${filtroMateria === i ? 'selected' : ''}>${m.nome}</option>`).join('')}
          </select>
        </div>

        <div>
          ${filtradas.map(q => {
            const resp = STATE.respostasQuiz[q.originalIdx];
            const jaRespondida = resp !== undefined;
            return `
              <div class="question-card">
                <div class="q-meta">
                  <span style="color:var(--c-blue)">${q.materia}</span>
                  <span style="color:var(--tx-faint)">Questão ${q.originalIdx + 1} de ${QUESTOES.length}</span>
                </div>

                <div class="q-text">${q.enunciado}</div>

                <div>
                  ${q.opcoes.map((op, oi) => {
                    let classe = '';
                    if (jaRespondida) {
                      classe = 'locked ';
                      if (oi === q.correta) classe += 'correct';
                      else if (oi === resp) classe += 'wrong';
                    }
                    return `
                      <button class="alt-btn ${classe}" onclick="responderQuestao(${q.originalIdx}, ${oi})">
                        <strong>${'ABCD'[oi]})</strong> ${op}
                        ${jaRespondida ? `<div class="alt-feedback">${q.comentarios[oi]}</div>` : ''}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    window.filtrarQuestoes = (val) => {
      filtroMateria = parseInt(val, 10);
      renderQuestoes();
    };

    window.responderQuestao = (qIdx, altIdx) => {
      if (STATE.respostasQuiz[qIdx] !== undefined) return;
      STATE.respostasQuiz[qIdx] = altIdx;
      saveState();

      if (altIdx === QUESTOES[qIdx].correta) {
        soundSuccess();
        launchConfetti();
      } else {
        soundError();
      }
      renderQuestoes();
    };

