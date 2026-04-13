"use client"
import { useEffect, useState } from "react"
import LeadForm from "./lead-form"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className={`space-y-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="text-center lg:text-right space-y-4">
                <p className="text-primary text-sm font-bold tracking-widest uppercase">Palm Hills Developments</p>
                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  <span className="block">بالم هيلز</span>
                  <span className="block text-primary text-3xl lg:text-4xl font-bold mt-1">3 مشاريع استثنائية</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  من قلب أكتوبر إلى التجمع الخامس إلى ساحل البحر المتوسط — اختر مشروعك المثالي مع Palm Hills Developments
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                {[
                  { value: "34+", label: "مشروع متكامل" },
                  { value: "20K+", label: "وحدة مسلمة" },
                  { value: "1997", label: "تأسست" },
                ].map((s, i) => (
                  <div key={i} className={`text-center lg:text-right transition-all duration-700 delay-${(i+1)*100} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["بادية أكتوبر", "بالم هيلز التجمع", "هاسيندا الساحل"].map(p => (
                  <a key={p} href={`#${p === "بادية أكتوبر" ? "badya" : p === "بالم هيلز التجمع" ? "newcairo" : "hacienda"}`}
                    className="border border-white/30 text-white px-4 py-2 text-sm hover:bg-white/10 transition-colors">
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className={`w-full max-w-md mx-auto px-4 lg:px-8 py-12 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <LeadForm project="عام - Palm Hills"
              units={[
                { value: "بادية - شقة", label: "بادية — شقة من 85م²" },
                { value: "بادية - فيلا", label: "بادية — فيلا / تاون هاوس" },
                { value: "تجمع - شقة", label: "التجمع — شقة / تاون هاوس" },
                { value: "تجمع - فيلا", label: "التجمع — فيلا" },
                { value: "هاسيندا - شاليه", label: "هاسيندا — شاليه ساحلي" },
                { value: "هاسيندا - فيلا", label: "هاسيندا — فيلا / تاون هاوس" },
              ]} />
          </div>
        </div>
      </div>
    </section>
  )
}
