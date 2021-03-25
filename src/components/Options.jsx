import React from 'react';

import styles from '../styles/components/Options.module.css'

const Options = () => {
    return (
    <div>
         <div className = {styles.container}>
             <h1>Conheça nossos planos</h1>
                <div className = {styles.card}>
                    <div className = {styles.box}>
                        <div className = {styles.content}>
                            <h2>30</h2>
                            <h3>Fale Mais</h3>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, 
                                consequuntur tempora ut adipisci rem harum ratione voluptatibus,
                                a aliquam. Minus, voluptatibus consequuntur repudiandae aperiam 
                            </p>
                            <a href="#">
                                SAIBA MAIS
                            </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {styles.box}>
                        <div className = {styles.content}>
                            <h2>60</h2>
                            <h3>Fale Mais</h3>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, 
                                consequuntur tempora ut adipisci rem harum ratione voluptatibus,
                                a aliquam. Minus, voluptatibus consequuntur repudiandae aperiam 
                            </p>
                            <a href="#">
                                SAIBA MAIS
                            </a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className =  {styles.box}>
                        <div className = {styles.content}>
                            <h2>120</h2>
                            <h3>Fale Mais</h3>
                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, 
                                consequuntur tempora ut adipisci rem harum ratione voluptatibus,
                                a aliquam. Minus, voluptatibus consequuntur repudiandae aperiam 
                            </p>
                            <a href="#">
                                SAIBA MAIS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Options;