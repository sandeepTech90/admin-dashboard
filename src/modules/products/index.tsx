import { useState } from "react";
import { useProducts } from "../../hooks/use-products";
import "./products.scss"; // Import the SCSS file

const Products = () => {
    console.log('re-rendering');

    const { products, removeProduct } = useProducts();
    const [filter, setFilter] = useState<string>("");

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
                <div key={product.id} className="product-row">
                    <p className="product-name">{product.name}</p>
                    <span className="product-price">{product.price}</span>
                    <button onClick={() => removeProduct(product.id)}>Delete</button>
                </div>
            ))
            }
        </div>
    )
}

export default Products