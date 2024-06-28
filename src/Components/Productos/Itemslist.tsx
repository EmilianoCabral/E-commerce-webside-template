import { Buttons3 } from '../buttons/Buttons'
import './Productos.css'
import { useEffect, useState } from 'react'
import { askfordata } from '../../data/helpers/askfordata';
import { ProductsProps } from '../../data/types';

export const Itemslist = () => {
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
        <>
            <div className="title_art">
                <h2>New Arrival</h2>
            </div>
            <div className="products_items">
                <article className="article">
                    {products.slice(0, 8).map(product => (
                        <div className="articles">
                            <div>
                                {product.img && <img src={product.img} alt={product.name} />}
                            </div>
                            <h2>
                                {product.name}
                            </h2>
                            <p>
                                {/* {product.description} */}
                            </p>
                            <span>
                                ${product.price}
                            </span>
                            <div>
                                {/* <Buttons3 title="Buy now" /> */}
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </>
    )
}
