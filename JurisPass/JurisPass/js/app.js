/* ==========================================================================
   JURISPASS - ROTEADOR DINÂMICO & INICIALIZAÇÃO DA PLATAFORMA
   ========================================================================== */

function route() {
  // Bloqueio de Segurança: se o usuário não estiver autenticado e com pagamento ativo, impede acesso às rotas internas
  if (!STATE.usuario || !STATE.usuario.cadastrado || !STATE.usuario.pago) {
    if (typeof checkAuthAndOnboarding === 'function') {
      checkAuthAndOnboarding();
    }
    return;
  }

  const hash = location.hash.slice(2) || '';
  const parts = hash.split('/');
  const mainRoute = parts[0];
  const param = parts[1];
  const subParam = parts[2];

  // Atualização dos botões da sidebar ativa
  document.querySelectorAll('.sidebar-item').forEach(a => {
    const tab = a.getAttribute('data-tab');
    if (tab === '' && (mainRoute === '' || mainRoute === '/' || mainRoute === 'visao-geral')) {
      a.classList.add('active');
    } else if (tab === 'materias' && (mainRoute === 'materias' || mainRoute === 'materia' || mainRoute === 'mod')) {
      a.classList.add('active');
    } else if (tab === 'arvore' && mainRoute === 'arvore') {
      a.classList.add('active');
    } else if (tab === 'mnemonicos' && mainRoute === 'mnemonicos') {
      a.classList.add('active');
    } else {
      a.classList.toggle('active', tab === mainRoute);
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateSidebarUI();

  if (mainRoute === '' || mainRoute === '/' || mainRoute === 'visao-geral') {
    renderHome();
  } else if (mainRoute === 'materias') {
    renderMaterias();
  } else if (mainRoute === 'materia') {
    const mKey = param || 'penal';
    renderMateriaModulos(mKey, subParam || 'modulos');
  } else if (mainRoute === 'arvore') {
    renderArvore(param || 'penal');
  } else if (mainRoute === 'mnemonicos') {
    renderMnemonicos(param || 'penal');
  } else if (mainRoute === 'agenda') {
    navigate('#/');
  } else if (mainRoute === 'codigos') {
    renderCodigos();
  } else if (mainRoute === 'configuracoes') {
    renderConfiguracoes();
  } else if (mainRoute === 'planos') {
    navigate('#/');
  } else if (mainRoute === 'mod') {
    if (subParam !== undefined) {
      renderModulo(param, parseInt(subParam, 10));
    } else {
      renderModulo('penal', parseInt(param || 0, 10));
    }
  } else if (mainRoute === 'flashcards') {
    renderFlashcards();
  } else if (mainRoute === 'questoes') {
    renderQuestoes();
  } else if (mainRoute === 'revisao') {
    renderRevisao();
  } else if (mainRoute === 'busca') {
    renderBusca(decodeURIComponent(param || ''));
  } else {
    renderHome();
  }
}
window.route = route;

window.addEventListener('hashchange', route);

// Busca Global no Top Header
const searchInput = document.getElementById('global-search');
let searchTimeout;
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const val = e.target.value;
    searchTimeout = setTimeout(() => {
      if (val.trim().length >= 2) navigate('#/busca/' + encodeURIComponent(val.trim()));
      else if (val.trim().length === 0 && location.hash.startsWith('#/busca')) navigate('#/');
    }, 200);
  });
}

// Atalho global do teclado: pressione / ou Ctrl+K para focar na busca
window.addEventListener('keydown', (e) => {
  if ((e.key === '/' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) &&
      e.target && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }
});

// Inicialização da Nuvem (Firebase) e Verificação de Autenticação / URL
if (typeof initFirebase === 'function') {
  initFirebase();
}

if (typeof isFirebaseActive !== 'undefined' && isFirebaseActive && typeof firebaseAuth !== 'undefined' && firebaseAuth) {
  firebaseAuth.onAuthStateChanged(async (user) => {
    if (user && firebaseDb) {
      try {
        const doc = await firebaseDb.collection('usuarios').doc(user.uid).get();
        if (doc.exists) {
          const data = doc.data();
          if (data.pago === false || data.status === 'bloqueado') {
            await firebaseAuth.signOut();
            STATE.usuario = null;
            saveState();
            checkAuthAndOnboarding();
            return;
          }
          STATE.usuario = Object.assign({
            cadastrado: true,
            uid: user.uid,
            nome: user.displayName || data.nome || user.email.split('@')[0],
            email: user.email,
            plano: data.plano || 'Pro',
            pago: true
          }, data);
          saveState();
          updateSidebarUI();
        }
      } catch(e) {
        console.warn('Erro ao ler Firestore:', e);
      }
    }
  });
}

// Fluxo inicial: validação estrita de acesso
if (typeof checkAuthAndOnboarding === 'function') {
  checkAuthAndOnboarding();
}
if (STATE.usuario && STATE.usuario.cadastrado && STATE.usuario.pago) {
  route();
}
