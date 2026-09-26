# Peso predito e volume corrente protetor

Identificador: `peso-predito-volume-corrente`. Pacote independente da plataforma ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. A saída principal é um ajuste ventilatório de 6 mL/kg, não apenas peso predito. O protocolo inclui elegibilidade, pressão de platô e acompanhamento. Suspender até revisão clínica ou separar um calculador estritamente antropométrico de PBW.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 3 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **pendente**.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Peso predito: 50 (masculino) ou 45,5 (feminino) + 0,91 × (altura em cm − 152,4). Multiplicar por um volume/kg é somente um componente de protocolo ventilatório.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://biolincc.nhlbi.nih.gov/studies/ardsnet/

## Condições e limites

Calcula o peso predito pela altura e pelo sexo, que é a referência para o volume corrente na ventilação protetora, e não o peso real.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)
- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **ELUCENIA**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.
