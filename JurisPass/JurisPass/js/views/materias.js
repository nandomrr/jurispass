    /* ==========================================================================
       TELA GERAL DE MATÉRIAS DE DIREITO (MÓDULOS DE ESTUDO)
       ========================================================================== */
    function renderMaterias() {
      updateSidebarUI();
      const totTopicos = getTotalTopicos();
      const vistos = getTopicosVistosCount();
      const pctGlobal = totTopicos > 0 ? Math.round((vistos / totTopicos) * 100) : 0;

      app.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <div class="status-island" style="margin-bottom:0.75rem">
            <span class="status-badge" style="background:var(--c-blue-glow); color:var(--c-blue)">Matérias de Direito</span>
            <span><strong>${Object.keys(MATERIAS_DIREITO).length} Disciplinas • ${Object.values(MATERIAS_DIREITO).reduce((acc, m) => acc + (m.modulos ? m.modulos.length : 0), 0)} Módulos de Estudo</strong></span>
            <span style="opacity:0.4">•</span>
            <span>${pctGlobal}% concluído global</span>
          </div>
          <h2>Módulos de Estudo Jurídico</h2>
          <p style="margin-top:0.25rem">Selecione uma matéria de Direito abaixo para visualizar todos os módulos esquematizados e acessar os conteúdos de estudo com artigos, doutrina e exemplos práticos.</p>
        </div>

        <div class="bento-grid">
          ${Object.keys(MATERIAS_DIREITO).map(key => {
            const mat = MATERIAS_DIREITO[key];
            const prog = getProgressoMateria(key);
            const pct = Math.round(prog * 100);
            const modCount = mat.modulos.length;
            let topCount = 0;
            mat.modulos.forEach(m => m.secoes.forEach(s => topCount += s.topicos.length));

            return `
              <div class="module-card col-6" style="--card-color:${mat.cor}; --card-glow:${mat.corGlow}; cursor:pointer" onclick="navigate('#/materia/${key}')">
                <div class="card-top-row">
                  <span class="card-pill-tag">${mat.artigos.split('|')[0].trim()}</span>
                  <div class="card-icon-indicator">${mat.iconSvg}</div>
                </div>
                <h3>${mat.nome}</h3>
                <div style="font-size:0.83rem; color:var(--tx-muted); margin-bottom:0.6rem; font-weight:600">${mat.subtitulo}</div>
                <p class="card-desc">${mat.descricao}</p>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.1rem">
                  <span style="font-size:0.75rem; background:var(--bg-glass); border:0.5px solid var(--bd); padding:0.2rem 0.6rem; border-radius:var(--radius-pill); color:var(--tx-muted)">
                    ${modCount} Módulos
                  </span>
                  <span style="font-size:0.75rem; background:var(--bg-glass); border:0.5px solid var(--bd); padding:0.2rem 0.6rem; border-radius:var(--radius-pill); color:var(--tx-muted)">
                    • ${topCount} Tópicos Chave
                  </span>
                </div>
                <div class="module-card-footer">
                  <div class="ios-progress-track">
                    <div class="ios-progress-fill" style="width: ${pct}%"></div>
                  </div>
                  <span style="color:var(--tx-muted); margin-right:0.75rem">${pct}% concluído</span>
                  <button class="btn-fc-flip" style="height:34px; padding:0 1rem; font-size:0.82rem; pointer-events:none">
                    Acessar Módulos →
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    /* ==========================================================================
       TELA DE MÓDULOS DE UMA MATÉRIA ESPECÍFICA
       ========================================================================== */
    function renderMateriaModulos(materiaKey, activeSubTab = 'modulos') {
      updateSidebarUI();
      const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
      const progMat = getProgressoMateria(materiaKey);
      const pctMat = Math.round(progMat * 100);
      const isPenal = (materiaKey === 'penal' || materiaKey === 'processo-penal');

      // Se a sub-aba for 'arvore', renderiza a Árvore de Decisão
      if (activeSubTab === 'arvore') {
        renderArvore(materiaKey);
        return;
      }
      // Se a sub-aba for 'macetes', renderiza os Mnemônicos
      if (activeSubTab === 'macetes' || activeSubTab === 'mnemonicos') {
        renderMnemonicos(materiaKey);
        return;
      }

      app.innerHTML = `
        <!-- Breadcrumb e Voltar -->
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
          <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:var(--tx-muted)">
            <button class="btn-topic-action" style="max-width:160px; padding:0.35rem 0.85rem; font-size:0.84rem" onclick="navigate('#/materias')">
              ${SVG.arrowLeft} Todas as Matérias
            </button>
            <span style="opacity:0.4">/</span>
            <span style="color:var(--tx-main); font-weight:700">${mat.nome}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--tx-muted)">
            Progresso em ${mat.nome.split(' ')[0]}: <strong style="color:${mat.cor}">${pctMat}%</strong>
          </div>
        </div>

        <!-- Cabeçalho da Matéria -->
        <div style="margin-bottom: 1.8rem;">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.4rem">
            <div class="card-icon-indicator" style="background:${mat.corGlow}; color:${mat.cor}; width:44px; height:44px">${mat.iconSvg}</div>
            <h2 style="font-size:clamp(1.7rem, 3.2vw, 2.2rem)">${mat.nome}</h2>
          </div>
          <p style="font-size:1.02rem; color:var(--tx-muted); max-width:80ch">${mat.subtitulo}</p>
          <div class="status-badge" style="background:${mat.corGlow}; color:${mat.cor}">
            ${mat.artigos}
          </div>
        </div>

        <!-- Abas de Navegação Integradas (Árvore de Recursos e Macetes em Direito Penal) -->
        ${isPenal ? `
          <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
            <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
              ${SVG.modules} Módulos & Aulas (${mat.modulos.length})
            </button>
            <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/arvore')">
              ${SVG.tree} Árvore de Recursos Criminais
            </button>
            <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}/macetes')">
              ${SVG.brain} Mural de Macetes & Mnemônicos
            </button>
          </div>

          <!-- Cards de Destaque para Árvore e Macetes dentro da matéria -->
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; margin-bottom:1.8rem">
            <div class="action-tile" style="--tile-color:var(--c-blue); --tile-glow:var(--c-blue-glow); cursor:pointer; text-align:left; padding:1.25rem" onclick="navigate('#/materia/${materiaKey}/arvore')">
              <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.6rem">
                <div class="action-tile-icon" style="margin:0">${SVG.tree}</div>
                <h4 style="margin:0; font-size:1.05rem">Árvore de Recursos Criminais</h4>
              </div>
              <small style="display:block; margin-bottom:0.8rem; font-size:0.85rem">Fluxograma interativo com decisões interlocutórias, sentenças, Júri e recursos cabíveis (RESE, Apelação, ROC, HC).</small>
              <div style="color:var(--c-blue); font-size:0.82rem; font-weight:700">Explorar Árvore Passo a Passo →</div>
            </div>

            <div class="action-tile" style="--tile-color:var(--c-amber); --tile-glow:var(--c-amber-glow); cursor:pointer; text-align:left; padding:1.25rem" onclick="navigate('#/materia/${materiaKey}/macetes')">
              <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.6rem">
                <div class="action-tile-icon" style="margin:0">${SVG.brain}</div>
                <h4 style="margin:0; font-size:1.05rem">Mural de Macetes & Mnemônicos</h4>
              </div>
              <small style="display:block; margin-bottom:0.8rem; font-size:0.85rem">Regras mnemônicas da Profª Janaina: LUTA, 4 Decisões do Júri, Prazos dos Recursos e Súmulas indispensáveis.</small>
              <div style="color:var(--c-amber); font-size:0.82rem; font-weight:700">Abrir Mural de Macetes →</div>
            </div>
          </div>
        ` : ''}

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem">
          <h3 style="font-size:1.2rem; margin:0">Módulos Esquematizados (${mat.modulos.length})</h3>
          <span style="font-size:0.82rem; color:var(--tx-faint)">Selecione um módulo para abrir e estudar o conteúdo</span>
        </div>

        <!-- Grid de Módulos da Matéria -->
        <div class="bento-grid">
          ${mat.modulos.map((m, idx) => {
            const prog = getProgressoModulo(materiaKey, idx);
            const pct = Math.round(prog * 100);
            let totTopicos = 0;
            m.secoes.forEach(s => totTopicos += s.topicos.length);

            return `
              <div class="module-card col-6" style="--card-color:${m.cor || mat.cor}; --card-glow:${m.corGlow || mat.corGlow}; cursor:pointer" onclick="navigate('#/mod/${materiaKey}/${idx}')">
                <div class="card-top-row">
                  <span class="card-pill-tag">Módulo ${idx + 1}</span>
                  <div class="card-icon-indicator">${m.iconSvg || mat.iconSvg}</div>
                </div>
                <h3>${m.nome}</h3>
                <div style="font-size:0.82rem; font-family:'JetBrains Mono', monospace; color:var(--tx-faint); margin-bottom:0.5rem">
                  ${m.artigos}
                </div>
                <p class="card-desc">${m.subtitulo || m.resumo || ''}</p>

                ${m.pilares && m.pilares.length ? `
                  <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1.1rem">
                    ${m.pilares.slice(0, 3).map(p => `
                      <span style="font-size:0.72rem; background:var(--bg-glass); border:0.5px solid var(--bd); padding:0.2rem 0.55rem; border-radius:var(--radius-pill); color:var(--tx-muted)">
                        ✓ ${p.t}
                      </span>
                    `).join('')}
                  </div>
                ` : ''}

                <div class="module-card-footer">
                  <div class="ios-progress-track">
                    <div class="ios-progress-fill" style="width: ${pct}%"></div>
                  </div>
                  <span style="color:var(--tx-muted); margin-right:0.75rem">${pct}% (${totTopicos} tópicos)</span>
                  <button class="btn-fc-flip" style="height:34px; padding:0 1rem; font-size:0.82rem; pointer-events:none">
                    Acessar Conteúdo →
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    /* ==========================================================================
       TELA DE MÓDULO INDIVIDUAL (COM CONTROLE SEGMENTADO E CONTEÚDO COMPLETO)
       ========================================================================== */
    function renderModulo(materiaKey, modIdx) {
      if (typeof materiaKey === 'number' && modIdx === undefined) {
        modIdx = materiaKey;
        materiaKey = 'processo-penal';
      }
      const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['processo-penal'];
      const m = mat.modulos[modIdx];
      if (!m) { navigate('#/materias'); return; }

      const prog = getProgressoModulo(materiaKey, modIdx);
      const pct = Math.round(prog * 100);

      app.innerHTML = `
        <!-- Breadcrumb e Voltar -->
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
          <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:var(--tx-muted)">
            <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.85rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
              ${SVG.arrowLeft} Voltar para ${mat.nome.split(' ')[0]} ${mat.nome.split(' ')[1] || ''}
            </button>
            <span style="opacity:0.4">/</span>
            <span style="color:var(--tx-main); font-weight:700">${m.nome}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--tx-muted)">Progresso do Módulo: <strong>${pct}%</strong></div>
        </div>

        <!-- Cabeçalho do Módulo -->
        <div style="margin-bottom: 2rem;">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.4rem">
            <div class="card-icon-indicator" style="background:${m.corGlow || mat.corGlow}; color:${m.cor || mat.cor}; width:42px; height:42px">
              ${m.iconSvg || mat.iconSvg}
            </div>
            <h2 style="font-size:clamp(1.7rem, 3.2vw, 2.2rem)">${m.nome}</h2>
          </div>
          <p style="font-size:1.02rem; color:var(--tx-muted); max-width:80ch">${m.subtitulo || m.resumo || ''}</p>
          <div class="status-badge" style="background:${m.corGlow || mat.corGlow}; color:${m.cor || mat.cor}">
            ${m.artigos}
          </div>
        </div>

        <!-- Pilares e Fundamentos se existirem -->
        ${m.pilares && m.pilares.length ? `
          <h4 style="margin-bottom: 0.85rem;">Pilares e Fundamentos Doutrinários</h4>
          <div class="bento-grid" style="margin-bottom:2rem">
            ${m.pilares.map(p => `
              <div class="module-card col-6" style="padding:1.3rem; cursor:default">
                <h4 style="color:${m.cor || mat.cor}; margin-bottom:0.35rem; font-size:1.05rem">${p.t}</h4>
                <p style="font-size:0.86rem; margin:0; line-height:1.5">${p.d}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Segmented Control de Seções -->
        <div class="segmented-control">
          ${m.secoes.map((sec, si) => `
            <button class="segmented-btn ${si === 0 ? 'active' : ''}" onclick="selectSecao('${materiaKey}', ${modIdx}, ${si})">
              ${sec.titulo.split('—')[0]}
            </button>
          `).join('')}
        </div>

        <!-- Container de Tópicos do Módulo -->
        <div id="secao-container" class="bento-grid"></div>
      `;

      selectSecao(materiaKey, modIdx, 0);
    }

    window.selectSecao = (materiaKey, modIdx, secIdx) => {
      if (typeof materiaKey === 'number') {
        secIdx = modIdx;
        modIdx = materiaKey;
        materiaKey = 'processo-penal';
      }
      document.querySelectorAll('.segmented-btn').forEach((b, i) => b.classList.toggle('active', i === secIdx));
      const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['processo-penal'];
      const m = mat.modulos[modIdx];
      if (!m || !m.secoes[secIdx]) return;
      const sec = m.secoes[secIdx];
      const cont = document.getElementById('secao-container');

      cont.innerHTML = sec.topicos.map(top => {
        const visto = STATE.vistos[top.id];
        const duvida = STATE.duvidas[top.id];
        return `
          <div class="topic-card col-6" id="card-${top.id}">
            <div class="topic-tag">${top.fundamento}</div>
            <h4>${top.titulo}</h4>
            <div class="topic-content">${top.conteudo}</div>
            
            ${top.exemplo ? `
              <div class="topic-exemplo">
                <strong>Exemplo de Aplicação Prática:</strong><br>
                ${top.exemplo}
              </div>
            ` : ''}

            <div class="topic-actions">
              <button class="btn-topic-action ${visto ? 'checked' : ''}" onclick="toggleVisto('${top.id}')">
                ${visto ? `${SVG.check} Dominado` : '○ Marcar Lido'}
              </button>
              <button class="btn-topic-action ${duvida ? 'doubted' : ''}" onclick="toggleDuvida('${top.id}')">
                ${duvida ? `${SVG.star} Em Dúvida` : `${SVG.star} Salvar Dúvida`}
              </button>
            </div>
          </div>
        `;
      }).join('');
    };

    window.toggleVisto = (id) => {
      STATE.vistos[id] = !STATE.vistos[id];
      saveState();
      playBeep(STATE.vistos[id] ? 600 : 380, 'sine', 0.08);
      if (STATE.vistos[id]) launchConfetti();
      const card = document.getElementById('card-' + id);
      if (card) {
        const btn = card.querySelectorAll('.btn-topic-action')[0];
        btn.classList.toggle('checked', STATE.vistos[id]);
        btn.innerHTML = STATE.vistos[id] ? `${SVG.check} Dominado` : '○ Marcar Lido';
      }
    };

    window.toggleDuvida = (id) => {
      STATE.duvidas[id] = !STATE.duvidas[id];
      saveState();
      playBeep(STATE.duvidas[id] ? 520 : 360, 'sine', 0.06);
      const card = document.getElementById('card-' + id);
      if (card) {
        const btn = card.querySelectorAll('.btn-topic-action')[1];
        btn.classList.toggle('doubted', STATE.duvidas[id]);
        btn.innerHTML = STATE.duvidas[id] ? `${SVG.star} Em Dúvida` : `${SVG.star} Salvar Dúvida`;
      }
    };

