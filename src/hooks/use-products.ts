import { useEffect, useState } from "react";

export type Product = {
    id: number;
    name: string;
    price: number;
}

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = () => {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }

    const deleteProduct = (id: number) => {
        fetch(`http://localhost:4000/products/${id}`, {
            method: 'DELETE'})
            .then(() => {
                fetchProducts();
            });
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    
    return { products, refetch: fetchProducts, removeProduct: deleteProduct };
}