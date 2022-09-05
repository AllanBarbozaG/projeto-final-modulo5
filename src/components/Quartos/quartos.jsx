import { useState } from "react";
import GetQuarto from "./GetQuartos/GetQuartos";

function Quartos() {
  const [methodForm, seMethodForm] = useState();

  return (
    <>
      {methodForm == "get" ? (
        <GetQuarto />
      ) : methodForm == "post" ? (
        <PostQuarto />
      ) : methodForm == "put" ? (
        <PutQuarto />
      ) : methodForm == "delete" ? (
        <DeleteQuarto />
      ) : (
        <>
          
        </>
      )}
    </>
  );
}

export default Quartos;