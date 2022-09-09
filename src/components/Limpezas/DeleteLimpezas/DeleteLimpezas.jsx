import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteLimpezasRequest} from "../../../service/requestLimpezas.js";
import { cleanningId, deleteCleanning } from "../../../Pages/Limpezas/index";

function DeleteLimpezas() {

    const navigate = useNavigate();

    useEffect(() => {
        if(deleteCleanning){
            DeleteLimpezasRequest(cleanningId)
            .then((json) => console.log(json))
            .catch((error) => console.log(error + "erro"));
        }
        
    }, []);

    return (
        <>
            <h1>Limpeza deletada com sucesso.</h1>
            <button onClick={() => navigate("/limpezas")}>Voltar</button>
        </>
    );
}

export default DeleteLimpezas;
