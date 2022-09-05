import { useEffect } from "react";
import { PostFuncionario } from "../../../service/requestFuncionarios";

function PostFuncionarios() {
  
  useEffect(() => {
    PostFuncionario()
      .then((json) => console.log(json))
      .catch((error) => console.log(error + 'deu erro'));
  }, []);
}

export default PostFuncionarios;