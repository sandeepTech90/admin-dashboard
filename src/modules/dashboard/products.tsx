import { useState } from "react";
import { useProducts } from "../../hooks/useProducts"

const Products = () => {
    const { fetchProducts, products } = useProducts();
    const [filter, setFilter] = useState<string>("");
    fetchProducts();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setFilter(query);

    };
    const filtered = products.filter(product => product.name.toLowerCase().includes(filter));


    return (
        <div>
            <input
                type="text"
                onChange={onChangeHandler}
                placeholder="Search Products" />
            {filtered.map(product => (
                <div key={product.id}>
                    <p>{product.name} - ${product.price}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Products