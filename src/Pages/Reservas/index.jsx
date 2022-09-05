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
                <input type={"text"} placeholder="Buscar" />
            </div>
            <div className={style.boxReservation}>
                <span>Reservas</span>
            </div>
            <table className={style.table}>
                <tr className={style.colunas}>
                    <th>CPF Hóspede</th>
                    <th>Número Quarto</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Ação</th>
                </tr>
                <tr className={style.linhas}>
                    <td>11111111111</td>
                    <td>Ramom Ferraz</td>
                    <td>02/02/2022</td>
                    <td>05/02/2022</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>11111111111</td>
                    <td>Ramom Ferraz</td>
                    <td>02/02/2022</td>
                    <td>05/02/2022</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>11111111111</td>
                    <td>Ramom Ferraz</td>
                    <td>02/02/2022</td>
                    <td>05/02/2022</td>
                    <td>X</td>
                </tr>
            </table >
        </div>
    )
}

export default Reservas