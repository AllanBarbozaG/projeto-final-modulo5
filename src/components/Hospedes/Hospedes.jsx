import { useState } from "react";
import DeleteHospede from "./DeleteHospede/DeleteHospede";
import GetHospedes from "./GetHospedes/GetHospedes";
import PostHospedes from "../PostHospedes/PostHospedes";
import PutHospedes from "../PutHospedes/PutHospedes";
import { StyledDiv } from "./style";

function Hospedes() {
  const [methodForm, setMethodForm] = useState();

  return (
    <>
      {methodForm == "get" ? (
        <GetHospedes />
      ) : methodForm == "post" ? (
        <PostHospedes />
      ) : methodForm == "put" ? (
        <PutHospedes />
      ) : methodForm == "delete" ? (
        <DeleteHospede />
      ) : (
        <>
          <label htmlFor="select">O que deseja fazer?</label>
          <br />
          <select
            name="select"
            id="what"
            onChange={(e) => setMethodForm(e.target.value)}
          >
            <option value=""></option>
            <option value="get">Listar hospedes</option>
            <option value="post">Registrar novo hospede</option>
            <option value="put">Atualizar dados de hospede</option>
            <option value="delete">Deletar hospede</option>
          </select>
        </>
      )}
    </>
  );
}

export default Hospedes;
