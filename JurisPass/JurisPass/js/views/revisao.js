/* ==========================================================================
   JURISPASS - TELA DE DÚVIDAS SALVAS & REVISÃO INTELIGENTE MULTIDISCIPLINAR
   ========================================================================== */

function renderRevisao() {
  updateSidebarUI();
  const topicosDuvida = [];
  for (const matKey in MATERIAS_DIREITO) {
    const mat = MATERIAS_DIREITO[matKey];
    if (!mat || !mat.modulos) continue;
    mat.modulos.forEach((m, mi) => {
      if (!m.secoes) return;
      m.secoes.forEach(s => {
        if (!s.topicos) return;
        s.topicos.forEach(t => {
          if (STATE.duvidas && STATE.duvidas[t.id]) {
            topicosDuvida.push({
              ...t,
              materiaKey: matKey,
              modIdx: mi,
              materiaNome: mat.nome,
              moduloNome: m.nome,
              cor: m.cor || mat.cor
            });
          }
        });
      });
    });
  }

  const container = getViewContainer('view-revisao');
  container.innerHTML = `
    <!-- Top Header & Breadcrumb -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:140px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/')">
          ${SVG.arrowLeft} Início
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Dúvidas Salvas</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted)">
        <strong>${topicosDuvida.length}</strong> ponto(s) salvo(s) para revisão
      </div>
    </div>

    <!-- Cabeçalho -->
    <div class="view-header-block" style="margin-bottom: 2rem;">
      <div class="status-island" style="margin-bottom:0.6rem">
        <span class="status-badge" style="background:var(--c-amber-glow); color:var(--c-amber)">
          ${SVG.star} Caderno de Dúvidas
        </span>
        <span>Revisão Ativa Personalizada</span>
      </div>
      <h1 style="font-size:clamp(1.8rem, 3.8vw, 2.4rem); font-weight:800; margin:0 0 0.35rem">Pontos Salvos para Fixação</h1>
      <p style="font-size:0.95rem; color:var(--tx-muted); margin:0; max-width:85ch">
        Tópicos e artigos que você favoritou durante a leitura dos módulos de qualquer disciplina. Revise-os até dominar completamente.
      </p>
    </div>

    ${topicosDuvida.length ? `
      <div class="bento-grid">
        ${topicosDuvida.map(top => `
          <div class="topic-card col-6" id="rev-${top.id}">
            <div class="topic-tag" style="color:${top.cor}">
              ${top.materiaNome} • ${top.moduloNome} • ${top.fundamento}
            </div>
            <h4>${top.titulo}</h4>
            <div class="topic-content" style="line-height:1.6">${top.conteudo}</div>
            ${top.exemplo ? `
              <div class="topic-exemplo" style="margin-top:0.85rem">
                <strong>Exemplo Prático:</strong><br>
                ${top.exemplo}
              </div>
            ` : ''}
            <div class="topic-actions" style="margin-top:1.25rem">
              <button type="button" class="btn-topic-action checked" onclick="resolverDuvida('${top.id}')">
                ${SVG.check} Já dominei, remover da lista
              </button>
              <button type="button" class="btn-topic-action" onclick="navigate('#/mod/${top.materiaKey}/${top.modIdx}')">
                Abrir no Módulo Completo →
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="module-card col-12" style="text-align:center; padding:3.5rem 1.5rem; cursor:default; border:1px dashed var(--bd)">
        <div style="display:inline-flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:var(--c-amber-glow); color:var(--c-amber); margin-bottom:1.25rem">
          ${SVG.star}
        </div>
        <h3 style="font-size:1.35rem; margin-bottom:0.4rem">Nenhum ponto com dúvida no momento</h3>
        <p style="max-width:550px; margin:0.4rem auto 1.5rem; font-size:0.92rem; color:var(--tx-muted); line-height:1.6">
          Ao estudar qualquer um dos módulos das 7 disciplinas de Direito, clique no botão <strong>"Salvar Dúvida"</strong> nos conceitos mais complexos para agrupá-los e revisá-los aqui com facilidade.
        </p>
        <button type="button" class="btn-fc-flip" style="height:40px; padding:0 1.5rem; font-size:0.88rem" onclick="navigate('#/materias')">
          Explorar Módulos de Estudo →
        </button>
      </div>
    `}
  `;
}
window.renderRevisao = renderRevisao;

window.resolverDuvida = (id) => {
  if (STATE.duvidas) {
    delete STATE.duvidas[id];
  }
  saveState();
  playBeep(640, 'sine', 0.08);
  showToast('Tópico removido do seu Caderno de Revisão!', 'success');
  renderRevisao();
};
