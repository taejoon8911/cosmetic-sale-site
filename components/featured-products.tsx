"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "글로우 세럼",
    nameEn: "Glow Serum",
    price: 89000,
    image: "/luxury-face-serum-glass-bottle-minimalist.jpg",
    tag: "베스트",
  },
  {
    id: 2,
    name: "하이드라 크림",
    nameEn: "Hydra Cream",
    price: 75000,
    image: "/luxury-moisturizer-cream-jar-minimalist-white.jpg",
    tag: "신제품",
  },
  {
    id: 3,
    name: "벨벳 립스틱",
    nameEn: "Velvet Lipstick",
    price: 45000,
    image: "/elegant-lipstick-rose-gold-case-minimalist.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "클린징 오일",
    nameEn: "Cleansing Oil",
    price: 52000,
    image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
    tag: null,
  },
]

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price)
  }

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Featured Products</p>
            <h3 className="text-3xl md:text-4xl font-light">추천 제품</h3>
          </div>
          <Button variant="link" className="mt-4 md:mt-0 text-sm tracking-wide p-0 h-auto">
            전체 보기 →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
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
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(product.id) ? "fill-accent text-accent" : "text-foreground"
                    }`}
                  />
                </button>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full rounded-none text-sm tracking-wider">장바구니 담기</Button>
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
