/* ==========================================================================
   JURISPASS - SIMULADO ESTILO 1ª FASE OAB & CONCURSOS
   ========================================================================== */

let filtroMateriaQuestao = 'todos';

function renderQuestoes() {
  updateSidebarUI();

  // Obter lista única de matérias/temas presentes nas questões
  const materiasDisponiveis = Array.from(new Set(QUESTOES.map(q => q.materia).filter(Boolean)));

  const filtradas = QUESTOES.map((q, idx) => ({ ...q, originalIdx: idx }))
    .filter(q => filtroMateriaQuestao === 'todos' || q.materia === filtroMateriaQuestao);

  const totalRespondidas = Object.keys(STATE.respostasQuiz || {}).length;
  const totalAcertos = QUESTOES.filter((q, i) => STATE.respostasQuiz && STATE.respostasQuiz[i] === q.correta).length;
  const taxaAcerto = totalRespondidas > 0 ? Math.round((totalAcertos / totalRespondidas) * 100) : 0;
  const pctGeral = Math.round((totalRespondidas / QUESTOES.length) * 100);

  const container = getViewContainer('view-questoes');
  container.innerHTML = `
    <!-- Top Header & Breadcrumb -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:140px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/')">
          ${SVG.arrowLeft} Início
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Simulado OAB</span>
      </div>
      ${totalRespondidas > 0 ? `
        <button class="btn-topic-action" style="padding:0.35rem 0.9rem; font-size:0.82rem; border-color:var(--c-rose-glow); color:var(--c-rose)" onclick="resetSimulado()">
          ${SVG.refresh} Reiniciar Simulado
        </button>
      ` : ''}
    </div>

    <!-- Cabeçalho do Simulado -->
    <div class="view-header-block" style="margin-bottom: 2rem;">
      <div class="status-island" style="margin-bottom:0.6rem">
        <span class="status-badge" style="background:var(--c-emerald-glow); color:var(--c-emerald)">
          ${SVG.quiz} Simulado 1ª Fase OAB
        </span>
        <span><strong>${QUESTOES.length} Questões Gabaritadas</strong></span>
        <span style="opacity:0.4">•</span>
        <span>${totalRespondidas}/${QUESTOES.length} respondidas (${taxaAcerto}% acerto)</span>
      </div>
      <h1 style="font-size:clamp(1.8rem, 3.8vw, 2.4rem); font-weight:800; margin:0">Simulado com Gabarito Comentado</h1>
      <p style="font-size:0.95rem; color:var(--tx-muted); margin:0.35rem 0 0; max-width:85ch">
        Questões autorais e selecionadas da OAB com justificativa e análise alternativa por alternativa.
      </p>
    </div>

    <!-- Barra de Progresso e Métricas Rápidas -->
    <div class="kpi-row" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-bottom: 1.8rem;">
      <div class="kpi-card">
        <div class="kpi-label">Progresso do Simulado</div>
        <div class="kpi-value">${totalRespondidas}<span style="font-size:1rem; color:var(--tx-faint)">/${QUESTOES.length}</span></div>
        <div class="kpi-sub">${pctGeral}% concluído</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Acertos Acumulados</div>
        <div class="kpi-value" style="color:var(--c-emerald)">${totalAcertos}</div>
        <div class="kpi-sub">${taxaAcerto}% de precisão geral</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Erros / Revisar</div>
        <div class="kpi-value" style="color:var(--c-rose)">${totalRespondidas - totalAcertos}</div>
        <div class="kpi-sub">Questões para reestudo</div>
      </div>
    </div>

    <!-- Filtros de Tema / Matéria -->
    <div style="margin-bottom: 1.8rem; display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap">
      <div style="display:flex; align-items:center; gap:0.45rem; font-weight:700; font-size:0.86rem; color:var(--tx-main)">
        ${SVG.filter} Filtrar por Disciplina / Módulo:
      </div>
      <select id="select-filtro-questoes" class="search-input" style="padding:0.45rem 1rem; border-radius:var(--radius-pill); background:var(--bg-surface); color:var(--tx-main); border:0.5px solid var(--bd); width:auto; height:38px; font-size:0.86rem" onchange="filtrarQuestoes(this.value)">
        <option value="todos" ${filtroMateriaQuestao === 'todos' ? 'selected' : ''}>Todas as Questões (${QUESTOES.length})</option>
        ${materiasDisponiveis.map(mNome => `
          <option value="${mNome}" ${filtroMateriaQuestao === mNome ? 'selected' : ''}>
            ${mNome} (${QUESTOES.filter(q => q.materia === mNome).length})
          </option>
        `).join('')}
      </select>
    </div>

    <!-- Lista de Questões -->
    <div style="display:flex; flex-direction:column; gap:1.5rem">
      ${filtradas.map(q => {
        const resp = STATE.respostasQuiz ? STATE.respostasQuiz[q.originalIdx] : undefined;
        const jaRespondida = resp !== undefined;
        const acertou = jaRespondida && resp === q.correta;

        return `
          <div class="question-card" id="q-card-${q.originalIdx}">
            <div class="q-meta" style="margin-bottom:0.75rem">
              <span class="card-pill-tag" style="background:var(--c-blue-glow); color:var(--c-blue)">${q.materia}</span>
              <span style="color:var(--tx-faint); font-size:0.82rem; font-family:'JetBrains Mono', monospace">
                Questão ${q.originalIdx + 1} de ${QUESTOES.length}
              </span>
            </div>

            <div class="q-text" style="font-size:1.02rem; line-height:1.65; margin-bottom:1.25rem">
              ${q.enunciado}
            </div>

            <div style="display:flex; flex-direction:column; gap:0.65rem">
              ${q.opcoes.map((op, oi) => {
                let classe = '';
                if (jaRespondida) {
                  classe = 'locked ';
                  if (oi === q.correta) classe += 'correct';
                  else if (oi === resp) classe += 'wrong';
                }
                return `
                  <button type="button" class="alt-btn ${classe}" onclick="responderQuestao(${q.originalIdx}, ${oi})">
                    <span style="font-weight:700; margin-right:0.4rem">${'ABCD'[oi]})</span> ${op}
                    ${jaRespondida ? `
                      <div class="alt-feedback" style="margin-top:0.6rem; font-size:0.88rem; line-height:1.5">
                        ${oi === q.correta ? '<strong>✓ Resposta Correta:</strong> ' : '<strong>✕ Incorreta:</strong> '}
                        ${q.comentarios && q.comentarios[oi] ? q.comentarios[oi] : ''}
                      </div>
                    ` : ''}
                  </button>
                `;
              }).join('')}
            </div>

            ${jaRespondida ? `
              <div style="margin-top:1rem; padding:0.8rem 1rem; border-radius:var(--radius-sm); background:${acertou ? 'var(--c-emerald-glow)' : 'var(--c-rose-glow)'}; border:0.5px solid ${acertou ? 'var(--c-emerald)' : 'var(--c-rose)'}; font-size:0.85rem; color:var(--tx-main); display:flex; align-items:center; justify-content:space-between">
                <span>
                  ${acertou ? '🎉 <strong>Excelente!</strong> Você acertou esta questão.' : '⚠️ <strong>Atenção:</strong> Revise o fundamento legal e tente novamente na revisão.'}
                </span>
                <span style="font-weight:700; color:${acertou ? 'var(--c-emerald)' : 'var(--c-rose)'}">
                  ${acertou ? 'Gabarito Oficial' : 'Resposta Incorreta'}
                </span>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}
window.renderQuestoes = renderQuestoes;

window.filtrarQuestoes = (val) => {
  filtroMateriaQuestao = val;
  renderQuestoes();
};

window.responderQuestao = (qIdx, altIdx) => {
  if (!STATE.respostasQuiz) STATE.respostasQuiz = {};
  if (STATE.respostasQuiz[qIdx] !== undefined) return;

  STATE.respostasQuiz[qIdx] = altIdx;
  saveState();

  if (altIdx === QUESTOES[qIdx].correta) {
    soundSuccess();
    launchConfetti();
    showToast('Parabéns! Resposta correta.', 'success');
  } else {
    soundError();
    showToast('Resposta incorreta. Veja o comentário.', 'info');
  }
  renderQuestoes();
};

window.resetSimulado = () => {
  if (confirm('Deseja realmente reiniciar todo o simulado e limpar suas respostas gravadas?')) {
    STATE.respostasQuiz = {};
    saveState();
    soundSuccess();
    showToast('Simulado reiniciado com sucesso!', 'info');
    renderQuestoes();
  }
};
