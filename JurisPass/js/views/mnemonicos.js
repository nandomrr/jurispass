    /* ==========================================================================
       MURAL DE MNEMÔNICOS (REGRAS DA JANAINA)
       ========================================================================== */
    function renderMnemonicos(materiaKey = 'penal') {
      updateSidebarUI();
      const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];

      app.innerHTML = `
        <!-- Breadcrumb e Voltar para Matéria -->
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
          <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:var(--tx-muted)">
            <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.85rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
              ${SVG.arrowLeft} Voltar para ${mat.nome}
            </button>
            <span style="opacity:0.4">/</span>
            <span style="color:var(--tx-main); font-weight:700">Mural de Macetes & Mnemônicos</span>
          </div>
          <div style="font-size:0.85rem; color:var(--tx-muted); font-weight:600">${MNEMONICOS.length} Macetes Penais</div>
        </div>

        <!-- Abas Sub-nav da Disciplina -->
        <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
          <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
            ${SVG.modules} Módulos & Aulas (${mat.modulos.length})
          </button>
          <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/arvore')">
            ${SVG.tree} Árvore de Recursos Criminais
          </button>
          <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/macetes')">
            ${SVG.brain} Mural de Macetes & Mnemônicos
          </button>
        </div>

        <p style="color:var(--tx-muted); margin-bottom:1.5rem">Regras práticas, atalhos mnemônicos e súmulas fundamentais sintetizadas pela Profª Janaina Daniel Varalli para rápida memorização:</p>

        <div class="mnemonics-grid">
          ${MNEMONICOS.map(m => `
            <div class="mnemonic-card" style="--tag-color:${m.cor}; --tag-glow:${m.glow}">
              <div class="mnemonic-tag">${m.tag}</div>
              <div class="mnemonic-title">${m.titulo}</div>
              <p style="font-size:0.88rem; margin-bottom:0.4rem">${m.descricao}</p>
              <div class="mnemonic-rule">${m.regra.replace(/\n/g, '<br>')}</div>
              ${m.exemplo ? `
                <div class="mnemonic-example">
                  <strong>Aplicação Prática:</strong> ${m.exemplo}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }

