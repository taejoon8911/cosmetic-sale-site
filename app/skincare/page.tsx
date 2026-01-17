import Header from "@/components/header"
import SkincareProducts from "@/components/skincare-products"
import Footer from "@/components/footer"

export default function SkincarePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <SkincareProducts />
            </div>
            <Footer />
        </main>
    )
}
