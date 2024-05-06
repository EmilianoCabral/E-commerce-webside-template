import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="props_footer">
                    <section>
                        <div>
                            <h3>
                                Cyber
                            </h3>
                        </div>
                        <div>
                            <p>We are a residential interior design firm located in Portland. Our <br />
                                boutique-studio offers more than</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3>
                                Services
                            </h3>
                        </div>
                        <nav>
                            <ul className="navbar_nav">
                                <li>Bonus program</li>
                                <li>Gift cards</li>
                                <li>Credit and payment</li>
                                <li>Service contracts</li>
                                <li>Non-cash account</li>
                                <li>Payment</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <div>
                            <h3>
                                Assistance to the buyer
                            </h3>
                        </div>
                        <nav>
                            <ul className="navbar_nav">
                                <li>Find and order</li>
                                <li>Terms of delivery</li>
                                <li>Exchange and return of goods</li>
                                <li>Guarantee</li>
                                <li>Frequently asked questions</li>
                                <li>Terms of use of the site</li>
                            </ul>
                        </nav>
                    </section>
                </div>
                <section className="social_section">
                    <ul>
                        <li>Twitter</li>
                        <li>facebook</li>
                        <li>instagram</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}
