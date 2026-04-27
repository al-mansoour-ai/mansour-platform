import React, { useState } from 'react';
import Head from 'next/head';

const methodology_db = {
    "1. مسار الرقابة والامتثال (ISO 19011)": {
        "تقرير النزول الميداني الفني": [
            { q: "نطاق الفحص الفني الميداني:", ex: "ISO/IEC 17020" },
            { q: "الأدلة المادية المرصودة:", ex: "Physical Evidence Analysis" },
            { q: "حالات عدم المطابقة المكتشفة:", ex: "Non-conformity Report" }
        ],
        "تدقيق الامتثال الإداري": [
            { q: "المعيار المرجعي للمراجعة:", ex: "COSO Internal Control" },
            { q: "تحليل فجوة الامتثال (Gap Analysis):", ex: "Compliance Metrics" },
            { q: "سلامة الإجراءات الرقابية:", ex: "Control Activities" }
        ],
        "تقرير كفاءة الموارد والحد من الهدر": [
            { q: "تحديد أنواع الهدر السبعة (Muda):", ex: "Lean Management" },
            { q: "تحليل تدفق القيمة (VSM):", ex: "Value Stream Mapping" },
            { q: "فرص التحسين المادي:", ex: "Resource Optimization" }
        ],
        "تقرير التحقق من معايير الجودة (QA)": [
            { q: "مطابقة المخرجات للمواصفات:", ex: "Quality KPIs" },
            { q: "تحليل الانحرافات المعيارية:", ex: "Six Sigma Baseline" },
            { q: "خطة ضبط الجودة:", ex: "Quality Control Plan" }
        ],
        "تقرير السلامة والبيئة (HSE)": [
            { q: "تحديد المخاطر والتهديدات (HIRA):", ex: "ISO 45001" },
            { q: "تدابير الضبط والسيطرة:", ex: "Risk Control" },
            { q: "تقييم الامتثال البيئي:", ex: "ISO 14001" }
        ]
    },
    "2. مسار الأثر والتقييم (Kirkpatrick)": {
        "تقييم العائد على الاستثمار (ROI)": [
            { q: "إجمالي الفوائد النقدية المحققة:", ex: "Phillips ROI Methodology" },
            { q: "تكاليف البرنامج الإجمالية:", ex: "Cost Analysis" },
            { q: "معدل العائد المئوي:", ex: "ROI Calculation" }
        ],
        "تقرير التغير السلوكي (L3)": [
            { q: "مؤشرات تطبيق المعرفة في الميدان:", ex: "Behavioral Change" },
            { q: "العوائق التنظيمية للتطبيق:", ex: "Transfer Barriers" },
            { q: "مستوى التمكين الوظيفي:", ex: "Empowerment Level" }
        ],
        "تقرير قياس الفجوة المعرفية (L2)": [
            { q: "نتائج الاختبارات القبلية والبعدية:", ex: "Bloom's Taxonomy" },
            { q: "معدل اكتساب المهارات المستهدفة:", ex: "Learning Gain" },
            { q: "تحليل كفاءة المحتوى العلمي:", ex: "Content Evaluation" }
        ],
        "تحليل الاحتياجات التدريبية (TNA)": [
            { q: "الفجوة بين الأداء الحالي والمأمول:", ex: "Competency Mapping" },
            { q: "الأدوات المقترحة لسد الفجوة:", ex: "Intervention Strategies" },
            { q: "تحليل الاحتياج المستقبلي:", ex: "Future Skills Gap" }
        ],
        "تقرير استدامة الأثر التنموي": [
            { q: "مؤشرات استمرار المخرجات:", ex: "OECD Criteria" },
            { q: "عوامل التمكين الذاتي للمشروع:", ex: "Sustainability Factors" },
            { q: "تقييم المرونة المؤسسية:", ex: "Resilience Assessment" }
        ]
    },
    "3. مسار الاستراتيجية والحوكمة (BSC)": {
        "مصفوفة إدارة المخاطر الاستراتيجية": [
            { q: "تحديد المخاطر الاستراتيجية:", ex: "ISO 31000 Register" },
            { q: "مستوى الاحتمالية والأثر:", ex: "Risk Heat Map" },
            { q: "خطط المعالجة والتحوط:", ex: "Mitigation Plans" }
        ],
        "دراسة الجدوى الاستراتيجية": [
            { q: "التحليل الفني والمالي الاستراتيجي:", ex: "UNIDO Standards" },
            { q: "تحليل الحساسية للمشروع:", ex: "Sensitivity Analysis" },
            { q: "تقييم المواءمة الاستراتيجية:", ex: "Strategic Alignment" }
        ],
        "تحليل البيئة المؤسسية": [
            { q: "العوامل السياسية والاقتصادية (PESTEL):", ex: "Environmental Scan" },
            { q: "نقاط القوة والضعف (SWOT):", ex: "Capability Analysis" },
            { q: "تحليل المنافسين والمحيط:", ex: "Market Intelligence" }
        ],
        "تقرير مواءمة الحوكمة": [
            { q: "مستوى الشفافية والمساءلة:", ex: "OECD Principles" },
            { q: "هيكلية اتخاذ القرار:", ex: "Governance Framework" },
            { q: "فصل السلطات والصلاحيات:", ex: "Internal Check" }
        ],
        "قياس التوجه الاستراتيجي (OKRs)": [
            { q: "الأهداف الاستراتيجية الكبرى:", ex: "Corporate Objectives" },
            { q: "النتائج الرئيسية القابلة للقياس:", ex: "Key Results" },
            { q: "معدل التقدم الربع سنوي:", ex: "Quarterly Review" }
        ]
    },
    "4. مسار العمليات والإنتاجية (Six Sigma)": {
        "تقرير الإنجاز الدوري (KPIs)": [
            { q: "المستهدف الفعلي مقابل المخطط:", ex: "Variance Analysis" },
            { q: "معدل كفاءة الأداء التشغيلي:", ex: "OEE Standard" },
            { q: "تحليل جودة المخرجات:", ex: "Quality Rate" }
        ],
        "تقرير تحسين العمليات": [
            { q: "تحديد الاختناقات (Bottlenecks):", ex: "Process Mapping" },
            { q: "الإجراءات التصحيحية للتحسين:", ex: "Continuous Improvement" },
            { q: "تحليل زمن الدورة (Cycle Time):", ex: "Time Analysis" }
        ],
        "سلاسل التوريد واللوجستيات": [
            { q: "معدل دوران المخزون:", ex: "SCOR Model" },
            { q: "تقييم أداء الموردين:", ex: "Supplier Assessment" },
            { q: "كفاءة التوزيع والوصول:", ex: "Distribution Logic" }
        ],
        "إدارة الأزمات والتعافي (BCP)": [
            { q: "تحليل أثر الأعمال (BIA):", ex: "ISO 22301" },
            { q: "زمن التعافي المستهدف (RTO):", ex: "Recovery Targets" },
            { q: "جاهزية فرق الطوارئ:", ex: "Response Readiness" }
        ],
        "تقييم الإنتاجية المؤسسية": [
            { q: "تحليل مخرجات العمل مقابل المدخلات:", ex: "Productivity Index" },
            { q: "معدل كفاءة القوى العاملة:", ex: "Workforce Efficiency" },
            { q: "تحليل العبء الوظيفي:", ex: "Workload Balance" }
        ]
    },
    "5. مسار العلاقات والسمعة (Reputation)": {
        "تحليل السمعة والصورة الذهنية": [
            { q: "إدراك الجمهور للمنظمة:", ex: "Reputation Quotient" },
            { q: "مستوى الولاء والثقة (NPS):", ex: "Net Promoter Score" },
            { q: "تحليل الفجوة في الصورة الذهنية:", ex: "Image Gap" }
        ],
        "أثر الحملات الإعلامية": [
            { q: "تحليل الرسائل الاتصالية المستلمة:", ex: "Message Impact" },
            { q: "معدل العائد من الاستثمار الإعلامي:", ex: "Media ROI" },
            { q: "تحليل الوصول والانتشار:", ex: "Reach Metrics" }
        ],
        "إشراك أصحاب المصلحة": [
            { q: "تحديد فئات أصحاب المصلحة:", ex: "AA1000 Mapping" },
            { q: "مستوى الاستجابة للتطلعات:", ex: "Responsiveness" },
            { q: "خطة التواصل الفعال:", ex: "Engagement Plan" }
        ],
        "المسؤولية المجتمعية (CSR)": [
            { q: "المساهمة في التنمية المستدامة:", ex: "ISO 26000" },
            { q: "الأثر المجتمعي المباشر:", ex: "SROI Analysis" },
            { q: "مستوى الرضا المجتمعي:", ex: "Community Feedback" }
        ],
        "تحليل المحتوى والظهور الإعلامي": [
            { q: "تحليل التكرار والاتجاه:", ex: "Content Analysis" },
            { q: "جودة الظهور في القنوات الرسمية:", ex: "Visibility Index" },
            { q: "تحليل الكلمات المفتاحية والأثر:", ex: "Semantic Impact" }
        ]
    }
};

export default function MansourPlatform() {
    const [activeTab, setActiveTab] = useState('platform');
    const [selectedPillar, setSelectedPillar] = useState(Object.keys(methodology_db)[0]);
    const [selectedReport, setSelectedReport] = useState(Object.keys(methodology_db[selectedPillar])[0]);

    return (
        <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif", backgroundColor: "#0a0a0a", minHeight: "100vh", paddingBottom: "90px", color: "#e0e0e0" }}>
            <Head>
                <title>منصة المنصور الاستراتيجية</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                body { margin: 0; background-color: #0a0a0a; }
                .card { background: #1a1a1a; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #333; border-right: 5px solid #d4af37; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
                .input-field { width: 100%; padding: 14px; border: 1px solid #444; border-radius: 8px; background: #000; color: #fff; margin-bottom: 15px; font-family: 'Cairo'; font-size: 15px; transition: 0.3s; }
                .input-field:focus { border-color: #d4af37; outline: none; }
                .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; background: #111; border-top: 3px solid #d4af37; display: flex; height: 75px; z-index: 1000; box-shadow: 0 -5px 15px rgba(0,0,0,0.5); }
                .bottom-nav button { flex: 1; background: none; border: none; color: #888; font-family: 'Cairo'; font-weight: 700; font-size: 14px; cursor: pointer; transition: 0.3s; }
                .bottom-nav button.active { color: #d4af37; background: #1a1a1a; }
                .btn-gold { background: linear-gradient(45deg, #d4af37, #f1c40f); color: #000; border: none; padding: 18px; border-radius: 8px; width: 100%; font-weight: 900; font-size: 17px; cursor: pointer; text-transform: uppercase; margin-top: 10px; }
                .label-method { font-size: 11px; color: #d4af37; display: block; margin-bottom: 6px; font-weight: 900; letter-spacing: 1px; }
                .section-header { color: #d4af37; border-bottom: 1px solid #d4af37; padding-bottom: 15px; margin-bottom: 25px; text-align: center; font-weight: 900; font-size: 24px; }
                .package-card { background: #111; padding: 30px; border-radius: 15px; border: 2px solid #d4af37; text-align: center; margin-bottom: 25px; }
            `}} />

            <div style={{ padding: "20px", maxWidth: "650px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", padding: "30px 0" }}>
                    <h1 className="section-header">🏛️ منصة المنصور السيادية</h1>
                    <p style={{ color: "#888", fontSize: "14px" }}>نظام التحليل الاستراتيجي المؤتمت وفق المنهجيات العالمية</p>
                </header>

                {activeTab === 'platform' && (
                    <>
                        <div className="card">
                            <h4 style={{ color: "#d4af37", marginTop: 0 }}>تحديد المسار الاستراتيجي</h4>
                            <label className="label-method">المسار المنهجي العريض:</label>
                            <select className="input-field" value={selectedPillar} onChange={e => {setSelectedPillar(e.target.value); setSelectedReport(Object.keys(methodology_db[e.target.value])[0]);}}>
                                {Object.keys(methodology_db).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                            
                            <label className="label-method">الفرع التخصصي الدقيق:</label>
                            <select className="input-field" value={selectedReport} onChange={e => setSelectedReport(e.target.value)}>
                                {Object.keys(methodology_db[selectedPillar]).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                        </div>

                        <div className="card">
                            <h4 style={{ color: "#d4af37", marginTop: 0 }}>إدخال البيانات الموضوعية</h4>
                            {methodology_db[selectedPillar][selectedReport].map((item, i) => (
                                <div key={i}>
                                    <label style={{ fontSize: "15px", display: "block", marginBottom: "8px", fontWeight: "700" }}>{item.q}</label>
                                    <span className="label-method">المنهجية: {item.ex}</span>
                                    <textarea className="input-field" rows="4" placeholder="اكتب هنا التفاصيل الفنية المرصودة..."></textarea>
                                </div>
                            ))}
                            <button className="btn-gold" onClick={() => alert("سيتم دمج محرك Gemini السيادي لمعالجة هذه البيانات وإصدار الوثيقة النهائية.")}>توليد الوثيقة السيادية 📄</button>
                        </div>
                    </>
                )}

                {activeTab === 'packages' && (
                    <div>
                        {[
                            { name: "باقة البداية", price: "1,000 ريال", desc: "توليد 3 تقارير سيادية شاملة" },
                            { name: "باقة التمكين", price: "1,500 ريال", desc: "توليد 6 تقارير سيادية شاملة" },
                            { name: "الباقة التنفيذية", price: "2,500 ريال", desc: "توليد 12 تقرير سيادي شامل" }
                        ].map((pkg, i) => (
                            <div className="package-card" key={i}>
                                <h2 style={{ color: "#d4af37", marginBottom: "10px" }}>{pkg.name}</h2>
                                <h1 style={{ fontSize: "35px", margin: "15px 0" }}>{pkg.price}</h1>
                                <p style={{ color: "#888", marginBottom: "25px" }}>{pkg.desc}</p>
                                <button className="btn-gold" onClick={() => window.location.href = `https://wa.me/967774575749?text=أريد الاشتراك في ${pkg.name}`}>تفعيل الكود عبر واتساب</button>
                            </div>
                        ))}
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
