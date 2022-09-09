import { useNavigate, useParams } from "react-router-dom";
import {
  createQuarto,
  updateQuarto,
  getQuartoById,
} from "../../service/requestQuartos";
import FormQuartos from "../../components/Quartos/FormQuartos/FormQuartos";
import { useEffect, useState } from "react";

function CreateUpdateQuarto() {
  const nav = useNavigate();
  const param = useParams();
  const [editQuarto, setUpdateQuarto] = useState({});

  useEffect(() => {
    if (param.id) {
      getQuartoById(param.id)
        .then(({ data }) => {
          setUpdateQuarto(data);
        })
        .catch((error) => {
          alert("Erro", error);
        });
    }
  }, []);

  return (
    <>
      <FormQuartos
        hasId={param.id}
        editQuarto={editQuarto}
        onFinish={(quarto) => {
          if (param.id) {
            updateQuarto(param.id, {
              numeroQuarto: quarto.numeroQuarto,
              nomeHospede: quarto.nomeHospede,
              controle: quarto.controle,
              telefone: quarto.telefone,
            })
              .then((response) => {
                nav("/Quartos");
              })
              .catch((error) => {
                alert("Erro ao editar");
                console.log(error);
              });
          } else {
            createQuarto(quarto)
              .then((response) => {
                nav("/Quartos");
              })
              .catch((error) => {
                alert("Erro ao criar o quarto");
                console.log(error);
              });
          }
        }}
      />
    </>
  );
}

export default CreateUpdateQuarto;
