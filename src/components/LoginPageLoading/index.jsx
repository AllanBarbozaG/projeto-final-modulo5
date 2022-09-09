import style from "./LoginPageLoading.module.css"

function LoginPageLoading() {
    return (
        <div className={style.animation}>
            <h1>Carregando...</h1>
            <p className={style.circle}>
                <span className={style.ouro}>
                    <span className={style.left}><span className={style.anim}></span></span>
                    <span className={style.right}> <span className={style.anim}></span ></span >
                </span >
                <span className={`${style.ouro} ${style.ouro2}`}>
                    <span className={style.left}> <span className={style.anim}></span ></span >
                    <span className={style.right}> <span className={style.anim} ></span ></span >
                </span >
                <span className={`${style.ouro} ${style.ouro3}`}>
                    <span className={style.left}> <span className={style.anim}> </span> </span >
                    <span className={style.right}> <span className={style.anim}></span ></span >
                </span >
            </p >
        </div >
    )
}

export default LoginPageLoading