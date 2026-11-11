/* ==========================================================================
       BASE DE CONHECIMENTO COMPLETA
       ========================================================================== */
    // Definition of the 5 complete modules based on the slides of Profª Janaina Daniel Varalli

const JURI_MODULO = {
  id: 'juri',
  nome: 'Procedimento do Tribunal do Júri',
  iconSvg: SVG.scale,
  cor: 'var(--c-rose)',
  corGlow: 'var(--c-rose-glow)',
  artigos: 'Arts. 406 a 497 do CPP | Art. 5º, XXXVIII da CF/88',
  subtitulo: 'Procedimento bifásico escalonado, crimes dolosos contra a vida, pronúncia, plenário e Tema 1068 do STF.',
  resumo: 'Roteiro de aula da Profª Janaina Daniel Varalli sobre o rito do Júri: apuração dos crimes dolosos contra a vida (homicídio, infanticídio, aborto, induzimento ao suicídio/automutilação) e conexos.',
  pilares: [
    { t: 'Plenitude de Defesa', d: 'Garantia ampla e irrestrita ao acusado de exercer todos os meios de defesa disponíveis, mais abrangente que a ampla defesa comum (autoriza teses jurídicas e metajurídicas, como clemência).' },
    { t: 'Sigilo das Votações', d: 'Os jurados votam em segredo na sala especial, protegendo a liberdade de consciência e impedindo pressões externas sobre o Conselho de Sentença.' },
    { t: 'Soberania dos Veredictos', d: 'As decisões do júri não podem ser substituídas por outro órgão jurisdicional (tribunal togado não absolve no mérito), apenas anuladas em caso de nulidade processual ou decisão manifestamente contrária.' },
    { t: 'Competência Mínima', d: 'Competência exclusiva para julgamento dos crimes dolosos contra a vida. Súmula 603/STF: Latrocínio é crime contra o patrimônio e de competência do juiz singular, NÃO do Tribunal do Júri.' }
  ],
  secoes: [
    {
      titulo: '1ª Fase - Judicium Accusationis (Sumário de Culpa)',
      topicos: [
        {
          id: 'juri-sumario-visao',
          titulo: 'Procedimento e Prazos do Sumário de Culpa (90 dias)',
          fundamento: 'Arts. 406 a 412 do CPP | Rito Escalonado',
          conteudo: `<strong>Finalidade:</strong> A primeira fase filtra os casos para verificar se existem elementos suficientes para levar o acusado a julgamento popular.<br><br>
          <strong>Etapas do Procedimento (Conclusão em 90 dias - Art. 412 CPP):</strong><br>
          • <strong>1. Citação e Resposta Preliminar (Art. 406):</strong> O réu é citado para apresentar resposta preliminar no prazo de <strong>10 dias</strong>. A defesa pode arrolar até <strong>8 testemunhas</strong>, requerendo intimação já na peça.<br>
          • <strong>2. Análise da Resposta (Art. 409):</strong> A acusação se manifesta sobre a resposta e documentos da defesa em <strong>5 dias</strong>.<br>
          • <strong>3. Audiência de Instrução (Arts. 410 e 411):</strong> Audiência una em regra; inquirição de testemunhas, realização de diligências requeridas pelas partes em 10 dias e interrogatório do réu. Se surgirem fatos novos que exijam alteração da acusação, aplica-se a <em>mutatio libelli</em> (Art. 384, CPP).<br>
          • <strong>4. Alegações Finais Orais (Art. 411, §4º):</strong> 20 minutos, prorrogáveis por mais 10 minutos (ou por memoriais escritos em 5 dias). Em caso de corréus, o prazo é individual (§5º). Se houver assistente de acusação, dispõe de 10 minutos adicionais.<br>
          • <strong>5. Decisão do Juiz:</strong> Sentença proferida em audiência ou no prazo de 10 dias (Art. 411, §9º). Ao final da instrução, o MP poderá aditar a denúncia via mutatio libelli se os fatos não coincidirem com as provas colhidas.`,
          exemplo: 'Caso o MP ofereça denúncia por homicídio qualificado, o magistrado cita o réu para apresentar resposta à acusação em 10 dias com rol de até 8 testemunhas. Toda a instrução preliminar deve encerrar-se em até 90 dias.'
        },
        {
          id: 'juri-decisoes-1fase',
          titulo: 'As 4 Decisões ao Final da 1ª Fase (Pronúncia, Impronúncia, Absolvição e Desclassificação)',
          fundamento: 'Arts. 413 a 421 do CPP',
          conteudo: `Encerrada a instrução e as alegações finais, o juiz proferirá uma das 4 decisões possíveis:<br><br>
          <strong>1. Pronúncia (Art. 413, CPP):</strong><br>
          O juiz, convencido da <em>materialidade do fato</em> e da existência de <em>indícios suficientes de autoria ou participação</em>, pronuncia o acusado, remetendo-o ao Tribunal do Júri.<br>
          • <strong>Intimação da pronúncia (Art. 420):</strong> Pessoal para acusado preso, MP e defensor nomeado (dativo/público); para defensor constituído, por publicação.<br>
          • <strong>Inclusão de corréus (Art. 417):</strong> Permite incluir outros acusados na pronúncia; se necessário, haverá separação dos processos.<br>
          • <strong>Recurso cabível:</strong> RESE (Art. 581, IV, do CPP).<br>
          • <strong>Efeito na prescrição:</strong> Interrompe a prescrição (Art. 117, II, CP; Súmula 191 STJ: mesmo com posterior desclassificação). Súmula 21 STJ: supera excesso de prazo da prisão.<br><br>
          <strong>2. Impronúncia (Art. 414, CPP):</strong><br>
          Ocorre quando não houver prova da materialidade ou indícios suficientes de autoria. O processo não vai a Júri. Cabe a figura da <em>despronúncia</em> em caso de provimento recursal.<br>
          • <strong>Recurso cabível:</strong> Apelação (Art. 416 do CPP).<br><br>
          <strong>3. Absolvição Sumária (Art. 415, CPP):</strong><br>
          O juiz absolve sumariamente quando provada a inexistência do fato, que o réu não foi autor/partícipe, atipicidade do fato ou causa de isenção de pena/exclusão de culpabilidade.<br>
          • <strong>Atenção Crucial:</strong> NÃO há absolvição sumária por inimputabilidade (medida de segurança), SALVO se esta for a ÚNICA tese defensiva!<br>
          • <strong>Recurso cabível:</strong> Apelação (Art. 416 do CPP).<br><br>
          <strong>4. Desclassificação (Art. 419, CPP):</strong><br>
          • <strong>Própria:</strong> O juiz entende que o crime não é doloso contra a vida e remete ao juiz singular competente (reabre-se prazo para alegações finais).<br>
          • <strong>Imprópria:</strong> Desclassifica para outro crime que CONTINUA sendo doloso contra a vida, mantendo a competência do Júri.<br>
          • <strong>Recurso cabível:</strong> RESE (Art. 581, II, do CPP).`,
          exemplo: 'Se comprovado por laudo e testemunhas que o réu agiu em inequívoca legítima defesa real, o magistrado profere absolvição sumária (art. 415). A acusação pode impugnar por apelação.'
        }
      ]
    },
    {
      titulo: '2ª Fase - Judicium Causae (Preparação, Plenário e Debates)',
      topicos: [
        {
          id: 'juri-preparacao-alistamento',
          titulo: 'Preparação para o Plenário, Alistamento e Desaforamento',
          fundamento: 'Arts. 422 a 428 do CPP',
          conteudo: `A 2ª fase tem início com o trânsito em julgado da sentença de pronúncia:<br><br>
          <strong>1. Prazo Inicial (Art. 422, CPP):</strong> As partes têm <strong>5 dias</strong> para apresentar rol de testemunhas que irão depor em plenário (até 5), juntar documentos e requerer diligências.<br>
          <strong>2. Alistamento de Jurados (Arts. 425 e 426):</strong> Organização anual pelo juiz presidente, observando idoneidade moral e capacidade civil. Exclui da lista geral quem participou do Conselho de Sentença nos últimos 12 meses anteriores à publicação.<br>
          <strong>3. Desaforamento (Arts. 427 e 428, CPP):</strong><br>
          Deslocamento do julgamento para outra comarca da mesma região (preferindo as mais próximas), requerido pelas partes ou representado pelo juiz, nas seguintes hipóteses:<br>
          • Interesse da ordem pública (tumulto, perturbação da paz social);<br>
          • Dúvida sobre a imparcialidade do júri local (comoção exagerada ou pressão política);<br>
          • Segurança física do acusado;<br>
          • Excesso de serviço (julgamento não realizado em <strong>6 meses</strong> do trânsito da pronúncia).<br>
          <strong>Restrições ao desaforamento:</strong> Não cabe na pendência de recurso contra a pronúncia nem após já realizado o júri (salvo fato superveniente em júri anulado). Súmula 712 STF: é nula a decisão que determina o desaforamento sem prévia audiência da defesa.`,
          exemplo: 'Em cidade do interior sob domínio de milícia armada, havendo ameaça aos jurados locais, o relator no Tribunal defere o desaforamento do julgamento para a comarca da capital mais próxima.'
        },
        {
          id: 'juri-conselho-sentenca',
          titulo: 'Composição do Júri e Conselho de Sentença (Quóruns: 25 / 15 / 7 / 3)',
          fundamento: 'Arts. 447 a 472 do CPP',
          conteudo: `<strong>Estrutura e Números-Chave:</strong><br>
          • <strong>25 Jurados Sorteados:</strong> Sorteados para a sessão perante o plenário (Arts. 432 a 435).<br>
          • <strong>Mínimo de 15 presentes:</strong> Para instalar a sessão, é obrigatória a presença de pelo menos 15 jurados (Art. 463). Menos de 15 gera <strong>nulidade absoluta</strong> (Art. 564, III, 'i').<br>
          • <strong>7 Jurados no Conselho de Sentença:</strong> Sorteados dentre os presentes para compor o Conselho de Sentença.<br>
          • <strong>3 Recusas Peremptórias:</strong> A defesa pode recusar até 3 jurados e a acusação até 3 jurados, sem necessidade de qualquer motivação (Art. 468).<br><br>
          <strong>Vedações e Incomunicabilidade (Art. 466, §1º):</strong><br>
          Após sorteados, os 7 jurados não podem comunicar-se entre si ou com terceiros, nem manifestar opinião sobre o processo, sob pena de nulidade absoluta (Art. 564, III, 'j'). O compromisso formal de sigilo é prestado antes do início da instrução (Art. 472).<br>
          <strong>Impedimentos Legais (Arts. 448 a 452):</strong> Parentes, cônjuges, quem já atuou em julgamento anterior do mesmo processo (Súmula 206 STF) ou manifestou intenção prévia de condenar/absolver.`,
          exemplo: 'Se na abertura da sessão comparecerem apenas 14 jurados, o juiz presidente não pode abrir os trabalhos, devendo adiar e sortear suplentes sob pena de anulação total por vício de quórum.'
        },
        {
          id: 'juri-instrucao-debates',
          titulo: 'Instrução em Plenário, Proibições do Art. 478 e Tempos dos Debates',
          fundamento: 'Arts. 473 a 481 do CPP',
          conteudo: `<strong>Ordem da Instrução em Plenário (Art. 473):</strong><br>
          1º Ofendido (vítima, se viva) → 2º Testemunhas de acusação → 3º Testemunhas de defesa → 4º Interrogatório do acusado (perguntas diretas das partes; jurados perguntam por intermédio do juiz presidente).<br>
          • <strong>Algemas (Art. 474, §3º):</strong> O uso não pode ser automático; exige justificativa expressa no caso concreto (Súmula Vinculante 11).<br><br>
          <strong>Proibições durante os debates (Art. 478, CPP - sob pena de nulidade):</strong><br>
          As partes não podem referir-se:<br>
          1. À decisão de pronúncia ou decisões posteriores como argumento de autoridade;<br>
          2. Ao uso de algemas como argumento de autoridade para presumir periculosidade;<br>
          3. Ao silêncio do réu ou à falta de interrogatório em seu prejuízo.<br>
          • <strong>Art. 479 (Documentos):</strong> Exibição de documento ou objeto só permitida se juntada com <strong>pelo menos 3 dias úteis</strong> de antecedência e ciência prévia à outra parte.<br><br>
          <strong>Tempo dos Debates (Art. 477):</strong><br>
          • <strong>Regra geral (1 réu):</strong> 1h30 para acusação e 1h30 para defesa. Réplica: 1h; Tréplica: 1h (só há tréplica se houver réplica).<br>
          • <strong>Mais de um réu:</strong> O tempo sobe para <strong>2h30</strong> de acusação e <strong>2h30</strong> de defesa; réplica e tréplica passam para <strong>2h</strong> cada.<br>
          • <strong>Divisão do tempo:</strong> Se houver mais de um acusador ou defensor, o tempo disponível é dividido entre si.`,
          exemplo: 'Se o promotor disser aos jurados: "Vejam que o juiz togado já o pronunciou, reconhecendo que ele é culpado!", comete infração expressa ao art. 478, I, gerando nulidade imediata do julgamento.'
        }
      ]
    },
    {
      titulo: 'Votação dos Quesitos, Sentença e Tema 1068 STF',
      topicos: [
        {
          id: 'juri-quesitos-sala-secreta',
          titulo: 'Questionário, Sala Secreta e Ordem dos Quesitos',
          fundamento: 'Arts. 482 a 491 do CPP',
          conteudo: `<strong>Procedimento na Sala Secreta (Art. 485):</strong><br>
          O juiz, os 7 jurados, o MP, o assistente, o defensor, o escrivão e o oficial de justiça recolhem-se à sala secreta (ou esvazia-se o plenário). Cédulas "sim" e "não" são distribuídas e recolhidas separadamente (usadas e não usadas), resguardando o sigilo do voto.<br><br>
          <strong>Ordem Obrigatória dos Quesitos (Art. 483):</strong><br>
          • <strong>1º Quesito - Materialidade:</strong> "O fato criminoso aconteceu?" Se mais de 3 jurados responderem "não", encerra-se e o réu é <strong>absolvido</strong>.<br>
          • <strong>2º Quesito - Autoria/Participação:</strong> "O acusado praticou ou concorreu para o fato?" Se mais de 3 responderem "não", réu absolvido. Respondido "sim" por 4 votos em I e II, passa ao III.<br>
          • <strong>3º Quesito - Absolvição Genérica Obrigatória:</strong> <em>"O jurado absolve o acusado?"</em> (Art. 483, III; Súmula 156 STF). Se 4 jurados responderem "sim", o réu está imediatamente absolvido por clemência ou qualquer tese defensiva!<br>
          • <strong>4º Quesitos Especiais:</strong> Desclassificação, tentativa ou divergência quanto à tipicidade.<br>
          • <strong>5º Causas de Diminuição, Aumento e Qualificadoras:</strong> Teses da defesa são votadas antes das agravantes/qualificadoras da acusação (Súmula 162 STF).<br><br>
          <strong>Regra da Maioria (Art. 489):</strong> As decisões são tomadas por maioria de <strong>4 votos</strong>. Abertos 4 votos num mesmo sentido, a apuração é interrompida para resguardar o sigilo da votação.`,
          exemplo: 'Se ao abrir as cédulas do quesito genérico de absolvição forem contabilizados 4 votos "sim", o réu está absolvido. Não se apuram os 3 votos restantes para que ninguém saiba como cada jurado votou.'
        },
        {
          id: 'juri-sentenca-tema-1068',
          titulo: 'Sentença (Art. 492) e Execução Imediata no Júri (STF Tema 1068)',
          fundamento: 'Art. 492 do CPP | STF RE 1.235.340 (Tema 1068)',
          conteudo: `<strong>Prolação da Sentença pelo Juiz Presidente (Art. 492):</strong><br>
          • <strong>Condenação:</strong> O juiz togado fixa a pena com base no art. 387, verifica agravantes/atenuantes, regime inicial e determina as providências relativas à prisão.<br>
          • <strong>Absolvição:</strong> O réu é posto imediatamente em liberdade (salvo se preso por outro crime) ou é aplicada medida de segurança se for absolvição imprópria.<br>
          • <strong>Desclassificação:</strong> Para crime comum, o juiz presidente assume a competência e julga em seguida.<br><br>
          <strong>STF — Tema 1068 (RE 1.235.340 - Repercussão Geral):</strong><br>
          <em>"É constitucional a execução imediata da pena imposta pelo Tribunal do Júri, independentemente da duração da condenação (seja ela menor, igual ou superior a 15 anos)."</em><br>
          A decisão do STF apoia-se diretamente na <strong>soberania dos veredictos</strong> (Art. 5º, XXXVIII, 'c', CF). O réu condenado em plenário tem a prisão executada de imediato na própria sessão, sem necessidade de aguardar o trânsito em julgado!`,
          exemplo: 'Réu condenado a 8 anos de reclusão pelo Tribunal do Júri tem mandado de prisão expedido e cumprido de forma imediata em plenário, conforme o Tema 1068 do STF.'
        },
        {
          id: 'juri-quadro-sumulas',
          titulo: 'Quadro Sinóptico e Súmulas Obrigatórias do Júri',
          fundamento: 'Jurisprudência Consolidada STF e STJ',
          conteudo: `<strong>Quadro Sinóptico dos Números-Chave:</strong><br>
          • <strong>25</strong> jurados sorteados para a sessão (Arts. 432-435).<br>
          • <strong>15</strong> número mínimo de jurados para instalar a sessão (Art. 463).<br>
          • <strong>7</strong> jurados que compõem o Conselho de Sentença.<br>
          • <strong>3</strong> recusas peremptórias imotivadas para cada parte (Art. 468).<br>
          • <strong>4</strong> votos para formar maioria e decidir qualquer quesito (Art. 489).<br><br>
          <strong>Súmulas Cruciais para Provas e Prática:</strong><br>
          • <strong>Súmula Vinculante 45 / Súmula 721 STF:</strong> A competência do Júri prevalece sobre foro por prerrogativa previsto exclusivamente em Constituição Estadual.<br>
          • <strong>Súmula 713 STF:</strong> O efeito devolutivo da apelação contra decisões do júri é adstrito aos fundamentos da sua interposição (alíneas a, b, c, d do art. 593, III).<br>
          • <strong>Súmula 712 STF:</strong> É nula a decisão que determina o desaforamento de processo do júri sem audiência da defesa.<br>
          • <strong>Súmula 603 STF:</strong> Competência para latrocínio é do juiz singular, não do júri.<br>
          • <strong>Súmula 206 STF:</strong> É nulo o julgamento com jurado que atuou em júri anterior do mesmo processo.<br>
          • <strong>Súmula 162 STF:</strong> Nulidade absoluta quando quesitos da defesa não precedem circunstâncias agravantes.<br>
          • <strong>Súmula 156 STF:</strong> É absoluta a nulidade do julgamento pelo júri por falta de quesito obrigatório.<br>
          • <strong>Súmula 191 STJ:</strong> A pronúncia interrompe a prescrição, ainda que haja desclassificação posterior.<br>
          • <strong>Súmula 21 STJ:</strong> Pronunciado o réu, fica superada a alegação de excesso de prazo na instrução.`,
          exemplo: 'Caso o tribunal estadual julgue recurso de apelação e decida matéria de alínea não invocada pela defesa na petição de interposição, viola diretamente a Súmula 713 do STF.'
        }
      ]
    }
  ]
};

const NULIDADES_MODULO = {
  id: 'nulidades',
  nome: 'Teoria Geral e Nulidades no Processo Penal',
  iconSvg: SVG.scale,
  cor: 'var(--c-rose)',
  corGlow: 'var(--c-rose-glow)',
  artigos: 'Arts. 563 a 573 do CPP | Art. 5º, LIV e LV da CF/88',
  subtitulo: 'Sanção por defeito processual, nulidades relativas e absolutas, Pas de nullité sans grief, rol do Art. 564 e momentos de arguição.',
  resumo: 'Roteiro de aula da Profª Janaina Daniel Varalli sobre a teoria e prática das nulidades: vícios dos atos, saneamento, preclusão, momentos processuais de arguição e causalidade.',
  pilares: [
    { t: 'Natureza de Sanção', d: 'A nulidade é um vício, defeito ou imperfeição que gera sanção de ineficácia do ato processual no todo ou em parte, tornando o ato como não realizado.' },
    { t: 'Pas de nullité sans grief', d: 'Princípio da transcendência (Arts. 563 e 566 CPP): nenhum ato será declarado nulo se não houver prejuízo efetivo para acusação ou defesa ou se não influiu na apuração da verdade substancial.' },
    { t: 'Nulidade Relativa vs Absoluta', d: 'Absoluta: norma constitucional de ordem pública, a qualquer tempo, insanável, prejuízo presumido. Relativa: interesse secundário das partes, momento oportuno (Art. 571), sanável (Art. 572), prejuízo deve ser provado.' },
    { t: 'Vedação à Torpeza', d: 'Art. 565 CPP: Nenhuma das partes pode arguir nulidade a que haja dado causa ou concorrido, nem nulidade de formalidade cuja observância só interesse à parte contrária.' }
  ],
  secoes: [
    {
      titulo: 'Teoria Geral, Atos Nulos e Princípios Fundamentais',
      topicos: [
        {
          id: 'nul-teoria-classificacao',
          titulo: 'Classificação dos Atos: Nulo, Anulável, Inexistente e Princípio Pas de nullité sans grief',
          fundamento: 'Arts. 563 e 566 do CPP | Princípio do Prejuízo',
          conteudo: `<strong>Conceito de Nulidade:</strong> É o vício, falha ou imperfeição capaz de tornar ineficaz o processo no todo ou em parte. Sua natureza jurídica é de <strong>sanção processual</strong>.<br><br>
          <strong>Graus de Invalidade do Ato:</strong><br>
          • <strong>Ato Inexistente:</strong> Não possui os elementos constitutivos mínimos para existir no mundo jurídico; não produz efeitos e NUNCA se convalida. Exemplo do roteiro: <em>sentença que não foi assinada pelo juiz que a proferiu</em> (a assinatura é requisito de existência).<br>
          • <strong>Ato Nulo (Nulidade Absoluta):</strong> Vício insanável que agride garantia constitucional de ordem pública. Prejuízo presumido, arguível a qualquer tempo e reconhecível de ofício pelo magistrado.<br>
          • <strong>Ato Anulável (Nulidade Relativa):</strong> Produz efeitos regulares até ser invalidado; sanável por preclusão ou ratificação.<br><br>
          <strong>Princípio “Pas de nullité sans grief” (Arts. 563 e 566):</strong><br>
          • <em>Art. 563:</em> Nenhum ato será declarado nulo, se da nulidade não resultar prejuízo para a acusação ou para a defesa.<br>
          • <em>Art. 566:</em> Não será declarada a nulidade de ato processual que não houver influído na apuração da verdade substancial ou na decisão da causa.<br>
          Não basta mera irregularidade formal: é indispensável que o vício tenha afetado o resultado do processo ou a apuração dos fatos.`,
          exemplo: 'Se o juiz proferir sentença oral gravada mas esquecer de assinar o termo de audiência impresso, a sentença é considerada juridicamente inexistente por ausência de requisito essencial do ato.'
        },
        {
          id: 'nul-absoluta-vs-relativa',
          titulo: 'Diferenças Estruturais: Nulidade Absoluta vs Nulidade Relativa',
          fundamento: 'Arts. 564, 571 e 572 do CPP',
          conteudo: `<strong>Tabela Comparativa do Roteiro de Aula:</strong><br><br>
          <strong>Nulidade Relativa (Interesse Privado / Secundário):</strong><br>
          • Deve ser arguida em <strong>momento oportuno</strong> (Art. 571), sob pena de preclusão;<br>
          • Só é declarada se a parte <strong>alegar e provar o prejuízo concreto</strong> sofrido;<br>
          • <strong>É sanável</strong> (Art. 572: se não arguida no prazo, se o ato atingiu sua finalidade ou se houve aceitação tácita dos efeitos).<br><br>
          <strong>Nulidade Absoluta (Ordem Pública / Garantia Constitucional):</strong><br>
          • Pode ser arguida <strong>a qualquer tempo</strong> e grau de jurisdição (não há preclusão);<br>
          • O <strong>prejuízo é presumido</strong> (não depende de demonstração concreta da parte);<br>
          • <strong>Insanável:</strong> não pode ser corrigida pelo mero decurso do tempo;<br>
          • <strong>Indisponível:</strong> as partes não podem renunciar à observância da garantia;<br>
          • <strong>Declaração de ofício:</strong> o próprio juiz ou tribunal deve reconhecê-la sem provocação das partes.<br>
          <em>Critério de exclusão:</em> Por exclusão do rol do art. 572, são absolutas as hipóteses do art. 564, incisos I, II, III (letras a, b, c, d-1ª parte, e-1ª parte, f, g, i, j, k, l, m, n, o, p) e IV.`,
          exemplo: 'A ausência de citação válida do réu é nulidade absoluta insanável; já a intimação feita com prazo inferior sem protesto oportuno na primeira audiência considera-se convalidada por preclusão.'
        }
      ]
    },
    {
      titulo: 'Nulidades em Espécie (Rol do Art. 564 do CPP)',
      topicos: [
        {
          id: 'nul-juizo-partes-564',
          titulo: 'Vícios do Juízo, Ilegitimidade das Partes e Falta de Quórum',
          fundamento: 'Art. 564, I, II e III, \'p\', do CPP',
          conteudo: `<strong>1. Vícios Quanto ao Juízo (Art. 564, I, CPP):</strong><br>
          • <strong>Incompetência do Juízo:</strong> Juiz que não possui competência legal. <em>Art. 567 CPP:</em> Anula somente os atos decisórios, remetendo os autos ao juízo competente (que pode ratificar os atos instrutórios). Competência de matéria e pessoa é absoluta.<br>
          • <strong>Suspeição, Impedimento e Suborno:</strong><br>
          - <em>Impedimento:</em> Proibição legal objetiva. Exemplo: juiz que atuou anteriormente como advogado da parte no mesmo processo (ato inexistente/nulo absoluto).<br>
          - <em>Incompatibilidade:</em> Circunstância que torna inconciliável a atuação conjunta.<br>
          - <em>Suborno:</em> Violação de deveres funcionais por vantagem indevida (crime de corrupção, concussão ou prevaricação; nulidade absoluta).<br><br>
          <strong>2. Ilegitimidade das Partes (Art. 564, II, CPP):</strong><br>
          • <strong>Ilegitimidade ad causam:</strong> Falta de legitimidade material para figurar no polo. Exemplo: MP oferece denúncia em crime de ação penal privada exclusiva. Gera <strong>nulidade absoluta</strong> <em>ab initio</em>.<br>
          • <strong>Ilegitimidade ad processum:</strong> Vício de capacidade ou representação. Exemplo do slide: vítima de 15 anos que sofre crime de ação privada mas propõe sem a assistência legal. É <strong>nulidade relativa</strong>, sanável a qualquer tempo mediante ratificação dos atos (Art. 568 do CPP).<br><br>
          <strong>3. Falta de Quórum Legal nos Tribunais (Art. 564, III, 'p' c/c Art. 615):</strong><br>
          Julgamento realizado com número inferior de desembargadores ou ministros exigido por lei ou regimento interno. Juízes suspeitos ou impedidos não podem computar quórum. Nulidade absoluta.`,
          exemplo: 'Se a câmara criminal julgar apelação com apenas 2 desembargadores quando o regimento exige quórum mínimo de 3, o acórdão é nulo de pleno direito por vício de formação.'
        },
        {
          id: 'nul-formulas-termos-564',
          titulo: 'Falta de Fórmulas e Termos Essenciais (Citação, Defesa, MP e Quesitos)',
          fundamento: 'Art. 564, III e IV, e Parágrafo Único do CPP',
          conteudo: `<strong>Hipóteses Específicas do Art. 564, III e IV:</strong><br><br>
          • <strong>Falta de Denúncia/Queixa ou Condição de Procedibilidade (III, 'a'):</strong> Falta de representação da vítima ou requisição do Ministro da Justiça nas hipóteses legais.<br>
          • <strong>Falta de Exame de Corpo de Delito (Art. 158 c/c 564, III, 'b'):</strong> Em crimes que deixam vestígios materiais (ex.: lesões corporais). <em>Art. 167:</em> Prova testemunhal só supre a falta do laudo se os vestígios tiverem comprovadamente desaparecido!<br>
          • <strong>Nomeação de Defensor (III, 'c'):</strong> O acusado tem direito irrenunciável à defesa técnica. <strong>Súmula 523 do STF:</strong> <em>"No processo penal, a falta da defesa constitui nulidade absoluta, mas a sua deficiência só o anulará se houver prova de prejuízo para o réu."</em><br>
          • <strong>Intervenção do MP (III, 'd'):</strong> Na ação pública intentada pelo MP, sua ausência gera <strong>nulidade absoluta</strong>; na ação privada exclusiva, se o MP deixar de intervir como fiscal da lei, gera <strong>nulidade relativa</strong>.<br>
          • <strong>Falta de Citação (III, 'e'):</strong> Réu não chamado a juízo: nulidade absoluta. <em>Art. 570 CPP:</em> A falta ou nulidade da citação considera-se sanada se o réu comparecer antes da consumação do ato, ainda que declare fazê-lo apenas para argui-la.<br>
          • <strong>Falta de Interrogatório:</strong> Meio de defesa e meio de prova; ausência gera nulidade absoluta (mesmo em réu revel, antes de subir recurso).<br>
          • <strong>Falta de Concessão de Prazos Legais:</strong> Cerceamento de defesa e violação do contraditório.<br>
          • <strong>Tribunal do Júri (Parágrafo Único):</strong> Nulidade por deficiência dos quesitos (ambíguos, confusos), respostas inválidas ou contradição inconciliável entre as respostas dos jurados.`,
          exemplo: 'Advogado que se limita a assinar petição dizendo "requeiro a absolvição por ser de justiça" sem analisar provas ou teses incorre na deficiência da defesa técnica (Súmula 523/STF), devendo o tribunal anular se demonstrado o prejuízo.'
        }
      ]
    },
    {
      titulo: 'Momentos de Arguição, Saneamento e Efeitos',
      topicos: [
        {
          id: 'nul-momentos-arguicao-571',
          titulo: 'Momentos Processuais para Arguição e Preclusão (Art. 571 do CPP)',
          fundamento: 'Arts. 571 e 572 do CPP',
          conteudo: `<strong>Regra Geral:</strong> A nulidade deve ser arguida na <strong>primeira oportunidade</strong> em que a parte se manifestar nos autos sob pena de preclusão (perda da faculdade processual).<br><br>
          <strong>Momentos Específicos do Art. 571:</strong><br>
          • <strong>Tribunal do Júri:</strong> As nulidades da instrução devem ser arguidas na fase das <strong>alegações finais</strong>, antes da pronúncia (inciso I);<br>
          • <strong>Rito Ordinário:</strong> Na resposta à acusação (se o vício já existia) ou nas alegações finais por memoriais/orais (se surgiu durante a instrução);<br>
          • <strong>Rito Sumário:</strong> Na resposta à acusação, logo após aberta a audiência de instrução ou nas alegações finais;<br>
          • <strong>Em Plenário, Audiência ou Sessão de Julgamento:</strong> A nulidade deve ser arguida <strong>imediatamente logo após ocorrer</strong> (inciso VIII).<br><br>
          <strong>Hipóteses de Convalidação (Art. 572 CPP):</strong><br>
          As nulidades relativas consideram-se sanadas se: 1) Não arguidas no momento oportuno (preclusão); 2) O ato, praticado de outra forma, atingiu seu fim essencial; 3) A parte aceitou tacitamente seus efeitos (renúncia tácita).`,
          exemplo: 'Se o defensor não contraditou a testemunha impedida no exato momento de sua qualificação na audiência e nada disse nas alegações orais, opera-se a preclusão temporal do art. 571, VIII.'
        },
        {
          id: 'nul-legitimidade-causalidade',
          titulo: 'Legitimidade, Vedação à Torpeza (Art. 565) e Princípio da Causalidade',
          fundamento: 'Arts. 565 e 573 do CPP | Súmula 160 do STF',
          conteudo: `<strong>Regras de Legitimidade e Interesse (Art. 565):</strong><br>
          • <strong>Vedação à torpeza:</strong> Nenhuma parte pode invocar nulidade a que haja dado causa, ou para a qual tenha concorrido intencionalmente.<br>
          • <strong>Ausência de interesse:</strong> Só quem experimentou gravame pode requerer a declaração.<br>
          • <strong>Súmula 160 do STF (Garantia Máxima):</strong> <em>"É nula a decisão do Tribunal que acolhe, contra o réu, nulidade não arguida no recurso da acusação, ressalvados os casos de recurso de ofício."</em> Em recurso exclusivo da defesa, o tribunal NÃO pode decretar de ofício nulidade que prejudique o réu!<br><br>
          <strong>Princípio da Causalidade / Extensão (Art. 573, §1º e §2º):</strong><br>
          A nulidade de um ato contamina todos os atos subsequentes que dele dependam diretamente ou sejam sua consequência (nulidade derivada).<br>
          • <em>Art. 573, §2º:</em> O juiz que pronunciar a nulidade declarará expressamente a quais atos ela se estende.<br>
          • Atos anteriores válidos e independentes são integralmente <strong>preservados</strong>.<br><br>
          <strong>Vias de Impugnação:</strong> Se o juiz anula o processo, cabe <strong>RESE</strong> (Art. 581, XIII); se indefere o pedido de nulidade, preliminar de <strong>Apelação</strong>; se houver coação na liberdade de ir e vir, <strong>Habeas Corpus</strong>; após o trânsito em julgado, <strong>Revisão Criminal</strong>.`,
          exemplo: 'Se a busca e apreensão domiciliar for declarada nula por ausência de mandado judicial, toda a prova pericial e as confissões dela derivadas são também contaminadas (teoria dos frutos da árvore envenenada).'
        }
      ]
    }
  ]
};

const RECURSOS_MODULO = {
  id: 'teoria-recursos',
  nome: 'Teoria Geral dos Recursos Criminais',
  iconSvg: SVG.scale,
  cor: 'var(--c-rose)',
  corGlow: 'var(--c-rose-glow)',
  artigos: 'Arts. 574 a 580 do CPP | Art. 5º, LV da CF/88',
  subtitulo: 'Pressupostos objetivos e subjetivos, fungibilidade, Súmula 705 STF, indisponibilidade do MP e efeitos dos recursos.',
  resumo: 'Roteiro de aula da Profª Janaina Daniel Varalli sobre Teoria Geral dos Recursos: duplo grau, correspondência, prazos em dias corridos, recurso de ofício, desistência e efeitos extensivo/regressivo.',
  pilares: [
    { t: 'Duplo Grau de Jurisdição', d: 'Fundamento no Art. 5º, LV, da CF/88: direito subjetivo ao reexame da decisão por órgão judicante colegiado de instância superior.' },
    { t: 'Fungibilidade Recursal', d: 'Art. 579 CPP: admissão de um recurso pelo outro se inexistir erro grosseiro ou má-fé e tiver sido protocolado dentro do prazo do recurso correto.' },
    { t: 'Súmula 705 do STF', d: 'A renúncia do réu ao direito de recorrer não impede a interposição do recurso por seu defensor técnico. Prevalece o direito constitucional à defesa técnica!' },
    { t: 'Indisponibilidade do MP', d: 'Art. 576 CPP: O Ministério Público tem liberdade para recorrer, mas uma vez interposto o recurso, NÃO pode dele desistir!' }
  ],
  secoes: [
    {
      titulo: 'Pressupostos Recursais e Princípios Fundamentais',
      topicos: [
        {
          id: 'tec-pressupostos-objetivos',
          titulo: 'Pressupostos Objetivos: Previsão Legal, Tempestividade e Forma',
          fundamento: 'Arts. 578, 579 e 798 do CPP',
          conteudo: `<strong>Os 3 Pressupostos Objetivos Essenciais:</strong><br><br>
          <strong>1. Previsão Legal (Taxatividade e Correspondência):</strong><br>
          O recurso deve estar previamente tipificado no ordenamento jurídico processual penal. Não se criam recursos por analogia. Pelo <em>princípio da correspondência</em>, para cada espécie de ato judicial existe um recurso específico adequado.<br><br>
          <strong>2. Forma Prevista em Lei e Princípio da Fungibilidade (Art. 579 CPP):</strong><br>
          Regra: petição escrita ou termo nos autos (Art. 578).<br>
          • <em>Fungibilidade:</em> Salvo a hipótese de má-fé ou erro grosseiro, a parte não será prejudicada pela interposição de um recurso por outro. O juiz mandará processar o recurso pelo rito do cabível, desde que interposto no prazo do recurso correto.<br><br>
          <strong>3. Tempestividade e Contagem dos Prazos (Art. 798 CPP):</strong><br>
          • Os prazos no Processo Penal correm em <strong>dias corridos</strong> (NÃO são dias úteis!).<br>
          • Não se computa o dia do começo, incluindo-se o do vencimento (§1º). Se o prazo findar em domingo ou feriado, prorroga-se até o primeiro dia útil subsequente (§3º).`,
          exemplo: 'Se a defesa interpõe RESE no lugar de Apelação dentro do prazo comum de 5 dias e a jurisprudência oscila sobre a natureza terminativa da decisão, o magistrado aplica o art. 579 e processa como apelação.'
        },
        {
          id: 'tec-pressupostos-subjetivos',
          titulo: 'Pressupostos Subjetivos: Sucumbência, Interesse e Legitimidade (Art. 577)',
          fundamento: 'Arts. 577 do CPP | Súmula 705 do STF',
          conteudo: `<strong>1. Sucumbência (Gravame / Prejuízo):</strong><br>
          Desconformidade entre o que a parte requereu e o comando decisório emitido pelo magistrado.<br>
          • <em>Classificação da Sucumbência:</em> Única (atinge uma só parte); Múltipla; Paralela; Recíproca (ambas sofreram gravame parcial); Total ou Parcial.<br><br>
          <strong>2. Interesse de Agir:</strong><br>
          Necessidade e utilidade do pronunciamento recursal. Exemplo do roteiro: <em>O réu tem interesse em recorrer de sentença absolutória proferida por falta de provas (art. 386, VII) para buscar a absolvição por estar provada a inexistência do fato (art. 386, I)</em>, com o objetivo de produzir efeitos na esfera cível indenizatória!<br><br>
          <strong>3. Legitimidade Recursal (Art. 577 CPP):</strong><br>
          Podem recorrer: MP, querelante, réu, defensor ou procurador.<br>
          • <strong>MP em favor do réu:</strong> O MP atua como fiscal da lei (<em>custos legis</em>) e possui legitimidade recursal para recorrer em benefício exclusivo do acusado!<br>
          • <strong>Conflito entre Réu e Defensor (Súmula 705 STF):</strong> Se o réu assinar termo renunciando ao recurso e o defensor interpor a petição de apelação, PREVALECE a manifestação da defesa técnica!`,
          exemplo: 'Réu preso assina declaração dizendo: "Não quero recorrer, estou cansado". Seu advogado constituído ingressa com a apelação no 5º dia. A apelação DEVE ser admitida por força da Súmula 705 do STF.'
        }
      ]
    },
    {
      titulo: 'Interposição, Recurso de Ofício, Desistência e Efeitos',
      topicos: [
        {
          id: 'tec-interposicao-oficio-desistencia',
          titulo: 'Interposição, Recurso de Ofício (Art. 574) e Desistência do MP (Art. 576)',
          fundamento: 'Arts. 574, 576 e 578 do CPP | Súmula 423 STF',
          conteudo: `<strong>Interposição e Afastamento do Formalismo:</strong><br>
          O recurso pode ser interposto por petição ou termo nos autos (Art. 578). Os tribunais consagram o princípio da instrumentalidade: se o inconformismo ficar inequivocamente demonstrado, admite-se como recurso (ex.: o réu escreve "apelo" no mandado intimatório levado pelo oficial de justiça ou requer absolvição em contrarrazões).<br><br>
          <strong>Recurso de Ofício / Anômalo (Art. 574, CPP):</strong><br>
          Exceção expressa à voluntariedade. É a remessa necessária imposta pela lei ao juiz de 1º grau.<br>
          • O tribunal toma o recurso como interposto <em>ex lege</em> (por força da lei), mesmo se o juiz omitir a remessa.<br>
          • Não exige fundamentação nem contraditório prévio.<br>
          • <strong>Súmula 423 do STF:</strong> <em>"Não transita em julgado a sentença por haverem omitido o recurso ex officio, enquanto não for julgada pelo Tribunal."</em><br>
          • Hipóteses: Decisão que concede ordem de Habeas Corpus (Art. 574, I); reabilitação criminal (Art. 746).<br><br>
          <strong>Desistência e Indisponibilidade:</strong><br>
          • O acusado pode desistir do recurso, mas se feita por seu defensor, exige <strong>procuração com poderes especiais expressos</strong>.<br>
          • <strong>O Ministério Público NÃO pode desistir:</strong> <em>Art. 576 CPP:</em> Decorre do princípio da indisponibilidade da ação penal pública. Uma vez interposto, o recurso ministerial deve ser julgado!`,
          exemplo: 'Se o juiz conceder HC em favor de paciente trancando inquérito policial, a decisão só produz efeitos definitivos após reexame necessário obrigatório pelo Tribunal de Justiça.'
        },
        {
          id: 'tec-efeitos-unirrecorribilidade',
          titulo: 'Efeitos dos Recursos (Devolutivo, Suspensivo, Extensivo e Regressivo) e Unirrecorribilidade',
          fundamento: 'Arts. 580, 589 e 597 do CPP',
          conteudo: `<strong>Os 4 Efeitos Fundamentais dos Recursos:</strong><br><br>
          • <strong>1. Efeito Devolutivo:</strong> Devolve o conhecimento da matéria impugnada ao tribunal ad quem. Em matéria penal, é mitigado pelo princípio do <em>favor rei</em> (devolução ampla da matéria para favorecer a defesa).<br>
          • <strong>2. Efeito Suspensivo:</strong> Impede a eficácia e execução provisória da decisão. Depende de expressa previsão legal (ex.: apelação contra sentença condenatória - Art. 597 CPP).<br>
          • <strong>3. Efeito Extensivo (Art. 580 CPP):</strong> Em caso de concurso de agentes (coautores ou partícipes), a decisão judicial favorável obtida pelo corréu que recorreu <strong>estende-se aos demais que não recorreram</strong>, desde que não fundada em motivos exclusivamente pessoais (ex.: atenuante de menoridade de 21 anos é pessoal; absolvição por atipicidade estende-se a todos).<br>
          • <strong>4. Efeito Regressivo (Juízo de Retratação):</strong> Permite ao próprio prolator da decisão reconsiderá-la e voltar atrás antes de encaminhar os autos à instância superior (previsto expressamente no RESE - Art. 589 CPP).<br><br>
          <strong>Princípio da Unirrecorribilidade (Singularidade):</strong><br>
          Para cada decisão judicial cabe apenas um único recurso. Exceções: interposição simultânea de REsp (STJ - lei federal) e RExt (STF - Constituição Federal); acórdão não unânime (embargos infringentes na fração divergente e REsp/RExt no restante).`,
          exemplo: 'Condenados dois corréus pelo crime de furto qualificado, se um deles apelar e o Tribunal trancar a ação por reconhecer a atipicidade material (princípio da insignificância), a decisão estende-se compulsoriamente ao corréu que não recorreu (Art. 580 CPP).'
        }
      ]
    }
  ]
};

const RESE_MODULO = {
  id: 'rese',
  nome: 'Recurso em Sentido Estrito (RESE)',
  iconSvg: SVG.scale,
  cor: 'var(--c-rose)',
  corGlow: 'var(--c-rose-glow)',
  artigos: 'Arts. 581 a 592 do CPP | Lei de Execuções Penais (Lei 7.210/84)',
  subtitulo: 'Despachos e interlocutórias de 1º grau, rol do Art. 581, juízo de retratação, Agravo da LEP e Carta Testemunhável.',
  resumo: 'Roteiro de aula da Profª Janaina Daniel Varalli sobre o RESE: rol do Art. 581, prazos 5+2, 15 e 20 dias, os 3 caminhos do juiz a quo e confronto com a Lei de Execução Penal.',
  pilares: [
    { t: 'Decisões Interlocutórias', d: 'Recurso cabível contra despachos, decisões ou sentenças interlocutórias não terminativas de 1º grau previstas no Art. 581 do CPP.' },
    { t: 'Juízo de Retratação', d: 'Art. 589 CPP: Efeito regressivo obrigatório. O juiz prolator tem o dever funcional de manifestar se mantém ou reforma a decisão impugnada.' },
    { t: 'Prazos Bifásicos (5 + 2)', d: 'Regra geral: 5 dias para interposição e 2 dias subsequentes para razões e contrarrazões. Vítima não habilitada: 15 dias; Jurados: 20 dias.' },
    { t: 'RESE vs Agravo em Execução', d: 'Com o advento da LEP (Lei 7.210/84, Art. 197), as matérias ocorridas durante a fase de execução da pena migraram para o Agravo em Execução!' }
  ],
  secoes: [
    {
      titulo: 'Cabimento, Prazos e Juízo de Retratação',
      topicos: [
        {
          id: 'rese-cabimento-prazos',
          titulo: 'Conceito, Prazos do RESE (5+2, 15 e 20 dias) e Interposição',
          fundamento: 'Arts. 581, 584, 586 e 598 do CPP',
          conteudo: `<strong>Conceito e Natureza Jurídica:</strong><br>
          O Recurso em Sentido Estrito (RESE) é o instrumento recursal ordinário para impugnar despachos e decisões interlocutórias proferidas pelo juiz singular de 1º grau.<br>
          • <strong>Rol Taxativo (Mitigado):</strong> A doutrina majoritária considera o rol do art. 581 taxativo, admitindo contudo interpretação extensiva analógica para preencher lacunas intra-artigo.<br><br>
          <strong>Quadro de Prazos do RESE:</strong><br>
          • <strong>Regra Geral (5 + 2 dias):</strong> 5 dias para interpor a petição perante o juiz a quo e <strong>2 dias</strong> para apresentar as razões ou contrarrazões recursais.<br>
          • <strong>15 Dias (Ofendido / Assistente não Habilitado - Art. 584, §1º c/c Art. 598):</strong> Se o Ministério Público não recorrer, o ofendido ou qualquer das pessoas do art. 31 do CPP (cônjuge, ascendente, descendente ou irmão) dispõe de 15 dias a contar do término do prazo ministerial.<br>
          • <strong>20 Dias (Prazo Especial - Art. 586, Parágrafo Único):</strong> No caso de inclusão ou exclusão de jurado da lista geral (Art. 581, XIV) e suspensão do processo por questão prejudicial.<br><br>
          <strong>Interposição e Endereçamento:</strong><br>
          A interposição é dirigida ao juiz que proferiu a decisão (<em>juízo a quo</em>). As razões recursais são endereçadas ao Tribunal competente (TJ nos crimes estaduais ou TRF nos crimes federais).`,
          exemplo: 'Intimado da decisão de pronúncia em audiência, o advogado tem 5 dias para protocolar a petição de interposição perante o juiz da vara e, após intimação, 2 dias para juntar as razões recursais.'
        },
        {
          id: 'rese-retratacao-3caminhos',
          titulo: 'Juízo de Retratação e os 3 Caminhos do Juiz (Manter, Retratar ou Trancar)',
          fundamento: 'Arts. 589, 639 e 640 do CPP | Carta Testemunhável',
          conteudo: `<strong>O Juízo de Retratação (Art. 589 do CPP):</strong><br>
          Juntadas as razões e contrarrazões, os autos são conclusos ao magistrado. O juiz possui obrigatoriamente 3 caminhos processuais:<br><br>
          • <strong>1. Manter a decisão:</strong> Profere despacho mantendo integralmente seus fundamentos e determina a imediata remessa dos autos ao Tribunal competente.<br>
          • <strong>2. Retratar-se (Reforma a Decisão):</strong> O próprio juiz modifica sua decisão anterior no todo ou em parte. Atenção: a parte contrária poderá recorrer por RESE dessa nova decisão; todavia, <strong>não pode haver nova retratação pelo mesmo magistrado</strong>.<br>
          • <strong>3. Não receber ou obstar o seguimento do recurso:</strong> Caso o juiz denegue o RESE ou obste sua subida ao tribunal, cabe <strong>Carta Testemunhável</strong> no prazo preclusivo de <strong>48 horas</strong> (Arts. 639 e 640 do CPP).<br><br>
          <em>Atenção prática:</em> Se o juiz não exercer o juízo de retratação expressamente e remeter os autos, o Tribunal converterá o julgamento em diligência para que ele o faça.`,
          exemplo: 'O juiz que pronunciou o réu recebe o RESE da defesa e, reexaminando as provas, convence-se de que não há indícios de autoria: ele se retrata e impronuncia o réu. O MP agora tem direito de interpor RESE contra essa impronúncia.'
        }
      ]
    },
    {
      titulo: 'Análise do Rol do Art. 581 e Confronto com a LEP',
      topicos: [
        {
          id: 'rese-rol-art-581',
          titulo: 'Os 25 Incisos do Art. 581 do CPP Comentados',
          fundamento: 'Art. 581, I a XXV, do CPP',
          conteudo: `<strong>Principais Hipóteses de Cabimento do RESE:</strong><br><br>
          • <strong>Inciso I:</strong> Rejeição da denúncia ou queixa (se receber a denúncia, cabe HC, não RESE);<br>
          • <strong>Inciso II:</strong> Incompetência do juízo singular;<br>
          • <strong>Inciso III:</strong> Julgamento procedente de exceções (salvo de suspeição);<br>
          • <strong>Inciso IV:</strong> Pronúncia do réu para o Tribunal do Júri;<br>
          • <strong>Inciso V:</strong> Fiança e prisão: concede, nega, arbitra, cassa, inidônea a fiança; indefere ou revoga preventiva; concede liberdade provisória ou relaxa flagrante;<br>
          • <strong>Inciso VII:</strong> Fiança quebrada ou perdida;<br>
          • <strong>Inciso VIII e IX:</strong> Prescrição e causas de extinção da punibilidade (decretadas ou indeferidas);<br>
          • <strong>Inciso X:</strong> Concessão ou denegação de ordem de Habeas Corpus em 1º grau;<br>
          • <strong>Inciso XI:</strong> Concessão, negação ou revogação de suspensão condicional da pena (<em>sursis</em> - Arts. 77 a 82 CP);<br>
          • <strong>Inciso XII:</strong> Livramento condicional (na fase de conhecimento);<br>
          • <strong>Inciso XIII:</strong> Decisão que anula o processo da instrução criminal no todo ou em parte;<br>
          • <strong>Inciso XIV:</strong> Inclusão ou exclusão de jurado da lista geral (prazo de 20 dias);<br>
          • <strong>Inciso XV:</strong> Denegação de apelação ou sua decretação de deserção;<br>
          • <strong>Inciso XVI:</strong> Suspensão do processo por questão prejudicial;<br>
          • <strong>Inciso XVIII:</strong> Incidente de falsidade documental;<br>
          • <strong>Inciso XXV (Pacote Anticrime):</strong> Decisão que recusa a homologação à proposta de Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP).`,
          exemplo: 'Se o juiz recusar a homologação de ANPP firmado entre o promotor e o investigado que confessou formalmente o crime sem violência, cabe RESE pelo inciso XXV do art. 581.'
        },
        {
          id: 'rese-vs-agravo-lep',
          titulo: 'RESE vs Agravo em Execução (Art. 197 da Lei 7.210/84 - LEP)',
          fundamento: 'Art. 197 da LEP | Arts. 581, XVII, XIX a XXIII do CPP',
          conteudo: `<strong>Impacto Fundamental da Lei de Execução Penal (LEP):</strong><br>
          Com a entrada em vigor da Lei nº 7.210/1984, todas as decisões judiciais relativas à execução de sanção penal (pena privativa de liberdade, restritiva de direitos ou medida de segurança) passaram a ser recorríveis por <strong>Agravo em Execução</strong> (Art. 197 da LEP), e NÃO MAIS por RESE!<br><br>
          <strong>Incisos Afetados que Migraram para a LEP:</strong><br>
          • Inciso XVII: Unificação de penas na execução;<br>
          • Incisos XIX a XXIII: Decretação, imposição, manutenção, substituição ou revogação de medidas de segurança em fase de cumprimento de pena;<br>
          • Inciso XXIV: Conversão de multa em prisão (revogado pelo Art. 51 do CP - dívida de valor).<br><br>
          <em>Procedimento do Agravo:</em> O Agravo em Execução segue o rito procedimental do RESE (mesmos prazos de 5+2 dias e juízo de retratação), mas é endereçado privativamente ao Juízo das Execuções Criminais (VEC).`,
          exemplo: 'Decisão do juiz da VEC que indefere progressão de regime do semiaberto para o aberto desafia Agravo em Execução (Art. 197 LEP), e não RESE.'
        }
      ]
    }
  ]
};

const APELACAO_MODULO = {
  id: 'apelacao',
  nome: 'Apelação Criminal & Embargos de Declaração',
  iconSvg: SVG.scale,
  cor: 'var(--c-rose)',
  corGlow: 'var(--c-rose-glow)',
  artigos: 'Arts. 593 a 619 do CPP | CF Art. 5º, LVII | Tema 1068 STF',
  subtitulo: 'Sentenças definitivas, as 4 alíneas do Júri, reformatio in pejus/mellius, prazos do JECRIM e Embargos de Declaração.',
  resumo: 'Roteiro de aula da Profª Janaina Daniel Varalli sobre a Apelação: sentenças condenatórias/absolutórias, decisões com força de definitivas, Júri vinculante, prazos e embargos declaratórios infringentes.',
  pilares: [
    { t: 'Recurso Amplo de Mérito', d: 'Destinado a impugnar sentenças definitivas de condenação ou absolvição de 1º grau (Art. 593, I) e decisões terminativas residuais (Art. 593, II).' },
    { t: 'Apelação no Júri Vinculada', d: 'Art. 593, III (alíneas a, b, c, d): Efeito devolutivo restrito aos fundamentos da interposição (Súmula 713 STF). Apenas a alínea \'d\' enseja novo júri (uma única vez).' },
    { t: 'Vedação à Reformatio in Pejus', d: 'Art. 617 CPP: Em recurso exclusivo da defesa, o Tribunal não pode agravar a pena nem aplicar efeitos extrapenais não declarados em 1º grau (Art. 92 CP).' },
    { t: 'Embargos de Declaração', d: 'Arts. 382 e 619 CPP: Prazo de 2 dias para sanar omissão, obscuridade, contradição ou ambiguidade, admitindo excepcionalmente efeitos infringentes.' }
  ],
  secoes: [
    {
      titulo: 'Cabimento da Apelação (Art. 593, I, II e III do CPP)',
      topicos: [
        {
          id: 'ape-cabimento-incisos',
          titulo: 'Sentenças Definitivas (Inciso I) e Decisões com Força de Definitivas (Inciso II)',
          fundamento: 'Art. 593, I e II, do CPP',
          conteudo: `<strong>Hipóteses do Art. 593 do CPP (Prazo de 5 dias):</strong><br><br>
          <strong>Inciso I — Sentenças Definitivas de Condenação ou Absolvição (Juiz Singular):</strong><br>
          Abrange sentenças proferidas por juiz togado singular nos procedimentos ordinário e sumário. Decisões finais que encerram o processo com julgamento de mérito.<br>
          • <em>Atenção do slide:</em> Este inciso aplica-se EXCLUSIVAMENTE ao juiz singular. No Júri, rege-se pelo inciso III.<br><br>
          <strong>Inciso II — Decisões Definitivas ou com Força de Definitivas (Interlocutórias Mistas):</strong><br>
          Decisões intermediárias que encerram a relação processual sem julgar a culpa/inocência do réu no mérito da ação penal, nos casos em que <strong>NÃO couber RESE</strong> (Art. 581).<br>
          • <strong>Regra de Subsidiariedade Residual:</strong> Só cabe apelação pelo inciso II se a matéria não estiver listada no rol do art. 581 do CPP.<br>
          • <strong>Exemplos práticos:</strong> Decisão que julga restituição de coisas apreendidas, perda de bens em favor da União, exceção de coisa julgada ou litispendência acolhida.<br><br>
          <em>Prevalência sobre o RESE (§4º):</em> Se couber Apelação, não poderá ser usado o RESE, ainda que o apelo ataque apenas parte da decisão.`,
          exemplo: 'Sentença condenatória proferida por juiz de vara criminal comum que condena réu por furto simples é impugnada exclusivamente por apelação pelo inciso I do art. 593.'
        },
        {
          id: 'ape-juri-4alineas',
          titulo: 'As 4 Hipóteses de Apelação no Tribunal do Júri (Art. 593, III, a, b, c, d)',
          fundamento: 'Art. 593, III, e §§ 1º a 3º do CPP | Súmula 713 STF',
          conteudo: `<strong>Recurso com Fundamentação Vinculada (Súmula 713 STF):</strong><br>
          O efeito devolutivo fica estritamente adstrito às alíneas invocadas expressamente na petição de interposição:<br><br>
          • <strong>Alínea 'a' — Nulidade Posterior à Pronúncia:</strong> Vício ocorrido na preparação para o plenário ou durante a sessão de julgamento. Efeito: <strong>Anula o julgamento</strong> e submete o réu a novo júri.<br>
          • <strong>Alínea 'b' — Sentença do Juiz Presidente Contrária à Lei Expressa ou Decisão dos Jurados:</strong> Erro do juiz togado na redação da sentença. <em>Art. 593, §1º:</em> O Tribunal <strong>retifica diretamente</strong> a sentença sem cancelar o julgamento!<br>
          • <strong>Alínea 'c' — Erro ou Injustiça na Aplicação da Pena ou Medida de Segurança:</strong> Erro no cálculo da dosimetria (pena-base, atenuantes). <em>Art. 593, §2º:</em> O Tribunal <strong>refaz o cálculo e retifica a pena diretamente</strong>, sem novo júri.<br>
          • <strong>Alínea 'd' — Decisão dos Jurados Manifestamente Contrária à Prova dos Autos:</strong> Veredicto arbitrário, sem qualquer amparo no conjunto probatório. <em>Art. 593, §3º:</em> O Tribunal cassa a decisão e sujeita o réu a <strong>novo julgamento por outro Conselho de Sentença</strong>.<br>
          • <strong>Regra de Ouro da Alínea 'd':</strong> Não se admite, pelo mesmo motivo, <strong>segunda apelação</strong> no mesmo processo!`,
          exemplo: 'Se os jurados condenarem o réu com base em boatos e todas as provas periciais e testemunhais demonstrarem que o réu estava em outro estado, cabe apelação pela alínea "d", anulando o júri.'
        }
      ]
    },
    {
      titulo: 'Prazos, Efeitos, Reformatio in Pejus e Embargos de Declaração',
      topicos: [
        {
          id: 'ape-prazos-efeitos-reformatio',
          titulo: 'Prazos (5+8 dias e JECRIM), Efeitos e Proibição de Reformatio in Pejus',
          fundamento: 'Arts. 594 a 619 do CPP | Art. 617 CPP | Pacto de San José',
          conteudo: `<strong>Prazos Processuais da Apelação:</strong><br>
          • <strong>Interposição (Rito Comum):</strong> 5 dias da intimação do defensor.<br>
          • <strong>Razões e Contrarrazões:</strong> 8 dias para cada parte.<br>
          • <strong>JECRIM (Lei 9.099/95):</strong> Prazo <strong>unificado de 10 dias</strong> para interposição e razões conjuntas.<br>
          • <strong>Apelação Supletiva do Ofendido (Art. 598):</strong> 15 dias da expiração do prazo ministerial.<br>
          • <strong>Citação por Edital (Art. 392):</strong> O prazo só começa a fluir após o fim do edital (60 a 90 dias).<br><br>
          <strong>Efeitos e Liberdade do Acusado:</strong><br>
          • Condenatória: Devolutivo e suspensivo (regra de apelar em liberdade - Art. 5º, LVII CF).<br>
          • Absolutória: Devolutivo simples (soltura imediata do réu preso).<br>
          • <strong>Deserção por Fuga é ILEGAL:</strong> Não se decreta deserção em caso de fuga (Pacto de San José da Costa Rica). O tribunal deve julgar a apelação mesmo expedindo o mandado de prisão.<br><br>
          <strong>Reformatio in Pejus (Art. 617 CPP):</strong><br>
          Em recurso exclusivo da defesa, é terminantemente proibido agravar a pena do réu ou conferir definição jurídica mais gravosa ao fato. Efeitos extrapenais (Art. 92 CP) não declarados em sentença não podem ser impostos.<br>
          • <em>Reformatio in Mellius:</em> Admitida pela jurisprudência quando há recurso exclusivo da acusação em benefício do acusado.<br>
          • <em>No Júri:</em> Anulado o julgamento em recurso exclusivo da defesa, o novo júri não pode aplicar pena superior à primeira (reformatio in pejus indireta).`,
          exemplo: 'Se apenas a defesa apelou de condenação de 4 anos e o Tribunal verificar que o réu merecia 6 anos pelo agravante, NÃO pode majorar a pena em hipótese alguma por expressa vedação do art. 617 do CPP.'
        },
        {
          id: 'ape-embargos-declaracao-infringentes',
          titulo: 'Embargos de Declaração (Arts. 382 e 619) e Efeitos Infringentes',
          fundamento: 'Arts. 382 e 619 do CPP',
          conteudo: `<strong>Cabimento dos Embargos de Declaração:</strong><br>
          Recurso cabível contra decisão de 1º grau (Art. 382) ou acórdão de tribunal em 2º grau (Art. 619) nos casos de:<br>
          • <strong>Omissão:</strong> O magistrado deixou de apreciar ponto ou tese relevante levantada pelas partes (ex.: ausência de manifestação sobre atenuante da confissão ou pedido de regime semiaberto);<br>
          • <strong>Obscuridade:</strong> Texto ininteligível, ambíguo ou de difícil compreensão que dificulte saber o comando decisório;<br>
          • <strong>Contradição:</strong> Incompatibilidade lógica interna entre os fundamentos da sentença ou entre a fundamentação e o dispositivo final.<br><br>
          <strong>Prazo:</strong> <strong>2 dias</strong> contados da intimação da decisão ou publicação do acórdão.<br><br>
          <strong>Efeitos Infringentes (Modificativos):</strong><br>
          Em situações excepcionais, ao suprir a omissão ou eliminar a contradição, o julgador altera substancialmente o resultado do provimento judicial (ex.: suprindo a omissão de uma atenuante, a pena é reduzida, modificando o regime prisional).`,
          exemplo: 'Juiz condena réu e esquece totalmente de apreciar a preliminar de prescrição da pretensão punitiva arguida em memoriais: embargos de declaração de 2 dias com efeitos infringentes para extinguir a punibilidade.'
        }
      ]
    }
  ]
};

const MATERIA = [
  JURI_MODULO,
  NULIDADES_MODULO,
  RECURSOS_MODULO,
  RESE_MODULO,
  APELACAO_MODULO
];

    const MATERIAS_DIREITO = {
      'penal': {
        id: 'penal',
        nome: 'Direito Penal',
        subtitulo: 'Código Penal (Decreto-Lei nº 2.848/1940) • Parte Geral e Crimes em Espécie',
        artigos: 'Arts. 1º a 359-T do CP | Legislação Penal Especial',
        cor: 'var(--c-rose)',
        corGlow: 'var(--c-rose-glow)',
        iconSvg: SVG.scale,
        descricao: 'Fato típico, ilicitude e causas excludentes, culpabilidade, concurso de pessoas, dosimetria da pena, crimes contra a vida, patrimônio e administração pública.',
        modulos: [
          {
            id: 'penal-mod-1',
            nome: 'Teoria do Crime & Aplicação da Lei Penal',
            iconSvg: SVG.scale,
            cor: 'var(--c-rose)',
            corGlow: 'var(--c-rose-glow)',
            artigos: 'Arts. 1º a 22 do Código Penal',
            subtitulo: 'Princípio da legalidade, tempo e lugar do crime, conduta, nexo causal, dolo, culpa e tipicidade.',
            resumo: 'Compreenda a estrutura analítica do crime (fato típico, ilícito e culpável), a aplicação da lei penal no tempo e espaço e os institutos do iter criminis.',
            pilares: [
              { t: 'Princípio da Legalidade', d: 'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal (Art. 1º CP).' },
              { t: 'Mnemônico LUTA', d: 'Lugar do crime = Teoria da Ubiquidade (Art. 6º); Tempo do crime = Teoria da Atividade (Art. 4º).' },
              { t: 'Fato Típico Quadripartido', d: 'Composto por: Conduta (dolosa/culposa), Resultado naturalístico, Nexo Causal e Tipicidade (formal e conglobante).' },
              { t: 'Ponte de Ouro & Ponte de Prata', d: 'Desistência voluntária/Arrependimento eficaz (Art. 15) vs Arrependimento posterior com reparação do dano (Art. 16).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Lei Penal e Fato Típico',
                topicos: [
                  {
                    id: 'pen-1-1',
                    titulo: 'Princípios da Anterioridade e Irretroatividade Penal',
                    fundamento: 'Art. 1º e 2º do CP | Art. 5º, XL da CF/88',
                    conteudo: 'A lei penal não retroagirá, salvo para beneficiar o réu (novatio legis in mellius ou abolitio criminis). A lei excepcional ou temporária, porém, é ultrativa e aplica-se aos fatos praticados durante sua vigência mesmo após autorrevogação (Art. 3º do CP).',
                    exemplo: 'Uma nova lei descriminaliza conduta anteriormente punida (abolitio criminis). O juiz da execução extingue imediatamente os efeitos penais da condenação de quem cumpria pena.'
                  },
                  {
                    id: 'pen-1-2',
                    titulo: 'Relação de Causalidade & Concausas',
                    fundamento: 'Art. 13 e § 1º do CP (Conditio Sine Qua Non)',
                    conteudo: 'O resultado de que depende a existência do crime só é imputável a quem lhe deu causa. Considera-se causa toda ação ou omissão sem a qual o resultado não teria ocorrido. A superveniência de causa relativamente independente que por si só produziu o resultado exclui a imputação do resultado agravador ao autor primitivo.',
                    exemplo: 'Vítima é alvejada de raspão no braço sem risco de morte, mas falece no hospital devido a desabamento do teto por tempestade: o atirador responde apenas por tentativa de homicídio/lesão.'
                  },
                  {
                    id: 'pen-1-3',
                    titulo: 'Dolo, Culpa e Preterdolo',
                    fundamento: 'Art. 18, I e II, e Art. 19 do CP',
                    conteudo: 'Dolo direto (vontade de produzir o resultado) ou eventual (assume o risco de produzi-lo). Crime culposo por imprudência, negligência ou imperícia: só é punível se houver expressa previsão legal. Preterdolo: dolo na conduta antecedente e culpa no resultado consequente (ex: lesão corporal seguida de morte).',
                    exemplo: 'Motorista embriagado que aposta racha em avenida movimentada assume o risco de matar pedestres (dolo eventual), diferente da mera culpa consciente onde acredita piamente que evitará o acidente.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Iter Criminis e Exclusões',
                topicos: [
                  {
                    id: 'pen-1-4',
                    titulo: 'Tentativa, Desistência Voluntária e Arrependimento Eficaz',
                    fundamento: 'Arts. 14, II e 15 do CP',
                    conteudo: 'Na tentativa, o agente inicia a execução mas o crime não se consuma por circunstâncias alheias à sua vontade. Na desistência voluntária ("posso prosseguir mas não quero"), ele cessa os atos. No arrependimento eficaz ("já terminei mas salvo a vítima"), impede o resultado. Em ambos, só responde pelos atos já praticados.',
                    exemplo: 'Autor atira duas vezes na vítima, tem mais 4 balas no revólver, mas desiste voluntariamente e vai embora: responde apenas pelas lesões corporais já causadas, e não por homicídio tentado.'
                  },
                  {
                    id: 'pen-1-5',
                    titulo: 'Arrependimento Posterior (Art. 16) & Crime Impossível',
                    fundamento: 'Arts. 16 e 17 do CP | Súmula 145 do STF',
                    conteudo: 'Arrependimento posterior: nos crimes sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa até o recebimento da denúncia ou queixa, a pena é reduzida de um a dois terços. Crime impossível (tentativa inidônea): por ineficácia absoluta do meio ou absoluta impropriedade do objeto, jamais se consumaria.',
                    exemplo: 'Tentativa de matar alguém administrando água com açúcar acreditando ser veneno: ineficácia absoluta do meio, sendo atípica a conduta por crime impossível.'
                  }
                ]
              }
            ]
          },
          {
            id: 'penal-mod-2',
            nome: 'Ilicitude, Culpabilidade & Punibilidade',
            iconSvg: SVG.shield,
            cor: 'var(--c-rose)',
            corGlow: 'var(--c-rose-glow)',
            artigos: 'Arts. 23 a 28 e 107 a 120 do Código Penal',
            subtitulo: 'Causas de justificação, exculpantes, erro de proibição e causas de extinção da punibilidade.',
            resumo: 'Diferenciação precisa entre excluir a ilicitude (justificação) e afastar a culpabilidade (exculpação), imputabilidade e prescrição penal.',
            pilares: [
              { t: 'Excludentes da Ilicitude', d: 'Estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito (Art. 23 CP).' },
              { t: 'Tríplice Elemento da Culpabilidade', d: 'Imputabilidade penal, Potencial consciência da ilicitude e Exigibilidade de conduta diversa.' },
              { t: 'Coação Moral vs Coação Física', d: 'Coação moral irresistível exclui culpabilidade (Art. 22); Coação física irresistível (vis absoluta) exclui a própria conduta típica.' },
              { t: 'Prescrição da Pretensão Punitiva', d: 'Calculada pela pena máxima em abstrato antes do trânsito em julgado (Art. 109 CP), interrompendo-se pelo recebimento da denúncia e pronúncia.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Excludentes de Ilicitude',
                topicos: [
                  {
                    id: 'pen-2-1',
                    titulo: 'Legítima Defesa Própria e de Terceiros',
                    fundamento: 'Art. 25 do CP | Pacote Anticrime (Art. 25, Parágrafo Único)',
                    conteudo: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem. O Pacote Anticrime incluiu a atuação de agente de segurança pública que repele agressão a vítima mantida refém.',
                    exemplo: 'Cidadão é atacado por assaltante armado com faca em via pública; desfere um disparo defensivo imobilizando o agressor: configurada legítima defesa estrita.'
                  },
                  {
                    id: 'pen-2-2',
                    titulo: 'Estado de Necessidade Real e Putativo',
                    fundamento: 'Art. 24 do CP',
                    conteudo: 'Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício não era razoável exigir-se. Não pode alegar quem tinha o dever legal de enfrentar o perigo (ex: bombeiro em salvamento).',
                    exemplo: 'Dois náufragos disputam a única boia salva-vidas que suporta apenas uma pessoa; a conduta de preservar a própria vida exclui a ilicitude pelo estado de necessidade.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Culpabilidade e Prescrição',
                topicos: [
                  {
                    id: 'pen-2-3',
                    titulo: 'Inimputabilidade & Emoção/Paixão',
                    fundamento: 'Arts. 26 e 28 do CP (Actio Libera in Causa)',
                    conteudo: 'É isento de pena o agente que, por doença mental ou desenvolvimento mental incompleto/retardado, era inteiramente incapaz de entender o caráter ilícito. A emoção e a paixão NÃO excluem a imputabilidade penal. Embriaguez voluntária pelo álcool não isenta de pena pela teoria da actio libera in causa.',
                    exemplo: 'Indivíduo bebe voluntariamente para ter coragem de cometer um furto: responde dolosamente pelo crime, não podendo invocar embriaguez.'
                  },
                  {
                    id: 'pen-2-4',
                    titulo: 'Causas de Extinção da Punibilidade e Prescrição',
                    fundamento: 'Arts. 107, 109 e 117 do Código Penal',
                    conteudo: 'Extingue-se a punibilidade pela morte do agente, anistia, graça, indulto, renúncia, decadência e prescrição. A prescrição antes de transitar em julgado a sentença regula-se pelo máximo da pena privativa de liberdade privativa cominada ao crime, interrompida pelo recebimento da denúncia ou pronúncia.',
                    exemplo: 'Crime com pena máxima de 3 anos prescreve em 8 anos (Art. 109, IV). Se transcorrerem mais de 8 anos entre a data do fato e o recebimento da denúncia, há prescrição retroativa/da pretensão punitiva.'
                  }
                ]
              }
            ]
          },
          {
            id: 'penal-mod-3',
            nome: 'Crimes Contra a Pessoa & Crimes Hediondos',
            iconSvg: SVG.gavel,
            cor: 'var(--c-rose)',
            corGlow: 'var(--c-rose-glow)',
            artigos: 'Arts. 121 a 154-B do CP | Lei nº 8.072/1990',
            subtitulo: 'Homicídio qualificado, feminicídio, aborto, lesões corporais e crimes contra a honra.',
            resumo: 'Tipos penais de maior incidência em provas e na prática criminal, qualificadoras objetivas e subjetivas e regras hediondas.',
            pilares: [
              { t: 'Homicídio Qualificado (Art. 121, § 2º)', d: 'Qualificadoras subjetivas (motivo torpe, fútil) não comunicam com privilégio; objetivas (asfixia, veneno, emboscada) comunicam em concurso.' },
              { t: 'Feminicídio', d: 'Crime contra a mulher por razões da condição do sexo feminino: violência doméstica/familiar ou menosprezo à condição feminina.' },
              { t: 'Crimes Contra a Honra', d: 'Calúnia: imputar falsamente fato criminoso; Difamação: imputar fato ofensivo à reputação; Injúria: ofender dignidade ou decoro.' },
              { t: 'Lesão Corporal Privilegiada vs Grave', d: 'Incapacidade por mais de 30 dias, perigo de vida ou debilidade permanente (grave); perda de membro, enfermidade incurável ou deformidade permanente (gravíssima).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Homicídio e Qualificadoras',
                topicos: [
                  {
                    id: 'pen-3-1',
                    titulo: 'Homicídio Simples, Privilegiado e Qualificado',
                    fundamento: 'Art. 121, §§ 1º e 2º do Código Penal',
                    conteudo: 'Homicídio privilegiado: cometido sob domínio de violenta emoção logo em seguida a injusta provocação da vítima, ou relevante valor social/moral. É direito subjetivo do réu e reduz a pena de 1/6 a 1/3. Admite-se homicídio qualificado-privilegiado apenas se a qualificadora for de natureza OBJETIVA (ex: emprego de veneno ou traição).',
                    exemplo: 'Pai que mata o estuprador da filha logo após o flagrante sob domínio de violenta emoção comete homicídio qualificado-privilegiado se empregou meio insidioso.'
                  },
                  {
                    id: 'pen-3-2',
                    titulo: 'Feminicídio e Causas Especiais de Aumento',
                    fundamento: 'Art. 121, § 2º, VI e § 2º-A do CP | Lei 13.104/15',
                    conteudo: 'Qualificadora objetiva do homicídio. Considera-se haver razões do sexo feminino quando envolve violência doméstica e familiar (Lei Maria da Penha) ou menosprezo/discriminação à condição de mulher. Aumenta-se a pena de 1/3 até metade se praticado durante a gestação ou nos 3 meses pós-parto, contra menor de 14 ou maior de 60, ou na presença de descendente/ascendente.',
                    exemplo: 'Homem inconformado com término do relacionamento invade a casa da ex-esposa e comete homicídio na frente dos filhos menores: feminicídio duplamente circunstanciado.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Honra e Lesões Corporais',
                topicos: [
                  {
                    id: 'pen-3-3',
                    titulo: 'Tríade dos Crimes Contra a Honra',
                    fundamento: 'Arts. 138, 139 e 140 do CP (Exceção da Verdade)',
                    conteudo: 'Calúnia: imputação falsa de fato previsto como crime (admite exceção da verdade, salvo exceções do art. 138, § 3º). Difamação: imputação de fato ofensivo à reputação, seja ele verdadeiro ou falso (não admite exceção da verdade, salvo se funcionário público no exercício funcional). Injúria: ofensa ao amor-próprio/decoro sem fato determinado.',
                    exemplo: 'Dizer na internet que fulano é ladrão é injúria; afirmar que ele furtou o relógio da firma na terça-feira é calúnia se for falso, ou difamação se for contravenção.'
                  },
                  {
                    id: 'pen-3-4',
                    titulo: 'Lesões Corporais Graves e Gravíssimas',
                    fundamento: 'Art. 129, §§ 1º e 2º do Código Penal',
                    conteudo: 'Lesão Grave: gera incapacidade para as ocupações habituais por mais de 30 dias (exige exame complementar no 31º dia), perigo de vida, debilidade permanente de membro, sentido ou função, ou aceleração de parto. Lesão Gravíssima: incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro, deformidade permanente ou aborto.',
                    exemplo: 'Golpe que cega um dos olhos causa debilidade permanente (grave); se cegar ambos os olhos, causa perda da visão/sentido (gravíssima).'
                  },
                    {
                      id: 'pen-3-5',
                      titulo: 'Crimes de Racismo (Lei nº 7.716/1989) & Injúria Racial (Lei nº 14.532/2023)',
                      fundamento: 'Lei nº 7.716/1989 | Lei nº 14.532/2023 | CF/88 Art. 5º, XLII',
                      conteudo: 'A Lei nº 7.716/1989 tipifica os crimes resultantes de preconceito de raça, cor, etnia, religião ou procedência nacional, cominando penas privativas de liberdade severas para práticas como obstar acesso a cargos na administração direta ou indireta (Art. 3º) e negar emprego em empresa privada (Art. 4º, reclusão de 2 a 5 anos).<br><br>• <strong>Revolução Legislativa da Lei nº 14.532/2023:</strong> Inseriu o Art. 2º-A na Lei nº 7.716/1989: <em>\"Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional\"</em> (reclusão de 2 a 5 anos e multa). A injúria racial foi formalmente equiparada aos crimes de racismo, tornando-se <strong>imprescritível e inafiançável</strong> (Art. 5º, XLII da CF/88);<br>• <strong>Causa de Aumento de Pena:</strong> Aplica-se aumento de metade da pena se o crime for cometido mediante concurso de 2 ou mais pessoas (Art. 2º-A, parágrafo único);<br>• <strong>Práticas Discriminatórias em Anúncios:</strong> Quem exigir aspectos de aparência próprios de raça ou etnia para emprego sem justificativa funcional fica sujeito a multa e prestação de serviços à comunidade voltados à igualdade racial (Art. 4º, § 2º).',
                      exemplo: 'Ofensa verbal preconceituosa contra atendente de loja em razão de sua raça/cor configura crime de injúria racial do Art. 2º-A da Lei nº 7.716/1989 (inafiançável e imprescritível), incidindo causa de aumento de metade se houver concurso de agentes.'
                    }
                ]
              }
            ]
          },
          {
            id: 'penal-mod-4',
            nome: 'Crimes Contra o Patrimônio & Administração Pública',
            iconSvg: SVG.book,
            cor: 'var(--c-rose)',
            corGlow: 'var(--c-rose-glow)',
            artigos: 'Arts. 155 a 180 e Arts. 312 a 337-A do Código Penal',
            subtitulo: 'Furto, roubo, latrocínio, estelionato, peculato, concussão e corrupção.',
            resumo: 'Diferenciação precisa entre crimes patrimoniais violentos e fraudulentos, e crimes funcionais cometidos por agentes públicos contra o Estado.',
            pilares: [
              { t: 'Furto vs Roubo', d: 'Subtração de coisa móvel alheia sem violência/ameaça (furto - Art. 155); mediante violência, grave ameaça ou após reduzir a resistência da vítima (roubo - Art. 157).' },
              { t: 'Latrocínio (Súmula 603 STF)', d: 'Roubo qualificado pela morte: crime patrimonial complexo julgado por Juiz Singular, jamais pelo Tribunal do Júri!' },
              { t: 'Concussão vs Corrupção Passiva', d: 'Concussão: EXIGIR vantagem indevida (Art. 316); Corrupção passiva: SOLICITAR ou RECEBER vantagem indevida (Art. 317).' },
              { t: 'Peculato', d: 'Apropriação ou desvio de dinheiro, valor ou bem móvel público ou particular por funcionário que tem a posse em razão do cargo (Art. 312).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Crimes Patrimoniais',
                topicos: [
                  {
                    id: 'pen-4-1',
                    titulo: 'Furto Qualificado, Noturno e Princípio da Insignificância',
                    fundamento: 'Art. 155, §§ 1º, 2º e 4º do CP | Requisitos MARI STF',
                    conteudo: 'Furto qualificado por rompimento de obstáculo, abuso de confiança/fraude, concurso de pessoas ou emprego de chave falsa. O furto durante o repouso noturno incide tanto no furto simples quanto qualificado segundo tese firmada no STJ. Princípio da insignificância afasta a tipicidade material se preenchidos os requisitos MARI (STF).',
                    exemplo: 'Subtração de duas barras de chocolate de R$ 10,00 por réu primário: aplicação da insignificância com trancamento da ação penal por atipicidade material.'
                  },
                  {
                    id: 'pen-4-2',
                    titulo: 'Roubo Circunstanciado & Latrocínio',
                    fundamento: 'Art. 157, §§ 2º, 2º-A e 3º do CP | Súmula 603 e 610 do STF',
                    conteudo: 'O roubo tem a pena aumentada de 2/3 se há emprego de arma de fogo de uso permitido, e em dobro se de uso proibido ou restrito. Latrocínio: homicídio consumado + roubo tentado consuma latrocínio (Súmula 610 STF). A competência é sempre da Vara Criminal comum (Súmula 603 STF).',
                    exemplo: 'Durante o assalto a uma loja, o criminoso atira e mata o segurança, mas foge sem conseguir levar os malotes de dinheiro: o crime de latrocínio está consumado (Súmula 610/STF).'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Crimes Contra a Administração',
                topicos: [
                  {
                    id: 'pen-4-3',
                    titulo: 'Peculato Próprio, Furto e Peculato Culposo',
                    fundamento: 'Art. 312 do Código Penal',
                    conteudo: 'Peculato-apropriação e peculato-desvio: o funcionário público tem a posse legítima da coisa em razão do cargo. Peculato-furto: não tem a posse, mas subtrai valendo-se da facilidade que o cargo lhe proporciona. Peculato culposo: a reparação do dano antes da sentença extingue a punibilidade; se posterior, reduz a pena pela metade (Art. 312, § 3º).',
                    exemplo: 'Servidor esquece a porta da tesouraria destrancada por negligência e terceiro subtrai numerário: peculato culposo; reparando o valor antes da sentença, extingue-se a punibilidade.'
                  },
                  {
                    id: 'pen-4-4',
                    titulo: 'Concussão, Corrupção Passiva e Corrupção Ativa',
                    fundamento: 'Arts. 316, 317 e 333 do Código Penal',
                    conteudo: 'Concussão: o funcionário EXIGE a vantagem indevida, gerando temor na vítima. Corrupção passiva: o funcionário SOLICITA, RECEBE ou ACEITA promessa de vantagem (crimes formais, consumam-se sem o pagamento). Corrupção ativa: particular que OFERECE ou PROMETE vantagem ao servidor (se o particular apenas cede à exigência de concussão, ele é vítima e não comete crime!).',
                    exemplo: 'Fiscal da Receita exige R$ 50.000 para não autuar a empresa: o fiscal comete concussão e o empresário é vítima do delito.'
                  }
                ]
              }
            ]
          }
        ,
          JURI_MODULO,
          NULIDADES_MODULO,
          RECURSOS_MODULO,
          RESE_MODULO,
          APELACAO_MODULO
        ]
      },

      'processo-penal': {
        id: 'processo-penal',
        nome: 'Direito Processual Penal',
        subtitulo: 'Código de Processo Penal (Decreto-Lei nº 3.689/1941) • Ritos, Nulidades e Recursos',
        artigos: 'Arts. 1º a 811 do CPP | CF/88 Art. 5º',
        cor: 'var(--c-indigo)',
        corGlow: 'var(--c-indigo-glow)',
        iconSvg: SVG.scale,
        descricao: 'Tribunal do Júri (fases de pronúncia e plenário), Teoria Geral das Nulidades, Teoria dos Recursos, RESE, Apelação e Embargos.',
        modulos: MATERIA
      },

      'civil': {
        id: 'civil',
        nome: 'Direito Civil (Direito Cível)',
        subtitulo: 'Código Civil (Lei nº 10.406/2002) • Teoria Geral, Obrigações e Contratos',
        artigos: 'Arts. 1º a 2.046 do CC/02',
        cor: 'var(--c-blue)',
        corGlow: 'var(--c-blue-glow)',
        iconSvg: SVG.book,
        descricao: 'Personalidade e capacidade civil, desconsideração da personalidade, negócios jurídicos, obrigações solidárias, responsabilidade civil, contratos e direitos reais.',
        modulos: [
          {
            id: 'civil-mod-1',
            nome: 'Parte Geral & Teoria do Negócio Jurídico',
            iconSvg: SVG.book,
            cor: 'var(--c-blue)',
            corGlow: 'var(--c-blue-glow)',
            artigos: 'Arts. 1º a 232 do Código Civil',
            subtitulo: 'Pessoas naturais, pessoas jurídicas, desconsideração da personalidade jurídica e defeitos do negócio jurídico.',
            resumo: 'Fundamentos da capacidade civil, planos da existência, validade e eficácia (Escada Ponteana), vícios de consentimento e sociais.',
            pilares: [
              { t: 'Capacidade Civil Plena', d: 'Absolutamente incapazes são apenas os menores de 16 anos (Art. 3º CC pós-Estatuto da Pessoa com Deficiência).' },
              { t: 'Desconsideração da Personalidade', d: 'Art. 50 CC (Teoria Maior): exige abuso de personalidade caracterizado por desvio de finalidade ou confusão patrimonial.' },
              { t: 'Vícios do Consentimento', d: 'Erro substantivo, Dolo do contratante e Coação moral invalidam o negócio por ANULABILIDADE no prazo decadencial de 4 anos (Art. 178 CC).' },
              { t: 'Fraude Contra Credores', d: 'Vício social combatido pela Ação Pauliana ou Revocatória para anular atos de disposição fraudulenta de bens.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Pessoas e Capacidade',
                topicos: [
                  {
                    id: 'civ-1-1',
                    titulo: 'Incapacidade Civil e Representação Legal',
                    fundamento: 'Arts. 3º, 4º e 1.634 do CC',
                    conteudo: 'Com o Estatuto da Pessoa com Deficiência (Lei 13.146/15), os deficientes mentais deixaram de ser incapazes. A incapacidade absoluta restringe-se aos menores de 16 anos (que são REPRESENTADOS sob pena de nulidade absoluta). Os maiores de 16 e menores de 18, ébrios e pródigos são relativamente incapazes (sendo ASSISTIDOS sob pena de anulabilidade).',
                    exemplo: 'Jovem de 15 anos assina sozinho contrato de compra de imóvel: o negócio é nulo de pleno direito por ausência de representação dos pais.'
                  },
                  {
                    id: 'civ-1-2',
                    titulo: 'Desconsideração da Personalidade Jurídica (Art. 50 CC)',
                    fundamento: 'Art. 50 do CC | Lei da Liberdade Econômica (Lei 13.874/19)',
                    conteudo: 'Adota a Teoria Maior da Desconsideração: não basta o simples inadimplemento da dívida; exige prova cabal de desvio de finalidade (uso doloso para lesar credores) ou confusão patrimonial (ausência de separação prática de contas entre sócio e empresa). Não atinge patrimônio de outros sócios sem poder de gestão.',
                    exemplo: 'Empresário utiliza a conta corrente da pessoa jurídica para pagar despesas particulares de luxo e esvazia o patrimônio da empresa: configura confusão patrimonial autorizando atingir seus bens pessoais.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Negócio Jurídico e Defeitos',
                topicos: [
                  {
                    id: 'civ-1-3',
                    titulo: 'Escada Ponteana & Elementos Acidentais',
                    fundamento: 'Arts. 104, 121, 131 e 136 do CC',
                    conteudo: 'Planos: Existência (partes, vontade, objeto e forma), Validade (agente capaz, vontade livre, objeto lícito/possível e forma legal) e Eficácia (condição, termo e encargo). Condição suspensiva suspende a aquisição e o exercício do direito; condição resolutiva extingue os efeitos do negócio quando implementada.',
                    exemplo: '"Te doarei meu carro se você for aprovado na OAB": condição suspensiva. O donatário só adquire a propriedade do veículo após a publicação da aprovação.'
                  },
                  {
                    id: 'civ-1-4',
                    titulo: 'Defeitos do Negócio: Erro, Dolo e Coação',
                    fundamento: 'Arts. 138 a 155 do Código Civil',
                    conteudo: 'Erro substancial: escusável e determinante na manifestação de vontade. Dolo: artifício fraudulento de uma das partes para induzir em erro (dolo principal gera anulação; acidental gera perdas e danos). Coação: fundado temor de dano iminente e considerável à sua pessoa ou família. Prazo decadencial para pleitear a anulação: 4 anos (Art. 178 CC).',
                    exemplo: 'Comprador adquire obra de arte cópia acreditando piamente ser original do artista por artimanha do vendedor: dolo essencial que permite anular a venda e cobrar indenização.'
                  }
                ]
              }
            ]
          },
          {
            id: 'civil-mod-2',
            nome: 'Teoria Geral das Obrigações & Inadimplemento',
            iconSvg: SVG.scale,
            cor: 'var(--c-blue)',
            corGlow: 'var(--c-blue-glow)',
            artigos: 'Arts. 233 a 420 do Código Civil',
            subtitulo: 'Modalidades de obrigações, solidariedade ativa e passiva, mora, perdas e danos e cláusula penal.',
            resumo: 'Estrutura das relações obrigacionais de dar, fazer e não fazer, solidariedade passiva, mora e cláusula penal compensatória e moratória.',
            pilares: [
              { t: 'Solidariedade não se presume', d: 'Resulta exclusivamente da lei ou da vontade expressa das partes no contrato (Art. 265 CC).' },
              { t: 'Solidariedade Passiva', d: 'O credor pode cobrar de um ou de todos os devedores o valor total da dívida; quem paga sub-roga-se na cota dos demais (Art. 275 CC).' },
              { t: 'Mora do Devedor (Mora Solvendi)', d: 'Inadimplemento culposo no tempo, lugar ou forma; responde pela impossibilidade da prestação mesmo decorrente de caso fortuito (Art. 399 CC).' },
              { t: 'Cláusula Penal', d: 'Compensatória (prefixa perdas e danos pelo inadimplemento total) ou Moratória (penalidade pelo simples atraso temporário).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Modalidades e Solidariedade',
                topicos: [
                  {
                    id: 'civ-2-1',
                    titulo: 'Obrigações de Dar, Fazer e Não Fazer',
                    fundamento: 'Arts. 233 a 251 do Código Civil',
                    conteudo: 'Dar coisa certa: abrange os acessórios embora não mencionados (Art. 233). Coisa perdida sem culpa do devedor resolve a obrigação; com culpa, responde pelo equivalente mais perdas e danos. Obrigação de fazer personalíssima (intuitu personae): se recusar, responde por perdas e danos; não sendo personalíssima, o credor pode mandar executar à custa do devedor.',
                    exemplo: 'Pintor renomado contratado para quadro exclusivo recusa-se a pintar: o credor não pode forçar a pintura física, convertendo-se a obrigação em perdas e danos.'
                  },
                  {
                    id: 'civ-2-2',
                    titulo: 'Solidariedade Passiva e Direito de Regresso',
                    fundamento: 'Arts. 275 a 285 do Código Civil',
                    conteudo: 'Na solidariedade passiva, todos os devedores respondem pelo montante integral da dívida. Se a prestação se tornar impossível por culpa de um dos devedores solidários, subsiste para todos o encargo de pagar o equivalente, mas pelas perdas e danos só responde o culpado (Art. 279 CC).',
                    exemplo: 'Três amigos contratam empréstimo de R$ 90.000 com solidariedade: o banco pode cobrar R$ 90.000 integralmente de qualquer um deles, que terá direito de regresso de R$ 30.000 contra cada coobrigado.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Pagamento e Inadimplemento',
                topicos: [
                  {
                    id: 'civ-2-3',
                    titulo: 'Mora, Juros Legais e Perdas e Danos',
                    fundamento: 'Arts. 394 a 405 do Código Civil',
                    conteudo: 'Mora ex re: decorre do simples advento do termo final em obrigação líquida e certa ("dies interpellat pro homine"). Mora ex persona: exige interpelação judicial ou extrajudicial prévia do credor. As perdas e danos abrangem o prejuízo efetivamente sofrido (dano emergente) e o que razoavelmente deixou de lucrar (lucro cessante).',
                    exemplo: 'Boleto com vencimento fixado em 10 de maio: vencido o prazo sem pagamento, o devedor está automaticamente constituído em mora ex re, correndo juros de 1% ao mês.'
                  },
                  {
                    id: 'civ-2-4',
                    titulo: 'Cláusula Penal e Teoria do Adimplemento Substancial',
                    fundamento: 'Arts. 408 a 416 do Código Civil | Súmulas STJ',
                    conteudo: 'O valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal (Art. 412 CC). Pela Teoria do Adimplemento Substancial prestigiada pelo STJ, o credor não pode rescindir o contrato se o devedor já adimpliu parte expressiva da dívida, restando apenas cobrança das parcelas residuais.',
                    exemplo: 'Comprador pagou 35 de 36 parcelas de financiamento: o credor não pode rescindir e retomar o veículo, cabendo apenas a cobrança executiva da última prestação.'
                  }
                ]
              }
            ]
          },
          {
            id: 'civil-mod-3',
            nome: 'Responsabilidade Civil Subjetiva & Objetiva',
            iconSvg: SVG.shield,
            cor: 'var(--c-blue)',
            corGlow: 'var(--c-blue-glow)',
            artigos: 'Arts. 186 a 188 e Arts. 927 a 954 do Código Civil',
            subtitulo: 'Conduta, culpa, dano patrimonial e extrapatrimonial, nexo causal e teoria do risco.',
            resumo: 'Elementos do dever de indenizar, diferenciação entre culpa e responsabilidade sem culpa pelo risco da atividade, e causas de exclusão do nexo causal.',
            pilares: [
              { t: 'Responsabilidade Subjetiva', d: 'Regra geral do Art. 186 e 927 do CC: exige demonstração inequívoca de dolo ou culpa do agente.' },
              { t: 'Responsabilidade Objetiva (Teoria do Risco)', d: 'Art. 927, parágrafo único: independe de culpa quando a atividade habitualmente desenvolvida criar risco especial para terceiros.' },
              { t: 'Excludentes do Nexo Causal', d: 'Culpa exclusiva da vítima, fato exclusivo de terceiro e caso fortuito/força maior rompem a cadeia de causalidade.' },
              { t: 'Responsabilidade por Ato de Terceiro', d: 'Pais pelos filhos menores e empregadores pelos empregados respondem OBJETIVAMENTE perante as vítimas (Art. 932 e 933 CC).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Pressupostos e Nexo Causal',
                topicos: [
                  {
                    id: 'civ-3-1',
                    titulo: 'Ato Ilícito, Abuso de Direito e Elementos da Culpa',
                    fundamento: 'Arts. 186 e 187 do Código Civil',
                    conteudo: 'Comete ato ilícito aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem. O abuso de direito (Art. 187) equipara-se ao ilícito quando o titular, ao exercer seu direito, excede manifestamente os limites impostos pelo seu fim econômico ou social, pela boa-fé ou pelos bons costumes.',
                    exemplo: 'Vizinho que constrói muro gigante na divisa sem nenhuma utilidade e apenas para bloquear a luz do sol do vizinho comete ato ilícito por abuso de direito.'
                  },
                  {
                    id: 'civ-3-2',
                    titulo: 'Nexo Causal e Causas de Exclusão da Responsabilidade',
                    fundamento: 'Art. 393 do Código Civil',
                    conteudo: 'O ordenamento civil adota a Teoria da Causalidade Adequada ou Danos Diretos e Imediatos (Art. 403 CC). Rompem o nexo causal: a) culpa exclusiva da vítima (se concorrente, apenas atenua a indenização - Art. 945); b) fato exclusivo de terceiro (desde que inevitável e imprevisível); c) caso fortuito ou força maior.',
                    exemplo: 'Pedestre atravessa via expressa correndo de olhos fechados fora da passarela e é atropelado por condutor dentro do limite de velocidade: culpa exclusiva da vítima rompe o nexo.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Danos e Responsabilidade Objetiva',
                topicos: [
                  {
                    id: 'civ-3-3',
                    titulo: 'Dano Material, Moral In Re Ipsa e Dano Estético',
                    fundamento: 'Art. 944 do CC | Súmula 387 do STJ',
                    conteudo: 'A indenização mede-se pela extensão do dano (Art. 944). A Súmula 387 do STJ consagra expressamente a possibilidade de cumulação das indenizações de dano estético e dano moral decorrentes do mesmo fato lesivo. Dano moral in re ipsa: presume-se pelo próprio fato ilícito (ex: inscrição indevida em cadastro de inadimplentes).',
                    exemplo: 'Consumidor com nome negativado no SPC/SERASA por dívida que nunca contraiu tem direito a danos morais in re ipsa sem precisar provar dor subjetiva.'
                  },
                  {
                    id: 'civ-3-4',
                    titulo: 'Responsabilidade por Fato de Terceiro & Guarda de Animais',
                    fundamento: 'Arts. 932, 933 e 936 do Código Civil',
                    conteudo: 'Os pais respondem pelos filhos menores e o empregador pelos empregados no exercício do trabalho. Nos termos do art. 933, essa responsabilidade é OBJETIVA perante o lesado. O dono ou detentor do animal ressarcirá o dano por este causado, se não provar culpa da vítima ou força maior (Art. 936).',
                    exemplo: 'Cão de guarda foge pelo portão aberto e ataca transeunte na calçada: o proprietário responde objetivamente pelos danos corporais e despesas médicas.'
                  }
                ]
              }
            ]
          },
          {
            id: 'civil-mod-4',
            nome: 'Contratos & Direitos Reais',
            iconSvg: SVG.home,
            cor: 'var(--c-blue)',
            corGlow: 'var(--c-blue-glow)',
            artigos: 'Arts. 421 a 480 e Arts. 1.196 a 1.244 do Código Civil',
            subtitulo: 'Boa-fé objetiva, função social, compra e venda, posse e modalidades de usucapião.',
            resumo: 'Princípios contratuais modernos, vícios redibitórios, posse direta e indireta, e aquisição originária da propriedade por usucapião.',
            pilares: [
              { t: 'Boa-fé Objetiva', d: 'Dever anexo de lealdade, informação e proteção em todas as fases contratuais (Art. 422 CC).' },
              { t: 'Vícios Redibitórios & Evicção', d: 'Garantias legais por defeito oculto que diminui o valor ou por perda judicial do bem para terceiro legítimo proprietário.' },
              { t: 'Teoria da Posse de Ihering', d: 'Posse é a visibilidade do domínio: é possuidor todo aquele que tem de fato o exercício de algum dos poderes inerentes à propriedade (Art. 1.196 CC).' },
              { t: 'Usucapião Extraordinária', d: 'Posse mansa, pacífica e ininterrupta por 15 anos (ou 10 se moradia habitual), independentemente de justo título e boa-fé (Art. 1.238 CC).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Princípios Contratuais e Espécies',
                topicos: [
                  {
                    id: 'civ-4-1',
                    titulo: 'Boa-fé Objetiva e Figuras Parcelares (Venire Contra Factum Proprium)',
                    fundamento: 'Art. 422 do Código Civil',
                    conteudo: 'A boa-fé objetiva impõe deveres anexos de conduta e veda comportamentos contraditórios. Figuras consagradas pela jurisprudência: Venire contra factum proprium (proibição de comportamento contraditório), Supressio (perda de um direito pelo não exercício prolongado) e Surrectio (surgimento correlato de novo direito).',
                    exemplo: 'Locador aceita por 3 anos o pagamento do aluguel todo dia 15 sem juros; não pode subitamente exigir multa retroativa por quebra da data contratual do dia 5.'
                  },
                  {
                    id: 'civ-4-2',
                    titulo: 'Vícios Redibitórios e Evicção nos Contratos Onerosos',
                    fundamento: 'Arts. 441 e 447 do Código Civil',
                    conteudo: 'Vício redibitório: defeito oculto que torna a coisa imprópria ao uso a que é destinada ou lhe diminui o valor. Ação redibitória (rescinde o contrato) ou quanti minoris (abatimento no preço). Evicção: perda do bem adquirido em contrato oneroso por sentença judicial que reconhece direito anterior de terceiro.',
                    exemplo: 'Comprador de automóvel usado descobre que o chassi do carro foi clonado e o veículo é apreendido pela polícia: o vendedor responde pela evicção restituindo o valor integral.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Direitos Reais e Usucapião',
                topicos: [
                  {
                    id: 'civ-4-3',
                    titulo: 'Posse Direta, Posse Indireta e Desdobramento',
                    fundamento: 'Arts. 1.196 e 1.197 do Código Civil',
                    conteudo: 'O possuidor direto (ex: locatário, comodatário) exerce poder material temporário sobre a coisa; o possuidor indireto (ex: proprietário locador) conserva a posse jurídica. Ambos podem defender a posse contra terceiros e até mesmo o possuidor direto contra o indireto em caso de turbação.',
                    exemplo: 'Locatário com contrato vigente pode ajuizar ação possessória (interdito proibitório) contra o próprio proprietário que tenta invadir o imóvel alugado.'
                  },
                  {
                    id: 'civ-4-4',
                    titulo: 'Modalidades de Usucapião de Imóvel',
                    fundamento: 'Arts. 1.238 a 1.240-A do Código Civil',
                    conteudo: 'Extraordinária: 15 anos sem exigência de título ou boa-fé (reduz para 10 se fixou moradia ou realizou obras). Ordinária: 10 anos com justo título e boa-fé (reduz para 5 com registro cancelado e moradia). Especial Urbana: até 250m² por 5 anos para moradia própria sem ter outro imóvel.',
                    exemplo: 'Família reside em imóvel urbano de 180m² de forma ininterrupta e mansa há 6 anos sem ser proprietária de nenhum outro imóvel: preenchidos requisitos da Usucapião Especial Urbana.'
                  }
                ]
              }
            ]
          }
        ]
      },

      'constitucional': {
        id: 'constitucional',
        nome: 'Direito Constitucional',
        subtitulo: 'Constituição da República de 1988 • Direitos Fundamentais, Remédios e Controle',
        artigos: 'CF/88 Arts. 1º a 250',
        cor: 'var(--c-purple)',
        corGlow: 'var(--c-purple-glow)',
        iconSvg: SVG.crown,
        descricao: 'Direitos e garantias fundamentais (Art. 5º), remédios constitucionais (HC, MS, HD, MI, Ação Popular), repartição de competências e controle difuso e concentrado de constitucionalidade.',
        modulos: [
          {
            id: 'const-mod-1',
            nome: 'Direitos & Garantias Fundamentais (Art. 5º)',
            iconSvg: SVG.crown,
            cor: 'var(--c-purple)',
            corGlow: 'var(--c-purple-glow)',
            artigos: 'CF/88 Art. 5º, incisos I a LXXIX',
            subtitulo: 'Isonomia, legalidade, inviolabilidades constitucionais e garantias penais/processuais.',
            resumo: 'Análise minuciosa das liberdades civis, inviolabilidade de domicílio, correspondência, devido processo legal e contraditório.',
            pilares: [
              { t: 'Inviolabilidade de Domicílio', d: 'Casa é asilo inviolável: só entra sem mandado em flagrante, desastre ou socorro; com mandado judicial, SOMENTE durante o dia (Art. 5º, XI).' },
              { t: 'Sigilo das Comunicações', d: 'Interceptação telefônica exige estrita ordem judicial, para fins de investigação criminal ou instrução processual penal (Art. 5º, XII).' },
              { t: 'Provas Ilícitas (Art. 5º, LVI)', d: 'São inadmissíveis as provas obtidas por meios ilícitos e as derivadas ("Teoria dos Frutos da Árvore Envenenada").' },
              { t: 'Presunção de Não Culpabilidade', d: 'Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória (Art. 5º, LVII).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Liberdades Civis e Inviolabilidade',
                topicos: [
                  {
                    id: 'con-1-1',
                    titulo: 'Inviolabilidade Domiciliar & Critérios do STF',
                    fundamento: 'Art. 5º, XI da CF/88 | Tema 280 STF',
                    conteudo: 'A entrada forçada em domicílio sem mandado judicial, mesmo em crime permanente como tráfico de drogas, exige fundadas razões prévias devidamente justificadas pelas circunstâncias fáticas. O mandado judicial autoriza ingresso apenas durante o dia (critério cronológico das 6h às 18h ou solar).',
                    exemplo: 'Policiais invadem residência sem mandado amparados em mera atitude suspeita na calçada: a busca domiciliar é nula e a apreensão de drogas ilícita.'
                  },
                  {
                    id: 'con-1-2',
                    titulo: 'Direito de Reunião & Liberdade Religiosa',
                    fundamento: 'Art. 5º, VI, VII e XVI da CF/88 | Tema 855 STF',
                    conteudo: 'A reunião pacífica em locais abertos ao público independe de autorização do Poder Público, exigindo apenas prévio aviso à autoridade para não frustrar outra reunião convocada no mesmo local. O STF pacificou que o aviso prévio pode ser suprido pela publicidade da convocação em redes sociais.',
                    exemplo: 'Manifestação pacífica convocada amplamente pela internet em praça pública não pode ser dissolvida pelo Estado sob a justificativa de falta de ofício protocolado.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Garantias Penais e Processuais',
                topicos: [
                  {
                    id: 'con-1-3',
                    titulo: 'Devido Processo Legal, Ampla Defesa e Provas Ilícitas',
                    fundamento: 'Art. 5º, LIV, LV e LVI da CF/88',
                    conteudo: 'Ninguém será privado da liberdade ou de seus bens sem o devido processo legal. Aos litigantes são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes. Prova ilícita por derivação só é aproveitável se houver fonte independente (Art. 157, § 1º do CPP).',
                    exemplo: 'Confissão obtida mediante tortura policial é ilícita; a apreensão da arma do crime decorrente exclusivamente dessa confissão é ilícita por derivação.'
                  },
                  {
                    id: 'con-1-4',
                    titulo: 'Tribunal do Júri e Direitos da Cidadania',
                    fundamento: 'Art. 5º, XXXVIII da CF/88',
                    conteudo: 'É reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados: a plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência para o julgamento dos crimes dolosos contra a vida tentados ou consumados.',
                    exemplo: 'Tribunal togado de apelação não pode absolver réu condenado pelos jurados populares no mérito, podendo apenas anular e mandar a novo júri.'
                  },
                    {
                      id: 'con-1-5',
                      titulo: 'Igualdade Material, Ações Afirmativas & Discriminação Positiva vs Negativa',
                      fundamento: 'CF/88 Art. 5º, caput e Art. 3º, III | STF — ADPF 186 e ADC 41',
                      conteudo: 'A Constituição Cidadã consagra a <strong>igualdade material (substancial)</strong>, superando a mera isonomia formal para exigir o tratamento desigual dos desiguais na medida de suas desigualdades.<br><br>• <strong>Discriminação Negativa:</strong> Preconceito odioso, arbitrário e subjetivo desprovido de qualquer amparo fático-científico, que exclui e segrega minorias sociais violando o princípio da dignidade humana;<br>• <strong>Discriminação Positiva (Ações Afirmativas):</strong> Instrumento jurídico com fundamentação histórica e sociológica que institui políticas públicas compensatórias e regimes de cotas em benefício de grupos historicamente vulnerabilizados e sub-representados (população negra, indígena, pessoas com deficiência);<br>• <strong>Jurisprudência Vinculante do STF:</strong> O Supremo Tribunal Federal reconheceu expressamente a constitucionalidade das ações afirmativas de cotas étnico-raciais e sociais no ensino superior (ADPF 186) e no acesso aos cargos da Administração Pública Federal (ADC 41).',
                      exemplo: 'A instituição de reserva legal de vagas em universidades públicas e concursos para candidatos negros e indígenas constitui legítima discriminação positiva necessária à concretização dos objetivos fundamentais de erradicar a marginalização e reduzir as desigualdades (Art. 3º, III da CF/88).'
                    }
                ]
              }
            ]
          },
          {
            id: 'const-mod-2',
            nome: 'Remédios Constitucionais & Ações de Garantia',
            iconSvg: SVG.scale,
            cor: 'var(--c-purple)',
            corGlow: 'var(--c-purple-glow)',
            artigos: 'CF/88 Art. 5º, LXVIII a LXXIII | Legislação Específica',
            subtitulo: 'Habeas Corpus, Mandado de Segurança, Habeas Data, Mandado de Injunção e Ação Popular.',
            resumo: 'Requisitos de cabimento, legitimação ativa e passiva, procedimentos especiais e súmulas dos tribunais superiores para cada remédio.',
            pilares: [
              { t: 'Habeas Corpus (Gratuito)', d: 'Protege a liberdade de locomoção corporal contra ilegalidade ou abuso de poder. Não cabe para punição disciplinar militar de mérito nem para discutir pessoa jurídica.' },
              { t: 'Mandado de Segurança (MS)', d: 'Protege direito líquido e certo não amparado por HC ou HD. Exige prova pré-constituída sem dilação probatória. Prazo: 120 dias decadenciais (Lei 12.016/09).' },
              { t: 'Habeas Data (Gratuito)', d: 'Para assegurar o conhecimento ou retificação de informações relativas à pessoa do impetrante em bancos de dados governamentais ou de caráter público.' },
              { t: 'Ação Popular', d: 'Qualquer CIDADÃO (eleitor com título de eleitor regular) é parte legítima para anular ato lesivo ao patrimônio público, histórico, cultural ou ambiental.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Remédios da Liberdade e Informação',
                topicos: [
                  {
                    id: 'con-2-1',
                    titulo: 'Habeas Corpus Preventivo e Repressivo',
                    fundamento: 'Art. 5º, LXVIII da CF/88 | Arts. 647 e 648 do CPP',
                    conteudo: 'Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Preventivo (expede-se salvo-conduto) ou Repressivo (expede-se alvará de soltura). Não exige capacidade postulatória (qualquer pessoa pode impetrar).',
                    exemplo: 'Pessoa prestes a ser presa ilegalmente por ordem de autoridade sem fundamentação impetra HC preventivo obtendo salvo-conduto do Tribunal.'
                  },
                  {
                    id: 'con-2-2',
                    titulo: 'Mandado de Segurança Individual e Coletivo',
                    fundamento: 'Art. 5º, LXIX e LXX da CF/88 | Lei nº 12.016/2009',
                    conteudo: 'Direito líquido e certo é aquele demonstrável de plano por documentos. Não cabe dilação probatória ou oitiva de testemunhas. Prazo decadencial de 120 dias da ciência do ato. MS Coletivo pode ser impetrado por partido político com representação no Congresso, ou organização sindical e entidade de classe legalmente constituída há pelo menos 1 ano.',
                    exemplo: 'Candidato aprovado em 1º lugar em concurso público dentro do número de vagas que é preterido por contratação precária: impetra MS individual com prova do edital e nomeação de comissionado.'
                  },
                  {
                    id: 'con-2-3',
                    titulo: 'Habeas Data e o Requisito da Recusa Prévia',
                    fundamento: 'Art. 5º, LXXII da CF/88 | Lei nº 9.507/97 | Súmula 2 STJ',
                    conteudo: 'O Habeas Data tem natureza personalíssima (só a própria pessoa pode pedir seus dados). Pressuposto de admissibilidade indispensável: comprovação da recusa da autoridade administrativa em fornecer os dados ou do decurso do prazo sem resposta (Súmula 2 do STJ). É ação gratuita.',
                    exemplo: 'Cidadão requer formalmente cópia de sua ficha funcional aos órgãos públicos e recebe negativa injustificada por escrito: preenchido o requisito para impetração do Habeas Data.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Remédios Coletivos e Cidadania',
                topicos: [
                  {
                    id: 'con-2-4',
                    titulo: 'Mandado de Injunção e Efeitos da Sentença',
                    fundamento: 'Art. 5º, LXXI da CF/88 | Lei nº 13.300/2016',
                    conteudo: 'Concede-se sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania. Pela Lei 13.300/16, o tribunal fixa prazo para o Poder competente regulamentar e, transcorrido sem edição, estabelece as condições de exercício (posição concretista).',
                    exemplo: 'Servidores públicos pleitearam mandado de injunção pela falta da lei de greve; o STF determinou a aplicação analógica da lei de greve dos trabalhadores privados.'
                  },
                  {
                    id: 'con-2-5',
                    titulo: 'Ação Popular: Legitimidade e Requisitos',
                    fundamento: 'Art. 5º, LXXIII da CF/88 | Lei nº 4.717/1965',
                    conteudo: 'Exclusiva de cidadão em gozo de seus direitos políticos (obriga juntada de título de eleitor). Visa anular ato lesivo ao patrimônio público, moralidade administrativa, meio ambiente ou patrimônio histórico e cultural. O autor fica isento de custas judiciais e sucumbência, salvo comprovada má-fé.',
                    exemplo: 'Eleitor ajuíza ação popular demonstrando que o prefeito vendeu terreno público por 10% do valor de mercado sem licitação: pedido de anulação e restituição dos valores ao erário.'
                  }
                ]
              }
            ]
          },
          {
            id: 'const-mod-3',
            nome: 'Organização do Estado & Repartição de Competências',
            iconSvg: SVG.layers,
            cor: 'var(--c-purple)',
            corGlow: 'var(--c-purple-glow)',
            artigos: 'CF/88 Arts. 18 a 43',
            subtitulo: 'Estrutura federativa, competências privativas, comuns e concorrentes, e intervenção federal.',
            resumo: 'Pacto federativo brasileiro, autonomia dos entes federados (União, Estados, DF e Municípios) e regras de competência legislativa.',
            pilares: [
              { t: 'Princípio da Predominância do Interesse', d: 'União = interesse geral nacional; Estados = interesse regional; Municípios = interesse local.' },
              { t: 'Competência Privativa da União (Art. 22)', d: 'Legislar sobre direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho (Mnemônico CAPACETE DE PM).' },
              { t: 'Competência Concorrente (Art. 24)', d: 'União limita-se a normas gerais; Estados e DF exercem competência suplementar (Mnemônico PUTTO: Penitenciário, Urbanístico, Tributário, Tributário e Orçamentário).' },
              { t: 'Intervenção Federal (Art. 34)', d: 'Medida excepcional que suspende a autonomia do ente federado em hipóteses taxativas da Constituição.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Divisão de Competências Legislativas',
                topicos: [
                  {
                    id: 'con-3-1',
                    titulo: 'Competência Privativa da União & Mnemônico CAPACETE',
                    fundamento: 'Art. 22 da CF/88 | Súmula Vinculante 38 e 46',
                    conteudo: 'Compete privativamente à União legislar sobre Direito Civil, Comercial, Penal, Processual, Eleitoral, Agrário, Marítimo, Aeronáutico, Espacial e do Trabalho. Lei estadual que disponha sobre processo ou matéria penal padece de inconstitucionalidade formal por usurpação de competência privativa da União.',
                    exemplo: 'Lei estadual que autoriza revista íntima em presídios ou altera regras de prazos processuais é inconstitucional por invadir matéria privativa da União.'
                  },
                  {
                    id: 'con-3-2',
                    titulo: 'Competência Concorrente & Municípios',
                    fundamento: 'Arts. 24 e 30 da CF/88',
                    conteudo: 'Na competência concorrente (Art. 24), a União fixa normas gerais. A competência da União não exclui a competência suplementar dos Estados. Se a União não editar norma geral, os Estados exercem competência legislativa plena; sobrevindo lei federal de normas gerais, suspende-se a eficácia da lei estadual no que lhe for contrária.',
                    exemplo: 'Estado edita lei sobre proteção ambiental suplementando regras federais mais brandas: atuação legítima no âmbito da competência concorrente.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Autonomia e Intervenção',
                topicos: [
                  {
                    id: 'con-3-3',
                    titulo: 'Intervenção Federal: Pressupostos e Rito',
                    fundamento: 'Arts. 34 a 36 da Constituição Federal',
                    conteudo: 'A União não intervirá nos Estados nem no DF, salvo para: manter integridade nacional, repelir invasão estrangeira, pôr termo a grave perturbação da ordem pública, garantir o livre exercício dos Poderes, reorganizar as finanças e assegurar os princípios constitucionais sensíveis.',
                    exemplo: 'Decreto de intervenção federal na segurança pública do Distrito Federal aprovado pelo Congresso Nacional após ataques contra os Poderes.'
                  }
                ]
              }
            ]
          },
          {
            id: 'const-mod-4',
            nome: 'Teoria do Controle de Constitucionalidade',
            iconSvg: SVG.gavel,
            cor: 'var(--c-purple)',
            corGlow: 'var(--c-purple-glow)',
            artigos: 'CF/88 Arts. 97, 102 e 103 | Leis 9.868/99 e 9.882/99',
            subtitulo: 'Controle difuso, controle concentrado (ADI, ADC, ADO, ADPF), reserva de plenário e legitimados.',
            resumo: 'Mecanismos de fiscalização da conformidade das leis com a Constituição, controle abstrato e incidental, e efeitos das decisões do STF.',
            pilares: [
              { t: 'Cláusula de Reserva de Plenário', d: 'Art. 97 CF e Súmula Vinculante 10: Tribunais só podem declarar a inconstitucionalidade de lei pelo voto da maioria absoluta dos seus membros.' },
              { t: 'Legitimados do Art. 103 (STF)', d: '3 Mesas (Câmara, Senado, Assembleia Legislativa), 3 Autoridades (Presidente, PGR, Governador) e 3 Entidades (OAB, Partido com representação, Confederação Sindical).' },
              { t: 'Legitimados Especiais vs Universais', d: 'Governador, Assembleia Legislativa e Confederação Sindical exigem PERTINÊNCIA TEMÁTICA para ajuizar ADI/ADC.' },
              { t: 'Efeitos da ADI / ADC', d: 'Eficácia contra todos (erga omnes), efeito vinculante aos demais órgãos do Poder Judiciário e à Administração Pública, e regra retroativa (ex tunc).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Controle Difuso / Concreto',
                topicos: [
                  {
                    id: 'con-4-1',
                    titulo: 'Controle Difuso e Súmula Vinculante 10',
                    fundamento: 'Art. 97 da CF/88 | Súmula Vinculante 10 do STF',
                    conteudo: 'Qualquer juiz ou tribunal pode declarar a inconstitucionalidade de lei no caso concreto. Nos Tribunais, a declaração de inconstitucionalidade pelo órgão fracionário (câmara ou turma) sem submissão ao plenário viola a cláusula de reserva de plenário (Súmula Vinculante 10), gerando nulidade do acórdão.',
                    exemplo: 'Turma de Tribunal de Justiça afasta a incidência de lei tributária em recurso sem remeter ao Órgão Especial: violação da Súmula Vinculante 10.'
                  },
                  {
                    id: 'con-4-2',
                    titulo: 'Papel do Senado Federal (Art. 52, X CF)',
                    fundamento: 'Art. 52, X da CF/88 | Mutação Constitucional STF',
                    conteudo: 'Compete privativamente ao Senado suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do STF no controle difuso. O STF reconhece a mutação constitucional segundo a qual a decisão em repercussão geral já irradia efeitos expansivos com eficácia ultra partes.',
                    exemplo: 'Resolução do Senado Federal que suspende a eficácia de artigo do Código Tributário Nacional após decisão reiterada do Plenário do STF.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Controle Concentrado no STF',
                topicos: [
                  {
                    id: 'con-4-3',
                    titulo: 'ADI, ADC e Modulação de Efeitos',
                    fundamento: 'Arts. 102, I, "a" e 103 da CF | Lei 9.868/1999',
                    conteudo: 'A Ação Direta de Inconstitucionalidade (ADI) e a Ação Declaratória de Constitucionalidade (ADC) tramitam originariamente no STF. A regra geral da decisão é efeito ex tunc e erga omnes. Por razões de segurança jurídica ou excepcional interesse social, o STF pode modular os efeitos temporais pelo voto de 2/3 dos ministros (Art. 27 Lei 9.868).',
                    exemplo: 'STF declara inconstitucional benefício fiscal concedido há 10 anos, mas modula os efeitos para que a decisão produza eficácia apenas a partir do próximo ano fiscal.'
                  },
                  {
                    id: 'con-4-4',
                    titulo: 'Arguição de Descumprimento de Preceito Fundamental (ADPF)',
                    fundamento: 'Art. 102, § 1º da CF/88 | Lei nº 9.882/1999',
                    conteudo: 'A ADPF destina-se a evitar ou reparar lesão a preceito fundamental resultante de ato do Poder Público. É regida pelo Princípio da Subsidiariedade: só é admissível se não houver qualquer outro meio eficaz de sanar a lesividade no controle concentrado. É a via cabível para impugnar direito municipal e direito pré-constitucional (anterior a 1988).',
                    exemplo: 'Impugnação perante o STF de artigo do Código Penal de 1940 (lei anterior à CF/88) que tipificava desacato: cabível exclusivamente via ADPF.'
                  }
                ]
              }
            ]
          }
        ]
      },

      'processo-civil': {
        id: 'processo-civil',
        nome: 'Direito Processual Civil',
        subtitulo: 'Código de Processo Civil (Lei nº 13.105/2015) • Conhecimento, Recursos e Tutela Executiva',
        artigos: 'Arts. 1º a 1.072 do CPC/15',
        cor: 'var(--c-emerald)',
        corGlow: 'var(--c-emerald-glow)',
        iconSvg: SVG.layers,
        descricao: 'Normas fundamentais, fase postulatória e probatória, tutelas provisórias, sistema recursal, Teoria Geral da Execução, Cumprimento de Sentença e Execução de Título Extrajudicial.',
        modulos: [
          {
            id: 'proc-civ-mod-1',
            nome: 'Princípios Fundamentais & Fase Postulatória',
            iconSvg: SVG.layers,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 1º a 333 do Código de Processo Civil',
            subtitulo: 'Princípio da cooperação, vedação à decisão-surpresa, requisitos da petição inicial e improcedência liminar.',
            resumo: 'Modelo cooperativo do CPC/15, contraditório substantivo, formulação dos pedidos na inicial e audiência de conciliação do art. 334.',
            pilares: [
              { t: 'Vedação à Decisão-Surpresa', d: 'Art. 9º e 10 CPC: O juiz não pode decidir com base em fundamento sobre o qual não se tenha dado às partes oportunidade de se manifestar.' },
              { t: 'Princípio da Cooperação', d: 'Art. 6º CPC: Todos os sujeitos do processo devem cooperar entre si para que se obtenha decisão de mérito justa e efetiva.' },
              { t: 'Emenda da Petição Inicial', d: 'Art. 321 CPC: O juiz concederá o prazo de 15 dias úteis para emendar indicando com precisão o defeito antes de indeferir.' },
              { t: 'Improcedência Liminar do Pedido', d: 'Art. 332 CPC: Julgamento imediato de mérito sem citar o réu em causas que contrariam súmula do STF/STJ ou tese repetitiva.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Normas Fundamentais e Petição Inicial',
                topicos: [
                  {
                    id: 'pc-1-1',
                    titulo: 'Contraditório Substancial & Vedação à Decisão-Surpresa',
                    fundamento: 'Arts. 9º e 10 do CPC/15',
                    conteudo: 'O contraditório não é mera ciência formal, mas direito de influenciar concretamente a convicção do magistrado. É nula a decisão judicial fundamentada em matéria nunca debatida nos autos, inclusive sobre matérias de ordem pública conhecíveis de ofício (como decadência e ilegitimidade de parte).',
                    exemplo: 'Juiz extingue a ação alegando prescrição de ofício sem intimar previamente o autor para se manifestar: nulidade por decisão-surpresa.'
                  },
                  {
                    id: 'pc-1-2',
                    titulo: 'Requisitos da Petição Inicial e Pedidos',
                    fundamento: 'Arts. 319 a 329 do CPC/15',
                    conteudo: 'A petição inicial indicará: juízo, qualificação das partes, fatos e fundamentos jurídicos, pedidos com especificações, valor da causa, provas pretendidas e opção pela audiência de conciliação (Art. 319). O pedido deve ser certo e determinado, admitindo-se pedido genérico nas hipóteses taxativas do art. 324, § 1º.',
                    exemplo: 'Autor em ação indenizatória de despesas médicas continuadas cujo montante final ainda não pode ser apurado de imediato pode formular pedido genérico ilíquido.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Improcedência Liminar e Audiência',
                topicos: [
                  {
                    id: 'pc-1-3',
                    titulo: 'Improcedência Liminar do Pedido (Art. 332)',
                    fundamento: 'Art. 332 do CPC/15',
                    conteudo: 'Nas causas que dispensem a fase instrutória, o juiz julgará liminarmente improcedente o pedido que contrariar: enunciado de súmula do STF ou do STJ, acórdão em IRDR ou julgamento de recursos repetitivos. Trata-se de sentença com resolução do mérito proferida antes da citação do demandado.',
                    exemplo: 'Autor ajuíza ação cobrando taxa condominial com base em tese que o STJ já fixou expressamente ser indevida em recurso repetitivo: improcedência liminar imediata.'
                  },
                  {
                    id: 'pc-1-4',
                    titulo: 'Audiência de Mediação e Conciliação (Art. 334)',
                    fundamento: 'Art. 334 do CPC/15',
                    conteudo: 'Se a petição inicial preencher os requisitos e não houver improcedência liminar, o juiz designará audiência de conciliação com antecedência mínima de 30 dias. A audiência só NÃO se realizará se ambas as partes manifestarem expressamente desinteresse. O não comparecimento injustificado é ato atentatório à dignidade da justiça com multa de até 2%.',
                    exemplo: 'Réu devidamente intimado deixa de comparecer à audiência do art. 334 sem apresentar atestado ou justificativa: aplicação de multa de 2% do valor da causa.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-2',
            nome: 'Tutelas Provisórias & Resposta do Réu',
            iconSvg: SVG.shield,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 294 a 311 e Arts. 335 a 353 do CPC/15',
            subtitulo: 'Tutela de urgência (cautelar e antecipada), tutela da evidência, contestação e reconvenção.',
            resumo: 'Regime das tutelas provisórias, estabilização da tutela antecedente, matérias preliminares de contestação e revelia.',
            pilares: [
              { t: 'Tutela de Urgência (Art. 300)', d: 'Exige elementos que evidenciem a probabilidade do direito (fumus boni iuris) e o perigo de dano ou risco ao resultado útil (periculum in mora).' },
              { t: 'Tutela da Evidência (Art. 311)', d: 'Independe da demonstração de perigo de dano ou de risco ao resultado útil do processo!' },
              { t: 'Estabilização da Tutela Antecedente', d: 'Art. 304 CPC: A tutela antecipada requerida em caráter antecedente torna-se estável se da decisão não for interposto o respectivo Agravo de Instrumento.' },
              { t: 'Princípio da Eventualidade', d: 'Art. 336 CPC: O réu deve alegar na contestação toda a matéria de defesa, expondo as razões de fato e de direito.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Tutelas Provisórias',
                topicos: [
                  {
                    id: 'pc-2-1',
                    titulo: 'Tutela de Urgência Cautelar vs Antecipada',
                    fundamento: 'Arts. 300 a 310 do CPC/15',
                    conteudo: 'Tutela antecipada: satisfaz provisoriamente o próprio direito material pretendido (ex: fornecimento de medicamento ou cirurgia). Tutela cautelar: assegura a utilidade do processo sem satisfazer o direito (ex: indisponibilidade de bens ou arresto). A tutela de urgência de natureza antecipada não será concedida quando houver perigo de irreversibilidade dos efeitos da decisão (Art. 300, § 3º).',
                    exemplo: 'Paciente com risco de morte solicita cirurgia de emergência negada pelo plano: concessão de tutela de urgência antecipada com bloqueio de contas se descumprido.'
                  },
                  {
                    id: 'pc-2-2',
                    titulo: 'Hipóteses da Tutela da Evidência (Art. 311)',
                    fundamento: 'Art. 311 do CPC/15',
                    conteudo: 'A tutela da evidência será concedida independentemente de perigo de dano quando: I - ficar caracterizado o abuso do direito de defesa ou o manifesto propósito protelatório; II - as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou súmula vinculante; III - contrato de depósito; IV - petição inicial instruída com prova documental suficiente e o réu não opuser prova capaz de gerar dúvida.',
                    exemplo: 'Pedido de cobrança baseado em súmula vinculante com prova exclusivamente documental juntada: juiz defere tutela da evidência de plano.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Contestação e Resposta do Réu',
                topicos: [
                  {
                    id: 'pc-2-3',
                    titulo: 'Contestação: Preliminares do Art. 337 e Mérito',
                    fundamento: 'Arts. 335 a 342 do CPC/15',
                    conteudo: 'Prazo de 15 dias úteis contados da data da realização da audiência de conciliação. Antes de discutir o mérito, o réu deve suscitar preliminares: incompetência absoluta/relativa, inépcia da inicial, perempção, litispendência, coisa julgada, conexão, convenção de arbitragem ou carência de ação.',
                    exemplo: 'Réu suscita preliminar de convenção de arbitragem constante do contrato: acolhida a preliminar, o processo judicial é extinto sem resolução de mérito (Art. 485, VII).'
                  },
                  {
                    id: 'pc-2-4',
                    titulo: 'Reconvenção e Efeitos da Revelia',
                    fundamento: 'Arts. 343 a 346 do CPC/15',
                    conteudo: 'É lícito ao réu propor reconvenção na própria contestação para manifestar pretensão própria conexa com a ação principal. Se o réu não contestar a ação, será considerado revel e presumir-se-ão verdadeiras as alegações de fato formuladas pelo autor (salvo se versar sobre direitos indisponíveis ou havendo litisconsórcio passivo em que um contesta).',
                    exemplo: 'Em ação de divórcio, o réu não apenas contesta os pedidos da autora como também requer na própria peça indenização por danos materiais em reconvenção.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-3',
            nome: 'Fase Probatória, Saneamento & Sentença',
            iconSvg: SVG.book,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 354 a 508 do CPC/15',
            subtitulo: 'Julgamento conforme o estado, saneamento, distribuição do ônus da prova e sentença de mérito.',
            resumo: 'Organização do processo, inversão do ônus probatório, valoração das provas testemunhais/periciais e requisitos da sentença civil.',
            pilares: [
              { t: 'Decisão de Saneamento (Art. 357)', d: 'O juiz resolve questões processuais pendentes, delimita questões de fato controvertidas, define o ônus da prova e designa audiência se necessário.' },
              { t: 'Distribuição Dinâmica da Prova', d: 'Art. 373, § 1º: O juiz pode redistribuir o ônus da prova para quem tiver maior facilidade técnica ou econômica de produzi-la.' },
              { t: 'Dever de Fundamentação Analítica', d: 'Art. 489, § 1º: Não se considera fundamentada a sentença que emprega conceitos vagos, cita precedentes sem correlação ou deixa de enfrentar argumentos capazes de infirmar a conclusão.' },
              { t: 'Coisa Julgada Material', d: 'Art. 502: Eficácia que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Saneamento e Provas',
                topicos: [
                  {
                    id: 'pc-3-1',
                    titulo: 'Decisão de Saneamento e Distribuição do Ônus da Prova',
                    fundamento: 'Arts. 357 e 373 do CPC/15',
                    conteudo: 'Regra estática: cabe ao autor o fato constitutivo de seu direito, e ao réu os fatos impeditivos, modificativos ou extintivos (Art. 373). O juiz pode inverter o ônus (distribuição dinâmica) por decisão fundamentada antes da sentença, dando à parte a oportunidade de se desincumbir do encargo.',
                    exemplo: 'Em erro médico complexo, o hospital detém todos os prontuários e laudos: o juiz aplica a teoria dinâmica transferindo ao hospital o encargo de provar a regularidade do ato cirúrgico.'
                  },
                  {
                    id: 'pc-3-2',
                    titulo: 'Prova Testemunhal e Pericial',
                    fundamento: 'Arts. 442 a 480 do CPC/15',
                    conteudo: 'A prova testemunhal é sempre admissível se a lei não dispuser de modo diverso. Não podem depor como testemunhas os incapazes, impedidos ou suspeitos (Art. 447). A prova pericial será indeferida quando a matéria for exclusivamente de direito ou o fato for de conhecimento notório.',
                    exemplo: 'Amigo íntimo ou cônjuge da parte não pode depor como testemunha compromissada, podendo no máximo ser ouvido como mero informante sem prestar compromisso legal.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Sentença e Coisa Julgada',
                topicos: [
                  {
                    id: 'pc-3-3',
                    titulo: 'Requisitos da Sentença e Vícios de Fundamentação',
                    fundamento: 'Arts. 485, 487 e 489 do CPC/15',
                    conteudo: 'São elementos essenciais da sentença: relatório, fundamentos e dispositivo (Art. 489). Sentença com resolução do mérito (Art. 487) faz coisa julgada material; sentença sem resolução do mérito (Art. 485) faz apenas coisa julgada formal, admitindo nova propositura se corrigido o vício.',
                    exemplo: 'Sentença que julga pedido improcedente com base na prescrição é decisão definitiva de mérito (Art. 487, II) gerando coisa julgada material plena.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-4',
            nome: 'Sistema Recursal Cível & Meios de Impugnação',
            iconSvg: SVG.scale,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 994 a 1.044 do CPC/15',
            subtitulo: 'Apelação cível, agravo de instrumento, embargos de declaração e recursos excepcionais.',
            resumo: 'Prazos recursais em dias úteis, efeito suspensivo e devolutivo, taxatividade mitigada do agravo e teoria da causa madura.',
            pilares: [
              { t: 'Prazo Geral de 15 Dias Úteis', d: 'Art. 1.003, § 5º e Art. 219 CPC: Todos os recursos possuem prazo de 15 dias úteis, EXCETO os Embargos de Declaração que têm prazo de 5 dias úteis.' },
              { t: 'Apelação Cível (Art. 1.009)', d: 'Recurso contra sentença; tem efeito suspensivo automático como regra geral e efeito devolutivo amplo.' },
              { t: 'Agravo de Instrumento (Art. 1.015)', d: 'Recurso contra decisões interlocutórias expressamente previstas em lei ou quando houver urgência decorrente da inutilidade do julgamento posterior (Tema 988 STJ).' },
              { t: 'Teoria da Causa Madura', d: 'Art. 1.013, § 3º: O Tribunal pode julgar imediatamente o mérito ao reformar sentença terminativa se o processo estiver em condições de imediato julgamento.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Apelação e Efeito Devolutivo',
                topicos: [
                  {
                    id: 'pc-4-1',
                    titulo: 'Apelação Cível e Teoria da Causa Madura',
                    fundamento: 'Arts. 1.009 a 1.014 do CPC/15',
                    conteudo: 'A apelação devolverá ao tribunal o conhecimento de toda a matéria impugnada. Se o tribunal reformar sentença que extinguiu o processo sem resolução do mérito e o feito estiver instruído e pronto para julgamento, o tribunal NÃO devolverá os autos ao 1º grau: julgará diretamente o mérito por força da causa madura (Art. 1.013, § 3º, I).',
                    exemplo: 'Juiz de 1º grau extingue processo alegando ilegitimidade passiva; o TJ reconhece a legitimidade e, estando as provas concluídas, julga de pronto o pedido procedente.'
                  },
                  {
                    id: 'pc-4-2',
                    titulo: 'Agravo de Instrumento e a Tese da Taxatividade Mitigada',
                    fundamento: 'Art. 1.015 do CPC/15 | Tema Repetitivo 988 do STJ',
                    conteudo: 'O rol do art. 1.015 prevê hipóteses de cabimento imediato (tutelas provisórias, rejeição da gratuidade, mérito do processo, rejeição de arbitragem). Pelo Tema 988 do STJ, o rol é de "taxatividade mitigada": admite-se agravo de instrumento fora das hipóteses legais se verificada a urgência decorrente da inutilidade do julgamento da questão na futura apelação.',
                    exemplo: 'Decisão interlocutória que indefere segredo de justiça ou define competência: cabe agravo de instrumento imediato sob a tese da taxatividade mitigada.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Embargos e Recursos Superiores',
                topicos: [
                  {
                    id: 'pc-4-3',
                    titulo: 'Embargos de Declaração no CPC/15',
                    fundamento: 'Arts. 1.022 a 1.026 do CPC/15',
                    conteudo: 'Cabíveis contra qualquer decisão judicial para: esclarecer obscuridade, eliminar contradição, suprir omissão ou corrigir erro material. Prazo de 5 dias úteis. Os embargos de declaração INTERROMPEM o prazo para a interposição de outros recursos para ambas as partes (Art. 1.026).',
                    exemplo: 'Juiz prolata acórdão omitindo-se sobre a tese de prescrição alegada; a oposição de embargos de declaração interrompe o prazo para interpor Recurso Especial.'
                  },
                  {
                    id: 'pc-4-4',
                    titulo: 'Recurso Especial (REsp) e Recurso Extraordinário (RE)',
                    fundamento: 'Arts. 102, III e 105, III da CF/88 | Arts. 1.029 a 1.041 CPC',
                    conteudo: 'REsp (STJ): violação a tratado ou lei federal infraconstitucional. RE (STF): violação direta à Constituição Federal, exigindo demonstração de Repercussão Geral da questão constitucional (Art. 1.035). Ambos não admitem reexame de matéria fático-probatória (Súmula 7 do STJ e Súmula 279 do STF).',
                    exemplo: 'Empresa interpõe REsp alegando que tribunal estadual negou vigência ao Art. 389 do Código Civil: cabimento de competência estrita do STJ.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-5',
            nome: 'Teoria Geral da Execução, Competência & Responsabilidade Patrimonial',
            iconSvg: SVG.scale,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 771 a 796 e 833 do CPC/15 | Lei nº 8.009/90 | Art. 1.052 do CC',
            subtitulo: 'Vias executivas, princípios estruturantes, legitimidade ativa/passiva, competência, impenhorabilidades e fraude de execução.',
            resumo: 'Roteiro completo sobre a Tutela Executiva: diferenças entre conhecimento e execução, responsabilidade patrimonial real do devedor, bens impenhoráveis, desconsideração da personalidade (IDPJ) e distinção entre fraude contra credores e fraude à execução.',
            pilares: [
              { t: 'Princípio da Realidade (Art. 789)', d: 'Toda execução é real e patrimonial: incide exclusivamente sobre o patrimônio do devedor, e não sobre a sua pessoa. Inexistindo bens, suspende-se a execução (Art. 921, III).' },
              { t: 'Menor Onerosidade (Art. 805)', d: 'Havendo vários meios executivos igualmente eficazes, o juiz mandará realizá-la pelo modo menos gravoso para o executado.' },
              { t: 'Satisfatividade & Utilidade', d: 'A execução existe unicamente para satisfazer o direito do credor e deve ser útil (Arts. 831 e 836). Não se penhora bem cujo produto será absorvido pelas custas.' },
              { t: 'Fraude à Execução (Art. 792)', d: 'Alienação na pendência de ação executiva capaz de reduzi-lo à insolvência: gera ineficácia do negócio perante o exequente e dispensa ação pauliana (Súmula 375 STJ).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Tutela Executiva e Princípios Fundamentais',
                topicos: [
                  {
                    id: 'pc-5-1',
                    titulo: 'Conceito de Execução, Vias Executivas e Distinção do Conhecimento',
                    fundamento: 'Arts. 771 a 777 do CPC/15',
                    conteudo: 'A <strong>execução forçada</strong> é o conjunto de atos estatais destinados a realizar no plano prático a vontade concreta da lei previamente certificada em um título executivo.<br><br>• <strong>Vias de Execução no CPC:</strong> 1) <em>Cumprimento de Sentença</em> (títulos judiciais, fase sincrética dentro da mesma relação processual); 2) <em>Processo de Execução</em> (títulos extrajudiciais, instaurando relação jurídica nova com citação);<br>• <strong>Diferenças Estruturais:</strong> No conhecimento há incerteza sobre o direito e o juiz exerce cognição para declarar e julgar (processo de sentença); na execução parte-se da certeza previamente documentada no título e o Estado atua concretamente com atos materiais de coação e sub-rogação (processo de realização da sanção);<br>• <strong>Sanções Executivas:</strong> Execução específica (entrega da própria prestação in natura) ou execução subsidiária por perdas e danos equivalente ao valor pecuniário.',
                    exemplo: 'Portador de duplicata aceita e inadimplida ajuíza diretamente Ação de Execução de Título Extrajudicial (Art. 824), prescindindo de fase cognitiva prévia para comprovar a existência da dívida.'
                  },
                  {
                    id: 'pc-5-2',
                    titulo: 'Princípios Estruturantes da Execução Forçada',
                    fundamento: 'Arts. 789, 797, 805, 831 e 836 do CPC/15',
                    conteudo: 'A tutela executiva subordina-se a cinco princípios fundamentais expressos no CPC:<br><br>1. <strong>Princípio da Realidade / Patrimonialidade (Art. 789):</strong> A execução recai sobre os bens do devedor e não sobre sua liberdade ou corpo. Única exceção constitucional: prisão civil coercitiva do devedor de pensão alimentícia (Art. 5º, LXVII da CF/88);<br>2. <strong>Princípio da Satisfatividade (Arts. 831 e 899):</strong> A expropriação limita-se aos bens estritamente necessários para satisfazer o crédito e as despesas processuais, não podendo avançar sobre todo o acervo do executado indiscriminadamente;<br>3. <strong>Princípio da Utilidade (Art. 836):</strong> A execução não pode se converter em mero castigo ao devedor. Não se levará a efeito penhora quando evidente que o produto dos bens será totalmente absorvido pelo pagamento das custas e despesas;<br>4. <strong>Princípio da Menor Onerosidade (Art. 805):</strong> Se por vários meios o credor puder promover a execução, o juiz determinará que se processe pelo modo menos gravoso ao devedor, incumbindo ao executado indicar outro meio mais idôneo e menos oneroso;<br>5. <strong>Princípio do Contraditório e da Não-Surpresa:</strong> O executado tem direito de ser ouvido e de defender-se preventivamente contra atos expropriatórios ilegais.',
                    exemplo: 'Executado que teve bloqueio de conta de capital de giro comprova que a constrição inviabiliza o pagamento dos salários e indica à penhora veículo livre de gravame: o juiz defere a substituição com fundamento no Art. 805 do CPC.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Sujeitos, Competência e Responsabilidade Patrimonial',
                topicos: [
                  {
                    id: 'pc-5-3',
                    titulo: 'Sujeitos da Execução e Regras de Competência Territorial e Funcional',
                    fundamento: 'Arts. 778 a 782 e Art. 516 do CPC/15',
                    conteudo: '<strong>Legitimação Ativa (Art. 778):</strong><br>• <em>Originária:</em> O credor titular consignado no título e o Ministério Público nas hipóteses autorizadas por lei (ex.: execução no cível de sentença penal condenatória quando a vítima for pobre - Art. 68 CPP);<br>• <em>Superveniente / Derivada:</em> O espólio, herdeiros ou sucessores (causa mortis), o cessionário (ato inter vivos) e o sub-rogado convencional ou legal. Não se exige anuência do executado para a sucessão pelo cessionário (Art. 778, § 2º).<br><br><strong>Legitimação Passiva (Art. 779):</strong> Devedor constante do título, espólio/herdeiros (nos limites da herança), novo devedor por assunção, fiador judicial, responsável tributário e terceiro titular de bem vinculado a garantia real.<br><br><strong>Competência Executiva:</strong><br>• <em>Títulos Judiciais (Art. 516):</em> Executam-se no juízo que decidiu a causa no primeiro grau de jurisdição ou tribunal competente de causa originária;<br>• <em>Títulos Extrajudiciais (Art. 781):</em> Foro de eleição contratual, foro do domicílio do executado, do local onde se encontram os bens sujeitos à execução ou do lugar em que a obrigação deveria ser cumprida.',
                    exemplo: 'Herdeiro que recebe crédito de nota promissória executada pelo falecido pai habilita-se nos autos como sucessor processual por legitimação superveniente mortis causa (Art. 778, § 1º, II).'
                  },
                  {
                    id: 'pc-5-4',
                    titulo: 'Responsabilidade Patrimonial e Rol de Bens Impenhoráveis',
                    fundamento: 'Arts. 789 e 833 do CPC/15 | Lei nº 8.009/1990 | Art. 1.052 do CC',
                    conteudo: 'O devedor responde com todos os seus bens presentes e futuros para o cumprimento da obrigação (Art. 789). Todavia, a dignidade da pessoa humana impõe <strong>impenhorabilidades legais absolutas e relativas (Art. 833):</strong><br><br>• <strong>Bens Impenhoráveis (Art. 833):</strong> Móveis e utensílios que guarnecem a residência da família; vestuários e pertences de uso pessoal; vencimentos, subsídios, soldos, salários, proventos de aposentadoria e pensões (com mitigação admitida pelo STJ se resguardada a subsistência digna ou caso a remuneração exceda 50 salários mínimos, além de cobrança de pensão alimentícia); livros e instrumentos necessários ao exercício da profissão; saldo em caderneta de poupança até o limite de <strong>40 salários mínimos</strong>;<br>• <strong>Bem de Família (Lei nº 8.009/90):</strong> O único imóvel residencial próprio do casal ou da entidade familiar é impenhorável e não responderá por qualquer dívida civil, comercial, fiscal ou previdenciária. <em>Exceções legais à impenhorabilidade:</em> cobrança de IPTU/taxas do próprio imóvel, condomínio propter rem, execução de fiança locatícia residencial e pensão alimentícia;<br>• <strong>Sociedade Limitada Unipessoal (SLU - Art. 1.052 CC):</strong> A responsabilidade da sociedade unipessoal limita-se ao capital integralizado, não alcançando bens particulares do titular sem desconsideração.',
                    exemplo: 'Juiz determina desbloqueio imediato de R$ 35.000,00 constritos em conta poupança de profissional autônomo por se tratar de valor resguardado pelo teto legal de 40 salários mínimos (Art. 833, X).'
                  },
                  {
                    id: 'pc-5-5',
                    titulo: 'Responsabilidade Secundária, Fraude de Execução e Incidente de Desconsideração',
                    fundamento: 'Arts. 790 a 796 e 133 a 137 do CPC/15 | Art. 50 do CC | Súmula 375 STJ',
                    conteudo: '<strong>Responsabilidade Executiva Secundária (Art. 790):</strong> A execução pode alcançar bens de pessoas que não constam originariamente no título executivo, nos casos autorizados em lei (sucessor singular de bem litigioso, bens do cônjuge ressalvada a meação, bens alienados em fraude de execução e bens dos sócios).<br><br>• <strong>Bens dos Sócios & Incidente de Desconsideração da Personalidade Jurídica (IDPJ - Arts. 133 a 137 CPC e Art. 50 CC):</strong> Para atingir bens particulares do sócio, exige-se a prévia instauração do IDPJ, com contraditório e comprovação de abuso de personalidade caracterizado por desvio de finalidade ou confusão patrimonial. Decidido por decisão interlocutória recorrível por agravo de instrumento;<br>• <strong>Fraude à Execução (Art. 792 CPC):</strong> Ocorre quando o devedor aliena ou onera bens na pendência de ação executiva com citação válida ou averbação premonitória (Art. 828), sendo a alienação capaz de reduzi-lo à insolvência. É <em>ato atentatório à dignidade da justiça</em> e a alienação é considerada <strong>ineficaz perante o credor</strong>, permitindo penhorar diretamente o bem com o terceiro;<br>• <strong>Fraude de Execução vs Fraude Contra Credores:</strong> A fraude contra credores ocorre antes do processo e depende de Ação Pauliana anulatória com prova de conluio (Art. 161 CC). A fraude à execução ocorre no curso do processo e é declarada nos próprios autos executivos;<br>• <strong>Súmula 375 do STJ:</strong> O reconhecimento da fraude à execução depende do registro da penhora do bem alienado ou da prova cabal da má-fé do terceiro adquirente.',
                    exemplo: 'Executado vende veículo para parente após citação válida e sem deixar outros bens: o negócio é declarado ineficaz nos próprios autos da execução por fraude à execução (Art. 792, IV), penhorando-se o veículo na posse do adquirente.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-6',
            nome: 'Título Executivo, Liquidação de Sentença & Cumprimento de Sentença',
            iconSvg: SVG.book,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 509 a 538 e 783 a 788 do Código de Processo Civil',
            subtitulo: 'Certeza, liquidez e exigibilidade, liquidação por arbitramento/procedimento comum, multa e honorários de 10% e impugnação.',
            resumo: 'Fase de cumprimento sincrético da sentença: requisitos do título judicial, incidente de liquidação, execução provisória, rito por quantia certa com multa e honorários do Art. 523, matérias da impugnação do Art. 525 e obrigações de fazer/astreintes.',
            pilares: [
              { t: 'Tríplice Requisito (Art. 783)', d: 'A obrigação deve ser certa (existência induvidosa), líquida (quantidade e objeto determinados) e exigível (inadimplemento sem termo/condição pendente).' },
              { t: 'Multa e Honorários (Art. 523, § 1º)', d: 'Não havendo pagamento voluntário em 15 dias úteis, o débito é acrescido de multa de 10% e de honorários advocatícios de 10% de forma cumulada!' },
              { t: 'Liquidação de Sentença (Art. 509)', d: 'Incidente processual interlocutório para apurar o valor devido por arbitramento (perícia) ou procedimento comum (fatos novos), vedado rediscutir a lide.' },
              { t: 'Impugnação do Art. 525', d: 'Defesa do devedor no prazo de 15 dias úteis subsequentes aos 15 dias de pagamento voluntário, com rol restrito de matérias e sem efeito suspensivo automático.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Títulos Executivos, Liquidação e Cumprimento Provisório',
                topicos: [
                  {
                    id: 'pc-6-1',
                    titulo: 'Requisitos da Obrigação Exeqüenda e Rol dos Títulos Judiciais e Extrajudiciais',
                    fundamento: 'Arts. 783 a 788, 515 e 784 do CPC/15',
                    conteudo: 'A execução forçada depende de título de obrigação certa, líquida e exigível (Art. 783). Carnelutti consagra a tríplice definição: certeza quanto à existência; liquidez quanto à determinação do objeto; exigibilidade quanto ao vencimento e inadimplemento.<br><br>• <strong>Função do Título:</strong> Autoriza o emprego da força estatal, define a prestação exata e fixa os limites da responsabilidade executiva;<br>• <strong>Títulos Executivos Judiciais (Art. 515):</strong> 1) Decisões proferidas no processo civil que reconheçam exigibilidade de obrigação; 2) Decisão homologatória de autocomposição judicial; 3) Sentença penal condenatória transitada em julgado; 4) Sentença arbitral; 5) Sentença estrangeira homologada pelo STJ; 6) Decisão homologatória de partilha ou adjudicação;<br>• <strong>Títulos Executivos Extrajudiciais (Art. 784):</strong> Títulos cambiais originais (letra de câmbio, nota promissória, duplicata, debênture e cheque); escritura pública ou documento particular assinado pelo devedor e por 2 testemunhas; instrumento de transação referendado pelo MP, Defensoria ou advogados; contrato garantido por hipoteca, penhor ou anticrese; certidão de dívida ativa (CDA); e créditos documentados de quotas condominiais.',
                    exemplo: 'Sentença arbitral condenatória possui a mesma eficácia de título executivo judicial (Art. 515, VII), executando-se via cumprimento de sentença no juízo cível comum.'
                  },
                  {
                    id: 'pc-6-2',
                    titulo: 'Liquidação de Sentença e Regime do Cumprimento Provisório',
                    fundamento: 'Arts. 509 a 522 do CPC/15',
                    conteudo: 'Quando a sentença judicial condenar ao pagamento de quantia ilíquida, procede-se à sua <strong>liquidação (Art. 509)</strong>. É incidente resolvido por decisão interlocutória, recorrível por Agravo de Instrumento (Art. 1.015, parágrafo único).<br><br>• <strong>Fidelidade ao Título (Art. 509, § 4º):</strong> Na liquidação é terminantemente vedado rediscutir a lide ou modificar a sentença transitada em julgado;<br>• <strong>Modalidades de Liquidação:</strong> 1) <em>Por Arbitramento (Art. 510):</em> Quando determinado na sentença ou exigido pela natureza do objeto (perícia técnica de engenharia, atuária, etc.); 2) <em>Pelo Procedimento Comum (Art. 511):</em> Quando houver necessidade de alegar e provar fato novo indispensável à apuração do valor devido;<br>• <strong>Mero Cálculo Aritmético (Art. 509, § 2º):</strong> Se a apuração depender apenas de cálculo matemático, o credor dispensa liquidação prévia e promove direto o cumprimento de sentença com memória discriminada (Art. 524);<br>• <strong>Cumprimento Provisório de Sentença (Arts. 520 a 522):</strong> Cabível em decisões pendentes de recurso sem efeito suspensivo. A responsabilidade do exequente é estritamente objetiva (se a decisão for reformada, restitui os autos ao estado anterior com efeito ex tunc). Exige prestação de <strong>caução idônea</strong> para levantamento de dinheiro em depósito ou atos que importem alienação de propriedade, ressalvadas as hipóteses de dispensa do Art. 521 (crédito alimentar até 60 salários mínimos ou tese pacificada em tribunal superior).',
                    exemplo: 'Sentença condena seguradora a pagar danos materiais a serem orçados na liquidação: realiza-se a liquidação pelo procedimento comum (Art. 511) com produção de notas fiscais comprobatórias dos consertos.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Cumprimento de Sentença por Quantia Certa e Obrigações de Fazer',
                topicos: [
                  {
                    id: 'pc-6-3',
                    titulo: 'Cumprimento de Sentença por Quantia Certa: Prazos, Multa de 10% e Honorários',
                    fundamento: 'Arts. 513 a 524 do CPC/15',
                    conteudo: 'Iniciado por simples petição do exequente instruída com demonstrativo discriminado e atualizado do cálculo (Art. 524).<br><br>• <strong>Intimação do Devedor (Art. 513, § 2º):</strong> Feita na pessoa do advogado constituído nos autos através de publicação no Diário da Justiça;<br>• <strong>Prazo de Pagamento Voluntário (Art. 523, caput):</strong> O devedor dispõe de <strong>15 dias úteis</strong> para pagar espontaneamente o débito;<br>• <strong>Consequências do Não Pagamento (Art. 523, § 1º):</strong> Escoado o prazo sem adimplemento, o débito é acrescido de <strong>multa de 10%</strong> e, também, de <strong>honorários de advogado de 10%</strong> (ambos cumulados de pleno direito);<br>• <strong>Pagamento Parcial (§ 2º):</strong> Se houver pagamento parcial, a multa de 10% e os honorários incidirão exclusivamente sobre o saldo remanescente não pago;<br>• <strong>Iniciativa do Devedor (Art. 526):</strong> O devedor pode comparecer em juízo antes de intimado, depositar o valor que entende correto e afastar a incidência de multa e honorários advocatícios.',
                    exemplo: 'Devedor intimado para pagar condenação de R$ 50.000,00 permanece inerte nos 15 dias: a dívida salta imediatamente para R$ 60.000,00 (acréscimo de R$ 5.000 de multa e R$ 5.000 de honorários executivos) e o juiz expede mandado de penhora.'
                  },
                  {
                    id: 'pc-6-4',
                    titulo: 'Impugnação ao Cumprimento de Sentença & Cumprimento de Fazer e Não Fazer',
                    fundamento: 'Arts. 525, 536 e 537 do CPC/15',
                    conteudo: '<strong>Impugnação ao Cumprimento de Sentença (Art. 525):</strong> Defesa incidental conferida ao executado.<br><br>• <strong>Prazo:</strong> 15 dias úteis, contados automaticamente a partir do término do prazo para pagamento voluntário, <em>independentemente de nova intimação e sem necessidade de garantia do juízo</em>;<br>• <strong>Rol Taxativo de Matérias (Art. 525, § 1º):</strong> I - Falta ou nulidade da citação se na fase de conhecimento houve revelia; II - Ilegitimidade de parte; III - Inexequibilidade do título ou inexigibilidade da obrigação; IV - Penhora incorreta ou avaliação errônea; V - Excesso de execução (o executado deve declarar imediatamente o valor que entende correto sob pena de rejeição liminar da alegação de excesso); VI - Incompetência absoluta ou relativa; VII - Causa extintiva da obrigação superveniente à sentença (pagamento, novação, transação);<br>• <strong>Efeito Suspensivo:</strong> Não possui efeito suspensivo como regra geral. Pode ser concedido pelo juiz se garantido o juízo com penhora ou caução e presentes a probabilidade do direito e perigo de dano irreparável (Art. 525, § 6º);<br>• <strong>Cumprimento de Fazer, Não Fazer e Dar (Arts. 536 e 537):</strong> O juiz aplicará medidas coercitivas, mandamentais e sub-rogatórias (como busca e apreensão, desocupação e força policial), destacando-se a cominação de <strong>astreintes (multa coercitiva diária)</strong> para compelir o réu ao cumprimento da tutela específica.',
                    exemplo: 'Operadora de telefonia que insiste em cobrança indevida já proibida por sentença judicial sofre incidência de multa diária de R$ 1.000,00 fixada pelo juiz com base no Art. 537 do CPC.'
                  }
                ]
              }
            ]
          },
          {
            id: 'proc-civ-mod-7',
            nome: 'Execução de Título Extrajudicial, Penhora, Expropriação e Embargos',
            iconSvg: SVG.scale,
            cor: 'var(--c-emerald)',
            corGlow: 'var(--c-emerald-glow)',
            artigos: 'Arts. 806 a 925 do Código de Processo Civil | Súmula 309 do STJ',
            subtitulo: 'Citação em 3 dias, arresto executivo, penhora e Sisbajud, leilão e preço vil, embargos do devedor e prisão por alimentos.',
            resumo: 'Roteiro de aula sobre o processo autônomo de execução: procedimento por quantia certa contra devedor solvente, ordem de penhora, avaliação e expropriação, embargos à execução com parcelamento do Art. 916 e rito coercitivo da prisão de alimentos.',
            pilares: [
              { t: 'Citação em 3 Dias (Art. 829)', d: 'O executado é citado para efetuar o pagamento em 3 dias úteis. Pagando integralmente, a verba honorária é reduzida pela metade (para 5% - Art. 827, § 1º).' },
              { t: 'Arresto Executivo (Art. 830)', d: 'Não encontrado o executado pelo oficial de justiça, este arrestará tantos bens quantos bastem (pré-penhora), buscando o réu por duas vezes para citação.' },
              { t: 'Adjudicação e Preço Vil', d: 'Adjudicação pelo credor é a via expropriatória prioritária (Art. 876). Em leilão judicial, é vedada a arrematação por preço vil (inferior a 50% da avaliação - Art. 891).' },
              { t: 'Prisão de Alimentos (Súmula 309)', d: 'Prisão civil em regime fechado de 1 a 3 meses pelo débito das 3 últimas parcelas alimentares anteriores ao ajuizamento e das vincendas (Art. 528, § 3º).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Rito por Quantia Certa, Penhora e Formas Expropriatórias',
                topicos: [
                  {
                    id: 'pc-7-1',
                    titulo: 'Execução por Quantia Certa, Citação em 3 Dias e Arresto Executivo',
                    fundamento: 'Arts. 824 a 830 do CPC/15',
                    conteudo: 'A execução por quantia certa contra devedor solvente tem como escopo expropriar bens para satisfazer o crédito (Art. 824).<br><br>• <strong>Petição Inicial:</strong> Instruída com o título executivo extrajudicial original e memória analítica e discriminada de cálculo (Art. 798);<br>• <strong>Citação e Honorários (Arts. 827 e 829):</strong> O juiz fixa de plano honorários advocatícios de 10% e o devedor é citado para cumprir a obrigação em <strong>3 dias úteis</strong>. Se o devedor efetuar o pagamento integral no tríduo, os honorários são reduzidos pela metade (para 5% - Art. 827, § 1º);<br>• <strong>Mandado Unificado de Penhora:</strong> Se não houver pagamento no 3º dia, o oficial de justiça procede incontinenti à penhora e à avaliação de tantos bens quantos bastem (Art. 829, § 1º);<br>• <strong>Arresto Executivo Pré-Penhora (Art. 830):</strong> Se o oficial de justiça não encontrar o executado para citá-lo pessoalmente, arrestar-lhe-á de imediato tantos bens quantos bastem para garantir a execução. Nos 10 dias seguintes, procurará o devedor por 2 vezes em dias distintos; se houver suspeita de ocultação, realiza a citação com hora certa, ou, frustrada, por edital.',
                    exemplo: 'Oficial de justiça não localiza empresário devedor de cheque mas constata a existência de maquinários em sua fábrica: realiza o arresto executivo dos equipamentos garantindo a dívida antes da citação por edital.'
                  },
                  {
                    id: 'pc-7-2',
                    titulo: 'A Penhora de Bens: Natureza, Averbação, Sisbajud e Ordem Preferencial',
                    fundamento: 'Arts. 831 a 854 do CPC/15',
                    conteudo: 'A penhora é o ato executivo de individualização, apreensão e custódia patrimonial que fixa a responsabilidade sobre bens específicos do devedor.<br><br>• <strong>Funções da Penhora:</strong> Individualizar os bens, conservá-los e gerar o <strong>direito de preferência processual</strong> para o exequente que primeiro penhorou (Art. 797 - anterioridade da constrição);<br>• <strong>Averbação no Registro Público (Art. 844):</strong> Para gerar presunção absoluta de conhecimento perante terceiros (efeito erga omnes), a penhora de imóveis deve ser averbada no Cartório de Registro de Imóveis e a de veículos no Renajud;<br>• <strong>Ordem Legal Preferencial de Penhora (Art. 835):</strong> 1º Dinheiro em espécie ou em depósito bancário/aplicação financeira; 2º Títulos da dívida pública; 3º Títulos mobiliários com cotação em bolsa; 4º Veículos terrestres; 5º Bens imóveis; 6º Bens móveis; 7º Semoventes; 8º Navios e aeronaves; 9º Ações e quotas de sociedades; 10º Percentual de faturamento de empresa;<br>• <strong>Penhora Eletrônica de Dinheiro (Sisbajud - Art. 854):</strong> Realizada por determinação judicial eletrônica indisponibilizando ativos financeiros até o montante da dívida. O devedor é intimado para comprovar em 5 dias se as quantias são impenhoráveis ou excedentes.',
                    exemplo: 'Credor requer constrição via Sisbajud; o sistema localiza saldo em conta corrente e bloqueia o montante exato, conferindo preferência creditícia ao exequente sobre demais credores quirografários.'
                  },
                  {
                    id: 'pc-7-3',
                    titulo: 'Depósito, Avaliação e Formas Expropriatórias: Adjudicação, Alienação Privada e Leilão',
                    fundamento: 'Arts. 839 a 903 do CPC/15',
                    conteudo: 'A penhora aperfeiçoa-se com a lavratura do respectivo auto e o <strong>depósito</strong> dos bens (Art. 839). O depositário judicial assume o dever de custódia e restituição sob pena de responsabilidade civil e perda de remuneração.<br><br>• <strong>Avaliação dos Bens (Art. 870):</strong> Efetuada pelo oficial de justiça no próprio auto de penhora; se exigir conhecimentos específicos de engenharia ou agronomia, o juiz nomeará perito avaliador;<br>• <strong>Três Formas Legais de Expropriação (Art. 825):</strong><br>1) <em>Adjudicação (Art. 876 - Forma Preferencial):</em> O próprio exequente opta por receber o bem penhorado pelo valor da avaliação para extinção ou amortização de seu crédito;<br>2) <em>Alienação por Iniciativa Particular (Art. 880):</em> Venda promovida diretamente pelo exequente ou por corretor credenciado em juízo, sob condições e preço mínimo estabelecidos pelo magistrado;<br>3) <em>Leilão Judicial (Arts. 881 a 903):</em> Presencial ou eletrônico conduzido por leiloeiro público. No primeiro leilão o bem só pode ser vendido por valor igual ou superior ao da avaliação; no segundo leilão aceita-se lance inferior, desde que não configure <strong>preço vil (Art. 891)</strong>. Considera-se preço vil o lance inferior a 50% do valor da avaliação judicial quando inexistir patamar mínimo fixado pelo juiz;<br>• <strong>Perfeição da Arrematação (Art. 903):</strong> Assinado o auto pelo juiz, leiloeiro e arrematante, a arrematação considera-se perfeita, acabada e irretratável.',
                    exemplo: 'Imóvel avaliado em R$ 800.000,00 recebe lance de R$ 450.000,00 em 2º leilão judicial: arrematação válida, pois atingiu mais de 50% da avaliação e não configura preço vil.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Impugnações, Outras Execuções e Embargos do Devedor',
                topicos: [
                  {
                    id: 'pc-7-4',
                    titulo: 'Impugnações Expropriatórias, Execução de Coisa e Obrigações de Fazer e Não Fazer',
                    fundamento: 'Arts. 903 e Arts. 806 a 823 do CPC/15',
                    conteudo: '<strong>Impugnação aos Atos Expropriatórios (Art. 903, §§ 1º e 4º):</strong><br>• No prazo de <strong>10 dias</strong> após o aperfeiçoamento da arrematação, o devedor ou interessado pode impugnar nos próprios autos alegando nulidade, preço vil ou defeito formal;<br>• <em>Ação Anulatória Autônoma (Art. 903, § 4º):</em> Expedida a carta de arrematação ou ordem de entrega, a arrematação não mais se desfaz nos próprios autos, exigindo ação autônoma pela qual o arrematante de boa-fé responde apenas por perdas e danos;<br><br><strong>Execução para Entrega de Coisa (Arts. 806 a 813):</strong><br>• <em>Coisa Certa (Art. 806):</em> Citação do executado para entregar o bem no prazo de 15 dias, sob pena de expedição de mandado de busca e apreensão (móveis) ou imissão na posse (imóveis);<br>• <em>Coisa Incerta (Arts. 811 a 813):</em> Quando a obrigação for determinada pelo gênero e quantidade, cabendo a concentração ao devedor ou credor conforme estipulado no título;<br><br><strong>Execução de Obrigação de Fazer e Não Fazer (Arts. 814 a 823):</strong> O juiz assinalará prazo razoável para cumprimento sob cominação de astreintes diárias. Se o fato puder ser prestado por terceiro (obrigação fungível), o exequente poderá requerer que terceiro realize a expensas do executado ou converter em perdas e danos.',
                    exemplo: 'Construtora não entrega as chaves de apartamento prometido em compromisso de compra e venda: credor promove execução para entrega de coisa certa com mandado de imissão na posse e multa cominatória.'
                  },
                  {
                    id: 'pc-7-5',
                    titulo: 'Embargos à Execução: Prazos, Efeito Suspensivo e Parcelamento Legal (Art. 916)',
                    fundamento: 'Arts. 914 a 920 e Art. 916 do CPC/15',
                    conteudo: 'Os <strong>Embargos à Execução</strong> configuram verdadeira ação de conhecimento incidental autônoma, de natureza constitutiva ou desconstitutiva, distribuída por dependência para impugnar o título extrajudicial.<br><br>• <strong>Prazo:</strong> 15 dias úteis, contados da juntada aos autos do mandado de citação cumprido (Art. 915);<br>• <strong>Desnecessidade de Garantia do Juízo (Art. 914):</strong> O executado pode opor embargos independentemente de penhora, depósito ou caução prévia;<br>• <strong>Efeito Suspensivo Opcional (Art. 919, § 1º):</strong> A oposição de embargos não suspende a execução por regra geral. O juiz poderá conceder efeito suspensivo se cumulados: 1) Garantia prévia do juízo por penhora/caução; 2) Probabilidade do direito invocado (fumus boni iuris); e 3) Perigo de dano irreparável ou de difícil reparação;<br>• <strong>Parcelamento Legal da Dívida (Art. 916):</strong> No prazo para embargar (15 dias), reconhecendo o crédito do exequente e comprovando o depósito prévio de <strong>30% do valor total da execução</strong> (incluindo custas e honorários), o executado tem o direito potestativo de parcelar o saldo remanescente em até <strong>6 parcelas mensais</strong>, acrescidas de correção monetária e juros de 1% ao mês. <em>Atenção:</em> O parcelamento do Art. 916 aplica-se exclusivamente a títulos extrajudiciais, sendo expressamente vedado no cumprimento de sentença (§ 7º).',
                    exemplo: 'Executado por nota promissória deposita 30% do valor executado no 12º dia do prazo e requer o parcelamento do saldo restante em 6 vezes: o juiz defere a moratória legal independentemente da concordância do credor (Art. 916).'
                  },
                  {
                    id: 'pc-7-6',
                    titulo: 'Execução de Alimentos: Rito da Prisão Civil (Súmula 309 STJ) vs Rito da Penhora',
                    fundamento: 'Arts. 528 a 533 e Arts. 911 a 913 do CPC/15 | Súmula 309 do STJ',
                    conteudo: 'A cobrança judicial de pensão alimentícia admite dois procedimentos executivos inconfundíveis:<br><br>1. <strong>Rito da Prisão Civil Coercitiva (Art. 528, §§ 1º a 7º):</strong><br>• O devedor é intimado pessoalmente para, em <strong>3 dias</strong>, pagar o débito alimentar, provar que o fez ou justificar a impossibilidade absoluta de efetuar o pagamento;<br>• Se não pagar nem justificar, o juiz decretará a <strong>prisão civil pelo prazo de 1 a 3 meses</strong> em regime fechado, separado dos presos comuns, além de protestar a decisão judicial;<br>• <strong>Súmula 309 do STJ:</strong> <em>\"O débito alimentar que autoriza a prisão civil do alimentante é o que compreende até as 3 prestações anteriores ao ajuizamento da execução e as que se vencerem no curso do processo.\"</em> A prisão civil não quita nem extingue a dívida alimentar;<br><br>2. <strong>Rito da Expropriação Patrimonial / Penhora (Art. 528, § 8º e Art. 913):</strong><br>• Utilizado para a cobrança das dívidas alimentares pretéritas (vencidas há mais de 3 meses da data da propositura da ação) ou quando o credor optar por dispensar a prisão;<br>• Segue as regras gerais de penhora de bens, admitindo inclusive <strong>desconto em folha de pagamento de até 50% dos vencimentos líquidos</strong> do alimentante (Art. 529, § 3º).',
                    exemplo: 'Pai deve pensão referente aos últimos 2 meses e a todas as parcelas que forem vencendo no curso da lide: o rito adequado e célere é o da prisão civil de até 3 meses em regime fechado (Art. 528, § 3º e Súmula 309/STJ).'
                  }
                ]
              }
            ]
          }
        ]
      },

      'trabalho': {
        id: 'trabalho',
        nome: 'Direito do Trabalho',
        subtitulo: 'Consolidação das Leis do Trabalho (Decreto-Lei nº 5.452/1943) & Reforma Trabalhista',
        artigos: 'Arts. 1º a 922 da CLT | CF/88 Art. 7º',
        cor: 'var(--c-amber)',
        corGlow: 'var(--c-amber-glow)',
        iconSvg: SVG.briefcase,
        descricao: 'Relação de emprego e requisitos fáticos, terceirização, jornada de trabalho, horas extras, remuneração, rescisão contratual e estabilidades provisórias.',
        modulos: [
          {
            id: 'trab-mod-1',
            nome: 'Relação de Emprego & Sujeitos Contratuais',
            iconSvg: SVG.briefcase,
            cor: 'var(--c-amber)',
            corGlow: 'var(--c-amber-glow)',
            artigos: 'Arts. 2º, 3º e 442 a 456 da CLT | CF/88 Art. 7º',
            subtitulo: 'Elementos caracterizadores do vínculo, grupo econômico, terceirização e alteração contratual.',
            resumo: 'Requisitos fático-jurídicos da relação de emprego (Mnemônico SHOPP), responsabilidade solidária de grupo econômico e terceirização lícita irrestrita.',
            pilares: [
              { t: 'Mnemônico SHOPP (Art. 3º CLT)', d: 'Subordinação jurídica, Habitualidade (não eventualidade), Onerosidade, Pessoa física e Pessoalidade.' },
              { t: 'Grupo Econômico (Art. 2º, § 2º CLT)', d: 'Configurado por grupo de empresas sob mesma direção ou mera coordenação e interesse integrado, com responsabilidade solidária.' },
              { t: 'Terceirização Ampla (Tema 725 STF)', d: 'É lícita a terceirização em qualquer atividade da empresa (meio ou fim); a tomadora responde subsidiariamente (Súmula 331 TST).' },
              { t: 'Princípio da Inalterabilidade Lesiva', d: 'Art. 468 CLT: Qualquer alteração nas condições do contrato só é lícita por mútuo consentimento e desde que não cause prejuízos ao empregado.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Vínculo e Terceirização',
                topicos: [
                  {
                    id: 'tr-1-1',
                    titulo: 'Requisitos Cumulativos da Relação de Emprego',
                    fundamento: 'Arts. 2º e 3º da CLT',
                    conteudo: 'A existência de relação de emprego depende da presença concomitante de: a) Pessoa física; b) Pessoalidade (infungibilidade do trabalhador); c) Habitualidade (trabalho contínuo); d) Onerosidade (contraprestação financeira); e) Subordinação jurídica (sujeição ao poder diretivo do empregador). A ausência de qualquer elemento descaracteriza o vínculo.',
                    exemplo: 'Trabalhador que comparece 1 vez por semana sem exclusividade e pode enviar outra pessoa em seu lugar quando não puder ir: não há vínculo empregatício por falta de habitualidade e pessoalidade.'
                  },
                  {
                    id: 'tr-1-2',
                    titulo: 'Terceirização de Serviços & Responsabilidade Subsidiária',
                    fundamento: 'Lei nº 13.429/2017 | Súmula 331 do TST | Tema 725 STF',
                    conteudo: 'Após o STF e a Lei 13.429/17, é permitida a terceirização de quaisquer atividades da empresa contratante, inclusive atividade-fim. A empresa tomadora dos serviços responde subsidiariamente pelo inadimplemento das obrigações trabalhistas decorrentes da terceirização, desde que tenha participado da relação processual.',
                    exemplo: 'Escola privada terceiriza contratação de professores; se a empresa terceirizada não pagar salários e rescisões, a escola responde subsidiariamente por todos os débitos.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Contratos e Alterações',
                topicos: [
                  {
                    id: 'tr-1-3',
                    titulo: 'Contrato de Experiência & Prazo Determinado',
                    fundamento: 'Arts. 443 e 445 da CLT',
                    conteudo: 'O contrato de trabalho por prazo determinado não pode estipular-se por mais de 2 anos (Art. 445). O contrato de experiência é espécie de contrato por prazo determinado cujo limite máximo improrrogável é de 90 dias corridos, admitida uma única prorrogação dentro desse prazo.',
                    exemplo: 'Contrato de experiência firmado inicialmente por 45 dias prorrogado validamente por mais 45 dias: soma exata de 90 dias legais.'
                  },
                    {
                      id: 'tr-1-4',
                      titulo: 'Proteção Antidiscriminatória, Inclusão de PcD, Idosos e Cotas de Aprendizagem',
                      fundamento: 'Leis nº 9.029/95, 8.213/91, 10.741/2003 | CLT Arts. 428 a 433',
                      conteudo: 'Estatuto de proteção contra práticas discriminatórias e de fomento à inclusão socioeconômica no ambiente de trabalho:<br><br>• <strong>Lei nº 9.029/1995 (Vedação a Práticas Discriminatórias):</strong> É proibida a exigência de teste, exame ou atestado de gravidez e esterilização admissional ou periódico. Constitui crime (detenção de 1 a 2 anos e multa) e multa administrativa de 10 vezes o maior salário. O rompimento do contrato de trabalho por ato discriminatório faculta ao empregado optar entre a <em>reintegração com ressarcimento integral</em> de todo o período ou a <em>percepção em dobro da remuneração</em> do período de afastamento com correção e juros (Art. 4º);<br>• <strong>Cotas de Emprego para Pessoas com Deficiência (Art. 93 da Lei nº 8.213/1991):</strong> As empresas com 100 ou mais empregados são legalmente obrigadas a preencher de 2% a 5% dos seus cargos com beneficiários reabilitados da Previdência Social ou pessoas com deficiência (até 200 emp.: 2%; 201 a 500: 3%; 501 a 1000: 4%; de 1001 em diante: 5%);<br>• <strong>Estatuto da Pessoa Idosa (Lei nº 10.741/2003, Arts. 26 a 28):</strong> Veda fixação de limite máximo de idade na contratação ou concursos (salvo quando a natureza do cargo o exigir) e impõe programas de preparação para a aposentadoria com 1 ano de antecedência;<br>• <strong>Contrato Especial de Aprendizagem (CLT Arts. 428 a 433):</strong> Contrato solene por escrito para jovens de 14 a 24 anos (sem limite de idade para PcD), com limite de 2 anos (salvo PcD), exigindo anotação em CTPS, garantia de salário mínimo-hora e cota compulsória nas empresas entre <strong>5% e 15%</strong> dos trabalhadores cujas funções demandem formação profissional (Art. 429 CLT).',
                      exemplo: 'Empregada dispensada discriminatoriamente após a empresa tomar conhecimento de sua gravidez pode ingressar com ação trabalhista requerendo o pagamento dobrado de todas as remunerações com base no Art. 4º, II da Lei nº 9.029/95 além de indenização por danos morais.'
                    }
                ]
              }
            ]
          },
          {
            id: 'trab-mod-2',
            nome: 'Jornada de Trabalho, Descanso & Teletrabalho',
            iconSvg: SVG.calendar,
            cor: 'var(--c-amber)',
            corGlow: 'var(--c-amber-glow)',
            artigos: 'Arts. 58 a 75 e Arts. 75-A a 75-F da CLT | CF/88 Art. 7º',
            subtitulo: 'Duração da jornada, horas extras, banco de horas, intervalos intra/interjornada e home office.',
            resumo: 'Limites constitucionais da jornada, adicional extraordinário e noturno, intervalos para refeição e descanso, e regras do teletrabalho pós-reforma.',
            pilares: [
              { t: 'Limites Constitucionais', d: 'Jornada padrão de 8 horas diárias e 44 horas semanais (Art. 7º, XIII da CF/88).' },
              { t: 'Horas Extras', d: 'Adicional constitucional mínimo de 50% sobre o valor da hora normal (Art. 7º, XVI da CF).' },
              { t: 'Intervalo Intrajornada (Art. 71)', d: 'Mínimo de 1 hora para jornadas superiores a 6 horas; sua supressão parcial gera indenização restrita ao tempo suprimido com adicional de 50%.' },
              { t: 'Intervalo Interjornada (Art. 66)', d: 'Entre duas jornadas de trabalho haverá um período mínimo de 11 horas consecutivas de descanso obrigatório.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Horas Extras e Compensação',
                topicos: [
                  {
                    id: 'tr-2-1',
                    titulo: 'Regime Ordinário, Horas Extras e Banco de Horas',
                    fundamento: 'Arts. 58 e 59 da CLT',
                    conteudo: 'A duração diária pode ser acrescida de até 2 horas suplementares mediante acordo individual escrito ou negociação coletiva. O banco de horas pode ser pactuado por acordo individual se compensado em até 6 meses (Art. 59, § 5º), ou por convenção coletiva se compensado no prazo de até 1 ano.',
                    exemplo: 'Empregado que realiza 1 hora extra por dia tem direito ao recebimento com adicional de 50%, ou à compensação de folga no prazo pactuado em banco de horas.'
                  },
                  {
                    id: 'tr-2-2',
                    titulo: 'Trabalho Noturno Urbano e Rural',
                    fundamento: 'Art. 73 da CLT | CF/88 Art. 7º, IX',
                    conteudo: 'Trabalho noturno urbano: compreendido entre as 22h de um dia e as 5h do dia seguinte. A hora noturna urbana é ficta/reduzida de 52 minutos e 30 segundos. Adicional noturno urbano: mínimo de 20% sobre a hora diurna. Trabalho rural: na lavoura (21h às 5h) e na pecuária (20h às 4h), com adicional de 25% sem hora reduzida.',
                    exemplo: 'Vigilante noturno cumpre expediente das 22h às 5h: recebe adicional de 20% e tem computadas 8 horas de trabalho efetivo pelas frações da hora reduzida ficta.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Intervalos e Teletrabalho',
                topicos: [
                  {
                    id: 'tr-2-3',
                    titulo: 'Intervalo Intrajornada e Natureza Indenizatória',
                    fundamento: 'Art. 71, § 4º da CLT | Reforma Trabalhista',
                    conteudo: 'Para qualquer trabalho contínuo cuja duração exceda de 6 horas, é obrigatória a concessão de um intervalo para repouso ou alimentação de, no mínimo, 1 hora (podendo ser reduzido para 30 minutos por acordo coletivo). A não concessão ou concessão parcial implica o pagamento APENAS do período suprimido com adicional de 50% de natureza indenizatória.',
                    exemplo: 'Empregado teve apenas 40 minutos de almoço: o empregador deve pagar 20 minutos faltantes com adicional de 50%, sem reflexos em outras verbas por ser verba indenizatória.'
                  },
                  {
                    id: 'tr-2-4',
                    titulo: 'Regime de Teletrabalho (Home Office)',
                    fundamento: 'Arts. 75-A a 75-F da CLT | Lei 14.442/22',
                    conteudo: 'A prestação de serviços na modalidade de teletrabalho deverá constar expressamente do contrato individual de trabalho. A alteração do presencial para teletrabalho exige mútuo acordo; a alteração do teletrabalho para o presencial pode ser determinada unilateralmente pelo empregador, com prazo de transição de 15 dias.',
                    exemplo: 'Empresa determina retorno dos empregados de home office ao trabalho presencial concedendo aviso prévio de 15 dias: alteração lícita expressamente prevista na CLT.'
                  }
                ]
              }
            ]
          },
          {
            id: 'trab-mod-3',
            nome: 'Salário, Remuneração & Adicionais Trabalhistas',
            iconSvg: SVG.star,
            cor: 'var(--c-amber)',
            corGlow: 'var(--c-amber-glow)',
            artigos: 'Arts. 457 a 467 da CLT',
            subtitulo: 'Diferença entre salário e remuneração, parcelas indenizatórias, equiparação salarial, insalubridade e periculosidade.',
            resumo: 'Composição salarial pós-reforma trabalhista, verbas não salariais (prêmios e diárias), requisitos da equiparação salarial e adicionais legais.',
            pilares: [
              { t: 'Remuneração = Salário + Gorjetas', d: 'Art. 457: Compreendem-se na remuneração o salário devido pelo empregador mais as gorjetas e comissões pagas por terceiros.' },
              { t: 'Parcelas Não Salariais (Art. 457, § 2º)', d: 'Diárias de viagem, auxílio-alimentação (vedado em dinheiro), prêmios e abonos NÃO integram a remuneração nem sofrem encargos trabalhistas.' },
              { t: 'Equiparação Salarial (Art. 461)', d: 'Mesma função, trabalho de igual valor, mesmo estabelecimento e tempo na função inferior a 2 anos e na empresa inferior a 4 anos.' },
              { t: 'Insalubridade vs Periculosidade', d: 'Insalubridade: 10%, 20% ou 40% do salário mínimo; Periculosidade: 30% do salário base do empregado (vedada a cumulação).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Parcelas Salariais e Equiparação',
                topicos: [
                  {
                    id: 'tr-3-1',
                    titulo: 'Natureza Salarial vs Indenizatória Pós-Reforma',
                    fundamento: 'Art. 457, §§ 1º e 2º da CLT',
                    conteudo: 'Integram o salário a importância fixa estipulada, as gratificações legais e de função e as comissões. As importâncias pagas a título de ajuda de custo, auxílio-alimentação (vedado em dinheiro), diárias para viagem e prêmios NÃO integram a remuneração, não se incorporam ao contrato e não constituem base de incidência de FGTS e INSS.',
                    exemplo: 'Empresa premia por desempenho extraordinário com bônus de R$ 5.000 no mês: verba não sofre reflexos em férias, 13º salário ou recolhimento previdenciário.'
                  },
                  {
                    id: 'tr-3-2',
                    titulo: 'Requisitos da Equiparação Salarial (Art. 461)',
                    fundamento: 'Art. 461 da CLT | Súmula 6 do TST',
                    conteudo: 'Sendo idêntica a função, a todo trabalho de igual valor, prestado ao mesmo empregador, no MESMO ESTABELECIMENTO empresarial, corresponderá igual salário. Trabalho de igual valor é o prestado com igual produtividade e perfeição técnica, entre pessoas cuja diferença de tempo de serviço para o mesmo empregador não seja superior a 4 anos, e na função não seja superior a 2 anos.',
                    exemplo: 'Dois analistas desempenham idêntica função no mesmo setor: o paradigma foi contratado há 1 ano e o paragonado há 6 meses: preenchidos os requisitos para equiparação salarial.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Adicionais de Insalubridade e Periculosidade',
                topicos: [
                  {
                    id: 'tr-3-3',
                    titulo: 'Adicional de Insalubridade & Súmula Vinculante 4',
                    fundamento: 'Arts. 189 a 192 da CLT | Súmula Vinculante 4 STF',
                    conteudo: 'O trabalho em condições insalubres assegura ao empregado um adicional de 40% (grau máximo), 20% (grau médio) e 10% (grau mínimo). A Súmula Vinculante 4 do STF veda o salário mínimo como indexador, mas determina que ele continuará sendo a base de cálculo da insalubridade até que lei nova venha disciplinar a matéria.',
                    exemplo: 'Trabalhador de laboratório em contato permanente com agentes biológicos infecciosos recebe adicional de insalubridade em grau máximo (40% do salário mínimo).'
                  },
                  {
                    id: 'tr-3-4',
                    titulo: 'Adicional de Periculosidade',
                    fundamento: 'Art. 193 da CLT | Súmula 191 do TST',
                    conteudo: 'São perigosas as atividades com explosivos, inflamáveis, energia elétrica, segurança patrimonial/pessoal ou com uso de motocicleta. O adicional de periculosidade é fixo em 30% e incide sobre o SALÁRIO BASE do empregado, sem os acréscimos de gratificações, prêmios ou participações nos lucros.',
                    exemplo: 'Motoboy entregador contratado com salário base de R$ 2.000: tem direito legal ao adicional de periculosidade de 30% (R$ 600,00).'
                  }
                ]
              }
            ]
          },
          {
            id: 'trab-mod-4',
            nome: 'Extinção Contratual & Estabilidades Provisórias',
            iconSvg: SVG.scale,
            cor: 'var(--c-amber)',
            corGlow: 'var(--c-amber-glow)',
            artigos: 'Arts. 477 a 500 da CLT | CF/88 Art. 10, II do ADCT',
            subtitulo: 'Justa causa, rescisão indireta, distrato consensual, prazos rescisórios e estabilidade gestante/acidentária.',
            resumo: 'Faltas graves do empregado (Art. 482) e do empregador (Art. 483), prazo único de 10 dias de rescisão e regras de garantia provisória de emprego.',
            pilares: [
              { t: 'Prazo Único Rescisório (Art. 477, § 6º)', d: 'O pagamento de todas as verbas rescisórias deve ser efetuado em até 10 dias corridos contados do término do contrato, sob pena de multa de 1 salário.' },
              { t: 'Rescisão por Acordo (Art. 484-A CLT)', d: 'Pela Reforma Trabalhista: metade do aviso prévio indenizado, 20% da multa do FGTS e saque de 80% do FGTS (sem direito a seguro-desemprego).' },
              { t: 'Estabilidade da Gestante', d: 'Desde a confirmação da concepção até 5 meses após o parto (Art. 10, II, "b" ADCT e Súmula 244 TST), mesmo em contrato temporário.' },
              { t: 'Estabilidade Acidentária', d: 'Garantia de 12 meses após a cessação do auxílio-doença acidentário (B91) perante a Previdência Social (Art. 118 Lei 8.213/91).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Modalidades de Rescisão',
                topicos: [
                  {
                    id: 'tr-4-1',
                    titulo: 'Dispensa por Justa Causa do Empregado (Art. 482 CLT)',
                    fundamento: 'Art. 482 da CLT',
                    conteudo: 'Constituem justa causa para rescisão pelo empregador: improbidade (furto, fraude), incontinência de conduta ou mau procedimento, negociação habitual concorrente, condenação criminal definitiva sem sursis, desídia no desempenho das funções (desleixo habitual), embriaguez habitual ou em serviço, insubordinação ou indisciplina e abandono de emprego (30 dias).',
                    exemplo: 'Empregado que furta mercadorias da empresa é demitido por justa causa por ato de improbidade: perde aviso prévio, 13º e férias proporcionais e multa de 40% do FGTS.'
                  },
                  {
                    id: 'tr-4-2',
                    titulo: 'Rescisão Indireta (A "Justa Causa" do Empregador)',
                    fundamento: 'Art. 483 da CLT',
                    conteudo: 'O empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando: forem exigidos serviços superiores às suas forças ou alheios ao contrato, for tratado pelo empregador com rigor excessivo, correr perigo manifesto de dano grave, ou não cumprir o empregador as obrigações do contrato (como atraso reiterado de salários ou não recolhimento do FGTS).',
                    exemplo: 'Empresa deixa de depositar o FGTS por mais de 12 meses: autorizada a rescisão indireta com saque de todas as verbas rescisórias e multa de 40%.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Estabilidades Provisórias',
                topicos: [
                  {
                    id: 'tr-4-3',
                    titulo: 'Estabilidade da Gestante e Súmula 244 do TST',
                    fundamento: 'Art. 10, II, "b" do ADCT | Súmula 244 do TST',
                    conteudo: 'A estabilidade da gestante é de responsabilidade OBJETIVA do empregador: basta que a concepção tenha ocorrido na vigência do contrato, sendo irrelevante o desconhecimento da gravidez pelo empregador ou até pela própria empregada no momento da dispensa. Abrange aviso prévio trabalhado e indenizado e contratos de experiência.',
                    exemplo: 'Empregada é dispensada sem saber que estava grávida de 3 semanas; confirma a gravidez após o aviso: tem direito à reintegração imediata ou indenização substitutiva de todo o período.'
                  },
                  {
                    id: 'tr-4-4',
                    titulo: 'Estabilidade Acidentária & Dirigente Sindical',
                    fundamento: 'Art. 118 da Lei 8.213/91 | Art. 543 da CLT',
                    conteudo: 'O segurado que sofreu acidente do trabalho tem garantida a manutenção do seu contrato na empresa pelo prazo mínimo de 12 meses após a cessação do auxílio-doença acidentário (afastamento superior a 15 dias com percepção de B91). O dirigente sindical tem estabilidade desde o registro da candidatura até 1 ano após o mandato (limitado a 7 dirigentes e 7 suplentes).',
                    exemplo: 'Operário sofre fratura na fábrica, fica afastado pelo INSS por 3 meses e recebe alta previdenciária: possui 12 meses de estabilidade no emprego a contar do retorno.'
                  }
                ]
              }
            ]
          }
        ]
      },

      'empresarial': {
        id: 'empresarial',
        nome: 'Direito Empresarial',
        subtitulo: 'Direito Societário, Títulos de Crédito, Recuperação de Empresas & Falência',
        artigos: 'CC Arts. 966 a 1.195 | Leis nº 6.404/76 e 11.101/05 (Reforma da Lei nº 14.112/20)',
        cor: 'var(--c-teal)',
        corGlow: 'var(--c-teal-glow)',
        iconSvg: SVG.shield,
        descricao: 'Teoria da empresa, sociedades limitadas e anônimas, títulos cambiais, Recuperação Judicial, Extrajudicial e Falência completa com a reforma da Lei nº 14.112/2020.',
        modulos: [
          {
            id: 'emp-mod-1',
            nome: 'Teoria da Empresa & Estabelecimento Comercial',
            iconSvg: SVG.shield,
            cor: 'var(--c-teal)',
            corGlow: 'var(--c-teal-glow)',
            artigos: 'Arts. 966 a 1.149 do Código Civil',
            subtitulo: 'Conceito legal de empresário, elemento de empresa, registro, estabelecimento e contrato de trespasse.',
            resumo: 'Critérios de caracterização da atividade empresarial, exclusão dos profissionais liberais, bens do estabelecimento e eficácia perante credores na venda do estabelecimento.',
            pilares: [
              { t: 'Conceito de Empresário (Art. 966 CC)', d: 'Quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços.' },
              { t: 'Profissional Intelectual', d: 'Art. 966, parágrafo único: Médicos, advogados, escritores e artistas NÃO são empresários, salvo se o exercício da profissão constituir elemento de empresa.' },
              { t: 'Estabelecimento Comercial (Art. 1.142)', d: 'Complexo de bens corpóreos e incorpóreos organizado para o exercício da empresa por empresário ou sociedade empresária.' },
              { t: 'Contrato de Trespasse (Art. 1.144)', d: 'Alienação do estabelecimento: o alienante responde solidariamente pelas dívidas anteriores regularmente contabilizadas pelo prazo de 1 ano.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Caracterização e Capacidade Empresarial',
                topicos: [
                  {
                    id: 'emp-1-1',
                    titulo: 'Requisitos da Atividade Empresarial e Elemento de Empresa',
                    fundamento: 'Art. 966 e Parágrafo Único do CC',
                    conteudo: 'Para ser empresário é necessária a união de 4 fatores de produção: capital, mão de obra, matéria-prima e tecnologia. Os profissionais intelectuais, de natureza científica, literária ou artística, não são considerados empresários, a não ser que a organização dos fatores suplante a atuação pessoal (elemento de empresa).',
                    exemplo: 'Médico que atende em consultório particular é profissional liberal autônomo; quando abre clínica com 20 médicos contratados, centro cirúrgico e hotelaria hospitalar, adquire elemento de empresa.'
                  },
                  {
                    id: 'emp-1-2',
                    titulo: 'Registro na Junta Comercial & Empresário Rural',
                    fundamento: 'Arts. 967 a 971 do Código Civil',
                    conteudo: 'A inscrição do empresário na Junta Comercial é obrigatória antes do início de sua atividade, possuindo eficácia meramente DECLARATÓRIA (a condição de empresário decorre do exercício fático da atividade econômica organizada). Para o produtor rural, a inscrição é facultativa, mas ao se inscrever adquire o regime jurídico empresarial.',
                    exemplo: 'Comerciante que inicia vendas sem registro formal na Junta responde com seu patrimônio pessoal e é considerado empresário irregular.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Estabelecimento e Trespasse',
                topicos: [
                  {
                    id: 'emp-1-3',
                    titulo: 'Contrato de Trespasse e Proteção aos Credores',
                    fundamento: 'Arts. 1.144 a 1.146 do Código Civil',
                    conteudo: 'O trespasse é a venda ou cessão do estabelecimento empresarial como universalidade de fato. O contrato só produz efeitos perante terceiros após averbação na Junta Comercial e publicação na imprensa oficial. Se não restarem bens suficientes para saldar as dívidas, o trespasse depende da anuência expressa ou tácita (em 30 dias) de todos os credores.',
                    exemplo: 'Dono de restaurante vende o estabelecimento sem notificar os credores e fica insolvente: a venda é ineficaz perante a massa de credores e pode ensejar pedido de falência.'
                  },
                  {
                    id: 'emp-1-4',
                    titulo: 'Cláusula de Não Concorrência no Trespasse',
                    fundamento: 'Art. 1.147 do Código Civil',
                    conteudo: 'Não havendo autorização expressa no contrato, o alienante NÃO PODE fazer concorrência ao adquirente nos cinco anos subsequentes à transferência do estabelecimento. No caso de arrendamento ou usufruto do estabelecimento, a proibição de concorrência persistirá durante todo o prazo do contrato.',
                    exemplo: 'Antigo proprietário de padaria vendida abre outro estabelecimento no quarteirão ao lado 6 meses após a venda: violação do dever legal de não concorrência.'
                  }
                ]
              }
            ]
          },
          {
            id: 'emp-mod-2',
            nome: 'Direito Societário: Sociedades Limitadas & S.A.',
            iconSvg: SVG.layers,
            cor: 'var(--c-teal)',
            corGlow: 'var(--c-teal-glow)',
            artigos: 'Arts. 981 a 1.087 do CC | Lei nº 6.404/1976 (Lei das S.A.)',
            subtitulo: 'Sociedade Limitada (LTDA), Sociedade Limitada Unipessoal (SLU), quotas sociais, ações e governança na S.A.',
            resumo: 'Regras da responsabilidade dos sócios, integralização de capital social, dissolução parcial e estrutura dos órgãos de deliberação e fiscalização nas S.A.',
            pilares: [
              { t: 'Sociedade Limitada (LTDA)', d: 'A responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem SOLIDARIAMENTE pela integralização do capital social (Art. 1.052 CC).' },
              { t: 'Sociedade Limitada Unipessoal (SLU)', d: 'A LTDA pode ser constituída por 1 única pessoa física ou jurídica, substituindo com vantagens a extinta EIRELI.' },
              { t: 'Exclusão de Sócio por Falta Grave', d: 'Art. 1.085 CC: Sócios que representem mais da metade do capital podem excluir sócio minoritário que coloque em risco a sociedade em assembleia com direito de defesa.' },
              { t: 'Sociedade Anônima (S.A.)', d: 'Capital dividido em ações negociáveis; acionistas respondem unicamente pelo preço de emissão das ações que subscreverem (Lei 6.404/76).' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Sociedade Limitada (LTDA)',
                topicos: [
                  {
                    id: 'emp-2-1',
                    titulo: 'Integralização do Capital & Responsabilidade Solidária',
                    fundamento: 'Arts. 1.052 e 1.058 do Código Civil',
                    conteudo: 'Enquanto o capital social não for totalmente integralizado, todos os sócios respondem solidariamente pela quantia que falta. Uma vez integralizado 100% do capital social no contrato social arquivado na Junta, o patrimônio particular dos sócios fica totalmente protegido contra dívidas sociais (salvo fraude e desconsideração da personalidade).',
                    exemplo: 'Sociedade com capital de R$ 100.000 subscrito onde um dos sócios deixou de integralizar R$ 30.000: os credores podem cobrar os R$ 30.000 de qualquer um dos sócios.'
                  },
                  {
                    id: 'emp-2-2',
                    titulo: 'Dissolução Parcial e Apuração de Haveres',
                    fundamento: 'Arts. 1.028 a 1.031 do CC | Art. 599 a 609 do CPC/15',
                    conteudo: 'Ocorre na morte, retirada voluntária ou exclusão de sócio. A sociedade não é extinta: apuram-se os haveres do sócio retirante com base em balanço especial de determinação avaliando o patrimônio real a preço de saída. Os haveres são pagos em dinheiro no prazo de 90 dias, salvo previsão diversa no contrato social.',
                    exemplo: 'Sócio dissidente retira-se da sociedade por discordar de mudança do objeto: tem direito ao reembolso de suas quotas apuradas a valor patrimonial real.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Sociedades por Ações (Lei 6.404/76)',
                topicos: [
                  {
                    id: 'emp-2-3',
                    titulo: 'Espécies de Ações e Companhias Abertas/Fechadas',
                    fundamento: 'Arts. 15 a 19 da Lei nº 6.404/1976',
                    conteudo: 'Ações ordinárias conferem direito a voto nas assembleias. Ações preferenciais conferem vantagens patrimoniais (prioridade na distribuição de dividendos fixos ou mínimos) em troca da restrição ou privação do direito de voto. Companhia aberta: negocia valores mobiliários em bolsa de valores ou balcão organizado sob regulação da CVM.',
                    exemplo: 'Investidor adquire ações preferenciais (PN) da Petrobras: recebe prioridade no recebimento dos proventos trimestrais distribuídos aos acionistas.'
                  },
                  {
                    id: 'emp-2-4',
                    titulo: 'Órgãos Societários da Sociedade Anônima',
                    fundamento: 'Arts. 121 a 165 da Lei nº 6.404/1976',
                    conteudo: 'Assembleia Geral: órgão soberano de deliberação dos acionistas. Conselho de Administração: órgão deliberativo colegiado obrigatório nas companhias abertas e nas de capital autorizado. Diretoria: órgão executivo de representação legal da companhia perante terceiros. Conselho Fiscal: órgão de fiscalização das contas dos administradores.',
                    exemplo: 'Assembleia Geral Ordinária de S.A. que se reúne obrigatoriamente nos 4 primeiros meses seguintes ao término do exercício para aprovar contas e deliberar dividendos.'
                  }
                ]
              }
            ]
          },
          {
            id: 'emp-mod-3',
            nome: 'Teoria Geral dos Títulos de Crédito',
            iconSvg: SVG.code,
            cor: 'var(--c-teal)',
            corGlow: 'var(--c-teal-glow)',
            artigos: 'Arts. 887 a 926 do CC | Lei Uniforme de Genebra (Dec. 57.663/66) | Lei 7.357/85',
            subtitulo: 'Princípios cambiários, letra de câmbio, nota promissória, cheque, duplicata mercantil, endosso e aval.',
            resumo: 'Atributos dos títulos cambiários (cartularidade, literalidade e autonomia), distinção entre aval e fiança, e prazos prescricionais de cobrança.',
            pilares: [
              { t: 'Princípio da Cartularidade', d: 'Para exercer o direito cambiário é indispensável a posse direta do documento original (cártula física ou eletrônica regulamentada).' },
              { t: 'Princípio da Literalidade', d: 'Só produz efeitos cambiais aquilo que estiver expressamente escrito no próprio corpo do título de crédito.' },
              { t: 'Princípio da Autonomia', d: 'As obrigações cambiais são independentes entre si; a inoponibilidade das exceções pessoais protege o terceiro adquirente de boa-fé.' },
              { t: 'Aval vs Fiança', d: 'Aval: garantia cambial autônoma sem benefício de ordem; Fiança: garantia contratual acessória civil com benefício de ordem.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção — Princípios e Atos Cambiários',
                topicos: [
                  {
                    id: 'emp-3-1',
                    titulo: 'Endosso em Preto e em Branco & Efeitos',
                    fundamento: 'Arts. 910 a 920 do CC | Lei Uniforme de Genebra',
                    conteudo: 'O endosso transfere a titularidade do crédito e vincula o endossante como coobrigado pelo pagamento do título. Endosso em preto: indica expressamente o nome do novo beneficiário (endossatário). Endosso em branco: assinatura sem indicar o beneficiário, transformando o título em título ao portador transmissível por mera tradição.',
                    exemplo: 'Empresa endossa nota promissória no verso para fornecedor: se o devedor principal não pagar, o fornecedor pode cobrar a dívida diretamente do endossante.'
                  },
                  {
                    id: 'emp-3-2',
                    titulo: 'Aval: Natureza Jurídica e Autonomia da Garantia',
                    fundamento: 'Arts. 897 a 900 do CC | Dec. 57.663/66',
                    conteudo: 'O avalista equipara-se àquele que avalizou, respondendo solidariamente pelo valor do título. Pelo princípio da autonomia cambial, o aval é válido mesmo que a obrigação que ele garantiu seja nula por qualquer razão que não seja vício de forma extrínseca. Não admite benefício de ordem.',
                    exemplo: 'Amigo presta aval em nota promissória; o credor pode executar o avalista imediatamente sem precisar primeiro esgotar os bens do emitente.'
                  }
                ]
              },
              {
                titulo: '2ª Seção — Títulos em Espécie',
                topicos: [
                  {
                    id: 'emp-3-3',
                    titulo: 'Cheque: Prazos de Apresentação e Prescrição',
                    fundamento: 'Lei nº 7.357/1985 (Lei do Cheque) | Súmula 370 STJ',
                    conteudo: 'Prazo de apresentação ao banco: 30 dias se da mesma praça (mesmo município), ou 60 dias se de praças diferentes. A contar do término do prazo de apresentação, inicia-se o prazo prescricional de 6 meses para ajuizar a Execução Cambial de Título Extrajudicial (Art. 59 da Lei do Cheque).',
                    exemplo: 'Cheque emitido na mesma praça em 1º de março: prazo de apresentação de 30 dias até 31 de março; ação de execução cambial prescreve em 6 meses (30 de setembro).'
                  },
                  {
                    id: 'emp-3-4',
                    titulo: 'Duplicata Mercantil e Causalidade',
                    fundamento: 'Lei nº 5.474/1968 (Lei das Duplicatas)',
                    conteudo: 'A duplicata é um título de crédito causal: sua emissão só é válida se vinculada a uma compra e venda mercantil a prazo ou prestação de serviços efetiva. A emissão de duplicata simulada sem venda real é crime tipificado no Art. 172 do Código Penal. Para executar duplicata sem aceite, exige-se protesto e comprovante de entrega da mercadoria.',
                    exemplo: 'Comerciante emite duplicata fria sem mercadoria entregue para antecipar recebíveis em banco: crime de duplicata simulada e nulidade cambial.'
                  }
                ]
              }
            ]
          },
          {
            id: 'emp-mod-4',
            nome: 'Recuperação Judicial, Extrajudicial & Mediação Empresarial',
            iconSvg: SVG.scale,
            cor: 'var(--c-teal)',
            corGlow: 'var(--c-teal-glow)',
            artigos: 'Lei nº 11.101/2005 (Arts. 1º a 74, 161 a 167) | Reforma da Lei nº 14.112/2020',
            subtitulo: 'Preservação da empresa viável, Stay Period, mediação prévia, órgãos concursais, plano de recuperação, novação e recuperação extrajudicial.',
            resumo: 'Roteiro completo de Recuperação e Falência (Aulas 01 a 12): teoria geral da crise empresarial, legitimidade, stay period de 180 dias, atuação do AJ e da AGC, as 3 listas de credores, elaboração e aprovação do PRJ, plano especial e recuperação extrajudicial.',
            pilares: [
              { t: 'Preservação da Atividade Viável (Art. 47)', d: 'A recuperação busca manter a fonte produtora, os empregos e os interesses dos credores, superando crises econômicas e financeiras.' },
              { t: 'Stay Period & Trava Bancária (Arts. 6º e 49)', d: 'Suspensão de ações/execuções por 180 dias prorrogável 1x. Bens de capital essenciais não podem ser expropriados.' },
              { t: 'Órgãos Concursais: AJ, Comitê e AGC', d: 'AJ como fiscal do processo (remuneração de até 5%, ou 2% para ME/EPP). AGC com 4 classes de credores e quóruns específicos.' },
              { t: 'Verificação em 3 Listas & Novação', d: '1ª lista do devedor, 2ª lista do AJ (edital com 15 dias) e 3ª lista do QGC. Homologação do PRJ opera novação das dívidas.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção – Finalidade da Lei, Crises da Empresa e Sujeição Passiva (Itens 1 e 2)',
                topicos: [
                  {
                    id: 'emp-4-1',
                    titulo: 'Finalidade da Lei nº 11.101/2005 e os 3 Tipos de Crise Empresarial',
                    fundamento: 'Arts. 47 e 75 da Lei nº 11.101/2005 (Reforma da Lei nº 14.112/2020)',
                    conteudo: 'A <strong>Lei nº 11.101/2005</strong>, reformada pela Lei nº 14.112/2020, tem dois eixos centrais: <strong>recuperar</strong> a atividade viável e <strong>liquidar</strong> de forma organizada a empresa inviável.<br><br>As crises empresariais desdobram-se em 3 dimensões fundamentais:<br>• <strong>Crise econômica:</strong> a atividade deixou de gerar receitas e resultados operacionais suficientes (modelo de negócios defasado);<br>• <strong>Crise financeira:</strong> falta de dinheiro disponível em caixa para quitar obrigações no vencimento (problema agudo de liquidez imediata);<br>• <strong>Crise patrimonial:</strong> o conjunto total de bens e direitos do devedor é insuficiente em relação ao volume acumulado das dívidas.',
                    exemplo: 'Uma indústria com carteira repleta de clientes e encomendas lucrativas, mas sem capital de giro em caixa para pagar fornecedores no fim do mês, vive crise financeira (ideal para recuperação). Já uma fábrica com dívidas impagáveis e sem mercado vive crise patrimonial e econômica irreversível (caso de falência).'
                  },
                  {
                    id: 'emp-4-2',
                    titulo: 'Igualdade entre Credores (Par Condicio Creditorum) e Rateio Pro Rata',
                    fundamento: 'Princípio Concursal Basilar da Lei nº 11.101/2005',
                    conteudo: 'O princípio basilar do direito concursal é a <strong>igualdade entre credores da mesma classe (par condicio creditorum)</strong>.<br><br>O patrimônio do devedor serve como garantia coletiva universal. Credores da mesma categoria recebem proporcionalmente ao valor dos seus haveres (<strong>rateio pro rata</strong>), impedindo que um credor individual mais ágil exproprie os bens e deixe os demais desamparados.',
                    exemplo: 'Se, após as prioridades legais, houver R$ 100 mil em caixa para rateio entre credores quirografários cujos créditos somam R$ 200 mil, cada um receberá exatamente 50% do valor de sua respectiva dívida reconhecida.'
                  },
                  {
                    id: 'emp-4-3',
                    titulo: 'Quem Está Sujeito à Lei: Empresários, Sociedades e Exclusões Totais e Parciais',
                    fundamento: 'Arts. 1º e 2º da Lei nº 11.101/2005',
                    conteudo: 'A LRE aplica-se, em regra, ao <strong>empresário individual</strong> e à <strong>sociedade empresária</strong>, regulares ou irregulares, conforme os conceitos dos arts. 966 e 982 do Código Civil.<br><br><strong>Exclusões da Lei:</strong><br>• <strong>Exclusão TOTAL (Art. 2º, I):</strong> Empresas públicas e sociedades de economia mista (ex: Petrobras, Banco do Brasil, Correios) NUNCA podem pedir recuperação judicial nem sofrer falência;<br>• <strong>Exclusão PARCIAL (Art. 2º, II):</strong> Instituições financeiras públicas ou privadas, cooperativas de crédito, administradoras de consórcio, seguradoras e planos de saúde seguem regimes próprios de intervenção e liquidação extrajudicial;<br>• <strong>Concessionárias privadas de serviço público:</strong> sujeitam-se à lei, mas a decretação da falência acarreta a extinção da concessão.',
                    exemplo: 'Sociedade de economia mista prestadora de serviços estaduais não se submete à LRE. Já uma empresa privada concessionária de transporte público pode falir, extinguindo-se o contrato com o poder público.'
                  },
                  {
                    id: 'emp-4-4',
                    titulo: 'Competência Jurisdicional, Prevenção e Juízo Universal da Crise',
                    fundamento: 'Arts. 3º e 76 da Lei nº 11.101/2005',
                    conteudo: '<strong>Juízo Competente (Art. 3º):</strong> É competente o juízo do <strong>principal estabelecimento do devedor</strong> — entendido como o local onde se concentra a atividade econômica mais relevante e o centro de decisões reais (e não mera sede estatutária fictícia). Se a sede for no exterior, é competente o juízo da filial brasileira.<br><br><strong>Prevenção:</strong> A distribuição do primeiro pedido previne o juízo para qualquer outro pedido de recuperação ou falência relativo ao mesmo devedor.<br><strong>Juízo Universal (Vis Atractiva):</strong> Na falência, concentra todas as ações patrimoniais sobre o ativo e passivo, com ressalva para execuções fiscais, ações que demandem quantia ilíquida e reclamações trabalhistas em fase de conhecimento.',
                    exemplo: 'Empresa com endereço estatutário formal em cidade do interior, mas cuja planta industrial, escritórios de gestão e maior parte dos contratos operam na capital: o principal estabelecimento e o juízo competente é a capital.'
                  }
                ]
              },
              {
                titulo: '2ª Seção – Efeitos do Processo, Stay Period e Mediação Antecedente (Itens 4 e 5)',
                topicos: [
                  {
                    id: 'emp-4-5',
                    titulo: 'Stay Period: Suspensão de 180 Dias, Trava Bancária e Bens Essenciais',
                    fundamento: 'Art. 6º e Art. 49, §§ 3º e 4º da Lei nº 11.101/2005',
                    conteudo: 'O deferimento do processamento da RJ instaura o <strong>stay period</strong>: suspensão de todas as ações e execuções contra o devedor por <strong>180 dias</strong>, prorrogável <strong>uma única vez por igual período</strong> em caráter excepcional.<br><br><strong>Regras e Limites do Stay Period:</strong><br>• <strong>Execuções fiscais:</strong> NÃO se suspendem automaticamente pelo stay period;<br>• <strong>Trava bancária / Créditos fiduciários (Art. 49, § 3º):</strong> credores titulares de alienação fiduciária e cessão fiduciária de recebíveis NÃO se submetem à recuperação judicial;<br>• <strong>Proteção dos bens de capital essenciais:</strong> durante o stay period, é expressamente <strong>proibida a retirada ou busca e apreensão</strong> de bens de capital essenciais à atividade empresarial situados no estabelecimento da devedora.',
                    exemplo: 'Máquinas pesadas ou caminhões de entrega essenciais à produção da devedora gravados em alienação fiduciária não entram no desconto do plano, mas o banco credor fica impedido de apreendê-los durante o período de suspensão de 180 dias.'
                  },
                  {
                    id: 'emp-4-6',
                    titulo: 'Mediação e Conciliação Antecedente e Tutela Cautelar de 60 Dias',
                    fundamento: 'Arts. 20-A a 20-D da Lei nº 11.101/2005 (Lei nº 14.112/2020)',
                    conteudo: 'Inovação da reforma, a lei estimula a <strong>mediação e conciliação pré-processual ou incidental</strong> para resolver conflitos de forma negociada.<br><br><strong>Tutela Cautelar Preparatória (Art. 20-B, § 1º):</strong> A empresa em situação urgente que preencha os requisitos de recuperação pode obter tutela cautelar para <strong>suspender execuções pelo prazo de até 60 dias</strong> enquanto negocia um acordo com credores.<br><br><strong>Regra de Desconto:</strong> Se a empresa posteriormente ajuizar pedido de recuperação judicial ou extrajudicial, esse período cautelar já fruído é <strong>obrigatoriamente descontado do stay period</strong> de 180 dias.',
                    exemplo: 'Empresa em crise pede mediação antecedente e suspende execuções por 50 dias. Como não fechou o acordo amigável, ingressa com pedido de Recuperação Judicial: seu stay period restante será de 130 dias (180 - 50).'
                  }
                ]
              },
              {
                titulo: '3ª Seção – Órgãos Concursais: Administrador Judicial, Comitê e AGC (Item 6)',
                topicos: [
                  {
                    id: 'emp-4-7',
                    titulo: 'Administrador Judicial (AJ): Requisitos, Funções e Remuneração',
                    fundamento: 'Arts. 21 a 25 da Lei nº 11.101/2005',
                    conteudo: 'O <strong>Administrador Judicial (AJ)</strong> é profissional idôneo (advogado, economista, administrador de empresas, contador) ou pessoa jurídica especializada nomeada pelo juiz.<br><br><strong>Funções e Limites:</strong><br>• O AJ é <strong>fiscal do juízo e da lei</strong>: verifica livros, elabora relatórios mensais e confere créditos;<br>• <strong>Na RJ, o AJ NÃO assume a gestão da empresa</strong> (a gestão diária continua com os próprios administradores da devedora);<br>• <strong>Teto remuneratório (Art. 24):</strong> a remuneração fixada pelo juiz não excederá <strong>5% do valor do passivo</strong> submetido à recuperação;<br>• <strong>Teto especial para ME/EPP e Produtor Rural:</strong> o teto máximo de remuneração do AJ é de <strong>2%</strong>;<br>• O AJ destituído por desídia ou que tenha suas contas desaprovadas <strong>perde o direito à remuneração</strong> e fica impedido de atuar em novos processos por 5 anos.',
                    exemplo: 'Na recuperação de uma microempresa com R$ 1.000.000 de passivo, os honorários do AJ não podem ultrapassar R$ 20.000,00 (teto de 2%). O AJ fiscaliza o cumprimento do processo, sem interferir na gestão comercial.'
                  },
                  {
                    id: 'emp-4-8',
                    titulo: 'Comitê de Credores: Fiscalização, Ausência de Remuneração e Impedimentos',
                    fundamento: 'Arts. 26 a 34 da Lei nº 11.101/2005',
                    conteudo: 'O <strong>Comitê de Credores</strong> é órgão colegiado e facultativo, constituído pela AGC para representar os credores e fiscalizar a atuação do devedor e do AJ.<br><br><strong>Regras e Vedações:</strong><br>• Os membros do comitê <strong>não recebem remuneração</strong> pela devedora ou massa falida (apenas ressarcimento de despesas autorizadas comprovadas);<br>• Há impedimento ético: destituição anterior ou parentesco/afinidade com o devedor até o 3º grau proíbem atuação;<br>• Uma vez nomeados, o AJ e os membros do Comitê devem assinar termo de compromisso em <strong>48 horas</strong> da intimação pessoal;<br>• Não havendo comitê, suas atribuições cabem ao próprio Administrador Judicial.',
                    exemplo: 'Credores constituem comitê com representantes das classes trabalhista e quirografária para auditar o estoque da empresa sem receber salários por essa atuação.'
                  },
                  {
                    id: 'emp-4-9',
                    titulo: 'Assembleia Geral de Credores (AGC): As 4 Classes, Quóruns e Cram Down',
                    fundamento: 'Arts. 35 a 46 e Art. 58 da Lei nº 11.101/2005',
                    conteudo: 'A <strong>Assembleia Geral de Credores (AGC)</strong> reúne todos os credores sujeitos para deliberar sobre matérias cruciais, especialmente a aprovação ou rejeição do Plano de Recuperação (PRJ).<br><br><strong>As 4 Classes de Credores (Art. 41):</strong><br>1. <strong>Classe I:</strong> Titulares de créditos trabalhistas ou decorrentes de acidentes de trabalho;<br>2. <strong>Classe II:</strong> Titulares de créditos com garantia real (hipoteca, penhor);<br>3. <strong>Classe III:</strong> Titulares de créditos quirografários, com privilégio geral e subordinados;<br>4. <strong>Classe IV:</strong> Titulares de créditos enquadrados como Microempresa (ME) ou EPP.<br><br><strong>Quóruns de Aprovação do PRJ (Art. 45):</strong><br>• <strong>Classes I e IV:</strong> Aprovação por maioria simples <strong>por cabeça</strong> (cada credor presente = 1 voto, independentemente do montante do crédito);<br>• <strong>Classes II e III:</strong> Aprovação cumulativa: maioria simples <strong>por cabeça E por mais da metade do valor</strong> dos créditos presentes.<br><br><strong>Cram Down (Art. 58, § 1º):</strong> Aprovação judicial excepcional do plano rejeitado, desde que tenha voto favorável de credores que representem mais da metade do valor presente em assembleia, aprovação em 3 classes (ou em 2 se houver empate), e votação favorável superior a 1/3 na classe que o rejeitou.',
                    exemplo: 'Na classe trabalhista (Classe I), um ex-empregado com R$ 2.000 a receber tem exatamente o mesmo poder de voto que outro trabalhador com R$ 150.000, pois o critério legal é por cabeça.'
                  }
                ]
              },
              {
                titulo: '4ª Seção – Verificação de Créditos, Impugnações e Crédito Tributário (Item 7)',
                topicos: [
                  {
                    id: 'emp-4-10',
                    titulo: 'As Três Listas de Credores: Administrativa, do AJ e o QGC Definitivo',
                    fundamento: 'Arts. 7º a 20 da Lei nº 11.101/2005',
                    conteudo: 'A apuração do passivo concursal ocorre por meio de uma sucessão ordenada de <strong>3 listas</strong>:<br><br>1. <strong>1ª Lista:</strong> Apresentada pelo próprio devedor na petição inicial da RJ;<br>2. <strong>2ª Lista (Lista do AJ):</strong> Publicado o edital da 1ª lista, os credores dispõem de <strong>15 dias</strong> para apresentar ao Administrador Judicial suas habilitações ou divergências administrativas. Encerrado esse prazo, o AJ tem até <strong>45 dias</strong> para conferir os livros e publicar sua própria relação de credores;<br>3. <strong>3ª Lista (QGC - Quadro Geral de Credores):</strong> Consolidado pelo AJ e homologado pelo juiz após o julgamento de todas as impugnações e habilitações judiciais.',
                    exemplo: 'Credor que foi incluído pelo devedor na 1ª lista com R$ 10.000, mas possui comprovantes de R$ 15.000, protocola divergência administrativa diretamente ao AJ no prazo de 15 dias sem custas judiciais.'
                  },
                  {
                    id: 'emp-4-11',
                    titulo: 'Impugnações Judiciais de Crédito e Habilitações Retardatárias (Limite de 3 Anos)',
                    fundamento: 'Arts. 8º, 10 e 19 da Lei nº 11.101/2005',
                    conteudo: 'Publicado o edital da 2ª lista do AJ, abre-se o prazo preclusivo de <strong>10 dias</strong> para que qualquer credor, o Comitê, o devedor, seus sócios ou o Ministério Público apresentem <strong>impugnação judicial</strong> dirigida ao juiz do processo.<br><br><strong>Habilitações Retardatárias (Art. 10):</strong><br>• Se o credor perde o prazo do edital inicial, sua habilitação será autuada como retardatária;<br>• Na RJ, o retardatário perde o direito de voto em assembleia até a homologação;<br>• Na falência, não tem direito a rateios já realizados e deve pagar as custas;<br>• <strong>Prazo decadencial máximo:</strong> na falência, o pedido de habilitação ou reserva de crédito deve ser formulado em no máximo <strong>3 anos</strong> contados da publicação da sentença declaratória (art. 10, § 10).',
                    exemplo: 'Credor que não se habilitou perante o AJ nos 15 dias iniciais ajuíza habilitação judicial retardatária; enquanto o juiz não decidir, ele não vota na AGC da recuperação.'
                  },
                  {
                    id: 'emp-4-12',
                    titulo: 'O Crédito Tributário na Recuperação: Execuções Fiscais e Cooperação Judiciária',
                    fundamento: 'Arts. 6º, § 7º-B, 57 e 68 da Lei nº 11.101/2005',
                    conteudo: 'O <strong>crédito tributário não se submete aos efeitos da recuperação judicial</strong>, de modo que as execuções fiscais não são suspensas automaticamente pelo stay period.<br><br>No entanto, para harmonizar a arrecadação pública com a sobrevivência da empresa, o juízo da recuperação pode, por <strong>cooperação judiciária</strong>, determinar a substituição de atos de constrição fiscal que recaiam sobre bens de capital essenciais à continuidade da atividade.<br>Na falência, instaura-se de ofício incidente de classificação de crédito público em <strong>30 dias</strong>.',
                    exemplo: 'A Procuradoria da Fazenda prossegue executando dívida de ICMS; se a penhora bloquear contas bancárias de pagamento de salários, o juiz da RJ pode cooperar para substituir a penhora por outro ativo da empresa.'
                  }
                ]
              },
              {
                titulo: '5ª Seção – Procedimento da RJ, Constatação Prévia e o Plano de Recuperação (Itens 8 e 9)',
                topicos: [
                  {
                    id: 'emp-4-13',
                    titulo: 'Petição Inicial da RJ, Documentos Obrigatórios e Constatação Prévia (Art. 51-A)',
                    fundamento: 'Arts. 48, 51 e 51-A da Lei nº 11.101/2005',
                    conteudo: 'Para requerer a RJ, o devedor deve exercer atividade regular há mais de 2 anos, não ser falido e não ter obtido RJ nos últimos 5 anos.<br><br><strong>Constatação Prévia (Art. 51-A):</strong> O juiz pode nomear profissional legalmente habilitado para verificar in loco as reais condições de funcionamento da empresa e a regularidade formal dos documentos apresentados.<br><strong>ATENÇÃO (Regra de Ouro da OAB):</strong> A constatação prévia <strong>NÃO serve</strong> para o juiz analisar ou rejeitar o pedido sob argumento de que a empresa seria economicamente inviável (essa análise cabe com exclusividade aos credores na AGC). Serve apenas para constatar fraudes ou se a empresa funciona de fato.',
                    exemplo: 'Juiz determina constatação prévia em distribuidora de bebidas: o perito constata que o galpão está ativo, possui estoque e empregados registrados, limitando-se a atestar a regularidade formal sem opinar sobre a rentabilidade futura.'
                  },
                  {
                    id: 'emp-4-14',
                    titulo: 'Deferimento do Processamento vs. Concessão da Recuperação Judicial',
                    fundamento: 'Arts. 52 e 58 da Lei nº 11.101/2005',
                    conteudo: 'Não confunda o <strong>deferimento do processamento</strong> com a <strong>concessão da recuperação judicial</strong>:<br><br>• <strong>Deferimento do processamento (Art. 52):</strong> Decisão inicial na qual o juiz verifica os requisitos formais dos arts. 48 e 51, nomeia o AJ, instaura o stay period de 180 dias e ordena a publicação do edital. O devedor <strong>continua na administração</strong> do negócio;<br>• <strong>Concessão da RJ (Art. 58):</strong> Decisão posterior que ocorre após a apresentação, votação e <strong>aprovação do PRJ pelos credores</strong> (ou por cram down). É aqui que se homologa o plano e opera-se a novação.',
                    exemplo: 'O deferimento do processamento abre a corrida dos 60 dias para apresentar o plano. A empresa só tem a recuperação de fato concedida meses depois, quando a AGC aprova suas condições de pagamento.'
                  },
                  {
                    id: 'emp-4-15',
                    titulo: 'O Plano de Recuperação Judicial (PRJ): Prazos de 60 Dias, Objeções e Laudo de Viabilidade',
                    fundamento: 'Arts. 53 a 56 da Lei nº 11.101/2005',
                    conteudo: 'Publicada a decisão de deferimento do processamento, o devedor dispõe do prazo improrrogável de <strong>60 dias</strong> para apresentar em juízo o <strong>Plano de Recuperação Judicial (PRJ)</strong>, sob pena de <strong>convolação imediata em falência</strong>.<br><br><strong>Requisitos do PRJ:</strong> discriminação pormenorizada dos meios de recuperação, demonstração de viabilidade econômica e laudo econômico-financeiro assinado por profissional habilitado.<br><strong>Objeções:</strong> Publicado o aviso aos credores sobre o recebimento do plano, qualquer credor tem <strong>30 dias</strong> para manifestar objeção. Havendo ao menos uma objeção, o juiz convocará a AGC para votar.',
                    exemplo: 'A devedora apresenta plano propondo carência de 1 ano, deságio de 40% e parcelamento do saldo em 8 anos; o banco credor apresenta objeção formal em 30 dias, forçando a deliberação em AGC.'
                  },
                  {
                    id: 'emp-4-16',
                    titulo: 'Homologação, Novação das Dívidas e Manutenção das Ações contra Avalistas e Fiadores',
                    fundamento: 'Art. 59 da Lei nº 11.101/2005 | Súmula 581 do STJ',
                    conteudo: 'Aprovado o plano pela AGC ou por cram down e apresentadas as certidões negativas fiscais (art. 57), o juiz concede a recuperação judicial.<br><br><strong>Efeitos da Concessão:</strong><br>• <strong>Novação:</strong> os créditos anteriores sujeitos à recuperação têm suas condições originais extintas e substituídas pelas novas cláusulas do plano aprovado;<br>• <strong>Título Executivo Judicial:</strong> o plano homologado serve de título para execução em caso de atraso;<br>• <strong>Súmula 581 do STJ:</strong> A recuperação judicial do devedor principal <strong>NÃO impede</strong> o prosseguimento nem a propositura de ações e execuções contra seus <strong>fiadores, avalistas e coobrigados</strong> em geral;<br>• <strong>Garantia Real:</strong> A supressão ou substituição de garantia real exige aprovação expressa do credor titular.',
                    exemplo: 'Empresa em recuperação tem sua dívida parcelada pelo plano com deságio; o credor bancário pode cobrar o valor integral e original diretamente do sócio que assinou como avalista da nota promissória.'
                  },
                  {
                    id: 'emp-4-17',
                    titulo: 'Fiscalização Judicial Bienal e Hipóteses de Convolação em Falência',
                    fundamento: 'Arts. 61 a 63 e Art. 73 da Lei nº 11.101/2005',
                    conteudo: 'Após a concessão da RJ, o devedor permanece sob <strong>fiscalização judicial pelo prazo de até 2 anos</strong> (período bienal), contado da homologação do plano.<br><br><strong>Consequências de Eventual Descumprimento:</strong><br>• <strong>Descumprimento dentro dos 2 anos:</strong> Se a devedora deixar de pagar qualquer obrigação do plano prevista para vencer no período bienal, o juiz decretará a <strong>convolação imediata da recuperação em falência</strong>, restabelecendo as dívidas originais (descontado o que foi pago);<br>• <strong>Descumprimento após o biênio (após o encerramento da RJ):</strong> O credor prejudicado pode executar o valor perante o juízo cível competente ou requerer a falência do devedor com base no art. 94.',
                    exemplo: 'Empresa paga a 1ª parcela da RJ no 6º mês, mas atrasa a parcela do 18º mês: o credor comunica o juiz e a recuperação é sumariamente convolada em falência.'
                  }
                ]
              },
              {
                titulo: '6ª Seção – Plano Especial (ME/EPP/Rural), Recuperação Extrajudicial e Prazos Decisivos (Itens 10 a 15)',
                topicos: [
                  {
                    id: 'emp-4-18',
                    titulo: 'Plano Especial para Microempresas, EPPs e Produtores Rurais (LC nº 123/2006)',
                    fundamento: 'Arts. 70 a 72 da Lei nº 11.101/2005 | LC nº 123/2006',
                    conteudo: 'Microempresas (receita bruta anual até R$ 360 mil), Empresas de Pequeno Porte (até R$ 4,8 milhões) e o produtor rural com endividamento reduzido podem optar pelo <strong>plano especial de recuperação judicial</strong>.<br><br><strong>Condições do Plano Especial:</strong><br>• Pagamento parcelado em <strong>até 36 parcelas mensais, iguais e sucessivas</strong>;<br>• Correção monetária e juros equivalentes à <strong>taxa Selic</strong>;<br>• Vencimento da 1ª parcela em no máximo <strong>180 dias</strong> contados da distribuição do pedido;<br>• Teto dos honorários do AJ reduzido para <strong>2%</strong>;<br>• Não há necessidade de convocar AGC: a oposição de credores titulares de mais da metade dos créditos das classes abrangidas impede a concessão da recuperação.',
                    exemplo: 'Microempresa de alimentos com dívidas bancárias de R$ 300.000 ingressa no plano especial: ganha 180 dias de carência e quitará o passivo sujeito em 36 vezes corrigidas pela Selic.'
                  },
                  {
                    id: 'emp-4-19',
                    titulo: 'Recuperação Extrajudicial (RE): Modalidades Facultativa e Impositiva e Quóruns',
                    fundamento: 'Arts. 161 a 167 da Lei nº 11.101/2005 (Lei nº 14.112/2020)',
                    conteudo: 'A <strong>Recuperação Extrajudicial (RE)</strong> é realizada prévia e consensualmente entre o devedor e seus credores, ingressando em juízo apenas para homologação.<br><br><strong>Modalidades de RE:</strong><br>• <strong>RE Facultativa ou Homologatória (Art. 162):</strong> Assinada pelo devedor e credores, vincula com exclusividade os credores signatários do termo;<br>• <strong>RE Impositiva (Art. 163):</strong> Exige adesão prévia de credores que representem <strong>mais da metade (mais de 50%)</strong> dos créditos de cada espécie abrangida no plano. Homologada pelo juiz, <strong>obriga inclusive os credores dissidentes</strong> daquela mesma categoria;<br>• <strong>Adesão Mínima Inicial:</strong> Pode-se ajuizar com anuência de ao menos <strong>1/3 dos créditos</strong>, comprometendo-se a atingir o quórum de mais da metade em até 90 dias;<br>• <strong>Vedações:</strong> não pode contemplar créditos tributários, trabalhistas (salvo negociação coletiva) nem antecipar pagamentos.',
                    exemplo: 'Empresa obtém assinatura de bancos titulares de 55% das dívidas financeiras: protocola a RE impositiva e o juiz homologa, submetendo os 45% restantes dos bancos às novas condições pactuadas.'
                  },
                  {
                    id: 'emp-4-20',
                    titulo: 'Comparação Rápida entre RJ, RE e Falência e Caso Prático Integrado',
                    fundamento: 'Visão Panorâmica Comparativa da Lei nº 11.101/2005',
                    conteudo: '<strong>Quadro Comparativo:</strong><br>• <strong>Recuperação Judicial:</strong> Processo judicial amplo, com stay period universal, deliberação em AGC e fiscalização bienal. Indicada para crises graves e generalizadas;<br>• <strong>Recuperação Extrajudicial:</strong> Negociação privada prévia, mais célere e econômica, focada em certas classes de credores bancários/comerciais;<br>• <strong>Falência:</strong> Processo de liquidação judicial forçada de empresa inviável, com arrecadação de bens, alienação em leilão e rateio entre os credores segundo rigorosa ordem legal.<br><br><strong>Caso Prático Integrado (Fábrica de Móveis):</strong> Fábrica com encomendas atrasa bancos e fornecedores. Busca mediação prévia (60 dias de suspensão). Pede RJ e obtém stay period. AJ publica 2ª lista. Devedora apresenta PRJ em 60 dias com carência e deságio. AGC aprova em 4 classes. Juiz concede RJ. Se descumprir no biênio, processo é convolado em falência.',
                    exemplo: 'Compreender a transição entre o pedido preventivo (mediação), a proteção judicial (RJ) e a dissolução forçada (falência) é o núcleo exigido no Exame de Ordem e concursos jurídicos.'
                  },
                  {
                    id: 'emp-4-21',
                    titulo: 'Tabela de Prazos Decisivos e Glossário de Termos em Linguagem Direta',
                    fundamento: 'Consolidação de Prazos da Lei nº 11.101/2005',
                    conteudo: '<strong>Prazos Cruciais para Memorizar:</strong><br>• <strong>Mediação cautelar antecedente:</strong> até 60 dias (descontados do stay period se houver RJ);<br>• <strong>Stay period da RJ:</strong> 180 dias (prorrogável 1x por igual período);<br>• <strong>Apresentação do PRJ:</strong> 60 dias do deferimento do processamento;<br>• <strong>Objeção de credor ao plano:</strong> 30 dias da publicação do aviso;<br>• <strong>Habilitações/divergências ao AJ:</strong> 15 dias do edital da 1ª lista;<br>• <strong>Publicação da 2ª lista pelo AJ:</strong> até 45 dias;<br>• <strong>Impugnação judicial da lista:</strong> 10 dias do edital da 2ª lista;<br>• <strong>Fiscalização judicial bienal da RJ:</strong> 2 anos da homologação;<br>• <strong>Plano especial ME/EPP:</strong> até 36 parcelas mensais, 1ª em até 180 dias, honorários do AJ teto de 2%;<br>• <strong>RE Impositiva:</strong> quórum superior à metade de cada espécie (pode protocolar com 1/3 e complementar em 90 dias).<br><br><strong>Glossário Concursal Rápido:</strong><br>• <strong>Stay Period:</strong> blindagem patrimonial legal contra execuções;<br>• <strong>Novação:</strong> extinção das condições originais da dívida e criação das regras do plano;<br>• <strong>Cram Down:</strong> imposição judicial do plano aos credores dissidentes em hipóteses restritas;<br>• <strong>Rateio Pro Rata:</strong> distribuição proporcional entre credores da mesma categoria.',
                    exemplo: 'Memorize: 60 dias (PRJ), 30 dias (objeção), 180 dias (stay period e carência do plano especial), 2 anos (fiscalização bienal).'
                  }
                ]
              }
            ]
          },
          {
            id: 'emp-mod-5',
            nome: 'Processo de Falência & Liquidação Concursal do Ativo',
            iconSvg: SVG.scale,
            cor: 'var(--c-teal)',
            corGlow: 'var(--c-teal-glow)',
            artigos: 'Lei nº 11.101/2005 (Arts. 75 a 160) | Reforma pela Lei nº 14.112/2020',
            subtitulo: 'Pressupostos da quebra, insolvência presumida, sentença falimentar, termo legal, ineficácia objetiva, ação revocatória, extraconcursais e concursais.',
            resumo: 'Roteiro completo de Falência e Liquidação Concursal (Aulas 13 a 23): da autofalência e pedido do credor à fixação do termo legal, ineficácia dos atos (Art. 129), ação revocatória (Art. 130), responsabilidade pessoal e rigorosa ordem de credores (Arts. 84 e 83).',
            pilares: [
              { t: 'Execução Coletiva Universal', d: 'Liquidação judicial da empresa inviável com arrecadação de bens e rateio proporcional segundo a ordem estrita da lei.' },
              { t: 'Insolvência Presumida (Art. 94)', d: 'I - Impontualidade injustificada (> 40 SM protestados); II - Execução frustrada (tríplice omissão sem limite de valor); III - Atos de falência.' },
              { t: 'Termo Legal & Ineficácia Objetiva (Art. 129)', d: 'Retroação de até 90 dias. Ineficácia objetiva de pagamentos antecipados ou garantias independentemente de dolo.' },
              { t: 'Ordem Rígida: Extraconcursais (84) e Concursais (83)', d: 'Extraconcursais têm prioridade absoluta (despesas, restituições, financiador). Concursais seguem: trabalhista, real, fiscal, quirografário.' }
            ],
            secoes: [
              {
                titulo: '1ª Seção – Conceito, Pressupostos e Legitimidade na Falência (Item 16)',
                topicos: [
                  {
                    id: 'emp-5-1',
                    titulo: 'Conceito de Falência, Finalidade e os 3 Pressupostos Estruturais',
                    fundamento: 'Arts. 75 a 82-A da Lei nº 11.101/2005',
                    conteudo: 'A <strong>Falência</strong> é um processo judicial de execução concursal coletiva do empresário ou sociedade empresária juridicamente insolvente. Seu objetivo central é promover a liquidação ordenada e célere da atividade inviável, arrecadando bens para pagar os credores e alocando os ativos produtivos na economia.<br><br><strong>Os 3 Pressupostos Estruturais da Falência:</strong><br>1. <strong>Devedor empresário:</strong> sujeito legitimado passivo da LRE (art. 1º);<br>2. <strong>Insolvência jurídica / presumida:</strong> caracterizada por qualquer das hipóteses taxativas do art. 94;<br>3. <strong>Sentença judicial declaratória da falência:</strong> decisão constitutiva proferida pelo juízo universal (art. 99).<br><br><strong>Destaque da Jurisprudência:</strong> NÃO é indispensável demonstrar que todas as dívidas superam todo o patrimônio para decretar a falência: basta a presença de uma das presunções legais de quebra.',
                    exemplo: 'Empresa dona de fazendas avaliadas em milhões que deixa de pagar títulos protestados acima de 40 salários mínimos pode ter sua falência decretada por impontualidade injustificada presumida.'
                  },
                  {
                    id: 'emp-5-2',
                    titulo: 'Legitimidade Passiva: Sociedades em Comum, SCP e Sociedades Ilimitadas',
                    fundamento: 'Arts. 1º e 81 da LRE | Arts. 990 e 994 do Código Civil',
                    conteudo: 'A sujeição passiva à falência atinge tanto o empresário regular quanto o <strong>empresário irregular</strong> (sem inscrição na Junta Comercial).<br><br><strong>Efeitos da Quebra sobre os Sócios:</strong><br>• <strong>Sociedade em Comum (Art. 990 CC):</strong> Sociedade não registrada: os sócios respondem solidária e ilimitadamente pelas dívidas sociais, sem benefício de ordem;<br>• <strong>Sociedade em Conta de Participação (SCP):</strong> A falência do <strong>sócio ostensivo</strong> dissolve a sociedade e liquida a conta, passando o crédito do sócio participante a quirografário (art. 994, § 2º CC). Falindo o participante, o contrato rege-se pelos contratos bilaterais;<br>• <strong>Sociedades de Responsabilidade Ilimitada (Art. 81 LRE):</strong> Na sociedade em nome coletivo ou comandita simples, a falência da pessoa jurídica <strong>acarreta automaticamente a falência dos sócios de responsabilidade ilimitada</strong>;<br>• <strong>Sociedades Limitadas e S/A (Art. 82-A):</strong> A falência da sociedade <strong>NÃO se estende</strong> automaticamente aos sócios ou acionistas.',
                    exemplo: 'Se uma sociedade em nome coletivo vai à falência, todos os seus sócios são falimentados juntos (art. 81). Já na quebra de uma Sociedade Limitada (LTDA), o patrimônio pessoal dos sócios fica a salvo, salvo desconsideração por fraude.'
                  },
                  {
                    id: 'emp-5-3',
                    titulo: 'Legitimidade Ativa: Autofalência e Falência Requerida por Credor com Registro Regular',
                    fundamento: 'Arts. 97, 105 a 107 da Lei nº 11.101/2005',
                    conteudo: 'Podem requerer a falência (Art. 97):<br>1. O próprio devedor (<strong>autofalência</strong>);<br>2. O cônjuge sobrevivente, qualquer herdeiro do devedor ou inventariante;<br>3. O cotista ou acionista da sociedade, na forma da lei ou do contrato social;<br>4. <strong>Qualquer credor</strong> (nacional ou estrangeiro, quirografário ou com garantia real).<br><br><strong>Condição do Credor Empresário (Art. 97, § 1º):</strong> O credor que exerça atividade empresária somente pode requerer a falência de terceiro se comprovar a <strong>regularidade de suas próprias atividades</strong> mediante certidão do Registro Público de Empresas Mercantis (Junta Comercial). O empresário irregular não tem essa legitimidade ativa.',
                    exemplo: 'Comerciante que opera informalmente sem CNPJ e sem Junta Comercial não pode pedir a falência judicial de um devedor com base em duplicatas não pagas.'
                  }
                ]
              },
              {
                titulo: '2ª Seção – Procedimento Pré-Falimentar, Defesas e Depósito Elisivo (Item 17)',
                topicos: [
                  {
                    id: 'emp-5-4',
                    titulo: 'Os 3 Sinais Legais de Insolvência Presumida (Art. 94, I, II e III da LRE)',
                    fundamento: 'Art. 94, I, II e III da Lei nº 11.101/2005',
                    conteudo: 'A falência do devedor pode ser decretada com base em 3 fundamentos alternativos de insolvência presumida:<br><br>1. <strong>Impontualidade Injustificada (Art. 94, I):</strong> Não pagamento de dívida líquida, vencida e exigível materializada em título executivo protestado cuja soma <strong>ultrapasse 40 salários mínimos</strong> na data do pedido (admite litisconsórcio de credores para somar títulos);<br>2. <strong>Execução Frustrada / Tríplice Omissão (Art. 94, II):</strong> Executado por qualquer quantia líquida, o devedor <strong>não paga, não deposita e não nomeia bens à penhora</strong> no prazo legal. A prova é feita por <strong>certidão do juízo da execução</strong>. <em>ATENÇÃO:</em> Aqui <strong>NÃO se exige protesto nem o valor mínimo de 40 salários mínimos</strong>!<br>3. <strong>Atos de Falência (Art. 94, III):</strong> Prática de condutas lesivas como alienação precipitada, transferência simulada de ativos ou abandono do estabelecimento sem deixar representante.',
                    exemplo: 'Credor com título judicial de R$ 3.000,00 executa a devedora e ela não paga nem indica bens: o credor pede a certidão da tríplice omissão e requer a falência pelo art. 94, II, independentemente de protesto ou de 40 salários mínimos.'
                  },
                  {
                    id: 'emp-5-5',
                    titulo: 'Citação, Contestação em 10 Dias, Possibilidade de Pedir RJ e Depósito Elisivo',
                    fundamento: 'Arts. 95, 96 e 98 da Lei nº 11.101/2005',
                    conteudo: 'Citado no pedido de falência, o devedor dispõe do prazo de <strong>10 dias</strong> para se defender (Art. 98).<br><br><strong>Condutas Possíveis do Devedor:</strong><br>• <strong>Apresentar Contestação:</strong> alegando nulidade do título, falsidade, prescrição, quitação integral ou vício no protesto (Art. 96);<br>• <strong>Pedir Recuperação Judicial:</strong> dentro dos 10 dias da contestação, o devedor pode requerer a RJ, se preencher os requisitos (Art. 95);<br>• <strong>Efetuar Depósito Elisivo (Art. 98, parágrafo único):</strong> depositar em juízo o valor total da dívida acrescido de correção monetária, juros e honorários advocatícios.<br><br><strong>Efeito do Depósito Elisivo:</strong> Afasta de forma cabal a decretação da falência fundada em impontualidade ou execução frustrada (Art. 94, I e II). <em>ATENÇÃO:</em> O depósito elisivo <strong>NÃO é admitido</strong> para afastar o pedido fundado em atos de falência (Art. 94, III).',
                    exemplo: 'Empresa citada por título protestado de 50 salários mínimos efetua o depósito elisivo integral em juízo dentro de 10 dias; o juiz extingue o processo falimentar e autoriza o credor a levantar a quantia depositada.'
                  },
                  {
                    id: 'emp-5-6',
                    titulo: 'Sentença Pré-Falimentar, Sistema Recursal (Art. 100) e Indenização por Dolo do Credor',
                    fundamento: 'Arts. 100 e 101 da Lei nº 11.101/2005',
                    conteudo: 'Concluído o rito pré-falimentar, o juiz profere decisão:<br><br><strong>Sistema Recursal Falimentar (Art. 100):</strong><br>• Da decisão que <strong>DECRETA a falência</strong> cabe <strong>Agravo de Instrumento</strong>;<br>• Da sentença que <strong>JULGA IMPROCEDENTE (DENEGA) a falência</strong> cabe <strong>Apelação</strong>.<br><br><strong>Indenização por Pedido Doloso (Art. 101):</strong> Quem requerer a falência de terceiro por dolo, má-fé ou emulação para constranger o devedor, sendo o pedido julgado improcedente, será condenado a indenizar perdas e danos apurados em liquidação.',
                    exemplo: 'Se o juiz julga improcedente o pedido do credor, este deve interpor apelação. Se decretar a quebra, a empresa deve recorrer por agravo de instrumento perante o Tribunal de Justiça.'
                  }
                ]
              },
              {
                titulo: '3ª Seção – Sentença Declaratória de Falência e Fixação do Termo Legal (Item 18)',
                topicos: [
                  {
                    id: 'emp-5-7',
                    titulo: 'Conteúdo Obrigatório da Sentença Declaratória de Falência (Art. 99)',
                    fundamento: 'Art. 99 da Lei nº 11.101/2005',
                    conteudo: 'A sentença que decreta a falência transforma o processo individual em concurso universal e produz determinações cogentes:<br><br>1. Síntese do relatório e identificação precisa do falido e administradores;<br>2. <strong>Fixação do Termo Legal</strong> da falência (art. 99, II);<br>3. <strong>Nomeação do Administrador Judicial (AJ)</strong>;<br>4. Ordem para que o falido apresente relação de credores em <strong>5 dias</strong> (se não estiver nos autos);<br>5. Fixação do prazo de <strong>15 dias</strong> para habilitações e divergências de créditos ao AJ;<br>6. <strong>Suspensão de ações e execuções</strong> contra o falido e proibição de disposição patrimonial;<br>7. Decisão sobre a <strong>continuação provisória da atividade</strong> (se útil à preservação do valor dos ativos) ou <strong>lacração</strong> do estabelecimento;',
                    exemplo: 'O magistrado decreta a falência, nomeia o administrador judicial e ordena ao falido que junte aos autos em 5 dias a lista atualizada de empregados e fornecedores para publicação de edital.'
                  },
                  {
                    id: 'emp-5-8',
                    titulo: 'O que é o Termo Legal da Falência: Retroação de até 90 Dias e Função Fiscalizatória',
                    fundamento: 'Art. 99, II da Lei nº 11.101/2005',
                    conteudo: 'O <strong>Termo Legal da Falência</strong> marca uma linha do tempo anterior à decretação da quebra, fixada pelo juiz para fiscalizar atos que possam ter fraudado ou favorecido credores em detrimento da coletividade.<br><br><strong>Critério Legal de Retroação (Art. 99, II):</strong><br>O juiz pode retroagir o termo legal por <strong>no máximo 90 dias</strong> contados:<br>• Do primeiro protesto por falta de pagamento (não cancelado); OU<br>• Do protocolo do pedido de falência; OU<br>• Do protocolo do pedido de recuperação judicial anterior.<br><br><em>REGRA DE OURO:</em> O termo legal <strong>NÃO é um novo prazo para pagar dívidas</strong>, mas sim uma baliza temporal retroativa para avaliar a ineficácia dos atos jurídicos praticados pelo devedor.',
                    exemplo: 'Falência decretada em 1º de outubro com 1º protesto ocorrido em 1º de julho: o juiz retroage o termo legal para até 90 dias antes do protesto para anular garantias suspeitas concedidas pelo falido àquela época.'
                  }
                ]
              },
              {
                titulo: '4ª Seção – Ineficácia Objetiva, Ação Revocatória e Responsabilidade dos Sócios (Item 19)',
                topicos: [
                  {
                    id: 'emp-5-9',
                    titulo: 'Os Três Momentos dos Atos do Devedor e a Ineficácia Objetiva do Art. 129',
                    fundamento: 'Arts. 103 e 129 da Lei nº 11.101/2005',
                    conteudo: 'A validade e eficácia dos atos do devedor dividem-se em <strong>3 momentos cronológicos</strong>:<br>1. <strong>Antes do termo legal:</strong> atos válidos no regime comum, sujeitos apenas à anulação por fraude contra credores do Código Civil;<br>2. <strong>Durante o termo legal:</strong> regime da <strong>ineficácia objetiva (Art. 129)</strong>;<br>3. <strong>Após a decretação da falência:</strong> perda da administração (art. 103): qualquer ato de disposição do falido é ineficaz de pleno direito perante a massa.<br><br><strong>Hipóteses de Ineficácia Objetiva (Art. 129):</strong><br>São ineficazes perante a massa, <strong>independentemente de dolo, fraude ou má-fé do contratante</strong>:<br>• Pagamento antecipado de dívidas não vencidas dentro do termo legal;<br>• Pagamento de dívida vencida dentro do termo legal em forma não prevista (dação em pagamento de bens em vez de dinheiro);<br>• Constituição de garantia real (hipoteca, penhor) no termo legal para dívida contraída anteriormente;<br>• Prática de atos gratuitos (doações) ou renúncia de herança no biênio anterior à decretação.',
                    exemplo: 'Devedor que transfere imóvel para quitar nota promissória no período do termo legal tem o ato declarado ineficaz pelo juiz: o imóvel volta para a massa falida, pois dívida em dinheiro deve ser paga em dinheiro.'
                  },
                  {
                    id: 'emp-5-10',
                    titulo: 'Ação Revocatória por Fraude Falimentar (Arts. 130 a 138) e Prazo Decadencial de 3 Anos',
                    fundamento: 'Arts. 130 a 138 da Lei nº 11.101/2005',
                    conteudo: 'Diferentemente da ineficácia objetiva, a <strong>Ação Revocatória Falimentar (Art. 130)</strong> atinge negócios praticados com efetivo intuito de fraudar credores.<br><br><strong>Requisitos Cumulativos:</strong><br>1. Intenção manifesta de prejudicar credores (consilium fraudis);<br>2. Conluio fraudulento entre o devedor e o terceiro contratante;<br>3. Prejuízo patrimonial efetivo à massa falida (eventus damni).<br><br><strong>Legitimidade e Prazo:</strong> Proposta pelo Administrador Judicial, por qualquer credor ou pelo Ministério Público perante o juízo falimentar no <strong>prazo decadencial de 3 anos</strong> contado da decretação da falência (art. 132). Julgada procedente, os bens retornam à massa ou indeniza-se o equivalente em dinheiro.',
                    exemplo: 'Empresário vende veículos de luxo para cunhado por 10% do valor real meses antes da quebra: o AJ ingressa com ação revocatória do art. 130 em até 3 anos para reaver os veículos para a arrecadação.'
                  },
                  {
                    id: 'emp-5-11',
                    titulo: 'Responsabilidade Pessoal de Sócios, Controladores e Administradores (Arts. 81, 82 e 82-A)',
                    fundamento: 'Arts. 81, 82 e 82-A da LRE | Art. 50 do Código Civil | Arts. 133 a 137 do CPC',
                    conteudo: 'A decretação da falência da sociedade limitada ou anônima <strong>NÃO atinge automaticamente os sócios</strong> (Art. 82-A).<br><br><strong>Mecanismos de Responsabilização:</strong><br>• <strong>Ação de Responsabilidade Pessoal (Art. 82):</strong> Proposta no próprio juízo falimentar para apurar responsabilidade dos administradores/sócios por obrigações decorrentes de atos com culpa ou dolo. <strong>Prazo prescricional:</strong> 2 anos contados do trânsito em julgado da sentença de encerramento da falência;<br>• <strong>Desconsideração da Personalidade Jurídica (IDPJ):</strong> Exige rigorosa comprovação dos requisitos do art. 50 do CC (desvio de finalidade ou confusão patrimonial) e observância do incidente processual dos arts. 133 a 137 do CPC.',
                    exemplo: 'Sócio-administrador que esvaziou as contas da empresa para sua conta pessoal antes da quebra pode ter sua responsabilidade apurada pelo art. 82 no juízo falimentar no prazo de 2 anos.'
                  }
                ]
              },
              {
                titulo: '5ª Seção – Efeitos da Falência sobre Credores e Obrigações (Item 20)',
                topicos: [
                  {
                    id: 'emp-5-12',
                    titulo: 'Massa Falida Objetiva e Subjetiva e Perda da Administração dos Bens (Art. 103)',
                    fundamento: 'Arts. 102 e 103 da Lei nº 11.101/2005',
                    conteudo: 'Com a decretação da falência, o devedor perde o direito de administrar e dispor de seus bens, ocorrendo o <strong>desapossamento</strong> (o patrimônio passa a ser administrado pelo AJ).<br><br><strong>A Massa Falida desdobra-se em:</strong><br>• <strong>Massa Falida Objetiva:</strong> O conjunto arrecadado de bens, direitos, créditos e ativos do falido;<br>• <strong>Massa Falida Subjetiva:</strong> A comunhão de credores submetidos ao processo falimentar e representados pelo AJ.<br><br>O falido conserva o direito de acompanhar a fiscalização do processo, formular pedidos e defender seus interesses legítimos nos autos.',
                    exemplo: 'O empresário falido não pode mais assinar cheques, vender maquinários ou outorgar procurações em nome da empresa; todos os atos passam com exclusividade ao AJ.'
                  },
                  {
                    id: 'emp-5-13',
                    titulo: 'Vencimento Antecipado das Dívidas, Conversão Monetária e Suspensão dos Juros (Art. 124)',
                    fundamento: 'Arts. 77 e 124 da Lei nº 11.101/2005',
                    conteudo: 'A decretação da quebra irradia efeitos patrimoniais imediatos:<br><br>• <strong>Vencimento Antecipado (Art. 77):</strong> Todas as dívidas a termo do falido consideram-se vencidas de imediato, com abatimento proporcional dos juros futuros;<br>• <strong>Conversão de Moeda Estrangeira:</strong> Créditos fixados em moeda estrangeira são convertidos para reais pelo câmbio do dia em que a falência for decretada;<br>• <strong>Suspensão dos Juros Pós-Falência (Art. 124):</strong> Não correm contra a massa falida juros posteriores à quebra se o ativo apurado não bastar para pagar todo o passivo subordinado.<br><em>Exceção aos Juros:</em> Os juros de debêntures e créditos com garantia real continuam correndo, porém limitados ao produto apurado na alienação do próprio bem gravado.',
                    exemplo: 'Dívida em moeda estrangeira de US$ 10.000 é liquidada em reais pelo valor do dólar oficial na data da sentença de quebra. Juros após essa data só serão pagos se sobrar dinheiro na massa.'
                  },
                  {
                    id: 'emp-5-14',
                    titulo: 'Dívidas Solidárias, Ajuste entre Massas e Sanção por Má-Fé na Formação de Crédito (Art. 152)',
                    fundamento: 'Arts. 127 e 152 da Lei nº 11.101/2005',
                    conteudo: '<strong>Dívidas Solidárias (Art. 127):</strong> Havendo coobrigados solidários falidos, o credor pode concorrer pela totalidade do seu crédito em cada uma das massas falidas, até a integral satisfação de sua dívida. O ressarcimento proporcional (regresso) ocorre diretamente entre as massas falidas.<br><br><strong>Sanção por Má-Fé (Art. 152):</strong> O credor que tiver constituído seu crédito ou sua garantia real com dolo, simulação ou má-fé será condenado à <strong>restituição em dobro</strong> de todas as quantias que houver recebido da massa, corrigidas e acrescidas dos juros legais.',
                    exemplo: 'Credor que simulou com o falido nota fiscal fria para forjar crédito trabalhista fraudulento perde o crédito e é obrigado a devolver em dobro o que recebeu da massa falida.'
                  }
                ]
              },
              {
                titulo: '6ª Seção – Classificação Rígida de Créditos Extraconcursais e Concursais (Itens 21 a 24)',
                topicos: [
                  {
                    id: 'emp-5-15',
                    titulo: 'Créditos Extraconcursais (Art. 84): Ordem de Pagamento Prioritário Absoluto',
                    fundamento: 'Art. 84 da Lei nº 11.101/2005 (Redação da Lei nº 14.112/2020)',
                    conteudo: 'Os <strong>créditos extraconcursais são pagos com prioridade absoluta</strong> sobre todos os créditos concursais do art. 83, respeitando sua própria hierarquia interna:<br><br><strong>Ordem do Art. 84:</strong><br>1. <strong>I-A:</strong> Despesas indispensáveis da administração (arts. 150/151) e <strong>créditos salariais estritos dos últimos 3 meses até 5 salários mínimos</strong> por trabalhador;<br>2. <strong>I-B:</strong> Financiamentos concedidos durante a recuperação judicial (DIP financing);<br>3. <strong>I-C:</strong> Créditos em dinheiro objeto de <strong>restituição</strong> (art. 86);<br>4. <strong>I-D:</strong> Remuneração do Administrador Judicial e de seus auxiliares, despesas do Comitê e créditos trabalhistas por serviços prestados após a falência;<br>5. <strong>I-E:</strong> Obrigações resultantes de atos jurídicos válidos na recuperação judicial (art. 67) ou pós-falência;<br>6. <strong>II:</strong> Quantias fornecidas à massa falida pelos credores;<br>7. <strong>III:</strong> Despesas de arrecadação, administração, leilão e custas da falência;<br>8. <strong>IV:</strong> Custas judiciais de ações em que a massa tenha sido vencida;<br>9. <strong>V:</strong> Tributos relativos a fatos geradores posteriores à decretação da falência.',
                    exemplo: 'Salários dos funcionários que trabalharam nos últimos 3 meses antes da falência (até 5 salários mínimos) são pagos de imediato com dinheiro em caixa como extraconcursais (inciso I-A), antes mesmo de pagar a dívida trabalhista antiga ou tributos.'
                  },
                  {
                    id: 'emp-5-16',
                    titulo: 'Classificação dos Créditos Concursais (Art. 83): A Rigorosa Hierarquia Falimentar',
                    fundamento: 'Art. 83 da Lei nº 11.101/2005 (Atualizado pela Lei nº 14.112/2020)',
                    conteudo: 'Satisfeitos os créditos extraconcursais do art. 84, o saldo remanescente do ativo apurado paga os <strong>créditos concursais</strong> rigorosamente nesta ordem:<br><br>1º — <strong>Trabalhistas</strong> (limitados a <strong>150 salários mínimos</strong> por credor) e decorrentes de <strong>acidentes de trabalho</strong> (sem limite);<br>2º — <strong>Garantia Real</strong> (hipoteca, penhor, anticrese) <strong>até o valor do bem gravado</strong>;<br>3º — <strong>Tributários</strong> (impostos, taxas, contribuições), excluídas as multas fiscais;<br>4º — <strong>Quirografários</strong> (fornecedores sem garantia, saldo trabalhista que ultrapassar 150 salários mínimos e saldo não coberto da garantia real);<br>5º — <strong>Multas</strong> contratuais, pecuniárias por infrações penais ou administrativas, inclusive multas tributárias;<br>6º — <strong>Subordinados</strong> (créditos de sócios e administradores sem vínculo empregatício);<br>7º — <strong>Juros vencidos após a falência</strong> (nos termos do art. 124).<br><br><em>NOTA HISTÓRICA:</em> Os antigos incisos IV e V (privilégios especial e geral) foram <strong>revogados</strong> pela Lei nº 14.112/2020.',
                    exemplo: 'Ex-gerente com crédito trabalhista de 180 salários mínimos: recebe até 150 salários mínimos na 1ª classe privilegiada. Os 30 salários mínimos restantes serão pagos na 4ª classe (quirografários).'
                  },
                  {
                    id: 'emp-5-17',
                    titulo: 'Roteiro Integrado: Do Pedido de Falência ao Rateio e Tabela de Prazos para Memorizar',
                    fundamento: 'Fluxo Procedimental Completo dos Arts. 94 a 153 da Lei nº 11.101/2005',
                    conteudo: '<strong>Resumo Prático do Fluxo Falimentar:</strong><br>1. Pedido pelo credor (Art. 94) ou autofalência (Arts. 105 a 107);<br>2. Citação do devedor com prazo de <strong>10 dias</strong> para contestar, pedir RJ ou efetuar depósito elisivo;<br>3. Sentença que decreta a quebra (Agravo) ou denega (Apelação);<br>4. Juiz fixa <strong>Termo Legal</strong> (retroação de até 90 dias);<br>5. Devedor junta lista de credores em <strong>5 dias</strong>; credores habilitam-se perante o AJ em <strong>15 dias</strong>;<br>6. AJ apura ineficácia objetiva (Art. 129) ou move ação revocatória por fraude (Art. 130 em até <strong>3 anos</strong>);<br>7. Arrecadação e leilão dos bens do ativo;<br>8. Pagamento prioritário das <strong>restituições e extraconcursais (Art. 84)</strong>;<br>9. Pagamento dos <strong>concursais (Art. 83)</strong> pelo rateio pro rata até esgotar o ativo apurado.<br><br><strong>Prazos Indispensáveis para Exames:</strong><br>• Defesa pré-falimentar: 10 dias;<br>• Relação de credores pelo falido: 5 dias;<br>• Termo legal máximo: 90 dias;<br>• Ação revocatória: 3 anos da sentença falimentar;<br>• Prescrição da responsabilidade do sócio (Art. 82): 2 anos do encerramento da falência;<br>• Habilitação máxima de crédito na falência: 3 anos da sentença (art. 10, § 10).',
                    exemplo: 'O domínio da sucessão procedimental — citação (10d) -> termo legal (90d) -> revocatória (3 anos) -> art. 84 -> art. 83 — é o roteiro completo de aprovação em Direito Empresarial.'
                  }
                ]
              }
            ]
          }
        ]
      }
    };
window.MATERIAS_DIREITO = MATERIAS_DIREITO;
