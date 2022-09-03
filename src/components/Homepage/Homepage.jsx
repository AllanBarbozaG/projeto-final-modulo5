import Hospedes from "../Hospedes/Hospedes";
import "./Homepage.css";
import { useState } from "react";

function Homepage() {
  const [paginaEntidade, setPaginaEntidade] = useState();

  function handleSetPage(pageName) {
    setPaginaEntidade(pageName);
  }

  return (
    <>
      {paginaEntidade == "hospedes" ? (
        <Hospedes />
      ) : (
        <div className="entidadesDiv">
          <button
            className="homepageDivs"
            onClick={() => {
              handleSetPage("hospedes");
            }}
          >
            <p>Hospedes</p>
          </button>
          <button className="homepageDivs">
            <p>Funcionários</p>
          </button>
          <button className="homepageDivs">
            <p>Quartos</p>
          </button>
          <button className="homepageDivs">
            <p>Reservas</p>
          </button>
          <button className="homepageDivs">
            <p>Limpezas</p>
          </button>
        </div>
      )}
    </>
  );
}

export default Homepage;
