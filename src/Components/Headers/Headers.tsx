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
                    <div>
                        <h2>Cyber</h2>
                    </div>
                    <div className="search_input">
                        <input type="search" placeholder="Search" />
                    </div>
                </section>
                <section className="section_navbar">
                    <nav>
                        <ul className="navbar_list">
                            <li><Link to="/">Home</Link></li>
                            <li>About</li>
                            <li>Contacts Us</li>
                            <li>Blog</li>
                            <li><Shopcar /></li>
                            <li><User /></li>
                            <li><link rel="icon" type="image/svg+xml" href="/vite.svg" /></li>
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
