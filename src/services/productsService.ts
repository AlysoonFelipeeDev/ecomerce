import { api } from "../lib/api";
import type {Product} from "../types";

export const productService = {
    async getProducts(): Promise<Product[]> {
        const response = await api.get<Product[]>('/products')
        return response.data
    },
}