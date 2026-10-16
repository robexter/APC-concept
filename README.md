# APC U39 Concept — V1.2.2 (refinamento responsivo mobile)

**Fonte técnica:** Guia de Operação Controle Avançado U39, Rev.01 (28/10/2024), 15 páginas.

**Escopo:** protótipo educacional qualitativo, sem comunicação APC, PCWS, OPC, PID ou SDCD reais. Os valores constantes nas tabelas são históricos e **não** são limites operacionais autorizados atuais.

## Correções da V1.2.2 (em relação à V1.2.1)

- **Abas dos quatro subcontroladores:** atalhos em grade de duas colunas, com todas as opções visíveis, sem corte ou gesto lateral oculto; último atalho ocupa a largura inteira.
- **Mapa de relações:** separa as regras do mapa lógico das regras legadas do diagrama `.mini-flow`. Remove posicionamento indevido da terceira e da quarta variável; usa cartões iguais em 2 colunas de 356 a 640 px e em uma coluna até 355 px.
- **Legendas do mapa:** etiquetas legíveis, largura contida no cartão, melhor quebra de palavras.
- **Tabelas largas:** manutenção do scroll horizontal interno e indicação explícita para deslizar, sem reduzir fontes ou remover colunas.
- **Cache PWA:** atualização para `apc-u39-concept-v1.2.2`.
- **Ícones:** preservados os ícones APC recentemente escolhidos e enviados ao GitHub nas versões 192/512.
- **Sem alterações técnicas:** matriz, limites, banco do Quiz e CIC, cenários e lógica JavaScript mantidos integralmente.

## Histórico da V1.2.1 (em relação à V1.2)

- **UX/mobile:** campo da busca recebe `min-width:0` dentro do flex container, evitando extrapolação da largura em 320 px com a busca expandida.
- **Controle de versão:** identificação V1.2.1 na interface, rodapé e manifesto.
- **PWA:** cache versionado `apc-u39-concept-v1.2.1`, com invalidação automática dos caches da versão anterior quando o novo service worker for ativado.
- Preservados os bancos de questões, os quatro subcontroladores, o laboratório e todas as funcionalidades da V1.2, sem alteração de lógica técnica.

## Alterações incorporadas da V1.2 em relação à V1.1

- FUN-01/FUN-02: Quiz e CIC isolados em seus próprios hosts; feedback, botões e revisão sem conflitos de IDs, inclusive quando ambos estão abertos.
- TEC-02: nova Aba Estratégia didática com lados de limites LMIN/LMAX, seleção de CV, ações documentais, legenda de custos/triângulos, ressalvas sobre custos numéricos indisponíveis e filtro (Anexo B pp.14–15).
- PED-01: os quatro casos preservam 8 decisões principais, adicionando caminho condicional com consequência qualitativa e uma decisão de recuperação após escolha incorreta.
- PED-02: banco CIC **independente** com 30 questões situacionais e diagnósticas (16 sorteadas por execução), e Quiz permanece baseado em 40 questões originais (12 sorteadas).
- TEC-03: a exceção de refluxo→PVR acima de LMAX mantém explicitamente o símbolo **P+** original; a utilização condicional para controle é apresentada com referência p.7.
- PED-03: progresso de leitura, casos e CIC separado; indicadores por subcontrolador quando existem resultados suficientes.
- PED-04: os mapas funcionais agora distinguem relações lógicas de fluxos físicos, sem setas que sugiram P&IDs inexistentes.
- UX: escalas tipográficas, seletores e espaços mobile melhorados; estratégias e restrições simultâneas responsivas.
- Laboratório: comparação qualitativa de duas restrições com identificação de movimentos textuais convergentes ou conflitantes, **sem** resolver a otimização real.
- Fundamentos físicos aprofundados: distinguir conceitos gerais de inferências e informações realmente fornecidas pelo guia.

## Limitações não resolvidas / validação pendente

- Inconsistência TI39314/TIC39314, descrição da posição de TIC39306 e prioridades para PVR alta: consultar instrumentação e processo atuais antes da homologação.
- Não contém parâmetros de modelos, ganhos, atrasos, constantes de tempo, curva de custos nem equações de inferência. As consequências, estados e triângulos do laboratório são qualitativos.
- A aplicação não deve ser usada como procedimento operacional ou ferramenta de manobra real.
- Instalação, atualização, failover e uso offline no Android físico e no repositório GitHub publicado requerem validação no destino.

## Publicar no GitHub Pages

Enviar para a raiz do repositório: `index.html`, `app.css`, `app.js`, `config.js`, `training.js`, `cic.js`, `manifest.json`, `sw.js` e a pasta `icons/`. Configurar Settings → Pages → Deploy from a branch, `main / (root)`.

Pode-se substituir os arquivos da V1.1 no repositório se desejar atualizar o site, mas preservar o ZIP V1.1 como referência. Após publicar, verificar carregamento de `cic.js`, limpeza do cache e atualização do service worker; em caso de cache antigo, recarregar o site após ativação do novo SW.
