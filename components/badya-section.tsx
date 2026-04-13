"use client"
import { useEffect, useRef, useState } from "react"
import LeadForm from "./lead-form"
import { MapPin, Trees, Building2, Zap } from "lucide-react"

export default function BadyaSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const units = [
    { type: "شقة", area: "85 - 250 م²", price: "تبدأ من 8.9M" },
    { type: "دوبلكس", area: "180 - 300 م²", price: "تبدأ من 12M" },
    { type: "تاون هاوس", area: "185+ م²", price: "تبدأ من 17.9M" },
    { type: "تاون هاوس كورنر", area: "190+ م²", price: "تبدأ من 19M" },
    { type: "تو\u064aن هاوس", area: "234 - 263 م²", price: "تبدأ من 20M" },
    { type: "فيلا مستقلة", area: "195 - 500 م²", price: "تبدأ من 21.3M" },
  ]

  const amenities = [
    { icon: Trees, label: "مساحات خضراء واسعة" },
    { icon: Building2, label: "6 أحياء سكنية مستقلة" },
    { icon: Zap, label: "مدينة ذكية ومستدامة" },
    { icon: MapPin, label: "قريب من أهرامات الجيزة" },
  ]

  return (
    <section id="badya" ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Label */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-primary" />
            <div>
              <p className="text-primary text-sm font-bold tracking-widest uppercase">Palm Hills — أكتوبر</p>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground">بادية أكتوبر</h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mr-5">
            مدينة متكاملة على 3000 فدان في قلب أكتوبر — مفهوم جديد كلياً للحياة الذكية والمستدامة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Info */}
          <div className={`space-y-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "المساحة", value: "3000 فدان" },
                { label: "الموقع", value: "طريق الواحات، أكتوبر" },
                { label: "المقدم", value: "0% — 10%" },
                { label: "التقسيط", value: "حتى 10 سنوات" },
              ].map((f, i) => (
                <div key={i} className="bg-muted/30 p-4 border-r-2 border-primary">
                  <p className="text-xs text-muted-foreground mb-1">{f.label}</p>
                  <p className="font-bold text-foreground">{f.value}</p>
                </div>
              ))}
            </div>

            {/* Units */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">الوحدات المتاحة</h3>
              <div className="grid grid-cols-2 gap-3">
                {units.map((u, i) => (
                  <div key={i} className="bg-muted/20 p-3 hover:bg-primary/5 transition-colors group">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{u.type}</p>
                    <p className="text-xs text-muted-foreground">{u.area}</p>
                    <p className="text-xs text-primary font-semibold mt-1">{u.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">مميزات المشروع</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "مساحات خضراء واسعة", "6 أحياء سكنية مستقلة", "مدينة ذكية ومستدامة",
                  "طاقة شمسية متجددة 30%", "مستشفى ومركز مؤتمرات", "مدارس ومجمعات تجارية",
                  "نادي رياضي واجتماعي", "15 دقيقة من أهرامات الجيزة",
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-bold text-lg mb-3 text-foreground">أنظمة السداد</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary" /><span><strong>الخطة 1:</strong> 0% مقدم — أقساط على 10 سنوات</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary" /><span><strong>الخطة 2:</strong> 10% مقدم — أقساط على 6-8 سنوات</span></div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-foreground -z-10 translate-x-2 translate-y-2" />
              <LeadForm project="بادية أكتوبر"
                units={[
                  { value: "شقة", label: "شقة — 85 إلى 250 م²" },
                  { value: "دوبلكس", label: "دوبلكس — 180 إلى 300 م²" },
                  { value: "تاون هاوس", label: "تاون هاوس — من 185 م²" },
                  { value: "توين هاوس", label: "توين هاوس — 234 إلى 263 م²" },
                  { value: "فيلا", label: "فيلا مستقلة — 195 إلى 500 م²" },
                ]} />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">سعر المتر يبدأ من 50,000 جنيه</p>
          </div>
        </div>
      </div>
    </section>
  )
}
