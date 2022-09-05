import { useEffect } from "react";
import { PutFuncionario } from "../../../service/requestFuncionarios";

function PutFuncionarios() {
  useEffect(() => {
    PutFuncionario()
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);


}

export default PutFuncionarios;