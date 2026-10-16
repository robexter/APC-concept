/* Banco CIC V1.2: independente do Quiz, 30 itens; fonte manual Rev.01 (2024). */
window.APC_CIC = [
  {
    "section": "fundamentos",
    "q": "Duas CVs se aproximam de LMAX e exigem ajustes diferentes na mesma MV. Qual conclusão é sustentada pelo guia?",
    "options": [
      "Uma CV perde validade ao ultrapassar a outra.",
      "O controlador precisa conciliar restrições e prioridades.",
      "A MV passa automaticamente à condição de DV.",
      "A matriz passa a fornecer ganho e tempo de resposta."
    ],
    "correct": 1,
    "why": "O APC é multivariável e considera restrições; o manual não fornece o solucionador nem os ganhos completos.",
    "source": "pp. 3–6"
  },
  {
    "section": "fundamentos",
    "q": "Uma célula da matriz indica P− e a CV atinge LMAX. Como interpretar esse canal?",
    "options": [
      "É um canal de controle com efeito inverso.",
      "A influência negativa deixa de participar do modelo.",
      "É influência negativa considerada somente para predição.",
      "O APC deve alterar o setpoint da CV diretamente."
    ],
    "correct": 2,
    "why": "P− representa efeito negativo apenas preditivo para a combinação da matriz.",
    "source": "p. 6"
  },
  {
    "section": "fundamentos",
    "q": "A CV está dentro da faixa de engenharia, mas fora do limite operacional escolhido. Qual leitura é correta?",
    "options": [
      "A faixa de engenharia substitui o limite de operação.",
      "O desvio operacional continua relevante para o APC.",
      "Não existe violação enquanto o sensor transmitir valor.",
      "O limite operacional só existe após um desligamento."
    ],
    "correct": 1,
    "why": "Limites operacionais podem ser mais restritos que os limites de engenharia, conforme o manual.",
    "source": "p. 4"
  },
  {
    "section": "fundamentos",
    "q": "Um operador observa ROC Down numa MV durante correção. O que a indicação permite concluir?",
    "options": [
      "A MV foi transformada em variável inferencial.",
      "O modelo declarou todas as CVs indisponíveis.",
      "A comunicação entre PCWS e SDCD foi interrompida.",
      "O movimento decrescente está limitado em taxa."
    ],
    "correct": 3,
    "why": "ROC Down indica limite da taxa de movimentação descendente da MV.",
    "source": "p. 13"
  },
  {
    "section": "fundamentos",
    "q": "Após desligar o APC, o status de modo de uma malha ainda não mudou. Qual interpretação é compatível?",
    "options": [
      "Pode haver atraso de atualização de RCAS para AUT/MAN.",
      "A permanência momentânea prova falha do transmissor.",
      "A malha mudou de CV para MV por imposição do APC.",
      "O operador precisa necessariamente alterar o PFE."
    ],
    "correct": 0,
    "why": "O documento admite até três minutos para atualização do status RCAS após desligamento.",
    "source": "p. 11"
  },
  {
    "section": "fundamentos",
    "q": "Uma CV aparece como Pred Only na interface. Como interpretar antes de atribuir-lhe uma correção?",
    "options": [
      "O estado comprova falha do cálculo inferencial.",
      "A variável foi retirada das matrizes do controlador.",
      "A participação preditiva não equivale à ação de controle.",
      "O APC precisa colocar todas as MVs em MAN."
    ],
    "correct": 2,
    "why": "Pred Only é distinto da utilização do canal para controle direto da CV.",
    "source": "pp. 13–14"
  },
  {
    "section": "carga",
    "q": "Carga/Conversor aumenta RV e TIC39031 se aproxima de LMAX, enquanto RV equivalente segue dentro da faixa. Qual decisão é consistente?",
    "options": [
      "Manter a maximização de RV sem observar TIC39031.",
      "Retirar TIC39031 das CVs para manter a incorporação.",
      "Usar FIC39152 como comando direto de RV.",
      "Conter MV1 conforme a restrição térmica."
    ],
    "correct": 3,
    "why": "O LMAX da temperatura da fase densa pode impedir o aumento de MV1; tabela 5 descreve reduzir MV1.",
    "source": "pp. 3, 6, 8"
  },
  {
    "section": "carga",
    "q": "A vazão geral FIC39152 varia e o operador nota alteração na predição. O que melhor explica?",
    "options": [
      "A vazão geral participa como distúrbio modelado.",
      "FIC39152 é uma segunda MV de incorporação de RV.",
      "A vazão geral passou a ser CV por mudança da carga.",
      "O movimento comprova falha do canal TIC39031."
    ],
    "correct": 0,
    "why": "FIC39152 é uma DV na configuração do Carga/Conversor.",
    "source": "pp. 3–4"
  },
  {
    "section": "carga",
    "q": "A CV de RV equivalente atinge LMAX antes da temperatura. O que determina a filosofia descrita?",
    "options": [
      "Apenas TIC39031 pode restringir FIC39252SV.",
      "A incorporação de RV deve respeitar também CV2.",
      "O objetivo de otimização substitui o limite de RV.",
      "A CV2 só pode ser tratada pela vazão total da carga."
    ],
    "correct": 1,
    "why": "CV1 e CV2 impõem limites ao objetivo de incorporar RV.",
    "source": "pp. 4, 8"
  },
  {
    "section": "carga",
    "q": "O APC está disponível, mas inicia-se uma campanha CAP na U-32. Qual condição consta do guia?",
    "options": [
      "Aumentar o limite de engenharia de RV equivalente.",
      "Manter a aplicação até alcançar a temperatura máxima.",
      "Desligar o Carga/Conversor nessa condição.",
      "Deixar MV1 em otimização apenas preditiva."
    ],
    "correct": 2,
    "why": "A campanha CAP é condição documentada para desligamento do subcontrolador.",
    "source": "p. 8"
  },
  {
    "section": "carga",
    "q": "Uma MV é reduzida e TIC39031 não responde no mesmo instante. Como avaliar a matriz?",
    "options": [
      "Ela fornece sinal da influência, não o tempo exato.",
      "Ela obriga que a temperatura responda instantaneamente.",
      "Ela só é válida quando TIC39031 estiver acima de LMAX.",
      "Ela define automaticamente a magnitude em °C por m³/d."
    ],
    "correct": 0,
    "why": "A matriz qualitativa não apresenta parâmetros dinâmicos completos.",
    "source": "p. 6"
  },
  {
    "section": "carga",
    "q": "Duas CVs atingem seus limites máximos no Carga/Conversor. Qual observação sobre MV1 é mais segura?",
    "options": [
      "A MV1 deverá subir para corrigir simultaneamente as CVs.",
      "Cada CV precisa de uma MV exclusiva neste subcontrolador.",
      "A vazão total vira MV quando duas CVs ficam limitantes.",
      "A tabela prevê reduzir MV1 para ambas as violações."
    ],
    "correct": 3,
    "why": "A tabela 5 lista redução de MV1 nas duas condições de LMAX; isso não estima o resultado real.",
    "source": "p. 8"
  },
  {
    "section": "topo",
    "q": "Ao elevar a temperatura do topo, PFE e A90 inferidos também sobem. Qual combinação de leitura é correta?",
    "options": [
      "A elevação só interessa quando o PFE estiver inválido.",
      "A recuperação de nafta compete com limites de qualidade.",
      "O A90 é uma DV, portanto não restringe temperatura.",
      "O refluxo de topo deixa de ser CV nesta condição."
    ],
    "correct": 1,
    "why": "A estratégia busca maximizar nafta, respeitando PFE e A90.",
    "source": "pp. 3, 5–6"
  },
  {
    "section": "topo",
    "q": "Na E-3901 o PFE está dentro do limite, mas a vazão de refluxo de topo fica abaixo do LMIN. O que isso demonstra?",
    "options": [
      "O limite de PFE dispensa o controle das outras CVs.",
      "O refluxo baixo comprova erro na inferência de PFE.",
      "Uma segunda restrição pode limitar a otimização.",
      "O refluxo de topo torna-se MV para corrigir A90."
    ],
    "correct": 2,
    "why": "O subcontrolador deve considerar também CV5 FIC39179 e suas ações documentadas.",
    "source": "pp. 5, 8"
  },
  {
    "section": "topo",
    "q": "O APC prevê efeito de MV3 sobre PFE com P+. Qual afirmação descreve corretamente a matriz?",
    "options": [
      "MV3 atua diretamente para corrigir o PFE nessa célula.",
      "PFE deixa de ser previsto quando MV3 é alterada.",
      "P+ determina obrigatoriamente maior vazão no circuito.",
      "A relação positiva é usada na predição, não no controle."
    ],
    "correct": 3,
    "why": "O sinal P+ na combinação MV3/PFE é somente preditivo.",
    "source": "p. 6"
  },
  {
    "section": "topo",
    "q": "Para refluxo de topo abaixo do LMIN, qual ordem aparece na tabela 6?",
    "options": [
      "Primeiro reduzir MV3 e depois reduzir MV2.",
      "Primeiro aumentar MV2 e depois reduzir MV3.",
      "Primeiro reduzir MV2 e depois elevar MV3.",
      "Primeiro aumentar MV3 e depois aumentar MV2."
    ],
    "correct": 0,
    "why": "A tabela 6 registra 1º reduzir MV3 e 2º reduzir MV2.",
    "source": "p. 8"
  },
  {
    "section": "topo",
    "q": "A abertura de hot bypass aproxima-se do LMAX antes do PFE. Qual raciocínio é sustentado?",
    "options": [
      "O hot bypass pode ser ignorado se PFE estiver válido.",
      "A abertura é DV e nunca restringe o topo.",
      "A CV7 também pode limitar uma correção do APC.",
      "PFE e hot bypass são sempre a mesma variável."
    ],
    "correct": 2,
    "why": "A CV7 está entre as restrições do subcontrolador de topo.",
    "source": "pp. 5–6"
  },
  {
    "section": "topo",
    "q": "O usuário quer usar a abertura FIC39175MV como se fosse vazão medida. Qual cautela didática é necessária?",
    "options": [
      "A abertura constitui necessariamente uma vazão já calculada.",
      "A abertura e a vazão não são grandezas equivalentes.",
      "A abertura substitui a temperatura de retorno do refluxo.",
      "A abertura define o PFE sem outras variáveis de processo."
    ],
    "correct": 1,
    "why": "A tag MV de posição da válvula não deve ser tratada como medição de vazão sem validação hidráulica.",
    "source": "p. 5 + inferência didática"
  },
  {
    "section": "e3907",
    "q": "A PVR está abaixo do LMAX e a matriz identifica P+ em MV5→PVR. Como aplicar a observação da página 7?",
    "options": [
      "O canal é preditivo nessa condição.",
      "O refluxo é o único atuador permitido da PVR.",
      "O canal transforma-se em uma variável manipulada adicional.",
      "A PVR pode ser removida das restrições de operação."
    ],
    "correct": 0,
    "why": "O canal do refluxo para PVR é preditivo abaixo do LMAX.",
    "source": "p. 7"
  },
  {
    "section": "e3907",
    "q": "A PVR excede LMAX e o operador consulta a matriz original P+. O que a nota da p. 7 acrescenta?",
    "options": [
      "O sinal da matriz deve ser reescrito como −.",
      "A PVR deixa de ser inferida nessa condição.",
      "MV5 passa a atuar como variável de distúrbio.",
      "O canal de refluxo passa a participar do controle."
    ],
    "correct": 3,
    "why": "O guia descreve uma exceção condicional: canal usado no controle com PVR acima de LMAX.",
    "source": "p. 7"
  },
  {
    "section": "e3907",
    "q": "O texto e a tabela do manual diferem sobre a prioridade para PVR alta. O que o módulo deve fazer?",
    "options": [
      "Usar sempre a tabela e eliminar a observação textual.",
      "Indicar a divergência e pedir validação técnica.",
      "Inverter o sinal da matriz para fazer as fontes coincidirem.",
      "Exibir uma ordem fixa sem revelar a diferença."
    ],
    "correct": 1,
    "why": "O módulo não pode homologar uma prioridade não conciliada pela documentação.",
    "source": "pp. 7, 9"
  },
  {
    "section": "e3907",
    "q": "Ao reduzir TIC39306, a estratégia documentada procura qual efeito na qualidade da nafta?",
    "options": [
      "Reduzir simultaneamente PVR e incorporação de butanos.",
      "Manter o intemperismo invariável em qualquer situação.",
      "Elevar a PVR respeitando as demais restrições.",
      "Deslocar o ponto de controle para a PIC39254A."
    ],
    "correct": 2,
    "why": "O texto descreve minimizar TIC39306 para maximizar PVR; demais restrições continuam válidas.",
    "source": "pp. 3, 7"
  },
  {
    "section": "e3907",
    "q": "O PVR e o intemperismo exigem ações diferentes sobre o refluxo. Qual interpretação é adequada?",
    "options": [
      "Existe potencial competição; verificar restrições e canal ativo.",
      "Uma das duas inferências deve ser sempre desabilitada.",
      "O refluxo deve ser mantido fixo, independentemente do caso.",
      "As propriedades têm necessariamente o mesmo sentido de correção."
    ],
    "correct": 0,
    "why": "A matriz e a tabela 7 ilustram interações multivariáveis; prioridade atual requer validação.",
    "source": "pp. 7, 9"
  },
  {
    "section": "e3907",
    "q": "Uma tela identifica TIC39314 enquanto outra usa TI39314 para CV10. Qual providência de projeto é justificada?",
    "options": [
      "Padronizar sem registro para TIC39314 em todas as telas.",
      "Excluir a CV10 do treinamento por completo.",
      "Trocar CV10 pela temperatura do prato 19.",
      "Registrar a divergência sem resolver por suposição."
    ],
    "correct": 3,
    "why": "As pp. 5 e 9 apresentam identificação/descrição divergente de CV10.",
    "source": "pp. 5, 9"
  },
  {
    "section": "e3908",
    "q": "A E-3908 reduz a temperatura de fundo e FY39200 se aproxima do LMIN. O que ocorre com a estratégia?",
    "options": [
      "A redução de temperatura deve continuar até o mínimo físico.",
      "O controlador deve ignorar FY39200 por ser somente DV.",
      "A restrição de refluxo/carga pode limitar nova redução.",
      "O sistema deve aumentar obrigatoriamente a vazão de RV."
    ],
    "correct": 2,
    "why": "A otimização de energia deve respeitar CV12; a tabela 8 prevê aumentar MV6 abaixo de LMIN.",
    "source": "pp. 4–5, 9"
  },
  {
    "section": "e3908",
    "q": "A PIC39254AMV se aproxima do limite mínimo durante a otimização. Qual ação está listada para corrigir LMIN?",
    "options": [
      "Aumentar MV6 (TIC39332SV).",
      "Reduzir MV6 (TIC39332SV).",
      "Desabilitar FY39200 da matriz.",
      "Aumentar MV5 (FIC39196SV)."
    ],
    "correct": 0,
    "why": "A tabela 8 indica aumentar MV6 quando CV13 cai abaixo de LMIN.",
    "source": "p. 9"
  },
  {
    "section": "e3908",
    "q": "A matriz da E-3908 mostra + para FY39200 e PIC39254AMV sob MV6. O que se pode deduzir?",
    "options": [
      "Ambas respondem sempre com a mesma rapidez.",
      "As duas CVs tendem a subir quando MV6 sobe.",
      "A resposta quantitativa é idêntica nas duas CVs.",
      "As duas CVs não precisam de limites operacionais."
    ],
    "correct": 1,
    "why": "O sinal + mostra direção positiva em ambas, não magnitude ou tempo.",
    "source": "p. 7"
  },
  {
    "section": "e3908",
    "q": "O usuário solicita estimativa de energia economizada em kW apenas com a matriz. Qual resposta é tecnicamente sustentada?",
    "options": [
      "Pode-se converter diretamente °C em kW usando o LMIN.",
      "A faixa de engenharia contém o consumo específico da coluna.",
      "O efeito em kW é igual ao valor da razão refluxo/carga.",
      "Faltam dados e modelos para quantificar a economia."
    ],
    "correct": 3,
    "why": "O manual descreve estratégia, mas não fornece ganhos ou modelo energético para estimar kW.",
    "source": "pp. 4–7"
  },
  {
    "section": "e3908",
    "q": "FY39200 está acima do LMAX, mas a temperatura de fundo já foi reduzida. Qual ação a tabela associa a essa violação?",
    "options": [
      "Aumentar a temperatura de fundo para elevar FY39200.",
      "Desconsiderar FY39200 e atuar apenas em PIC39254A.",
      "Reduzir MV6 para corrigir o LMAX de FY39200.",
      "Ajustar MV4 para reduzir o refluxo da E-3908."
    ],
    "correct": 2,
    "why": "A tabela 8 indica reduzir MV6 para LMAX de CV12.",
    "source": "p. 9"
  },
  {
    "section": "e3908",
    "q": "A estratégia econômica recomenda reduzir TIC39332, mas CV13 está abaixo de LMIN. O que explica a reversão do movimento?",
    "options": [
      "A restrição exige aumento de MV6, apesar do objetivo econômico.",
      "O objetivo energético elimina o limite mínimo da válvula.",
      "A CV13 deixou de representar a abertura PIC39254A.",
      "O controlador escolhe uma MV externa à E-3908."
    ],
    "correct": 0,
    "why": "O limite de CV13 prevalece sobre a tendência econômica; a tabela 8 apresenta aumentar MV6.",
    "source": "pp. 4, 9"
  }
];
