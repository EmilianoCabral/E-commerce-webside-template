import { Staricons } from '../../assets/icons/Staricons'
import { Staricons2 } from '../../assets/icons/Staricons2'
import './reviews.css'

export const Overalrating = () => {
    return (
        <article className="content_rating">
            <div>
                <h4 className="title_rating">4.8</h4>
            </div>
            <div>
                <p className="text_rating">Of 125 reviews</p>
            </div>
            <div className="...">
                <Staricons />
                <Staricons />
                <Staricons />
                <Staricons />
                <Staricons2 />
            </div>
        </article>
    )
}
