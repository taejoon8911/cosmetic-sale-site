"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Clock, TrendingUp } from "lucide-react"
import { searchProducts, type Product } from "@/lib/products-data"

interface SearchModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [recentSearches, setRecentSearches] = useState<string[]>([])
    const router = useRouter()

    // 로컬스토리지에서 최근 검색어 불러오기
    useEffect(() => {
        const saved = localStorage.getItem("recentSearches")
        if (saved) {
            try {
                setRecentSearches(JSON.parse(saved))
            } catch (error) {
                console.error("최근 검색어 로드 실패:", error)
            }
        }
    }, [])

    // 검색어 변경 시 실시간 결과 표시
    useEffect(() => {
        if (searchQuery.trim()) {
            const results = searchProducts(searchQuery)
            setSearchResults(results.slice(0, 5)) // 최대 5개만 표시
        } else {
            setSearchResults([])
        }
    }, [searchQuery])

    const handleSearch = (query: string) => {
        if (!query.trim()) return

        // 최근 검색어에 추가
        const updated = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5)
        setRecentSearches(updated)
        localStorage.setItem("recentSearches", JSON.stringify(updated))

        // 검색 결과 페이지로 이동
        router.push(`/search?q=${encodeURIComponent(query)}`)
        onOpenChange(false)
        setSearchQuery("")
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch(searchQuery)
        }
    }

    const popularSearches = ["세럼", "립스틱", "크림", "로션"]

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>제품 검색</DialogTitle>
                </DialogHeader>

                {/* 검색 입력 */}
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="제품명, 카테고리로 검색하세요..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="pl-10"
                            autoFocus
                        />
                    </div>
                    <Button onClick={() => handleSearch(searchQuery)}>검색</Button>
                </div>

                {/* 실시간 검색 결과 */}
                {searchResults.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-sm font-medium mb-3">검색 결과</h3>
                        <div className="space-y-2">
                            {searchResults.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => handleSearch(product.name)}
                                    className="w-full flex items-center gap-3 p-2 hover:bg-secondary rounded-lg transition-colors text-left"
                                >
                                    <div className="w-12 h-12 bg-secondary rounded overflow-hidden flex-shrink-0">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{product.name}</p>
                                        <p className="text-xs text-muted-foreground">{product.category}</p>
                                    </div>
                                    <p className="text-sm font-medium">₩{formatPrice(product.price)}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* 최근 검색어 */}
                {!searchQuery && recentSearches.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            최근 검색어
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {recentSearches.map((search, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleSearch(search)}
                                    className="rounded-full"
                                >
                                    {search}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}

                {/* 인기 검색어 */}
                {!searchQuery && (
                    <div className="mt-4">
                        <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            인기 검색어
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {popularSearches.map((search, index) => (
                                <Button
                                    key={index}
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleSearch(search)}
                                    className="rounded-full"
                                >
                                    {search}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
