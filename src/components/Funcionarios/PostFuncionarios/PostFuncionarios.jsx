import { useEffect, useState } from "react";
import { PostFuncionario } from "../../../service/requestFuncionarios";
import InputwithLabel from "../../InputWithLabel/InputWithLabel";

function PostFuncionarios() {
  const [employeeName, setEmployeeName] = useState("");

  const [admissionDate, setAdmissionDate] = useState("");

  const [sendRequest, setSendRequest] = useState(false);
  const [requestResponse, setResquestResponse] = useState({});
  console.log(requestResponse);

  
  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
    PostFuncionario(employeeName, admissionDate)
      .then((json) => console.log(json))
      .catch((error) => console.log(error + 'deu erro'));
  } 
}, [sendRequest]);

  return (
    <>
      <form action="send">
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
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSendRequest(true);
          }}
        >
          Cadastrar funcionário
        </button>
      </form>
    </>
  );
}

export default PostFuncionarios;