import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home/";
import Reservas from "./Pages/Reservas/";
import NovaReserva from "./Pages/Reservas/novaReserva";
import AttReserva from "./Pages/Reservas/attReserva";
import Quartos from "./Pages/Quartos/quartos"
import CreateUpdateQuarto from "./Pages/Quartos/CreateUpdateQuarto"
import Hospedes from "./Pages/Hospedes/index";
import Funcionarios from "./Pages/Funcionarios/index";
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
import PostLimpezas from "./components/Limpezas/PostLimpezas/PostLimpezas"

import DeleteLimpezas from "./components/Limpezas/DeleteLimpezas/DeleteLimpezas"



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
                <Route path="/quartos" element={<Quartos />} />
                <Route path="/criar-quarto" element={<CreateUpdateQuarto />} />
                <Route path="/edita-quarto/:id" element={<CreateUpdateQuarto />} />
                <Route path="/attreserva" element={<AttReserva />} />
                <Route path="/attreserva/:id" element={<AttReserva />} />
                <Route path="/hospedes" element={<Hospedes />} />
                <Route path="/addhospede" element={<PostHospedes />} />
                <Route path="/updatehospede" element={<PutHospedes />} />
                <Route path="/deletehospede" element={<DeleteHospede />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/limpezas" element={<Limpezas />} />
                <Route path="/addlimpeza" element={<PostLimpezas />} />
                
                <Route path="/deletelimpeza" element={<DeleteLimpezas />} />
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
