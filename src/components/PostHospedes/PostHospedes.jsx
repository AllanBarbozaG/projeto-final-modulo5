import { useEffect, useState } from "react";
import { PostRequest } from "../../service/requestHospedes";
import InputwithLabel from "../InputWithLabel/InputWithLabel";

function PostHospedes() {
  const [guestCpf, setGuestCpf] = useState();
  // console.log(guestCpf);
  const [guestName, setGuestName] = useState("");
  // console.log(guestName)
  const [guestRoomNumber, setGuestRoomNumber] = useState(0);
  console.log(typeof guestRoomNumber);
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  // console.log(guestPhoneNumber)
  const [sendRequest, setSendRequest] = useState(false);
  const [requestResponse, setResquestResponse] = useState({});
  console.log(requestResponse);

  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
      PostRequest(guestCpf, guestName, guestRoomNumber, guestPhoneNumber)
        .then((json) => {
          console.log("json: " + json);
          setResquestResponse(json);
        })
        .catch((error) => console.log(error + "deu erro"));
    }
  }, [sendRequest]);

  return (
    <>
      <form action="send">
        <InputwithLabel
          htmlFor="guestCpf"
          labelText="CPF:"
          inputName="guestCpf"
          type="text"
          callback={(e) => setGuestCpf(e.target.value)}
        />
        <InputwithLabel
          htmlFor="guestName"
          labelText="Nome:"
          inputName="guestName"
          type="text"
          callback={(e) => setGuestName(e.target.value)}
        />
        <InputwithLabel
          htmlFor="guestRoomNumber"
          labelText="Número do quarto:"
          inputName="guestRoomNumber"
          type="number"
          callback={(e) => {
            console.log("AQUIPORRA " + typeof Number(e.target.value));
            const number = Number(e.target.value);
            setGuestRoomNumber(number);
          }}
        />
        <InputwithLabel
          htmlFor="guestPhoneNumber"
          labelText="Telefone/Celular:"
          inputName="guestPhoneNumber"
          type="text"
          callback={(e) => setGuestPhoneNumber(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSendRequest(true);
          }}
        >
          Cadastrar Hospede
        </button>
      </form>
      <br />

      {/* Treating server responses */}
      {requestResponse ==
      "SQLITE_CONSTRAINT: UNIQUE constraint failed: hospedes.cpf" ? (
        <h3>
          Cadastro não realizado. Este número de CPF já está cadastrado como
          hospede ativo.
        </h3>
      ) : typeof requestResponse == "object" ? (
        <h3>{requestResponse.Mensagem}</h3>
      ) : (
        <h3>{requestResponse}</h3>
      )}
    </>
  );
}

export default PostHospedes;
