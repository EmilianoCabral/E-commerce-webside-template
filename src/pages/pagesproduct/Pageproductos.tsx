import './pageproduct.css'
import { askfordata } from '../../data/helpers/askfordata';
import { ProductsProps } from '../../data/types';
import { useEffect, useState } from 'react';


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
            })
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section className="page_product">
            <div className="page_container">
                <section className="sidebar">
                    <div >
                        <button>Brand</button>
                    </div>
                    <div>Apple</div>
                    <div>Samsung</div>
                    <div>Xiaomi</div>
                    <div>Motorola</div>
                    <article>
                        <div>
                            <button>Battery capacity</button>
                        </div>
                    </article>
                    <article>
                        <button>Memory</button>
                        
                    </article>
                </section>
                <header className="header_product">
                    <div>
                        <p>Selected product</p>
                    </div>
                </header>
                <section className="box_1">
                    {products.map(product => (
                        <div>
                            <div className="img_pro">
                                {product.img && <img src={product.img} alt={product.name} />}
                            </div>
                            <div className="container_text">
                                <h2 className="title_page">
                                    {product.name}
                                </h2>
                                <span>
                                    {product.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
};
