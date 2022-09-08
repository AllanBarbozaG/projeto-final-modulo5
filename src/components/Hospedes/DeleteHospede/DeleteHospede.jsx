import { DeleteRequest } from "../../../service/requestHospedes.js";
import { useEffect } from "react";
import { guestCpfIndex } from "../../../Pages/Hospedes/index.jsx";
import { deleteGuest } from "../../../Pages/Hospedes/index.jsx";
import { useNavigate } from "react-router-dom";

function DeleteHospede() {
  const navigate = useNavigate();

  useEffect(() => {
    if (deleteGuest) {
      DeleteRequest(guestCpfIndex)
        .then((json) => console.log(json))
        .catch((error) => console.log(error + "deu erro"));
    }
  }, []);

  return (
    <>
      <h1>Hóspede deletado com sucesso.</h1>
      <button onClick={() => navigate("/hospedes")}>Voltar</button>
    </>
  );
}

export default DeleteHospede;
