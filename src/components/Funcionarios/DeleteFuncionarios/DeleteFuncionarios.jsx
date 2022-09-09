import { useEffect } from "react";
import { DeleteFuncionario } from "../../../service/requestFuncionarios";
import Funcionarios, { funcionarioId } from "../../../Pages/Funcionarios/index.jsx";
import { deleteFuncionario } from "../../../Pages/Funcionarios/index.jsx";

import { useNavigate } from "react-router-dom";


function DeleteFuncionarios() {
  const navigate = useNavigate();
  

  useEffect(() => {
    if (deleteFuncionario) {
    DeleteFuncionario(funcionarioId)
      .then((json) => console.log(json))
      .catch((error) => console.log(error + "deu erro"));
    }
  }, []);

  return (
    <>
      <h1>Funcionário deletado com sucesso.</h1>
      <button onClick={() => navigate("/funcionarios")}>Voltar</button>
    </>
    
  );

}

export default DeleteFuncionarios;