import './Footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="props_footer">
                    <section className="footer_text">
                        <div>
                            <h3 className="footer_title">
                                Cyber
                            </h3>
                        </div>
                        <div className="footer_paragraph">
                            <p>
                                We are a residential interior design firm located in <br />
                                Portland. Our boutique-studio offers more than
                            </p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3 className="footer_servi">
                                Services
                            </h3>
                        </div>
                        <nav className="footer_list">
                            <ul className="footer_nav">
                                <li className="footer_li">Bonus program</li>
                                <li className="footer_li">Gift cards</li>
                                <li className="footer_li">Credit and payment</li>
                                <li className="footer_li">Service contracts</li>
                                <li className="footer_li">Non-cash account</li>
                                <li className="footer_li">Payment</li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <div>
                            <h3 className="footer_assis">
                                Assistance to the buyer
                            </h3>
                        </div>
                        <nav className="footer_list">
                            <ul className="footer_nav">
                                <li className="footer_li">Find and order</li>
                                <li className="footer_li">Terms of delivery</li>
                                <li className="footer_li">Exchange and return of goods</li>
                                <li className="footer_li">Guarantee</li>
                                <li className="footer_li">Frequently asked questions</li>
                                <li className="footer_li">Terms of use of the site</li>
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
