import { useEffect, useState } from "react";
import { GetFuncionario } from "../../../service/requestFuncionarios";

function GetFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    GetFuncionario().then((data) => {
      setFuncionarios(data);
    });
  }, []);
  console.log(funcionarios)
  return (
    <>
      {funcionarios.map((funcionario, index) => {
        return (
          <p key={index}>
            {funcionario.nome} {funcionario.data_admissao}{" "}
          </p>
        );
      })}
    </>
  );
}

export default GetFuncionarios;