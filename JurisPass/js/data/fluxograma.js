    /* ==========================================================================
       ESTRUTURA DE DADOS COMPLETA DO FLUXOGRAMA DE RECURSOS (INTERATIVO)
       ========================================================================== */
    const NOS_FLUXOGRAMA = {
      'inicio': {
        faseBadge: 'Ponto de Partida',
        titulo: 'Em qual fase procedimental ocorreu a decisão que você deseja recorrer?',
        descricao: 'Selecione abaixo o momento processual exato para ver os caminhos disponíveis e os recursos cabíveis:',
        caminhos: [
          { id: 'fase-denuncia', tag: 'Fase Inicial', cor: 'var(--c-blue)', glow: 'var(--c-blue-glow)', titulo: '1. Inquérito & Recebimento da Denúncia', desc: 'Decisões liminares do juiz sobre aceitar ou rejeitar a peça acusatória.' },
          { id: 'fase-juri-sumario', tag: 'Tribunal do Júri', cor: 'var(--c-indigo)', glow: 'var(--c-indigo-glow)', titulo: '2. Fim da 1ª Fase do Júri (Sumário de Culpa)', desc: 'Pronúncia, Impronúncia, Absolvição Sumária ou Desclassificação.' },
          { id: 'fase-juri-plenario', tag: 'Tribunal do Júri', cor: 'var(--c-purple)', glow: 'var(--c-purple-glow)', titulo: '3. Julgamento em Plenário do Júri', desc: 'Veredicto dos 7 jurados e sentença do juiz presidente.' },
          { id: 'fase-juiz-singular', tag: 'Vara Criminal', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: '4. Sentença de Juiz Singular Comum', desc: 'Condenação, absolvição ou decisão com força definitiva residual.' },
          { id: 'fase-defeitos-internos', tag: 'Decisões com Defeito', cor: 'var(--c-amber)', glow: 'var(--c-amber-glow)', titulo: '5. Decisão com Omissão ou Contradição', desc: 'Juiz esqueceu de apreciar um pedido ou a decisão é contraditória/ambígua.' },
          { id: 'fase-recurso-trancado', tag: 'Incidente Recursal', cor: 'var(--c-teal)', glow: 'var(--c-teal-glow)', titulo: '6. Recurso não admitido pelo Magistrado', desc: 'O juiz de 1º grau denegou o RESE ou não deixou a Apelação subir.' },
          { id: 'fase-execucao-penal', tag: 'Vara de Execuções', cor: 'var(--c-emerald)', glow: 'var(--c-emerald-glow)', titulo: '7. Fase de Cumprimento de Pena (LEP)', desc: 'Livramento condicional, remição de pena ou unificação após trânsito.' }
        ]
      },

      'fase-denuncia': {
        faseBadge: 'Fase Inicial da Ação Penal',
        titulo: 'O que o magistrado decidiu ao analisar a Denúncia ou Queixa?',
        descricao: 'A peça acusatória foi rejeitada liminarmente ou foi recebida?',
        caminhos: [
          { id: 'res-rejeicao-denuncia', tag: 'Decisão do Juiz', cor: 'var(--c-teal)', glow: 'var(--c-teal-glow)', titulo: 'O juiz REJEITOU a denúncia ou queixa', desc: 'Inépcia, falta de justa causa ou ausência de pressupostos.' },
          { id: 'res-recebimento-denuncia', tag: 'Decisão do Juiz', cor: 'var(--c-blue)', glow: 'var(--c-blue-glow)', titulo: 'O juiz RECEBEU a denúncia ou queixa', desc: 'O magistrado aceitou a acusação e determinou a citação do réu.' }
        ]
      },

      'res-rejeicao-denuncia': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'RESE — Recurso em Sentido Estrito',
        fundamento: 'Artigo 581, inciso I do CPP',
        prazo: '5 dias para interpor + 2 dias para razões',
        efeitos: 'Efeito Devolutivo e Juízo de Retratação (art. 589)',
        detalhe: 'O Ministério Público ou Querelante interpõe o RESE perante o juiz prolator. Se o juiz mantiver a rejeição, os autos sobem ao Tribunal para julgamento do recurso.',
        proximosDesdobramentos: [
          { id: 'fase-juizo-retratacao', titulo: 'O que o juiz pode fazer após o recurso?' }
        ]
      },

      'res-recebimento-denuncia': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Não cabe recurso ordinário (Cabe Habeas Corpus)',
        fundamento: 'Artigo 5º, LXVIII da CF e Art. 647 do CPP',
        prazo: 'Sem prazo pré-fixado (ação constitucional célere)',
        efeitos: 'Pede-se liminar para trancamento da ação penal',
        detalhe: 'Em regra, a decisão que recebe a denúncia é irrecorrível. A defesa só pode impetrar Habeas Corpus caso haja manifesta atipicidade da conduta ou ausência evidente de justa causa.',
        proximosDesdobramentos: []
      },

      'fase-juri-sumario': {
        faseBadge: '1ª Fase do Júri — Sumário de Culpa',
        titulo: 'Qual das 4 decisões o juiz togado proferiu ao final da 1ª fase?',
        descricao: 'Encerrada a instrução probatória e memoriais, o magistrado tem 4 caminhos legais exclusivos:',
        caminhos: [
          { id: 'res-juri-pronuncia', tag: 'Art. 413 CPP', cor: 'var(--c-teal)', glow: 'var(--c-teal-glow)', titulo: 'Pronúncia', desc: 'Materialidade provada e indícios suficientes de autoria. Envia o réu a Júri.' },
          { id: 'res-juri-impronuncia', tag: 'Art. 414 CPP', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'Impronúncia', desc: 'Falta de prova de materialidade ou de autoria. Não leva ao plenário.' },
          { id: 'res-juri-absolvicao', tag: 'Art. 415 CPP', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'Absolvição Sumária', desc: 'Inexistência do fato, atipicidade ou legítima defesa cabal.' },
          { id: 'res-juri-desclassificacao', tag: 'Art. 419 CPP', cor: 'var(--c-teal)', glow: 'var(--c-teal-glow)', titulo: 'Desclassificação', desc: 'O juiz entende que o crime não é doloso contra a vida e remete ao juiz comum.' }
        ]
      },

      'res-juri-pronuncia': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'RESE — Recurso em Sentido Estrito',
        fundamento: 'Artigo 581, inciso IV do CPP',
        prazo: '5 dias para interpor + 2 dias para razões',
        efeitos: 'Efeito Suspensivo restrito ao Plenário (art. 584, §2º)',
        detalhe: 'Contra a pronúncia cabe RESE. O recurso suspende unicamente o julgamento popular perante o Júri até julgamento final pelo Tribunal de Justiça.',
        proximosDesdobramentos: [
          { id: 'fase-juizo-retratacao', titulo: 'Ver Juízo de Retratação do Juiz (Art. 589)' },
          { id: 'fase-juri-plenario', titulo: 'Se confirmada a pronúncia: Ir para a 2ª Fase (Plenário)' }
        ]
      },

      'res-juri-impronuncia': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal',
        fundamento: 'Artigo 416 do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'Efeito Devolutivo. Faz coisa julgada formal.',
        detalhe: 'CUIDADO: contra a impronúncia cabe APELAÇÃO (art. 416) e não RESE! Se surgirem novas provas antes de extinta a punibilidade, o MP poderá oferecer nova denúncia.',
        proximosDesdobramentos: []
      },

      'res-juri-absolvicao': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal',
        fundamento: 'Artigo 416 do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'Efeito Devolutivo. Coisa julgada material.',
        detalhe: 'O Ministério Público pode apelar da absolvição sumária. Se transitada em julgado, o réu nunca mais poderá ser processado pelo mesmo fato.',
        proximosDesdobramentos: []
      },

      'res-juri-desclassificacao': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'RESE — Recurso em Sentido Estrito',
        fundamento: 'Artigo 581, inciso II do CPP',
        prazo: '5 dias para interpor + 2 dias para razões',
        efeitos: 'Efeito Devolutivo e Juízo de Retratação',
        detalhe: 'Trata-se de decisão que conclui pela incompetência do juízo do Júri em razão da matéria, enquadrando-se no art. 581, II do CPP.',
        proximosDesdobramentos: []
      },

      'fase-juizo-retratacao': {
        faseBadge: 'Efeito Regressivo do RESE',
        titulo: 'Após a apresentação das razões do RESE, o que o juiz decidiu?',
        descricao: 'O magistrado possui 3 caminhos privativos no art. 589 do CPP:',
        caminhos: [
          { id: 'res-retratacao-sim', tag: 'Juiz Reformou', cor: 'var(--c-emerald)', glow: 'var(--c-emerald-glow)', titulo: 'O juiz se retratou (mudou de ideia)', desc: 'O magistrado revogou a pronúncia e impronunciou o réu.' },
          { id: 'res-retratacao-nao', tag: 'Juiz Manteve', cor: 'var(--c-indigo)', glow: 'var(--c-indigo-glow)', titulo: 'O juiz manteve a decisão original', desc: 'Os autos sobem diretamente ao Tribunal competente.' },
          { id: 'res-retratacao-trancou', tag: 'Juiz Não Admitiu', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'O juiz denegou o RESE (não recebeu)', desc: 'Alegou intempestividade ou ausência de pressupostos.' }
        ]
      },

      'res-retratacao-sim': {
        faseBadge: 'Desdobramento',
        terminal: true,
        recurso: 'A parte prejudicada pode recorrer (Apelação)',
        fundamento: 'Artigo 589 c/c Art. 416 do CPP',
        prazo: '5 dias para interposição',
        efeitos: 'Vedada nova retratação sobre a mesma matéria',
        detalhe: 'Se o juiz reconsiderar a pronúncia e impronunciar o réu, o Ministério Público poderá apelar. O juiz não pode se retratar da retratação!',
        proximosDesdobramentos: []
      },

      'res-retratacao-nao': {
        faseBadge: 'Desdobramento',
        terminal: true,
        recurso: 'Subida dos autos ao Tribunal de Justiça / TRF',
        fundamento: 'Artigo 589, caput do CPP',
        prazo: 'Autos remetidos de ofício pelo cartório',
        efeitos: 'Efeito devolutivo apreciado pelo 2º grau',
        detalhe: 'O Tribunal analisará se mantém a pronúncia ou se acolhe a tese defensiva de impronúncia ou absolvição.',
        proximosDesdobramentos: []
      },

      'res-retratacao-trancou': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Carta Testemunhável',
        fundamento: 'Artigo 639, inciso I c/c Art. 640 do CPP',
        prazo: '48 HORAS corridas',
        efeitos: 'Requerida ao escrivão do cartório',
        detalhe: 'A Carta Testemunhável é o único recurso contado em horas! Serve para destrancar o RESE indevidamente denegado pelo juiz.',
        proximosDesdobramentos: []
      },

      'fase-juri-plenario': {
        faseBadge: '2ª Fase do Júri — Plenário',
        titulo: 'Qual o vício ocorrido no julgamento perante o Conselho de Sentença?',
        descricao: 'A apelação no Júri é vinculada e possui 4 alíneas exclusivas no art. 593, III do CPP:',
        caminhos: [
          { id: 'res-juri-plen-a', tag: 'Alínea "a"', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'Nulidade posterior à pronúncia', desc: 'Falha processual grave ocorrida na preparação ou sessão.' },
          { id: 'res-juri-plen-b', tag: 'Alínea "b"', cor: 'var(--c-purple)', glow: 'var(--c-purple-glow)', titulo: 'Sentença contrária à lei ou aos jurados', desc: 'Erro do juiz presidente ao lavrar a sentença final.' },
          { id: 'res-juri-plen-c', tag: 'Alínea "c"', cor: 'var(--c-blue)', glow: 'var(--c-blue-glow)', titulo: 'Erro ou injustiça na aplicação da pena', desc: 'Juiz calculou a dosimetria de forma incorreta.' },
          { id: 'res-juri-plen-d', tag: 'Alínea "d"', cor: 'var(--c-amber)', glow: 'var(--c-amber-glow)', titulo: 'Decisão manifestamente contrária à prova', desc: 'Os jurados votaram contra todas as provas dos autos.' }
        ]
      },

      'res-juri-plen-a': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal (Art. 593, III, "a")',
        fundamento: 'Artigo 593, III, "a" do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'O Tribunal ANULA o julgamento e determina NOVO JÚRI',
        detalhe: 'Vício ocorrido após a pronúncia (ex: quórum com menos de 15 jurados, quebra de incomunicabilidade).',
        proximosDesdobramentos: []
      },

      'res-juri-plen-b': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal (Art. 593, III, "b")',
        fundamento: 'Artigo 593, III, "b" c/c §1º do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'O Tribunal RETIFICA DIRETAMENTE A SENTENÇA',
        detalhe: 'O Tribunal não anula o júri: ele apenas corrige a sentença do juiz para adequá-la ao que os jurados decidiram.',
        proximosDesdobramentos: []
      },

      'res-juri-plen-c': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal (Art. 593, III, "c")',
        fundamento: 'Artigo 593, III, "c" c/c §2º do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'O Tribunal RETIFICA DIRETAMENTE A PENA',
        detalhe: 'Não há anulação do júri. Como o erro é exclusivo do juiz presidente, a 2ª instância refaz a dosimetria da pena diretamente.',
        proximosDesdobramentos: []
      },

      'res-juri-plen-d': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal (Art. 593, III, "d")',
        fundamento: 'Artigo 593, III, "d" c/c §3º do CPP',
        prazo: '5 dias para interpor + 8 dias para razões',
        efeitos: 'O Tribunal ANULA o veredicto e manda a NOVO JÚRI',
        detalhe: 'Atenção máxima: o Tribunal NÃO pode absolver o réu no mérito em razão da Soberania dos Veredictos! Só pode anular para novo júri, admitido uma ÚNICA VEZ pelo mesmo motivo.',
        proximosDesdobramentos: []
      },

      'fase-juiz-singular': {
        faseBadge: 'Vara Criminal Comum',
        titulo: 'Qual o tipo de decisão proferida pelo juiz togado singular?',
        descricao: 'Sentença definitiva de mérito ou decisão com força de definitiva?',
        caminhos: [
          { id: 'res-sentenca-merito', tag: 'Art. 593, I', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'Sentença de Condenação ou Absolvição', desc: 'Encerrou a instrução com julgamento do mérito da causa.' },
          { id: 'res-decisao-residual', tag: 'Art. 593, II', cor: 'var(--c-purple)', glow: 'var(--c-purple-glow)', titulo: 'Decisão definitiva residual sem RESE cabível', desc: 'Ex: restituição de coisas apreendidas, perda de bens, exceções.' }
        ]
      },

      'res-sentenca-merito': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal (Art. 593, I)',
        fundamento: 'Artigo 593, inciso I do CPP',
        prazo: '5 dias para interpor + 8 dias para razões (art. 600)',
        efeitos: 'Devolutivo amplo e Suspensivo na condenação',
        detalhe: 'No JECRIM (Lei 9.099/95), o prazo é de 10 dias com razões simultâneas. Veda-se reformatio in pejus em recurso exclusivo da defesa (art. 617).',
        proximosDesdobramentos: []
      },

      'res-decisao-residual': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Apelação Criminal Residual (Art. 593, II)',
        fundamento: 'Artigo 593, inciso II do CPP',
        prazo: '5 dias para interposição',
        efeitos: 'Efeito Devolutivo residual',
        detalhe: 'Só cabe apelação pelo inciso II se a decisão não estiver no rol do art. 581 (RESE). O RESE tem preferência absoluta.',
        proximosDesdobramentos: []
      },

      'fase-defeitos-internos': {
        faseBadge: 'Correção de Vício na Própria Decisão',
        titulo: 'A decisão de 1º ou 2º grau possui omissão, obscuridade ou contradição?',
        descricao: 'O magistrado deixou de analisar uma tese ou a redação é incompatível:',
        caminhos: [
          { id: 'res-embargos-declaracao', tag: 'Arts. 382/619', cor: 'var(--c-amber)', glow: 'var(--c-amber-glow)', titulo: 'Opor Embargos de Declaração', desc: 'Para suprir a omissão, esclarecer obscuridade ou eliminar contradição.' }
        ]
      },

      'res-embargos-declaracao': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Embargos de Declaração',
        fundamento: 'Artigo 382 (1º grau) e Art. 619 (2º grau) do CPP',
        prazo: '2 dias corridos (5 dias no JECRIM)',
        efeitos: 'Interrompem o prazo para outros recursos',
        detalhe: 'Julgados pelo próprio órgão prolator. Excepcionalmente podem ter efeitos infringentes (modificativos) se a correção alterar substancialmente o resultado.',
        proximosDesdobramentos: []
      },

      'fase-recurso-trancado': {
        faseBadge: 'Destrancamento de Recursos',
        titulo: 'Qual recurso teve seu seguimento denegado pelo juiz de 1º grau?',
        descricao: 'O magistrado barrou o recurso interposto pela parte:',
        caminhos: [
          { id: 'res-trancou-rese', tag: 'RESE Barrado', cor: 'var(--c-teal)', glow: 'var(--c-teal-glow)', titulo: 'O juiz denegou seguimento ao RESE', desc: 'Não admitiu o RESE alegando falta de requisito.' },
          { id: 'res-trancou-apelacao', tag: 'Apelação Não Recebida', cor: 'var(--c-rose)', glow: 'var(--c-rose-glow)', titulo: 'O juiz denegou a Apelação', desc: 'O juiz não recebeu a petição de apelação criminal.' },
          { id: 'res-obice-subida', tag: 'Apelação Recebida', cor: 'var(--c-amber)', glow: 'var(--c-amber-glow)', titulo: 'O juiz recebeu a Apelação mas obstou a subida', desc: 'Recebeu mas não encaminha os autos ao Tribunal.' }
        ]
      },

      'res-trancou-rese': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Carta Testemunhável',
        fundamento: 'Artigo 639, inciso I c/c Art. 640 do CPP',
        prazo: '48 HORAS corridas',
        efeitos: 'Requerida perante o escrivão do cartório',
        detalhe: 'O prazo corre da intimação da decisão denegatória do RESE. Se provida, o Tribunal manda processar o recurso.',
        proximosDesdobramentos: []
      },

      'res-trancou-apelacao': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'RESE — Recurso em Sentido Estrito',
        fundamento: 'Artigo 581, inciso XV do CPP',
        prazo: '5 dias para interpor + 2 dias para razões',
        efeitos: 'Efeito Devolutivo e Juízo de Retratação',
        detalhe: 'ATENÇÃO PARA A PEGADINHA: da decisão que não recebe a apelação cabe RESE (art. 581, XV)!',
        proximosDesdobramentos: []
      },

      'res-obice-subida': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Carta Testemunhável',
        fundamento: 'Artigo 639, inciso II do CPP',
        prazo: '48 HORAS corridas',
        efeitos: 'Destranca o encaminhamento ao Tribunal',
        detalhe: 'Se o juiz admitiu a apelação mas obsta injustificadamente sua remessa, a via correta é a Carta Testemunhável.',
        proximosDesdobramentos: []
      },

      'fase-execucao-penal': {
        faseBadge: 'Execução da Pena',
        titulo: 'Decisão judicial proferida na fase de execução criminal (LEP)',
        descricao: 'Após o trânsito em julgado da condenação:',
        caminhos: [
          { id: 'res-agravo-execucao', tag: 'Art. 197 LEP', cor: 'var(--c-emerald)', glow: 'var(--c-emerald-glow)', titulo: 'Decisão da Vara de Execução Penal', desc: 'Indeferimento de livramento, progressão de regime, remição.' }
        ]
      },

      'res-agravo-execucao': {
        faseBadge: 'Solução Processual',
        terminal: true,
        recurso: 'Agravo em Execução',
        fundamento: 'Artigo 197 da Lei de Execução Penal (Lei nº 7.210/84)',
        prazo: '5 dias para interpor + 2 dias para razões',
        efeitos: 'Segue o rito do RESE com Juízo de Retratação',
        detalhe: 'Todas as hipóteses de execução penal que constavam no art. 581 migraram para o Agravo em Execução (Súmula 700 do STF).',
        proximosDesdobramentos: []
      }
    };

