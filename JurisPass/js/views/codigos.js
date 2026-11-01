    /* ==========================================================================
       ABA DE CÓDIGOS (EM ATUALIZAÇÃO PARA INTEGRAÇÃO FUTURA)
       ========================================================================== */
    function renderCodigos() {
      updateSidebarUI();
      const codigosPreview = [
        {
          sigla: 'CPP',
          titulo: 'Código de Processo Penal',
          lei: 'Decreto-Lei nº 3.689/1941',
          artigos: '811 Artigos Esquematizados',
          cor: 'var(--c-blue)',
          corGlow: 'var(--c-blue-glow)',
          desc: 'Do Inquérito à Sentença, Rito do Júri (Arts. 406 a 497), Nulidades (Arts. 563 a 573) e Recursos em Espécie (RESE, Apelação, Carta Testemunhável e Embargos).'
        },
        {
          sigla: 'CP',
          titulo: 'Código Penal',
          lei: 'Decreto-Lei nº 2.848/1940',
          artigos: '361 Artigos & Qualificadoras',
          cor: 'var(--c-purple)',
          corGlow: 'var(--c-purple-glow)',
          desc: 'Parte Geral (tentativa, culpabilidade, excludentes de ilicitude) e Parte Especial: Homicídio, Feminicídio, Infanticídio, Aborto e crimes conexos ao Júri.'
        },
        {
          sigla: 'CF/88',
          titulo: 'Constituição Federal de 1988',
          lei: 'Garantias Processuais Fundamentais',
          artigos: 'Art. 5º, XXXVIII e Art. 93, IX',
          cor: 'var(--c-teal)',
          corGlow: 'var(--c-teal-glow)',
          desc: 'Plenitude de Defesa, Soberania dos Veredictos, Sigilo das Votações, Ampla Defesa, Motivação das Decisões e Inadmissibilidade de Provas Ilícitas.'
        },
        {
          sigla: 'CPC',
          titulo: 'Código de Processo Civil',
          lei: 'Lei nº 13.105/2015',
          artigos: '1.072 Artigos Esquematizados',
          cor: 'var(--c-emerald)',
          corGlow: 'var(--c-emerald-glow)',
          desc: 'Normas fundamentais, petição inicial, tutelas provisórias, provas, sentença, recursos, Teoria Geral da Execução, Cumprimento de Sentença (Art. 523), Penhora e Execução de Título Extrajudicial.'
        },
        {
          sigla: 'LRE',
          titulo: 'Lei de Recuperação de Empresas e Falência',
          lei: 'Lei nº 11.101/2005 (Lei nº 14.112/20)',
          artigos: '201 Artigos Atualizados',
          cor: 'var(--c-teal)',
          corGlow: 'var(--c-teal-glow)',
          desc: 'Princípio da preservação da empresa, Stay Period (180 dias), trava bancária (Art. 49 §3º), Administrador Judicial, AGC, Cram Down, procedimento do PRJ, Plano Especial e Processo de Falência.'
        },
        {
          sigla: 'STF/STJ',
          titulo: 'Súmulas Vinculantes & Temas de Repercussão Geral',
          lei: 'Jurisprudência Consolidada OAB',
          artigos: 'Súmulas 156, 160, 523, 705, 712...',
          cor: 'var(--c-amber)',
          corGlow: 'var(--c-amber-glow)',
          desc: 'Tema 1068 STF (execução imediata da pena no Júri), Súmula 705 STF (recurso da defesa prevalece sobre renúncia do réu) e Súmula Vinculante 11 (uso de algemas).'
        }
      ];

      app.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <div class="status-island">
            <span class="status-badge" style="background:var(--c-amber-glow); color:var(--c-amber)">Em Atualização</span>
            <span>Integração Técnica em Andamento</span>
          </div>
          <h2>Códigos & Legislação Digital</h2>
          <p style="margin-top:0.25rem">Estamos integrando o módulo de Vade Mecum Digital com busca inteligente e artigos esquematizados.</p>
        </div>

        <!-- Banner de Atualização em Destaque -->
        <div style="background:linear-gradient(135deg, rgba(217, 119, 6, 0.12), rgba(37, 99, 235, 0.14)); border:1px solid var(--c-amber); border-radius:var(--radius-lg); padding:1.75rem; margin-bottom:2rem; box-shadow:0 0 30px -10px var(--c-amber-glow)">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem">
            <div style="width:38px; height:38px; border-radius:var(--radius-sm); background:var(--c-amber); color:#fff; display:flex; align-items:center; justify-content:center">
              ${SVG.code}
            </div>
            <h3 style="margin:0">Módulo em Fase de Atualização & Integração</h3>
          </div>
          <p style="color:var(--tx-main); line-height:1.6; margin-bottom:1.1rem; max-width:85ch">
            Esta aba está sendo preparada para que você possa consultar e copiar qualquer artigo do CPP, CP ou CF/88 diretamente conectado aos exercícios, simulados e flashcards da plataforma. Assim que a sincronização for finalizada, o acesso será liberado automaticamente no seu plano.
          </p>
          <div style="display:flex; gap:0.85rem; flex-wrap:wrap">
            <button class="btn-fc-flip" style="height:42px; padding:0 1.4rem; font-size:0.88rem; background:var(--c-amber)" onclick="notificarLancamentoCodigos()">
              ✓ Quero ser avisado no lançamento
            </button>
            <button class="btn-topic-action" style="max-width:210px" onclick="navigate('#/')">
              ${SVG.arrowLeft} Voltar para Visão Geral
            </button>
          </div>
        </div>

        <h4 style="margin-bottom:1rem">Prévia dos Códigos em Sincronização:</h4>
        <div class="bento-grid">
          ${codigosPreview.map(c => `
            <div class="module-card col-6" style="--card-color:${c.cor}; --card-glow:${c.corGlow}; cursor:default">
              <div class="card-top-row">
                <span class="card-pill-tag" style="background:${c.corGlow}; color:${c.cor}">${c.sigla}</span>
                <span style="font-size:0.74rem; font-weight:700; color:var(--c-amber); background:var(--c-amber-glow); padding:0.25rem 0.65rem; border-radius:var(--radius-pill)">
                  Sincronizando...
                </span>
              </div>
              <h3>${c.titulo}</h3>
              <div style="font-size:0.82rem; font-family:'JetBrains Mono', monospace; color:var(--tx-faint); margin-bottom:0.6rem">${c.lei} • ${c.artigos}</div>
              <p class="card-desc">${c.desc}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.85rem; border-top:0.5px solid var(--bd); font-size:0.82rem; color:var(--tx-muted)">
                <span>Status: Em breve na próxima versão</span>
                <span style="color:${c.cor}; font-weight:700">Versão 2.1</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    window.notificarLancamentoCodigos = () => {
      soundSuccess();
      launchConfetti();
      alert('Perfeito! Seu interesse foi registrado. Você receberá uma notificação prioritária assim que os Códigos forem integrados.');
    };

