    /* ==========================================================================
       ABA DE CONFIGURAÇÕES & PAINEL DE GESTÃO DE ALUNOS PAGOS
       ========================================================================== */
    let formNovoAlunoAberto = false;
    let formWhitelistAberto = false;

    function renderConfiguracoes() {
      updateSidebarUI();
      const user = STATE.usuario;
      const temaAtual = STATE.tema || 'dark';
      const todosAlunos = (typeof getUsuariosCadastrados === 'function') ? getUsuariosCadastrados() : [];
      const totalCadastrados = todosAlunos.length;
      const totalAtivos = todosAlunos.filter(u => u.status === 'ativo' && u.pago).length;
      const totalBloqueados = todosAlunos.filter(u => u.status === 'bloqueado' || !u.pago).length;
      const whitelistCompradores = (typeof getCompradoresAutorizados === 'function') ? getCompradoresAutorizados() : [];

      app.innerHTML = `
        <div style="margin-bottom: 2rem;">
          <h2>Configurações do Sistema & Perfil</h2>
          <p style="margin-top:0.25rem">Ajuste o modo visual, dados da sua conta e gerencie os alunos autorizados com pagamento aprovado.</p>
        </div>

        <div class="bento-grid">
          <!-- Aparência / Modo Escuro -->
          <div class="module-card col-6" style="cursor:default">
            <div class="card-top-row">
              <span class="card-pill-tag">Aparência</span>
              <div class="card-icon-indicator" style="background:var(--c-purple-glow); color:var(--c-purple)">${SVG.moon}</div>
            </div>
            <h3>Modo de Visualização</h3>
            <p class="card-desc">Alterne entre o Modo Escuro imersivo ou Modo Claro de alto contraste.</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.85rem; margin-top:0.5rem">
              <button type="button" class="btn-topic-action ${temaAtual === 'dark' ? 'checked' : ''}" style="padding:1rem; flex-direction:column; gap:0.5rem; height:auto; border-radius:var(--radius-md)" onclick="configMudarTema('dark')">
                <span style="font-size:1.2rem">${SVG.moon}</span>
                <strong>Modo Escuro (Dark)</strong>
                <span style="font-size:0.75rem; color:var(--tx-faint)">Design original com luz azul</span>
              </button>

              <button type="button" class="btn-topic-action ${temaAtual === 'light' ? 'checked' : ''}" style="padding:1rem; flex-direction:column; gap:0.5rem; height:auto; border-radius:var(--radius-md)" onclick="configMudarTema('light')">
                <span style="font-size:1.2rem">${SVG.sun}</span>
                <strong>Modo Claro (Light)</strong>
                <span style="font-size:0.75rem; color:var(--tx-faint)">Fundo branco suave</span>
              </button>
            </div>
          </div>

          <!-- Efeitos Sonoros -->
          <div class="module-card col-6" style="cursor:default">
            <div class="card-top-row">
              <span class="card-pill-tag">Áudio</span>
              <div class="card-icon-indicator" style="background:var(--c-teal-glow); color:var(--c-teal)">${SVG.volume}</div>
            </div>
            <h3>Efeitos Sonoros</h3>
            <p class="card-desc">Ative ou desative o feedback sonoro de acertos, erros e cliques interativos.</p>

            <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-glass); border:0.5px solid var(--bd); padding:1rem 1.25rem; border-radius:var(--radius-md); margin-top:0.75rem">
              <div>
                <strong style="display:block; color:var(--tx-main)">Sons de Feedback</strong>
                <span style="font-size:0.82rem; color:var(--tx-muted)">Web Audio beeps ao acertar questões e navegar</span>
              </div>
              <button type="button" class="btn-topic-action ${STATE.somAtivo ? 'checked' : ''}" style="max-width:120px" onclick="configToggleSom()">
                ${STATE.somAtivo ? 'Ligado' : 'Desligado'}
              </button>
            </div>
          </div>

          <!-- Dados da Conta do Usuário -->
          <div class="module-card col-12" style="cursor:default">
            <div class="card-top-row">
              <span class="card-pill-tag">Conta do Assinante</span>
              <div class="card-icon-indicator" style="background:var(--c-blue-glow); color:var(--c-blue)">${SVG.settings}</div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem">
              <div>
                <h3>Informações da sua Conta</h3>
                <p class="card-desc" style="margin-bottom:0">Gerencie seu nome de exibição, e-mail de acesso e credenciais de segurança.</p>
              </div>
              <div>
                ${isFirebaseActive 
                  ? `<span style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.85rem; border-radius:var(--radius-pill); background:var(--c-emerald-glow); color:var(--c-emerald); font-size:0.8rem; font-weight:700">● Sincronização Nuvem (Firebase Ativo)</span>`
                  : `<span style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.85rem; border-radius:var(--radius-pill); background:var(--bg-glass); border:0.5px solid var(--bd); color:var(--tx-muted); font-size:0.8rem; font-weight:600">● Armazenamento Local Seguro</span>`
                }
              </div>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1.25rem; margin-top:1.2rem">
              <div>
                <label style="font-size:0.82rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.35rem">NOME DO USUÁRIO:</label>
                <input type="text" id="config-user-name" class="search-input" style="border-radius:var(--radius-sm); padding-left:1rem" value="${(user && user.nome) ? user.nome : ''}" placeholder="Seu nome completo">
              </div>

              <div>
                <label style="font-size:0.82rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.35rem">E-MAIL DA CONTA:</label>
                <input type="email" id="config-user-email" class="search-input" style="border-radius:var(--radius-sm); padding-left:1rem" value="${(user && user.email) ? user.email : ''}" placeholder="seu@email.com">
              </div>

              <div>
                <label style="font-size:0.82rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.35rem">NOVA SENHA (DEIXE EM BRANCO PARA MANTER):</label>
                <input type="password" id="config-user-pass" class="search-input" style="border-radius:var(--radius-sm); padding-left:1rem" placeholder="Digite nova senha se desejar alterar">
              </div>
            </div>

            <!-- Botões de Ação da Conta -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; padding-top:1.25rem; border-top:0.5px solid var(--bd); flex-wrap:wrap; gap:1rem">
              <div style="font-size:0.85rem; color:var(--tx-muted)">
                Plano ativo: <strong style="color:var(--c-blue)">Plano ${(user && user.plano) ? user.plano : 'Pro'}</strong>
                <span style="color:var(--c-emerald); margin-left:0.5rem">● Pagamento Confirmado</span>
              </div>
              <div style="display:flex; gap:0.75rem; align-items:center">
                <button type="button" class="btn-topic-action" style="height:44px; padding:0 1.25rem; border-color:var(--c-rose-glow); color:var(--c-rose)" onclick="logoutUsuario()">
                  Sair / Trocar de Conta
                </button>
                <button class="btn-fc-flip" style="height:44px; padding:0 1.8rem" onclick="salvarConfiguracoes()">
                  ${SVG.check} Salvar Alterações
                </button>
              </div>
            </div>
          </div>

          <!-- GESTÃO DE ALUNOS PAGOS & CONTROLE DE ACESSOS (ÁREA ADMINISTRATIVA) -->
          <div class="module-card col-12" style="cursor:default">
            <div class="card-top-row">
              <span class="card-pill-tag" style="background:var(--c-emerald-glow); color:var(--c-emerald)">Segurança & Acessos</span>
              <div class="card-icon-indicator" style="background:var(--c-emerald-glow); color:var(--c-emerald)">${SVG.shield}</div>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem">
              <div>
                <h3 style="font-size:1.3rem; margin-bottom:0.3rem">Gestão de Alunos Matriculados & Pagamentos</h3>
                <p class="card-desc" style="margin-bottom:0">Apenas os alunos presentes nesta lista com status <strong>Pago e Ativo</strong> conseguem fazer login e acessar o painel.</p>
              </div>

              <!-- Ações Rápidas de Cadastro de Aluno -->
              <div style="display:flex; gap:0.6rem; flex-wrap:wrap">
                <button type="button" class="btn-fc-flip" style="height:38px; padding:0 1.1rem; font-size:0.85rem" onclick="toggleFormNovoAluno()">
                  + Cadastrar Novo Aluno Pago
                </button>
                <button type="button" class="btn-topic-action" style="height:38px; padding:0 1rem; font-size:0.85rem" onclick="toggleFormWhitelist()">
                  + Autorizar E-mails Kiwify/Hotmart
                </button>
              </div>
            </div>

            <!-- Métricas de Alunos -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; margin-bottom:1.25rem">
              <div style="background:var(--bg-glass); border:0.5px solid var(--bd); padding:1rem; border-radius:var(--radius-md)">
                <div style="font-size:0.75rem; color:var(--tx-muted); text-transform:uppercase; font-weight:700">Total de Alunos</div>
                <div style="font-size:1.8rem; font-weight:800; color:var(--tx-main); margin-top:0.25rem">${totalCadastrados}</div>
              </div>
              <div style="background:var(--bg-glass); border:0.5px solid rgba(16, 185, 129, 0.3); padding:1rem; border-radius:var(--radius-md)">
                <div style="font-size:0.75rem; color:var(--c-emerald); text-transform:uppercase; font-weight:700">Pagamento Confirmado</div>
                <div style="font-size:1.8rem; font-weight:800; color:var(--c-emerald); margin-top:0.25rem">${totalAtivos}</div>
              </div>
              <div style="background:var(--bg-glass); border:0.5px solid rgba(225, 29, 72, 0.3); padding:1rem; border-radius:var(--radius-md)">
                <div style="font-size:0.75rem; color:var(--c-rose); text-transform:uppercase; font-weight:700">Acessos Bloqueados</div>
                <div style="font-size:1.8rem; font-weight:800; color:var(--c-rose); margin-top:0.25rem">${totalBloqueados}</div>
              </div>
            </div>

            <!-- Formulário Retrátil: Cadastrar Novo Aluno Pago Diretamente -->
            <div id="form-cadastrar-aluno" style="display:${formNovoAlunoAberto ? 'block' : 'none'}; background:var(--bg-surface-elevated); border:1px solid var(--c-blue); padding:1.25rem; border-radius:var(--radius-md); margin-bottom:1.5rem">
              <h4 style="margin-bottom:0.4rem; color:var(--c-blue); font-size:1.05rem">Cadastrar Novo Aluno com Acesso Liberado</h4>
              <p style="font-size:0.83rem; color:var(--tx-muted); margin-bottom:1rem">Informe os dados do aluno pagante. Ele poderá acessar imediatamente na aba "Já Tenho Cadastro" usando este e-mail e senha.</p>
              
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:1rem">
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">NOME DO ALUNO *</label>
                  <input type="text" id="admin-novo-nome" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem" placeholder="Ex: Lucas Mendes">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">E-MAIL DO ALUNO *</label>
                  <input type="email" id="admin-novo-email" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem" placeholder="aluno@email.com">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">SENHA INICIAL DE ACESSO *</label>
                  <input type="text" id="admin-novo-senha" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem" placeholder="Mínimo 4 caracteres" value="123456">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">PLANO ADQUIRIDO *</label>
                  <select id="admin-novo-plano" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem; height:42px">
                    <option value="Pro" selected>Plano Pro</option>
                    <option value="Master">Plano Master VIP</option>
                    <option value="Básico">Plano Básico</option>
                  </select>
                </div>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:0.6rem">
                <button type="button" class="btn-topic-action" style="padding:0.4rem 1rem" onclick="toggleFormNovoAluno()">Cancelar</button>
                <button type="button" class="btn-fc-flip" style="height:38px; padding:0 1.25rem; font-size:0.86rem" onclick="salvarNovoAlunoPainel()">✓ Concluir Cadastro e Liberar Acesso</button>
              </div>
            </div>

            <!-- Formulário Retrátil: Autorizar E-mails da Kiwify / Hotmart (Whitelist) -->
            <div id="form-whitelist-aluno" style="display:${formWhitelistAberto ? 'block' : 'none'}; background:var(--bg-surface-elevated); border:1px solid var(--c-purple); padding:1.25rem; border-radius:var(--radius-md); margin-bottom:1.5rem">
              <h4 style="margin-bottom:0.4rem; color:var(--c-purple); font-size:1.05rem">Pré-Autorizar Compradores da Kiwify / Hotmart</h4>
              <p style="font-size:0.83rem; color:var(--tx-muted); margin-bottom:1rem">Adicione os e-mails dos alunos que realizaram o pagamento. Quando eles abrirem o site e clicarem em "Criar Meu Acesso", o sistema reconhecerá a compra e permitirá criar a senha.</p>
              
              <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:1rem; margin-bottom:1rem">
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">E-MAIL DO COMPRADOR *</label>
                  <input type="email" id="wl-email" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem" placeholder="cliente@comprador.com">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">NOME (OPCIONAL)</label>
                  <input type="text" id="wl-nome" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem" placeholder="Nome do cliente">
                </div>
                <div>
                  <label style="font-size:0.78rem; font-weight:700; color:var(--tx-muted); display:block; margin-bottom:0.25rem">PLANO ADQUIRIDO</label>
                  <select id="wl-plano" class="search-input" style="border-radius:var(--radius-sm); padding-left:0.75rem; height:42px">
                    <option value="Pro" selected>Plano Pro</option>
                    <option value="Master">Plano Master VIP</option>
                    <option value="Básico">Plano Básico</option>
                  </select>
                </div>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:0.6rem">
                <button type="button" class="btn-topic-action" style="padding:0.4rem 1rem" onclick="toggleFormWhitelist()">Cancelar</button>
                <button type="button" class="btn-fc-flip" style="height:38px; padding:0 1.25rem; font-size:0.86rem; background:linear-gradient(135deg, var(--c-purple), var(--c-blue))" onclick="salvarWhitelistPainel()">✓ Autorizar Comprador</button>
              </div>
            </div>

            <!-- Tabela de Alunos Cadastrados -->
            <div class="admin-table-container">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Plano</th>
                    <th>Pagamento & Status</th>
                    <th>Senha</th>
                    <th style="text-align:right">Ações de Segurança</th>
                  </tr>
                </thead>
                <tbody>
                  ${todosAlunos.length === 0 ? `
                    <tr>
                      <td colspan="5" style="text-align:center; padding:2rem; color:var(--tx-muted)">
                        Nenhum aluno cadastrado no momento. Clique em "+ Cadastrar Novo Aluno Pago" acima.
                      </td>
                    </tr>
                  ` : todosAlunos.map(a => {
                    const isAtivo = a.status === 'ativo' && a.pago;
                    return `
                      <tr>
                        <td>
                          <div style="font-weight:700; color:var(--tx-main)">${a.nome || 'Aluno'}</div>
                          <div style="font-size:0.8rem; color:var(--tx-muted)">${a.email}</div>
                        </td>
                        <td>
                          <span style="font-size:0.82rem; font-weight:600; color:var(--c-blue)">Plano ${a.plano || 'Pro'}</span>
                        </td>
                        <td>
                          <span class="admin-status-pill ${isAtivo ? 'pago' : 'bloqueado'}">
                            ${isAtivo ? '✓ Pago e Ativo' : '✕ Acesso Bloqueado'}
                          </span>
                        </td>
                        <td>
                          <code style="font-size:0.8rem; background:rgba(255,255,255,0.06); padding:0.2rem 0.5rem; border-radius:4px">${a.senha || '••••••'}</code>
                        </td>
                        <td style="text-align:right">
                          <div style="display:inline-flex; gap:0.4rem; justify-content:flex-end">
                            <button type="button" class="admin-btn-action" onclick="acaoAlterarSenhaAluno('${a.email}')" title="Alterar Senha">
                              Senha
                            </button>
                            <button type="button" class="admin-btn-action" onclick="acaoBloquearAluno('${a.email}')" title="${isAtivo ? 'Bloquear Aluno' : 'Liberar Aluno'}">
                              ${isAtivo ? 'Bloquear' : 'Liberar'}
                            </button>
                            <button type="button" class="admin-btn-action danger" onclick="acaoExcluirAluno('${a.email}')" title="Excluir Aluno">
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

            ${whitelistCompradores.length > 0 ? `
              <div style="margin-top:1.25rem; font-size:0.82rem; color:var(--tx-muted)">
                <strong>E-mails de compradores autorizados aguardando primeiro acesso (${whitelistCompradores.length}):</strong>
                <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.4rem">
                  ${whitelistCompradores.map(c => `
                    <span style="background:var(--bg-glass); border:0.5px solid var(--bd); padding:0.2rem 0.6rem; border-radius:var(--radius-pill); font-size:0.76rem">
                      ${c.email} (${c.plano || 'Pro'})
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Configuração Opcional do Firebase / Nuvem -->
          <div class="module-card col-12" style="cursor:default">
            <details style="cursor:pointer" id="details-firebase-config">
              <summary style="font-size:0.88rem; font-weight:700; color:var(--tx-main); outline:none">
                ⚙ Configurar Conexão com Firebase (Nuvem Gratuita) <span style="font-size:0.75rem; color:var(--tx-faint); font-weight:normal">(opcional)</span>
              </summary>
              <div style="padding:1rem 0; font-size:0.84rem; color:var(--tx-muted); line-height:1.5">
                <p>Cole aqui os dados do seu projeto do <a href="https://console.firebase.google.com" target="_blank" style="color:var(--c-blue); text-decoration:underline">Firebase Console</a> para sincronizar os cadastros de alunos e progresso na nuvem:</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.75rem">
                  <div>
                    <label style="font-size:0.78rem; font-weight:600; display:block; margin-bottom:0.25rem">API Key (apiKey):</label>
                    <input type="text" id="cfg-fb-apikey" class="search-input" style="border-radius:var(--radius-sm); font-size:0.82rem; font-family:monospace; padding-left:0.75rem" placeholder="AIzaSy..." value="${getSavedFirebaseKey('apiKey')}">
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:600; display:block; margin-bottom:0.25rem">Auth Domain (authDomain):</label>
                    <input type="text" id="cfg-fb-authdomain" class="search-input" style="border-radius:var(--radius-sm); font-size:0.82rem; font-family:monospace; padding-left:0.75rem" placeholder="seu-projeto.firebaseapp.com" value="${getSavedFirebaseKey('authDomain')}">
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:600; display:block; margin-bottom:0.25rem">Project ID (projectId):</label>
                    <input type="text" id="cfg-fb-projectid" class="search-input" style="border-radius:var(--radius-sm); font-size:0.82rem; font-family:monospace; padding-left:0.75rem" placeholder="seu-projeto-123" value="${getSavedFirebaseKey('projectId')}">
                  </div>
                  <div>
                    <label style="font-size:0.78rem; font-weight:600; display:block; margin-bottom:0.25rem">App ID (appId):</label>
                    <input type="text" id="cfg-fb-appid" class="search-input" style="border-radius:var(--radius-sm); font-size:0.82rem; font-family:monospace; padding-left:0.75rem" placeholder="1:123456:web:abcd" value="${getSavedFirebaseKey('appId')}">
                  </div>
                </div>
                <div style="margin-top:0.85rem; display:flex; justify-content:flex-end">
                  <button type="button" class="btn-topic-action checked" style="padding:0.45rem 1.25rem" onclick="salvarChavesFirebasePeloPainel()">
                    Salvar Chaves e Conectar Nuvem
                  </button>
                </div>
              </div>
            </details>
          </div>
        </div>
      `;
    }

    window.configMudarTema = (tema) => {
      applyTheme(tema);
      playBeep(440, 'sine', 0.05);
      renderConfiguracoes();
    };

    window.configToggleSom = () => {
      STATE.somAtivo = !STATE.somAtivo;
      saveState();
      updateSoundUI();
      if (STATE.somAtivo) playBeep(580, 'sine', 0.06);
      renderConfiguracoes();
    };

    window.toggleFormNovoAluno = () => {
      formNovoAlunoAberto = !formNovoAlunoAberto;
      renderConfiguracoes();
    };

    window.toggleFormWhitelist = () => {
      formWhitelistAberto = !formWhitelistAberto;
      renderConfiguracoes();
    };

    window.salvarNovoAlunoPainel = () => {
      const elNome = document.getElementById('admin-novo-nome');
      const elEmail = document.getElementById('admin-novo-email');
      const elSenha = document.getElementById('admin-novo-senha');
      const elPlano = document.getElementById('admin-novo-plano');

      const nome = elNome ? elNome.value.trim() : '';
      const email = elEmail ? elEmail.value.trim() : '';
      const senha = elSenha ? elSenha.value.trim() : '';
      const plano = elPlano ? elPlano.value : 'Pro';

      if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Senha).');
        return;
      }

      const res = cadastrarNovoAlunoPorAdmin({ nome, email, senha, plano });
      if (res.success) {
        soundSuccess();
        launchConfetti();
        showToast(`Aluno ${nome} cadastrado com sucesso! Acesso liberado.`, 'success');
        formNovoAlunoAberto = false;
        renderConfiguracoes();
      } else {
        alert(res.error || 'Erro ao cadastrar aluno.');
      }
    };

    window.salvarWhitelistPainel = () => {
      const elEmail = document.getElementById('wl-email');
      const elNome = document.getElementById('wl-nome');
      const elPlano = document.getElementById('wl-plano');

      const email = elEmail ? elEmail.value.trim().toLowerCase() : '';
      const nome = elNome ? elNome.value.trim() : '';
      const plano = elPlano ? elPlano.value : 'Pro';

      if (!email) {
        alert('Informe o e-mail do comprador.');
        return;
      }

      const compradores = getCompradoresAutorizados();
      if (compradores.some(c => c.email.toLowerCase() === email)) {
        alert('Este e-mail já está autorizado na lista.');
        return;
      }

      compradores.push({ email, nome, plano, orderId: 'WL-' + Date.now().toString().slice(-6) });
      salvarCompradoresAutorizados(compradores);
      soundSuccess();
      showToast(`E-mail ${email} autorizado com sucesso!`, 'success');
      formWhitelistAberto = false;
      renderConfiguracoes();
    };

    window.acaoBloquearAluno = (email) => {
      const res = bloquearOuDesbloquearAluno(email);
      if (res.success) {
        showToast(res.novoStatus === 'ativo' ? 'Aluno liberado com sucesso!' : 'Acesso do aluno bloqueado!', 'info');
        renderConfiguracoes();
      }
    };

    window.acaoAlterarSenhaAluno = (email) => {
      const nova = prompt(`Digite a nova senha para o aluno (${email}):`);
      if (!nova) return;
      const res = alterarSenhaAlunoPorAdmin(email, nova);
      if (res.success) {
        soundSuccess();
        showToast('Senha atualizada com sucesso!', 'success');
        renderConfiguracoes();
      } else {
        alert(res.error || 'Erro ao alterar senha.');
      }
    };

    window.acaoExcluirAluno = (email) => {
      if (confirm(`Tem certeza que deseja excluir o cadastro de ${email}? O aluno perderá o acesso imediatamente.`)) {
        const res = excluirAlunoPorAdmin(email);
        if (res.success) {
          showToast('Aluno removido com sucesso.', 'info');
          renderConfiguracoes();
        }
      }
    };

    window.salvarConfiguracoes = async () => {
      const elNome = document.getElementById('config-user-name');
      const elEmail = document.getElementById('config-user-email');
      const elSenha = document.getElementById('config-user-pass');
      if (!STATE.usuario) STATE.usuario = { cadastrado: true, plano: 'Pro', pago: true };

      if (elNome && elNome.value.trim()) {
        STATE.usuario.nome = elNome.value.trim();
        STATE.usuario.cadastrado = true;
      }
      if (elEmail && elEmail.value.trim()) {
        STATE.usuario.email = elEmail.value.trim();
      }
      if (elSenha && elSenha.value.trim()) {
        STATE.usuario.senha = elSenha.value.trim();
      }

      STATE.usuario.pago = true;
      atualizarUsuarioDb(STATE.usuario);
      saveState();
      updateSidebarUI();

      if (isFirebaseActive && firebaseDb && STATE.usuario.uid) {
        try {
          await firebaseDb.collection('usuarios').doc(STATE.usuario.uid).set({
            nome: STATE.usuario.nome,
            email: STATE.usuario.email,
            atualizadoEm: new Date().toISOString()
          }, { merge: true });
        } catch(e) {
          console.warn('Erro ao atualizar perfil no Firestore:', e);
        }
      }

      soundSuccess();
      launchConfetti();
      showToast('Configurações salvas com sucesso!', 'success');
      renderConfiguracoes();
    };
