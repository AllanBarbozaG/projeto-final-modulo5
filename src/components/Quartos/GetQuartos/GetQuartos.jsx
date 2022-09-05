import RequestQuarto from "../../../service/requestQuartos";
import { useEffect, useState } from "react";

function GetQuarto(){
    const [quartos, setQuartos] = useState([]);
    const [showGuests, setShowGuests] = useState(true);
    const [countGuests, setCountGuests] = useState(0);
  
    useEffect(() => {
      RequestQuarto.get().then((data) => {
        setHospedes(data);
      });
    }, [])

    return (
        <>
          {
            showGuests && 
            quartos.map((quarto, index) => {
              return (
                <div key={index}>
                  <p>
                    {quarto.numeroQuarto} {quartos.nomeHospede}{" "}
                  </p>
                </div>
              );
            })}
        </>
      );
    }

export default GetQuarto;