        /* ==========================================================================
       CONFIGURAÇÃO NUVEM: GOOGLE FIREBASE
       ========================================================================== */
    const FIREBASE_CONFIG = {
      apiKey: "AIzaSyBceaw4l5F_9mwqhfzzKaQ-4E8KCtudjn8",
      authDomain: "jurispass-cb26b.firebaseapp.com",
      projectId: "jurispass-cb26b",
      storageBucket: "jurispass-cb26b.firebasestorage.app",
      messagingSenderId: "252926133467",
      appId: "1:252926133467:web:d5e8de3b75b95e97f638fe",
      measurementId: "G-CCR25S09HQ"
    };

    let firebaseApp = null;
    let firebaseAuth = null;
    let firebaseDb = null;
    let isFirebaseActive = false;

    function initFirebase() {
      try {
        let cfg = Object.assign({}, FIREBASE_CONFIG);
        try {
          const savedCfg = localStorage.getItem('jurispass_firebase_config');
          if (savedCfg) {
            const parsed = JSON.parse(savedCfg);
            if (parsed && parsed.apiKey && parsed.apiKey.length > 5) {
              cfg = Object.assign(cfg, parsed);
            }
          }
        } catch(e) {}

        if (window.firebase && cfg.apiKey && cfg.apiKey.trim().length > 10 && cfg.projectId && cfg.projectId.trim().length > 2) {
          if (!firebase.apps || !firebase.apps.length) {
            firebaseApp = firebase.initializeApp(cfg);
          } else {
            firebaseApp = firebase.app();
          }
          firebaseAuth = firebase.auth();
          firebaseDb = firebase.firestore();
          isFirebaseActive = true;
          console.log('Firebase conectado com sucesso ao projeto:', cfg.projectId);
          return true;
        }
      } catch(err) {
        console.warn('Firebase em modo Local:', err);
        isFirebaseActive = false;
      }
      return false;
    }

    function getSavedFirebaseKey(key) {
      try {
        const savedCfg = localStorage.getItem('jurispass_firebase_config');
        if (savedCfg) {
          const parsed = JSON.parse(savedCfg);
          if (parsed && parsed[key]) return parsed[key];
        }
      } catch(e) {}
      return FIREBASE_CONFIG[key] || '';
    }

    window.salvarChavesFirebasePeloPainel = () => {
      const apiKey = (document.getElementById('cfg-fb-apikey')?.value || '').trim();
      const authDomain = (document.getElementById('cfg-fb-authdomain')?.value || '').trim();
      const projectId = (document.getElementById('cfg-fb-projectid')?.value || '').trim();
      const appId = (document.getElementById('cfg-fb-appid')?.value || '').trim();

      if (!apiKey || !projectId) {
        alert('Por favor, informe ao menos a API Key e o Project ID do Firebase.');
        return;
      }

      const cfg = { apiKey, authDomain, projectId, appId };
      localStorage.setItem('jurispass_firebase_config', JSON.stringify(cfg));
      alert('Configurações salvas! A página será recarregada para inicializar o Firebase.');
      location.reload();
    };

    /* Leitor de Parâmetros da Plataforma de Pagamento (Kiwify, Hotmart, Eduzz, Stripe, Braip, Kirvano) */
    function getUrlParams() {
      const searchParams = new URLSearchParams(window.location.search);
      let hashParams = new URLSearchParams();
      if (window.location.hash.includes('?')) {
        const hashQuery = window.location.hash.split('?')[1];
        hashParams = new URLSearchParams(hashQuery);
      }

      const getParam = (keys) => {
        for (const k of keys) {
          const val = searchParams.get(k) || hashParams.get(k);
          if (val && val.trim()) return val.trim();
        }
        return null;
      };

      const cleanText = (val) => {
        if (!val) return null;
        try {
          // Converter '+' em espaço (padrão de checkout em URL encode)
          let decoded = decodeURIComponent(val.replace(/\+/g, ' ')).trim();
          // Ignorar se for uma macro não substituída pela plataforma (ex: "{name}", "[name]", ":name:")
          if (/^[\{\[\:\<].*[\}\]\:\>]$/.test(decoded)) return null;
          return decoded;
        } catch(e) {
          return val.trim();
        }
      };

      // 1. Captura de Nome
      const rawNome = cleanText(getParam([
        'name', 'nome', 'customer_name', 'client_name', 'buyer_name',
        'nome_cliente', 'cliente', 'aluno', 'full_name', 'first_name'
      ]));

      // 2. Captura de E-mail
      const rawEmail = cleanText(getParam([
        'email', 'mail', 'customer_email', 'client_email',
        'buyer_email', 'email_cliente'
      ]));

      // 3. Captura do ID de Pedido / Transação
      const rawOrderId = cleanText(getParam([
        'order_id', 'orderId', 'order', 'transaction_id', 'tid',
        'id_transacao', 'pedido', 'id_pedido', 'checkout_id'
      ]));

      // 4. Captura do Gateway / Origem
      const gateway = cleanText(getParam(['gateway', 'plataforma', 'src', 'utm_source'])) || 'Checkout';

      // 5. Captura e Reconhecimento do Plano
      const rawPlano = cleanText(getParam([
        'plano', 'plan', 'product_name', 'nome_produto', 'produto',
        'product', 'offer_name', 'oferta', 'offer', 'tier', 'item', 'descricao'
      ]));

      let plano = null;
      if (rawPlano) {
        const p = rawPlano.toLowerCase();
        if (p.includes('master') || p.includes('vitalicio') || p.includes('vip') || p.includes('anual') || p.includes('completo')) {
          plano = 'Master';
        } else if (p.includes('pro') || p.includes('premium') || p.includes('intermediario') || p.includes('mensal')) {
          plano = 'Pro';
        } else if (p.includes('basico') || p.includes('basic') || p.includes('gratis') || p.includes('free') || p.includes('starter')) {
          plano = 'Básico';
        } else {
          plano = rawPlano.charAt(0).toUpperCase() + rawPlano.slice(1);
        }
      }

      return {
        plano: plano,
        nome: rawNome,
        email: rawEmail,
        orderId: rawOrderId,
        gateway: gateway
      };
    }

    function getQuotasPorPlano(plano) {
      if (plano === 'Master') {
        return { limite: 'Ilimitado', dias: 365 };
      } else if (plano === 'Pro') {
        return { limite: 1000, dias: 30 };
      } else {
        return { limite: 10, dias: 0 };
      }
    }

    /* Toast Notification Helper */
    function showToast(mensagem, tipo = 'info') {
      const container = document.getElementById('toast-container');
      if (!container) return;
      const toast = document.createElement('div');
      toast.className = `toast-msg ${tipo}`;
      const icone = tipo === 'success' ? '✓' : (tipo === 'error' ? '✕' : 'ℹ');
      toast.innerHTML = `<span style="font-weight:bold">${icone}</span><span>${mensagem}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 320);
      }, 3500);
    }
