import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home/"
import Reservas from "./Pages/Reservas/"
import Quartos from "./Pages/Quartos/quartos"
import CreateUpdateQuarto from "./Pages/Quartos/CreateUpdateQuarto"
import Hospedes from "./Pages/Hospedes"
import Funcionarios from "./Pages/Funcionarios"
import Limpezas from "./Pages/Limpezas"
import Login from "./Pages/Login"
import Layout from "./components/Layout"
import style from "./App.module.css"
import PostHospedes from './components/Hospedes/PostHospedes/PostHospedes'
import PutHospedes from "./components/Hospedes/PutHospedes/PutHospedes"
import DeleteHospede from "./components/Hospedes/DeleteHospede/DeleteHospede";
import PostFuncionarios from "./components/Funcionarios/PostFuncionarios/PostFuncionarios"
import PutFuncionarios from "./components/Funcionarios/PutFuncionarios/PutFuncionarios"
import DeleteFuncionarios from "./components/Funcionarios/DeleteFuncionarios/DeleteFuncionarios"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <div className={style.app}>
          <BrowserRouter>
            <Layout isAuthenticated={isAuthenticated}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/addreserva" element={<NovaReserva />} />
                <Route path="/Quartos" element={<Quartos />} />
                <Route path="/criar-quarto" element={<CreateUpdateQuarto />} />
                <Route path="/edita-quarto/:id" element={<CreateUpdateQuarto />} />
                <Route path="/hospedes" element={<Hospedes />} />
                <Route path="/addhospede" element={<PostHospedes />} />
                <Route path="/updatehospede" element={<PutHospedes />} />
                <Route path="/deletehospede" element={<DeleteHospede />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/limpezas" element={<Limpezas />} />
                <Route path="/addfuncionario" element={<PostFuncionarios />} />
                <Route path="/updatefuncionario" element={<PutFuncionarios />} />
                <Route path="/deletefuncionario" element={<DeleteFuncionarios />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </div>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
