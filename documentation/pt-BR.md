<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · pt-BR · no clinical/professional/rights approval -->

# Peso predito e conversão de volume

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/peso-predito-volume-corrente)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sexo

`sexo`

- `M` — Masculino
- `F` — Feminino

### Altura

`altura`

cm · intervalo: 120–220

### Volume por peso predito definido no protocolo

`mlkg`

mL/kg · intervalo: 4–8

## Edição do método

ARDS Network 2000; PBW e conversão por coeficiente informado

## Fórmula documentada

PBW = 50 + 0,91(altura−152,4) em homens ou 45,5 + 0,91(altura−152,4) em mulheres. Volume matemático = PBW × coeficiente informado.

## Limites e população

Resultado principal é PBW, não ajuste ventilatório. Não escolhe automaticamente 6 mL/kg; coeficiente, elegibilidade, pressões e titulação dependem do protocolo clínico.

## Referências

- [ARDS Network · protocolo e expressão de PBW](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
