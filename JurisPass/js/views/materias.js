/* ==========================================================================
   JURISPASS - CATÁLOGO GERAL DE MATÉRIAS, MÓDULOS E VISUALIZADOR DE AULAS
   Arquitetura Modular • Carrossel Arrastável com Mouse • Zero Sobreposição
   ========================================================================== */

let carouselHasDragged = false;

/**
 * Função utilitária para extração limpa de títulos de seções
 * Lida com qualquer separador (—, –, -, :) evitando cortes indevidos e sobreposição
 */
function getSecaoInfo(sec, index) {
  const raw = (sec && sec.titulo) ? sec.titulo : `Seção ${index + 1}`;
  const normalized = raw.replace(/[\u2013\u2014]/g, '-');
  let tag = `${index + 1}ª Seção`;
  let name = raw;

  if (normalized.includes('-')) {
    const parts = normalized.split('-');
    tag = parts[0].trim();
    name = parts.slice(1).join('-').trim();
  } else if (raw.includes(':')) {
    const parts = raw.split(':');
    tag = parts[0].trim();
    name = parts.slice(1).join(':').trim();
  }

  // Remove parênteses com itens no subtítulo para ficar mais limpo nos cards
  const shortName = name.replace(/\(Itens?[^)]*\)/gi, '').trim();

  return {
    tag: tag || `Seção ${index + 1}`,
    name: name,
    shortName: shortName || name,
    full: raw
  };
}
window.getSecaoInfo = getSecaoInfo;

/**
 * Manipulador de clique dos cards do carrossel:
 * Impede que o clique seja disparado se o usuário estava arrastando o carrossel com o mouse
 */
function handleCarouselCardClick(e, route) {
  if (carouselHasDragged) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  navigate(route);
}
window.handleCarouselCardClick = handleCarouselCardClick;

/**
 * Gerador de HTML do Carrossel de Disciplinas Arrastável com Mouse
 */
function renderDisciplinasCarouselHTML(carouselIdPrefix = 'home') {
  const keys = Object.keys(MATERIAS_DIREITO);
  const total = keys.length;

  return `
    <div class="disciplinas-carousel-container" id="${carouselIdPrefix}-carousel-container">
      <div class="carousel-header-bar">
        <div class="carousel-header-left">
          <div class="carousel-kicker">Catálogo Esquematizado</div>
          <h2 class="carousel-title">Disciplinas do Curso (${total} Áreas)</h2>
          <p class="carousel-subtitle">Arraste para os lados com o mouse ou utilize as setas para navegar entre as matérias sem precisar rolar para baixo.</p>
        </div>
        <div class="carousel-controls-cluster">
          <span class="carousel-counter-pill" id="${carouselIdPrefix}-carousel-counter">1 de ${total}</span>
          <button type="button" class="carousel-arrow-btn" onclick="scrollCarousel('${carouselIdPrefix}', -1)" aria-label="Disciplina Anterior" title="Anterior">‹</button>
          <button type="button" class="carousel-arrow-btn" onclick="scrollCarousel('${carouselIdPrefix}', 1)" aria-label="Próxima Disciplina" title="Próxima">›</button>
        </div>
      </div>

      <!-- Track horizontal com suporte a Drag com Mouse -->
      <div class="disciplinas-carousel-track" id="${carouselIdPrefix}-carousel-track">
        ${keys.map((key, idx) => {
          const mat = MATERIAS_DIREITO[key];
          const prog = getProgressoMateria(key);
          const pct = Math.round(prog * 100);
          const modCount = mat.modulos ? mat.modulos.length : 0;
          let topCount = 0;
          if (mat.modulos) {
            mat.modulos.forEach(m => m.secoes && m.secoes.forEach(s => topCount += s.topicos.length));
          }
          const numFormatted = String(idx + 1).padStart(2, '0');

          return `
            <div class="carousel-discipline-card" onclick="handleCarouselCardClick(event, '#/materia/${key}')" data-card-idx="${idx}">
              <div class="carousel-card-top">
                <span class="carousel-card-index">ÁREA ${numFormatted}</span>
                <span class="carousel-card-lawtag">${mat.artigos.split('|')[0].trim()}</span>
              </div>
              
              <div class="carousel-card-icon">
                ${mat.iconSvg}
              </div>

              <h3 class="carousel-card-title">${mat.nome}</h3>
              <div class="carousel-card-subtitle">${mat.subtitulo}</div>
              <p class="carousel-card-desc">${mat.descricao}</p>

              <div class="carousel-card-stats">
                <span class="carousel-stat-pill">${modCount} Módulos</span>
                <span class="carousel-stat-pill">${topCount} Tópicos Chave</span>
                ${(key === 'penal' || key === 'processo-penal') ? '<span class="carousel-stat-pill" style="color:var(--c-accent); font-weight:700">Árvore & Macetes</span>' : ''}
              </div>

              <div class="carousel-card-footer">
                <div style="flex:1">
                  <div class="ios-progress-track" style="margin-right:0.6rem">
                    <div class="ios-progress-fill" style="width: ${pct}%"></div>
                  </div>
                  <div style="font-size:0.78rem; color:var(--tx-muted); margin-top:0.25rem">
                    ${pct}% concluído
                  </div>
                </div>
                <button type="button" class="carousel-card-btn">
                  Acessar →
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="carousel-footer-bar">
        <div class="carousel-dots-row" id="${carouselIdPrefix}-carousel-dots">
          ${keys.map((_, i) => `
            <button type="button" class="carousel-dot ${i === 0 ? 'active' : ''}" 
                    onclick="scrollCarouselTo('${carouselIdPrefix}', ${i})" 
                    aria-label="Ir para disciplina ${i + 1}"></button>
          `).join('')}
        </div>
        <div class="carousel-drag-hint">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          <span>Clique e arraste com o mouse para navegar</span>
        </div>
      </div>
    </div>
  `;
}
window.renderDisciplinasCarouselHTML = renderDisciplinasCarouselHTML;

/**
 * Inicializador da funcionalidade de Drag com o Mouse e Touch
 */
function initDraggableCarousel(prefix) {
  const track = document.getElementById(`${prefix}-carousel-track`);
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    carouselHasDragged = false;
    track.classList.add('is-dragging');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('is-dragging');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('is-dragging');
    setTimeout(() => { carouselHasDragged = false; }, 60);
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      carouselHasDragged = true;
    }
    track.scrollLeft = scrollLeft - walk;
  });

  function updateCarouselState() {
    const cards = track.querySelectorAll('.carousel-discipline-card');
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 22;
    const activeIdx = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / cardWidth)));
    
    const counter = document.getElementById(`${prefix}-carousel-counter`);
    if (counter) counter.textContent = `${activeIdx + 1} de ${cards.length}`;

    const dots = document.getElementById(`${prefix}-carousel-dots`);
    if (dots) {
      dots.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === activeIdx);
      });
    }
  }

  track.addEventListener('scroll', updateCarouselState, { passive: true });
  updateCarouselState();
}
window.initDraggableCarousel = initDraggableCarousel;

function scrollCarousel(prefix, direction) {
  const track = document.getElementById(`${prefix}-carousel-track`);
  if (!track) return;
  const card = track.querySelector('.carousel-discipline-card');
  const amount = card ? (card.offsetWidth + 22) : 360;
  track.scrollBy({ left: direction * amount, behavior: 'smooth' });
}
window.scrollCarousel = scrollCarousel;

function scrollCarouselTo(prefix, index) {
  const track = document.getElementById(`${prefix}-carousel-track`);
  if (!track) return;
  const cards = track.querySelectorAll('.carousel-discipline-card');
  if (cards[index]) {
    cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
}
window.scrollCarouselTo = scrollCarouselTo;

/* ==========================================================================
   TELA PRINCIPAL: CATÁLOGO GERAL DE DISCIPLINAS
   ========================================================================== */
function renderMaterias() {
  updateSidebarUI();
  const totTopicos = getTotalTopicos();
  const vistos = getTopicosVistosCount();
  const pctGlobal = totTopicos > 0 ? Math.round((vistos / totTopicos) * 100) : 0;
  const numMaterias = Object.keys(MATERIAS_DIREITO).length;
  const numModulos = Object.values(MATERIAS_DIREITO).reduce((acc, m) => acc + (m.modulos ? m.modulos.length : 0), 0);

  const container = getViewContainer('view-materias');
  container.innerHTML = `
    <!-- Header da Seção de Matérias -->
    <div class="view-header-block" style="margin-bottom: 2rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:0.75rem">
        <div>
          <div class="status-island" style="margin-bottom:0.6rem">
            <span class="status-badge" style="background:var(--c-accent-glow); color:var(--c-accent)">Matérias de Direito</span>
            <span><strong>${numMaterias} Disciplinas • ${numModulos} Módulos Esquematizados</strong></span>
            <span style="opacity:0.4">•</span>
            <span>${pctGlobal}% concluído global</span>
          </div>
          <h1 style="font-size:clamp(1.8rem, 3.8vw, 2.4rem); font-weight:800; margin:0">Catálogo de Disciplinas</h1>
          <p style="font-size:0.95rem; color:var(--tx-muted); margin:0.35rem 0 0; max-width:85ch">
            Selecione uma disciplina jurídica para estudar tópicos esquematizados, fundamentos legais, doutrina contemporânea e exemplos práticos.
          </p>
        </div>
        <button class="btn-topic-action" style="padding:0.55rem 1.25rem; font-size:0.86rem" onclick="navigate('#/revisao')">
          ${SVG.star} Ver Minhas Dúvidas
        </button>
      </div>
    </div>

    <!-- Carrossel Arrastável das Disciplinas -->
    ${renderDisciplinasCarouselHTML('catalogo')}

    <!-- Grade Completa de Apoio -->
    <div style="margin-top: 2rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; flex-wrap:wrap; gap:0.5rem">
        <h3 style="font-size:1.18rem; margin:0">Visão Geral de Todas as Áreas</h3>
        <span style="font-size:0.82rem; color:var(--tx-faint)">Acesso rápido em grade</span>
      </div>
      <div class="bento-grid">
        ${Object.keys(MATERIAS_DIREITO).map((key, idx) => {
          const mat = MATERIAS_DIREITO[key];
          const prog = getProgressoMateria(key);
          const pct = Math.round(prog * 100);
          const modCount = mat.modulos ? mat.modulos.length : 0;
          let topCount = 0;
          if (mat.modulos) {
            mat.modulos.forEach(m => m.secoes && m.secoes.forEach(s => topCount += s.topicos.length));
          }
          const isPenal = (key === 'penal' || key === 'processo-penal');

          return `
            <div class="module-card col-6" onclick="navigate('#/materia/${key}')">
              <div class="card-top-row">
                <span class="card-pill-tag">${mat.artigos.split('|')[0].trim()}</span>
                <div class="card-icon-indicator">${mat.iconSvg}</div>
              </div>
              <h3 style="font-size:1.22rem; margin-bottom:0.3rem">${mat.nome}</h3>
              <div style="font-size:0.83rem; color:var(--tx-muted); margin-bottom:0.6rem; font-weight:600">${mat.subtitulo}</div>
              <p class="card-desc" style="-webkit-line-clamp:2">${mat.descricao}</p>

              <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.1rem">
                <span class="carousel-stat-pill">${modCount} Módulos</span>
                <span class="carousel-stat-pill">${topCount} Tópicos Chave</span>
                ${isPenal ? '<span class="carousel-stat-pill" style="color:var(--c-accent); font-weight:700">Árvore & Macetes</span>' : ''}
              </div>

              <div class="module-card-footer">
                <div class="ios-progress-track">
                  <div class="ios-progress-fill" style="width: ${pct}%"></div>
                </div>
                <span style="color:var(--tx-muted); font-size:0.82rem; margin-right:0.75rem">${pct}% concluído</span>
                <button class="btn-fc-flip" style="height:34px; padding:0 1rem; font-size:0.82rem; pointer-events:none">
                  Acessar Módulos →
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  setTimeout(() => initDraggableCarousel('catalogo'), 30);
}
window.renderMaterias = renderMaterias;

/* ==========================================================================
   TELA DE MÓDULOS DE UMA MATÉRIA ESPECÍFICA (COM DISTINÇÃO CLARA DE QUAL É QUAL)
   ========================================================================== */
function renderMateriaModulos(materiaKey, activeSubTab = 'modulos') {
  updateSidebarUI();
  const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
  const progMat = getProgressoMateria(materiaKey);
  const pctMat = Math.round(progMat * 100);
  const isPenal = (materiaKey === 'penal' || materiaKey === 'processo-penal');

  if (activeSubTab === 'arvore') {
    renderArvore(materiaKey);
    return;
  }
  if (activeSubTab === 'macetes' || activeSubTab === 'mnemonicos') {
    renderMnemonicos(materiaKey);
    return;
  }

  const container = getViewContainer('view-materia-modulos');
  container.innerHTML = `
    <!-- Breadcrumb e Voltar -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:180px; padding:0.35rem 0.9rem; font-size:0.84rem" onclick="navigate('#/materias')">
          ${SVG.arrowLeft} Todas as Matérias
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">${mat.nome}</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted)">
        Progresso em ${mat.nome.split(' ')[0]}: <strong style="color:var(--c-accent)">${pctMat}%</strong>
      </div>
    </div>

    <!-- Cabeçalho da Matéria -->
    <div class="view-header-block" style="margin-bottom: 1.8rem;">
      <div style="display:flex; align-items:center; gap:0.85rem; margin-bottom:0.5rem">
        <div class="card-icon-indicator" style="width:46px; height:46px">
          ${mat.iconSvg}
        </div>
        <div>
          <h2 style="font-size:clamp(1.7rem, 3.2vw, 2.2rem); margin:0">${mat.nome}</h2>
        </div>
      </div>
      <p style="font-size:1.02rem; color:var(--tx-muted); max-width:85ch; margin-bottom:0.75rem">${mat.subtitulo}</p>
      <div class="status-badge" style="background:var(--c-accent-glow); color:var(--c-accent)">
        ${mat.artigos}
      </div>
    </div>

    <!-- Abas Sub-nav da Disciplina (Árvore de Recursos e Macetes em Direito Penal) -->
    ${isPenal ? `
      <div style="display:flex; gap:0.6rem; margin-bottom:1.8rem; border-bottom:1px solid var(--bd); padding-bottom:0.75rem; flex-wrap:wrap">
        <button class="btn-segmented active" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/materia/${materiaKey}')">
          ${SVG.modules} Módulos & Aulas (${mat.modulos ? mat.modulos.length : 0})
        </button>
        <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/arvore')">
          ${SVG.tree} Árvore de Recursos Criminais
        </button>
        <button class="btn-segmented" style="height:38px; padding:0 1.2rem; font-size:0.88rem; display:flex; align-items:center; gap:0.5rem" onclick="navigate('#/mnemonicos')">
          ${SVG.brain} Mural de Macetes & Mnemônicos
        </button>
      </div>
    ` : ''}

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; flex-wrap:wrap; gap:0.5rem">
      <div>
        <h3 style="font-size:1.25rem; margin:0">Módulos de Estudo (${mat.modulos ? mat.modulos.length : 0} Módulos)</h3>
        <p style="font-size:0.85rem; color:var(--tx-muted); margin:0.2rem 0 0">Identifique facilmente o módulo desejado e acesse o conteúdo esquematizado</p>
      </div>
      <span style="font-size:0.82rem; color:var(--tx-faint)">Selecione para abrir as aulas</span>
    </div>

    <!-- Grid de Módulos da Disciplina (Com Alta Clareza Visual de "Qual é Qual") -->
    <div class="bento-grid">
      ${mat.modulos ? mat.modulos.map((m, idx) => {
        const prog = getProgressoModulo(materiaKey, idx);
        const pct = Math.round(prog * 100);
        let topCount = 0;
        if (m.secoes) m.secoes.forEach(s => topCount += s.topicos.length);
        const secoesCount = m.secoes ? m.secoes.length : 0;
        const numFormatted = String(idx + 1).padStart(2, '0');

        const statusClass = pct === 100 ? 'concluido' : (pct > 0 ? 'em-andamento' : '');
        const statusLabel = pct === 100 ? '✓ Módulo Concluído' : (pct > 0 ? `${pct}% Estudado` : 'Não Iniciado');

        // Pré-visualização resumida das seções para saber exatamente o que tem dentro
        const secoesPreview = m.secoes ? m.secoes.map((s, si) => {
          const info = getSecaoInfo(s, si);
          return info.tag;
        }).join(' • ') : '';

        return `
          <div class="module-card col-6" onclick="navigate('#/mod/${materiaKey}/${idx}')">
            <!-- Linha Superior com Identificador Numérico Forte -->
            <div class="modulo-header-row">
              <span class="modulo-index-badge">Módulo ${numFormatted}</span>
              <span class="modulo-status-pill ${statusClass}">${statusLabel}</span>
            </div>

            <div class="card-top-row" style="margin-bottom:0.75rem">
              <span class="card-pill-tag">${m.artigos.split('|')[0].trim()}</span>
              <div class="card-icon-indicator">${m.iconSvg || mat.iconSvg}</div>
            </div>

            <h3 style="font-size:1.28rem; font-weight:800; margin-bottom:0.35rem">${m.nome}</h3>
            <div style="font-size:0.85rem; color:var(--tx-muted); margin-bottom:0.75rem; font-weight:600">
              ${m.subtitulo || m.resumo || ''}
            </div>

            <!-- Resumo das Seções Inclusas -->
            <div style="font-size:0.8rem; color:var(--tx-muted); margin-bottom:0.95rem; background:var(--bg-surface-elevated); padding:0.55rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--bd)">
              <strong>Seções do Módulo:</strong> ${secoesPreview || `${secoesCount} seções`}
            </div>

            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.15rem">
              <span class="carousel-stat-pill">${secoesCount} Seções</span>
              <span class="carousel-stat-pill">${topCount} Aulas / Tópicos</span>
            </div>

            <div class="module-card-footer">
              <div class="ios-progress-track">
                <div class="ios-progress-fill" style="width: ${pct}%"></div>
              </div>
              <span style="color:var(--tx-muted); margin-right:0.75rem; font-size:0.82rem">${pct}% concluído</span>
              <button class="btn-fc-flip" style="height:34px; padding:0 1rem; font-size:0.82rem; pointer-events:none">
                Estudar Módulo →
              </button>
            </div>
          </div>
        `;
      }).join('') : '<p>Nenhum módulo cadastrado nesta matéria.</p>'}
    </div>
  `;
}
window.renderMateriaModulos = renderMateriaModulos;

/* ==========================================================================
   TELA DE MÓDULO INDIVIDUAL (COM SELETOR DE SEÇÕES TOTALMENTE REFORMULADO)
   Garante 100% de legibilidade e elimina qualquer sobreposição de palavras
   ========================================================================== */
function renderModulo(materiaKey, modIdx) {
  if (typeof materiaKey === 'number' && modIdx === undefined) {
    modIdx = materiaKey;
    materiaKey = 'processo-penal';
  }
  const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
  if (!mat || !mat.modulos || !mat.modulos[modIdx]) {
    navigate('#/materias');
    return;
  }
  const m = mat.modulos[modIdx];
  const prog = getProgressoModulo(materiaKey, modIdx);
  const pct = Math.round(prog * 100);

  const container = getViewContainer('view-modulo-aula');
  container.innerHTML = `
    <!-- Breadcrumb e Voltar -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.8rem">
      <div style="display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--tx-muted)">
        <button class="btn-topic-action" style="max-width:210px; padding:0.35rem 0.95rem; font-size:0.84rem" onclick="navigate('#/materia/${materiaKey}')">
          ${SVG.arrowLeft} Voltar para ${mat.nome.split(' ')[0]} ${mat.nome.split(' ')[1] || ''}
        </button>
        <span style="opacity:0.4">/</span>
        <span style="color:var(--tx-main); font-weight:700">${m.nome}</span>
      </div>
      <div style="font-size:0.85rem; color:var(--tx-muted)">
        Progresso do Módulo: <strong style="color:var(--c-accent)">${pct}%</strong>
      </div>
    </div>

    <!-- Cabeçalho do Módulo -->
    <div class="view-header-block" style="margin-bottom: 1.8rem;">
      <div style="display:flex; align-items:center; gap:0.85rem; margin-bottom:0.5rem">
        <div class="card-icon-indicator" style="width:44px; height:44px">
          ${m.iconSvg || mat.iconSvg}
        </div>
        <div>
          <h2 style="font-size:clamp(1.7rem, 3.2vw, 2.2rem); margin:0">${m.nome}</h2>
        </div>
      </div>
      <p style="font-size:1.02rem; color:var(--tx-muted); max-width:85ch; margin-bottom:0.75rem">${m.subtitulo || m.resumo || ''}</p>
      <div class="status-badge" style="background:var(--c-accent-glow); color:var(--c-accent)">
        ${m.artigos}
      </div>
    </div>

    <!-- Pilares e Fundamentos se existirem -->
    ${m.pilares && m.pilares.length ? `
      <h4 style="margin-bottom: 0.85rem; font-size:1.1rem">Pilares e Fundamentos Doutrinários</h4>
      <div class="bento-grid" style="margin-bottom:2rem">
        ${m.pilares.map(p => `
          <div class="module-card col-6" style="padding:1.3rem; cursor:default">
            <h4 style="color:var(--c-accent); margin-bottom:0.35rem; font-size:1.05rem">${p.t}</h4>
            <p style="font-size:0.88rem; margin:0; line-height:1.6">${p.d}</p>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <!-- Novo Seletor de Seções (Zero Sobreposição, Totalmente Legível) -->
    ${m.secoes && m.secoes.length > 1 ? `
      <div class="secao-selector-wrapper">
        <div class="secao-selector-header">
          <span class="secao-selector-label">
            ${SVG.book} Seções de Estudo do Módulo (${m.secoes.length})
          </span>
          <span class="secao-selector-hint">Clique em uma seção para alternar o conteúdo abaixo</span>
        </div>
        <div class="secao-tabs-bar" role="tablist">
          ${m.secoes.map((sec, si) => {
            const info = getSecaoInfo(sec, si);
            const topicosCount = sec.topicos ? sec.topicos.length : 0;
            const readCount = sec.topicos ? sec.topicos.filter(t => STATE.vistos[t.id]).length : 0;
            const pctSec = topicosCount > 0 ? Math.round((readCount / topicosCount) * 100) : 0;
            return `
              <button type="button" class="secao-tab-card ${si === 0 ? 'active' : ''}" 
                      id="secao-tab-${si}" 
                      onclick="selectSecao('${materiaKey}', ${modIdx}, ${si})">
                <div class="secao-tab-top">
                  <span class="secao-tab-number">${info.tag}</span>
                  <span class="secao-tab-badge-topics">${topicosCount} tópicos • ${pctSec}%</span>
                </div>
                <div class="secao-tab-title" title="${info.name}">
                  ${info.shortName}
                </div>
                <div class="secao-tab-progress">
                  <div class="secao-tab-progress-bar" style="width: ${pctSec}%"></div>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Banner da Seção Ativa (Exibe o Título Completo sem cortes) -->
    <div id="secao-active-banner" class="secao-active-banner"></div>

    <!-- Container de Tópicos do Módulo -->
    <div id="secao-container" class="bento-grid" style="margin-top:1.5rem"></div>
  `;

  selectSecao(materiaKey, modIdx, 0);
}
window.renderModulo = renderModulo;

function selectSecao(materiaKey, modIdx, secIdx) {
  if (typeof materiaKey === 'number') {
    secIdx = modIdx;
    modIdx = materiaKey;
    materiaKey = 'processo-penal';
  }

  // Alterna classe active nos novos cards de aba
  document.querySelectorAll('.secao-tab-card').forEach((b, i) => b.classList.toggle('active', i === secIdx));
  // Compatibilidade com segmented-btn legados
  document.querySelectorAll('.segmented-btn').forEach((b, i) => b.classList.toggle('active', i === secIdx));

  const mat = MATERIAS_DIREITO[materiaKey] || MATERIAS_DIREITO['penal'];
  if (!mat || !mat.modulos || !mat.modulos[modIdx] || !mat.modulos[modIdx].secoes[secIdx]) return;
  const m = mat.modulos[modIdx];
  const sec = m.secoes[secIdx];
  const info = getSecaoInfo(sec, secIdx);

  // Atualiza banner da seção ativa
  const banner = document.getElementById('secao-active-banner');
  if (banner) {
    const topicosCount = sec.topicos ? sec.topicos.length : 0;
    const readCount = sec.topicos ? sec.topicos.filter(t => STATE.vistos[t.id]).length : 0;
    const pctSec = topicosCount > 0 ? Math.round((readCount / topicosCount) * 100) : 0;

    banner.innerHTML = `
      <div class="secao-active-tag">${info.tag} de ${m.secoes ? m.secoes.length : 1}</div>
      <h3 class="secao-active-title">${sec.titulo}</h3>
      <div class="secao-active-meta">
        <span><strong>${topicosCount}</strong> aulas esquematizadas</span>
        <span style="opacity:0.4">•</span>
        <span style="color:${readCount === topicosCount && topicosCount > 0 ? 'var(--c-emerald)' : 'var(--tx-muted)'}">
          <strong>${readCount} de ${topicosCount}</strong> concluídos (${pctSec}%)
        </span>
        <span style="opacity:0.4">•</span>
        <span>Fundamentação legal e jurisprudencial com exemplos práticos</span>
      </div>
    `;
  }

  const cont = document.getElementById('secao-container');
  if (!cont) return;

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
            ${visto ? `${SVG.check} Estudado` : '○ Marcar como Lido'}
          </button>
          <button class="btn-topic-action ${duvida ? 'doubted' : ''}" onclick="toggleDuvida('${top.id}')">
            ${duvida ? `${SVG.star} Em Dúvida` : `${SVG.star} Salvar Dúvida`}
          </button>
        </div>
      </div>
    `;
  }).join('');
}
window.selectSecao = selectSecao;

window.toggleVisto = (id) => {
  STATE.vistos[id] = !STATE.vistos[id];
  saveState();
  playBeep(STATE.vistos[id] ? 600 : 380, 'sine', 0.08);
  if (STATE.vistos[id]) {
    launchConfetti();
    showToast('Tópico marcado como concluído!', 'success');
  }
  const card = document.getElementById('card-' + id);
  if (card) {
    const btn = card.querySelectorAll('.btn-topic-action')[0];
    if (btn) {
      btn.classList.toggle('checked', STATE.vistos[id]);
      btn.innerHTML = STATE.vistos[id] ? `${SVG.check} Estudado` : '○ Marcar como Lido';
    }
  }
};

window.toggleDuvida = (id) => {
  STATE.duvidas[id] = !STATE.duvidas[id];
  saveState();
  playBeep(STATE.duvidas[id] ? 520 : 360, 'sine', 0.06);
  showToast(STATE.duvidas[id] ? 'Dúvida salva no seu Caderno de Revisão!' : 'Dúvida removida do Caderno de Revisão.', 'info');
  const card = document.getElementById('card-' + id);
  if (card) {
    const btn = card.querySelectorAll('.btn-topic-action')[1];
    if (btn) {
      btn.classList.toggle('doubted', STATE.duvidas[id]);
      btn.innerHTML = STATE.duvidas[id] ? `${SVG.star} Em Dúvida` : `${SVG.star} Salvar Dúvida`;
    }
  }
};
