import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home/"
import Reservas from "./Pages/Reservas/"
import Layout from "./components/Layout"
import Login from "./Pages/Login"
import style from "./App.module.css"

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
              </Routes>
            </Layout>
          </BrowserRouter>
        </div> : <Login setIsAuthenticated={setIsAuthenticated} />}
    </>
  )
}

export default App
