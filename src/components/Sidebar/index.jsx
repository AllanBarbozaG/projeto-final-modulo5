import React from 'react'
import style from './sidebar.module.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.containerImg}>
                    <img src="./logo.png" />
                </div>
                <nav className={style.sidebar}>
                    <Link to="/" className={style.links}><img src="./botao-home.png" />Início</Link>
                    <Link to="/Reservas" className={style.links}><img src="./calendario.png" />Reservas</Link>
                    <Link to="/Quartos" className={style.links}><img src="./quartos.png" />Quartos</Link>
                    <Link to="/Hospedes" className={style.links}><img src="./hospedes.png" /> Hóspedes</Link>
                    <Link to="/Funcionarios" className={style.links}><img src="./funcionarios.png" />Funcionários</Link>
                    <Link to="/Limpezas" className={style.links}><img src="./limpeza.png" /> Controle de Limpezas </Link>
                    <Link to="/Login" className={style.links}><img src="./login.png" />Entrar </Link>
                </nav>
            </div>
            <footer className={style.footer}>
                <p>2022 version:T.18</p>
            </footer>
        </div>
    )
}

export default Sidebar