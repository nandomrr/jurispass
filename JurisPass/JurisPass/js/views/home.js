/* ==========================================================================
   JURISPASS - PAINEL PRINCIPAL / COCKPIT ACADÊMICO DESKTOP
   Paleta: Preto Profundo & Subcor Branca • Acentos Sutis de Desempenho
   Layout Amplo e Preenchido • Carrossel Arrastável com Mouse • Zero Erros
   ========================================================================== */

let chartPeriodo = '7d';

function setChartPeriodo(p) {
  chartPeriodo = p;
  renderHome();
}
window.setChartPeriodo = setChartPeriodo;

function renderHome() {
  updateSidebarUI();
  const user = STATE.usuario;
  const isCadastrado = Boolean(user && user.cadastrado && user.nome);
  const primeiroNome = isCadastrado ? user.nome.trim().split(/\s+/)[0] : 'Estudante';

  // Métricas de Conteúdo e Aulas
  const totTopicos = getTotalTopicos();
  const vistos = getTopicosVistosCount();
  const pctGlobal = totTopicos > 0 ? Math.round((vistos / totTopicos) * 100) : 0;

  // Métricas de Simulado OAB
  const totalRespondidas = Object.keys(STATE.respostasQuiz || {}).length;
  const acertosQuiz = QUESTOES.filter((q, i) => STATE.respostasQuiz && STATE.respostasQuiz[i] === q.correta).length;
  const taxaAcerto = totalRespondidas > 0 ? Math.round((acertosQuiz / totalRespondidas) * 100) : 0;

  // Métricas de Flashcards e Dúvidas
  const dominadosCards = Object.keys(STATE.flashcardsDominados || {}).filter(k => STATE.flashcardsDominados[k]).length;
  const pctCards = FLASHCARDS.length > 0 ? Math.round((dominadosCards / FLASHCARDS.length) * 100) : 0;
  const duvidasCount = Object.keys(STATE.duvidas || {}).filter(k => STATE.duvidas[k]).length;

  // Cálculo do Índice de Prontidão OAB & Faculdade (Ponderado)
  const prontidaoScore = Math.min(100, Math.round(
    (pctGlobal * 0.45) + 
    (totalRespondidas > 0 ? (taxaAcerto * 0.35) : 0) + 
    (pctCards * 0.20)
  ));

  const prontidaoStatus = prontidaoScore >= 70 ? 'Excelente Desempenho' : (prontidaoScore >= 35 ? 'Evolução Positiva' : 'Fase Inicial');
  const prontidaoCor = prontidaoScore >= 70 ? 'var(--perf-good)' : (prontidaoScore >= 35 ? 'var(--perf-mid)' : 'var(--perf-neutral)');

  // Mapeamento de Leis e Códigos das Disciplinas
  const lawTags = {
    'penal': 'Código Penal • Dec-Lei 2.848/40',
    'processo-penal': 'Processo Penal • Dec-Lei 3.689/41',
    'civil': 'Código Civil • Lei 10.406/02',
    'constitucional': 'Constituição da República • CF/88',
    'processo-civil': 'Processo Civil • Lei 13.105/15',
    'trabalho': 'Direito & Processo do Trabalho • CLT',
    'empresarial': 'Direito Falimentar • Lei 11.101/05'
  };

  const matKeys = Object.keys(MATERIAS_DIREITO);
  const numMaterias = matKeys.length;

  // Dia da semana para o planejador
  const diasSemana = [
    { sigla: 'DOM', nome: 'Domingo', meta: 'Revisão Semanal', diaIdx: 0 },
    { sigla: 'SEG', nome: 'Segunda', meta: 'Penal & Teoria', diaIdx: 1 },
    { sigla: 'TER', nome: 'Terça', meta: 'Processo Penal', diaIdx: 2 },
    { sigla: 'QUA', nome: 'Quarta', meta: 'Direito Civil', diaIdx: 3 },
    { sigla: 'QUI', nome: 'Quinta', meta: 'Constitucional', diaIdx: 4 },
    { sigla: 'SEX', nome: 'Sexta', meta: 'Proc. Civil & Trab.', diaIdx: 5 },
    { sigla: 'SÁB', nome: 'Sábado', meta: 'Simulados & Peças', diaIdx: 6 }
  ];
  const hojeIdx = new Date().getDay();

  const container = getViewContainer('view-home');
  container.innerHTML = `
    <!-- [HERO DESKTOP] Banner de Boas-Vindas & Cockpit de Rendimento -->
    <div class="hero-performance-card">
      <div style="flex: 1 1 520px; z-index: 1;">
        <div class="status-island" style="margin-bottom: 0.85rem;">
          <span class="status-badge" style="background: rgba(255,255,255,0.12); color: #ffffff;">
            Ambiente Acadêmico de Alta Performance
          </span>
          <span style="color: var(--tx-muted);">Graduação em Direito & 1ª Fase OAB</span>
          <span style="opacity: 0.3;">•</span>
          <span style="color: var(--tx-body); font-weight: 600;">Metodologia Ativa de Estudo</span>
        </div>

        <h1 style="font-size: clamp(2rem, 3.2vw, 2.75rem); font-weight: 800; margin: 0 0 0.5rem; color: #ffffff; letter-spacing: -0.02em;">
          Olá, ${primeiroNome}
        </h1>

        <p style="font-size: 1.02rem; color: var(--tx-muted); margin: 0 0 1.6rem; max-width: 78ch; line-height: 1.6;">
          Seu painel integrado de preparação jurídica: acompanhe seu progresso por disciplina, teste sua retenção com flashcards e pratique simulados da OAB com gabarito comentado.
        </p>

        <div style="display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap;">
          <button type="button" class="btn-white-action" onclick="navigate('#/materias')">
            ${SVG.book} Catálogo de Disciplinas (${numMaterias})
          </button>
          <button type="button" class="btn-outline-white" onclick="navigate('#/questoes')">
            ${SVG.quiz} Simulado Estilo OAB
          </button>
          <button type="button" class="btn-outline-white" onclick="navigate('#/flashcards')">
            ${SVG.cards} Flashcards 3D
          </button>
        </div>
      </div>

      <!-- Widget Circular de Prontidão Acadêmica -->
      <div class="hero-readiness-widget" style="z-index: 1;">
        <div class="hero-readiness-circle" style="border-color: ${prontidaoCor};">
          ${prontidaoScore}%
        </div>
        <div>
          <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tx-faint);">
            Índice de Prontidão Geral
          </div>
          <div style="font-size: 1.05rem; font-weight: 800; color: #ffffff; margin-top: 0.15rem;">
            ${prontidaoStatus}
          </div>
          <div style="font-size: 0.78rem; color: var(--tx-muted); margin-top: 0.35rem;">
            ${vistos} aulas vistas • ${totalRespondidas} questões feitas
          </div>
        </div>
      </div>
    </div>

    <!-- [KPIS] 5 Métricas Principais Simétricas em Preto Obsidiana -->
    <div class="kpi-row" style="margin-bottom: 2.4rem;">
      <div class="kpi-card" onclick="navigate('#/materias')" style="cursor: pointer;" title="Abrir Catálogo de Matérias">
        <div class="kpi-label">Matérias & Tópicos</div>
        <div class="kpi-value">${vistos}<span style="font-size: 1.05rem; color: var(--tx-faint); font-weight: 500;">/${totTopicos}</span></div>
        <div class="kpi-sub">
          <div class="perf-track" style="margin: 0.4rem 0 0.3rem; height: 4px;">
            <div class="perf-fill ${pctGlobal >= 50 ? 'good' : 'mid'}" style="width: ${pctGlobal}%;"></div>
          </div>
          ${pctGlobal}% do currículo concluído
        </div>
      </div>

      <div class="kpi-card" onclick="navigate('#/materias')" style="cursor: pointer;" title="Nível de Preparação Jurídica">
        <div class="kpi-label">Índice de Prontidão</div>
        <div class="kpi-value" style="color: #ffffff;">
          ${prontidaoScore}%
        </div>
        <div class="kpi-sub" style="display: flex; align-items: center; gap: 0.35rem; color: ${prontidaoCor};">
          <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: ${prontidaoCor};"></span>
          ${prontidaoStatus}
        </div>
      </div>

      <div class="kpi-card" onclick="navigate('#/questoes')" style="cursor: pointer;" title="Abrir Simulado OAB">
        <div class="kpi-label">Simulado Estilo OAB</div>
        <div class="kpi-value" style="color: #ffffff;">
          ${acertosQuiz}<span style="font-size: 1.05rem; color: var(--tx-faint); font-weight: 500;">/${QUESTOES.length}</span>
        </div>
        <div class="kpi-sub">
          ${totalRespondidas > 0 ? `${totalRespondidas} resolvidas (${taxaAcerto}% acerto)` : 'Nenhuma questão resolvida'}
        </div>
      </div>

      <div class="kpi-card" onclick="navigate('#/flashcards')" style="cursor: pointer;" title="Abrir Flashcards 3D">
        <div class="kpi-label">Flashcards 3D</div>
        <div class="kpi-value" style="color: #ffffff;">
          ${dominadosCards}<span style="font-size: 1.05rem; color: var(--tx-faint); font-weight: 500;">/${FLASHCARDS.length}</span>
        </div>
        <div class="kpi-sub">
          ${pctCards}% de conceitos memorizados
        </div>
      </div>

      <div class="kpi-card" onclick="navigate('#/revisao')" style="cursor: pointer;" title="Abrir Caderno de Dúvidas">
        <div class="kpi-label">Caderno de Dúvidas</div>
        <div class="kpi-value" style="color: #ffffff;">
          ${duvidasCount} <span style="font-size: 1.05rem; color: var(--tx-faint); font-weight: 500;">tópicos</span>
        </div>
        <div class="kpi-sub">
          ${duvidasCount > 0 ? 'Pontos marcados para revisão' : 'Sem dúvidas pendentes'}
        </div>
      </div>
    </div>

    <!-- [DESEMPENHO POR DISCIPLINA] Visão Completa das 7 Áreas Jurídicas -->
    <div style="margin-bottom: 2.8rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.15rem; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tx-faint); margin-bottom: 0.25rem;">
            Acompanhamento Curricular
          </div>
          <h3 style="font-size: clamp(1.25rem, 2.2vw, 1.55rem); font-weight: 800; margin: 0; color: #ffffff;">
            Desempenho por Área Jurídica (${numMaterias} Disciplinas)
          </h3>
        </div>
        <span style="font-size: 0.84rem; color: var(--tx-muted);">
          Clique em qualquer disciplina para abrir seus módulos esquematizados
        </span>
      </div>

      <div class="perf-disciplinas-grid">
        ${matKeys.map(key => {
          const mat = MATERIAS_DIREITO[key];
          const pct = Math.round(getProgressoMateria(key) * 100);
          const lawTag = lawTags[key] || mat.artigos || 'Legislação Aplicada';
          const modCount = mat.modulos ? mat.modulos.length : 0;
          let topCount = 0;
          if (mat.modulos) {
            mat.modulos.forEach(m => {
              if (m.secoes) m.secoes.forEach(s => topCount += s.topicos.length);
            });
          }

          const statusBadge = pct === 100
            ? '<span class="perf-pill good">✓ Concluído</span>'
            : (pct > 0 
              ? `<span class="perf-pill mid">${pct}% Em Andamento</span>` 
              : '<span class="perf-pill neutral">Pendente</span>');

          const fillClass = pct === 100 ? 'good' : (pct > 0 ? 'mid' : '');

          return `
            <div class="perf-area-card" onclick="navigate('#/materia/${key}')">
              <div class="perf-area-header">
                <span class="perf-area-name">${mat.nome}</span>
                ${statusBadge}
              </div>
              <div class="perf-area-law">${lawTag}</div>

              <div style="font-size: 0.8rem; color: var(--tx-muted); margin-bottom: 0.85rem; display: flex; justify-content: space-between;">
                <span>${modCount} Módulos</span>
                <span>${topCount} Tópicos</span>
              </div>

              <div class="perf-track">
                <div class="perf-fill ${fillClass}" style="width: ${pct}%;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- [CARROSSEL ARRASTÁVEL] Catálogo Rápido com Navegação via Mouse Drag -->
    ${typeof renderDisciplinasCarouselHTML === 'function' ? renderDisciplinasCarouselHTML('home') : ''}

    <!-- [FERRAMENTAS DE FIXAÇÃO] 5 Tiles Amplos e Funcionais -->
    <div style="margin-bottom: 2.8rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.15rem; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <div style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--tx-faint); margin-bottom: 0.25rem;">
            Fixação Ativa & Prática
          </div>
          <h3 style="font-size: clamp(1.25rem, 2.2vw, 1.55rem); font-weight: 800; margin: 0; color: #ffffff;">
            Ferramentas de Prática & Fixação
          </h3>
        </div>
        <span style="font-size: 0.84rem; color: var(--tx-muted);">
          Acesso direto aos recursos metodológicos
        </span>
      </div>

      <div class="action-tiles-grid">
        <div class="action-tile" onclick="navigate('#/arvore')">
          <div class="action-tile-icon">${SVG.tree}</div>
          <h4>Árvore de Recursos Criminais</h4>
          <small>Fluxograma interativo com decisões do juízo e cabimento recursal passo a passo</small>
        </div>

        <div class="action-tile" onclick="navigate('#/mnemonicos')">
          <div class="action-tile-icon">${SVG.brain}</div>
          <h4>Mural de Macetes & Mnemônicos</h4>
          <small>Gatilhos mnemônicos, súmulas vinculantes e macetes para provas da OAB e faculdade</small>
        </div>

        <div class="action-tile" onclick="navigate('#/flashcards')">
          <div class="action-tile-icon">${SVG.cards}</div>
          <h4>Flashcards 3D</h4>
          <small>${dominadosCards}/${FLASHCARDS.length} cartões dominados com animação de flip 3D e repetição espaçada</small>
        </div>

        <div class="action-tile" onclick="navigate('#/questoes')">
          <div class="action-tile-icon">${SVG.quiz}</div>
          <h4>Simulado Estilo OAB</h4>
          <small>${acertosQuiz}/${QUESTOES.length} acertos registrados com resolução justificada artigo por artigo</small>
        </div>

        <div class="action-tile" onclick="navigate('#/revisao')">
          <div class="action-tile-icon">${SVG.star}</div>
          <h4>Caderno de Dúvidas Salvas</h4>
          <small>${duvidasCount} tópicos marcados durante a leitura para revisão focada e aprofundamento</small>
        </div>
      </div>
    </div>

    <!-- [PLANEJADOR SEMANAL & STATUS DO SISTEMA] -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
      <!-- Planejador Semanal -->
      <div class="module-card" style="padding: 1.6rem 1.8rem; cursor: default;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; color: #ffffff; margin: 0;">
            Ritmo Semanal de Estudos
          </h4>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--tx-faint); text-transform: uppercase;">
            Cronograma Ativo
          </span>
        </div>
        <p style="font-size: 0.86rem; color: var(--tx-muted); margin: 0 0 1rem;">
          Sugestão de distribuição temática para manter constância sem sobrecarga:
        </p>

        <div class="week-days-row">
          ${diasSemana.map(d => {
            const isHoje = d.diaIdx === hojeIdx;
            return `
              <div class="week-day-pill ${isHoje ? 'today' : ''}">
                <span class="week-day-name">${d.sigla}</span>
                <span class="week-day-num">${isHoje ? 'Hoje' : '•'}</span>
                <span class="week-day-task">${d.meta}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div style="font-size: 0.82rem; color: var(--tx-muted); background: var(--bg-surface-elevated); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--bd);">
          <strong>Dica de Estudo:</strong> Complete pelo menos 1 tópico esquematizado e resolva 3 flashcards ao dia para ativar o efeito de repetição espaçada.
        </div>
      </div>

      <!-- Diagnóstico do Ambiente Acadêmico -->
      <div class="module-card" style="padding: 1.6rem 1.8rem; cursor: default;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <h4 style="font-size: 1.15rem; font-weight: 800; color: #ffffff; margin: 0;">
            Diagnóstico do Ambiente Acadêmico
          </h4>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--perf-good); text-transform: uppercase;">
            100% Operacional
          </span>
        </div>
        <p style="font-size: 0.86rem; color: var(--tx-muted); margin: 0 0 1rem;">
          Recursos e módulos carregados e disponíveis para estudo:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div class="feed-item">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="color: var(--perf-good); font-weight: bold;">✓</span>
              <span><strong>Base Curricular Completa:</strong> ${numMaterias} disciplinas esquematizadas com fundamentação em leis, súmulas e jurisprudência.</span>
            </div>
            <span style="color: var(--tx-faint); font-size: 0.8rem;">ativo</span>
          </div>

          <div class="feed-item">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="color: var(--perf-good); font-weight: bold;">✓</span>
              <span><strong>Árvore de Recursos Criminais:</strong> Fluxo com 100% dos nós navegáveis e prazos processuais mapeados.</span>
            </div>
            <span style="color: var(--tx-faint); font-size: 0.8rem;">integrado</span>
          </div>

          <div class="feed-item">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="color: var(--perf-good); font-weight: bold;">✓</span>
              <span><strong>Simulador OAB & Flashcards:</strong> Questões com comentários artigo por artigo e cartões 3D com memorização espaçada.</span>
            </div>
            <span style="color: var(--tx-faint); font-size: 0.8rem;">pronto</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Inicializa o arrastar com mouse no carrossel da home
  setTimeout(() => {
    if (typeof initDraggableCarousel === 'function') {
      initDraggableCarousel('home');
    }
  }, 30);
}
window.renderHome = renderHome;
