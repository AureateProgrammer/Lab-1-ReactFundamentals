import type { ProductDisplayProps } from "../types"

const product: ProductDisplayProps = {
    product: {
        id: "1",
        name: "Sample Product",
        price: 29.99,
        description: "This is a sample product.",
        inStock: true,
        imageUrl: "https://via.placeholder.com/150"
    },
    showDescription: true,
    showStockStatus: true,
}