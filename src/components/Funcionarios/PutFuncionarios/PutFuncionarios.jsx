import { useEffect, useState } from "react";
import { PutFuncionario } from "../../../service/requestFuncionarios";
import { GetFuncionario } from "../../../service/requestFuncionarios";

import { funcionarioId } from "../../../Pages/Funcionarios";
import { useNavigate } from "react-router-dom";

import style from "./PutFuncionarios.module.css"

function PutFuncionarios() {
  const [employeeId, setEmployeeId] = useState("")

  const [employeeName, setEmployeeName] = useState("");

  const [admissionDate, setAdmissionDate] = useState("");

  const [sendRequest, setSendRequest] = useState(false);

  const [requestResponse, setResquestResponse] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
      PutFuncionario(employeeId, employeeName, admissionDate)
        .then((json) => {
          setResquestResponse(json);
        })
        .catch((error) => console.log(error + "deu erro"));
    }
  }, [sendRequest]);

  useEffect(() => {
    GetFuncionario().then((data) => {
      data.map((funcionario) => {
        if (funcionario.id == funcionarioId[0]) {
          setEmployeeId(funcionario.id);
          setEmployeeName(funcionario.nome);
          setAdmissionDate(funcionario.data_admissao);
        }
      });
    });
  }, []);

  return (
    <>
      <form action="send">
        <div className={style.input}>
          <label htmlFor="id" className={style.label}>
            ID Funcionário
          </label>
          <input
            type="text"
            name="id"
            id="id"
            className={style.inputsForm}
            value={employeeId}
            onChange={(e) => {
              setEmployeeId(e.target.value);
            }}
            placeholder="Ex: 1"
            required
          />
        </div>
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
            type="date"
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
        </div>

        <div className={style.containerButton}>
          <button
            className={style.button}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSendRequest(true);
            }}
          > Atualizar dados </button>
        </div>
      </form>

      {requestResponse ==
        "SQLITE_CONSTRAINT: UNIQUE constraint failed: funcionario.id" ? (
        <h3 className="titleh3">
          Atualização não realizada
        </h3>
      ) : typeof requestResponse == "object" ? (
        <h3>{requestResponse.Mensagem || requestResponse.message}</h3>
      ) : (
        <h3>{requestResponse}</h3>
      )}

    </>


  );




}

export default PutFuncionarios;