import style from './login.module.css'

function Login(props) {
    function handleSubmit(eve) {
        eve.preventDefault()
        props.setIsAuthenticated(true)
    }

    return (
        <div className={style.container}>
            <div className={style.imgLogo}>
                <img src="./hotel.png" />
            </div>

            <form className={style.forms} onSubmit={handleSubmit}>
                <label htmlFor="register"> Matrícula:</label>
                <div className={style.inputs}>
                    <input type={'text'} id="register" />
                </div>

                <label htmlFor="password">Senha:</label>
                <div className={style.inputs}>
                    <input type={'password'} id="password" />
                </div>
                <button type="submit">Entrar</button>
            </form >
        </div>
    )
}

export default Login