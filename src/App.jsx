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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Layout isAuthenticated={isAuthenticated} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/Quartos" element={<Quartos />} />
            <Route path="/criar-quarto" element={<CreateUpdateQuarto />} />
            <Route path="/edita-quarto/:id" element={<CreateUpdateQuarto />} />
            <Route path="/Hospedes" element={<Hospedes />} />
            <Route path="/Funcionarios" element={<Funcionarios />} />
            <Route path="/Limpezas" element={<Limpezas />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
