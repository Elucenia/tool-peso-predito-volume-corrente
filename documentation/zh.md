<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · zh · no clinical/professional/rights approval -->

# 预测体重和容量换算

[条件、来源与许可](https://elucenia.org/zh/tools/peso-predito-volume-corrente)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 性别

`sexo`

- `M` — 男性
- `F` — 女性

### 身高

`altura`

cm · 范围: 120–220

### 方案规定的预测体重单位容量

`mlkg`

mL/kg · 范围: 4–8

## 方法版本

ARDS Network 2000；预测体重及按输入系数换算

## 已记录的公式

男性PBW = 50 + 0.91（身高−152.4），女性45.5 + 0.91（身高−152.4）。数学容量 = PBW × 输入系数。

## 限制与适用人群

主要结果为预计体重（PBW），不是呼吸机调整。不自动选择6 mL/kg；系数、适用条件、压力和滴定取决于临床方案。

## 参考文献

- [ARDS Network · 方案和PBW表达式](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
