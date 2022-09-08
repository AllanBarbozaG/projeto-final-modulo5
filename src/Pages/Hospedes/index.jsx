import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetRequest } from "../../service/requestHospedes";
import style from "./Hospedes.module.css";

export let guestCpfIndex = [];
export let deleteGuest = false;

function Hospedes() {
  const [hospedes, setHospedes] = useState([]);
  const [loadingReqData, setLoadingReqData] = useState(true);
  const [guestCpf, setGuestCpf] = useState();
  const [guestCpfSearch, setGuestCpfSearch] = useState();
  console.log("gestcpfsearch: " + guestCpfSearch);
  const navigate = useNavigate();

  useEffect(() => {
    GetRequest().then((data) => {
      console.log("req feita");
      setHospedes(data);
      setLoadingReqData(false);
    });
  }, [loadingReqData, guestCpfSearch]);

  useEffect(() => {
    guestCpfIndex = [];
  });

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
      ) : guestCpfSearch && guestCpfSearch.length == 11 ? (
        <>
          {/* Após verificar se há guestCpfSearch, irá exibir praticamente a mesma página, porém, apenas com o hospede procurado */}
          {hospedes.map((hospede) => {
            if (hospede.cpf == guestCpfSearch) {
              return (
                <>
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
                      <input
                        onChange={(e) => setGuestCpfSearch(e.target.value)}
                        type={"text"}
                        value={guestCpfSearch}
                        placeholder="Buscar CPF"
                      />
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
                          <tr className={style.body} key={hospede.cpf}>
                            <td scope="row" className={style.linhas}>
                              {hospede.cpf}
                            </td>
                            <td className={style.linhas}>{hospede.nome}</td>
                            <td className={style.linhas}>
                              {hospede.numeroQuarto}
                            </td>
                            <td className={style.linhas}>{hospede.telefone}</td>

                            <td className={style.icons}>
                              <img src="./view.png" />
                              <img
                                src="./lapis.png"
                                onClick={(e) => {
                                  setGuestCpf(hospede.cpf);
                                  guestCpfIndex.push(hospede.cpf);
                                  navigate("/updatehospede");
                                }}
                              />
                              <img
                                src="./lixeira.png"
                                onClick={(e) => {
                                  e.preventDefault;
                                  const confirmation = confirm(
                                    "Tem certeza de que deseja excluir o registro deste hóspede?Não será possível recuperar os dados."
                                  );
                                  if (confirmation == true) {
                                    setGuestCpf(hospede.cpf);
                                    guestCpfIndex.push(hospede.cpf);
                                    deleteGuest = true;
                                    navigate("/deletehospede");
                                  }
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              );
            }
          })}
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
            <input
              onChange={(e) => setGuestCpfSearch(e.target.value)}
              type={"text"}
              placeholder="Buscar CPF"
            />
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
                            guestCpfIndex.push(hospede.cpf);
                            navigate("/updatehospede");
                          }}
                        />
                        <img
                          src="./lixeira.png"
                          onClick={(e) => {
                            e.preventDefault;
                            const confirmation = confirm(
                              "Tem certeza de que deseja excluir o registro deste hóspede?Não será possível recuperar os dados."
                            );
                            if (confirmation == true) {
                              setGuestCpf(hospede.cpf);
                              guestCpfIndex.push(hospede.cpf);
                              deleteGuest = true;
                              navigate("/deletehospede");
                            }
                          }}
                        />
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
