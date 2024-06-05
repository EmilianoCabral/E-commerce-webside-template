import { Detailrating } from './Detailrating'
import { Overalrating } from './Overalrating'
import './reviews.css'

export const Reviews = () => {
    return (
        <section className="review_content">
            <div className="review_flex">
                <div className="over_cont">
                    <Overalrating />
                </div>
                <div>
                    <Detailrating />
                    <Detailrating />
                    <Detailrating />
                    <Detailrating />
                    <Detailrating />
                </div>
            </div>
        </section>
    )
}
