import { useEffect, useState } from "react";
import style from "./login.module.css";

function Login(props) {
  const [loadingPage, setLoadingPage] = useState(true);

  function handleSubmit(eve) {
    eve.preventDefault();
    props.setIsAuthenticated(true);
  }

  useEffect(() => {
    setLoadingPage(false);
  }, [loadingPage]);

  return (
    <>
      {loadingPage ? (
        <>
          {/* COLOCAR ANIMAÇÃO DE CARREGAMENTO DA PÁGINA AQUI */}
          <h1>Carregando...</h1>
          {console.log("carregandooo")}
        </>
      ) : (
        <div onLoad={() => setLoadingPage(false)} className={style.container}>
          <div className={style.imgLogo}>
            <img src="./hotel.png" />
          </div>

          <form className={style.forms} onSubmit={handleSubmit}>
            <label htmlFor="register"> Matrícula:</label>
            <div className={style.inputs}>
              <input type={"text"} id="register" />
            </div>

            <label htmlFor="password">Senha:</label>
            <div className={style.inputs}>
              <input type={"password"} id="password" />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
