import { Building2, Users, Award, MapPin } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "34+", label: "مشروع متكامل" },
    { icon: MapPin, number: "4", label: "محافظات" },
    { icon: Users, number: "20K+", label: "وحدة مسلمة" },
    { icon: Award, number: "1997", label: "سنة التأسيس" },
  ]
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">من نحن</p>
          <h2 className="text-3xl lg:text-5xl font-black mb-4">Palm Hills Developments</h2>
          <p className="text-secondary-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            من أكبر شركات التطوير العقاري في مصر، مدرجة في البورصة المصرية وبورصة لندن — تمتلك أحد أكبر بنوك الأراضي في مصر بأكثر من 27 مليون متر مربع
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10">
                <s.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-black">{s.number}</div>
              <div className="text-sm text-secondary-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
