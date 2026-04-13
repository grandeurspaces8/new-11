"use client"
import { useEffect, useRef, useState } from "react"
import LeadForm from "./lead-form"

const villages = [
  {
    name: "Hacienda Bay",
    location: "سيدي عبد الرحمن — كم 139",
    area: "فيلل فاخرة",
    unitSizes: "من 298 م²",
    priceFrom: "تبدأ من 58M",
    payment: "10% مقدم — 6 سنوات",
    highlight: "بيتش فرونت حصري + Le Sidi Hotel",
  },
  {
    name: "Hacienda Waters",
    location: "رأس الحكمة — كم 190",
    area: "شاليهات وفيلل",
    unitSizes: "من 40 م² حتى 375 م²",
    priceFrom: "تبدأ من 10M",
    payment: "5% مقدم — 10 سنوات",
    highlight: "أكبر water park + كريستال لاغون",
  },
  {
    name: "Hacienda Heneish",
    location: "سيدي هنيش — كم 247",
    area: "شاليهات، دوبلكس، فيلل",
    unitSizes: "من 92 م²",
    priceFrom: "تبدأ من 12M",
    payment: "10% مقدم — 8 سنوات",
    highlight: "المالديف المصرية — بحر فيروزي بكر",
  },
]

export default function HaciendaSection() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const v = villages[active]

  return (
    <section id="hacienda" ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-primary" />
            <div>
              <p className="text-primary text-sm font-bold tracking-widest uppercase">Palm Hills — الساحل الشمالي</p>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground">Hacienda</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mr-5">
            3 قرى ساحلية فاخرة على البحر المتوسط — من كيلو 139 إلى كيلو 247 على الطريق الدولي
          </p>
        </div>

        {/* Village Selector */}
        <div className={`flex gap-2 mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {villages.map((v, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`flex-1 py-3 px-4 text-sm font-bold transition-all duration-300 ${active === i ? "bg-primary text-white" : "bg-muted/30 text-muted-foreground hover:bg-muted/60"}`}>
              {v.name}
            </button>
          ))}
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 items-start transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-primary text-white p-5">
              <p className="text-sm opacity-80 mb-1">{v.location}</p>
              <h3 className="text-2xl font-black mb-1">{v.name}</h3>
              <p className="text-primary-foreground/80 text-sm">{v.highlight}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "نوع الوحدات", value: v.area },
                { label: "المساحات", value: v.unitSizes },
                { label: "الأسعار", value: v.priceFrom },
                { label: "السداد", value: v.payment },
              ].map((f, i) => (
                <div key={i} className="bg-muted/20 p-4 border-r-2 border-primary">
                  <p className="text-xs text-muted-foreground mb-1">{f.label}</p>
                  <p className="font-bold text-sm text-foreground">{f.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-foreground">مميزات المشروعات الثلاثة</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "شاطئ رملي خاص", "حمامات سباحة ولاغونات", "فندق فاخر داخل القرية",
                  "مطاعم وكافيهات عالمية", "نادي رياضي وصحي", "أمن وحراسة 24/7",
                  "منطقة تجارية متكاملة", "ألعاب مائية وترفيه",
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />{a}
                  </div>
                ))}
              </div>
            </div>

            {/* All 3 villages quick compare */}
            <div className="border border-border p-4">
              <h4 className="font-bold text-sm mb-3 text-foreground">مقارنة سريعة</h4>
              <div className="space-y-2">
                {villages.map((vv, i) => (
                  <div key={i} className={`flex justify-between items-center py-2 border-b border-border last:border-0 cursor-pointer ${active === i ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setActive(i)}>
                    <span className="font-semibold text-sm">{vv.name}</span>
                    <span className="text-xs">{vv.priceFrom} | {vv.location.split("—")[0].trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-foreground -z-10 translate-x-2 translate-y-2" />
              <LeadForm project={v.name}
                units={[
                  { value: "شاليه صغير", label: "شاليه — من 40 م²" },
                  { value: "شاليه كبير", label: "شاليه سينيور — من 110 م²" },
                  { value: "دوبلكس", label: "دوبلكس / بنتهاوس" },
                  { value: "تاون هاوس", label: "تاون هاوس ساحلي" },
                  { value: "توين هاوس", label: "توين هاوس" },
                  { value: "فيلا", label: "فيلا مستقلة" },
                ]} />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">للتواصل المباشر: <a href="tel:+201554999269" className="text-primary font-bold" dir="ltr">01554 999 269</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
