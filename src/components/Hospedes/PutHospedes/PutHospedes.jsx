import { GetRequest, PutRequest } from "../../../service/requestHospedes";
import { useEffect, useState } from "react";
import { guestCpfIndex } from "../../../Pages/Hospedes";
import style from "./PutHospedes.module.css";

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
        <div className={style.inputs}>
          <label htmlFor="cpf" className={style.label}>
            CPF
          </label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            className={style.inputsForm}
            value={guestCpf}
            onChange={(e) => {
              setGuestCpf(e.target.value);
            }}
            placeholder="Ex: 000-000-000"
            required
          />
        </div>
        <div className={style.inputs}>
          <label htmlFor="nome" className={style.label}>
            Nome Hóspede
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className={style.inputsForm}
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Digite nome do hóspede"
            required
          />
        </div>
        <div className={style.inputs}>
          <label htmlFor="numQuarto" className={style.label}>
            Número do quarto
          </label>
          <input
            type="text"
            name="numQuarto"
            id="numQuarto"
            className={style.inputsForm}
            value={guestRoomNumber}
            onChange={(e) => setGuestRoomNumber(e.target.value)}
            placeholder="Digite o numero do quarto"
            required
          />
        </div>
        <div className={style.container}>
          <div className={style.inputs}>
            <label htmlFor="entrada" className={style.label}>
              Telefone
            </label>
            <input
              type="text"
              name="entrada"
              id="entrada"
              className={style.inputsForm}
              value={guestPhoneNumber}
              onChange={(e) => setGuestPhoneNumber(e.target.value)}
              placeholder="Digite o numero de telefone"
              required
            />
          </div>
        </div>

        <div className={style.containerButton}>
          <button
            className={style.button}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSendRequest(true);
            }}
          >
            Atualizar Hospede
          </button>
        </div>
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
