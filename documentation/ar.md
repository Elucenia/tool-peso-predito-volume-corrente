<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · ar · no clinical/professional/rights approval -->

# وزن الجسم المتوقع وتحويل الحجم

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/peso-predito-volume-corrente)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### الجنس

`sexo`

- `M` — ذكر
- `F` — أنثى

### الطول

`altura`

cm · النطاق: ١٢٠–٢٢٠

### الحجم لكل وزن متوقع المحدد في البروتوكول

`mlkg`

mL/kg · النطاق: ٤–٨

## إصدار الطريقة

ARDS Network 2000؛ وزن الجسم المتوقّع والتحويل بالمعامل المُدخل

## المعادلة الموثقة

PBW = 50 + 0.91(الطول−152.4) لدى الرجال أو 45.5 + 0.91(الطول−152.4) لدى النساء. الحجم الرياضي = PBW × المعامل المدخل.

## الحدود والفئة السكانية

النتيجة الأساسية هي الوزن المتوقع (PBW)، وليست تعديلًا للتهوية. لا يختار تلقائيًا 6 mL/kg؛ المعامل والأهلية والضغوط والمعايرة تعتمد على البروتوكول السريري.

## المراجع

- [ARDS Network · البروتوكول ومعادلة PBW](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
