import { useState } from "react";

export type Product = {
    id: number;
    name: string;
    price: number;
}

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:4000/products');
        const data = await response.json();
        setProducts(data);
    }

    return { products, fetchProducts };
}