<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · es · no clinical/professional/rights approval -->

# Peso corporal predicho y conversión de volumen

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/peso-predito-volume-corrente)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sexo

`sexo`

- `M` — Masculino
- `F` — Femenino

### Estatura

`altura`

cm · intervalo: 120–220

### Volumen por peso corporal predicho definido en el protocolo

`mlkg`

mL/kg · intervalo: 4–8

## Edición del método

ARDS Network 2000; peso predicho y conversión con el coeficiente introducido

## Fórmula documentada

PBW = 50 + 0,91(altura−152,4) en hombres o 45,5 + 0,91(altura−152,4) en mujeres. Volumen matemático = PBW × coeficiente introducido.

## Límites y población

El resultado principal es PBW, no un ajuste ventilatorio. No elige automáticamente 6 mL/kg; el coeficiente, la elegibilidad, las presiones y la titulación dependen del protocolo clínico.

## Referencias

- [ARDS Network · protocolo y expresión del PBW](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
