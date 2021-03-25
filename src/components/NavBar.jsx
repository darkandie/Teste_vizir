
import React from 'react';

import { Link } from "react-router-dom";
import styles from '../styles/components/NavBar.module.css'

const NavBar = () => {


    return (
        <div className = {styles.headerContainer}>
            <div className = {styles.title}>
                <Link to= "/"><h1>TELZIR </h1></Link>
            </div>
            <div>
            <nav>
                <ul>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/opcoes"><li>Nossos planos</li></Link>
                    <Link to= "/Cadastro"><li>Entrar </li></ Link>
                </ul>
            </nav>
        </div>
        </div>        
    )
}

export default NavBar;