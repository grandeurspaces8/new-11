"use client"

import Image from "next/image"
import { MapPin, Navigation } from "lucide-react"

export default function IlmonteLocation() {
  const nearbyPlaces = [
    "جبل الجلالة — العين السخنة على البحر الأحمر مباشرة",
    "ساعة و20 دقيقة من القاهرة",
    "إطلالات بانورامية خلابة على البحر الأحمر",
    "موقع استراتيجي على الساحل الشمالي للبحر الأحمر",
  ]

  return (
    <section id="location" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">الموقع</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">موقع استثنائي</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              موقع فريد على جبل الجلالة في العين السخنة — على البحر الأحمر مباشرة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">موقع استثنائي على البحر</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    يقع IL Monte Galala على جبل الجلالة في العين السخنة، على البحر الأحمر مباشرة.
                    موقع فريد يجمع بين جمال الجبل وروعة البحر مع إطلالات بانورامية خلابة.
                  </p>
                </div>
              </div>

              <div className="bg-background p-6 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <Navigation className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-bold text-foreground">مميزات الموقع</h4>
                </div>
                <ul className="space-y-3">
                  {nearbyPlaces.map((place, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary flex-shrink-0" />
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden shadow-2xl h-[400px] lg:h-[500px] relative">
              <Image
                src="/images/ilmonte/masterplan.jpg"
                alt="مخطط موقع IL Monte Galala — المونت جلالة"
                fill
                className="object-contain bg-muted/10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
