import { Buttons1 } from '../../Components/buttons/Buttons'
import { Categorycard } from '../../Components/cards/Categorycard'
import { Tabs } from '../../Components/tabs/Tabs'
import './detailproduct.css'

export const Detailproduct = () => {
    return (
        <section>
            <div className=" container_detail">
                <article className="article_detail">
                    <picture className="img_detail">
                        <div>
                            <img className="img01" src="./src/assets/iPhone-14-Pro-1.png" alt="IPhone 14 max" />
                        </div>
                        <div>
                            <img src="https://placehold.co/90x100" alt="" />
                            <img src="https://placehold.co/90x100" alt="" />
                            <img src="https://placehold.co/90x100" alt="" />
                        </div>
                    </picture>
                    <div className="detail_product">
                        <header>
                            <h2 className="detail_title">Apple iPhone 14 Pro Max </h2>
                        </header>
                        <main>
                            <section>
                                <div>
                                    <p className="detail_price">$1399</p>
                                    <p>select colors</p>
                                    <input type="color" name="color" id="color" />
                                    <Tabs />
                                    <Categorycard />
                                    <p className="detail_info">
                                        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day.
                                        Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
                                    </p>
                                    <div>
                                        <Buttons1 title="Add to Wishlist" />
                                        <Buttons1 title="Add to Card" />
                                    </div>
                                    
                                </div>
                            </section>
                        </main>
                    </div>
                </article>
            </div>
            <section className="section_info">
                <div className="characteristic_product">
                    <div className="background_c">
                        <header className="character_header">
                            <h2 className="character_title">Details</h2>
                            <p className="character_paragraph">
                                Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because
                                advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design
                                solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the
                                picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                            </p>
                        </header>
                        <main>
                            <table>
                                <thead>
                                    Screen
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            Screen diagonal
                                        </th>
                                        <td className="td">
                                            6.7"
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Screen diagonal
                                        </th>
                                        <td className="td">
                                            6.7"
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Screen diagonal
                                        </th>
                                        <td className="td">
                                            6.7"
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Screen diagonal
                                        </th>
                                        <td className="td">
                                            6.7"
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Screen diagonal
                                        </th>
                                        <td className="td">
                                            6.7"
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>
                    </div>
                </div>
            </section>
            <article>
                reviews
            </article>
        </section>
    )
}
