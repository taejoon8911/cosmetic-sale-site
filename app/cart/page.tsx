"use client"

import { useCart } from "@/components/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

export default function CartPage() {
    const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart()

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price)
    }

    if (items.length === 0) {
        return (
            <main className="min-h-screen">
                <Header />
                <div className="pt-20 pb-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center py-24">
                            <h1 className="text-4xl md:text-5xl font-light mb-6">장바구니</h1>
                            <p className="text-muted-foreground mb-8">장바구니가 비어있습니다.</p>
                            <Button asChild>
                                <a href="/">쇼핑 계속하기</a>
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 헤더 */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-light mb-4">장바구니</h1>
                        <p className="text-muted-foreground">총 {items.length}개의 제품</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* 장바구니 아이템 목록 */}
                        <div className="lg:col-span-2 space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 bg-card p-4 rounded-lg">
                                    {/* 제품 이미지 */}
                                    <div className="w-24 h-24 bg-secondary rounded overflow-hidden flex-shrink-0">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* 제품 정보 */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-xs text-muted-foreground mb-1">{item.nameEn}</p>
                                                <h3 className="font-medium">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">{item.category}</p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-muted-foreground hover:text-destructive transition-colors p-2"
                                                aria-label="제품 삭제"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            {/* 수량 조절 */}
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </Button>
                                                <span className="w-12 text-center">{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </Button>
                                            </div>

                                            {/* 가격 */}
                                            <div className="text-right">
                                                <p className="font-medium">₩{formatPrice(item.price * item.quantity)}</p>
                                                {item.quantity > 1 && (
                                                    <p className="text-xs text-muted-foreground">
                                                        ₩{formatPrice(item.price)} × {item.quantity}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* 장바구니 비우기 버튼 */}
                            <Button variant="outline" onClick={clearCart} className="w-full">
                                장바구니 비우기
                            </Button>
                        </div>

                        {/* 주문 요약 */}
                        <div className="lg:col-span-1">
                            <div className="bg-card p-6 rounded-lg sticky top-24">
                                <h2 className="text-xl font-medium mb-6">주문 요약</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">상품 금액</span>
                                        <span>₩{formatPrice(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">배송비</span>
                                        <span>{totalPrice >= 50000 ? "무료" : "₩3,000"}</span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <div className="flex justify-between font-medium text-lg">
                                            <span>총 결제 금액</span>
                                            <span>₩{formatPrice(totalPrice >= 50000 ? totalPrice : totalPrice + 3000)}</span>
                                        </div>
                                    </div>
                                </div>

                                {totalPrice < 50000 && (
                                    <p className="text-xs text-muted-foreground mb-4 text-center">
                                        ₩{formatPrice(50000 - totalPrice)} 더 구매하시면 무료배송!
                                    </p>
                                )}

                                <Button className="w-full mb-3" size="lg">
                                    결제하기
                                </Button>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href="/">쇼핑 계속하기</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
