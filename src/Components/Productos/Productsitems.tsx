
import './Productos.css'

import { Itemslist } from './Itemslist';

export const Product = () => {
    return (
        <section className="section_products">
            <div className="products_container">
                <Itemslist />
            </div>
        </section>
    )
}
