import { Buttons } from '../buttons/Buttons'
import './Sumersale.css'

export const Sumersale = () => {
    return (
        <section className="section_sale">
            <div className="sale_box">
                <h2 className="sale_title">Big sumer <strong>sale</strong></h2>
                <p className="sale_text">Commodo fames vitae leo mauris in. Eu consequat.</p>
            </div>
            <div>
                <Buttons title="Shop now" />
            </div>
        </section>
    )
}
