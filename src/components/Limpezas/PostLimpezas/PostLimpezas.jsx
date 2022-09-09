import { useEffect, useState } from "react";
import { PostLimpezasRequest } from "../../../service/requestLimpezas";

import style from "./PostLimpezas.module.css";

function PostLimpezas() {
    const [roomNumber, setRoomNumber] = useState(0);
    const [isItClean, setIsItClean] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [cleanningDate, setCleanningDate] = useState("");
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
    if (sendRequest) {
        setSendRequest(false);
        PostLimpezasRequest(roomNumber, isItClean, employeeId, cleanningDate)
        .then((json) => {setSendRequest()
            console.log(json);
        })
        .catch((error) => console.log(error + "deu erro"));
    }
    }, [sendRequest]);

    return (
        <>
            <form action="send">
                
                <div className={style.inputs}>
                    <label htmlFor="numeroQuarto" className={style.label}>
                        Número do quarto
                    </label>
                    <input
                    type="text"
                    name="numeroQuarto"
                    id="numeroQuarto"
                    className={style.inputsForm}
                    value={roomNumber}
                    onChange={(e) => {
                        setRoomNumber(e.target.value);
                    }}
                    placeholder="Digite o numero do quarto"
                    required
                    />
                </div>
                <div className={style.inputs}>
                    <label htmlFor="limpeza" className={style.label}>
                        Controle de limpeza
                    </label>
                    <input
                    type="text"
                    name="limpeza"
                    id="controle"
                    className={style.inputsForm}
                    value={isItClean}
                    onChange={(e) => setIsItClean(e.target.value)}
                    placeholder="Digite a limpeza"
                    required
                    />
                </div>
                <div className={style.inputs}>
                    <label htmlFor="id_funcionario" className={style.label}>
                        ID Funcionário
                    </label>
                    <input
                    type="text"
                    name="id_funcionario"
                    id="id_funcionario"
                    className={style.inputsForm}
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Digite o Id do funcionário"
                    required
                    />
                </div>
                <div className={style.container}>
                    <div className={style.inputs}>
                    <label htmlFor="dataEntrada" className={style.label}>
                        Data entrada
                    </label>
                    <input
                        type="text"
                        name="dataEntrada"
                        id="dataEntrada"
                        className={style.inputsForm}
                        value={cleanningDate}
                        onChange={(e) => setCleanningDate(e.target.value)}
                        placeholder="Digite a data de entrada"
                        required
                    />
                    </div>
                </div>

                <div className={style.containerButton}>
                    <button
                    className={style.button}
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        setSendRequest(true);
                    }}
                    >
                    Cadastrar Limpeza
                    </button>
                </div>
            </form>
            <br />
        </>
    );
}

export default PostLimpezas;
