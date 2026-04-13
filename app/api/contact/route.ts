import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, project, unitType } = body

    const response = await fetch("https://formsubmit.co/ajax/ahany9710@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name, phone,
        email: email || "لم يتم تحديده",
        "المشروع": project || "لم يتم تحديده",
        "نوع الوحدة": unitType || "لم يتم تحديده",
        _cc: "Sherifshenawy20@gmail.com,a.abdelraheem6696@gmail.com",
        _subject: `استفسار جديد - Palm Hills - ${project || ""}`,
        _captcha: "false",
        _template: "table",
      }),
    })

    if (response.ok) return NextResponse.json({ success: true })
    throw new Error("Failed")
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
