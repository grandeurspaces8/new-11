"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function IlmontePayment() {
  return (
    <section id="payment" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">أنظمة السداد</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">أنظمة السداد</h2>
            <p className="text-lg text-muted-foreground mb-8">
              نظام سداد مرن ومميز يناسب جميع العملاء بدون فوائد
            </p>
            <div className="relative w-full max-w-3xl mx-auto aspect-square overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/ilmonte/payment-plan.jpeg"
                alt="نظام السداد — 5% مقدم و10 سنوات تقسيط"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 px-6 lg:px-8 border-r-4 border-primary bg-primary/5 transition-all duration-300 hover:translate-x-2">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-primary" />
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="text-2xl md:text-3xl font-bold text-primary">5% مقدم</span>
                    <span className="text-lg text-muted-foreground">|</span>
                    <span className="text-lg font-semibold text-foreground">10 سنوات</span>
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                      الأكثر طلباً
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">أقساط على 10 سنوات بدون فوائد</p>
                </div>
              </div>
              <a
                href="#contact"
                className="self-start md:self-center bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 font-semibold transition-all duration-300 whitespace-nowrap"
              >
                احجز الآن
              </a>
            </div>
          </div>

          <div className="mt-8 text-center border-t border-border pt-6">
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">قيمة الحجز:</strong> 200,000 جنيه (شيك أو تحويل)
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">الأسعار تبدأ من:</strong> 10 مليون جنيه
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
