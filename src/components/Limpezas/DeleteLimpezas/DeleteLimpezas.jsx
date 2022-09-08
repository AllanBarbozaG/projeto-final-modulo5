import { DeleteLimpezasRequest} from "../../../service/requestHospedes.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DeleteLimpezas() {
    const [cleanningId, setCleanningId] = useState();
    const [deleteCleanning, setDeleteCleanning] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setDeleteCleanning(false);
        DeleteCleanning(cleanningId)
        DeleteLimpezasRequest()
            .then((json) => console.log(json))
            .catch((error) => console.log(error + "deu erro"));
        }, [deleteCleanning]);

    return (
        <>
            <h1>Limpeza deletada com sucesso.</h1>
            <button onClick={() => navigate("/limpezas")}>Voltar</button>
        </>
    );
}

export default DeleteLimpezas;
