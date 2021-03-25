
import React from 'react';

import styles from '../styles/components/Footer.module.css'

const Footer = () => {
    return (
        <div className = {styles.footerContainer}>
            <div className = {styles.profileImage}>
                <img src="https://github.com/darkandie.png" alt=""/>
            </div>
            <div className = {styles.contacts}>
                <h1>Desenvolvido por Carlos oliveira</h1>
                <h2>Redes sociais e contatos</h2>
                <a href="https://www.linkedin.com/in/carlos-oliveira-5745851b7" target="_blank">Linkedin</a>
                <a href="https://github.com/darkandie" target="_blank">Github</a>
                <a>Whatsapp : (91) 9 8221-4496</a>
            </div>
        </div>
    )
}

export default Footer;