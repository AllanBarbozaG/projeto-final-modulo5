import { useEffect, useState } from "react";
import { GetFuncionario } from "../../../service/requestFuncionarios";

function GetFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [showEmployees, setShowEmployees] = useState(true);
  const [countEmployees, setCountEmployees] = useState(0);



  useEffect(() => {
    GetFuncionario().then((data) => {
      setFuncionarios(data);
    });
  }, []);

  return (
    <>
      {
        showEmployees &&
        funcionarios.map((funcionario, index) => {
          return (
            <div key={index}>
              <p>
                {funcionario.nome} {funcionario.data_admissao}{" "}
              </p>
            </div>
          );
        })}
    </>
  );
}

export default GetFuncionarios;