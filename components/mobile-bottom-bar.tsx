"use client"
export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t-2 border-border shadow-2xl">
      <div className="flex">
        <a href="tel:+201554999269"
          className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 px-6 font-bold text-center transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          اتصل الآن
        </a>
        <a href="#contact"
          className="flex-1 bg-secondary text-white py-4 px-6 font-bold text-center flex items-center justify-center gap-2 border-r border-border">
          سجل الآن
        </a>
      </div>
    </div>
  )
}
