import { useEffect, useState } from "react";
import { GetRequest } from "../../service/requestHospedes";

function GetHospedes() {
  const [hospedes, setHospedes] = useState([]);  

  useEffect(() => {
    GetRequest().then((data) => {
      setHospedes(data);
    });
  }, []);

  return (
    <>
      {hospedes.map((hospede, index) => {
        
        return (
          <p key={index}>
            {hospede.nome} {hospede.cpf}{" "}
          </p>
        );
      })}
    </>
  );
}

export default GetHospedes;
