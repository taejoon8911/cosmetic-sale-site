import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/elegant-skincare-products-on-marble-background-sof.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 text-muted-foreground">Premium Beauty Collection</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-balance">
          당신의 아름다움이
          <br />
          <span className="font-medium italic">빛나는 순간</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          자연에서 영감받은 프리미엄 성분으로
          <br className="hidden md:block" />
          피부 본연의 아름다움을 깨워보세요
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-sm tracking-widest rounded-none">
            컬렉션 보기
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Link
            href="#"
            className="text-sm tracking-wide underline underline-offset-4 hover:text-primary transition-colors"
          >
            브랜드 스토리
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="w-full h-1/2 bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
