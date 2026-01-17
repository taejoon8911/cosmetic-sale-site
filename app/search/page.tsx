"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { searchProducts, allProducts, type Product } from "@/lib/products-data"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function SearchPage() {
    const searchParams = useSearchParams()
    const query = searchParams.get("q") || ""
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("전체")
    const [favorites, setFavorites] = useState<number[]>([])
    const { addItem } = useCart()
    const { toast } = useToast()

    useEffect(() => {
        if (query) {
            const results = searchProducts(query)
            setSearchResults(results)
        } else {
            setSearchResults(allProducts)
        }
    }, [query])

    const categories = ["전체", "스킨케어", "메이크업", "바디케어"]

    const filteredResults =
        selectedCategory === "전체"
            ? searchResults
            : searchResults.filter((product) => {
                if (selectedCategory === "스킨케어") return product.mainCategory === "skincare"
                if (selectedCategory === "메이크업") return product.mainCategory === "makeup"
                if (selectedCategory === "바디케어") return product.mainCategory === "bodycare"
                return true
            })

    const toggleFavorite = (id: number) => {
        setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price)
    }

    const handleAddToCart = (product: Product) => {
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

    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 헤더 */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-light mb-4">
                            {query ? `"${query}" 검색 결과` : "전체 제품"}
                        </h1>
                        <p className="text-muted-foreground">
                            {filteredResults.length}개의 제품을 찾았습니다
                        </p>
                    </div>

                    {/* 카테고리 필터 */}
                    <div className="flex flex-wrap gap-3 mb-12">
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

                    {/* 검색 결과 */}
                    {filteredResults.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredResults.map((product) => (
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
                    ) : (
                        <div className="text-center py-24">
                            <p className="text-muted-foreground mb-8">
                                {query ? `"${query}"에 대한 검색 결과가 없습니다.` : "제품이 없습니다."}
                            </p>
                            <Button asChild>
                                <a href="/">홈으로 돌아가기</a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    )
}
