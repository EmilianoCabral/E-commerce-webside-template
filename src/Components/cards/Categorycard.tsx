import { Bateryicon } from '../../assets/icons/Bateryicon'
import { Camera } from '../../assets/icons/Camera'
import { Cpuicons } from '../../assets/icons/Cpuicons'
import { Phone } from '../../assets/icons/Phone'
import './cards.css'

export const Categorycard = () => {
    return (
        <article className="card_phone">
            <div>
                <Phone />
            </div>
            <div>
                <h4>Screen size</h4>
                <p>6.7"</p>
            </div>
        </article>
    )
}

export const Cpucard = () => {
    return (
        <article className="card_phone">
            <div>
                <Cpuicons />
            </div>
            <div>
                <h4>CPU</h4>
                <p>Apple A16 Bionic </p>
            </div>
        </article>
    )
}


export const Cameracard = () => {
    return (
        <article className="card_phone">
            <div>
                <Camera />
            </div>
            <div>
                <h4>Main camera</h4>
                <p>48-12-12 MP</p>
            </div>
        </article>
    )
}


export const Camerafront = () => {
    return (
        <article className="card_phone">
            <div>
                <Camera />
            </div>
            <div>
                <h4>Front camera</h4>
                <p>12 MP</p>
            </div>
        </article>
    )
}

export const Cardbatery = () => {
    return (
        <article className="card_phone">
            <div>
                <Bateryicon />            </div>
            <div>
                <h4>Front camera</h4>
                <p>12 MP</p>
            </div>
        </article>
    )
}



