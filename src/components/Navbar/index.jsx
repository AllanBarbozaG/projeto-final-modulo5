import style from './navbar.module.css'

function Navbar() {
    return (
        <header className={style.container}>
            <div className={style.containerImg}>
                <img src="./hotel.png" alt="" />
                <h1>Full Stack Hotéis</h1>
            </div>
            <div className={style.iconsOn}>
                <div className={style.teste}>
                    <img src="./cctv-camera.png" />
                    <p>CCTV</p>
                </div>
                <div className={style.teste}>
                    <img src="./003-profile.png" />
                    <p>Perfil</p>
                </div>
            </div>
        </header >
    )
}

export default Navbar