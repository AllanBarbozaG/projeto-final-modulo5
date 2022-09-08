import { useEffect, useState } from "react";
import QuartosTable from "../../components/Quartos/QuartosTable/quartosTable";
import { getQuartos, deleteQuarto } from "../../service/requestQuartos";
import Loading from "../../components/Loading/index";

function Quartos() {
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuartos = () => {
    getQuartos()
      .then(({ data }) => {
        setQuartos(data);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Deu ruim", error);
      },[loading]);
  };

  useEffect(() => {
    fetchQuartos();
  }, []);

  if (loading) {
    return <Loading />
}

  return (
    <>
      <QuartosTable
        quartos={quartos}
        onDelete={(id) => {
          const confirmar = confirm("Você realmente quer deletar esse quarto?");
          if (confirmar) {
            deleteQuarto(id)
              .then(() => {
                alert("Quarto foi deletado com sucesso!");
                fetchQuartos();
              })
              .catch((error) => {
                alert("Não foi possivel deletar o quarto");
                console.log(error);
              });
          }
        }}
      />
    </>
  );
}

export default Quartos;
