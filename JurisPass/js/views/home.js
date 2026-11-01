    /* ==========================================================================
       TELA INICIAL: VISÃO GERAL (PAINEL SAAS SEMELHANTE ÀS IMAGENS)
       ========================================================================== */
    let chartPeriodo = '7d';
    function setChartPeriodo(p) {
      chartPeriodo = p;
      renderHome();
    }

    function renderHome() {
      updateSidebarUI();
      const user = STATE.usuario;
      const isCadastrado = Boolean(user && user.cadastrado && user.nome);
      const primeiroNome = isCadastrado ? user.nome.trim().split(/\s+/)[0] : 'Estudante';

      const totTopicos = getTotalTopicos();
      const vistos = getTopicosVistosCount();
      const pctGlobal = Math.round((vistos / totTopicos) * 100);

      const totalRespondidas = Object.keys(STATE.respostasQuiz).length;
      const acertosQuiz = QUESTOES.filter((q, i) => STATE.respostasQuiz[i] === q.correta).length;
      const taxaAcerto = totalRespondidas > 0 ? Math.round((acertosQuiz / totalRespondidas) * 100) : 0;

      const dominadosCards = Object.keys(STATE.flashcardsDominados).filter(k => STATE.flashcardsDominados[k]).length;

      app.innerHTML = `
        <!-- Cabeçalho do Painel -->
        <div style="margin-bottom: 1.8rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem">
            <div>
              <h1 style="font-size:clamp(1.8rem, 3.8vw, 2.4rem); font-weight:800; margin-bottom:0.25rem">
                Olá, ${primeiroNome}
              </h1>
              <p style="font-size:0.95rem; color:var(--tx-muted); margin:0">
                Seu ambiente inteligente de preparação jurídica para a OAB e Concursos.
              </p>
            </div>
            <div style="display:flex; align-items:center; gap:0.6rem">
              <button class="btn-topic-action" style="padding:0.45rem 1rem" onclick="navigate('#/materias')">
                ${SVG.book} Catálogo de Matérias
              </button>
              <button class="btn-fc-flip" style="height:38px; padding:0 1.25rem; font-size:0.86rem" onclick="navigate('#/questoes')">
                Praticar Simulado
              </button>
            </div>
          </div>
        </div>

        <!-- DE PRIMEIRO: Atalhos de Acesso Rápido aos Módulos de Estudo -->
        <div style="margin-bottom: 2.2rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1.1rem; flex-wrap:wrap; gap:0.6rem">
            <div>
              <div style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--c-blue); margin-bottom:0.25rem">
                Acesso Imediato
              </div>
              <h2 style="font-size:clamp(1.25rem, 2.5vw, 1.55rem); font-weight:800; margin:0">
                Módulos de Estudo por Matéria
              </h2>
              <p style="font-size:0.88rem; color:var(--tx-muted); margin:0.2rem 0 0 0">
                Selecione uma área jurídica para continuar seus estudos esquematizados
              </p>
            </div>
            <button class="btn-topic-action" style="padding:0.45rem 1rem; font-size:0.84rem" onclick="navigate('#/materias')">
              Ver Catálogo Completo ${SVG.arrowRight}
            </button>
          </div>

          <!-- Cards das 7 Matérias em Grid Responsivo -->
          <div class="bento-grid" style="margin-bottom: 0;">
            ${Object.keys(MATERIAS_DIREITO).map(key => {
              const mat = MATERIAS_DIREITO[key];
              const prog = getProgressoMateria(key);
              const pct = Math.round(prog * 100);
              const modCount = mat.modulos.length;
              const isPenal = key === 'penal' || key === 'processo-penal';

              return `
                <div class="module-card col-6" style="--card-color:${mat.cor}; --card-glow:${mat.corGlow}; cursor:pointer; padding:1.25rem" onclick="navigate('#/materia/${key}')">
                  <div class="card-top-row" style="margin-bottom:0.7rem">
                    <span class="card-pill-tag">${mat.artigos.split('|')[0].trim()}</span>
                    <div class="card-icon-indicator" style="width:36px; height:36px">${mat.iconSvg}</div>
                  </div>
                  <h3 style="font-size:1.16rem; margin-bottom:0.25rem">${mat.nome}</h3>
                  <div style="font-size:0.81rem; color:var(--tx-muted); margin-bottom:0.55rem; font-weight:600">
                    ${mat.subtitulo}
                  </div>
                  <p class="card-desc" style="font-size:0.85rem; margin-bottom:0.85rem; -webkit-line-clamp:2">
                    ${mat.descricao}
                  </p>

                  <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:0.9rem">
                    <span style="font-size:0.74rem; background:var(--bg-glass); border:0.5px solid var(--bd); padding:0.18rem 0.55rem; border-radius:var(--radius-pill); color:var(--tx-muted)">
                      ${modCount} Módulos
                    </span>
                    ${isPenal ? `
                      <span style="font-size:0.74rem; background:var(--c-rose-glow); border:0.5px solid var(--c-rose); padding:0.18rem 0.55rem; border-radius:var(--radius-pill); color:var(--c-rose); font-weight:700">
                        Árvore & Macetes Inclusos
                      </span>
                    ` : ''}
                  </div>

                  <div class="module-card-footer" style="padding-top:0.75rem">
                    <div class="ios-progress-track" style="flex:1">
                      <div class="ios-progress-fill" style="width: ${pct}%"></div>
                    </div>
                    <span style="color:var(--tx-muted); font-size:0.8rem; margin:0 0.65rem">${pct}%</span>
                    <button class="btn-fc-flip" style="height:32px; padding:0 0.95rem; font-size:0.8rem; pointer-events:none">
                      Estudar →
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Métricas Principais (4 KPIs simétricos - sem Próxima Prova) -->
        <div class="kpi-row" style="grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); margin-bottom: 2rem;">
          <div class="kpi-card" onclick="navigate('#/materias')" style="cursor:pointer">
            <div class="kpi-label">Matérias & Módulos</div>
            <div class="kpi-value">${vistos}<span style="font-size:1rem; color:var(--tx-faint)">/${totTopicos}</span></div>
            <div class="kpi-sub">${pctGlobal}% do conteúdo estudado</div>
          </div>

          <div class="kpi-card">
            <div class="kpi-label">Sequência de Estudos</div>
            <div class="kpi-value">${STATE.streak} <span style="font-size:1.1rem; color:var(--c-amber)">dias</span></div>
            <div class="kpi-sub">Constância e retenção</div>
          </div>

          <div class="kpi-card" onclick="navigate('#/questoes')" style="cursor:pointer">
            <div class="kpi-label">Simulado Estilo OAB</div>
            <div class="kpi-value">${acertosQuiz}<span style="font-size:1rem; color:var(--tx-faint)">/${QUESTOES.length}</span></div>
            <div class="kpi-sub">${totalRespondidas} resolvidas (${taxaAcerto}% acerto)</div>
          </div>

          <div class="kpi-card" onclick="navigate('#/flashcards')" style="cursor:pointer">
            <div class="kpi-label">Flashcards 3D</div>
            <div class="kpi-value">${dominadosCards}<span style="font-size:1rem; color:var(--tx-faint)">/${FLASHCARDS.length}</span></div>
            <div class="kpi-sub">Conceitos memorizados</div>
          </div>
        </div>

        <!-- Ferramentas de Prática & Fixação -->
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; font-size:1.15rem">Prática & Treinamento Ativo</h3>
          <div class="action-tiles-grid" style="margin:0; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
            <div class="action-tile" style="--tile-color:var(--c-purple); --tile-glow:var(--c-purple-glow)" onclick="navigate('#/flashcards')">
              <div class="action-tile-icon">${SVG.cards}</div>
              <h4>Flashcards 3D</h4>
              <small>${dominadosCards}/${FLASHCARDS.length} cartas memorizadas com flip motion</small>
            </div>
            <div class="action-tile" style="--tile-color:var(--c-emerald); --tile-glow:var(--c-emerald-glow)" onclick="navigate('#/questoes')">
              <div class="action-tile-icon">${SVG.quiz}</div>
              <h4>Simulado OAB</h4>
              <small>${acertosQuiz}/${QUESTOES.length} acertos com gabarito fundamentado</small>
            </div>
            <div class="action-tile" style="--tile-color:var(--c-amber); --tile-glow:var(--c-amber-glow)" onclick="navigate('#/revisao')">
              <div class="action-tile-icon">${SVG.star}</div>
              <h4>Dúvidas Salvas</h4>
              <small>Caderno de revisão rápida dos tópicos favoritados</small>
            </div>
            <div class="action-tile" style="--tile-color:var(--c-blue); --tile-glow:var(--c-blue-glow)" onclick="navigate('#/planos')">
              <div class="action-tile-icon">${SVG.planos}</div>
              <h4>Planos & Assinatura</h4>
              <small>Gerencie seu plano ou faça upgrade de categoria</small>
            </div>
          </div>
        </div>

        <!-- Atividade Recente no Painel -->
        <div class="module-card col-12" style="cursor:default">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem">
            <h3 style="font-size:1.1rem; margin:0">Atividade Recente no Painel</h3>
            <span style="font-size:0.8rem; color:var(--tx-faint)">Atualizado agora</span>
          </div>

          <div>
            <div class="feed-item">
              <div style="display:flex; align-items:center; gap:0.65rem">
                <span style="color:var(--c-emerald)">✓</span>
                <span><strong>Sua conta está ativa no Plano ${(user && user.plano) ? user.plano : 'Pro'}</strong> com acesso irrestrito aos módulos e simulados.</span>
              </div>
              <span style="color:var(--tx-faint); font-size:0.8rem">agora</span>
            </div>

            <div class="feed-item">
              <div style="display:flex; align-items:center; gap:0.65rem">
                <span style="color:var(--c-rose)">✓</span>
                <span><strong>Direito Penal & Processual:</strong> Árvore de Recursos e Mural de Macetes integrados na disciplina.</span>
              </div>
              <span style="color:var(--tx-faint); font-size:0.8rem">recente</span>
            </div>

            <div class="feed-item">
              <div style="display:flex; align-items:center; gap:0.65rem">
                <span style="color:var(--c-amber)">✓</span>
                <span><strong>Aba de Códigos em atualização:</strong> Sincronizando artigos da legislação com a base da plataforma.</span>
              </div>
              <span style="color:var(--tx-faint); font-size:0.8rem">em andamento</span>
            </div>
          </div>
        </div>
      `;
    }

