import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-foreground text-card py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="text-center pb-16 border-b border-card/10">
          <h4 className="text-2xl md:text-3xl font-light mb-4">뉴스레터 구독하기</h4>
          <p className="text-card/60 mb-8 max-w-md mx-auto">신제품 소식과 특별한 혜택을 가장 먼저 받아보세요</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="이메일 주소"
              className="flex-1 bg-transparent border-card/20 text-card placeholder:text-card/40 rounded-none h-12"
            />
            <Button
              type="submit"
              className="bg-card text-foreground hover:bg-card/90 rounded-none h-12 px-8 tracking-wider"
            >
              구독
            </Button>
          </form>
        </div>

        {/* Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <h5 className="text-sm tracking-widest mb-6">쇼핑하기</h5>
            <ul className="space-y-3 text-sm text-card/60">
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  스킨케어
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  메이크업
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  바디케어
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  선물세트
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm tracking-widest mb-6">고객센터</h5>
            <ul className="space-y-3 text-sm text-card/60">
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  배송 안내
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  교환/반품
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  1:1 문의
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm tracking-widest mb-6">브랜드</h5>
            <ul className="space-y-3 text-sm text-card/60">
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  성분 철학
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  지속가능성
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-card transition-colors">
                  매장 안내
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm tracking-widest mb-6">팔로우</h5>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 border border-card/20 flex items-center justify-center hover:bg-card/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-card/20 flex items-center justify-center hover:bg-card/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-card/20 flex items-center justify-center hover:bg-card/10 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-card/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl tracking-[0.2em]">LUMIÈRE</h2>
          <p className="text-xs text-card/40">© 2025 LUMIÈRE. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-card/40">
            <Link href="#" className="hover:text-card transition-colors">
              이용약관
            </Link>
            <Link href="#" className="hover:text-card transition-colors">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
