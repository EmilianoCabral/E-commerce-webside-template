import "./Discountproduc.css";
import { useEffect, useState } from "react";
import { askfordata } from "../../data/helpers/askfordata";
import { ProductsProps } from "../../data/types";
import { ifError } from "assert";

export const Discountproduc = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    askfordata()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="section_discount">
      <div className="discount_container">
        <div>
          <div className="discount_title">
            <h2>Discounts up to -50%</h2>
          </div>
          <div className="discount_item">
            <article className="item_info">
              {products.slice(0, 4).map((product) => (
                <div key={product.id}>
                  <div>
                    {product.img && (
                      <img src={product.img} alt={product.name} />
                    )}
                  </div>
                  <div>
                    <h2>{product.name}</h2>
                  </div>
                  <span>{product.price}</span>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
