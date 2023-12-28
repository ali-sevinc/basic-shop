import { DUMMY_PRODUCTS } from "../dummy-products.ts";
import Product from "./Product.js";

export default function Shop() {
  return (
    <section className="max-w-5xl pb-24 mx-auto">
      <h2 className="text-3xl text-amber-300 text-center py-8">
        Elegant Clothing For Everyone
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id} className="mx-auto">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
