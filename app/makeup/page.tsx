import Header from "@/components/header"
import MakeupProducts from "@/components/makeup-products"
import Footer from "@/components/footer"

export default function MakeupPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <MakeupProducts />
            </div>
            <Footer />
        </main>
    )
}
