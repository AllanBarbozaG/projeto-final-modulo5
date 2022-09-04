import Sidebar from "../Sidebar"
import Navbar from '../Navbar'
import style from './layout.module.css'


function Layout({ children, isAuthenticated }) {
    return (
        <div className={style.layout}>
            <div className={style.sidebar}>
                <Sidebar />
            </div>
            <main className={style.main}>
                <div className={style.navbar}>
                    <Navbar isAuthenticated={isAuthenticated} />
                </div>

                <div className={style.container}>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout


