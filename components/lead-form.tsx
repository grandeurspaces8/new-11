"use client"
import type React from "react"
import { useState } from "react"

type Props = { project: string; units: { value: string; label: string }[] }

export default function LeadForm({ project, units }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", unitType: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://formsubmit.co/ajax/ahany9710@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name, phone: form.phone,
          email: form.email || "لم يتم تحديده",
          "المشروع": project,
          "نوع الوحدة": form.unitType || "لم يتم تحديده",
          _cc: "Sherifshenawy20@gmail.com,a.abdelraheem6696@gmail.com",
          _subject: `استفسار جديد - ${project}`,
          _captcha: "false", _template: "table",
        }),
      })
      setStatus(res.ok ? "success" : "error")
      if (res.ok) setForm({ name: "", phone: "", email: "", unitType: "" })
    } catch { setStatus("error") }
  }

  if (status === "success") return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 text-center">
      <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mx-auto mb-3">
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-white font-bold text-lg mb-1">تم الإرسال بنجاح!</p>
      <p className="text-white/60 text-sm">سيتواصل معك فريقنا قريباً</p>
    </div>
  )

  return (
    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6">
      <h3 className="text-xl font-bold text-white mb-1">سجل اهتمامك الآن</h3>
      <p className="text-white/60 text-sm mb-4">احجز وحدتك واحصل على أفضل العروض</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
          placeholder="الاسم الكامل *" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
        <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
          placeholder="رقم الهاتف *" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
          placeholder="البريد الإلكتروني" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
        <select value={form.unitType} onChange={e => setForm({...form, unitType: e.target.value})}
          className="w-full px-4 py-3 bg-black/60 border border-white/20 text-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
          <option value="">نوع الوحدة</option>
          {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
        </select>
        {status === "error" && <p className="text-red-400 text-xs text-center">حدث خطأ، يرجى المحاولة مرة أخرى</p>}
        <button type="submit" disabled={status === "loading"}
          className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-colors disabled:opacity-60">
          {status === "loading" ? "جاري الإرسال..." : "احجز الآن — مجاناً"}
        </button>
      </form>
    </div>
  )
}
