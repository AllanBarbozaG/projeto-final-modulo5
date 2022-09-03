import { DeleteRequest } from "../../../service/requestHospedes.js";
import { useEffect } from "react";

function DeleteHospede() {
  useEffect(() => {
    DeleteRequest()
      .then((json) => console.log(json))
      .catch((error) => console.log(error + "deu erro"));
  }, []);
}

export default DeleteHospede;
