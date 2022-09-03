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
                    <Link to="/" className={style.links}><img src="./calendario.png" />Reservas</Link>
                    <Link to="/" className={style.links}><img src="./quartos.png" />Quartos</Link>
                    <Link to="/" className={style.links}><img src="./hospedes.png" /> Hóspedes</Link>
                    <Link to="/" className={style.links}><img src="./funcionarios.png" />Funcionários</Link>
                    <Link to="/" className={style.links}><img src="./limpeza.png" />Controle de Limpezas </Link>
                    <Link to="/" className={style.links}><img src="./join.png" />Entrar </Link>
                </nav>
            </div>
            <footer className={style.footer}>
                <p>2022 version:T.18</p>
            </footer>
        </div>
    )
}

export default Sidebar