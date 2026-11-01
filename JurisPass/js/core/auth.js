    /* ==========================================================================
       BASE DE DADOS DE USUÁRIOS & COMPRADORES AUTORIZADOS (SEGURANÇA JURISPASS)
       ========================================================================== */
    const DB_USUARIOS_KEY = 'jurispass_usuarios_db_v1';
    const DB_WHITELIST_KEY = 'jurispass_whitelist_compradores_v1';

    // Contas de alunos e administradores pré-cadastrados com pagamento ativo
    const USUARIOS_PADRAO = [
      {
        id: 'usr_admin',
        nome: 'Administrador JurisPass',
        email: 'enzolialua@gmail.com',
        senha: 'enzolialua',
        plano: 'Master',
        pago: true,
        orderId: 'PED-ADMIN-01',
        status: 'ativo',
        role: 'admin',
        cadastradoEm: '2026-01-01T00:00:00.000Z',
        ultimoLogin: '2026-01-01T00:00:00.000Z'
      },
      {
        id: 'usr_gui',
        nome: 'Gui (Convidado)',
        email: 'guirw@gmail.com',
        senha: 'guirw123',
        plano: 'Master',
        pago: true,
        orderId: 'PED-TESTE-GUI',
        status: 'ativo',
        role: 'aluno',
        cadastradoEm: '2026-01-01T00:00:00.000Z',
        ultimoLogin: '2026-01-01T00:00:00.000Z'
      },
      {
        id: 'usr_aluno_demo',
        nome: 'Aluno JurisPass',
        email: 'aluno@jurispass.com.br',
        senha: '123456',
        plano: 'Pro',
        pago: true,
        orderId: 'PED-PAGO-01',
        status: 'ativo',
        role: 'aluno',
        cadastradoEm: '2026-01-01T00:00:00.000Z',
        ultimoLogin: '2026-01-01T00:00:00.000Z'
      }
    ];

    // Lista de e-mails de compradores autorizados que pagaram na Kiwify/Hotmart
    // e têm autorização para ativar o primeiro acesso na aba "Criar Meu Acesso"
    const COMPRADORES_AUTORIZADOS_PADRAO = [
      { email: 'guirw@gmail.com', nome: 'Gui (Convidado)', plano: 'Master', orderId: 'PED-TESTE-GUI' },
      { email: 'comprador@exemplo.com', nome: 'Aluno Pagante', plano: 'Master', orderId: 'KW-10023' }
    ];

    function getUsuariosCadastrados() {
      try {
        const raw = localStorage.getItem(DB_USUARIOS_KEY);
        if (raw) {
          let parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const adminIdx = parsed.findIndex(u => u.role === 'admin' || u.email === 'enzolialua@gmail.com' || u.email === 'admin@jurispass.com.br');
            if (adminIdx !== -1) {
              parsed[adminIdx].email = 'enzolialua@gmail.com';
              parsed[adminIdx].senha = 'enzolialua';
              parsed[adminIdx].role = 'admin';
              parsed[adminIdx].pago = true;
              parsed[adminIdx].status = 'ativo';
              parsed[adminIdx].plano = 'Master';
              parsed[adminIdx].nome = 'Administrador JurisPass';
            } else {
              parsed.unshift(USUARIOS_PADRAO[0]);
            }

            // Garante que a conta de teste do Gui esteja sempre presente e ativa
            const guiIdx = parsed.findIndex(u => u.email === 'guirw@gmail.com');
            if (guiIdx !== -1) {
              parsed[guiIdx].senha = 'guirw123';
              parsed[guiIdx].pago = true;
              parsed[guiIdx].status = 'ativo';
              parsed[guiIdx].plano = 'Master';
            } else {
              parsed.push(USUARIOS_PADRAO[1]);
            }

            salvarUsuariosCadastrados(parsed);
            return parsed;
          }
        }
      } catch(e) {}
      salvarUsuariosCadastrados(USUARIOS_PADRAO);
      return USUARIOS_PADRAO.slice();
    }

    function salvarUsuariosCadastrados(lista) {
      try {
        localStorage.setItem(DB_USUARIOS_KEY, JSON.stringify(lista));
      } catch(e) {
        console.warn('Erro ao salvar base de usuários:', e);
      }
    }

    function getCompradoresAutorizados() {
      try {
        const raw = localStorage.getItem(DB_WHITELIST_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            if (!parsed.some(c => c.email === 'guirw@gmail.com')) {
              parsed.push(COMPRADORES_AUTORIZADOS_PADRAO[0]);
              salvarCompradoresAutorizados(parsed);
            }
            return parsed;
          }
        }
      } catch(e) {}
      salvarCompradoresAutorizados(COMPRADORES_AUTORIZADOS_PADRAO);
      return COMPRADORES_AUTORIZADOS_PADRAO.slice();
    }

    function salvarCompradoresAutorizados(lista) {
      try {
        localStorage.setItem(DB_WHITELIST_KEY, JSON.stringify(lista));
      } catch(e) {}
    }

    function buscarUsuarioPorEmail(email) {
      if (!email) return null;
      const clean = email.trim().toLowerCase();
      const todos = getUsuariosCadastrados();
      return todos.find(u => u.email && u.email.trim().toLowerCase() === clean) || null;
    }

    function atualizarUsuarioDb(userData) {
      if (!userData || !userData.email) return;
      const clean = userData.email.trim().toLowerCase();
      const todos = getUsuariosCadastrados();
      const idx = todos.findIndex(u => u.email && u.email.trim().toLowerCase() === clean);
      if (idx !== -1) {
        todos[idx] = Object.assign({}, todos[idx], userData);
      } else {
        todos.push(userData);
      }
      salvarUsuariosCadastrados(todos);
    }

    // Funções Administrativas expostas globalmente
    window.getUsuariosCadastrados = getUsuariosCadastrados;
    window.salvarUsuariosCadastrados = salvarUsuariosCadastrados;
    window.getCompradoresAutorizados = getCompradoresAutorizados;
    window.salvarCompradoresAutorizados = salvarCompradoresAutorizados;
    window.buscarUsuarioPorEmail = buscarUsuarioPorEmail;
    window.atualizarUsuarioDb = atualizarUsuarioDb;

    function isUsuarioAdmin() {
      if (!STATE || !STATE.usuario || !STATE.usuario.email) return false;
      const email = STATE.usuario.email.trim().toLowerCase();
      return STATE.usuario.role === 'admin' || email === 'enzolialua@gmail.com';
    }
    window.isUsuarioAdmin = isUsuarioAdmin;

    window.cadastrarNovoAlunoPorAdmin = ({ nome, email, senha, plano = 'Pro', orderId = '' }) => {
      const cleanEmail = (email || '').trim().toLowerCase();
      const cleanNome = (nome || '').trim();
      if (!cleanEmail || !cleanNome || !senha) {
        return { success: false, error: 'Preencha todos os campos obrigatórios (Nome, E-mail e Senha).' };
      }
      if (buscarUsuarioPorEmail(cleanEmail)) {
        return { success: false, error: 'Já existe um aluno cadastrado com este e-mail.' };
      }

      const novo = {
        id: 'usr_' + Date.now(),
        nome: cleanNome,
        email: cleanEmail,
        senha: senha,
        plano: plano,
        pago: true,
        orderId: orderId || ('MANUAL-' + Date.now().toString().slice(-6)),
        status: 'ativo',
        role: 'aluno',
        cadastradoEm: new Date().toISOString(),
        ultimoLogin: null
      };

      const todos = getUsuariosCadastrados();
      todos.push(novo);
      salvarUsuariosCadastrados(todos);
      return { success: true, user: novo };
    };

    window.bloquearOuDesbloquearAluno = (email) => {
      const clean = (email || '').trim().toLowerCase();
      const todos = getUsuariosCadastrados();
      const u = todos.find(x => x.email && x.email.trim().toLowerCase() === clean);
      if (!u) return { success: false, error: 'Aluno não encontrado.' };

      u.status = u.status === 'ativo' ? 'bloqueado' : 'ativo';
      u.pago = (u.status === 'ativo');
      salvarUsuariosCadastrados(todos);

      // Se o usuário bloqueado for o logado no momento, encerra a sessão
      if (STATE.usuario && STATE.usuario.email && STATE.usuario.email.toLowerCase() === clean && u.status === 'bloqueado') {
        STATE.usuario = null;
        saveState();
        checkAuthAndOnboarding();
      }

      return { success: true, novoStatus: u.status };
    };

    window.excluirAlunoPorAdmin = (email) => {
      const clean = (email || '').trim().toLowerCase();
      let todos = getUsuariosCadastrados();
      const existe = todos.some(x => x.email && x.email.trim().toLowerCase() === clean);
      if (!existe) return { success: false, error: 'Aluno não encontrado.' };

      todos = todos.filter(x => !(x.email && x.email.trim().toLowerCase() === clean));
      salvarUsuariosCadastrados(todos);

      if (STATE.usuario && STATE.usuario.email && STATE.usuario.email.toLowerCase() === clean) {
        STATE.usuario = null;
        saveState();
        checkAuthAndOnboarding();
      }

      return { success: true };
    };

    window.alterarSenhaAlunoPorAdmin = (email, novaSenha) => {
      const clean = (email || '').trim().toLowerCase();
      if (!novaSenha || novaSenha.length < 4) {
        return { success: false, error: 'A nova senha deve ter ao menos 4 caracteres.' };
      }
      const todos = getUsuariosCadastrados();
      const u = todos.find(x => x.email && x.email.trim().toLowerCase() === clean);
      if (!u) return { success: false, error: 'Aluno não encontrado.' };

      u.senha = novaSenha;
      salvarUsuariosCadastrados(todos);

      if (STATE.usuario && STATE.usuario.email && STATE.usuario.email.toLowerCase() === clean) {
        STATE.usuario.senha = novaSenha;
        saveState();
      }

      return { success: true };
    };

    window.mostrarAjudaSuporte = () => {
      alert(
        "Central de Atendimento e Suporte JurisPass:\n\n" +
        "• Alunos matriculados: Utilize o mesmo e-mail e senha cadastrados no momento da compra.\n\n" +
        "• Primeiro acesso: Se você comprou pela Kiwify ou Hotmart, clique na aba 'Criar Meu Acesso' utilizando o e-mail da compra.\n\n" +
        "• Recuperação de acesso e dúvidas:\nEntre em contato pelo WhatsApp de suporte ou envie um e-mail para: suporte@jurispass.com.br"
      );
    };

    /* ==========================================================================
       MODAL DE ONBOARDING, CADASTRO & LOGIN
       ========================================================================== */
    let authModoAtual = 'login';

    function openAuthModal({ planoPre = 'Pro', nomePre = '', emailPre = '', orderId = '', gateway = 'Checkout', origemUrl = false, permitirFechar = false } = {}) {
      const modal = document.getElementById('auth-modal');
      if (!modal) return;

      const inputNome = document.getElementById('auth-input-nome');
      const inputEmail = document.getElementById('auth-input-email');
      const inputSenha = document.getElementById('auth-input-senha');
      const btnClose = document.getElementById('auth-modal-close');
      const badgeText = document.getElementById('auth-badge-text');
      const errorDiv = document.getElementById('auth-error-msg');

      if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
      }
      if (inputSenha) inputSenha.value = '';

      if (inputNome && nomePre) {
        inputNome.value = nomePre;
        inputNome.setAttribute('value', nomePre);
      }
      if (inputEmail && emailPre) {
        inputEmail.value = emailPre;
        inputEmail.setAttribute('value', emailPre);
      }

      if (planoPre) selecionarPlanoModal(planoPre);

      if (btnClose) btnClose.style.display = permitirFechar ? 'flex' : 'none';

      if (badgeText) {
        if (orderId) {
          badgeText.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>Pagamento Aprovado • Pedido #${orderId}</span>`;
        } else if (origemUrl) {
          badgeText.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>Pagamento Confirmado • Plano ${planoPre}</span>`;
        } else {
          badgeText.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> <span>Área Exclusiva para Alunos</span>`;
        }
      }

      // Se veio com parâmetros de compra na URL, abre em 'cadastro' para criar a senha.
      // Se veio direto pelo link do site, abre na aba 'login' ("Já Tenho Cadastro").
      if (origemUrl) {
        trocarAbaAuth('cadastro');
      } else {
        trocarAbaAuth('login');
      }
      modal.classList.add('active');
    }

    function fecharAuthModal() {
      // Bloqueio estrito: não fecha se o usuário não estiver autenticado e com pagamento ativo
      if (!STATE.usuario || !STATE.usuario.cadastrado || !STATE.usuario.pago) {
        return;
      }
      const modal = document.getElementById('auth-modal');
      if (modal) modal.classList.remove('active');
    }

    function trocarAbaAuth(aba) {
      authModoAtual = aba;
      const tabCadastro = document.getElementById('tab-btn-cadastro');
      const tabLogin = document.getElementById('tab-btn-login');
      const groupNome = document.getElementById('group-auth-nome');
      const groupPlano = document.getElementById('group-auth-plano');
      const labelEmail = document.getElementById('label-auth-email') || document.querySelector('label[for="auth-input-email"]');
      const labelSenha = document.getElementById('label-auth-senha');
      const submitText = document.getElementById('auth-submit-btn-text');
      const title = document.getElementById('auth-modal-title');
      const desc = document.getElementById('auth-modal-desc');
      const inputNome = document.getElementById('auth-input-nome');
      const errorDiv = document.getElementById('auth-error-msg');
      const footerNote = document.getElementById('auth-footer-note');

      if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
      }

      if (aba === 'login') {
        if (tabCadastro) tabCadastro.classList.remove('active');
        if (tabLogin) tabLogin.classList.add('active');
        if (groupNome) groupNome.style.display = 'none';
        if (groupPlano) groupPlano.style.display = 'none';
        if (inputNome) inputNome.removeAttribute('required');
        if (labelEmail) labelEmail.textContent = 'SEU E-MAIL CADASTRADO *';
        if (labelSenha) labelSenha.textContent = 'SUA SENHA DE ACESSO *';
        if (submitText) submitText.textContent = 'Entrar no Painel';
        if (title) title.textContent = 'Acessar Plataforma JurisPass';
        if (desc) desc.textContent = 'Acesso exclusivo para alunos matriculados com pagamento aprovado.';
        if (footerNote) {
          footerNote.innerHTML = `Precisa de ajuda ou esqueceu sua senha? <a href="javascript:void(0)" onclick="mostrarAjudaSuporte()" style="color:var(--c-blue); text-decoration:underline">Suporte aos Alunos</a>`;
        }
      } else {
        if (tabCadastro) tabCadastro.classList.add('active');
        if (tabLogin) tabLogin.classList.remove('active');
        if (groupNome) groupNome.style.display = 'block';
        if (groupPlano) groupPlano.style.display = 'block';
        if (inputNome) inputNome.setAttribute('required', 'true');
        if (labelEmail) labelEmail.textContent = 'SEU E-MAIL DA COMPRA (KIWIFY / HOTMART) *';
        if (labelSenha) labelSenha.textContent = 'CRIE UMA SENHA DE ACESSO *';
        if (submitText) submitText.textContent = 'Ativar Cadastro e Acessar';
        if (title) title.textContent = 'Ative seu Acesso de Aluno';
        if (desc) desc.textContent = 'Informe seus dados de compra para criar sua senha pessoal e liberar o painel.';
        if (footerNote) {
          footerNote.innerHTML = `Ainda não adquiriu? <a href="#/planos" onclick="fecharAuthModal()" style="color:var(--c-blue); text-decoration:underline">Ver planos de assinatura</a>`;
        }
      }
    }

    function selecionarPlanoModal(plano) {
      const input = document.getElementById('auth-input-plano');
      if (input) input.value = plano;
      document.querySelectorAll('.auth-plan-pill').forEach(el => {
        if (el.getAttribute('data-plano') === plano) el.classList.add('active');
        else el.classList.remove('active');
      });
    }

    async function handleAuthSubmit(e) {
      e.preventDefault();
      const inputNome = document.getElementById('auth-input-nome');
      const inputEmail = document.getElementById('auth-input-email');
      const inputSenha = document.getElementById('auth-input-senha');
      const inputPlano = document.getElementById('auth-input-plano');
      const submitBtn = document.getElementById('auth-submit-btn');
      const errorDiv = document.getElementById('auth-error-msg');

      const nome = inputNome ? inputNome.value.trim() : '';
      const email = inputEmail ? inputEmail.value.trim() : '';
      const senha = inputSenha ? inputSenha.value : '';
      const plano = inputPlano ? inputPlano.value : 'Pro';
      const urlData = getUrlParams();

      const showError = (msg) => {
        if (errorDiv) {
          errorDiv.innerHTML = `<span style="font-size:1.1rem; line-height:1">✕</span><span>${msg}</span>`;
          errorDiv.className = 'auth-error-box';
          errorDiv.style.display = 'flex';
        }
        soundError();
      };

      if (authModoAtual === 'cadastro' && !nome) {
        showError('Por favor, informe seu nome completo.');
        return;
      }

      if (!email || !senha) {
        showError('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      try {
        const res = await cadastrarOuLoginUsuario({
          nome,
          email,
          senha,
          plano,
          orderId: urlData.orderId,
          modo: authModoAtual
        });

        if (res.success) {
          fecharAuthModal();
          updateSidebarUI();
          soundSuccess();
          launchConfetti();
          showToast(`Bem-vindo(a), ${(res.user.nome || 'Aluno').split(' ')[0]}! Acesso liberado.`, 'success');
          if (location.hash === '#/' || location.hash === '') {
            renderHome();
          } else {
            route();
          }
        } else {
          showError(res.error || 'Acesso não permitido. Verifique seus dados.');
        }
      } catch(err) {
        console.error('Erro na autenticação:', err);
        showError('Falha de comunicação. Verifique sua conexão e tente novamente.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      }
    }

    async function cadastrarOuLoginUsuario({ nome, email, senha, plano, orderId, modo = 'cadastro' }) {
      const quotas = getQuotasPorPlano(plano);
      const cleanEmail = (email || '').trim().toLowerCase();
      const cleanNome = (nome || '').trim();

      if (!cleanEmail) {
        return { success: false, error: 'Por favor, informe seu endereço de e-mail.' };
      }
      if (!senha || senha.length < 4) {
        return { success: false, error: 'A senha de acesso deve ter pelo menos 4 caracteres.' };
      }

      // =========================================================================
      // CASO 1: ABA "JÁ TENHO CADASTRO" (LOGIN COM VERIFICAÇÃO RIGOROSA)
      // =========================================================================
      if (modo === 'login') {
        // SEGURANÇA MÁXIMA: O Administrador Oficial tem acesso irrestrito garantido
        if (cleanEmail === 'enzolialua@gmail.com') {
          if (senha !== 'enzolialua') {
            return { success: false, error: 'Senha incorreta para a conta de administrador.' };
          }
          const quotasAdmin = getQuotasPorPlano('Master');
          STATE.usuario = {
            cadastrado: true,
            id: 'usr_admin',
            nome: 'Administrador JurisPass',
            email: 'enzolialua@gmail.com',
            senha: 'enzolialua',
            plano: 'Master',
            pago: true,
            role: 'admin',
            limiteQuestoes: quotasAdmin.limite,
            diasRestantes: quotasAdmin.dias,
            ultimoLogin: new Date().toISOString()
          };
          atualizarUsuarioDb(STATE.usuario);
          saveState();

          // Sincroniza com Firebase em background se ativo
          if (isFirebaseActive && firebaseAuth) {
            firebaseAuth.signInWithEmailAndPassword(cleanEmail, senha).catch(() => {
              firebaseAuth.createUserWithEmailAndPassword(cleanEmail, senha).then(cred => {
                if (cred.user && cred.user.updateProfile) cred.user.updateProfile({ displayName: 'Administrador JurisPass' });
                if (firebaseDb) firebaseDb.collection('usuarios').doc(cred.user.uid).set(STATE.usuario, { merge: true });
              }).catch(() => {});
            });
          }
          return { success: true, user: STATE.usuario, cloud: Boolean(isFirebaseActive) };
        }

        // 1. Consulta primeiro a base local de alunos cadastrados
        const usuarioLocal = buscarUsuarioPorEmail(cleanEmail);
        if (usuarioLocal) {
          if (usuarioLocal.senha !== senha) {
            return {
              success: false,
              error: 'Senha incorreta. Verifique suas credenciais e tente novamente.'
            };
          }
          if (usuarioLocal.pago === false || usuarioLocal.status === 'bloqueado') {
            return {
              success: false,
              error: 'Acesso bloqueado: Pagamento pendente ou suspenso para esta conta. Entre em contato com o suporte.'
            };
          }

          usuarioLocal.ultimoLogin = new Date().toISOString();
          atualizarUsuarioDb(usuarioLocal);
          const quotasPlano = getQuotasPorPlano(usuarioLocal.plano || 'Pro');
          STATE.usuario = {
            cadastrado: true,
            id: usuarioLocal.id || ('usr_' + Date.now()),
            nome: usuarioLocal.nome || cleanEmail.split('@')[0],
            email: usuarioLocal.email,
            senha: usuarioLocal.senha,
            plano: usuarioLocal.plano || 'Pro',
            pago: true,
            orderId: usuarioLocal.orderId || null,
            role: usuarioLocal.role || 'aluno',
            limiteQuestoes: quotasPlano.limite,
            diasRestantes: quotasPlano.dias,
            ultimoLogin: usuarioLocal.ultimoLogin
          };
          saveState();

          // Sincroniza conta com Firebase em background se ativo
          if (isFirebaseActive && firebaseAuth) {
            firebaseAuth.signInWithEmailAndPassword(cleanEmail, senha).catch(() => {
              firebaseAuth.createUserWithEmailAndPassword(cleanEmail, senha).then(cred => {
                if (cred.user && cred.user.updateProfile) cred.user.updateProfile({ displayName: usuarioLocal.nome });
                if (firebaseDb) firebaseDb.collection('usuarios').doc(cred.user.uid).set(STATE.usuario, { merge: true });
              }).catch(() => {});
            });
          }

          return { success: true, user: STATE.usuario, cloud: Boolean(isFirebaseActive) };
        }

        // 2. Se não encontrou localmente e o Firebase estiver ativo, consulta na nuvem
        if (isFirebaseActive && firebaseAuth) {
          try {
            const userCredential = await firebaseAuth.signInWithEmailAndPassword(cleanEmail, senha);
            const uid = userCredential.user.uid;
            let userData = {
              cadastrado: true,
              uid: uid,
              nome: userCredential.user.displayName || cleanEmail.split('@')[0],
              email: cleanEmail,
              plano: plano || 'Pro',
              pago: true,
              status: 'ativo'
            };

            if (firebaseDb) {
              const docRef = await firebaseDb.collection('usuarios').doc(uid).get();
              if (docRef.exists) {
                userData = Object.assign(userData, docRef.data());
              }
              if (userData.pago === false || userData.status === 'bloqueado') {
                await firebaseAuth.signOut();
                return {
                  success: false,
                  error: 'Acesso bloqueado: Não identificamos confirmação de pagamento para esta conta. Entre em contato com o suporte.'
                };
              }
            }

            atualizarUsuarioDb(userData);
            STATE.usuario = userData;
            saveState();
            return { success: true, user: userData, cloud: true };
          } catch(authError) {
            console.warn('Erro Firebase Login:', authError);
            let msg = 'Acesso não autorizado: Nenhum cadastro ativo encontrado com este e-mail.';
            if (authError.code === 'auth/wrong-password' || authError.code === 'auth/invalid-credential') {
              msg = 'Senha incorreta. Verifique suas credenciais e tente novamente.';
            } else if (authError.code === 'auth/user-not-found') {
              msg = 'Acesso negado: Este e-mail não possui cadastro ativo. Apenas alunos matriculados têm acesso ao painel.';
            } else if (authError.code === 'auth/invalid-email') {
              msg = 'E-mail em formato inválido.';
            }
            return { success: false, error: msg };
          }
        }

        // 3. Se não existe nem local nem no Firebase: Acesso negado
        return {
          success: false,
          error: 'Acesso negado: Este e-mail não possui cadastro ativo. Apenas pessoas cadastradas que já realizaram o pagamento têm acesso ao painel.'
        };
      }

      // =========================================================================
      // CASO 2: ABA "CRIAR MEU ACESSO" (PRIMEIRO ACESSO EXCLUSIVO PARA QUEM PAGOU)
      // =========================================================================
      if (modo === 'cadastro') {
        if (!cleanNome) {
          return { success: false, error: 'Por favor, informe seu nome completo para o cadastro.' };
        }

        // SEGURANÇA 4: Verifica se o e-mail já existe
        const usuarioExistente = buscarUsuarioPorEmail(cleanEmail);
        if (usuarioExistente) {
          return {
            success: false,
            error: 'Este e-mail já está cadastrado. Clique na aba "Já Tenho Cadastro" para entrar com sua senha.'
          };
        }

        // SEGURANÇA 5: Verificação estrita se a pessoa realmente realizou o pagamento
        const urlData = getUrlParams();
        const temPedidoUrl = Boolean(orderId || urlData.orderId);
        const compradoresAutorizados = getCompradoresAutorizados();
        const compradorWhitelist = compradoresAutorizados.find(c => c.email && c.email.trim().toLowerCase() === cleanEmail);

        let pagamentoConfirmado = false;
        let planoFinal = plano || 'Pro';
        let orderIdFinal = orderId || urlData.orderId || null;

        if (compradorWhitelist) {
          pagamentoConfirmado = true;
          if (compradorWhitelist.plano) planoFinal = compradorWhitelist.plano;
          if (compradorWhitelist.orderId) orderIdFinal = compradorWhitelist.orderId;
        } else if (temPedidoUrl) {
          pagamentoConfirmado = true;
          if (urlData.plano) planoFinal = urlData.plano;
        }

        // Se NÃO há comprovação de pagamento: BLOQUEIA O ACESSO
        if (!pagamentoConfirmado) {
          return {
            success: false,
            error: 'Pagamento não localizado para o e-mail "' + cleanEmail + '". O acesso é exclusivo para compradores da Kiwify ou Hotmart. Verifique o e-mail utilizado na compra ou entre em contato com o suporte.'
          };
        }

        // Cadastro Aprovado: cria novo aluno com pagamento confirmado
        const novoUsuario = {
          id: 'usr_' + Date.now(),
          nome: cleanNome,
          email: cleanEmail,
          senha: senha,
          plano: planoFinal,
          pago: true,
          orderId: orderIdFinal,
          status: 'ativo',
          role: 'aluno',
          cadastradoEm: new Date().toISOString(),
          ultimoLogin: new Date().toISOString()
        };

        const todosUsuarios = getUsuariosCadastrados();
        todosUsuarios.push(novoUsuario);
        salvarUsuariosCadastrados(todosUsuarios);

        // Se o Firebase estiver ativo, cadastra no Firebase Auth & Firestore
        if (isFirebaseActive && firebaseAuth) {
          try {
            const cred = await firebaseAuth.createUserWithEmailAndPassword(cleanEmail, senha);
            if (cred.user && cred.user.updateProfile) {
              await cred.user.updateProfile({ displayName: cleanNome });
            }
            if (firebaseDb) {
              await firebaseDb.collection('usuarios').doc(cred.user.uid).set(novoUsuario, { merge: true });
            }
            novoUsuario.uid = cred.user.uid;
          } catch(fbErr) {
            console.warn('Erro ao replicar no Firebase:', fbErr);
            if (fbErr.code === 'auth/email-already-in-use') {
              return { success: false, error: 'Este e-mail já está cadastrado no sistema. Clique na aba "Já Tenho Cadastro" acima para entrar.' };
            }
            if (fbErr.code === 'auth/operation-not-allowed') {
              return { success: false, error: 'O cadastro por E-mail/Senha precisa ser ativado no Firebase Console (Menu Authentication -> Sign-in method -> E-mail/Senha).' };
            }
          }
        }

        const quotasNovo = getQuotasPorPlano(planoFinal);
        STATE.usuario = Object.assign({}, novoUsuario, {
          cadastrado: true,
          limiteQuestoes: quotasNovo.limite,
          diasRestantes: quotasNovo.dias
        });
        saveState();
        return { success: true, user: STATE.usuario, cloud: Boolean(isFirebaseActive) };
      }

      return { success: false, error: 'Ação não reconhecida.' };
    }

    function checkAuthAndOnboarding() {
      const urlData = getUrlParams();

      // Validação de Sessão Atual: verifica se a conta em STATE.usuario ainda existe e está paga
      if (STATE.usuario && STATE.usuario.cadastrado && STATE.usuario.email) {
        const usuarioDb = buscarUsuarioPorEmail(STATE.usuario.email);
        if (!usuarioDb || usuarioDb.pago === false || usuarioDb.status === 'bloqueado') {
          STATE.usuario = null;
          saveState();
          updateSidebarUI();
        }
      }

      // Se já está autenticado com usuário válido e pagamento confirmado
      if (STATE.usuario && STATE.usuario.cadastrado && STATE.usuario.nome && STATE.usuario.pago) {
        // Se a URL trouxe um plano diferente (upgrade de compra)
        if (urlData.plano && urlData.plano !== STATE.usuario.plano) {
          STATE.usuario.plano = urlData.plano;
          const q = getQuotasPorPlano(urlData.plano);
          STATE.usuario.limiteQuestoes = q.limite;
          STATE.usuario.diasRestantes = q.dias;
          if (urlData.orderId) STATE.usuario.orderId = urlData.orderId;
          atualizarUsuarioDb(STATE.usuario);
          saveState();
          updateSidebarUI();
          showToast(`Plano ${urlData.plano} ativado com sucesso!`, 'success');
        }
        return;
      }

      // Se NÃO está autenticado, abre modal obrigatório
      const temOrigemPagamento = Boolean(urlData.orderId || urlData.plano || (urlData.gateway && urlData.gateway !== 'Checkout'));
      openAuthModal({
        planoPre: urlData.plano || 'Pro',
        nomePre: urlData.nome || '',
        emailPre: urlData.email || '',
        orderId: urlData.orderId || '',
        gateway: urlData.gateway || 'Checkout',
        origemUrl: temOrigemPagamento,
        permitirFechar: false
      });
    }

    window.handleAccountBoxClick = () => {
      if (STATE.usuario && STATE.usuario.cadastrado && STATE.usuario.nome && STATE.usuario.pago) {
        navigate('#/configuracoes');
      } else {
        openAuthModal({
          planoPre: 'Pro',
          permitirFechar: false
        });
      }
    };

    window.logoutUsuario = () => {
      if (confirm('Deseja realmente sair da sua conta neste dispositivo?')) {
        if (isFirebaseActive && firebaseAuth) {
          try { firebaseAuth.signOut(); } catch(e) {}
        }
        STATE.usuario = null;
        saveState();
        updateSidebarUI();
        navigate('#/');
        renderHome();
        checkAuthAndOnboarding();
      }
    };

    // Streak
    const hojeStr = new Date().toDateString();
    const ontemStr = new Date(Date.now() - 864e5).toDateString();
    if (STATE.ultimoAcesso !== hojeStr) {
      if (STATE.ultimoAcesso === ontemStr) STATE.streak = (STATE.streak || 0) + 1;
      else STATE.streak = 1;
      STATE.ultimoAcesso = hojeStr;
      saveState();
    }

    // Web Audio API
    let audioCtx = null;
    function playBeep(freq = 520, type = 'sine', duration = 0.08) {
      if (!STATE.somAtivo) return;
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch(e) {}
    }

    function soundSuccess() {
      playBeep(523.25, 'sine', 0.06);
      setTimeout(() => playBeep(659.25, 'sine', 0.08), 70);
      setTimeout(() => playBeep(783.99, 'sine', 0.14), 140);
    }
    function soundError() {
      playBeep(280, 'sawtooth', 0.12);
      setTimeout(() => playBeep(230, 'sawtooth', 0.18), 100);
    }

    // Sound toggle
    const soundBtn = document.getElementById('sound-btn');
    function updateSoundUI() {
      if (!soundBtn) return;
      soundBtn.innerHTML = STATE.somAtivo ? SVG.volume : SVG.mute;
      soundBtn.title = STATE.somAtivo ? 'Som ativado' : 'Som desativado';
    }
    if (soundBtn) {
      soundBtn.onclick = () => {
        STATE.somAtivo = !STATE.somAtivo;
        saveState();
        updateSoundUI();
        if (STATE.somAtivo) playBeep(580, 'sine', 0.06);
      };
    }
    updateSoundUI();

    // Theme toggle
    const themeBtn = document.getElementById('theme-btn');
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      STATE.tema = theme;
      saveState();
      if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark' ? SVG.moon : SVG.sun;
      }
    }
    applyTheme(STATE.tema || 'dark');
    if (themeBtn) {
      themeBtn.onclick = () => {
        const novo = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(novo);
        playBeep(440, 'sine', 0.05);
      };
    }

    // Confetti
    function launchConfetti() {
      const canvas = document.getElementById('confetti-canvas');
      if (!canvas || !canvas.getContext) return;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = 60;
      const pieces = [];
      const colors = ['#2563eb', '#4f46e5', '#7c3aed', '#e11d48', '#d97706', '#059669', '#0d9488'];

      for (let i = 0; i < count; i++) {
        pieces.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 220,
          y: canvas.height * 0.45,
          r: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 12,
          vy: Math.random() * -12 - 4,
          gravity: 0.35,
          tilt: Math.random() * 10,
          tiltSpeed: Math.random() * 0.1 + 0.05
        });
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        pieces.forEach(p => {
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.tilt += p.tiltSpeed;
          if (p.y < canvas.height) active = true;

          ctx.beginPath();
          ctx.lineWidth = p.r;
          ctx.strokeStyle = p.color;
          ctx.moveTo(p.x + p.tilt, p.y);
          ctx.lineTo(p.x + p.tilt + p.r, p.y + p.r);
          ctx.stroke();
        });
        if (active) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      draw();
    }

    function getProgressoModulo(materiaKey, idx) {
      if (typeof materiaKey === 'number' && idx === undefined) {
        idx = materiaKey;
        materiaKey = 'processo-penal';
      }
      const mat = MATERIAS_DIREITO[materiaKey];
      if (!mat || !mat.modulos || !mat.modulos[idx]) return 0;
      const m = mat.modulos[idx];
      let tot = 0, vistos = 0;
      m.secoes.forEach(s => s.topicos.forEach(t => {
        tot++;
        if (STATE.vistos[t.id]) vistos++;
      }));
      return tot ? (vistos / tot) : 0;
    }

    function getProgressoMateria(materiaKey) {
      const mat = MATERIAS_DIREITO[materiaKey];
      if (!mat || !mat.modulos) return 0;
      let tot = 0, vistos = 0;
      mat.modulos.forEach(m => {
        m.secoes.forEach(s => s.topicos.forEach(t => {
          tot++;
          if (STATE.vistos[t.id]) vistos++;
        }));
      });
      return tot ? (vistos / tot) : 0;
    }

    function getTotalTopicos() {
      let tot = 0;
      for (const k in MATERIAS_DIREITO) {
        MATERIAS_DIREITO[k].modulos.forEach(m => {
          m.secoes.forEach(s => {
            tot += s.topicos.length;
          });
        });
      }
      return tot;
    }

    function getTopicosVistosCount() {
      return Object.keys(STATE.vistos).filter(k => STATE.vistos[k]).length;
    }

    function navigate(hash) {
      location.hash = hash;
      window.closeMobileSidebar();
    }

    window.app = document.getElementById('app') || document.querySelector('main');
    var app = window.app;
