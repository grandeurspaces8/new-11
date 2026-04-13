"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"

const menuItems = [
  { name: "بادية أكتوبر", id: "badya" },
  { name: "بالم هيلز التجمع", id: "newcairo" },
  { name: "هاسيندا الساحل", id: "hacienda" },
  { name: "تواصل معنا", id: "contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-lg shadow-lg" : "bg-white/95 backdrop-blur-md shadow-sm"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-white font-black text-sm">PH</span>
            </div>
            <span className="font-black text-foreground text-lg hidden sm:block">Palm Hills</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={e => scrollTo(e, item.id)}
                className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300 text-base">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs text-muted-foreground">للاستفسار والحجز</span>
              <a href="tel:+201554999269" className="text-base lg:text-lg font-bold text-primary" dir="ltr">01554 999 269</a>
            </div>
            <a href="tel:+201554999269" className="sm:hidden w-10 h-10 bg-primary text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border py-3">
          <div className="container mx-auto px-4 flex flex-col">
            {menuItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={e => scrollTo(e, item.id)}
                className="py-3 px-4 text-right font-medium hover:text-primary hover:bg-muted border-b border-border last:border-0 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="tel:+201554999269" className="mt-3 py-3 bg-primary text-white font-bold text-center flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /><span dir="ltr">01554 999 269</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
