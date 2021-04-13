import React, { useContext} from 'react';
import { ComponentContext } from '../contexts/ComponentContext';

import styles from '../styles/components/Options.module.css'


const Options = () => {
    
    const { price, setPrice } = useContext(ComponentContext);

    function Plan30() {
        console.log(price)
        setPrice(30)
    }

    function Plan60 () {
        console.log(price)
        setPrice(60)
    }

    function Plan120 () {
        console.log(price)
        setPrice(120)
    }

    return (
    <div>
        <div className = {styles.container}>
            <h1>Conheça nossos planos</h1>
                <div className = {styles.card}>
                    <div className = {styles.box}>
                        <div className = {styles.content}>
                            <h2>30</h2>
                            <h3>Fale Mais</h3>
                            <p> Assinando o plano FALE MAIS 30, você fala os primeiros
                                30 minutos do seu dia completamente de graça e paga somente 
                                pelos minutos que excederem esse limite por dia!
                                Use o nosso simulador abaixo e escolha seu plano e quantos minutos 
                                deseja falar e clique em simular e se surpreenda com o tamanho da sua economia.
                            </p>
                            <button onClick={Plan30}>
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {styles.box}>
                        <div className = {styles.content}>
                            <h2>60</h2>
                            <h3>Fale Mais</h3>
                            <p> Assinando o plano FALE MAIS 60, você fala os primeiros
                                60 minutos do seu dia completamente de graça e paga somente 
                                pelos minutos que excederem esse limite por dia! 
                                Use o nosso simulador abaixo e escolha seu plano e quantos minutos 
                                deseja falar e clique em simular e se surpreenda com o tamanho da sua economia.
                            </p>
                            <button onClick={Plan60}>
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className =  {styles.box}>
                        <div className = {styles.content}>
                            <h2>120</h2>
                            <h3>Fale Mais</h3>
                            <p> Assinando o plano FALE MAIS 120, você fala os primeiros
                                120 minutos do seu dia completamente de graça e paga somente 
                                pelos minutos que excederem esse limite por dia! 
                                Use o nosso simulador abaixo e escolha seu plano e quantos minutos 
                                deseja falar e clique em simular e se surpreenda com o tamanho da sua economia.
                            </p>
                            <button onClick={Plan120}>
                                SAIBA MAIS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Options;