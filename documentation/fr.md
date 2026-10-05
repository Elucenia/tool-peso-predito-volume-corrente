<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · fr · no clinical/professional/rights approval -->

# Poids prédit et conversion de volume

[conditions, sources et autorisations](https://elucenia.org/fr/outils/peso-predito-volume-corrente)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sexe

`sexo`

- `M` — Masculin
- `F` — Féminin

### Taille

`altura`

cm · intervalle: 120–220

### Volume par poids corporel prédit défini par le protocole

`mlkg`

mL/kg · intervalle: 4–8

## Édition de la méthode

ARDS Network 2000 ; poids prédit et conversion selon le coefficient saisi

## Formule documentée

PBW = 50 + 0,91(taille−152,4) chez l’homme ou 45,5 + 0,91(taille−152,4) chez la femme. Volume mathématique = PBW × coefficient renseigné.

## Limites et population

Le résultat principal est le poids prédit (PBW), pas un réglage ventilatoire. Ne choisit pas automatiquement 6 mL/kg ; coefficient, admissibilité, pressions et titration dépendent du protocole clinique.

## Références

- [ARDS Network · protocole et formule du PBW](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
