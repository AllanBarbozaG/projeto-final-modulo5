import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLimpezasRequest } from "../../service/requestLimpezas";
import style from "./limpezas.module.css"

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

    function handleSetPage(page) {
        navigate(page);
    }

        return (
        <>
            {loadingReqData ? (
            <>
                <div>CARREGANDO...</div>
                {console.log("carregando")}
            </>
            ) : (
                <div className={style.container}>
                    <div className={style.title}>
                        <h2>Controle de Limpezas</h2>
                    </div>
                    <div className={style.search}>
                        <button type="button" onClick={() => handleSetPage("/addlimpeza")} className={style.buttonCreate}>Adicionar limpeza</button>
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
                                            <td scope="row" className={style.linhas}>
                                                {limpeza.id}
                                            </td>
                                            <td className={style.linhas}>
                                                {limpeza.numeroQuarto}
                                            </td>
                                            <td className={style.linhas}>
                                                {limpeza.controle}
                                            </td>
                                            <td className={style.linhas}>
                                                {limpeza.id_funcionario}
                                            </td>
                                            <td className={style.linhas}>
                                                {limpeza.dataEntrada}
                                            </td>
                                            <td className={style.icons}>
                                                <img src="./view.png" />
                                                <img src="./lapis.png" />
                                                <img src="./lixeira.png" />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div >
            )}
        </>
    )
}

export default Limpezas