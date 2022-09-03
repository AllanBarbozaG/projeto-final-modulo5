import { useState } from "react";
import style from "./login.module.css"

function Login() {
  const [logado, setLogado] = useState(false);

  return (
    <div className={style.home}>
      <nav>
        <div className="container-sidebar">
          <div className="logo-sidebar">
            <img src="./logo.png" />
          </div>

          <div className="inputs-sidebar">
            <button> <img src="./botao-home.png" />Início</button>
            <button> <img src="./calendario.png" />Reservas</button>
            <button> <img src="./quartos.png" />Quartos</button>
            <button> <img src="./hospedes.png" /> Hóspedes</button>
            <button> <img src="./funcionarios.png" />Funcionários </button>
            <button> <img src="./limpeza.png" />Controle de Limpezas </button>
            <button> <img src="./join.png" />Entrar </button>
          </div>
          <div className="footer-sidebar">
            <p>2022 version:T.18</p>
          </div>
        </div >
      </nav>
      <body>
        <div className="container-home-pag">
          <img src="./hotel.png"></img>
        </div>
      </body>
    </div>
  )
}

export default Login;