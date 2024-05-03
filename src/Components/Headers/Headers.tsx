import './Header.css'
import { Headersbutton } from './Headers.button'

export const Headers = () => {
    return (
        <header className="navbar">
            <section className="section_name">
                <h2>Cyber</h2>
                <input type="search" placeholder="Search" />
            </section>
            <section className="section_navbar">
                <nav>
                    <ul className="navbar_list">
                        <li>Home</li>
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
        </header>
    )
}
