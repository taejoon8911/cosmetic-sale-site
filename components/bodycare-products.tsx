"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"

const bodycareProducts = [
    {
        id: 1,
        name: "바디 로션",
        nameEn: "Body Lotion",
        price: 48000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "로션",
        tag: "베스트",
    },
    {
        id: 2,
        name: "핸드 크림",
        nameEn: "Hand Cream",
        price: 32000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "크림",
        tag: "신제품",
    },
    {
        id: 3,
        name: "바디 워시",
        nameEn: "Body Wash",
        price: 38000,
        image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
        category: "워시",
        tag: null,
    },
    {
        id: 4,
        name: "바디 스크럽",
        nameEn: "Body Scrub",
        price: 45000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "스크럽",
        tag: null,
    },
    {
        id: 5,
        name: "바디 오일",
        nameEn: "Body Oil",
        price: 58000,
        image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
        category: "오일",
        tag: "한정판",
    },
    {
        id: 6,
        name: "풋 크림",
        nameEn: "Foot Cream",
        price: 35000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "크림",
        tag: null,
    },
]

export default function BodycareProducts() {
    const [favorites, setFavorites] = useState<number[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("전체")
    const { addItem } = useCart()
    const { toast } = useToast()

    const categories = ["전체", "로션", "크림", "워시", "스크럽", "오일"]

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price)
    }

    const handleAddToCart = (product: typeof bodycareProducts[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            nameEn: product.nameEn,
            price: product.price,
            image: product.image,
            category: product.category,
        })
        toast({
            title: "장바구니에 추가되었습니다",
            description: `${product.name}이(가) 장바구니에 담겼습니다.`,
        })
    }

    const filteredProducts =
        selectedCategory === "전체"
            ? bodycareProducts
            : bodycareProducts.filter((product) => product.category === selectedCategory)

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* 헤더 */}
                <div className="mb-16 text-center">
                    <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Body Care</p>
                    <h2 className="text-4xl md:text-5xl font-light mb-6">바디케어</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        온몸에 전하는 부드러운 케어로 매일을 특별하게 만들어보세요.
                    </p>
                </div>

                {/* 카테고리 필터 */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            className="rounded-full px-6"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* 제품 그리드 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group">
                            <div className="relative aspect-[4/5] bg-card overflow-hidden mb-4">
                                {product.tag && (
                                    <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs px-3 py-1 tracking-wider">
                                        {product.tag}
                                    </span>
                                )}
                                <button
                                    onClick={() => toggleFavorite(product.id)}
                                    className="absolute top-4 right-4 z-10 w-9 h-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors hover:bg-card"
                                >
                                    <Heart
                                        className={`w-4 h-4 transition-colors ${favorites.includes(product.id) ? "fill-accent text-accent" : "text-foreground"
                                            }`}
                                    />
                                </button>
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button
                                        className="w-full rounded-none text-sm tracking-wider"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        장바구니 담기
                                    </Button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-muted-foreground tracking-wider mb-1">{product.nameEn}</p>
                                <h4 className="text-lg font-medium mb-2">{product.name}</h4>
                                <p className="text-sm text-muted-foreground">₩{formatPrice(product.price)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
