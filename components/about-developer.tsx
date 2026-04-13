import { Building2, Users, Award, MapPin } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "7", label: "مشاريع متكاملة" },
    { icon: MapPin, number: "4", label: "مواقع استراتيجية" },
    { icon: Users, number: "+25,000", label: "عميل" },
    { icon: Award, number: "2014", label: "سنة التأسيس" },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">من نحن</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">تطوير مصر</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              منذ تأسيسها عام 2014، كانت تطوير مصر محفزاً حيوياً للتغيير، حيث تقدم قيمة لا مثيل لها
              من خلال مشاريع مثالية تتقن جميع جوانب التطوير
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-primary/10">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
