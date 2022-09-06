import style from "./reservas.module.css"

function Reservas() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Controle de reservas</h2>
                <div className={style.reservation}>Total de reservas</div>
                <div className={style.checkin}>Hóspedes chegando</div>
                <div className={style.checkout}>Hóspedes saindo</div>
            </div>
            <div className={style.search}>
                <button type="button" className={style.buttonCreate}>Adicionar reserva</button>
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
                                Check-in
                            </th>
                            <th scope="col" className={style.th}>
                                check-out
                            </th>
                            <th scope="col" className={style.th}>
                                ação
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={style.body}>
                            <td scope="row" className={style.linhas}>
                                11111111111
                            </td>
                            <td className={style.linhas}>
                                1111111111111
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

export default Reservas