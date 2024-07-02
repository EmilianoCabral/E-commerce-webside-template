import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Headersbutton } from './Headers.button'
import { Shopcar } from '../../assets/icons/Shopcar'
import { User } from '../../assets/icons/User'



export const Headers: React.FC  = () => {

    const [clickedd, setClicked] = useState(false);
    console.log('clickedd state:', clickedd);

    const handleClick = () => {
        setClicked(!clickedd)
        console.log(clickedd);
    }

    return (
        <header className="header_container">
            <div className="navbar">
                <section className="section_name">
                    <div className="cyber_title">
                        <img src="./src/assets/icons/icons8-flecha-64.png" alt="" />
                        <h2>Cyber</h2>
                    </div>
                </section>
                <section className={`section_navbar ${clickedd ? 'active' : ''}`}>
                    <div className="search_input">
                        <input type="search" placeholder="Search" />
                    </div>
                    <nav>
                        <ul className="navbar_list">
                            <li className="itemlist">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="itemlist">
                                About
                            </li>
                            <li className="itemlist">
                                Contacts Us
                            </li>
                            <li className="itemlist">
                                Blog
                            </li>
                            <li className="itemlist">
                                <Shopcar />
                            </li>
                            <li className="itemlist">
                                <User />
                            </li>
                        </ul>
                    </nav>
                </section>
                <div className="dropdown-toggle">
                    <Headersbutton clicked={clickedd} handleClick={handleClick} />
                </div>
            </div>
        </header>
    )
}
