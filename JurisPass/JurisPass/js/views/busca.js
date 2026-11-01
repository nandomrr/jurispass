    /* ==========================================================================
       BUSCA GLOBAL INSTANTÂNEA (MULTI-MATÉRIAS)
       ========================================================================== */
    function renderBusca(termo) {
      const q = termo.trim().toLowerCase();
      if (q.length < 2) { renderHome(); return; }

      const resultados = [];
      for (const matKey in MATERIAS_DIREITO) {
        const mat = MATERIAS_DIREITO[matKey];
        mat.modulos.forEach((m, mi) => {
          m.secoes.forEach(s => {
            s.topicos.forEach(t => {
              if (t.titulo.toLowerCase().includes(q) || t.conteudo.toLowerCase().includes(q) || t.fundamento.toLowerCase().includes(q) || (t.exemplo && t.exemplo.toLowerCase().includes(q))) {
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

      app.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem">
          <button class="btn-topic-action" style="max-width:130px" onclick="navigate('#/')">${SVG.arrowLeft} Voltar</button>
          <h2>Resultados da Pesquisa: "${termo}"</h2>
        </div>
        <p>Encontrados ${resultados.length} tópico(s) correspondente(s) em todas as matérias de Direito:</p>

        ${resultados.length ? `
          <div class="bento-grid">
            ${resultados.map(r => `
              <div class="topic-card col-6" onclick="navigate('#/mod/${r.materiaKey}/${r.modIdx}')" style="cursor:pointer">
                <div class="topic-tag" style="color:${r.cor}">${r.materiaNome} • ${r.moduloNome} • ${r.fundamento}</div>
                <h4>${r.titulo}</h4>
                <div class="topic-content">${r.conteudo}</div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="module-card" style="text-align:center; padding:3rem; cursor:default">
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente palavras como "pronúncia", "prescrição", "responsabilidade", "CLT", "ADPF", "usucapião" ou "trespasse".</p>
          </div>
        `}
      `;
    }

