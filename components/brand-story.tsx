import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/elegant-woman-natural-beauty-skincare-soft-lightin.jpg" alt="Brand Story" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-border bg-background p-6 flex flex-col justify-center">
              <p className="text-4xl font-light mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Story</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
              자연에서 찾은
              <br />
              <span className="italic">순수한 아름다움</span>
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>루미에르는 2015년, 피부 본연의 아름다움을 믿는 작은 연구실에서 시작되었습니다.</p>
              <p>
                자연에서 영감받은 성분과 과학적인 연구를 통해, 모든 피부가 가진 고유한 아름다움을 깨우는 것이 우리의
                철학입니다.
              </p>
              <p>까다로운 성분 선별부터 친환경 패키징까지, 모든 과정에서 진정성을 담아 제품을 만들어갑니다.</p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-8 py-6 text-sm tracking-widest bg-transparent"
            >
              더 알아보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
