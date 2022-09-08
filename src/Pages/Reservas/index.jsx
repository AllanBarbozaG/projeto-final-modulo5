import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./reservas.module.css"

function Reservas() {
    const [reservas, setReservas] = useState([])
    const navigate = useNavigate()

    async function fetchReserva() {
        const response = await fetch('http://localhost:3000/reservas');
        const data = await response.json();
        setReservas(data);
    }
    useEffect(() => {
        fetchReserva()
    }, [deleteClick])

    function handleClick() {
        navigate("/addreserva")
    }

    async function deleteClick(id) {
        const response = await fetch(`http://localhost:3000/reservas/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        alert(data.Mensagem)

    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>Controle de reservas</h2>
                <div className={style.reservation}>Total de reservas</div>
                <div className={style.checkin}>Hóspedes chegando</div>
                <div className={style.checkout}>Hóspedes saindo</div>
            </div>
            <div className={style.search}>
                <button type="button" onClick={handleClick} className={style.buttonCreate}>Adicionar reserva</button>
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
                        {reservas.map((dados) => {
                            return <tr className={style.body} key={dados.id}>
                                <td scope="row" className={style.linhas}>
                                    {dados.CPF}
                                </td>
                                <td className={style.linhas}>
                                    {dados.nome}
                                </td>
                                <td className={style.linhas}>
                                    {dados.numeroQuarto}
                                </td>
                                <td className={style.linhas}>
                                    {dados.dataEntrada}
                                </td>
                                <td className={style.linhas}>
                                    {dados.dataSaida}
                                </td>
                                <td className={style.icons}>
                                    <img src="./view.png" />
                                    <img src="./lapis.png" onClick={(e) => {
                                        navigate("/attreserva")
                                    }} />
                                    <img src="./lixeira.png" onClick={
                                        () => deleteClick(dados.id)} />
                                </td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}


export default Reservas