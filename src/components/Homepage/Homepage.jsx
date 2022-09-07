import Hospedes from "../Hospedes/Hospedes";
import "./Homepage.css";
import { useState } from "react";

import Funcionarios from "../Funcionarios/Funcionarios.jsx";

function Homepage() {
  const [paginaEntidade, setPaginaEntidade] = useState();

  function handleSetPage(pageName) {
    setPaginaEntidade(pageName);
  }

  return (
    <>
      {paginaEntidade == "hospedes" ? (
        <Hospedes />
      ) : paginaEntidade == 'funcionarios' ? (
        <Funcionarios />
      ) :
      (
        <div className="entidadesDiv">
          <button
            className="homepageDivs"
            onClick={() => {
              handleSetPage("hospedes");
            }}
          >
            <p>Hospedes</p>
          </button>
          <button className="homepageDivs" onClick={() =>
          handleSetPage('funcionarios')}>
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
