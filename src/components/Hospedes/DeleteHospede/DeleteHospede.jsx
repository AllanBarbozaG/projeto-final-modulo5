import { DeleteRequest } from "../../../service/requestHospedes.js";
import { useEffect } from "react";
import { guestCpfIndex } from "../../../Pages/Hospedes/index.jsx";
import { deleteGuest } from "../../../Pages/Hospedes/index.jsx";

function DeleteHospede() {
  useEffect(() => {
    if (deleteGuest) {
      DeleteRequest(guestCpfIndex)
        .then((json) => console.log(json))
        .catch((error) => console.log(error + "deu erro"));
    }
  }, []);

  return <h1>hospede deletado com sucesso</h1>;
}

export default DeleteHospede;
