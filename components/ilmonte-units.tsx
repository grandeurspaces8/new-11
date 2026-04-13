"use client"

import { Home } from "lucide-react"

export default function IlmonteUnits() {
  const units = [
    { type: "ستوديو", area: "60 م²" },
    { type: "غرفة نوم واحدة", area: "90 - 120 م²" },
    { type: "غرفتين نوم", area: "120 - 145 م²", popular: true },
    { type: "3 غرف + غرفة مربية", area: "230 م²" },
    { type: "لوفت", area: "105 - 145 م²" },
    { type: "بنتهاوس", area: "415 - 450 م²", limited: true },
  ]

  return (
    <section id="units" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">الوحدات المتاحة</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              الوحدات المتاحة
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              تنوع في الوحدات السكنية الفندقية الفاخرة بتشطيب كامل
            </p>
            <div className="inline-block bg-primary/10 px-8 py-4">
              <p className="text-sm text-muted-foreground mb-1">الأسعار تبدأ من</p>
              <p className="text-3xl lg:text-4xl font-bold text-primary">10,000,000 جنيه</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {units.map((unit, index) => (
              <div
                key={index}
                className="bg-muted/30 p-3 lg:p-5 hover:shadow-xl transition-all duration-300 relative group"
              >
                {unit.popular && (
                  <span className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
                    الأكثر طلباً
                  </span>
                )}
                {unit.limited && (
                  <span className="absolute top-0 left-0 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1">
                    محدود
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-sm lg:text-base font-bold text-foreground mb-0.5">{unit.type}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">{unit.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center border-t border-border pt-6">
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">قيمة الحجز:</strong> 200,000 جنيه (شيك أو تحويل)
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">نظام السداد:</strong> 5% مقدم وأقساط على 10 سنوات بدون فوائد
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
