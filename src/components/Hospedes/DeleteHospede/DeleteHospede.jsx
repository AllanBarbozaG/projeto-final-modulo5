import { DeleteRequest } from "../../../service/requestHospedes.js";
import { useEffect, useState } from "react";
import InputwithLabel from "../../InputWithLabel/InputWithLabel.jsx";


function DeleteHospede() {
  const [guestCpf, setGuestCpf] = useState()
  const [deleteGuest, setDeleteGuest] = useState(false)

  useEffect(() => {
    setDeleteGuest(false)
    DeleteRequest(guestCpf)
      .then((json) => console.log(json))
      .catch((error) => console.log(error + "deu erro"));
  }, [deleteGuest]);

  return (
    <>
      <InputwithLabel
          htmlFor="guestCpf"
          labelText="CPF:"
          inputName="guestCpf"
          type="text"
          callback={(e) => setGuestCpf(e.target.value)} />

          <button onClick={() => setDeleteGuest(true)}>Excluir registro de hóspede</button>
    </>
  )
}

export default DeleteHospede;
