import { useState } from "react";
import Homepage from "../Homepage/Homepage";

function Login() {
  const [logado, setLogado] = useState(false);

  return (
    <>
      {logado ? (
        <Homepage />
        
      ) : (
        <>
          <h1>Para acessar o sistema, informe seu usuário e senha abaixo.</h1>

          <form action="send">
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" name="usuario" />
            <label htmlFor="senha">Senha:</label>
            <input type="text" name="senha" />
            <br />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setLogado(true);
              }}
            >
              Acessar
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Login;
