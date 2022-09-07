import style from "./home.module.css"

function Home() {
    return (
        <div className={style.container}>
            <div>
                <p className={style.welcome}>Bem-vindo!</p>
                <p className={style.text1}>Utilize o painel ao lado para realizar suas ações.</p>
                <p className={style.text2}>Tenha um ótimo dia de trabalho.</p>
            </div>
        </div>
    )
}

export default Home