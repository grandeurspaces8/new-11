import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "Palm Hills Developments — Badya | Palm Hills New Cairo | Hacienda",
  description: "اكتشف مشاريع بالم هيلز الفاخرة: بادية أكتوبر، بالم هيلز التجمع الخامس، وهاسيندا الساحل الشمالي. وحدات سكنية متميزة بأفضل الأسعار والأنظمة.",
  icons: { icon: "/favicon.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
