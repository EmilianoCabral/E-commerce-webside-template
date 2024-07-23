import './pageproduct.css'
import { askfordata } from '../../data/helpers/askfordata';
import { ProductsProps } from '../../data/types';
import { useEffect, useState } from 'react';


export const Pageproductos = () => {
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        askfordata ()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section className="page_product">
            <div className="page_container">
                <article className="sidebar">
                    <div >
                        <button>Brand</button>
                    </div>
                </article>
                <header className="header_product">
                    <div>
                        <p>Selected product</p>
                    </div>
                </header>
                <section className="box_1">
                    {products.map(product => (
                        <div>
                            <div>
                                {product.img}
                            </div>
                            <h2>
                                {product.name}
                            </h2>
                            <span>
                                {product.price}
                            </span>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
};
