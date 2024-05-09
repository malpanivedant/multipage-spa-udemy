import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product I" },
  { id: "p2", title: "Product II" },
  { id: "p3", title: "Product III" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
        {/* <li><Link to="/products/product-I">Product I</Link></li>
        <li><Link to="/products/product-II">Product II</Link></li>
        <li><Link to="/products/product-III">Product III</Link></li> */}
      </ul>
    </>
  );
}
