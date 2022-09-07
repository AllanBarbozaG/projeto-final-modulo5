import { useEffect, useState } from "react";
import { GetRequest } from "../../../service/requestHospedes.js";



function GetHospedes() {
  const [hospedes, setHospedes] = useState([]);
  const [showGuests, setShowGuests] = useState(true);
  const [countGuests, setCountGuests] = useState(0);
  console.log(hospedes);
  console.log(showGuests);
  const [loadingReqData, setLoadingReqData] = useState(true)

  useEffect(() => {
    GetRequest().then((data) => {
      setHospedes(data);
      setLoadingReqData(false)
    });
  }, [loadingReqData]);  

  return (
    <>
      { loadingReqData ? (
        <>
        <div>CARREGANDO...</div>
        {console.log('carregando')}
        </>
      ) : 
        
        hospedes.map((hospede, index) => {
          return (
            <div key={index}>
              <p>
                {hospede.nome} {hospede.cpf}{" "}
              </p>
            </div>
          );
        }) } : 
    </>
  );
}

export default GetHospedes;
