import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./FormQuartos.module.css";

function FormQuartos(props) {
  const param = useParams();

  const [quarto, setQuarto] = useState({
    numeroQuarto: "",
    nomeHospede: "",
    controle: "",
    telefone: "",
  });

  useEffect(() => {
    if (props.hasId) {
      setQuarto(props.updateQuarto);
    }
  }, [props.updateQuarto]);

  return (
    <form className={style.form}>
      <main className={style.container}>
        {props.hasId && (
          <input className={style.inputsForm} value={param.id} disabled></input>
        )}

        <input
          className={style.inputsForm}
          typeof="number"
          placeholder="Insira o número do quarto"
          onChange={(event) => {
            setQuarto({ ...quarto, numeroQuarto: event.target.value });
          }}
        />

        <input
          className={style.inputsForm}
          type="text"
          placeholder="Insira o nome do hospede"
          onChange={(event) => {
            setQuarto({ ...quarto, nomeHospede: event.target.value });
          }}
        />

        <input
          className={style.inputsForm}
          type="text"
          placeholder="Insira o controle de limpeza"
          onChange={(event) => {
            setQuarto({ ...quarto, controle: event.target.value });
          }}
        />

        <input
          className={style.inputsForm}
          type="text"
          placeholder="Insira o telefone"
          onChange={(event) => {
            setQuarto({ ...quarto, telefone: event.target.value });
          }}
        />
        <div className={style.containerButton}>
          <button
            className={style.button}
            onClick={async (e) => {
              e.preventDefault();
              props.onFinish(quarto);
            }}
          >
            {props.hasId ? "Editar" : "Cadastrar"}
          </button>
        </div>
      </main>
    </form>
  );
}

export default FormQuartos;
