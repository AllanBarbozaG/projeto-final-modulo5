import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLimpezasRequest } from "../../service/requestLimpezas";
import Loading from '../../components/Loading';
import style from "./limpezas.module.css"

export let cleanningId = [];
export let deleteCleanning = false;

function Limpezas() {

    const [limpezas, setLimpezas] = useState([]);
    const [loadingReqData, setLoadingReqData] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        GetLimpezasRequest().then((data) => {
        setLimpezas(data);
        setLoadingReqData(false);
        })
    }, [loadingReqData]);

    useEffect(() => {
        cleanningId = [];
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
                        <h2>Controle de Limpezas</h2>
                    </div>
                    <div className={style.search}>
                        <button 
                        type="button" 
                        onClick={() => handleSetPage("/addlimpeza")} 
                        className={style.buttonCreate}
                        
                        >
                            Adicionar limpeza
                        </button>
                        <input type={"text"} placeholder="Buscar limpeza" />
                    </div>
                    <div className={style.containerTable}>
                        <table className={style.table}>
                            <thead className={style.thead}>
                                <tr>
                                    <th scope="col" className={style.th}>
                                        ID Limpeza
                                    </th>
                                    <th scope="col" className={style.th}>
                                        Número do quarto
                                    </th>
                                    <th scope="col" className={style.th}>
                                        Controle de limpeza
                                    </th>
                                    <th scope="col" className={style.th}>
                                        Funcionário responsável
                                    </th>
                                    <th scope="col" className={style.th}>
                                        Data de limpeza
                                    </th>
                                    <th scope="col" className={style.th}>
                                        Ação
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {limpezas.map((limpeza) => {
                                    return (
                                        <tr className={style.body} key={limpeza.id}>
                                            <td scope="row" className={style.linhas}>{limpeza.id}</td>
                                            <td className={style.linhas}>{limpeza.numeroQuarto}</td>
                                            <td className={style.linhas}>{limpeza.controle}</td>
                                            <td className={style.linhas}>{limpeza.id_funcionario}</td>
                                            <td className={style.linhas}>{limpeza.dataEntrada}</td>
                                            <td className={style.icons}>
                                                <img
                                                    src="./lapis.png"
                                                    onClick={(e) => {
                                                        navigate("/updatelimpeza");
                                                    }}
                                                    />
                                                <img
                                                src="./lixeira.png"
                                                onClick={(e) => {
                                                    e.preventDefault;
                                                    const confirmation = confirm(
                                                    "Tem certeza de que deseja excluir o registro desta limpeza? Não será possível recuperar os dados."
                                                    );
                                                    if (confirmation == true) {
                                                    setGuestCpf(limpeza.id);
                                                    navigate("/deletelimpeza");
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
            </div >
        </>
    )
}

export default Limpezas