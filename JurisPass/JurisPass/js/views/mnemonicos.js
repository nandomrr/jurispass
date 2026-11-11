/* ==========================================================================
   JURISPASS - MURAL DE MNEMÔNICOS, MACETES & SÚMULAS ESQUEMATIZADAS
   ========================================================================== */

let filtroCategoriaMnemonico = 'todos';

function renderMnemonicos(materiaKey = 'penal') {
  updateSidebarUI();
  const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];

  const filtrados = MNEMONICOS.filter(m => {
    if (filtroCategoriaMnemonico === 'todos') return true;
    return (m.tag && m.tag.toLowerCase().includes(filtroCategoriaMnemonico.toLowerCase())) ||
           (m.titulo && m.titulo.toLowerCase().includes(filtroCategoriaMnemonico.toLowerCase()));
  });

  const container = getViewContainer('view-mnemonicos');
  container.innerHTML = `
    <!-- Breadcrumb e Voltar para Matéria -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
          ${SVG.arrowLeft} Voltar para ${mat.nome}
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Mural de Macetes & Mnemônicos</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted); font-weight:600">
        ${MNEMONICOS.length} Macetes Penais Disponíveis
      </div>
    </div>

    <!-- Abas Sub-nav da Disciplina -->
    <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
      <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
        ${SVG.modules} Módulos & Aulas (${mat.modulos ? mat.modulos.length : 0})
      </button>
      <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/arvore')">
        ${SVG.tree} Árvore de Recursos Criminais
      </button>
      <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/mnemonicos')">
        ${SVG.brain} Mural de Macetes & Mnemônicos
      </button>
    </div>

    <!-- Cabeçalho -->
    <div class="view-header-block" style="margin-bottom: 1.8rem;">
      <h2 style="font-size:clamp(1.6rem, 3.2vw, 2.1rem); margin:0 0 0.35rem">Mural de Macetes & Mnemônicos Jurídicos</h2>
      <p style="font-size:0.95rem; color:var(--tx-muted); margin:0; max-width:85ch">
        Regras práticas, atalhos de memorização e súmulas fundamentais sintetizadas pela Profª Janaina Daniel Varalli para fixação imediata na OAB e provas universitárias.
      </p>
    </div>

    <!-- Filtros de Categoria -->
    <div style="display:flex; gap:0.5rem; margin-bottom:1.8rem; flex-wrap:wrap">
      <button class="btn-segmented ${filtroCategoriaMnemonico === 'todos' ? 'active' : ''}" style="height:34px; padding:0 0.95rem; font-size:0.82rem" onclick="filtrarMnemonicos('todos')">
        Todos (${MNEMONICOS.length})
      </button>
      <button class="btn-segmented ${filtroCategoriaMnemonico === 'júri' ? 'active' : ''}" style="height:34px; padding:0 0.95rem; font-size:0.82rem" onclick="filtrarMnemonicos('júri')">
        Tribunal do Júri
      </button>
      <button class="btn-segmented ${filtroCategoriaMnemonico === 'recurso' ? 'active' : ''}" style="height:34px; padding:0 0.95rem; font-size:0.82rem" onclick="filtrarMnemonicos('recurso')">
        Recursos & Prazos
      </button>
      <button class="btn-segmented ${filtroCategoriaMnemonico === 'nulidade' ? 'active' : ''}" style="height:34px; padding:0 0.95rem; font-size:0.82rem" onclick="filtrarMnemonicos('nulidade')">
        Nulidades
      </button>
      <button class="btn-segmented ${filtroCategoriaMnemonico === 'súmula' ? 'active' : ''}" style="height:34px; padding:0 0.95rem; font-size:0.82rem" onclick="filtrarMnemonicos('súmula')">
        Súmulas Indispensáveis
      </button>
    </div>

    <!-- Grid de Mnemônicos -->
    <div class="mnemonics-grid">
      ${filtrados.map((m, idx) => `
        <div class="mnemonic-card" style="--tag-color:${m.cor || 'var(--c-blue)'}; --tag-glow:${m.glow || 'var(--c-blue-glow)'}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem">
            <span class="mnemonic-tag" style="background:${m.glow || 'var(--c-blue-glow)'}; color:${m.cor || 'var(--c-blue)'}">
              ${m.tag}
            </span>
            <button type="button" class="btn-topic-action" style="padding:0.25rem 0.65rem; font-size:0.75rem; height:28px" onclick="copiarMnemonico(${idx})">
              ${SVG.copy} Copiar
            </button>
          </div>

          <div class="mnemonic-title" style="font-size:1.15rem; font-weight:700; margin-bottom:0.35rem">
            ${m.titulo}
          </div>
          <p style="font-size:0.88rem; color:var(--tx-muted); margin-bottom:0.75rem; line-height:1.5">
            ${m.descricao}
          </p>

          <div class="mnemonic-rule" id="mnem-text-${idx}" style="font-family:'JetBrains Mono', monospace; font-size:0.88rem; line-height:1.6; padding:0.85rem 1rem; border-radius:var(--radius-sm); background:var(--bg-surface); border:0.5px solid var(--bd); margin-bottom:0.75rem">
            ${m.regra.replace(/\n/g, '<br>')}
          </div>

          ${m.exemplo ? `
            <div class="mnemonic-example" style="font-size:0.84rem; color:var(--tx-faint); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); background:var(--bg-glass); border-left:3px solid ${m.cor || 'var(--c-blue)'}">
              <strong>Aplicação Prática:</strong> ${m.exemplo}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}
window.renderMnemonicos = renderMnemonicos;

window.filtrarMnemonicos = (cat) => {
  filtroCategoriaMnemonico = cat;
  renderMnemonicos();
};

window.copiarMnemonico = (idx) => {
  const m = MNEMONICOS[idx];
  if (!m) return;
  const texto = `${m.titulo}\n${m.descricao}\n\n${m.regra}\n${m.exemplo ? 'Exemplo: ' + m.exemplo : ''}`;
  navigator.clipboard.writeText(texto).then(() => {
    soundSuccess();
    showToast('Mnemônico copiado para a área de transferência!', 'success');
  }).catch(() => {
    showToast('Não foi possível copiar automaticamente.', 'info');
  });
};
