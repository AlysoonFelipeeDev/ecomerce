export interface Product  {
    id: string
    name: string
    price: string
    imageUrl: string
    category: string
}

export interface CartItem extends Product {
    quantity: number
}

export interface ApiProduct {
    id: string,
    title: string,
    price: string,
    thumbnail: string,
    category: string
}