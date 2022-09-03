import style from './home.module.css'

function Home() {
    return (
        <div className={style.container}>
            <div className={style.loader}>
                <h2>AGUARDANDO LOGIN</h2>
                <div className={style.dot} />
                <div className={style.dot} />
                <div className={style.dot} />
                <div className={style.dot} />
            </div>
        </div>
    )
}

export default Home