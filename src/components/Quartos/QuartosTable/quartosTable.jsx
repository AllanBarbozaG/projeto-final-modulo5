import style from "./quartos.module.css";
import { Link } from "react-router-dom";

function QuartosTable(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Quartos</h2>
      </div>
      <div className={style.search}>
        <Link to="/criar-quarto">
          <button type="button" className={style.buttonCreate}>
            Adicionar quarto
          </button>
        </Link>
      </div>

      <div className={style.containerTable}>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th scope="col" className={style.th}>
                ID
              </th>
              <th scope="col" className={style.th}>
                NumeroQuarto
              </th>
              <th scope="col" className={style.th}>
                NomeHospede
              </th>
              <th scope="col" className={style.th}>
                Controle
              </th>
              <th scope="col" className={style.th}>
                telefone
              </th>
            </tr>
          </thead>

          <tbody>
            {props.quartos.map((quarto, index) => {
              return (
                <tr key={index} className={style.body}>
                  <td className={style.linhas}>{quarto.id}</td>
                  <td className={style.linhas}>{quarto.numeroQuarto}</td>
                  <td className={style.linhas}>{quarto.nomeHospedes}</td>
                  <td className={style.linhas}>{quarto.controle}</td>
                  <td className={style.linhas}>{quarto.telefone}</td>
                  <td className={style.icons}>
                    <Link
                      className={style.link}
                      to={`/edita-quarto/${quarto.id}`}
                    >
                      <img className={style.edit} src="./lapis.png" />
                    </Link>
                    <img
                      src="./lixeira.png"
                      onClick={(event) => {
                        event.preventDefault();
                        props.onDelete(quarto.id);
                      }}
                      href="#"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuartosTable;
