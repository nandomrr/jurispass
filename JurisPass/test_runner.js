// Test runner for JurisPass
const fs = require('fs');
const path = require('path');

// Setup mock browser environment
global.window = global;
global.addEventListener = () => {};
global.removeEventListener = () => {};
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  removeEventListener: () => {},
  getElementById: (id) => {
    return {
      id,
      innerHTML: '',
      textContent: '',
      value: '',
      style: {},
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
      },
      querySelectorAll: () => [],
      querySelector: () => null,
      scrollBy: () => {},
      scrollIntoView: () => {},
      addEventListener: () => {},
      setAttribute: () => {},
      removeAttribute: () => {},
      getAttribute: () => null,
      focus: () => {},
      click: () => {}
    };
  },
  querySelectorAll: (selector) => {
    return [{
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {}
      },
      getAttribute: () => null,
      setAttribute: () => {},
      removeAttribute: () => {}
    }];
  },
  querySelector: () => null,
  createElement: (tag) => ({
    tagName: tag.toUpperCase(),
    style: {},
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    setAttribute: () => {},
    removeAttribute: () => {},
    getAttribute: () => null
  }),
  body: {
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {}
  },
  documentElement: {
    setAttribute: () => {},
    getAttribute: () => 'dark'
  }
};

global.navigator = { userAgent: 'node' };
global.location = { hash: '#/' };
global.localStorage = {
  _store: {},
  getItem: function(k) { return this._store[k] || null; },
  setItem: function(k, v) { this._store[k] = String(v); },
  removeItem: function(k) { delete this._store[k]; }
};

// Mock Confetti
global.confetti = () => {};

// Load scripts in order
const basePath = 'c:/Users/enzom/Downloads/JurisPass';
const scripts = [
  'js/icons.js',
  'js/core/firebase.js',
  'js/core/state.js',
  'js/core/auth.js',
  'js/data/materias.js',
  'js/data/fluxograma.js',
  'js/data/mnemonicos.js',
  'js/data/flashcards.js',
  'js/data/questoes.js',
  'js/views/materias.js',
  'js/views/home.js',
  'js/views/codigos.js',
  'js/views/configuracoes.js',
  'js/views/arvore.js',
  'js/views/mnemonicos.js',
  'js/views/flashcards.js',
  'js/views/questoes.js',
  'js/views/revisao.js',
  'js/views/busca.js',
  'js/app.js'
];

const vm = require('vm');
console.log('--- Loading scripts ---');
scripts.forEach(s => {
  const code = fs.readFileSync(path.join(basePath, s), 'utf8');
  vm.runInThisContext(code);
  console.log('✓ Loaded:', s);
});

console.log('\n--- Testing Core Views ---');

// Mock container for rendering
const mockContainer = {
  innerHTML: '',
  style: {}
};
global.getViewContainer = (id) => mockContainer;

// 1. Home
console.log('Testing renderHome()...');
renderHome();
console.log('✓ renderHome() executed successfully. HTML length:', mockContainer.innerHTML.length);
if (!mockContainer.innerHTML.includes('Desempenho por Área Jurídica')) {
  throw new Error('Home missing Desempenho por Área Jurídica');
}
if (!mockContainer.innerHTML.includes('Ritmo Semanal de Estudos')) {
  throw new Error('Home missing Ritmo Semanal de Estudos');
}
if (!mockContainer.innerHTML.includes('Índice de Prontidão Geral')) {
  throw new Error('Home missing Prontidão Geral');
}

// 2. Materias
console.log('\nTesting renderMaterias()...');
renderMaterias();
console.log('✓ renderMaterias() executed successfully. HTML length:', mockContainer.innerHTML.length);

// 3. Test renderMateriaModulos for ALL 7 disciplines
console.log('\nTesting renderMateriaModulos() for all disciplines...');
const keys = Object.keys(MATERIAS_DIREITO);
keys.forEach(k => {
  renderMateriaModulos(k);
  console.log(`✓ Materia modulos [${k}] rendered. HTML length:`, mockContainer.innerHTML.length);
});

// 4. Test renderModulo and selectSecao for EVERY single module of EVERY single discipline
console.log('\nTesting renderModulo() and selectSecao() across all disciplines...');
let totalModulosTested = 0;
let totalSecoesTested = 0;

keys.forEach(mKey => {
  const m = MATERIAS_DIREITO[mKey];
  if (!m.modulos) return;
  m.modulos.forEach((mod, modIdx) => {
    totalModulosTested++;
    renderModulo(mKey, modIdx);
    if (mod.secoes) {
      mod.secoes.forEach((sec, secIdx) => {
        totalSecoesTested++;
        selectSecao(mKey, modIdx, secIdx);
        // Verify section info does not crash
        const info = getSecaoInfo(sec, secIdx);
        if (!info.tag || !info.name) {
          throw new Error(`getSecaoInfo invalid for ${mKey} mod ${modIdx} sec ${secIdx}`);
        }
      });
    }
  });
});
console.log(`✓ Successfully verified ${totalModulosTested} modules and ${totalSecoesTested} sections with zero errors!`);

// 5. Test Árvore
console.log('\nTesting renderArvore()...');
renderArvore('penal');
console.log('✓ renderArvore(penal) executed successfully.');

// 6. Test Flashcards
console.log('\nTesting renderFlashcards()...');
renderFlashcards();
console.log('✓ renderFlashcards() executed successfully.');

// 7. Test Questões
console.log('\nTesting renderQuestoes()...');
renderQuestoes();
console.log('✓ renderQuestoes() executed successfully.');

// 8. Test Códigos
console.log('\nTesting renderCodigos()...');
renderCodigos();
console.log('✓ renderCodigos() executed successfully.');

// 9. Test Mnemônicos
console.log('\nTesting renderMnemonicos()...');
renderMnemonicos();
console.log('✓ renderMnemonicos() executed successfully.');

console.log('\n========================================');
console.log('ALL TESTS PASSED WITH 100% INTEGRITY!');
console.log('========================================');
