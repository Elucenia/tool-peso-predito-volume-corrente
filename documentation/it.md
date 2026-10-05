<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · it · no clinical/professional/rights approval -->

# Peso corporeo predetto e conversione del volume

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/peso-predito-volume-corrente)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sesso

`sexo`

- `M` — Maschile
- `F` — Femminile

### Altezza

`altura`

cm · intervallo: 120–220

### Volume per peso corporeo predetto definito nel protocollo

`mlkg`

mL/kg · intervallo: 4–8

## Edizione del metodo

ARDS Network 2000; peso predetto e conversione con il coefficiente inserito

## Formula documentata

PBW = 50 + 0,91(altezza−152,4) negli uomini o 45,5 + 0,91(altezza−152,4) nelle donne. Volume matematico = PBW × coefficiente inserito.

## Limiti e popolazione

Il risultato principale è PBW, non un’impostazione ventilatoria. Non sceglie automaticamente 6 mL/kg; coefficiente, eleggibilità, pressioni e titolazione dipendono dal protocollo clinico.

## Riferimenti

- [ARDS Network · protocollo ed espressione del PBW](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
