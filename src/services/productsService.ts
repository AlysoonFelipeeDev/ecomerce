import { api } from "../lib/api";
import type { ApiProduct, Product } from "../types";

export const productService = {
    async getProducts(): Promise<Product[]> {
        const response = await api.get<{products: ApiProduct[]}>('/products?limit=12')
        const products = response.data.products.map(prod => {
            return {
                ...prod,
                id: prod.id.toString(),
                name: prod.title,
                imageUrl: prod.thumbnail,
            }  
        })
        return products
    },
}