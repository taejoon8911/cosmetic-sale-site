import Header from "@/components/header"
import BodycareProducts from "@/components/bodycare-products"
import Footer from "@/components/footer"

export default function BodycarePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <BodycareProducts />
            </div>
            <Footer />
        </main>
    )
}
