import React, { useState } from 'react';
import Head from 'next/head';
import { trainingMethodology } from '../data/training'; 
import PricingSection from '../components/Pricing';

export default function SovereignFinalPlatform() {
  return (
    <div dir="rtl" style={{ backgroundColor: "#f1f2f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "linear-gradient(135deg, #0a192f 0%, #1a3c6d 100%)", color: "white", padding: "50px 20px", textAlign: "center", borderBottom: "6px solid #d4af37" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "12px", fontWeight: 700 }}>نظام الأتمتة المنهجي وفق المعايير الدولية</p>
      </div>

      <div style={{ maxWidth: "800px", margin: "-30px auto 20px auto", padding: "0 20px" }}>
        <PricingSection />

        <div style={{ background: "white", borderRadius: "20px", padding: "40px", borderTop: "10px solid #0a192f", boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "30px" }}>📝 {trainingMethodology.title}</h2>
          <p style={{ fontSize: "13px", color: "#d4af37", fontWeight: 700, marginBottom: "30px" }}>المرجع العلمي: {trainingMethodology.reference}</p>
          
          {trainingMethodology.questions.map((item) => (
            <div key={item.id} style={{ marginBottom: "40px" }}>
              <label style={{ fontWeight: 900, color: "#0a192f", display: "block", fontSize: "17px", marginBottom: "10px" }}>{item.id}. {item.q}</label>
              <div style={{ color: "#7f8c8d", fontSize: "13px", marginBottom: "15px", background: "#f8f9fa", padding: "12px", borderRadius: "8px", borderRight: "4px solid #ced4da" }}>
                <b>💡 إرشاد استشاري ثابت:</b> {item.hint}
              </div>
              <textarea style={{ width: "100%", padding: "18px", borderRadius: "12px", border: "2px solid #eee", fontSize: "16px", fontFamily: "inherit", boxSizing: "border-box" }} rows="4" placeholder="ادخل البيانات الفنية هنا..."></textarea>
            </div>
          ))}

          <button style={{ backgroundColor: "#0a192f", color: "white", padding: "22px", borderRadius: "15px", width: "100%", fontWeight: 900, fontSize: "20px", border: "2px solid #d4af37", cursor: "pointer" }}>
            توليد الوثيقة السيادية النهائية 📄
          </button>
        </div>
      </div>
    </div>
  );
}
