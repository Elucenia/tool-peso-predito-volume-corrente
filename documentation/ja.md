<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · ja · no clinical/professional/rights approval -->

# 予測体重と容量の換算

[条件・出典・許諾](https://elucenia.org/ja/tools/peso-predito-volume-corrente)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 性別

`sexo`

- `M` — 男性
- `F` — 女性

### 身長

`altura`

cm · 範囲: 120–220

### プロトコルの予測体重当たり換気量

`mlkg`

mL/kg · 範囲: 4–8

## 方法の版

ARDS Network 2000；予測体重と入力係数による換算

## 記載された計算式

男性PBW = 50 + 0.91（身長−152.4）、女性45.5 + 0.91（身長−152.4）。数学的容量 = PBW × 入力した係数。

## 限界・対象集団

主結果は予測体重（PBW）であり、人工呼吸器設定ではありません。6 mL/kgを自動選択しません。係数、適用条件、圧、調整は臨床プロトコルによります。

## 参考文献

- [ARDS Network · プロトコルとPBWの式](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
