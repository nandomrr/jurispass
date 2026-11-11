/* ==========================================================================
       MURAL DE MNEMÔNICOS (REGRAS E MACETES DA JANAINA)
       ========================================================================== */
    const MNEMONICOS = [
      {
        tag: 'Plenário do Júri',
        cor: 'var(--c-indigo)',
        glow: 'var(--c-indigo-glow)',
        titulo: '25 — 15 — 7 — 3 — 4 (Código do Plenário)',
        descricao: 'A sequência numérica essencial para a prova:',
        regra: '25 jurados sorteados ➔ 15 presentes para instalar (art. 463) ➔ 7 compõem o Conselho ➔ 3 recusas peremptórias sem motivo (art. 468) ➔ 4 votos encerram a votação pela maioria simples (art. 489).'
      },
      {
        tag: 'Decisões da 1ª Fase',
        cor: 'var(--c-purple)',
        glow: 'var(--c-purple-glow)',
        titulo: 'PRE — IM — AB — DES (As 4 Decisões)',
        descricao: 'Macete definitivo de cabimento recursal:',
        regra: 'PRONUNCIOU? RESE (art. 581, IV)!\nIMPRONUNCIOU? Apelação (art. 416)!\nABSOLVEU SUMARIAMENTE? Apelação (art. 416)!\nDESCLASSIFICOU para juiz comum? RESE (art. 581, II)!'
      },
      {
        tag: 'Prazos Recursais',
        cor: 'var(--c-teal)',
        glow: 'var(--c-teal-glow)',
        titulo: 'Regra do 5+2 vs 5+8',
        descricao: 'Diferença de tempo para razões recursais:',
        regra: 'RESE = 5 dias interpor + 2 dias razões (5+2).\nAPELAÇÃO = 5 dias interpor + 8 dias razões (5+8).\nJECRIM = 10 dias com interposição e razões conjuntas!'
      },
      {
        tag: 'Nulidades em Duelo',
        cor: 'var(--c-amber)',
        glow: 'var(--c-amber-glow)',
        titulo: 'Súmula 156 vs Súmula 523 do STF',
        descricao: 'Nulidade absoluta presumida vs comprovada:',
        regra: 'Súmula 156: Falta de quesito obrigatório no Júri = Nulidade Absoluta!\nSúmula 523: Falta de defesa = Nulidade Absoluta; deficiência de defesa = exige prova de prejuízo!'
      },
      {
        tag: 'Defesa Técnica',
        cor: 'var(--c-blue)',
        glow: 'var(--c-blue-glow)',
        titulo: 'Súmula 705 do STF (O Escudo da Defesa)',
        descricao: 'Conflito de vontade entre o réu leigo e seu defensor:',
        regra: 'Se o réu assinar termo dizendo que não quer recorrer, mas o defensor técnico recorrer no prazo: PREVALECE O RECURSO DO DEFENSOR!'
      },
      {
        tag: 'Efeito Carona',
        cor: 'var(--c-emerald)',
        glow: 'var(--c-emerald-glow)',
        titulo: 'Art. 580 do CPP (Efeito Extensivo)',
        descricao: 'Concurso de pessoas e aproveitamento de recurso:',
        regra: 'Decisão favorável obtida por um réu aproveita aos demais corréus que não recorreram, desde que fundada em motivo NÃO exclusivamente pessoal (ex: atipicidade do fato).'
      },
      {
        tag: 'Recurso em Horas',
        cor: 'var(--c-rose)',
        glow: 'var(--c-rose-glow)',
        titulo: 'Carta Testemunhável: 48 Horas (Art. 640)',
        descricao: 'O único prazo contado em horas no processo penal:',
        regra: 'Cabe quando o juiz tranca ou denega o RESE ou obsta o seguimento da Apelação. Prazo improrrogável: 48 HORAS!'
      },
      {
        tag: 'Prisão no Júri',
        cor: 'var(--c-indigo)',
        glow: 'var(--c-indigo-glow)',
        titulo: 'Tema 1068 do STF (Prisão Imediata)',
        descricao: 'Efeito do veredicto condenatório popular:',
        regra: 'Condenado pelo Conselho de Sentença? O STF determinou a prisão e execução IMEDIATA, independente de pena ser menor ou maior de 15 anos!'
      }
    ,
      {
        tag: 'Ordem dos Credores na Falência',
        cor: 'var(--c-teal)',
        glow: 'var(--c-teal-glow)',
        titulo: 'TRAG — TRI — QUI (O Funil da Falência)',
        descricao: 'A ordem legal de preferência dos credores concursais do Art. 83:',
        regra: '1º TRABALHISTAS (até 150 salários mínimos por credor)\n2º GARANTIA REAL (até o valor do bem gravado)\n3º TRIBUTÁRIOS (União, Estados e Municípios)\n4º QUIROGRAFÁRIOS (saldo trabalhista excedente, fornecedores e bancos)!'
      },
      {
        tag: 'Falência por Execução Frustrada',
        cor: 'var(--c-rose)',
        glow: 'var(--c-rose-glow)',
        titulo: 'A Tríplice Omissão do Art. 94, II',
        descricao: 'Não precisa protesto nem teto de 40 salários mínimos:',
        regra: 'Executado por qualquer valor que no prazo legal:\n1) NÃO PAGA;\n2) NÃO DEPOSITA; e\n3) NÃO NOMEIA BENS à penhora!\nO credor obtém certidão e pede a falência imediata!'
      },
      {
        tag: 'Cumprimento de Sentença',
        cor: 'var(--c-emerald)',
        glow: 'var(--c-emerald-glow)',
        titulo: 'Regra do 15 + 10% + 10%',
        descricao: 'Cobrança por quantia certa no Art. 523 do CPC:',
        regra: '15 dias úteis para pagar voluntariamente.\nNão pagou? +10% de MULTA e +10% de HONORÁRIOS de pleno direito!\nEm seguida, mais 15 dias úteis para opor Impugnação (Art. 525)!'
      },
      {
        tag: 'Execução de Alimentos',
        cor: 'var(--c-amber)',
        glow: 'var(--c-amber-glow)',
        titulo: 'Súmula 309 do STJ (As 3 Últimas + Vincendas)',
        descricao: 'Rito da prisão civil de até 3 meses em regime fechado:',
        regra: 'Prisão civil só cabe para as 3 prestações anteriores ao ajuizamento + as que vencerem durante o processo!\nDébitos mais antigos que 3 meses? Cobrança exclusivamente pelo rito da PENHORA de bens!'
      }
    ];
window.MNEMONICOS = MNEMONICOS;
