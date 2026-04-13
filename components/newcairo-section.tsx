"use client"
import { useEffect, useRef, useState } from "react"
import LeadForm from "./lead-form"

export default function NewCairoSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const units = [
    { type: "شقق سكنية", area: "150 - 300 م²", price: "تبدأ من 8.5M" },
    { type: "تاون هاوس", area: "295 - 330 م²", price: "تبدأ من 15M" },
    { type: "توين هاوس", area: "من 300 م²", price: "تبدأ من 18M" },
    { type: "فيلا مستقلة", area: "من 300 م² + جاردن", price: "تبدأ من 25M" },
  ]

  return (
    <section id="newcairo" ref={ref} className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-primary" />
            <div>
              <p className="text-primary text-sm font-bold tracking-widest uppercase">Palm Hills — التجمع الخامس</p>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground">بالم هيلز نيو كايرو</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mr-5">
            500 فدان في قلب التجمع الخامس — 80% مساحات خضراء مع مدرسة King's وفندق 5 نجوم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Right — Form first on this section for variety */}
          <div className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} order-2 lg:order-1`}>
            <div className="relative">
              <div className="absolute inset-0 bg-foreground -z-10 translate-x-2 translate-y-2" />
              <LeadForm project="بالم هيلز التجمع الخامس"
                units={[
                  { value: "شقة", label: "شقة — 150 إلى 300 م²" },
                  { value: "تاون هاوس", label: "تاون هاوس — 295 إلى 330 م²" },
                  { value: "توين هاوس", label: "توين هاوس — من 300 م²" },
                  { value: "فيلا", label: "فيلا مستقلة — من 300 م²" },
                ]} />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">سعر المتر يبدأ من 140,000 جنيه</p>
          </div>

          {/* Left — Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} order-1 lg:order-2`}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "المساحة", value: "500 فدان" },
                { label: "الموقع", value: "التجمع الخامس" },
                { label: "المقدم", value: "10% - 20%" },
                { label: "التقسيط", value: "حتى 8-10 سنوات" },
              ].map((f, i) => (
                <div key={i} className="bg-background p-4 border-r-2 border-primary shadow-sm">
                  <p className="text-xs text-muted-foreground mb-1">{f.label}</p>
                  <p className="font-bold text-foreground">{f.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">الوحدات المتاحة</h3>
              <div className="grid grid-cols-2 gap-3">
                {units.map((u, i) => (
                  <div key={i} className="bg-background p-3 hover:shadow-md transition-shadow group border border-border">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{u.type}</p>
                    <p className="text-xs text-muted-foreground">{u.area}</p>
                    <p className="text-xs text-primary font-semibold mt-1">{u.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">مميزات المشروع</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "مدرسة King's الدولية", "فندق 5 نجوم داخل الكمبوند", "The Ridge Park المركزي",
                  "نادي رياضي واجتماعي", "80% مساحات خضراء", "5 دقائق من العاصمة الإدارية",
                  "15 دقيقة من AUC", "بحيرات اصطناعية وممشى",
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />{a}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-bold text-lg mb-3 text-foreground">أنظمة السداد</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary" /><span><strong>الخطة 1:</strong> 10% مقدم + 5% عقد — أقساط 7 سنوات</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary" /><span><strong>الخطة 2:</strong> 20% مقدم — أقساط 8 سنوات</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary" /><span><strong>الخطة 3:</strong> 3% مقدم + 5% عقد — أقساط 10 سنوات</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
