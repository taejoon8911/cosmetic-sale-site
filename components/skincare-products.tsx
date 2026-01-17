"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"

const skincareProducts = [
  {
    id: 1,
    name: "글로우 세럼",
    nameEn: "Glow Serum",
    price: 89000,
    image: "/luxury-face-serum-glass-bottle-minimalist.jpg",
    category: "세럼",
    tag: "베스트",
  },
  {
    id: 2,
    name: "하이드라 크림",
    nameEn: "Hydra Cream",
    price: 75000,
    image: "/luxury-moisturizer-cream-jar-minimalist-white.jpg",
    category: "크림",
    tag: "신제품",
  },
  {
    id: 3,
    name: "클린징 오일",
    nameEn: "Cleansing Oil",
    price: 52000,
    image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
    category: "클렌저",
    tag: null,
  },
  {
    id: 4,
    name: "바디 로션",
    nameEn: "Body Lotion",
    price: 48000,
    image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
    category: "로션",
    tag: null,
  },
  {
    id: 5,
    name: "럭셔리 스킨케어 세트",
    nameEn: "Luxury Skincare Set",
    price: 125000,
    image: "/luxury-skincare-serum-bottle-minimalist.jpg",
    category: "세트",
    tag: "한정판",
  },
  {
    id: 6,
    name: "엘레강스 스킨케어",
    nameEn: "Elegance Skincare",
    price: 95000,
    image: "/elegant-skincare-products-on-marble-background-sof.jpg",
    category: "세트",
    tag: null,
  },
]

export default function SkincareProducts() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("전체")
  const { addItem } = useCart()
  const { toast } = useToast()

  const categories = ["전체", "세럼", "크림", "클렌저", "로션", "세트"]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price)
  }

  const handleAddToCart = (product: typeof skincareProducts[0]) => {
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
      ? skincareProducts
      : skincareProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Skincare</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">스킨케어</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            피부 본연의 아름다움을 되찾아주는 프리미엄 스킨케어 제품을 만나보세요.
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
