import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function FormQuartos(props) {

  const param = useParams()

  const [quarto, setQuarto] = useState({
    numeroQuarto: "",
    nomeHospede: "",
    controle: "",
    telefone: ""
  });

  useEffect(() => {
    if (props.hasId) {
      setQuarto(props.updateQuarto);
    }
  }, [props.updateQuarto]);

  return (
    <form>
      {props.hasId && <input value={param.id} disabled></input>}

      <input
        type="number"
        placeholder="Insira o número do quarto"
        onChange={(event) => {setQuarto({...quarto,numeroQuarto: event.target.value,})}}
      />

      <input
        type="text"
        placeholder="Insira o nome do hospede"
        onChange={(event) => {setQuarto({...quarto,nomeHospede: event.target.value,})}}
      />

      <input type="text"
        placeholder="Insira o controle de limpeza"
        onChange={(event) => {setQuarto({...quarto,controle: event.target.value,})}}
      />

      <input
        type="text"
        placeholder="Insira o telefone"
        onChange={(event) => {setQuarto({...quarto,telefone: event.target.value,})}}
      />

      <button onClick= {async (e) => {e.preventDefault();props.onFinish(quarto)}}>
        {props.hasId ? "Editar" : "Cadastrar"}
      </button>
    </form>
  );
}

export default FormQuartos;
