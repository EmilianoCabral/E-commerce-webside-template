
import { Link } from 'react-router-dom'
import { Camera } from '../../assets/icons/Camera'
import { Computer } from '../../assets/icons/Computer'
import { Gamepad } from '../../assets/icons/Gamepad'
import { Headphone } from '../../assets/icons/Headphone'
import { Phone } from '../../assets/icons/Phone'
import { Watch } from '../../assets/icons/watch'
import './category.css'

export const Browsercategory = () => {
    return (
        <section className="section_browse">
            <div className="container_browser">
                <div className="browse_title">
                    <h2>Browse By category</h2>
                </div>
                <section className="section_items">
                        <Link className="items_browser" to="/Pageproductos">
                            <article>
                                <Phone />
                                <h2>Phone</h2>
                            </article>
                        </Link>
                    <article className="items_browser">
                        <Watch />
                        <h2>Smartwatch</h2>
                    </article>
                    <article className="items_browser">
                        <Camera />
                        <h2>Cameras</h2>
                    </article>
                    <article className="items_browser">
                        <Headphone />
                        <h2>Headphone</h2>
                    </article>
                    <article className="items_browser">
                        <Computer />
                        <h2>Computer</h2>
                    </article>
                    <article className="items_browser">
                        <Gamepad />
                        <h2>Gaming</h2>
                    </article>
                </section>
            </div>
        </section>
    )
}
