import { Buttons } from '../../buttons/Buttons'
import './smallbanner.css'

export const Smallerbanners = () => {
    return (
        <section className="small_banner">
            <article className="box1">
                <div>
                    <img className="box1_img" src="https://placehold.co/192x200" alt="algo" />
                </div>
                <div className="box1_text">
                    <h2 className="box1_title">Apple AirPods <strong>MAX</strong></h2>
                    <p className="box1_paragraph">Computational audio.Listen, its powerfull</p>
                </div>
            </article>
            <article className="box2">
                <div>
                    <img className="box2_img" src="https://placehold.co/192x200" alt="algo" />
                </div>
                <div className="box2_text">
                    <h2 className="box2_title">Apple Vision <strong>Pro</strong></h2>
                    <p className="box2_paragraph">An immersive Way to experience entertainment</p>
                </div>
            </article>
            <article className="box3">
                <div>
                    <img className="box3_img" src="https://placehold.co/192x200" alt="algo" />
                </div>
                <div className="box3_text">
                    <h2 className="box3_title">Playstation <strong>5</strong></h2>
                    <p className="box3_paragraph">Incredible powerful CPUs, GPUs, and an SSD with integrated I/O will redifine your PlayStation experience.</p>
                </div>
            </article>
            <article className="box4">
                <div>
                    <img className="box4_img" src="https://placehold.co/192x200" alt="algo" />
                </div>
                <div className="box4_text">
                    <h2 className="box4_title"><strong>Macbook </strong> Air</h2>
                    <p className="box4_paragraph">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <Buttons title={"Shop now"} />
                </div>
            </article>
        </section>
    )
}
