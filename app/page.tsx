import Header from "@/components/header"
import Hero from "@/components/hero"
import BadyaSection from "@/components/badya-section"
import NewCairoSection from "@/components/newcairo-section"
import HaciendaSection from "@/components/hacienda-section"
import AboutDeveloper from "@/components/about-developer"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BadyaSection />
      <NewCairoSection />
      <HaciendaSection />
      <section
        id="contact"
        className="py-20 lg:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">تواصل معنا</h2>
            <p className="text-white/70 text-lg">اختر مشروعك وسنتواصل معك في أقرب وقت</p>
          </div>
          <ContactSection />
        </div>
      </section>
      <AboutDeveloper />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}

import LeadForm from "@/components/lead-form"
function ContactSection() {
  return (
    <LeadForm project="تواصل عام"
      units={[
        { value: "بادية - شقة", label: "بادية أكتوبر — شقة" },
        { value: "بادية - فيلا", label: "بادية أكتوبر — فيلا / تاون هاوس" },
        { value: "تجمع - شقة", label: "التجمع الخامس — شقة / تاون هاوس" },
        { value: "تجمع - فيلا", label: "التجمع الخامس — فيلا" },
        { value: "هاسيندا باي", label: "Hacienda Bay — سيدي عبد الرحمن" },
        { value: "هاسيندا ووترز", label: "Hacienda Waters — رأس الحكمة" },
        { value: "هاسيندا هنيش", label: "Hacienda Heneish — سيدي هنيش" },
      ]} />
  )
}
