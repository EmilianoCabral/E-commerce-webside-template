import { Link } from 'react-router-dom'
import './button.css'

interface props {
    title: string
}

export const Buttons = (props: props) => {
    let { title } = props
    return (
        <button className="button_banner">
            <Link to="/Pageproductos">{title}</Link>
        </button>
    )
}


export const Buttons1 = () => {
    return (
        <div>Buttons1</div>
    )
}

