import { useEffect } from "react";
import { DeleteFuncionario } from "../../../service/requestFuncionarios";

function DeleteFuncionarios() {
  useEffect(() => {
    DeleteFuncionario()
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);


}

export default DeleteFuncionarios;