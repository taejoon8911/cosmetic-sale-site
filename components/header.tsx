"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import SearchModal from "@/components/search-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/skincare" className="text-sm tracking-wide hover:text-primary transition-colors">
              스킨케어
            </Link>
            <Link href="/makeup" className="text-sm tracking-wide hover:text-primary transition-colors">
              메이크업
            </Link>
            <Link href="/bodycare" className="text-sm tracking-wide hover:text-primary transition-colors">
              바디케어
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.2em]">LUMIÈRE</h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            <Link href="/skincare" className="text-lg tracking-wide hover:text-primary transition-colors py-2">
              스킨케어
            </Link>
            <Link href="/makeup" className="text-lg tracking-wide hover:text-primary transition-colors py-2">
              메이크업
            </Link>
            <Link href="/bodycare" className="text-lg tracking-wide hover:text-primary transition-colors py-2">
              바디케어
            </Link>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="gap-2">
                <Search className="w-4 h-4" />
                검색
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                로그인
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  )
}
