import {
  useCallback,
  useMemo,
  useState,
  useDeferredValue,
  useTransition
} from "react";
import { useProducts } from "../../hooks/use-products";
import "./products.scss";
import { List, AutoSizer, type ListRowProps } from "react-virtualized";

const Products = () => {
  const { products, removeProduct } = useProducts();

  const [searchTerm, setSearchTerm] = useState<string>("");

  // React 18 concurrent optimization
  const deferredSearch = useDeferredValue(searchTerm);

  // Derived state (no extra useState)
  const filteredProducts = useMemo(() => {
    if (!deferredSearch) return products;

    const lowerQuery = deferredSearch.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery)
    );
  }, [products, deferredSearch]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleDelete = useCallback(
    (id: number) => {
      removeProduct(id);
    },
    [removeProduct]
  );

  const rowRenderer = useCallback(
    ({ index, key, style }: ListRowProps) => {
      const product = filteredProducts[index];

      if (!product) return null;

      return (
        <div key={key} style={style} className="product-row">
          <p className="product-name">{product.name}</p>
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>
          <select>
            {[1,2,3,4,5,6,7,8,9,10].map(el => <option value={`option_${el}`}>Option {el}</option>)}
          </select>
          <button onClick={() => handleDelete(product.id)}>
            Delete
          </button>
        </div>
      );
    },
    [filteredProducts, handleDelete]
  );

  const [name, setName] = useState("");
  // const [loading, setLoading] = useState(false);
  const [loading, startTransition] = useTransition();
  const delay = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, ms);
    });
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await delay(5000)
    });
  }
  return (
    <div className="products-container">
      <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button disabled={loading} type="submit">Add Product</button>
      </form>
      <input
        value={searchTerm}
        type="text"
        onChange={handleChange}
        placeholder="Search Products"
        className="search-input"
      />

      <div style={{ height: 500}}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowHeight={40}
              rowCount={filteredProducts.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default Products;
