/* ==========================================================================
       BANCO DE QUESTÕES ESTILO OAB (25 QUESTÕES)
       ========================================================================== */
    const QUESTOES = [
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Ao final do sumário de culpa, o juiz considerou provada a materialidade do homicídio doloso e presentes indícios suficientes de autoria, determinando a submissão de Carlos ao plenário. A defesa pretende recorrer. Assinale o recurso e prazo legal:',
        opcoes: ['Apelação, no prazo de 5 dias corridos.', 'RESE, no prazo de 5 dias corridos.', 'RESE, no prazo de 2 dias corridos.', 'Embargos de Declaração, em 5 dias.'],
        correta: 1,
        comentarios: ['Incorreto: Apelação cabe da impronúncia ou absolvição sumária (art. 416).', 'CORRETO! Contra a pronúncia cabe RESE (art. 581, IV do CPP) no prazo de 5 dias corridos (art. 586).', 'Incorreto: 2 dias é o prazo das razões do RESE (art. 588).', 'Incorreto: Embargos têm prazo de 2 dias e sanam omissão.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Para a sessão plenária do Júri foram sorteados 25 jurados, mas apenas 14 compareceram. O magistrado instalou a sessão e sorteou os 7 jurados. Essa sessão:',
        opcoes: ['É válida, pois o Conselho de Sentença necessita de 7 jurados.', 'É nula de pleno direito (nulidade absoluta) por violação ao quórum mínimo de 15 jurados presentes.', 'É anulável apenas se a defesa comprovar prejuízo concreto.', 'Poderia ser realizada se houvesse concordância do MP.'],
        correta: 1,
        comentarios: ['Incorreto: Exige-se presença de pelo menos 15 para abrir os trabalhos.', 'CORRETO! O art. 463 exige quórum mínimo de 15 presentes sob pena de nulidade absoluta (art. 564, III, i).', 'Incorreto: O quórum de 15 é garantia de ordem pública indeclinável.', 'Incorreto: As partes não podem transigir sobre quórum de instalação.']
      },
      {
        materia: 'Nulidades', materiaId: 1,
        enunciado: 'Réu foi processado e condenado por crime punido com reclusão sem que nenhum advogado ou defensor público atuasse em sua defesa. Conforme a Súmula 523 do STF:',
        opcoes: ['A falta de defesa constitui nulidade absoluta do processo.', 'Constitui nulidade relativa exigindo prova de prejuízo.', 'Constitui mera irregularidade sanável.', 'Só enseja anulação após trânsito em julgado em revisão criminal.'],
        correta: 0,
        comentarios: ['CORRETO! Súmula 523 do STF: "No processo penal, a falta da defesa constitui nulidade absoluta; mas a sua deficiência só o anulará se houver prova de prejuízo para o réu."', 'Incorreto: Falta de defesa é vício insanável absoluto.', 'Incorreto: Viola a garantia basilar da ampla defesa.', 'Incorreto: Pode ser reconhecida de imediato em qualquer grau.']
      },
      {
        materia: 'Nulidades', materiaId: 1,
        enunciado: 'Uma nulidade relativa ocorreu na audiência de instrução do procedimento ordinário. A defesa não se manifestou na audiência e permaneceu silente nas alegações finais. Conforme o CPP:',
        opcoes: ['A nulidade poderá ser arguida a qualquer momento.', 'Considerar-se-á convalidada/sanada a nulidade em razão da preclusão temporal.', 'O juiz deve anular o processo de ofício.', 'A matéria não preclui por envolver ação pública.'],
        correta: 1,
        comentarios: ['Incorreto: Arguição a qualquer tempo é prerrogativa das nulidades absolutas.', 'CORRETO! Pelos arts. 571, II e 572, I do CPP, a ausência de arguição oportuna convalida a nulidade relativa.', 'Incorreto: As nulidades relativas não são conhecidas de ofício se preclusas.', 'Incorreto: As regras de saneamento do art. 572 incidem integralmente.']
      },
      {
        materia: 'Teoria dos Recursos', materiaId: 2,
        enunciado: 'Após ser condenado, o réu assinou pessoalmente termo de renúncia ao direito de recorrer. Seu advogado constituído interpôs apelação no 5º dia. Diante do conflito de vontades:',
        opcoes: ['Prevalece a vontade do réu, não devendo o recurso ser conhecido.', 'Prevalece a atuação do defensor técnico (Súmula 705 do STF), devendo o recurso ser processado.', 'O processo deve ser extinto sem julgamento de mérito.', 'Exige-se autorização do juiz da causa para validar a apelação.'],
        correta: 1,
        comentarios: ['Incorreto: A renúncia do réu leigo não sobrepuja a defesa técnica.', 'CORRETO! Súmula 705 do STF: "A renúncia do réu ao direito de recorrer não inibe a atuação do defensor técnico, proferida no prazo legal."', 'Incorreto: O recurso deve ser regularmente conhecido e julgado.', 'Incorreto: Não depende de autorização discricionária judicial.']
      },
      {
        materia: 'Teoria dos Recursos', materiaId: 2,
        enunciado: 'Dois réus foram condenados em concurso pelo mesmo crime. Apenas um recorreu e o Tribunal o absolveu por considerar atípico o fato. Nos termos do art. 580 do CPP:',
        opcoes: ['A decisão favorável não aproveita ao corréu que não recorreu.', 'A decisão favorável aproveita ao corréu, pois o fundamento não é exclusivamente pessoal (efeito extensivo).', 'O corréu só se beneficia se ajuizar nova ação autônoma.', 'A extensão de efeitos depende de requerimento do MP.'],
        correta: 1,
        comentarios: ['Incorreto: O art. 580 prevê o efeito extensivo no concurso de agentes.', 'CORRETO! Art. 580 do CPP: a decisão de recurso interposto por um dos réus, fundada em motivos não exclusivamente pessoais, aproveita aos corréus.', 'Incorreto: A extensão é automática pelo próprio Tribunal.', 'Incorreto: Independe de aquiescência ministerial.']
      },
      {
        materia: 'Teoria dos Recursos', materiaId: 2,
        enunciado: 'O Ministério Público interpôs apelação contra sentença absolutória. Após a distribuição no Tribunal, o promotor protocolou pedido de desistência recursal. O Tribunal deverá:',
        opcoes: ['Homologar a desistência, em homenagem à voluntariedade recursal.', 'Indeferir a desistência, pois o Ministério Público não pode desistir de recurso interposto (art. 576 do CPP).', 'Arquivar o processo de plano.', 'Intimar o réu para saber se ele concorda com a desistência.'],
        correta: 1,
        comentarios: ['Incorreto: A voluntariedade recursal do MP cessa após a interposição.', 'CORRETO! O art. 576 do CPP estabelece expressamente que o MP não pode desistir do recurso que haja interposto (indisponibilidade da ação pública).', 'Incorreto: O Tribunal deve julgar o mérito recursal.', 'Incorreto: A concordância do réu é irrelevante frente à vedação legal.']
      },
      {
        materia: 'RESE', materiaId: 3,
        enunciado: 'O magistrado rejeitou a denúncia oferecida pelo Ministério Público por entender inepta a petição inicial. Qual recurso deve ser interposto pelo órgão acusador?',
        opcoes: ['Apelação Criminal, com base no art. 593, I.', 'Recurso em Sentido Estrito (RESE), pelo art. 581, I do CPP.', 'Carta Testemunhável no prazo de 48 horas.', 'Agravo de Instrumento subsidiário.'],
        correta: 1,
        comentarios: ['Incorreto: Apelação é recurso residual subsidiário.', 'CORRETO! O art. 581, I do CPP prevê expressamente o cabimento de RESE da decisão que "não receber a denúncia ou a queixa".', 'Incorreto: Carta Testemunhável só cabe quando o recurso é denegado.', 'Incorreto: Não existe agravo de instrumento no processo penal comum.']
      },
      {
        materia: 'RESE', materiaId: 3,
        enunciado: 'A defesa interpôs RESE contra a pronúncia e o juiz de 1º grau denegou o recurso (não o admitiu). Contra essa decisão que obsta o RESE, cabe:',
        opcoes: ['Apelação em 5 dias.', 'Carta Testemunhável no prazo de 48 horas (arts. 639 e 640 do CPP).', 'Correição Parcial em 10 dias.', 'Embargos de divergência.'],
        correta: 1,
        comentarios: ['Incorreto: Apelação não é a via para destrancar RESE.', 'CORRETO! Art. 639 do CPP: cabe Carta Testemunhável da decisão que denegar o recurso ou obstar seu seguimento, no prazo de 48 horas (art. 640).', 'Incorreto: Há recurso típico próprio previsto na lei (Carta Testemunhável).', 'Incorreto: Embargos de divergência são exclusivos de instâncias superiores.']
      },
      {
        materia: 'RESE', materiaId: 3,
        enunciado: 'Interposto o RESE e apresentadas as contrarrazões, os autos vão à conclusão do juiz. Este reconhece o equívoco da pronúncia e desclassifica o crime. O magistrado exerceu:',
        opcoes: ['Poder de polícia jurisdicional.', 'Juízo de retratação (efeito regressivo), previsto expressamente no art. 589 do CPP.', 'Usurpação de competência do Tribunal.', 'Mutatio libelli em 2º grau.'],
        correta: 1,
        comentarios: ['Incorreto: Não se trata de poder de polícia.', 'CORRETO! Art. 589 do CPP: no RESE, o juiz pode se retratar e reformar sua própria decisão (efeito regressivo).', 'Incorreto: Trata-se de expressa prerrogativa legal do juiz a quo.', 'Incorreto: É ato privativo do juízo de retratação recursal.']
      },
      {
        materia: 'Apelação', materiaId: 4,
        enunciado: 'Em julgamento pelo Júri, os jurados condenaram o réu, mas o juiz presidente calculou a pena em 18 anos aplicando agravante inexistente nos autos. A defesa apelou pelo art. 593, III, "c". O Tribunal deverá:',
        opcoes: ['Anular o júri e marcar novo julgamento popular.', 'Retificar diretamente a dosimetria da pena sem anular o júri (art. 593, §2º do CPP).', 'Absolver o acusado de imediato.', 'Determinar que os jurados refaçam o cálculo da pena.'],
        correta: 1,
        comentarios: ['Incorreto: Novo júri só ocorre nas alíneas "a" e "d" do art. 593, III.', 'CORRETO! No caso de erro na aplicação da pena (alínea c), o vício é exclusivo do juiz togado; o Tribunal retifica diretamente a pena (art. 593, §2º).', 'Incorreto: Os jurados decidiram pela condenação, impedindo absolvição.', 'Incorreto: Jurados não calculam dosimetria de pena.']
      },
      {
        materia: 'Apelação', materiaId: 4,
        enunciado: 'Somente o réu apelou da sentença condenatória de 4 anos de reclusão. Ao apreciar o recurso defensivo exclusivo, o Tribunal deu nova qualificação jurídica ao fato e aumentou a pena para 6 anos. A decisão do Tribunal:',
        opcoes: ['É lícita pela busca da verdade real.', 'Viola expressamente o princípio da "reformatio in pejus", proibida pelo art. 617 do CPP.', 'É válida apenas se houver parecer favorável do Procurador.', 'Configura reformatio in mellius.'],
        correta: 1,
        comentarios: ['Incorreto: A verdade real não se sobrepõe à vedação da reformatio in pejus.', 'CORRETO! Art. 617 do CPP: O tribunal não pode agravar a pena quando somente o réu houver apelado da sentença.', 'Incorreto: O parecer do MP não supre a ausência de recurso acusatório tempestivo.', 'Incorreto: Reformatio in pejus é a piora da situação do réu.']
      },
      {
        materia: 'Embargos de Declaração', materiaId: 4,
        enunciado: 'O magistrado de 1º grau condenou o acusado, omitindo-se por completo sobre a tese defensiva de prescrição e pedido de atenuante. Qual recurso e prazo para sanar a omissão?',
        opcoes: ['Apelação perante o Tribunal em 8 dias.', 'Embargos de Declaração perante o próprio juiz prolator no prazo de 2 dias corridos (art. 382 do CPP).', 'Habeas Corpus substitutivo em 24 horas.', 'RESE perante a Turma Julgadora em 5 dias.'],
        correta: 1,
        comentarios: ['Incorreto: A via célere perante o próprio órgão são os embargos.', 'CORRETO! Art. 382 do CPP: os embargos de declaração de 1º grau cabem contra omissão, contradição ou obscuridade no prazo de 2 dias corridos.', 'Incorreto: HC não é substitutivo de recurso ordinário cabível.', 'Incorreto: Não cabe RESE de sentença condenatória.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Na apelação contra decisão do Júri fundada em veredicto manifestamente contrário à prova dos autos (art. 593, III, "d"), caso o Tribunal dê provimento ao apelo:',
        opcoes: ['Deverá absolver o réu de imediato.', 'Sujeitará o réu a novo julgamento popular, não se admitindo, pelo mesmo motivo, segunda apelação (art. 593, §3º).', 'Deverá enviar o processo ao juiz singular para fixar pena alternativa.', 'Substituirá a vontade dos 7 jurados pela decisão unânime da câmara criminal.'],
        correta: 1,
        comentarios: ['Incorreto: A soberania dos veredictos impede absolvição direta pelo tribunal togado.', 'CORRETO! Art. 593, §3º do CPP: o tribunal sujeitará o réu a novo julgamento, vedada segunda apelação pelo mesmo motivo.', 'Incorreto: O caso permanece na competência do Tribunal do Júri.', 'Incorreto: O Tribunal togado não substitui os jurados no mérito da culpa.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Promotor de Justiça, nos debates em plenário, exibe cópia da pronúncia afirmando que o réu é culpado porque o juiz togado já o considerou autor provável. Essa conduta:',
        opcoes: ['É plenamente permitida pela livre manifestação das partes.', 'É vedada pelo art. 478, I do CPP (uso da pronúncia como argumento de autoridade) e enseja nulidade da sessão.', 'Só seria nula se o promotor fizesse perguntas ao réu.', 'Depende de prévio protesto do juiz presidente.'],
        correta: 1,
        comentarios: ['Incorreto: A lei veda expressamente a menção à pronúncia como argumento de autoridade.', 'CORRETO! Art. 478, I do CPP: sob pena de nulidade, é proibido fazer referências à decisão de pronúncia como argumento de autoridade.', 'Incorreto: A vedação alcança qualquer citação com força persuasiva indevida.', 'Incorreto: A nulidade é de ordem legal e compromete a isenção dos jurados.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Na elaboração do questionário aos jurados, o juiz presidente omitiu a pergunta "O jurado absolve o acusado?". Diante disso, segundo a Súmula 156 do STF:',
        opcoes: ['Ocorre nulidade relativa sujeita a preclusão.', 'Ocorre nulidade absoluta do julgamento pela falta de quesito obrigatório.', 'O julgamento é válido se a materialidade e autoria foram votadas afirmativamente.', 'A votação é suprida pelo juiz togado.'],
        correta: 1,
        comentarios: ['Incorreto: Não se trata de nulidade relativa.', 'CORRETO! Súmula 156 do STF: "É absoluta a nulidade do julgamento, pelo júri, por falta de quesito obrigatório."', 'Incorreto: O quesito genérico de absolvição é obrigatório mesmo com autoria e materialidade reconhecidas.', 'Incorreto: O juiz togado não substitui a resposta dos jurados.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Em relação ao desaforamento no Tribunal do Júri (art. 427 do CPP), assinale a alternativa que reflete o enunciado da Súmula 712 do STF:',
        opcoes: ['O desaforamento pode ser determinado de ofício sem ouvir as partes.', 'É nula a decisão que determina o desaforamento de processo da competência do júri sem audiência da defesa.', 'O desaforamento só pode ser requerido pelo Ministério Público.', 'O desaforamento transfere a causa para tribunal militar.'],
        correta: 1,
        comentarios: ['Incorreto: A defesa tem direito indeclinável ao contraditório prévio.', 'CORRETO! Súmula 712 do STF: "É nula a decisão que determina o desaforamento de processo da competência do júri sem audiência da defesa."', 'Incorreto: O desaforamento pode ser requerido pelo réu, querelante, assistente ou representado pelo juiz.', 'Incorreto: O desaforamento desloca para outra comarca da mesma região.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'No sorteio do Conselho de Sentença para a sessão do Júri, as partes têm o direito de recusar jurados sem motivar. Conforme o art. 468 do CPP, quantas recusas peremptórias cabem:',
        opcoes: ['Até 5 para cada parte.', 'Até 3 para a defesa e até 3 para a acusação.', 'Até 2 para a acusação e até 5 para a defesa.', 'Ilimitadas, desde que pagas custas.'],
        correta: 1,
        comentarios: ['Incorreto: O número máximo legal é 3.', 'CORRETO! Art. 468 do CPP: cada parte (defesa e depois acusação) pode recusar até 3 jurados sem motivar (recusas peremptórias).', 'Incorreto: O número é paritário de até 3 para cada polo.', 'Incorreto: Recusas imotivadas são limitadas a 3; as motivadas são ilimitadas.']
      },
      {
        materia: 'Nulidades', materiaId: 1,
        enunciado: 'O réu comparece em juízo com advogado para a audiência, declarando que o faz apenas para arguir a falta de citação formal. Conforme o art. 570 do CPP:',
        opcoes: ['A falta de citação estará sanada pelo comparecimento, mas o juiz adiará o ato se a irregularidade prejudicar direito da parte.', 'O processo é compulsoriamente extinto sem resolução de mérito.', 'A declaração do réu impede a convalidação da citação.', 'O magistrado deve decretar a revelia imediata.'],
        correta: 0,
        comentarios: ['CORRETO! Art. 570 do CPP: O comparecimento do réu supre a falta da citação; o juiz, contudo, ordenará a suspensão ou adiamento do ato se reconhecer prejuízo à defesa.', 'Incorreto: O comparecimento sana a relação processual.', 'Incorreto: O comparecimento produz sanação nos termos expressos do art. 570.', 'Incorreto: Tendo comparecido, não há revelia.']
      },
      {
        materia: 'Prazos Penais', materiaId: 2,
        enunciado: 'No Processo Penal, a regra geral de contagem dos prazos recursais e processuais (art. 798 do CPP) estabelece que:',
        opcoes: ['Os prazos são contados em dias úteis, excluindo-se sábados, domingos e feriados.', 'Os prazos são contados em dias corridos, não se interrompendo por férias, domingo ou feriado, prorrogando-se o vencimento se cair em dia não útil.', 'Os prazos sempre começam e terminam às sextas-feiras.', 'Apenas prazos superiores a 15 dias são corridos.'],
        correta: 1,
        comentarios: ['Incorreto: Contagem em dias úteis é regra do CPC, não do CPP!', 'CORRETO! Art. 798 do CPP: prazos contados em dias corridos; exclui-se o dia do começo e inclui-se o do vencimento, prorrogando-se se este cair em feriado ou fim de semana.', 'Incorreto: Não existe determinação de dias fixos da semana.', 'Incorreto: Todos os prazos processuais penais são corridos em regra.']
      },
      {
        materia: 'Apelação', materiaId: 4,
        enunciado: 'Nos procedimentos do Juizado Especial Criminal (JECRIM - Lei nº 9.099/95), o recurso de apelação possui prazo e forma específicos:',
        opcoes: ['5 dias para interpor e 8 dias para razões.', 'Prazo único de 10 dias, devendo as razões ser apresentadas juntamente com a petição de interposição.', '15 dias com razões diferidas ao Tribunal.', '48 horas para interposição.'],
        correta: 1,
        comentarios: ['Incorreto: 5+8 é a regra geral do rito comum ordinário (art. 593/600 CPP).', 'CORRETO! No JECRIM (art. 82, §1º da Lei 9.099/95), a apelação tem prazo unificado de 10 dias com interposição e razões simultâneas.', 'Incorreto: 15 dias é o prazo do ofendido (art. 598 CPP).', 'Incorreto: 48 horas é prazo de Carta Testemunhável (art. 640 CPP).']
      },
      {
        materia: 'Apelação', materiaId: 4,
        enunciado: 'O MP deixou transcorrer o prazo de 5 dias sem apelar da sentença absolutória. O ofendido, não habilitado como assistente, pretende recorrer. Ele poderá interpor:',
        opcoes: ['Não poderá recorrer por falta de prévia habilitação.', 'Apelação subsidiária no prazo de 15 dias corridos (art. 598 do CPP).', 'RESE no prazo de 2 dias.', 'Correição Parcial contra o promotor.'],
        correta: 1,
        comentarios: ['Incorreto: A lei garante expressamente o direito de recorrer ao ofendido não habilitado.', 'CORRETO! Art. 598 do CPP: o ofendido ou seus sucessores têm prazo especial de 15 dias após o término do prazo do MP para interpor apelação.', 'Incorreto: O recurso cabível de sentença absolutória é a apelação.', 'Incorreto: A via recursal típica é a apelação subsidiária.']
      },
      {
        materia: 'Tribunal do Júri', materiaId: 0,
        enunciado: 'Na 1ª fase do Júri, o juiz togado concluiu que não se trata de homicídio doloso, mas sim culposo na direção de veículo. O magistrado deve:',
        opcoes: ['Pronunciar o réu e deixar a decisão para os jurados.', 'Desclassificar a infração e remeter os autos ao juízo singular competente (art. 419 do CPP).', 'Absolver sumariamente por ausência de culpa.', 'Decretar a prisão preventiva de ofício.'],
        correta: 1,
        comentarios: ['Incorreto: O Júri só tem competência para crimes dolosos contra a vida.', 'CORRETO! Art. 419 do CPP: caso verifique não se tratar de crime doloso contra a vida, o juiz desclassifica e remete ao juiz singular.', 'Incorreto: Existindo indícios de homicídio culposo, há infração a ser processada pelo juízo competente.', 'Incorreto: Não cabe prisão sem os requisitos do art. 312 do CPP.']
      },
      {
        materia: 'Teoria dos Recursos', materiaId: 2,
        enunciado: 'O juiz de direito concedeu ordem de Habeas Corpus para trancar termo circunstanciado atípico. Por força do art. 574, I do CPP, essa decisão:',
        opcoes: ['Transita em julgado imediatamente se o MP não apelar.', 'Está obrigatoriamente sujeita a Recurso de Ofício (remessa necessária ao Tribunal).', 'Só pode ser revista por iniciativa da PGR.', 'Exige depósito recursal prévio.'],
        correta: 1,
        comentarios: ['Incorreto: Súmula 423 STF: sem o reexame de ofício, a sentença não transita em julgado.', 'CORRETO! Art. 574, I do CPP: os recursos serão voluntários, exceto na sentença que conceder Habeas Corpus, que sobre de ofício ao Tribunal.', 'Incorreto: A remessa necessária decorre diretamente da lei ao Tribunal.', 'Incorreto: Ação penal pública e HC são isentos de preparo.']
      },
      {
        materia: 'Nulidades', materiaId: 1,
        enunciado: 'No Tribunal do Júri, dois jurados conversaram entre si sobre as teses defensivas e manifestaram voto antes do término dos debates. Conforme o CPP:',
        opcoes: ['O ato é válido, pois os jurados possuem liberdade de consciência.', 'Ocorre nulidade absoluta do julgamento por quebra da incomunicabilidade dos jurados (art. 466, §1º e art. 564, III, j do CPP).', 'O juiz pode apenas advertir os jurados e prosseguir com a votação.', 'A nulidade fica sanada se o veredicto for unânime.'],
        correta: 1,
        comentarios: ['Incorreto: A incomunicabilidade sobre o processo é regra legal estrita.', 'CORRETO! Art. 466, §1º c/c art. 564, III, "j" do CPP: a manifestação de opinião ou comunicação sobre o processo gera nulidade do julgamento.', 'Incorreto: A violação macula a imparcialidade do Conselho de Sentença.', 'Incorreto: A quebra de sigilo do voto e incomunicabilidade é insanável.']
      }
    ,
      {
        materia: 'Processo Civil', materiaId: 3,
        enunciado: 'Em cumprimento de sentença por quantia certa, a devedora Alfa foi intimada na pessoa de seu advogado para pagar o valor de R$ 100.000,00. Transcorridos os 15 dias úteis, Alfa permaneceu inerte. O débito agora exigível é de:',
        opcoes: ['R$ 100.000,00, incidindo apenas juros moratórios.', 'R$ 110.000,00, ante a incidência de multa legal de 10%.', 'R$ 120.000,00, em virtude da incidência cumulada da multa de 10% e honorários de 10% (Art. 523, § 1º).', 'R$ 130.000,00, com multa, honorários e astreintes automáticas.'],
        correta: 2,
        comentarios: ['Incorreto: Há cominação expressa de penalidades no CPC.', 'Incorreto: A incidência não se restringe à multa.', 'CORRETO! Pelo Art. 523, § 1º do CPC/15, não ocorrendo pagamento voluntário no prazo de 15 dias úteis, o débito é acrescido cumulativamente de multa de 10% e de honorários advocatícios de 10%.', 'Incorreto: Astreintes são aplicáveis em obrigações de fazer/não fazer, não em pagar quantia certa.']
      },
      {
        materia: 'Processo Civil', materiaId: 3,
        enunciado: 'Citado em ação de execução de título extrajudicial por quantia certa, Bernardo pretende quitar a dívida imediatamente para usufruir de desconto nos honorários. Nos termos do Art. 827, § 1º do CPC, os honorários serão reduzidos pela metade se o pagamento ocorrer em:',
        opcoes: ['3 dias úteis.', '5 dias corridos.', '10 dias úteis.', '15 dias úteis.'],
        correta: 0,
        comentarios: ['CORRETO! O Art. 827, § 1º prevê que, no caso de integral pagamento no prazo de 3 (três) dias úteis contados da citação, o valor dos honorários advocatícios será reduzido pela metade.', 'Incorreto: Prazos processuais no CPC são em dias úteis e o prazo de pagamento é de 3 dias.', 'Incorreto: 10 dias é o prazo para impugnação expropriatória.', 'Incorreto: 15 dias é o prazo para embargos à execução.']
      },
      {
        materia: 'Direito Empresarial', materiaId: 4,
        enunciado: 'Empresa do setor têxtil teve deferido o processamento de sua Recuperação Judicial. Um banco credor pretende executar contrato de empréstimo garantido por cessão fiduciária de recebíveis. Nos termos do Art. 49, § 3º da Lei nº 11.101/2005:',
        opcoes: ['O crédito bancário submete-se à recuperação judicial na Classe II (garantia real).', 'O crédito não se submete aos efeitos da recuperação judicial (trava bancária), prevalecendo os direitos de propriedade sobre a coisa.', 'Todas as execuções fiduciárias são suspensas por 2 anos.', 'O juiz da recuperação pode cancelar a garantia fiduciária de ofício.'],
        correta: 1,
        comentarios: ['Incorreto: A cessão/alienação fiduciária não se equipara a penhor/hipoteca para fins concursais.', 'CORRETO! O Art. 49, § 3º da LRE estabelece que os credores com garantia fiduciária (trava bancária) não se submetem à recuperação judicial, prevalecendo os direitos de propriedade do fiduciário.', 'Incorreto: O stay period é de 180 dias e não atinge o fiduciário quanto à propriedade.', 'Incorreto: A supressão de garantias depende de anuência expressa do titular (Art. 50, § 1º).']
      },
      {
        materia: 'Direito Empresarial', materiaId: 4,
        enunciado: 'Sentença judicial decretou a falência da sociedade empresária Ômega Ltda. Contra essa decisão declaratória de falência, o recurso cabível previsto expressamente na Lei nº 11.101/2005 é:',
        opcoes: ['Apelação, no prazo de 15 dias.', 'Recurso em Sentido Estrito, em 5 dias.', 'Agravo de Instrumento.', 'Mandado de Segurança direto ao STJ.'],
        correta: 2,
        comentarios: ['Incorreto: Apelação só cabe contra a sentença que denega/indefere a falência.', 'Incorreto: RESE é recurso de processo penal.', 'CORRETO! O Art. 100 da Lei nº 11.101/2005 dispõe textualmente: \"Da decisão que decreta a falência cabe agravo de instrumento; da sentença que julga a improcedência do pedido cabe apelação.\"', 'Incorreto: Há recurso próprio previsto na lei especial, não cabendo mandado de segurança substitutivo.']
      }
    ];
window.QUESTOES = QUESTOES;
