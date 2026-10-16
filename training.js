/* APC U39 Concept V1.2 · Quiz revisto, cenários com recuperação condicional via app.js. */
window.APC_TRAINING = {
  "cases": [
    {
      "id": "carga",
      "title": "RV × temperatura do regenerador",
      "subtitle": "8 decisões • Carga/Conversor",
      "setting": "APC Carga/Conversor em serviço. A incorporação de RV avança e a temperatura TIC39031 se aproxima do LMAX.",
      "steps": [
        {
          "q": "Qual a prioridade do APC quando a temperatura projetada da fase densa ameaça ultrapassar LMAX?",
          "a": [
            "Manter a maximização de RV sem correções.",
            "Reduzir MV1 para respeitar o limite térmico.",
            "Elevar a carga total sem avaliar o distúrbio."
          ],
          "c": 1,
          "why": "A tabela 5 indica reduzir FIC39252SV para corrigir violação do LMAX de TIC39031 (p.8)."
        },
        {
          "q": "Que relação a matriz prevê ao elevar FIC39252SV?",
          "a": [
            "Fase densa e percentual de RV tendem a subir.",
            "A temperatura da fase densa diminui e o RV sobe.",
            "Ambas as variáveis controladas diminuem."
          ],
          "c": 0,
          "why": "A matriz da figura 1 apresenta + para ambas as CVs sob a MV vazão RV (p.6)."
        },
        {
          "q": "A FIC39152 sofre alteração. Como ela entra na estratégia?",
          "a": [
            "Como SP manipulado diretamente pelo APC.",
            "Como CV que precisa manter um target fixo.",
            "Como DV observada para antecipar perturbações."
          ],
          "c": 2,
          "why": "A vazão geral da carga é DV; seus efeitos conhecidos participam da predição (p.3–4)."
        },
        {
          "q": "A U-32 entra em campanha CAP. Qual a condição documentada?",
          "a": [
            "Desligar obrigatoriamente Carga/Conversor.",
            "Somente reduzir LMAX de RV equivalente.",
            "Manter APC, desde que FIC39152 não varie."
          ],
          "c": 0,
          "why": "Campanha CAP é condição explícita de desligamento obrigatório deste subcontrolador (p.8)."
        },
        {
          "q": "Durante carregamento de catalisador, o controle está disponível. O que determina o manual?",
          "a": [
            "Ligar automaticamente ao término da manobra.",
            "Manter APC desligado durante a atividade.",
            "Usar somente o canal de DV como controlador."
          ],
          "c": 1,
          "why": "O documento determina desligamento durante o carregamento; menciona retorno na próxima turma, entre 07 e 08h (p.8)."
        },
        {
          "q": "Como interpretar 720 °C na tabela do TIC39031?",
          "a": [
            "SP automático obrigatório em qualquer campanha.",
            "Limite de trip comprovado da proteção SIS.",
            "Limite máximo de engenharia na revisão consultada."
          ],
          "c": 2,
          "why": "720 °C é LMAX de engenharia no manual. Não há base para chamá-lo limite de trip (p.4)."
        },
        {
          "q": "O operador observa CV2 perto de LMAX, mas TIC39031 está estável. Que princípio deve considerar?",
          "a": [
            "Conferir o limite de RV equivalente primeiro.",
            "Apenas TIC39031 pode limitar a incorporação de RV.",
            "Desabilitar CV2 para manter a estratégia econômica."
          ],
          "c": 0,
          "why": "O subcontrolador possui duas CVs restritivas; U39PERC_RVEQ também pode limitar a MV (p.3–4, 8)."
        },
        {
          "q": "Após uma redução de MV1, o resultado não acompanha imediatamente a matriz. O que se pode afirmar?",
          "a": [
            "O atraso comprova falha irreversível no sensor TIC39031.",
            "Os sinais não determinam ganho nem tempo da resposta.",
            "O APC não utiliza o modelo da temperatura da fase densa."
          ],
          "c": 1,
          "why": "O guia informa modelos de resposta ao degrau, mas não apresenta sua parametrização dinâmica integral (p.6)."
        }
      ]
    },
    {
      "id": "topo",
      "title": "Recuperação de nafta × PFE",
      "subtitle": "8 decisões • Topo E-3901",
      "setting": "Topo E-3901 sob APC. A temperatura de topo aumenta e o PFE inferido caminha para seu limite superior.",
      "steps": [
        {
          "q": "Qual é a finalidade do aumento controlado do topo?",
          "a": [
            "Elevar a vazão de refluxo em qualquer situação.",
            "Recuperar nafta com respeito ao limite de PFE.",
            "Manter A90 sempre no limite mínimo da faixa."
          ],
          "c": 1,
          "why": "A filosofia da p.3 busca maximizar nafta pela temperatura do topo sem ultrapassar PFE."
        },
        {
          "q": "Qual efeito a matriz associa ao aumento de MV2?",
          "a": [
            "PFE e A90 sobem; refluxo de topo diminui.",
            "PFE diminui; A90 sobe; refluxo topo aumenta.",
            "PFE e A90 diminuem; refluxo não tem influência."
          ],
          "c": 0,
          "why": "Na figura 2, a linha da temperatura de topo é +,+,− nas três primeiras CVs (p.6)."
        },
        {
          "q": "A vazão de refluxo FIC39179 caiu abaixo do LMIN. Qual a primeira ação listada?",
          "a": [
            "Aumentar MV3, mantendo MV2 constante.",
            "Elevar MV2 e reduzir MV3 simultaneamente.",
            "Reduzir MV3, antes de reduzir MV2."
          ],
          "c": 2,
          "why": "A tabela 6 indica primeiro reduzir MV3 e em segundo lugar reduzir MV2 (p.8)."
        },
        {
          "q": "TIC39239 varia. Que papel possui na configuração?",
          "a": [
            "DV utilizada para predizer efeitos em CVs.",
            "MV com capacidade de comandar o refluxo.",
            "CV com alvo econômico independente."
          ],
          "c": 0,
          "why": "TIC39239 é distúrbio temperatura do refluxo circulante NCP (p.5–6)."
        },
        {
          "q": "Na matriz, MV3 × PFENC39INF tem P+. O que isso significa?",
          "a": [
            "A MV3 obrigatoriamente controla o PFE via PID.",
            "A influência é positiva e só de predição.",
            "O APC ignora a relação em seus cálculos."
          ],
          "c": 1,
          "why": "P+ é um canal positivo somente para predição naquele relacionamento (p.6)."
        },
        {
          "q": "PFE, A90 e temperatura de retorno limitam manobras diferentes. Como avaliar?",
          "a": [
            "Escolher apenas a CV que possui maior unidade.",
            "Tratar LMAX de PFE como indicação de segurança de fogo.",
            "Considerar todas as restrições disponíveis na otimização."
          ],
          "c": 2,
          "why": "A filosofia é multivariável: o APC respeita as CVs e suas restrições (p.3–6)."
        },
        {
          "q": "PFE ainda abaixo do LMAX, porém a abertura de hot bypass alcança um limite. Que regra prevalece?",
          "a": [
            "Aumentar a temperatura até PFE atingir LMAX, sem exceções.",
            "Considerar também a restrição de abertura de CV7.",
            "Tratar abertura hot bypass como DV, sem limites."
          ],
          "c": 1,
          "why": "A CV7 FIC39173MV integra a matriz e os limites do topo (p.5–6, 8)."
        },
        {
          "q": "A matriz mostra P+ de MV3 sobre A90. Como explicar uma correção de A90?",
          "a": [
            "P+ autoriza MV3 a controlar diretamente A90.",
            "A90 é eliminada das previsões na presença de P+.",
            "P+ prevê efeito, sem controle direto da CV."
          ],
          "c": 2,
          "why": "P indica uso somente preditivo para a combinação indicada na matriz (p.6)."
        }
      ]
    },
    {
      "id": "e3907",
      "title": "PVR × intemperismo do GLP",
      "subtitle": "8 decisões • E-3907",
      "setting": "APC E-3907 em serviço. A PVR inferida oscila próximo ao seu LMAX; o operador precisa interpretar canais P e prioridades.",
      "steps": [
        {
          "q": "A PVR está abaixo de seu LMAX. Como o canal FIC39196 → PVR opera?",
          "a": [
            "É preditivo, não controla diretamente a PVR.",
            "Corrige a PVR prioritariamente pelo refluxo.",
            "Fica bloqueado até atingir seu limite inferior."
          ],
          "c": 0,
          "why": "A observação da p.7 indica que abaixo de LMAX o modelo de refluxo para PVR é só predição."
        },
        {
          "q": "Que MV é usada para maximizar PVR nessa condição?",
          "a": [
            "Somente a temperatura do topo TI39314.",
            "O SP de temperatura TIC39306.",
            "O SP do refluxo FIC39196SV, independentemente da PVR."
          ],
          "c": 1,
          "why": "A filosofia do subcontrolador prevê minimizar TIC39306 para maximizar PVR, dentro das demais restrições (p.3, 7)."
        },
        {
          "q": "PVR ultrapassa o limite superior. Como fica o canal de refluxo?",
          "a": [
            "Continua limitado a predição em qualquer caso.",
            "É convertido em variável de distúrbio.",
            "Passa a participar das correções de controle."
          ],
          "c": 2,
          "why": "Acima do LMAX, a p.7 indica que o modelo refluxo → PVR deixa de ser apenas preditivo."
        },
        {
          "q": "Qual sequência é descrita no texto do manual para corrigir PVR alta?",
          "a": [
            "Cortar refluxo e depois atuar na temperatura.",
            "Aumentar refluxo e depois ignorar a PVR.",
            "Manter refluxo e desligar TIC39306."
          ],
          "c": 0,
          "why": "A observação textual da p.7 indica primeiro cortar refluxo e depois usar temperatura de fundo."
        },
        {
          "q": "A tabela 7 rotula as duas ações para PVR alta como “1º”. Como tratar?",
          "a": [
            "Criar prioridade sem registro de validação.",
            "Sinalizar divergência até conferir configuração.",
            "Usar sempre o maior movimento admissível."
          ],
          "c": 1,
          "why": "Há divergência documental entre sequência textual (p.7) e prioridades da tabela (p.9)."
        },
        {
          "q": "Que limitação têm PVR e intemperismo apresentados?",
          "a": [
            "São sempre medidas de analisador online.",
            "Têm suas equações integrais no manual.",
            "São inferências, sem equações informadas."
          ],
          "c": 2,
          "why": "Tags PVRNC39INF e INTGL39INF são inferências; o manual não publica equações."
        },
        {
          "q": "A CV10 possui tag diferente nas páginas 5 e 9. Como o treinamento deve apresentar?",
          "a": [
            "Registrar TI39314 / TIC39314 e pedir validação.",
            "Corrigir para qualquer uma sem documentar a fonte.",
            "Tratar a divergência como nova variável manipulada."
          ],
          "c": 0,
          "why": "Página 5 indica TI39314 e temperatura topo; p.9, TIC39314 e temperatura prato 3."
        },
        {
          "q": "A PVR está alta e a tabela 7 apresenta duas ações marcadas como 1º. Qual o cuidado apropriado?",
          "a": [
            "Considerar a primeira ação sempre a temperatura.",
            "Manter a ordem pendente até validação técnica.",
            "Apagar o sinal P+ da matriz durante o treinamento."
          ],
          "c": 1,
          "why": "Texto p.7 e tabela p.9 não expressam de forma idêntica a prioridade; não se deve inventar ordem operacional."
        }
      ]
    },
    {
      "id": "e3908",
      "title": "Economia de energia × restrições",
      "subtitle": "8 decisões • E-3908",
      "setting": "No APC da E-3908, TIC39332 é reduzida buscando menor consumo energético, enquanto FY39200 aproxima-se do limite mínimo.",
      "steps": [
        {
          "q": "Qual é a MV associada à otimização da E-3908?",
          "a": [
            "A temperatura de fundo TIC39332SV.",
            "A razão refluxo/carga FY39200.",
            "A abertura da válvula PIC39254AMV."
          ],
          "c": 0,
          "why": "TIC39332SV é a única MV definida para E-3908 no manual (p.5)."
        },
        {
          "q": "Que efeito o modelo prevê ao diminuir MV6?",
          "a": [
            "As duas CVs necessariamente aumentam.",
            "As duas CVs tendem a diminuir.",
            "A razão aumenta e a abertura diminui."
          ],
          "c": 1,
          "why": "Na figura 4, MV6 apresenta sinal positivo com ambas as CVs; redução da MV tende a reduzir CVs (p.7)."
        },
        {
          "q": "FY39200 se aproxima do LMIN. Que ação corretiva está listada?",
          "a": [
            "Reduzir ainda mais a temperatura de fundo.",
            "Aumentar o refluxo por MV5 da E-3907.",
            "Aumentar MV6 para defender a restrição."
          ],
          "c": 2,
          "why": "A tabela 8 indica aumentar TIC39332SV se FY39200 violar LMIN (p.9)."
        },
        {
          "q": "O APC deixou de reduzir a temperatura. Isso significa necessariamente falha?",
          "a": [
            "Não: uma CV pode ter atingido restrição ativa.",
            "Sim: otimização exige redução permanente da MV.",
            "Sim: a razão refluxo/carga deixa de importar."
          ],
          "c": 0,
          "why": "O objetivo econômico deve ser subordinado às restrições mínimas de FY39200 e PIC39254AMV (p.4)."
        },
        {
          "q": "O limite 15% da PIC39254AMV aparece como quê?",
          "a": [
            "Setpoint fixo do controlador de pressão.",
            "Limite mínimo de engenharia do manual.",
            "Percentual de abertura seguro em todo regime."
          ],
          "c": 1,
          "why": "A tabela da E-3908 apresenta 15–90% como limites de engenharia, não SP fixo (p.5)."
        },
        {
          "q": "É possível quantificar a economia a partir do guia de 15 páginas?",
          "a": [
            "Sim, basta diferença entre mínimo e máximo.",
            "Sim, pela matriz de sinais sem ganhos.",
            "Não: faltam modelos energéticos quantitativos."
          ],
          "c": 2,
          "why": "O manual traz filosofia e sinais, não ganhos dinâmicos nem balanços energéticos."
        },
        {
          "q": "Qual conceito impede reduzir indefinidamente TIC39332SV?",
          "a": [
            "Apenas a velocidade máxima de mudança da MV.",
            "A existência de restrições em FY39200 e PIC39254AMV.",
            "Somente a vazão de RV da U-32 na carga da U39."
          ],
          "c": 1,
          "why": "CV12 e CV13 possuem limites mínimos e limitam a otimização (p.4–5, 9)."
        },
        {
          "q": "O APC elevou TIC39332SV ao detectar uma CV abaixo de LMIN. Isso contradiz a economia?",
          "a": [
            "Sim, a MV precisa diminuir em qualquer situação.",
            "Sim, porque PIC39254AMV não é uma CV restritiva.",
            "Não: a restrição prevalece sobre a economia."
          ],
          "c": 2,
          "why": "A tabela 8 prevê elevar MV6 para corrigir violação de LMIN (p.9)."
        }
      ]
    }
  ],
  "questions": [
    [
      "fundamentos",
      "Qual é a diferença funcional entre MV e DV no CMVU39?",
      [
        "MV é atuada pelo APC; DV informa uma perturbação.",
        "MV mede a qualidade; DV envia SP aos controladores.",
        "MV delimita faixas; DV determina os limites das CVs.",
        "MV estima produtos; DV define o alvo econômico."
      ],
      0,
      "MV é manipulada; DV participa das previsões sem ser manipulada diretamente (manual p.4)."
    ],
    [
      "fundamentos",
      "O que o operador estabelece ao trabalhar com limites de operação?",
      [
        "Uma faixa definida dentro dos limites de engenharia.",
        "Uma faixa de trip independente do controle avançado.",
        "Uma faixa que substitui os limites de validade da CV.",
        "Uma faixa sempre igual aos extremos de engenharia."
      ],
      0,
      "Limites operacionais pertencem à faixa definida pela engenharia (p.4)."
    ],
    [
      "fundamentos",
      "A marca P− em uma célula da matriz significa que…",
      [
        "O efeito é negativo e usado apenas para predição.",
        "O efeito é negativo e comanda diretamente aquela CV.",
        "O efeito é positivo e limita apenas a taxa da MV.",
        "O canal não apresenta relação no modelo publicado."
      ],
      0,
      "P− significa influência negativa considerada apenas nas previsões (p.6)."
    ],
    [
      "fundamentos",
      "Como interpretar ROC Up exibido para uma MV no PCWS?",
      [
        "Movimento ascendente limitado pela taxa configurada.",
        "Setpoint da MV sem variável controlada habilitada.",
        "Canal negativo reservado para predição de qualidade.",
        "Variável acima do limite de engenharia registrado."
      ],
      0,
      "ROC Up indica movimento ascendente na máxima taxa admitida (p.13)."
    ],
    [
      "fundamentos",
      "O que uma condição Bad Critical comunica ao operador?",
      [
        "Uma falha crítica associada ao desligamento do APC.",
        "Uma CV fora de target mas com predição ainda válida.",
        "Uma MV em movimento lento por uma taxa restritiva.",
        "Uma variável desabilitada manualmente pelo operador."
      ],
      0,
      "Bad Critical representa variável crítica em falha e desligamento do APC (p.13)."
    ],
    [
      "fundamentos",
      "Qual afirmação descreve corretamente uma CV Pred Only?",
      [
        "É prevista pelo APC, mas não participa do controle.",
        "É escrita pelo APC como SP de uma malha auxiliar.",
        "Está necessariamente inválida para predição e controle.",
        "Opera no limite máximo da taxa de subida permitido."
      ],
      0,
      "Pred Only é uma CV considerada somente na predição (p.13)."
    ],
    [
      "fundamentos",
      "O que não se obtém das matrizes apresentadas no guia?",
      [
        "Ganhos e tempos completos da resposta dinâmica.",
        "Sentidos de efeito entre MVs e CVs documentadas.",
        "Canais reservados exclusivamente para predição.",
        "Relações modeladas em cada um dos subcontroladores."
      ],
      0,
      "O manual informa sinais, mas não o modelo quantitativo completo (p.6–7)."
    ],
    [
      "fundamentos",
      "Qual abordagem é apropriada diante de uma CV inferida?",
      [
        "Usar a inferência com verificação de sua validade.",
        "Tratá-la sempre como análise laboratorial instantânea.",
        "Dispensar a análise da qualidade das medições-base.",
        "Assumir que o manual divulga sua equação de cálculo."
      ],
      0,
      "PFE, A90, PVR e intemperismo são inferências; não há fórmulas integrais no guia (p.4–5)."
    ],
    [
      "carga",
      "Qual é a variável manipulada no APC Carga/Conversor?",
      [
        "FIC39252SV: vazão de RV da U-32.",
        "FIC39152: vazão total da carga U39.",
        "TIC39031: temperatura da fase densa.",
        "U39PERC_RVEQ: percentual equivalente de RV."
      ],
      0,
      "A tabela 1 define FIC39252SV como MV; as demais têm outras funções (p.4)."
    ],
    [
      "carga",
      "O aumento de FIC39252SV produz que tendência no modelo?",
      [
        "Aumento da temperatura e do RV equivalente previsto.",
        "Redução da fase densa e do percentual de RV equivalente.",
        "Elevação da fase densa e redução do RV equivalente.",
        "Redução da fase densa e elevação do RV equivalente."
      ],
      0,
      "A figura 1 mostra + para as duas CVs ao aumentar MV1 (p.6)."
    ],
    [
      "carga",
      "O APC busca mais RV, mas a TIC39031 se aproxima do LMAX. Qual lógica prevalece?",
      [
        "A restrição térmica limita a maximização da vazão de RV.",
        "Priorizar o objetivo econômico até que o valor atinja LMAX.",
        "Usar só o limite de RV equivalente durante esse movimento.",
        "Tratar TIC39031 como DV enquanto a fase densa estiver alta."
      ],
      0,
      "A tabela 5 prevê reduzir MV1 para corrigir TIC39031 acima do LMAX (p.8)."
    ],
    [
      "carga",
      "Qual é a função documentada da FIC39152 neste subcontrolador?",
      [
        "DV que informa a vazão total da carga da unidade.",
        "MV que altera diretamente a vazão de RV da U-32.",
        "CV que acompanha o percentual equivalente de RV.",
        "SP que comanda a temperatura da fase densa."
      ],
      0,
      "FIC39152 participa como distúrbio na previsão (p.4)."
    ],
    [
      "carga",
      "Qual condição exige desligar o APC Carga/Conversor segundo o guia?",
      [
        "Operação da U-32 em campanha CAP.",
        "Uma aproximação lenta da TIC39031 ao limite configurado.",
        "Uma oscilação leve de FIC39152 ainda na faixa de validade.",
        "Uma redução de MV1 para atender o limite de RV equivalente."
      ],
      0,
      "Campanha CAP é condição expressa de desligamento (p.8)."
    ],
    [
      "carga",
      "Durante carregamento de catalisador, qual instrução consta do guia?",
      [
        "Manter desligado o subcontrolador de Carga/Conversor.",
        "Manter o APC ligado enquanto a medição da fase densa for válida.",
        "Manter a MV1 fixa e continuar otimizando RV equivalente.",
        "Reabilitar o subcontrolador automaticamente ao concluir a carga."
      ],
      0,
      "A seção de condições especiais determina desligamento (p.8)."
    ],
    [
      "carga",
      "O que representa 720 °C na tabela da TIC39031?",
      [
        "Limite superior de engenharia na revisão analisada.",
        "Valor de trip confirmado do sistema instrumentado.",
        "Setpoint permanente recomendado para todo o ciclo.",
        "Temperatura-alvo obrigatória durante carga máxima."
      ],
      0,
      "720 °C é limite de engenharia, não comprovação de trip nem valor recomendado (p.4)."
    ],
    [
      "carga",
      "O processo exige alteração rápida da carga. Que cuidado prevê o texto?",
      [
        "Recomenda retirar Carga/Conversor durante a manobra.",
        "Reduzir o limite de engenharia antes de iniciar a variação.",
        "Manter o APC ativo apenas pelo canal de RV equivalente.",
        "Acionar automaticamente o APC a cada oscilação de carga."
      ],
      0,
      "O manual recomenda desligar o APC em subidas e descidas rápidas de carga (p.8)."
    ],
    [
      "topo",
      "Qual é a finalidade principal do subcontrolador Topo E-3901?",
      [
        "Recuperar mais nafta respeitando restrições de qualidade.",
        "Manter fixa a temperatura independentemente de produto.",
        "Aumentar refluxo sem considerar PFE e A90 inferidos.",
        "Reduzir continuamente o PFE independentemente de vazão."
      ],
      0,
      "A otimização busca maior recuperação respeitando o PFE e as demais CVs (p.3)."
    ],
    [
      "topo",
      "Como a matriz associa TIC39249SV ao PFE e A90?",
      [
        "Elevar o topo tende a aumentar PFE e A90 inferidos.",
        "Elevar o topo tende a diminuir PFE e A90 inferidos.",
        "Elevar o topo aumenta PFE, mas diminui o A90 inferido.",
        "Elevar o topo diminui PFE, mas aumenta o A90 inferido."
      ],
      0,
      "A figura 2 registra sinais positivos nos dois canais (p.6)."
    ],
    [
      "topo",
      "O que significa P+ entre MV3 e PFENC39INF?",
      [
        "Efeito positivo considerado somente na predição.",
        "Efeito negativo usado na correção direta do PFE.",
        "Efeito positivo que define um SP fixo para PFE.",
        "Efeito inexistente e omitido do cálculo do APC."
      ],
      0,
      "P+ indica predição positiva sem controle direto dessa relação (p.6)."
    ],
    [
      "topo",
      "Que papel tem TIC39239 no APC do topo da E-3901?",
      [
        "DV da temperatura do refluxo circulante NCP.",
        "MV que recebe o SP remoto da temperatura de topo.",
        "CV que fixa a abertura da válvula hot bypass.",
        "MV que controla a vazão da nafta craqueada."
      ],
      0,
      "TIC39239 consta como DV de temperatura do refluxo circulante NCP (p.5)."
    ],
    [
      "topo",
      "FIC39179 ficou abaixo do LMIN. Qual sequência consta da tabela 6?",
      [
        "Reduzir MV3 primeiro e depois reduzir MV2.",
        "Aumentar MV3 primeiro e depois aumentar MV2.",
        "Aumentar MV2 primeiro e depois reduzir MV3.",
        "Reduzir MV2 primeiro e depois aumentar MV3."
      ],
      0,
      "Para LMIN de FIC39179, a ordem é reduzir MV3 e depois MV2 (p.8)."
    ],
    [
      "topo",
      "Por que o aumento do topo pode ser limitado pelo PFE?",
      [
        "Maior recuperação pode incluir componentes menos voláteis.",
        "O PFE tende a cair quando frações mais pesadas vão ao topo.",
        "O PFE se mantém fixo quando a temperatura de topo aumenta.",
        "O refluxo sozinho elimina qualquer influência sobre o PFE."
      ],
      0,
      "A filosofia relaciona recuperação de nafta e PFE da fração no topo (p.3)."
    ],
    [
      "topo",
      "Qual CV é relacionada à abertura do hot bypass da E-3905?",
      [
        "FIC39173MV: abertura da válvula de bypass.",
        "FIC39175MV: abertura do refluxo circulante.",
        "FIC39179: vazão do refluxo de topo.",
        "TIC39247: temperatura do refluxo retornado."
      ],
      0,
      "CV7, FIC39173MV, é a abertura do hot bypass do refervedor E-3905 (p.5)."
    ],
    [
      "topo",
      "O que os sinais da matriz NÃO permitem concluir?",
      [
        "O tempo exato para o PFE responder à alteração.",
        "A tendência inicial modelada para PFE e A90.",
        "Se um canal está marcado como somente predição.",
        "Quais CVs possuem influência da MV selecionada."
      ],
      0,
      "O guia não apresenta tempo morto nem constantes de tempo completas (p.6)."
    ],
    [
      "e3907",
      "Qual objetivo econômico orienta a E-3907?",
      [
        "Incorporar butanos à nafta respeitando o limite de PVR.",
        "Minimizar o arraste de butanos na nafta independentemente da PVR.",
        "Elevar a PVR além do limite para incorporar mais butanos.",
        "Maximizar o refluxo sem considerar a volatilidade dos produtos."
      ],
      0,
      "O APC busca incorporar butanos na nafta com controle de PVR (p.3)."
    ],
    [
      "e3907",
      "Como atua o canal MV5 → PVR quando a PVR está abaixo do LMAX?",
      [
        "É considerado na predição, sem correção direta da PVR.",
        "É responsável sozinho pelo controle direto da PVR.",
        "É substituído pelo distúrbio da carga do conversor.",
        "É descartado das previsões de composição da nafta."
      ],
      0,
      "O manual prevê canal somente de predição abaixo do LMAX (p.7)."
    ],
    [
      "e3907",
      "Quando a PVR ultrapassa LMAX, que mudança é descrita?",
      [
        "O canal do refluxo passa a participar do controle da PVR.",
        "A medição de PVR deixa de ser considerada pelo controlador.",
        "O refluxo é convertido em variável de distúrbio sem SP.",
        "O controlador ignora o PVR e passa a maximizar o topo."
      ],
      0,
      "Na condição acima de LMAX, o canal refluxo → PVR passa a controle (p.7)."
    ],
    [
      "e3907",
      "Qual sequência o texto da página 7 descreve para PVR alta?",
      [
        "Reduzir o refluxo e depois atuar na temperatura.",
        "Reduzir a temperatura primeiro e depois aumentar o refluxo.",
        "Aumentar a temperatura primeiro e depois elevar o refluxo.",
        "Reduzir a temperatura sem alterar o refluxo em nenhuma fase."
      ],
      0,
      "A narrativa da p.7 menciona cortar refluxo e posteriormente usar temperatura; a tabela 7 requer validação de prioridade."
    ],
    [
      "e3907",
      "O que a matriz prevê quando TIC39306SV aumenta?",
      [
        "PVR cai enquanto temperaturas tendem a aumentar.",
        "PVR aumenta e temperaturas medidas tendem a diminuir.",
        "PVR diminui e temperaturas medidas tendem a diminuir.",
        "PVR aumenta e temperaturas medidas tendem a aumentar."
      ],
      0,
      "MV4 tem sinal − para PVR, + para temperaturas CV10 e CV11 (p.7)."
    ],
    [
      "e3907",
      "Qual é uma divergência interna do guia que exige validação?",
      [
        "TI39314 aparece como topo e TIC39314 como prato 3.",
        "A tabela de PVR usa LMAX 70 kPa e a matriz só contém sinais.",
        "O modelo apresenta canais P+ e P− para algumas inferências.",
        "A CV9 intemperismo é inferida e possui faixa de engenharia."
      ],
      0,
      "Tabela 3 p.5: TI39314/topo; tabela 7 p.9: TIC39314/prato 3."
    ],
    [
      "e3907",
      "Qual interpretação é correta para INTGL39INF?",
      [
        "Inferência de intemperismo do GLP sem equação.",
        "Medição direta da vazão de GLP com equação publicada.",
        "SP manipulado de temperatura do fundo da E-3907.",
        "Predição da vazão de refluxo da E-3901 em operação."
      ],
      0,
      "INTGL39INF é CV inferida e o guia não apresenta equação (p.5)."
    ],
    [
      "e3907",
      "Na violação de LMIN da PVR, qual ação está listada?",
      [
        "Reduzir MV4, SP da TIC39306, para correção.",
        "Aumentar MV4, SP da TIC39306, para correção.",
        "Reduzir MV5, vazão do refluxo, como única ação.",
        "Aumentar MV5, vazão do refluxo, como única ação."
      ],
      0,
      "Tabela 7: reduzir MV4 para a CV8 abaixo de LMIN (p.9)."
    ],
    [
      "e3908",
      "Qual MV é utilizada pelo APC da E-3908?",
      [
        "TIC39332SV: setpoint da temperatura de fundo.",
        "FY39200: razão refluxo/carga acompanhada como CV.",
        "PIC39254AMV: abertura da válvula, acompanhada como CV.",
        "TI39307: temperatura do prato 8 da coluna E-3907."
      ],
      0,
      "O APC da E-3908 usa MV6, TIC39332SV (p.5)."
    ],
    [
      "e3908",
      "Que objetivo econômico consta do guia para a E-3908?",
      [
        "Reduzir energia dentro dos limites da torre.",
        "Elevar o aquecimento da coluna até a abertura ficar alta.",
        "Manter a razão refluxo/carga fixa apesar das restrições.",
        "Minimizar apenas o refluxo, sem controlar a temperatura."
      ],
      0,
      "A filosofia busca minimizar a temperatura de fundo e consumo energético (p.4)."
    ],
    [
      "e3908",
      "Diminuir TIC39332SV gera que tendência na matriz?",
      [
        "Redução da razão refluxo/carga e da abertura PIC39254A.",
        "Elevação da razão refluxo/carga e da abertura PIC39254A.",
        "Elevação da razão refluxo/carga e redução de PIC39254A.",
        "Redução da razão refluxo/carga e elevação de PIC39254A."
      ],
      0,
      "Ambas CVs apresentam influência positiva de MV6 (p.7)."
    ],
    [
      "e3908",
      "FY39200 atingiu o LMIN. Qual correção consta do manual?",
      [
        "Elevar o SP da TIC39332, temperatura de fundo.",
        "Reduzir MV6, mesmo que o indicador continue abaixo de LMIN.",
        "Manter MV6 fixa e alterar diretamente o valor de FY39200.",
        "Desabilitar FY39200 e seguir reduzindo a temperatura de fundo."
      ],
      0,
      "Tabela 8 prevê aumento da MV6 para corrigir CV12 abaixo do mínimo (p.9)."
    ],
    [
      "e3908",
      "Por que o APC pode parar de diminuir temperatura de fundo?",
      [
        "Uma CV pode alcançar restrição mínima de operação.",
        "A otimização do APC desconsidera restrições de CV.",
        "O controlador de pressão passa a ser tratado como DV.",
        "O ganho positivo da matriz passa a ser sempre nulo."
      ],
      0,
      "A otimização é limitada pelas CVs, inclusive FY39200 e PIC39254AMV (p.4–5)."
    ],
    [
      "e3908",
      "O que significa a faixa 15%–90% de PIC39254AMV?",
      [
        "Limites de engenharia registrados na revisão do guia.",
        "Limites de segurança comprovados para qualquer modo.",
        "Abertura automática fixa adotada durante todo o ciclo.",
        "Comando obrigatório para reduzir a energia da coluna."
      ],
      0,
      "15% e 90% são limites documentais de engenharia (p.5)."
    ],
    [
      "e3908",
      "Qual é a unidade informada para a razão FY39200?",
      [
        "Razão sem dimensão, faixa de 0,15 até 0,75.",
        "Razão dimensional expressa em m³/d, faixa 0,15–0,75.",
        "Razão dimensional expressa em %, faixa 0,15–0,75.",
        "Razão dimensional expressa em °C, faixa 0,15–0,75."
      ],
      0,
      "Tabela 4 trata FY39200 como razão refluxo/carga, sem dimensão (p.5)."
    ],
    [
      "e3908",
      "É possível afirmar a economia energética em kW só com o guia?",
      [
        "Não: faltam modelos e dados energéticos quantitativos.",
        "Sim: a variação da MV determina diretamente os kW.",
        "Sim: o limite de FY39200 informa toda a energia.",
        "Sim: o sinal positivo da matriz informa os kW."
      ],
      0,
      "Não há ganhos e balanços completos para quantificar redução de energia (p.4–7)."
    ]
  ]
};
