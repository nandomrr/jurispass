    /* ==========================================================================
       FLUXOGRAMA TOTALMENTE INTERATIVO & FUNCIONAL COM TRILHA (BREADCRUMBS)
       ========================================================================== */
    function renderArvore(materiaKey = 'penal') {
      updateSidebarUI();
      const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
      const path = STATE.flowPath && STATE.flowPath.length ? STATE.flowPath : ['inicio'];
      const currentId = path[path.length - 1];
      const currentNode = NOS_FLUXOGRAMA[currentId] || NOS_FLUXOGRAMA['inicio'];

      // Construir Breadcrumbs do Fluxo
      const breadcrumbsHtml = path.map((nodeId, idx) => {
        const node = NOS_FLUXOGRAMA[nodeId];
        const isLast = idx === path.length - 1;
        const label = nodeId === 'inicio' ? 'Início do Fluxo' : (node.faseBadge || node.titulo.slice(0, 24));
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
        contentHtml = `
          <div class="flow-terminal-resolution" style="--term-color:${currentNode.recurso.includes('RESE') ? 'var(--c-teal)' : currentNode.recurso.includes('Apelação') ? 'var(--c-rose)' : currentNode.recurso.includes('Carta') ? 'var(--c-amber)' : 'var(--c-blue)'}; --term-glow:${currentNode.recurso.includes('RESE') ? 'var(--c-teal-glow)' : 'var(--c-blue-glow)'}">
            <div class="resolution-header">
              <span class="flow-stage-badge">${currentNode.faseBadge}</span>
            </div>
            
            <h3 style="margin-bottom:0.6rem">Recurso Processual Cabível:</h3>
            <div class="resolution-recurso-badge">${currentNode.recurso}</div>

            <div class="resolution-grid">
              <div class="resolution-spec-item">
                <strong>Fundamento Legal</strong>
                <span>${currentNode.fundamento}</span>
              </div>
              <div class="resolution-spec-item">
                <strong>Prazo de Prática</strong>
                <span>${currentNode.prazo}</span>
              </div>
              <div class="resolution-spec-item">
                <strong>Efeitos e Rito</strong>
                <span>${currentNode.efeitos}</span>
              </div>
            </div>

            <div style="background:var(--bg-glass); border-left:3px solid var(--term-color, var(--c-blue)); padding:1rem 1.25rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0; margin-top:1.25rem">
              <strong style="color:var(--tx-main); display:block; margin-bottom:0.25rem">Como Funciona na Prática:</strong>
              <p style="margin:0; font-size:0.95rem; color:var(--tx-main); line-height:1.6">${currentNode.detalhe}</p>
            </div>

            ${currentNode.proximosDesdobramentos && currentNode.proximosDesdobramentos.length ? `
              <div style="margin-top:1.75rem; padding-top:1.25rem; border-top:0.5px solid var(--bd)">
                <h4 style="margin-bottom:0.75rem; color:var(--tx-main)">Próximos Desdobramentos Possíveis:</h4>
                <div style="display:flex; flex-direction:column; gap:0.6rem">
                  ${currentNode.proximosDesdobramentos.map(prox => `
                    <button class="flow-branch-card" style="padding:1rem; cursor:pointer" onclick="avancarNivelFluxo('${prox.id}', '${materiaKey}')">
                      <div style="display:flex; justify-content:space-between; align-items:center">
                        <strong style="color:var(--c-blue)">→ ${prox.titulo}</strong>
                        <span style="font-size:0.8rem; color:var(--tx-muted)">Avançar ${SVG.arrowRight}</span>
                      </div>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div style="display:flex; gap:0.8rem; margin-top:1.75rem">
              <button class="btn-topic-action" style="padding:0.55rem 1.1rem" onclick="reiniciarFluxo('${materiaKey}')">
                ${SVG.refresh} Reiniciar Consulta
              </button>
              <button class="btn-topic-action" style="padding:0.55rem 1.1rem" onclick="voltarUmPassoFluxo('${materiaKey}')">
                ${SVG.arrowLeft} Voltar um Passo
              </button>
            </div>
          </div>
        `;
      } else {
// Exibicao da Pergunta e Ramificacoes (Caminhos)
        const caminhos = currentNode.caminhos || currentNode.opcoes || [];
        contentHtml = `
          <div>
            <span class="flow-stage-badge">${currentNode.faseBadge}</span>
            <h3 style="margin: 0.35rem 0 0.5rem">${currentNode.titulo}</h3>
            <p style="font-size:0.95rem; color:var(--tx-muted)">${currentNode.descricao || currentNode.pergunta || ''}</p>

            <div class="flow-branches-grid">
              ${caminhos.map(c => `
                <div class="flow-branch-card" style="--branch-color:${c.cor || 'var(--c-blue)'}; --branch-glow:${c.glow || 'var(--c-blue-glow)'}" onclick="avancarNivelFluxo('${c.id || c.proximoId}', '${materiaKey}')">
                  <span class="branch-card-badge">${c.tag || c.label || 'Opção'}</span>
                  <div class="branch-card-title">${c.titulo || c.label || ''}</div>
                  <div class="branch-card-desc">${c.desc || c.sub || ''}</div>
                  <div class="branch-card-action">
                    <span>Seguir este caminho</span>
                    <span>${SVG.arrowRight}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            ${path.length > 1 ? `
              <div style="margin-top:1.5rem; display:flex; gap:0.6rem">
                <button class="btn-topic-action" style="max-width:180px; padding:0.4rem 0.85rem; font-size:0.82rem" onclick="voltarUmPassoFluxo('${materiaKey}')">
                  ${SVG.arrowLeft} Passo Anterior
                </button>
                <button class="btn-topic-action" style="max-width:140px; padding:0.4rem 0.85rem; font-size:0.82rem" onclick="reiniciarFluxo('${materiaKey}')">
                  ${SVG.refresh} Reiniciar
                </button>
              </div>
            ` : ''}
          </div>
        `;
      }

      app.innerHTML = `
        <!-- Breadcrumb e Voltar para Matéria -->
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
          <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:var(--tx-muted)">
            <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.85rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
              ${SVG.arrowLeft} Voltar para ${mat.nome}
            </button>
            <span style="opacity:0.4">/</span>
            <span style="color:var(--tx-main); font-weight:700">Árvore de Recursos Criminais</span>
          </div>
          <button class="btn-topic-action" style="max-width:140px; padding:0.35rem 0.85rem; font-size:0.84rem" onclick="reiniciarFluxo('${materiaKey}')">
            ${SVG.refresh} Reiniciar Fluxo
          </button>
        </div>

        <!-- Abas Sub-nav da Disciplina -->
        <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
          <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
            ${SVG.modules} Módulos & Aulas (${mat.modulos.length})
          </button>
          <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/arvore')">
            ${SVG.tree} Árvore de Recursos Criminais
          </button>
          <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/macetes')">
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

    window.avancarNivelFluxo = (nodeId) => {
      playBeep(560, 'sine', 0.06);
      if (!STATE.flowPath) STATE.flowPath = ['inicio'];
      STATE.flowPath.push(nodeId);
      saveState();
      renderArvore();
      const target = NOS_FLUXOGRAMA[nodeId];
      if (target && target.terminal) {
        soundSuccess();
        launchConfetti();
      }
    };

    window.voltarUmPassoFluxo = () => {
      playBeep(420, 'sine', 0.05);
      if (STATE.flowPath && STATE.flowPath.length > 1) {
        STATE.flowPath.pop();
        saveState();
        renderArvore();
      }
    };

    window.voltarParaNivelFluxo = (idx) => {
      playBeep(480, 'sine', 0.05);
      if (STATE.flowPath && idx < STATE.flowPath.length) {
        STATE.flowPath = STATE.flowPath.slice(0, idx + 1);
        saveState();
        renderArvore();
      }
    };

    window.reiniciarFluxo = () => {
      playBeep(400, 'sine', 0.05);
      STATE.flowPath = ['inicio'];
      saveState();
      renderArvore();
    };

