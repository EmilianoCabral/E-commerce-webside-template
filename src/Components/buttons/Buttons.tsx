import { Link } from 'react-router-dom'
import './button.css'

interface props {
    title: string
}

export const Buttons = (props: props) => {
    let { title } = props
    return (
        <button className="buttons0">
            <Link to="/Pageproductos">{title}</Link>
        </button>
    )
}

export const Buttons1 = (props: props) => {

    let { title } = props
    
    return (
        <button className="buttons1">
            <Link to="/Pageproductos">{title}</Link>
        </button>
    )
}
