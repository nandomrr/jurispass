    /* ==========================================================================
       ABA DE PLANOS: MINHA ASSINATURA & GESTÃO DO PLANO ATUAL
       (EXCLUSIVO DO ALUNO — SEM OPÇÃO DE UPGRADE OU DOWNGRADE)
       ========================================================================== */
    let modalCancelamentoAberto = false;

    function renderPlanos() {
      updateSidebarUI();
      const user = STATE.usuario || { nome: 'Estudante', plano: 'Pro', diasRestantes: 30, email: 'aluno@jurispass.com.br' };
      const planoAtual = user.plano || 'Pro';
      const isMaster = planoAtual === 'Master';
      const isPro = planoAtual === 'Pro';
      const orderId = user.orderId || 'KW-CONFIRMADO-01';
      const diasRestantes = (user.diasRestantes !== undefined) ? user.diasRestantes : 30;
      const totalRespondidas = Object.keys(STATE.respostasQuiz || {}).length;
      const limite = isMaster ? 'Ilimitado' : ((user && user.limiteQuestoes) || 1000);
      const dataAtivacao = user.cadastradoEm ? new Date(user.cadastradoEm).toLocaleDateString('pt-BR') : 'Ativo';

      // Cor e estilo temático baseado no plano contratado
      const planTheme = isMaster ? {
        color: 'var(--c-purple)',
        glow: 'var(--c-purple-glow)',
        tag: 'Master VIP',
        titulo: 'Plano Master JurisPass (Acesso Total)',
        desc: 'Sua assinatura contempla a experiência acadêmica mais completa da plataforma, com acesso irrestrito a todas as matérias, peças e recursos.',
        ciclo: 'Acesso Vitalício / Anual VIP'
      } : isPro ? {
        color: 'var(--c-blue)',
        glow: 'var(--c-blue-glow)',
        tag: 'Plano Pro Ativo',
        titulo: 'Plano Pro JurisPass (Aprovação OAB)',
        desc: 'Sua assinatura inclui metodologia completa para a 1ª Fase da OAB e faculdade, com todos os módulos de Processo Penal e simulados.',
        ciclo: 'Assinatura Regular Ativa'
      } : {
        color: 'var(--c-emerald)',
        glow: 'var(--c-emerald-glow)',
        tag: 'Plano Básico',
        titulo: 'Plano Básico JurisPass',
        desc: 'Plano com acesso aos módulos introdutórios e simulados fundamentais da plataforma.',
        ciclo: 'Acesso Ativo'
      };

      // Benefícios liberados para o plano
      const beneficios = isMaster ? [
        'Acesso irrestrito a TODOS os módulos atuais e novas atualizações de matérias',
        'Árvore de Recursos e Nulidades Penais completa e interativa',
        'Todos os Flashcards 3D com algoritmo de repetição espaçada',
        'Banco ilimitado de simulados estilo OAB com gabaritos detalhados',
        'Mural de Macetes, Mnemonicos e Súmulas esquematizadas',
        'Acesso garantido e prioritário aos Códigos e Vade Mecum Digital',
        'Prioridade de suporte e canal exclusivo de dúvidas acadêmicas'
      ] : isPro ? [
        'Acesso completo a todos os 5 módulos de Processo Penal (Júri, Recursos, Nulidades, etc.)',
        'Árvore de Recursos e Nulidades interativa ilimitada',
        '25 Flashcards 3D com modo de fixação rápida',
        'Banco de até 1.000 questões simuladas com gabarito comentado',
        'Mural de Mnemonicos e Prazos Processuais',
        'Atualizações legislativas recentes e jurisprudência',
        'Acesso garantido aos Códigos no lançamento'
      ] : [
        'Acesso aos módulos introdutórios de Processo Penal',
        '10 Questões de simulado',
        'Flashcards diários fundamentais'
      ];

      app.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <div class="status-island">
            <span class="status-badge" style="background:var(--c-emerald-glow); color:var(--c-emerald)">
              ${SVG.shield} Assinatura Ativa & Regularizada
            </span>
            <span>Titular: <strong>${user.nome || 'Aluno'}</strong></span>
            <span style="opacity:0.4">•</span>
            <span>Plano Atual: <strong style="color:${planTheme.color}">${planoAtual}</strong></span>
          </div>
          <h2>Minha Assinatura & Plano Contratado</h2>
          <p style="margin-top:0.25rem">Consulte todos os detalhes do seu plano ativo, recursos liberados e gerencie sua assinatura.</p>
        </div>

        <div class="bento-grid">
          <!-- CARD PRINCIPAL: DETALHES DO PLANO CONTRATADO DO ALUNO -->
          <div class="module-card col-8" style="cursor:default; border-color:${planTheme.color}; box-shadow:0 0 35px -10px ${planTheme.glow}">
            <div class="card-top-row">
              <span class="card-pill-tag" style="background:${planTheme.glow}; color:${planTheme.color}">
                ${planTheme.tag}
              </span>
              <span class="admin-status-pill pago">
                ${SVG.check} Pagamento Aprovado
              </span>
            </div>

            <h3 style="font-size:1.6rem; margin-bottom:0.4rem; color:${planTheme.color}">
              ${planTheme.titulo}
            </h3>
            <p class="card-desc" style="font-size:0.92rem; margin-bottom:1.5rem">
              ${planTheme.desc}
            </p>

            <!-- Tabela Resumo dos Dados do Contrato -->
            <div style="background:var(--bg-glass); border:0.5px solid var(--bd); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.75rem">
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem">
                <div>
                  <span style="font-size:0.75rem; color:var(--tx-faint); text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.25rem">Aluno Titular</span>
                  <strong style="font-size:0.95rem; color:var(--tx-main)">${user.nome || 'Não informado'}</strong>
                </div>
                <div>
                  <span style="font-size:0.75rem; color:var(--tx-faint); text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.25rem">E-mail de Matrícula</span>
                  <strong style="font-size:0.95rem; color:var(--tx-main)">${user.email || 'Não informado'}</strong>
                </div>
                <div>
                  <span style="font-size:0.75rem; color:var(--tx-faint); text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.25rem">Código do Pedido</span>
                  <span class="admin-code-badge" style="font-size:0.85rem">${orderId}</span>
                </div>
                <div>
                  <span style="font-size:0.75rem; color:var(--tx-faint); text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.25rem">Ciclo Contratual</span>
                  <strong style="font-size:0.95rem; color:${planTheme.color}">${planTheme.ciclo}</strong>
                </div>
              </div>
            </div>

            <!-- Lista de Benefícios Inclusos -->
            <div>
              <h4 style="font-size:1rem; margin-bottom:0.85rem; color:var(--tx-main)">Recursos & Benefícios Ativos no seu Plano:</h4>
              <div style="display:grid; grid-template-columns:1fr; gap:0.65rem">
                ${beneficios.map(b => `
                  <div style="display:flex; align-items:center; gap:0.65rem; font-size:0.9rem; color:var(--tx-main)">
                    <span style="color:var(--c-emerald); display:flex; align-items:center; justify-content:center; width:20px; height:20px; background:var(--c-emerald-glow); border-radius:50%; font-size:0.75rem; font-weight:bold">✓</span>
                    <span>${b}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Aviso de Estabilidade Contratual -->
            <div style="margin-top:1.5rem; padding:0.85rem 1.1rem; background:var(--bg-surface); border-left:3px solid ${planTheme.color}; border-radius:var(--radius-sm); font-size:0.84rem; color:var(--tx-muted)">
              Este plano é pessoal, intransferível e está com acesso liberado em todos os seus dispositivos. Para sua segurança, seu plano é fixado ao seu cadastro de matrícula.
            </div>
          </div>

          <!-- CARD LATERAL: UTILIZAÇÃO DA CONTA & VIGÊNCIA -->
          <div class="module-card col-4" style="cursor:default; display:flex; flex-direction:column; justify-content:space-between">
            <div>
              <div class="card-top-row">
                <span class="card-pill-tag">Status de Uso</span>
                <div style="font-size:0.8rem; color:var(--tx-faint)">Período Ativo</div>
              </div>

              <h3>Vigência & Cotas</h3>
              <p class="card-desc">Controle do consumo do seu ciclo atual.</p>

              <!-- Dias Restantes -->
              <div style="margin:1.4rem 0">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.5rem">
                  <span style="font-size:0.88rem; color:var(--tx-muted)">Tempo Restante:</span>
                  <span style="font-size:1.4rem; font-weight:800; color:${planTheme.color}">${diasRestantes} dias</span>
                </div>
                <div class="sb-widget-track" style="height:8px; background:var(--bd)">
                  <div class="sb-widget-bar" style="width:${isMaster ? 100 : Math.min(100, Math.round((diasRestantes / 30) * 100))}%; background:${planTheme.color}"></div>
                </div>
              </div>

              <!-- Quota de Questões -->
              <div style="margin:1.4rem 0">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.5rem">
                  <span style="font-size:0.88rem; color:var(--tx-muted)">Simulados & Questões:</span>
                  <span style="font-size:1rem; font-weight:700; color:var(--tx-main)">${totalRespondidas} / ${limite}</span>
                </div>
                <div class="sb-widget-track" style="height:8px; background:var(--bd)">
                  <div class="sb-widget-bar" style="width:${isMaster ? 100 : Math.min(100, Math.round((totalRespondidas / 1000) * 100))}%; background:var(--c-emerald)"></div>
                </div>
              </div>

              <!-- Selo de Garantia -->
              <div style="background:var(--bg-surface-elevated); border:0.5px solid var(--bd); border-radius:var(--radius-md); padding:1rem; margin-top:1rem">
                <div style="display:flex; align-items:center; gap:0.6rem; color:var(--c-emerald); font-size:0.88rem; font-weight:700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Garantia Legal & CDC
                </div>
                <p style="font-size:0.8rem; color:var(--tx-muted); margin:0.35rem 0 0">
                  Garantia incondicional de 7 dias com devolução total do valor em caso de cancelamento.
                </p>
              </div>
            </div>

            <!-- Botão de Suporte Rápido -->
            <div style="margin-top:1.5rem">
              <button type="button" class="btn-topic-action" style="width:100%; height:44px; justify-content:center" onclick="abrirSuporteAssinatura()">
                Dúvidas sobre a Assinatura?
              </button>
            </div>
          </div>

          <!-- SEÇÃO DE GERENCIAMENTO & CANCELAMENTO (12 COLUNAS) -->
          <div class="module-card col-12" style="cursor:default">
            <div class="card-top-row">
              <span class="card-pill-tag" style="background:var(--c-rose-glow); color:var(--c-rose)">
                Atendimento & Cancelamento
              </span>
              <div class="card-icon-indicator" style="background:var(--c-rose-glow); color:var(--c-rose)">
                ${SVG.shield}
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem">
              <div style="max-width:720px">
                <h3 style="font-size:1.3rem; margin-bottom:0.4rem">
                  Gerenciamento da Assinatura ou Solicitação de Cancelamento
                </h3>
                <p class="card-desc" style="font-size:0.9rem; margin-bottom:0.75rem; line-height:1.6">
                  Prezamos pela transparência e respeito total aos nossos alunos. Você tem direito a solicitar o cancelamento a qualquer momento:
                </p>
                <ul style="font-size:0.88rem; color:var(--tx-muted); padding-left:1.2rem; line-height:1.6; margin-bottom:0">
                  <li><strong>Garantia de 7 dias (Art. 49 CDC):</strong> Reembolso integral automático sem perguntas.</li>
                  <li><strong>Cancelamento de renovação:</strong> Não haverá novas cobranças futuras, mantendo seu acesso liberado até o término do período já pago.</li>
                  <li><strong>Sem multas ou taxas ocultas:</strong> O cancelamento é realizado com 1 clique ou pelo WhatsApp de suporte.</li>
                </ul>
              </div>

              <!-- Ações de Cancelamento -->
              <div style="display:flex; flex-direction:column; gap:0.75rem; min-width:240px">
                <button type="button" class="btn-topic-action" style="color:var(--c-rose); border-color:var(--c-rose-glow); height:44px; padding:0 1.25rem; font-weight:700" onclick="abrirModalCancelamento()">
                  Solicitar Cancelamento de Assinatura
                </button>
                <button type="button" class="btn-fc-flip" style="height:44px; padding:0 1.25rem" onclick="abrirSuporteAssinatura()">
                  Falar com Suporte Financeiro
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- MODAL INTERATIVO DE CANCELAMENTO DE ASSINATURA -->
        <div id="modal-cancelamento-assinatura" class="auth-modal-overlay ${modalCancelamentoAberto ? 'active' : ''}">
          <div class="auth-modal-card" style="max-width:520px">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem">
              <div class="auth-modal-badge" style="background:var(--c-rose-glow); color:var(--c-rose)">
                ${SVG.shield} Solicitação de Cancelamento
              </div>
              <button type="button" class="icon-circle-btn" style="width:32px; height:32px" onclick="fecharModalCancelamento()">✕</button>
            </div>

            <h3 style="font-size:1.4rem; margin-bottom:0.35rem">Deseja cancelar sua assinatura?</h3>
            <p style="font-size:0.88rem; color:var(--tx-muted); margin-bottom:1.25rem">
              Sentiremos muito a sua falta! Verifique os dados abaixo antes de confirmar a solicitação:
            </p>

            <div style="background:var(--bg-surface); border:0.5px solid var(--bd); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.25rem; font-size:0.85rem">
              <div style="margin-bottom:0.35rem"><strong>Aluno:</strong> ${user.nome || 'Aluno'}</div>
              <div style="margin-bottom:0.35rem"><strong>E-mail:</strong> ${user.email}</div>
              <div style="margin-bottom:0.35rem"><strong>Plano:</strong> Plano ${planoAtual}</div>
              <div><strong>Código do Pedido:</strong> <span class="admin-code-badge">${orderId}</span></div>
            </div>

            <form onsubmit="confirmarSolicitacaoCancelamento(event)">
              <div class="auth-field-group">
                <label class="auth-field-label">POR QUAL MOTIVO VOCÊ ESTÁ CANCELANDO?</label>
                <select id="motivo-cancelamento" class="search-input" style="height:42px; border-radius:var(--radius-sm); padding-left:0.75rem; width:100%" required>
                  <option value="">Selecione o motivo...</option>
                  <option value="concluido">Já passei na prova / concluí meus estudos</option>
                  <option value="financeiro">Dificuldades financeiras no momento</option>
                  <option value="pausa">Gostaria de dar uma pausa temporária</option>
                  <option value="outro">Outro motivo</option>
                </select>
              </div>

              <div class="auth-field-group">
                <label class="auth-field-label">COMENTÁRIO OU SUGESTÃO (OPCIONAL):</label>
                <textarea id="obs-cancelamento" class="search-input" style="height:70px; border-radius:var(--radius-sm); padding:0.6rem; width:100%; resize:none" placeholder="Conte-nos como podemos melhorar a plataforma..."></textarea>
              </div>

              <div style="display:flex; gap:0.75rem; margin-top:1.5rem">
                <button type="button" class="btn-topic-action" style="flex:1; height:44px" onclick="fecharModalCancelamento()">
                  Manter Meu Acesso Ativo
                </button>
                <button type="submit" class="btn-topic-action" style="flex:1; height:44px; color:var(--c-rose); border-color:var(--c-rose-glow); font-weight:700">
                  Confirmar Cancelamento
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
    }

    window.abrirModalCancelamento = () => {
      modalCancelamentoAberto = true;
      const m = document.getElementById('modal-cancelamento-assinatura');
      if (m) m.classList.add('active');
    };

    window.fecharModalCancelamento = () => {
      modalCancelamentoAberto = false;
      const m = document.getElementById('modal-cancelamento-assinatura');
      if (m) m.classList.remove('active');
    };

    window.abrirSuporteAssinatura = () => {
      alert(
        "Central de Atendimento e Suporte de Assinaturas JurisPass:\n\n" +
        "• Dúvidas, Notas Fiscais ou Cancelamento:\n" +
        "Envie uma mensagem para: suporte@jurispass.com.br\n" +
        "Ou fale diretamente com nosso atendimento pelo WhatsApp de suporte com seu e-mail e código do pedido em mãos.\n\n" +
        "Horário de atendimento: Segunda a Sexta, das 09h às 18h."
      );
    };

    window.confirmarSolicitacaoCancelamento = (e) => {
      e.preventDefault();
      const motivo = document.getElementById('motivo-cancelamento').value;
      const obs = document.getElementById('obs-cancelamento').value;
      const protocolo = 'CANC-' + Date.now().toString().slice(-6);

      fecharModalCancelamento();
      soundSuccess();
      showToast(`Solicitação de cancelamento registrada com sucesso! Protocolo: ${protocolo}`, 'success');

      alert(
        `Solicitação de Cancelamento Registrada com Sucesso!\n\n` +
        `Protocolo: ${protocolo}\n` +
        `E-mail: ${(STATE.usuario && STATE.usuario.email) || ''}\n\n` +
        `Conforme o Código de Defesa do Consumidor, sua solicitação foi encaminhada para a equipe financeira.\n` +
        `Você continuará com acesso liberado até o término do período contratado e não haverá novas cobranças.\n\n` +
        `Um e-mail de confirmação foi enviado para sua caixa de entrada.`
      );
    };
