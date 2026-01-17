import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "스킨케어",
    subtitle: "Skincare",
    description: "피부 깊숙이 스며드는 수분과 영양",
    image: "/luxury-skincare-serum-bottle-minimalist.jpg",
    href: "/skincare",
  },
  {
    title: "메이크업",
    subtitle: "Makeup",
    description: "자연스러운 아름다움을 완성하는 컬러",
    image: "/elegant-makeup-lipstick-compact-powder-minimalist.jpg",
    href: "/makeup",
  },
  {
    title: "바디케어",
    subtitle: "Body Care",
    description: "온몸에 전하는 부드러운 케어",
    image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
    href: "/bodycare",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Categories</p>
          <h3 className="text-3xl md:text-4xl font-light">카테고리</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group relative overflow-hidden bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-widest text-card/70 mb-1">{category.subtitle}</p>
                    <h4 className="text-2xl font-medium text-card mb-2">{category.title}</h4>
                    <p className="text-sm text-card/80">{category.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-card/30 flex items-center justify-center text-card group-hover:bg-card group-hover:text-foreground transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
