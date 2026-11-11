/* ==========================================================================
   JURISPASS - ÁRVORE DE RECURSOS CRIMINAIS (FLUXOGRAMA INTERATIVO)
   ========================================================================== */

function renderArvore(materiaKey = 'penal') {
  updateSidebarUI();
  const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
  const path = STATE.flowPath && STATE.flowPath.length ? STATE.flowPath : ['inicio'];
  const currentId = path[path.length - 1];
  const currentNode = NOS_FLUXOGRAMA[currentId] || NOS_FLUXOGRAMA['inicio'];

  // Construir Breadcrumbs do Fluxo
  const breadcrumbsHtml = path.map((nodeId, idx) => {
    const node = NOS_FLUXOGRAMA[nodeId] || { titulo: 'Início', faseBadge: 'Início' };
    const isLast = idx === path.length - 1;
    const label = nodeId === 'inicio' ? 'Início do Rito' : (node.faseBadge || node.titulo.slice(0, 24));
    if (isLast) {
      return `<span class="breadcrumb-current">${label}</span>`;
    } else {
      return `
        <span class="breadcrumb-node" onclick="voltarParaNivelFluxo(${idx}, '${materiaKey}')">${label}</span>
        <span class="breadcrumb-separator">${SVG.arrowRight}</span>
      `;
    }
  }).join('');

  let contentHtml = '';

  if (currentNode.terminal) {
    // Exibição da Resolução Processual Final
    const recNome = currentNode.recurso || '';
    const isRese = recNome.includes('RESE');
    const isApel = recNome.includes('Apelação');
    const isCarta = recNome.includes('Carta');
    const isEmb = recNome.includes('Embargos');
    const color = isRese ? 'var(--c-teal)' : isApel ? 'var(--c-rose)' : isCarta ? 'var(--c-amber)' : isEmb ? 'var(--c-purple)' : 'var(--c-blue)';
    const glow = isRese ? 'var(--c-teal-glow)' : isApel ? 'var(--c-rose-glow)' : isCarta ? 'var(--c-amber-glow)' : 'var(--c-blue-glow)';

    contentHtml = `
      <div class="flow-terminal-resolution" style="--term-color:${color}; --term-glow:${glow}">
        <div class="resolution-header">
          <span class="flow-stage-badge" style="background:${glow}; color:${color}">
            ${currentNode.faseBadge || 'Recurso Cabível'}
          </span>
        </div>
        
        <h3 style="margin-bottom:0.4rem; font-size:1.4rem">Recurso Processual Cabível:</h3>
        <div class="resolution-recurso-badge" style="background:${glow}; color:${color}; border:1px solid ${color}">
          ${currentNode.recurso}
        </div>

        <div class="resolution-grid" style="margin-top:1.5rem">
          <div class="resolution-spec-item">
            <strong>Fundamento Legal</strong>
            <span>${currentNode.fundamento || 'Consulte o Código'}</span>
          </div>
          <div class="resolution-spec-item">
            <strong>Prazo de Prática</strong>
            <span>${currentNode.prazo || 'Verifique o Rito'}</span>
          </div>
          <div class="resolution-spec-item">
            <strong>Efeitos e Rito</strong>
            <span>${currentNode.efeitos || 'Processamento Regular'}</span>
          </div>
        </div>

        <div style="margin-top:1.5rem; padding:1.1rem 1.25rem; border-radius:var(--radius-sm); background:var(--bg-surface); border:0.5px solid var(--bd); font-size:0.92rem; line-height:1.6">
          <strong style="color:var(--tx-main); display:block; margin-bottom:0.35rem">Orientações Práticas e Observações:</strong>
          <span style="color:var(--tx-muted)">${currentNode.detalhe || currentNode.detalhes || ''}</span>
        </div>

        ${currentNode.proximosDesdobramentos && currentNode.proximosDesdobramentos.length ? `
          <div style="margin-top:1.5rem">
            <h4 style="font-size:1.05rem; margin-bottom:0.75rem; color:var(--tx-main)">Próximos Desdobramentos Processuais:</h4>
            <div class="flow-branches-grid">
              ${currentNode.proximosDesdobramentos.map(desd => `
                <div class="flow-branch-card" onclick="avancarNivelFluxo('${desd.proximoNode}', '${materiaKey}')">
                  <span class="branch-card-badge">${desd.badge || 'Desdobramento'}</span>
                  <div class="branch-card-title">${desd.titulo}</div>
                  <div class="branch-card-desc">${desd.desc}</div>
                  <div class="branch-card-action">
                    <span>Avançar</span>
                    <span>${SVG.arrowRight}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="display:flex; gap:0.75rem; margin-top:1.8rem; flex-wrap:wrap">
          <button type="button" class="btn-topic-action" style="max-width:180px; padding:0.45rem 1rem" onclick="voltarUmPassoFluxo('${materiaKey}')">
            ${SVG.arrowLeft} Passo Anterior
          </button>
          <button type="button" class="btn-fc-flip" style="height:38px; padding:0 1.25rem; font-size:0.86rem" onclick="reiniciarFluxo('${materiaKey}')">
            ${SVG.refresh} Reiniciar Fluxograma
          </button>
        </div>
      </div>
    `;
  } else {
    // Exibição de Decisões e Ramificações (Branches)
    const caminhos = currentNode.caminhos || currentNode.opcoes || [];

    contentHtml = `
      <div class="flow-stage-title-wrap">
        <span class="flow-stage-badge">${currentNode.faseBadge || 'Etapa Processual'}</span>
        <h2 style="font-size:clamp(1.35rem, 2.8vw, 1.7rem); margin-top:0.4rem">${currentNode.titulo}</h2>
        <p style="font-size:0.95rem; color:var(--tx-muted); margin:0.35rem 0 0; max-width:80ch">${currentNode.descricao || currentNode.subtitulo || ''}</p>
      </div>

      <div class="flow-branches-grid">
        ${caminhos.map(op => `
          <div class="flow-branch-card" onclick="avancarNivelFluxo('${op.id || op.proximoNode}', '${materiaKey}')">
            <span class="branch-card-badge" style="background:${op.glow || 'var(--c-blue-glow)'}; color:${op.cor || 'var(--c-blue)'}">
              ${op.tag || op.badge || 'Etapa'}
            </span>
            <div class="branch-card-title">${op.titulo}</div>
            <div class="branch-card-desc">${op.desc || op.descricao || ''}</div>
            <div class="branch-card-action">
              <span>Avançar no Rito</span>
              <span>${SVG.arrowRight}</span>
            </div>
          </div>
        `).join('')}
      </div>

      ${path.length > 1 ? `
        <div style="display:flex; gap:0.6rem; margin-top:1.75rem">
          <button type="button" class="btn-topic-action" style="max-width:180px; padding:0.4rem 0.95rem; font-size:0.84rem" onclick="voltarUmPassoFluxo('${materiaKey}')">
            ${SVG.arrowLeft} Passo Anterior
          </button>
          <button type="button" class="btn-topic-action" style="max-width:140px; padding:0.4rem 0.95rem; font-size:0.84rem" onclick="reiniciarFluxo('${materiaKey}')">
            ${SVG.refresh} Reiniciar
          </button>
        </div>
      ` : ''}
    `;
  }

  const container = getViewContainer('view-arvore');
  container.innerHTML = `
    <!-- Breadcrumb e Voltar para Matéria -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
          ${SVG.arrowLeft} Voltar para ${mat.nome}
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Árvore de Recursos Criminais</span>
      </div>
      <button class="btn-topic-action" style="max-width:150px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="reiniciarFluxo('${materiaKey}')">
        ${SVG.refresh} Reiniciar Fluxo
      </button>
    </div>

    <!-- Abas Sub-nav da Disciplina -->
    <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
      <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
        ${SVG.modules} Módulos & Aulas (${mat.modulos ? mat.modulos.length : 0})
      </button>
      <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/arvore')">
        ${SVG.tree} Árvore de Recursos Criminais
      </button>
      <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/mnemonicos')">
        ${SVG.brain} Mural de Macetes & Mnemônicos
      </button>
    </div>

    <div class="flow-hub">
      <div class="flow-breadcrumbs">
        ${breadcrumbsHtml}
      </div>
      ${contentHtml}
    </div>
  `;
}
window.renderArvore = renderArvore;

window.avancarNivelFluxo = (nodeId, mKey = 'penal') => {
  playBeep(560, 'sine', 0.06);
  if (!STATE.flowPath) STATE.flowPath = ['inicio'];
  STATE.flowPath.push(nodeId);
  saveState();
  renderArvore(mKey);
  const target = NOS_FLUXOGRAMA[nodeId];
  if (target && target.terminal) {
    soundSuccess();
    launchConfetti();
  }
};

window.voltarUmPassoFluxo = (mKey = 'penal') => {
  playBeep(420, 'sine', 0.05);
  if (STATE.flowPath && STATE.flowPath.length > 1) {
    STATE.flowPath.pop();
    saveState();
    renderArvore(mKey);
  }
};

window.voltarParaNivelFluxo = (idx, mKey = 'penal') => {
  playBeep(480, 'sine', 0.05);
  if (STATE.flowPath && idx < STATE.flowPath.length) {
    STATE.flowPath = STATE.flowPath.slice(0, idx + 1);
    saveState();
    renderArvore(mKey);
  }
};

window.reiniciarFluxo = (mKey = 'penal') => {
  playBeep(400, 'sine', 0.05);
  STATE.flowPath = ['inicio'];
  saveState();
  renderArvore(mKey);
};
