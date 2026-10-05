<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · de · no clinical/professional/rights approval -->

# Vorhergesagtes Körpergewicht und Volumenumrechnung

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/peso-predito-volume-corrente)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Geschlecht

`sexo`

- `M` — Männlich
- `F` — Weiblich

### Körpergröße

`altura`

cm · Bereich: 120–220

### Im Protokoll festgelegtes Volumen je prädiziertem Körpergewicht

`mlkg`

mL/kg · Bereich: 4–8

## Fassung der Methode

ARDS Network 2000; vorhergesagtes Körpergewicht und Umrechnung mit eingegebenem Koeffizienten

## Dokumentierte Formel

PBW = 50 + 0,91(Größe−152,4) bei Männern oder 45,5 + 0,91(Größe−152,4) bei Frauen. Mathematisches Volumen = PBW × eingegebener Koeffizient.

## Grenzen und Population

Hauptergebnis ist PBW, keine Beatmungseinstellung. Wählt nicht automatisch 6 mL/kg; Koeffizient, Eignung, Drücke und Titration hängen vom klinischen Protokoll ab.

## Referenzen

- [ARDS Network · Protokoll und PBW-Formel](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
