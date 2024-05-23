import { Buttons1 } from '../buttons/Buttons'
import './Productos.css'

export const Productos = () => {
    return (
        <section className="section_products">
            <div className="products_container">
                <div>
                    <h2>title</h2>
                </div>
                <div className="products_items">
                    <article className="article1">
                        <div>
                            <img src="./src/assets/iPhone-14-Pro-1.png" alt="" />
                        </div>
                        <div>
                            <h3>Apple iphone 14 pro Max 128GB</h3>
                            <p>deep purple</p>
                        </div>
                        <div>
                            <p>$900</p>
                        </div>
                        <div>
                            <Buttons1 title="Buy Now" />
                        </div>
                    </article>
                    <article className="article2">
                        <p>2</p>
                    </article>
                    <article className="article3">
                        <p>3</p>
                    </article>
                    <article className="article4">
                        <p>4</p>
                    </article>
                    <article className="article5">
                        <p>5</p>
                    </article>
                    <article className="article6">
                        <p>6</p>
                    </article>
                    <article className="article7">
                        <p>7</p>
                    </article>
                    <article className="article8">
                        <p>8</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
