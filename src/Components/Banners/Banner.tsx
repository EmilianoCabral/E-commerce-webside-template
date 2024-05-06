import './banner.css'

export const Banner = () => {
    return (
        <main className="main_container">
            <section className="background_banner">
                <div className="section_title">
                    <h1>Iphone 14 pro</h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <button className="button">Shop now</button>
                </div>
                <div className="section_banner">
                    <img className="banner_img" src="./src/assets/Banner-iphone-1.png" alt="iphone 14 pro" />
                </div>
            </section>
        </main>
    )
}
