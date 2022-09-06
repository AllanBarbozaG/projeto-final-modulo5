import { useEffect, useState } from "react";
import { DeleteFuncionario } from "../../../service/requestFuncionarios";
import InputwithLabel from "../../InputWithLabel/InputWithLabel";

function DeleteFuncionarios() {
  const [employeeId, setEmployeeId] = useState();
  const [deleteEmployee, setDeleteEmployee] = useState(false);

  useEffect(() => {
    setDeleteEmployee(false);
    DeleteFuncionario(employeeId)
    DeleteFuncionario()
      .then((json) => console.log(json))
      .catch((error) => console.log(error + "deu erro"));
  }, [deleteEmployee]);

  return (
    <>
    <InputwithLabel
        htmlFor="employeeId"
        labelText="ID:"
        inputName="employeeId"
        type="text"
        callback={(e) => setEmployeeId(e.target.value)} />

        <button onClick={() => setDeleteEmployee(true)}>Excluir registro de funcionário</button>

       
    </>

    


    
  );

}

export default DeleteFuncionarios;