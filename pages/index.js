import React, { useState } from 'react';
import Head from 'next/head';

const methodology_db = {
    "1. مسار الرقابة والامتثال (ISO 19011)": {
        "تقرير النزول الميداني الفني": [
            { q: "نطاق الفحص الفني الميداني:", ex: "ISO/IEC 17020" },
            { q: "الأدلة المادية المرصودة:", ex: "Physical Evidence (ISO 19011)" },
            { q: "حالات عدم المطابقة المكتشفة:", ex: "Non-conformities (NC)" }
        ],
        "تدقيق الامتثال الإداري": [
            { q: "المعيار المرجعي للمراجعة:", ex: "COSO Internal Control" },
            { q: "تحليل فجوة الامتثال (Gap Analysis):", ex: "Compliance vs. Reality" },
            { q: "سلامة الإجراءات الرقابية:", ex: "Control Activities" }
        ],
        "تقرير كفاءة الموارد والحد من الهدر": [
            { q: "تحديد أنواع الهدر السبعة (Muda):", ex: "Lean Management" },
            { q: "تحليل تدفق القيمة (VSM):", ex: "Value Stream Mapping" }
        ],
        "تقرير التحقق من معايير الجودة (QA)": [
            { q: "مطابقة المخرجات للمواصفات:", ex: "Quality Metrics" },
            { q: "تحليل الانحرافات المعيارية:", ex: "Deviation Analysis" }
        ],
        "تقرير السلامة والبيئة (HSE)": [
            { q: "تحديد المخاطر والتهديدات (HIRA):", ex: "ISO 45001 Standards" },
            { q: "تدابير الضبط والسيطرة:", ex: "Control Measures" }
        ]
    },
    "2. مسار الأثر والتقييم (Kirkpatrick)": {
        "تقييم العائد على الاستثمار (ROI)": [
            { q: "إجمالي الفوائد النقدية المحققة:", ex: "Monetary Benefits" },
            { q: "تكاليف البرنامج الإجمالية:", ex: "Program Costs" }
        ],
        "تقرير التغير السلوكي (L3)": [
            { q: "مؤشرات تطبيق المعرفة في الميدان:", ex: "Behavioral Change Metrics" },
            { q: "العوائق التنظيمية للتطبيق:", ex: "Transfer Barriers" }
        ],
        "تقرير قياس الفجوة المعرفية (L2)": [
            { q: "نتائج الاختبارات القبلية والبعدية:", ex: "Pre/Post Assessment" },
            { q: "معدل اكتساب المهارات المستهدفة:", ex: "Learning Acquisition Rate" }
        ],
        "تحليل الاحتياجات التدريبية (TNA)": [
            { q: "الفجوة بين الأداء الحالي والمأمول:", ex: "Performance Gap Analysis" },
            { q: "الأدوات المقترحة لسد الفجوة:", ex: "Intervention Strategies" }
        ],
        "تقرير استدامة الأثر التنموي": [
            { q: "مؤشرات استمرار المخرجات:", ex: "OECD Sustainability Criteria" },
            { q: "عوامل التمكين الذاتي للمشروع:", ex: "Ownership & Resilience" }
        ]
    },
    "3. مسار الاستراتيجية والحوكمة (BSC)": {
        "مصفوفة إدارة المخاطر الاستراتيجية": [
            { q: "تحديد المخاطر الاستراتيجية:", ex: "ISO 31000 Risk Register" },
            { q: "مستوى الاحتمالية والأثر:", ex: "Risk Heat Map" }
        ],
        "دراسة الجدوى الاستراتيجية": [
            { q: "التحليل الفني والمالي الاستراتيجي:", ex: "UNIDO Feasibility Standard" },
            { q: "تحليل الحساسية للمشروع:", ex: "Sensitivity Analysis" }
        ],
        "تحليل البيئة المؤسسية": [
            { q: "العوامل السياسية والاقتصادية (PESTEL):", ex: "Environmental Scanning" },
            { q: "نقاط القوة والضعف (SWOT):", ex: "Strategic Capability" }
        ],
        "تقرير مواءمة الحوكمة": [
            { q: "مستوى الشفافية والمساءلة:", ex: "OECD Governance Pillars" },
            { q: "هيكلية اتخاذ القرار:", ex: "Decision-making Framework" }
        ],
        "قياس التوجه الاستراتيجي (OKRs)": [
            { q: "الأهداف الاستراتيجية الكبرى:", ex: "Objectives" },
            { q: "النتائج الرئيسية القابلة للقياس:", ex: "Key Results" }
        ]
    },
    "4. مسار العمليات والإنتاجية (Six Sigma)": {
        "تقرير الإنجاز الدوري (KPIs)": [
            { q: "المستهدف الفعلي مقابل المخطط:", ex: "KPI Variance Analysis" },
            { q: "معدل كفاءة الأداء التشغيلي:", ex: "Operational Efficiency Ratio" }
        ],
        "تقرير تحسين العمليات": [
            { q: "تحديد الاختناقات (Bottlenecks):", ex: "Process Mapping (BPMN)" },
            { q: "الإجراءات التصحيحية للتحسين:", ex: "Optimization Steps" }
        ],
        "سلاسل التوريد واللوجستيات": [
            { q: "معدل دوران المخزون وكفاءة التوريد:", ex: "SCOR Model Performance" },
            { q: "تقييم أداء الموردين:", ex: "Supplier Scorecard" }
        ],
        "إدارة الأزمات والتعافي (BCP)": [
            { q: "تحليل أثر الأعمال (BIA):", ex: "ISO 22301 Requirements" },
            { q: "زمن التعافي المستهدف (RTO):", ex: "Recovery Time Objective" }
        ],
        "تقييم الإنتاجية المؤسسية": [
            { q: "تحليل مخرجات العمل مقابل المدخلات:", ex: "Total Factor Productivity" },
            { q: "معدل كفاءة القوى العاملة:", ex: "Labor Efficiency Index" }
        ]
    },
    "5. مسار العلاقات والسمعة (Reputation)": {
        "تحليل السمعة والصورة الذهنية": [
            { q: "إدراك الجمهور للمنظمة:", ex: "Reputation Quotient (RQ)" },
            { q: "مستوى الولاء والثقة (NPS):", ex: "Net Promoter Score" }
        ],
        "أثر الحملات الإعلامية": [
            { q: "تحليل الرسائل الاتصالية المستلمة:", ex: "Communication Impact Model" },
            { q: "معدل العائد من الاستثمار الإعلامي:", ex: "Media ROI" }
        ],
        "إشراك أصحاب المصلحة": [
            { q: "تحديد فئات أصحاب المصلحة:", ex: "Stakeholder Mapping (AA1000)" },
            { q: "مستوى الاستجابة للتطلعات:", ex: "Responsiveness Level" }
        ],
        "المسؤولية المجتمعية (CSR)": [
            { q: "المساهمة في التنمية المستدامة:", ex: "ISO 26000 Clauses" },
            { q: "الأثر المجتمعي المباشر:", ex: "Social Impact Value" }
        ],
        "تحليل المحتوى والظهور الإعلامي": [
            { q: "تحليل التكرار والاتجاه (Positive/Negative):", ex: "Content Analysis Method" },
            { q: "جودة الظهور في القنوات الرسمية:", ex: "Visibility Index" }
        ]
    }
};

export default function MansourPlatform() {
    const [activeTab, setActiveTab] = useState('platform');
    const [selectedPillar, setSelectedPillar] = useState(Object.keys(methodology_db)[0]);
    const [selectedReport, setSelectedReport] = useState(Object.keys(methodology_db[selectedPillar])[0]);

    const handleGenerate = () => {
        alert("بدء المعالجة المنهجية للبيانات عبر محرك Gemini الاستشاري...");
    };

    return (
        <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#000", minHeight: "100vh", paddingBottom: "90px", color: "#fff" }}>
            <Head>
                <title>منصة المنصور السيادية</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                body { margin: 0; background-color: #000; }
                .gold-border { border-right: 4px solid #d4af37; }
                .card { background: #111; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #333; }
                .input-field { width: 100%; padding: 12px; border: 1px solid #d4af37; border-radius: 5px; background: #000; color: #fff; margin-bottom: 15px; font-family: 'Cairo'; }
                .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; background: #111; border-top: 2px solid #d4af37; display: flex; height: 70px; z-index: 100; }
                .bottom-nav button { flex: 1; background: none; border: none; color: #888; font-family: 'Cairo'; font-weight: bold; }
                .bottom-nav button.active { color: #d4af37; }
                .btn-gold { background: #d4af37; color: #000; border: none; padding: 15px; border-radius: 5px; width: 100%; font-weight: bold; font-size: 16px; cursor: pointer; }
                .label-method { font-size: 12px; color: #d4af37; display: block; margin-bottom: 5px; font-weight: bold; }
            `}} />

            <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", padding: "20px 0" }}>
                    <h2 style={{ color: "#d4af37", margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
                    <p style={{ fontSize: "12px", color: "#888" }}>نظام أتمتة التقارير السيادية - الإصدار المنهجي 1.0</p>
                </header>

                {activeTab === 'platform' && (
                    <>
                        <div className="card gold-border">
                            <h4 style={{ color: "#d4af37", marginTop: 0 }}>1. الهيكل المنهجي</h4>
                            <label className="label-method">المسار الاستراتيجي:</label>
                            <select className="input-field" value={selectedPillar} onChange={e => {setSelectedPillar(e.target.value); setSelectedReport(Object.keys(methodology_db[e.target.value])[0]);}}>
                                {Object.keys(methodology_db).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                            
                            <label className="label-method">الفرع التخصصي:</label>
                            <select className="input-field" value={selectedReport} onChange={e => setSelectedReport(e.target.value)}>
                                {Object.keys(methodology_db[selectedPillar]).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                        </div>

                        <div className="card gold-border">
                            <h4 style={{ color: "#d4af37", marginTop: 0 }}>2. مدخلات التقرير</h4>
                            {methodology_db[selectedPillar][selectedReport].map((item, i) => (
                                <div key={i}>
                                    <label style={{ fontSize: "14px", display: "block", marginBottom: "8px" }}>{item.q}</label>
                                    <span style={{ fontSize: "11px", color: "#888", display: "block", marginBottom: "5px" }}>المرجع: {item.ex}</span>
                                    <textarea className="input-field" rows="3" placeholder="أدخل البيانات الموضوعية هنا..."></textarea>
                                </div>
                            ))}
                            <button className="btn-gold" onClick={handleGenerate}>توليد الوثيقة السيادية (AI Analysis)</button>
                        </div>
                    </>
                )}

                {activeTab === 'packages' && (
                    <div style={{ textAlign: "center", padding: "40px 0" }}>
                        <h3 style={{ color: "#d4af37" }}>باقات التمكين السيادي</h3>
                        <p>قريباً.. نظام تفعيل الأكواد والحسابات المؤسسية.</p>
                    </div>
                )}
            </div>

            <nav className="bottom-nav">
                <button className={activeTab === 'platform' ? 'active' : ''} onClick={() => setActiveTab('platform')}>🏠 المنصة</button>
                <button className={activeTab === 'packages' ? 'active' : ''} onClick={() => setActiveTab('packages')}>💳 الباقات</button>
                <button className={activeTab === 'admin' ? 'active' : ''} onClick={() => setActiveTab('admin')}>⚙️ الإدارة</button>
            </nav>
        </div>
    );
}
