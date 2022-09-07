import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetRequest } from "../../service/requestHospedes";
import style from "./Hospedes.module.css";

export let guestCpfIndex = [];

function Hospedes() {
  const [hospedes, setHospedes] = useState([]);
  const [loadingReqData, setLoadingReqData] = useState(true);
  const [guestCpf, setGuestCpf] = useState();
  console.log(guestCpf);
  console.log(guestCpfIndex);
  const navigate = useNavigate();

  useEffect(() => {
    GetRequest().then((data) => {
      setHospedes(data);
      setLoadingReqData(false);
    });
  }, [loadingReqData]);

  useEffect(() => {
    guestCpfIndex = []
    
  })

  function handleSetPage(page) {
    navigate(page);
  }

  return (
    <>
      {/* Mensagem de carregando */}
      {loadingReqData ? (
        <>
          <div>CARREGANDO...</div>
          {console.log("carregando")}
        </>
      ) : (
        <div className={style.container}>
          <div className={style.title}>
            <h2>Controle de hóspedes</h2>
            <div className={style.reservation}>Total de hóspedes</div>
            <div className={style.checkin}>Hóspedes chegando</div>
            <div className={style.checkout}>Hóspedes saindo</div>
          </div>
          <div className={style.search}>
            <button
              type="button"
              onClick={() => handleSetPage("/addhospede")}
              className={style.buttonCreate}
            >
              Adicionar Hospede
            </button>
            <input type={"text"} placeholder="Buscar CPF" />
          </div>

          <div className={style.containerTable}>
            <table className={style.table}>
              <thead className={style.thead}>
                <tr>
                  <th scope="col" className={style.th}>
                    CPF Hóspede
                  </th>
                  <th scope="col" className={style.th}>
                    Nome Hóspede
                  </th>
                  <th scope="col" className={style.th}>
                    número quarto
                  </th>
                  <th scope="col" className={style.th}>
                    Telefone
                  </th>

                  <th scope="col" className={style.th}>
                    ação
                  </th>
                </tr>
              </thead>
              <tbody>
                {hospedes.map((hospede) => {
                  return (
                    <tr className={style.body} key={hospede.cpf}>
                      <td scope="row" className={style.linhas}>
                        {hospede.cpf}
                      </td>
                      <td className={style.linhas}>{hospede.nome}</td>
                      <td className={style.linhas}>{hospede.numeroQuarto}</td>
                      <td className={style.linhas}>{hospede.telefone}</td>

                      <td className={style.icons}>
                        <img src="./view.png" />
                        <img
                          src="./lapis.png"
                          onClick={(e) => {
                            setGuestCpf(hospede.cpf);
                            if (guestCpfIndex.indexOf(hospede.cpf) == -1) {
                              guestCpfIndex.push(hospede.cpf);
                            } else {
                              guestCpfIndex.slice(0, guestCpfIndex.length-1)
                            }

                            navigate("/updatehospede");
                          }}
                        />
                        <img src="./lixeira.png" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Hospedes;
