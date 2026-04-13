"use client"

import Image from "next/image"
import {
  Waves, PersonStanding, ShoppingBag, Heart,
  Dumbbell, Trees, Shield, Baby, School, UtensilsCrossed,
} from "lucide-react"

export default function IlmonteAmenities() {
  const amenities = [
    { icon: Waves, title: "إطلالة بحرية مباشرة", description: "إطلالات بانورامية على البحر الأحمر من جميع الوحدات" },
    { icon: PersonStanding, title: "ممشى سياحي 1 كم", description: "ممشى على البحر مباشرة مع مطاعم وكافيهات عالمية" },
    { icon: Waves, title: "مارينا IGY", description: "تستع +150 يخت بإدارة أمريكية" },
    { icon: Heart, title: "إدارة Marriott", description: "فندق وخدمات فندقية عالمية من Marriott International" },
    { icon: ShoppingBag, title: "مركز معارض ومؤتمرات", description: "مركز دولي بإدارة BCI Realty البريطانية" },
    { icon: Dumbbell, title: "حمامات سباحة infinity", description: "مسابح مطلة على البحر مباشرة" },
    { icon: Trees, title: "مساحات خضراء", description: "حدائق ومناظر طبيعية على الجبل والبحر" },
    { icon: UtensilsCrossed, title: "مطاعم عالمية", description: "مطاعم وكافيهات ومحلات تجارية عالمية" },
    { icon: Baby, title: "تشطيب كامل", description: "جميع الوحدات بتشطيب كامل وجاهزة للسكن" },
    { icon: Shield, title: "أمن وحراسة 24/7", description: "نظام أمني متطور على مدار الساعة" },
  ]

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with image */}
          <div className="relative h-[300px] lg:h-[400px] overflow-hidden mb-16">
            <Image
              src="/images/ilmonte/amenities.webp"
              alt="مميزات IL Monte Galala"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">المميزات والخدمات</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                حياة متكاملة
              </h2>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
                تمتع بأسلوب حياة راقٍ مع مجموعة واسعة من المرافق والخدمات الحديثة
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Marriott featured card */}
            <div className="col-span-2 bg-primary text-primary-foreground p-6 flex items-start gap-4 hover:bg-primary/90 transition-colors duration-300">
              <span className="text-3xl flex-shrink-0">🏨</span>
              <div>
                <h3 className="text-base font-bold mb-1">إدارة Marriott International</h3>
                <p className="text-sm text-primary-foreground/80">Branded Residences وServiced Units بخدمات فندقية عالمية على البحر</p>
              </div>
            </div>

            {amenities.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="bg-background p-4 hover:shadow-lg transition-all duration-300 group relative after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-sm font-bold text-foreground mb-1 leading-tight">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
