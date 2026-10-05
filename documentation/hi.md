<!-- ELUCENIA technical documentation · peso-predito-volume-corrente · hi · no clinical/professional/rights approval -->

# अनुमानित शरीर का वजन और आयतन परिवर्तन

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/peso-predito-volume-corrente)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### लिंग

`sexo`

- `M` — पुरुष
- `F` — महिला

### लंबाई

`altura`

cm · सीमा: 120–220

### प्रोटोकॉल में निर्धारित प्रति प्रेडिक्टेड वज़न आयतन

`mlkg`

mL/kg · सीमा: 4–8

## विधि का संस्करण

ARDS Network 2000; अनुमानित शारीरिक वज़न और दर्ज गुणांक से रूपांतरण

## दस्तावेज़ित सूत्र

पुरुषों में PBW = 50 + 0.91(लंबाई−152.4) या महिलाओं में 45.5 + 0.91(लंबाई−152.4)। गणितीय मात्रा = PBW × दर्ज गुणांक।

## सीमाएँ और जनसमूह

मुख्य परिणाम PBW है, वेंटिलेशन समायोजन नहीं। स्वतः 6 mL/kg नहीं चुनता; गुणांक, पात्रता, दबाव और टाइट्रेशन नैदानिक प्रोटोकॉल पर निर्भर हैं।

## संदर्भ

- [ARDS Network · प्रोटोकॉल और PBW का व्यंजक](https://jamanetwork.com/journals/jama/fullarticle/201986)

- [Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005043421801)

- [Fan E et al. An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med, 2017.](https://doi.org/10.1164/rccm.201703-0548ST)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
