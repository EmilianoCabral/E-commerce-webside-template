import { Buttons } from '../../buttons/Buttons'
import './bannerproduc.css'

export const Bannerproduc = () => {
    return (
        <section className="big_banner">
            <div className="banner_product">
                <article className="banner_items">
                    <div className="product_item1">
                        <div>
                            <img src="https://placehold.co/260x260" alt="..." />
                        </div>
                        <div>
                            <h2>Popular product</h2>
                            <p>
                                iPad combines a magnificent 10.2-inch <br />
                                Retina display, incredible performance,<br />
                                multitasking and ease of use.
                                </p>
                                <Buttons title="Shop now"/>
                        </div>
                    </div>
                    <div className="product_item2">
                        <div>
                            <img src="https://placehold.co/260x260" alt="..." />
                        </div>
                        <div>
                            <h2>Ipad Pro</h2>
                            <p>iPad combines a magnificent 10.2-inch <br /> 
                            Retina display, incredible performance, <br /> 
                            multitasking and ease of use.
                            </p>
                            <Buttons title="Shop now"/>
                        </div>
                    </div>
                    <div className="product_item3">
                        <div>
                            <img src="https://placehold.co/260x260" alt="..." />
                        </div>
                        <div>
                            <h2>Samsung galaxy</h2>
                            <p>iPad combines a magnificent 10.2-inch <br /> 
                            Retina display, incredible performance, <br /> 
                            multitasking and ease of use.
                            </p>
                            <Buttons title="Shop now"/>
                        </div>
                    </div>
                    <div className="product_item4">
                        <div>
                            <img src="https://placehold.co/260x260" alt="..." />
                        </div>
                        <div>
                            <h2>Macbook Pro</h2>
                            <p>iPad combines a magnificent 10.2-inch <br /> 
                            Retina display, incredible performance, <br /> 
                            multitasking and ease of use.
                            </p>
                            <Buttons title="Shop now"/>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

