import { Buttons } from '../buttons/Buttons'
import './Productos.css'
import { useEffect, useState } from 'react'
import { askfordata } from '../../data/helpers/askfordata';
import { ProductsProps } from '../types';

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
            <div >
                <h2>New Arrival</h2>
            </div>
            <div className="products_items">
                <article className="article">
                    {products.map(product => (
                        <div className="articles">
                            <div>
                                {product.img && <img src={product.img} alt={product.name} />}
                            </div>
                            <h2>
                                {product.name}
                            </h2>
                            <p>
                                {product.description}
                            </p>
                            <p>
                                Precio: {product.price}
                            </p>
                            <div>
                                <Buttons title="Shop now" />
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </>
    )
}
