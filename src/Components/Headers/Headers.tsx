import { Link } from 'react-router-dom'
import './Header.css'
import { Headersbutton } from './Headers.button'

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
                            <li>Like</li>
                            <li>Car</li>
                            <li>Login</li>
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
