"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/ahany9710@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "لم يتم تحديده",
          "نوع الوحدة": formData.unitType || "لم يتم تحديده",
          _cc: "Sherifshenawy20@gmail.com,a.abdelraheem6696@gmail.com",
          _subject: "استفسار جديد - IL Monte Galala",
          _captcha: "false",
          _template: "table",
        }),
      })

      if (response.ok) {
        toast({
          title: "تم الإرسال بنجاح!",
          description: "سنتواصل معك في أقرب وقت ممكن",
        })
        setFormData({ name: "", email: "", phone: "", unitType: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-2xl border-0 bg-card my-0 transition-all duration-500 hover:shadow-3xl">
      <CardHeader className="pb-0 space-y-0">
        <CardTitle className="text-2xl font-bold text-foreground my-0 text-center">احجز استشارة</CardTitle>
        <p className="text-sm text-muted-foreground text-center pt-1">سيتواصل معك فريقنا خلال 24 ساعة</p>
      </CardHeader>
      <CardContent className="mt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="الاسم الكامل *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="text-right h-11 text-sm"
          />
          <Input
            type="tel"
            placeholder="رقم الهاتف *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            dir="ltr"
            className="text-right h-11 text-sm"
          />
          <Input
            type="email"
            placeholder="البريد الإلكتروني (اختياري)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-right h-11 text-sm"
          />
          <Select onValueChange={(value) => setFormData({ ...formData, unitType: value })}>
            <SelectTrigger className="h-11 text-sm text-right">
              <SelectValue placeholder="نوع الوحدة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ستوديو">ستوديو — 60 م²</SelectItem>
              <SelectItem value="غرفة نوم">غرفة نوم — 90-120 م²</SelectItem>
              <SelectItem value="غرفتين نوم">غرفتين نوم — 120-145 م²</SelectItem>
              <SelectItem value="3 غرف + مربية">3 غرف + مربية — 230 م²</SelectItem>
              <SelectItem value="لوفت">لوفت — 105-145 م²</SelectItem>
              <SelectItem value="بنتهاوس">بنتهاوس — 415-450 م²</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-base font-bold"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin ml-2" />
                جاري الإرسال...
              </>
            ) : (
              "احجز الآن — مجاناً"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
