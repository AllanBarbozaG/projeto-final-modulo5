import style from "./quartos.module.css"

function Quartos() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Quartos</h2>
            </div>
            <div className={style.search}>
                <button type="button" className={style.buttonCreate}>Adicionar quartos</button>
                <input type={"text"} placeholder="Buscar" />
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

export default Quartos