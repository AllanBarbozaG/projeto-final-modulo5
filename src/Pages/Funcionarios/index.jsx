
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import  GetFuncionarios  from "../../components/Funcionarios/GetFuncionarios/GetFuncionarios";
import  PostFuncionarios  from "../../components/Funcionarios/PostFuncionarios/PostFuncionarios";
import  DeleteFuncionarios  from "../../components/Funcionarios/DeleteFuncionarios/DeleteFuncionarios";
import  PutFuncionarios from "../../components/Funcionarios/PutFuncionarios/PutFuncionarios";
import { GetFuncionario }  from "../../service/requestFuncionarios";

import Loading from "../../components/Loading/index"

import style from "./funcionarios.module.css"

export let funcionarioId = [];
export let deleteFuncionario = false;


function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([]);
    
    const [loadingReqData, setLoadingReqData] = useState(true);

    const [idFunctionario, setIdFunctionario] = useState();
    console.log(idFunctionario);
    console.log(funcionarioId);
    const navigate = useNavigate();

    useEffect(() => {
        GetFuncionario().then((data) => {
        setFuncionarios(data);
        setLoadingReqData(false);

        })
    }, []);

    useEffect(() => {
        funcionarioId = [];
    });

    function handleSetPage(page) {
        navigate(page);
    }
    
    if (loadingReqData) {
      return <Loading />
  }
    
    return (
        <>
        
        <div className={style.container}>
          <div className={style.title}>
            <h2>Controle de funcionários</h2>
          </div>
          <div className={style.search}>
            <button
              type="button"
              onClick={() => handleSetPage("/addfuncionario")}
              className={style.buttonCreate}
            >
              Adicionar Funcionário
            </button>
          </div>

          <div className={style.containerTable}>
            <table className={style.table}>
              <thead className={style.thead}>
                <tr>
                  <th scope="col" className={style.th}>
                    Id Funcionário
                  </th>
                  <th scope="col" className={style.th}>
                    Nome Funcionário
                  </th>
                  <th scope="col" className={style.th}>
                    Data de admissão
                  </th>

                  <th scope="col" className={style.th}>
                    ação
                  </th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((funcionario) => {
                  return (
                    <tr className={style.body} key={funcionario.id}>
                      <td className={style.linhas}>{funcionario.id}</td>
                      <td className={style.linhas}>{funcionario.nome}</td>
                      <td className={style.linhas}>{funcionario.data_admissao}</td>

                      <td className={style.icons}>
                        <img
                          src="./lapis.png"
                          onClick={(e) => {
                            console.log(funcionario)
                            // setIdFunctionario(funcionario.id);
                            funcionarioId.push(funcionario.id);
                            navigate("/updatefuncionario");
                          }}
                        />
                        <img src="./lixeira.png" 
                        onClick={(e) => {
                          e.preventDefault;
                          const confirmation = confirm(
                            "Deseja realmente excluir o funcionário?"
                          );
                          if (confirmation == true) {
                            setIdFunctionario(funcionario.id);
                            funcionarioId.push(funcionario.id);
                            deleteFuncionario = true;
                          navigate("/deletefuncionario");
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
      )
    </>
    );
}

export default Funcionarios;
