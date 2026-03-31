import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productsService";

export function useProducts()  {

    const query = useQuery({
        queryKey: ['products'],
        queryFn: productService.getProducts
    })

    return {
        products: query.data ?? [],
        isLoading: query.isLoading,
        isError: query.isError
    }
}