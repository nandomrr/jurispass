    /* ==========================================================================
       ESTADO GLOBAL DA APLICAÇÃO
       ========================================================================== */
    let STATE = {
      vistos: {},
      duvidas: {},
      respostasQuiz: {},
      flashcardsDominados: {},
      streak: 1,
      ultimoAcesso: new Date().toDateString(),
      tema: 'dark',
      somAtivo: true,
      cardFcAtual: 0,
      flowPath: ['inicio'],
      usuario: null
    };

    function loadState() {
      try {
        const salvo = localStorage.getItem('pp_apple_state_v4');
        if (salvo) {
          const parsed = JSON.parse(salvo);
          STATE = Object.assign(STATE, parsed);
          if (STATE.usuario && (
            STATE.usuario.nome === 'Marina Silva' ||
            !STATE.usuario.cadastrado ||
            !STATE.usuario.nome ||
            !STATE.usuario.email ||
            STATE.usuario.pago === false
          )) {
            STATE.usuario = null;
          }
        }
        if (!Array.isArray(STATE.flowPath) || STATE.flowPath.length === 0) STATE.flowPath = ['inicio'];
      } catch(e) {}
    }
    loadState();
    window.loadState = loadState;

    async function syncProgressoNuvem() {
      if (!isFirebaseActive || !firebaseDb || !STATE.usuario || !STATE.usuario.uid) return;
      try {
        await firebaseDb.collection('usuarios').doc(STATE.usuario.uid).set({
          vistos: STATE.vistos,
          duvidas: STATE.duvidas,
          respostasQuiz: STATE.respostasQuiz,
          flashcardsDominados: STATE.flashcardsDominados,
          streak: STATE.streak,
          ultimoAcesso: STATE.ultimoAcesso,
          plano: STATE.usuario.plano,
          orderId: STATE.usuario.orderId || null,
          atualizadoEm: new Date().toISOString()
        }, { merge: true });
      } catch(e) {
        console.warn('Erro ao sincronizar Firestore:', e);
      }
    }

    function saveState() {
      try {
        localStorage.setItem('pp_apple_state_v4', JSON.stringify(STATE));
      } catch(e) {}
      updateSidebarUI();
      syncProgressoNuvem();
    }

    function updateSidebarUI() {
      const user = STATE.usuario;
      const isCadastrado = Boolean(user && user.cadastrado && user.nome && user.pago);

      const planoExibicao = (user && user.plano) ? user.plano : 'Pro';
      const diasRestantes = (user && user.diasRestantes !== undefined) ? user.diasRestantes : 30;

      let initials = 'JP';
      if (isCadastrado && user.nome.trim()) {
        const parts = user.nome.trim().split(/\s+/);
        initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
      }

      const elAvatar = document.getElementById('sidebar-user-avatar');
      if (elAvatar) elAvatar.textContent = initials;

      const elName = document.getElementById('sidebar-user-name');
      if (elName) elName.textContent = isCadastrado ? user.nome : 'Criar Acesso';

      const elPlan = document.getElementById('sidebar-plan-label');
      if (elPlan) elPlan.textContent = isCadastrado ? `Plano ${planoExibicao} (ativo)` : 'Ativação Pendente';

      const elHeaderShort = document.getElementById('header-user-short');
      if (elHeaderShort) elHeaderShort.textContent = isCadastrado ? user.nome.trim().split(/\s+/)[0] : 'Visitante';

      const elBannerDias = document.getElementById('banner-dias-restantes');
      if (elBannerDias) elBannerDias.textContent = `${diasRestantes} dias restantes`;

      const elBannerPlanName = document.getElementById('banner-plan-name');
      if (elBannerPlanName) elBannerPlanName.textContent = `Plano ${planoExibicao}`;

      const elFooterTitle = document.getElementById('footer-plan-title');
      if (elFooterTitle) elFooterTitle.textContent = `Plano ${planoExibicao}`;

      const totalRespondidas = Object.keys(STATE.respostasQuiz || {}).length;
      const limite = planoExibicao === 'Master' ? 'Ilimitado' : ((user && user.limiteQuestoes) || 1000);
      const elFooterQuota = document.getElementById('footer-plan-quota');
      if (elFooterQuota) elFooterQuota.textContent = `${totalRespondidas} / ${limite}`;

      const elFooterBar = document.getElementById('footer-plan-bar');
      if (elFooterBar) {
        const numLimite = typeof limite === 'number' ? limite : 1000;
        const pct = planoExibicao === 'Master' ? 100 : Math.min(100, Math.round((totalRespondidas / numLimite) * 100));
        elFooterBar.style.width = `${Math.max(8, pct)}%`;
      }
    }
