import { useEffect, useState } from "react";
import { PutFuncionario } from "../../../service/requestFuncionarios";

import InputwithLabel from "../../InputWithLabel/InputWithLabel";

function PutFuncionarios() {
const [employeeId, setEmployeeId] = useState("")

  const [employeeName, setEmployeeName] = useState("");

  const [admissionDate, setAdmissionDate] = useState("");

  const [sendRequest, setSendRequest] = useState(false);

  const [requestResponse, setResquestResponse] = useState({});
  
  const [teste, setTeste] = useState(false)


  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
    PutFuncionario(employeeId, employeeName, admissionDate)
      .then((json) => {
        setTeste(true)
        setResquestResponse(json);
      })
      .catch((error) => console.log(error + "deu erro"));
    }
  }, [sendRequest]);

  return (
    <>
    <>
      <form action="send">
        <InputwithLabel
          htmlFor="employeeId"
          labelText="ID:"
          inputName="employeeId"
          type="text"
          callback={(e) => setEmployeeId(e.target.value)}
        />
        <InputwithLabel
          htmlFor="employeeName"
          labelText="Nome:"
          inputName="employeeName"
          type="text"
          callback={(e) => setEmployeeName(e.target.value)}
        />
        <InputwithLabel
          htmlFor="admissionDate"
          labelText="Data de admissão:"
          inputName="admissionDate"
          type="date"
          callback={(e) => setAdmissionDate(e.target.value)}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setSendRequest(true);
  }}
        > Atualizar dados </button>

      </form>

    </>
  
    {teste && <h1>Cadastro atualizado</h1>}
  </>
  );
  


}

export default PutFuncionarios;