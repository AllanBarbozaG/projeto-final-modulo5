import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetRequest } from "../../service/requestHospedes";
import style from "./Hospedes.module.css";
import Loading from "../../components/Loading/index";

export let guestCpfIndex = [];
export let deleteGuest = false;

function Hospedes() {
  const [hospedes, setHospedes] = useState([]);
  const [loadingReqData, setLoadingReqData] = useState(true);
  const [guestCpfSearch, setGuestCpfSearch] = useState();
  const navigate = useNavigate();
  const [guestFound, setGuestFound] = useState(false);

  useEffect(() => {
    GetRequest().then((data) => {
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
        <Loading />
      ) : guestCpfSearch && guestCpfSearch.length == 11 ? (
        <>
          {/* Após verificar se há guestCpfSearch, irá exibir praticamente a mesma página, porém, apenas com o hospede procurado */}
          {hospedes.map((hospede) => {
            if (hospede.cpf == guestCpfSearch) {
              return (
                <>
                  <div
                    onLoad={() => setGuestFound(true)}
                    className={style.container}
                  >
                    <div className={style.title}>
                      <h2>Controle de hóspedes</h2>
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
                        onChange={(e) => {
                          setGuestCpfSearch(e.target.value);
                          setGuestFound(false);
                        }}
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
            } else if (
              hospedes.indexOf(hospede) == hospedes.length - 1 &&
              hospede.cpf != guestCpfSearch &&
              !guestFound &&
              guestCpfSearch.length >= 11
            ) {
              return (
                <div className={style.container}>
                  <div className={style.title}>
                    <h2>Controle de hóspedes</h2>

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

                  <h1>HOSPEDE NÃO ENCONTRADO.</h1>
                </div>
              );
            }
          })}
        </>
      ) : (
        <div className={style.container}>
          <div className={style.title}>
            <h2>Controle de hóspedes</h2>

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
                            if (confirmation) {
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
