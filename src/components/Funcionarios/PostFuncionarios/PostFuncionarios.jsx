import { useEffect, useState } from "react";
import { PostFuncionario } from "../../../service/requestFuncionarios";

import style from "./PostFuncionarios.module.css";




function PostFuncionarios() {
  const [employeeName, setEmployeeName] = useState("");

  const [admissionDate, setAdmissionDate] = useState("");

  const [sendRequest, setSendRequest] = useState(false);
  const [requestResponse, setResquestResponse] = useState({});

  
  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
    PostFuncionario(employeeName, admissionDate)
      .then((json) => {setResquestResponse() 
      console.log(json)} )
      .catch((error) => console.log(error + 'deu erro'));
  } 
}, [sendRequest]);

  return (
    <>

    <form action="send">
      <div className={style.input}>
        <label htmlFor="nome" className={style.label}>
          Nome Funcionário
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          className={style.inputsForm}
          value={employeeName}
          onChange={(e) => {
            setEmployeeName(e.target.value);
          }}
          placeholder="Ex: João"
          required
        />
      </div>
      <div className={style.input}>
        <label htmlFor="data" className={style.label}>
          Data de Admissão
        </label>
        <input
          type="text"
          name="data"
          id="data"
          className={style.inputsForm}
          value={admissionDate}
          onChange={(e) => {
            setAdmissionDate(e.target.value);
          }}
          placeholder="Ex: 01/01/2020"
          required
        />
        <div className={style.containerButton}>
          <button
            className={style.button}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSendRequest(true);
            }}
          >
            Cadastrar Funcionário
          </button>
        </div>
      </div>
    </form>


     {requestResponse ==
      "SQLITE_CONSTRAINT: UNIQUE constraint failed: funcionarios.id" ? (
        <h3>
          Cadastro não realizado. Este ID já está cadastrado como
          funcionário ativo.
        </h3>
      ) : typeof requestResponse == "object" ? (
        <h3>{requestResponse.Mensagem}</h3>
      ) : (
        <h3>{requestResponse}</h3>
      )}
    </>
  );
}

export default PostFuncionarios;