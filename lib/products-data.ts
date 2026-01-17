export interface Product {
    id: number
    name: string
    nameEn: string
    price: number
    image: string
    category: string
    mainCategory: "skincare" | "makeup" | "bodycare"
    tag: string | null
}

export const allProducts: Product[] = [
    // 스킨케어 제품
    {
        id: 1,
        name: "글로우 세럼",
        nameEn: "Glow Serum",
        price: 89000,
        image: "/luxury-face-serum-glass-bottle-minimalist.jpg",
        category: "세럼",
        mainCategory: "skincare",
        tag: "베스트",
    },
    {
        id: 2,
        name: "하이드라 크림",
        nameEn: "Hydra Cream",
        price: 75000,
        image: "/luxury-moisturizer-cream-jar-minimalist-white.jpg",
        category: "크림",
        mainCategory: "skincare",
        tag: "신제품",
    },
    {
        id: 3,
        name: "클린징 오일",
        nameEn: "Cleansing Oil",
        price: 52000,
        image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
        category: "클렌저",
        mainCategory: "skincare",
        tag: null,
    },
    {
        id: 4,
        name: "바디 로션",
        nameEn: "Body Lotion",
        price: 48000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "로션",
        mainCategory: "skincare",
        tag: null,
    },
    {
        id: 5,
        name: "럭셔리 스킨케어 세트",
        nameEn: "Luxury Skincare Set",
        price: 125000,
        image: "/luxury-skincare-serum-bottle-minimalist.jpg",
        category: "세트",
        mainCategory: "skincare",
        tag: "한정판",
    },
    {
        id: 6,
        name: "엘레강스 스킨케어",
        nameEn: "Elegance Skincare",
        price: 95000,
        image: "/elegant-skincare-products-on-marble-background-sof.jpg",
        category: "세트",
        mainCategory: "skincare",
        tag: null,
    },
    // 메이크업 제품
    {
        id: 101,
        name: "벨벳 립스틱",
        nameEn: "Velvet Lipstick",
        price: 45000,
        image: "/elegant-lipstick-rose-gold-case-minimalist.jpg",
        category: "립",
        mainCategory: "makeup",
        tag: "베스트",
    },
    {
        id: 102,
        name: "컴팩트 파우더",
        nameEn: "Compact Powder",
        price: 58000,
        image: "/elegant-makeup-lipstick-compact-powder-minimalist.jpg",
        category: "페이스",
        mainCategory: "makeup",
        tag: "신제품",
    },
    {
        id: 103,
        name: "글로우 파운데이션",
        nameEn: "Glow Foundation",
        price: 68000,
        image: "/elegant-makeup-lipstick-compact-powder-minimalist.jpg",
        category: "페이스",
        mainCategory: "makeup",
        tag: null,
    },
    {
        id: 104,
        name: "실키 립글로스",
        nameEn: "Silky Lip Gloss",
        price: 38000,
        image: "/elegant-lipstick-rose-gold-case-minimalist.jpg",
        category: "립",
        mainCategory: "makeup",
        tag: null,
    },
    {
        id: 105,
        name: "아이섀도우 팔레트",
        nameEn: "Eyeshadow Palette",
        price: 72000,
        image: "/elegant-makeup-lipstick-compact-powder-minimalist.jpg",
        category: "아이",
        mainCategory: "makeup",
        tag: "한정판",
    },
    {
        id: 106,
        name: "매트 립스틱",
        nameEn: "Matte Lipstick",
        price: 42000,
        image: "/elegant-lipstick-rose-gold-case-minimalist.jpg",
        category: "립",
        mainCategory: "makeup",
        tag: null,
    },
    // 바디케어 제품
    {
        id: 201,
        name: "바디 로션",
        nameEn: "Body Lotion",
        price: 48000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "로션",
        mainCategory: "bodycare",
        tag: "베스트",
    },
    {
        id: 202,
        name: "핸드 크림",
        nameEn: "Hand Cream",
        price: 32000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "크림",
        mainCategory: "bodycare",
        tag: "신제품",
    },
    {
        id: 203,
        name: "바디 워시",
        nameEn: "Body Wash",
        price: 38000,
        image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
        category: "워시",
        mainCategory: "bodycare",
        tag: null,
    },
    {
        id: 204,
        name: "바디 스크럽",
        nameEn: "Body Scrub",
        price: 45000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "스크럽",
        mainCategory: "bodycare",
        tag: null,
    },
    {
        id: 205,
        name: "바디 오일",
        nameEn: "Body Oil",
        price: 58000,
        image: "/luxury-cleansing-oil-bottle-minimalist-gold.jpg",
        category: "오일",
        mainCategory: "bodycare",
        tag: "한정판",
    },
    {
        id: 206,
        name: "풋 크림",
        nameEn: "Foot Cream",
        price: 35000,
        image: "/luxury-body-lotion-cream-minimalist-beige.jpg",
        category: "크림",
        mainCategory: "bodycare",
        tag: null,
    },
]

// 검색 함수
export function searchProducts(query: string): Product[] {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    return allProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.nameEn.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery)
    )
}

// 카테고리별 제품 가져오기
export function getProductsByMainCategory(mainCategory: "skincare" | "makeup" | "bodycare"): Product[] {
    return allProducts.filter((product) => product.mainCategory === mainCategory)
}
