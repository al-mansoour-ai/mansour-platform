import React from 'react';

export default function PricingSection() {
  const plans = [
    { t: "مجانية", p: "0$", f: "1 تقرير استراتيجي", c: "#95a5a6" },
    { t: "احترافية", p: "50$", f: "10 تقارير + دعم AI", c: "#d4af37" },
    { t: "مؤسسية", p: "200$", f: "تقارير لامحدودة", c: "#0a192f" }
  ];

  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "35px" }}>
      {plans.map((plan, i) => (
        <div key={i} style={{ flex: 1, background: "white", padding: "20px", borderRadius: "15px", textAlign: "center", border: `2px solid ${plan.c}`, boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ fontWeight: 900, color: plan.c, fontSize: "14px" }}>{plan.t}</div>
          <div style={{ fontSize: "26px", fontWeight: 900, margin: "10px 0", color: "#0a192f" }}>{plan.p}</div>
          <div style={{ fontSize: "11px", color: "#7f8c8d", fontWeight: 700 }}>{plan.f}</div>
        </div>
      ))}
    </div>
  );
}
