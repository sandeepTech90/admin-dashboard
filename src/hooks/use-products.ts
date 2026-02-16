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
        // fetch(`http://localhost:4000/products/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(() => {
        //         fetchProducts();
        //     });
        setProducts(prev => prev.filter(p => p.id !== id));
    }

    const getRandomProducts = () => {
        return Array.from({ length: 100000 }, (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            price: Math.random() * 1000
        }));
    }

    useEffect(() => {
        // fetchProducts();
        setProducts(getRandomProducts());
    }, []);
    
    return { products, refetch: fetchProducts, removeProduct: deleteProduct };
}