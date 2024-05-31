import { Link } from 'react-router-dom'
import './Header.css'
import { Headersbutton } from './Headers.button'
import { Shopcar } from '../../assets/icons/Shopcar'
import { User } from '../../assets/icons/User'

export const Headers = () => {
    return (
        <header className="header_container">
            <div className="navbar">
                <section className="section_name">
                    <div className="cyber_title">
                        <img src="./src/assets/icons/icons8-flecha-64.png" alt="" />
                        <h2>Cyber</h2>
                    </div>
                    <div className="search_input">
                        <input type="search" placeholder="Search" />
                    </div>
                </section>
                <section className="section_navbar">
                    <nav>
                        <ul className="navbar_list">
                            <li className="item_list">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="item_list">
                                About
                            </li>
                            <li className="item_list">
                                Contacts Us
                            </li>
                            <li className="item_list">
                                Blog
                            </li>
                            <li className="item_list">
                                <Shopcar />
                            </li>
                            <li className="item_list">
                                <User />
                            </li>
                        </ul>
                    </nav>
                </section>
                <div className="dropdown-toggle">
                    <Headersbutton />
                </div>
            </div>
        </header>
    )
}
