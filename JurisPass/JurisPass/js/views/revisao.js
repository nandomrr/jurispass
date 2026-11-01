    /* ==========================================================================
       TELA DE DÚVIDAS SALVAS (MULTI-MATÉRIAS)
       ========================================================================== */
    function renderRevisao() {
      const topicosDuvida = [];
      for (const matKey in MATERIAS_DIREITO) {
        const mat = MATERIAS_DIREITO[matKey];
        mat.modulos.forEach((m, mi) => {
          m.secoes.forEach(s => {
            s.topicos.forEach(t => {
              if (STATE.duvidas[t.id]) {
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

      app.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem">
          <button class="btn-topic-action" style="max-width:130px" onclick="navigate('#/')">${SVG.arrowLeft} Início</button>
          <h2>Dúvidas Salvas para Revisão</h2>
        </div>

        ${topicosDuvida.length ? `
          <div class="bento-grid">
            ${topicosDuvida.map(top => `
              <div class="topic-card col-6" id="rev-${top.id}">
                <div class="topic-tag" style="color:${top.cor}">${top.materiaNome} • ${top.moduloNome} • ${top.fundamento}</div>
                <h4>${top.titulo}</h4>
                <div class="topic-content">${top.conteudo}</div>
                ${top.exemplo ? `
                  <div class="topic-exemplo">
                    <strong>Exemplo:</strong><br>
                    ${top.exemplo}
                  </div>
                ` : ''}
                <div class="topic-actions">
                  <button class="btn-topic-action checked" onclick="resolverDuvida('${top.id}')">
                    ${SVG.check} Já entendi, remover da revisão
                  </button>
                  <button class="btn-topic-action" onclick="navigate('#/mod/${top.materiaKey}/${top.modIdx}')">
                    Abrir no Módulo →
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="module-card" style="text-align:center; padding:3rem; cursor:default">
            <h3>Nenhum ponto em dúvida no momento</h3>
            <p>Quando estiver estudando os módulos de qualquer uma das 7 matérias de Direito, clique em <strong>"Salvar Dúvida"</strong> nos pontos difíceis para revisá-los aqui.</p>
          </div>
        `}
      `;
    }

    window.resolverDuvida = (id) => {
      delete STATE.duvidas[id];
      saveState();
      playBeep(640, 'sine', 0.08);
      renderRevisao();
    };

