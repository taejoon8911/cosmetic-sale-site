"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Sparkles, Award } from "lucide-react"

export default function BrandStoryPage() {
    const [activeTab, setActiveTab] = useState("story")

    const values = [
        {
            icon: Leaf,
            title: "자연에서 영감을",
            description: "자연의 순수함과 생명력을 담아 피부 본연의 아름다움을 깨웁니다.",
        },
        {
            icon: Heart,
            title: "진심을 담은 케어",
            description: "고객 한 분 한 분의 피부를 생각하며 정성스럽게 제품을 만듭니다.",
        },
        {
            icon: Sparkles,
            title: "혁신적인 기술",
            description: "최신 뷰티 기술과 전통적인 지혜를 결합하여 최상의 결과를 제공합니다.",
        },
        {
            icon: Award,
            title: "프리미엄 품질",
            description: "엄선된 성분과 철저한 품질 관리로 최고의 제품을 선사합니다.",
        },
    ]

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/elegant-skincare-products-on-marble-background-sof.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-background/60" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <p className="text-sm tracking-[0.3em] uppercase mb-6 text-muted-foreground">Our Story</p>
                    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
                        브랜드 스토리
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        자연의 아름다움과 과학의 만남
                    </p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="py-12 px-6 border-b">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center gap-8">
                        <button
                            onClick={() => setActiveTab("story")}
                            className={`text-lg pb-2 transition-colors ${activeTab === "story"
                                ? "border-b-2 border-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            우리의 이야기
                        </button>
                        <button
                            onClick={() => setActiveTab("values")}
                            className={`text-lg pb-2 transition-colors ${activeTab === "values"
                                ? "border-b-2 border-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            핵심 가치
                        </button>
                        <button
                            onClick={() => setActiveTab("vision")}
                            className={`text-lg pb-2 transition-colors ${activeTab === "vision"
                                ? "border-b-2 border-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            비전
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {activeTab === "story" && (
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-light mb-6">
                                    자연에서 시작된
                                    <br />
                                    <span className="font-medium italic">아름다움의 여정</span>
                                </h2>
                                <div className="space-y-6 text-muted-foreground leading-relaxed">
                                    <p>
                                        우리는 자연의 순수함과 과학의 혁신을 결합하여, 피부 본연의 아름다움을 깨우는 제품을 만듭니다.
                                    </p>
                                    <p>
                                        엄선된 천연 성분과 최신 뷰티 기술의 조화로, 모든 피부 타입에 맞는 프리미엄 솔루션을 제공합니다.
                                    </p>
                                    <p>
                                        지속 가능한 뷰티를 추구하며, 환경과 피부 모두를 생각하는 책임감 있는 브랜드로 성장하고 있습니다.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] bg-card overflow-hidden">
                                <img
                                    src="/elegant-skincare-products-on-marble-background-sof.jpg"
                                    alt="Brand Story"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === "values" && (
                        <div>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-light mb-4">우리의 핵심 가치</h2>
                                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    고객의 아름다움과 건강을 최우선으로 생각하는 네 가지 약속
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                                            <value.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "vision" && (
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-light mb-6">
                                    미래를 향한
                                    <br />
                                    <span className="font-medium italic">우리의 비전</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    우리는 단순히 화장품을 만드는 것이 아닌,
                                    <br className="hidden md:block" />
                                    사람들의 삶에 긍정적인 변화를 가져오는 브랜드가 되고자 합니다.
                                </p>
                            </div>

                            <div className="space-y-12">
                                <div className="bg-card p-8 border-l-4 border-primary">
                                    <h3 className="text-2xl font-medium mb-4">지속 가능한 뷰티</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        환경을 생각하는 패키징과 친환경 성분 사용으로 지구와 함께 성장하는 브랜드를 만들어갑니다.
                                    </p>
                                </div>

                                <div className="bg-card p-8 border-l-4 border-primary">
                                    <h3 className="text-2xl font-medium mb-4">혁신적인 연구개발</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        끊임없는 연구와 개발을 통해 더 효과적이고 안전한 제품을 선보이며, 뷰티 산업의 혁신을 이끌어갑니다.
                                    </p>
                                </div>

                                <div className="bg-card p-8 border-l-4 border-primary">
                                    <h3 className="text-2xl font-medium mb-4">고객과의 소통</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        고객의 목소리에 귀 기울이며, 함께 성장하는 커뮤니티를 만들어 모두가 아름다움을 경험할 수 있도록 합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-card">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-6">
                        당신의 아름다움을 위한
                        <br />
                        <span className="font-medium italic">특별한 경험</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        프리미엄 제품으로 피부 본연의 아름다움을 발견해보세요
                    </p>
                    <Button size="lg" className="px-8 py-6 text-sm tracking-widest rounded-none" asChild>
                        <a href="/">컬렉션 둘러보기</a>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    )
}
