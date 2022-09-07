import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home/"
import Reservas from "./Pages/Reservas/"
import NovaReserva from "./Pages/Reservas/novaReserva"
import Quartos from "./Pages/Quartos/"
import Hospedes from "./Pages/Hospedes/index"
import Funcionarios from "./Pages/Funcionarios/index";
import Limpezas from "./Pages/Limpezas"
import Login from "./Pages/Login"
import Layout from "./components/Layout"
import style from "./App.module.css"
import PostHospedes from './components/Hospedes/PostHospedes/PostHospedes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      {isAuthenticated ?
        <div className={style.app}>
          <BrowserRouter>
            <Layout isAuthenticated={isAuthenticated} >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/addreserva" element={<NovaReserva />} />
                <Route path="/quartos" element={<Quartos />} />
                <Route path="/hospedes" element={<Hospedes />} />
                <Route path="/addhospede" element={<PostHospedes />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
                <Route path="/limpezas" element={<Limpezas />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </div> : <Login setIsAuthenticated={setIsAuthenticated} />}
    </>
  )
}

export default App
