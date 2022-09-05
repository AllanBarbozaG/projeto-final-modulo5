import style from "./funcionarios.module.css"

function Funcionarios() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Funcionários</h2>
            </div>
            <div className={style.search}>
                <button type="button" className={style.buttonCreate}>Registrar funcionários</button>
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
                                INSERIR LINHA
                            </td>
                            <td ClassName={style.linhas}>
                                INSERIR LINHA
                            </td>
                            <td ClassName={style.linhas}>
                                INSERIR LINHA
                            </td>
                            <td ClassName={style.linhas}>
                                INSERIR LINHA
                            </td>
                            <td ClassName={style.linhas}>
                                INSERIR LINHA
                            </td>
                            <td ClassName={style.linhas}>
                                <div className={style.icons}>
                                    <img src="./view.png" />
                                    <img src="./lapis.png" />
                                    <img src="./lixeira.png" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default Funcionarios