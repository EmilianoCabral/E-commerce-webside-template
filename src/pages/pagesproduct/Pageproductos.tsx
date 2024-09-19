import "./pageproduct.css";
import { askfordata } from "../../data/helpers/askfordata";
import { ProductsProps } from "../../data/types";
import { useEffect, useState } from "react";
import AccordionTransition from "./component/AccordionTransition";
import { Buttons3 } from "../../Components/buttons/Buttons";

export const Pageproductos = () => {
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
    <div className="page_product">
      <div className="page_container">
        <section className="sidebar">
          <div>
            <AccordionTransition />
          </div>
        </section>
        <section className="box_1">
          <div className="prod_container">
            {products.map((product) => (
              <div className="style_products" key={product.id}>
                <div className="img_pro">
                  {product.img && <img src={product.img} alt={product.name} />}
                </div>
                <div className="container_text">
                  <h2 className="title_page">{product.name}</h2>
                  <span>${product.price}</span>
                </div>
                <div>
                    <Buttons3 title="view" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
