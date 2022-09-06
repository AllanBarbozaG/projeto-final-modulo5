import style from "./limpezas.module.css"

function Limpezas() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Controle de Limpezas</h2>
            </div>
            <div className={style.search}>
                <button type="button" className={style.buttonCreate}>Visualizar limpezas</button>
                <input type={"text"} placeholder="Buscar quarto" />
            </div>


            <div className={style.containerTable}>
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                            <th scope="col" className={style.th}>
                                INSERIR COLUNA
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={style.body}>
                            <td scope="row" className={style.linhas}>
                                11111111111
                            </td>
                            <td className={style.linhas}>
                                11111111111
                            </td>
                            <td className={style.linhas}>
                                11111111111
                            </td>
                            <td className={style.linhas}>
                                11111111
                            </td>
                            <td className={style.linhas}>
                                111111111111
                            </td>
                            <td className={style.icons}>
                                <img src="./view.png" />
                                <img src="./lapis.png" />
                                <img src="./lixeira.png" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default Limpezas