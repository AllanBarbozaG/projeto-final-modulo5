import { useEffect, useState } from "react";
import style from "./home.module.css";

function Home() {
  const [loadingPage, setLoadingPage] = useState(true);

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
          <div>
            <p className={style.welcome}>Bem-vindo!</p>
            <p className={style.text1}>
              Utilize o painel ao lado para realizar suas ações.
            </p>
            <p className={style.text2}>Tenha um ótimo dia de trabalho.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
