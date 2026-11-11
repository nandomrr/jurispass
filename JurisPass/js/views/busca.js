/* ==========================================================================
   JURISPASS - BUSCA GLOBAL INSTANTÂNEA MULTIDISCIPLINAR
   ========================================================================== */

function renderBusca(termo) {
  updateSidebarUI();
  const q = (termo || '').trim().toLowerCase();
  if (q.length < 2) {
    renderHome();
    return;
  }

  const resultados = [];
  for (const matKey in MATERIAS_DIREITO) {
    const mat = MATERIAS_DIREITO[matKey];
    if (!mat || !mat.modulos) continue;
    mat.modulos.forEach((m, mi) => {
      if (!m.secoes) return;
      m.secoes.forEach(s => {
        if (!s.topicos) return;
        s.topicos.forEach(t => {
          const matchTitulo = t.titulo && t.titulo.toLowerCase().includes(q);
          const matchConteudo = t.conteudo && t.conteudo.toLowerCase().includes(q);
          const matchFundamento = t.fundamento && t.fundamento.toLowerCase().includes(q);
          const matchExemplo = t.exemplo && t.exemplo.toLowerCase().includes(q);

          if (matchTitulo || matchConteudo || matchFundamento || matchExemplo) {
            resultados.push({
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

  const container = getViewContainer('view-busca');
  container.innerHTML = `
    <!-- Top Header & Breadcrumb -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:140px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/')">
          ${SVG.arrowLeft} Voltar
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">Busca Global</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted)">
        <strong>${resultados.length}</strong> resultado(s) encontrado(s)
      </div>
    </div>

    <!-- Cabeçalho da Busca -->
    <div class="view-header-block" style="margin-bottom: 2rem;">
      <h2 style="font-size:clamp(1.6rem, 3.2vw, 2.1rem); margin:0 0 0.35rem">
        Resultados da Pesquisa: <span style="color:var(--c-blue)">"${termo}"</span>
      </h2>
      <p style="font-size:0.95rem; color:var(--tx-muted); margin:0">
        Localizados ${resultados.length} tópico(s) e artigo(s) correspondente(s) em todas as disciplinas:
      </p>
    </div>

    ${resultados.length ? `
      <div class="bento-grid">
        ${resultados.map(r => `
          <div class="topic-card col-6" onclick="navigate('#/mod/${r.materiaKey}/${r.modIdx}')" style="cursor:pointer" title="Clique para abrir no módulo correspondente">
            <div class="topic-tag" style="color:${r.cor}">
              ${r.materiaNome} • ${r.moduloNome} • ${r.fundamento}
            </div>
            <h4>${r.titulo}</h4>
            <div class="topic-content" style="line-height:1.6; -webkit-line-clamp:4; display:-webkit-box; -webkit-box-orient:vertical; overflow:hidden">
              ${r.conteudo}
            </div>
            <div style="margin-top:1rem; font-size:0.82rem; color:var(--c-blue); font-weight:700">
              Acessar aula completa no módulo →
            </div>
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="module-card col-12" style="text-align:center; padding:3.5rem 1.5rem; cursor:default; border:1px dashed var(--bd)">
        <div style="display:inline-flex; align-items:center; justify-content:center; width:52px; height:52px; border-radius:50%; background:var(--bg-glass); color:var(--tx-faint); margin-bottom:1.25rem">
          ${SVG.search}
        </div>
        <h3 style="font-size:1.35rem; margin-bottom:0.4rem">Nenhum resultado para "${termo}"</h3>
        <p style="max-width:550px; margin:0.4rem auto 1.5rem; font-size:0.92rem; color:var(--tx-muted); line-height:1.6">
          Tente buscar por termos jurídicos fundamentais como: <em>"pronúncia"</em>, <em>"prescrição"</em>, <em>"habeas corpus"</em>, <em>"recurso ordinário"</em>, <em>"usucapião"</em>, <em>"adpf"</em>, <em>"trespasse"</em> ou <em>"nulidade"</em>.
        </p>
        <button type="button" class="btn-fc-flip" style="height:40px; padding:0 1.5rem; font-size:0.88rem" onclick="navigate('#/materias')">
          Navegar por Matérias →
        </button>
      </div>
    `}
  `;
}
window.renderBusca = renderBusca;
