import { GetRequest, PutRequest } from "../../../service/requestHospedes";
import { useEffect, useState } from "react";
import InputwithLabel from "../../InputWithLabel/InputWithLabel";
import { guestCpfIndex } from "../../../Pages/Hospedes";

function PutHospedes() {
  console.log(guestCpfIndex);
  const [guestCpf, setGuestCpf] = useState();
  // console.log(guestCpf);
  const [guestName, setGuestName] = useState("");
  // console.log(guestName)
  const [guestRoomNumber, setGuestRoomNumber] = useState(0);
  // console.log(typeof guestRoomNumber);
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  console.log(guestPhoneNumber);
  // console.log(guestPhoneNumber)
  const [sendRequest, setSendRequest] = useState(false);
  const [requestResponse, setResquestResponse] = useState({});
  console.log(requestResponse);

  useEffect(() => {
    if (sendRequest) {
      setSendRequest(false);
      PutRequest(guestCpf, guestName, guestRoomNumber, guestPhoneNumber)
        .then((json) => {
          console.log("json: " + json);
          setResquestResponse(json);
        })
        .catch((error) => console.log(error + "deu erro"));
    }
  }, [sendRequest]);

  useEffect(() => {
    GetRequest().then((data) => {
      data.map((hospede) => {
        if (hospede.cpf == guestCpfIndex[0]) {
          setGuestCpf(hospede.cpf);
          setGuestName(hospede.nome);
          setGuestPhoneNumber(hospede.telefone);
          setGuestRoomNumber(hospede.numeroQuarto);
        }
      });
    });
  }, []);

 


  return (
    <>
      <form action="send">
        <InputwithLabel
          htmlFor="guestCpf"
          labelText="CPF:"
          inputName="guestCpf"
          type="text"
          value={guestCpf}
          callback={(e) => setGuestCpf(e.target.value)}
        />
        <InputwithLabel
          htmlFor="guestName"
          labelText="Nome:"
          inputName="guestName"
          type="text"
          value={guestName}
          callback={(e) => setGuestName(e.target.value)}
        />
        <InputwithLabel
          htmlFor="guestRoomNumber"
          labelText="Número do quarto:"
          inputName="guestRoomNumber"
          type="number"
          value={guestRoomNumber}
          callback={(e) => {
            const number = Number(e.target.value);
            setGuestRoomNumber(number);
          }}
        />
        <InputwithLabel
          htmlFor="guestPhoneNumber"
          labelText="Telefone/Celular:"
          inputName="guestPhoneNumber"
          type="text"
          value={guestPhoneNumber}
          callback={(e) => setGuestPhoneNumber(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSendRequest(true);
          }}
        >
          Atualizar Hospede
        </button>
      </form>
      <br />
      {console.log("requestResponse: " + requestResponse)}
      {/* Treating server responses */}
      {requestResponse ==
      "SQLITE_CONSTRAINT: UNIQUE constraint failed: hospedes.cpf" ? (
        <h3>
          Cadastro não realizado. Este número de CPF já está cadastrado como
          hospede ativo.
        </h3>
      ) : typeof requestResponse == "object" ? (
        <h3>{requestResponse.Mensagem || requestResponse.message}</h3>
      ) : (
        <h3>{requestResponse}</h3>
      )}
    </>
  );
}

export default PutHospedes;
