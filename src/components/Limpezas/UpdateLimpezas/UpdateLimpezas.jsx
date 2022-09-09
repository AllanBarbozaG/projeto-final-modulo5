import { useEffect, useState } from "react";
import { GetLimpezasRequest, UpdateLimpezasRequest} from "../../../service/requestLimpezas";
import { cleanningId } from "../../../Pages/Limpezas";
import style from "./UpdateLimpezas .module.css";

function UpdateLimpezas(){
    const [roomNumber, setRoomNumber] = useState(0);
    const [isItClean, setIsItClean] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [cleanningDate, setCleanningDate] = useState("");
    const [sendRequest, setSendRequest] = useState(false);
    const [requestResponse, setRequestResponse] = useState(false);

    useEffect(() => {
        if(sendRequest){
            setSendRequest(false)
            UpdateLimpezasRequest(cleanningId, roomNumber, isItClean, employeeId, cleanningDate)
            .then((json)=> {
                setRequestResponse(json)
            })
            .catch((error) => console.log(error))
        }
    },[sendRequest]);

    useEffect(() => {
        GetLimpezasRequest().then((data) => {
            data.map((limpeza) => {
                if(limpeza.id == cleanningId[0]){
                    setRoomNumber(limpeza.numeroQuarto)
                    setIsItClean(limpeza.controle)
                    setEmployeeId(limpeza.id_funcionario)
                    setCleanningDate(limpeza.dataEntrada)
                }
            })
        })
    }, [])

    return (
        <>
            <form action="send">
            <div className={style.inputs}>
                <label htmlFor="idLimpeza" className={style.label}>
                Id Limpeza
                </label>
                <input
                type="text"
                name="idLimpeza"
                id="idLimpeza"
                className={style.inputsForm}
                value={cleanningId}
                onChange={(e) => {
                    setRoomNumber(e.target.value);
                }}
                placeholder="0 = Não foi limpo; 1 = limpo"
                disabled
                />
            </div>
            <div className={style.inputs}>
                <label htmlFor="nome" className={style.label}>
                Número do quarto
                </label>
                <div className={style.inputs}>
                <label htmlFor="numQuarto" className={style.label}>
                Número do quarto
                </label>
                <input
                type="text"
                name="numQuarto"
                id="numQuarto"
                className={style.inputsForm}
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                placeholder="Digite o numero do quarto"
                required
                />
            </div>
                <input
                type="text"
                name="controle"
                id="controle"
                className={style.inputsForm}
                value={isItClean}
                onChange={(e) => setIsItClean(e.target.value)}
                placeholder="Informe se a limpeza foi feita"
                required
                />
            </div>
            <div className={style.container}>
                <div className={style.inputs}>
                <label htmlFor="id_funcionario" className={style.label}>
                    Funcionário responsável
                </label>
                <input
                    type="text"
                    name="id_funcionario"
                    id="id_funcionario"
                    className={style.inputsForm}
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Digite a matrícula do funcionário"
                    required
                />
                </div>
            </div>
            <div className={style.container}>
                <div className={style.inputs}>
                <label htmlFor="entrada" className={style.label}>
                    Data de limpeza
                </label>
                <input
                    type="text"
                    name="dataEntrada"
                    id="dataEntrada"
                    className={style.inputsForm}
                    value={cleanningDate}
                    onChange={(e) => setCleanningDate(e.target.value)}
                    placeholder="Digite a data da limpeza"
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
                Atualizar Limpeza
                </button>
            </div>
            </form>
            <br />
            {console.log("Resposta: " + requestResponse)}
        
        </>
    );
}

export default UpdateLimpezas;