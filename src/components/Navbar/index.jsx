import style from './navbar.module.css'

function Navbar({ isAuthenticated }) {
    return (
        <header className={style.container}>
            <div className={style.containerImg}>

                <img src="./hotel.png" alt="" />
                <h1>Full Stack Hoteis S.A</h1>
            </div>
            <div className={style.action}>
                {isAuthenticated ? <p>teste</p> : <img src="./login.png" alt="" />}

            </div>
        </header >
    )
}

export default Navbar