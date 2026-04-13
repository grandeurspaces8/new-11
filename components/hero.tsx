"use client"

import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ilmonte/aerial-sunset.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* Right Column — Text */}
        <div className="flex items-center">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-4 text-center lg:text-right">
                <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
                  تطوير مصر — العين السخنة
                </p>
                <h1 className="text-4xl font-medium text-white leading-tight text-balance lg:text-5xl">
                  <span className="text-primary block text-5xl lg:text-7xl mb-3 font-black">IL Monte</span>
                  <span className="block text-4xl lg:text-5xl italic text-white/90">Galala</span>
                  <span className="block text-2xl lg:text-3xl font-light text-white/70 mt-2">المونت جلالة</span>
                </h1>

                <p className="text-lg lg:text-xl font-normal text-white/90 mb-3">
                  أبراج فندقية فاخرة — تطوير مصر
                </p>

                <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  لأول مرة على البحر الأحمر: أبراج سكنية فندقية فاخرة بارتفاع يصل لـ 22 دور على جبل الجلالة.
                  وحدات بتشطيب كامل وإطلالة بانورامية على البحر مع إدارة Marriott International.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: "10", label: "أبراج فندقية" },
                  { value: "2028", label: "التسليم" },
                  { value: "5%", label: "مقدم" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center lg:text-right space-y-1 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="text-3xl lg:text-4xl font-semibold text-primary">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Left Column — Form */}
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-full max-w-lg mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
