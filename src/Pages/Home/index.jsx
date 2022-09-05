import style from "./home.module.css"

function Home() {
    return (
        <div class={style.container}>
            <div>
                <p class={style.welcome}>Bem vindo!</p>
                <p class={style.text1}>Utilize o painel ao lado para realizar suas ações.</p>
                <p class={style.text2}>Tenha um ótimo dia de trabalho.</p>
            </div>
        </div>
    )
}

export default Home