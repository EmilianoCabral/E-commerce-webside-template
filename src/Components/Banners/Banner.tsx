
import './banner.css'
import { Buttons } from '../buttons/Buttons'

export const Banner = () => {
    return (
        <section className="banner_container">
            <article className="background_banner">
                <div className="section_title">
                    <h1>Iphone 14 <strong>pro</strong></h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <Buttons title={"Shop now"} />
                </div>
                <div className="section_banner">
                    <img className="slide-left" src="./src/assets/iPhone-14-Pro-1.png" alt="iphone 14 pro" />
                </div>
            </article>
        </section>
    )
}
