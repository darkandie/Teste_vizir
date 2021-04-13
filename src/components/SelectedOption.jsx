
import React, { useState, useContext } from 'react';
import { ComponentContext } from '../contexts/ComponentContext'
import { Link } from "react-router-dom";

import styles from '../styles/components/Selected.module.css'


const Selected = () => {

    const { price, setPrice, isActive, openComponent } = useContext(ComponentContext);

    const [ priceMin, setPriceMin] = useState(0);
    const [ handleValue, setHandleValue] = useState(0);
    const [ minutesWithPlan, setMinutesWithPlan] = useState(0);

    const totalMinutes =  priceMin * handleValue;
    const minutesPlan = priceMin * price;
    const minutesExcess = totalMinutes - minutesPlan ;
    

    function calcValues () {
        if(minutesExcess < 1 || handleValue < price ){
            setMinutesWithPlan(0)
        } else {
        setMinutesWithPlan( (minutesExcess * priceMin * 10/100).toFixed(2) ) 
        
    }
    }

    function closeComponent () {
        setPrice(0)
    };

    openComponent();

    return(
    
        <div > 
            { isActive ? ( 
            <div className={styles.containerOption}>
                <div className={styles.cardOptions}>
                    <div className={styles.priceCard}>
                        <h1>{price}</h1>
                    </div>
                    <div className={styles.descriptionCard}>
                         <h2>{`Com o plano FALE MAIS ${price} você fala muito mais e paga somente os minutos excedentes`}</h2>
                        <div className={styles.optionButtons}> 
                             <p>Compare aqui seus gastos com e sem o nosso plano</p>

                        {/* Captura o valor da tarifa por DDD de origem e destino */}
                            <select  onChange={ e => {
                                const selectedValue = e.target.value;
                                setPriceMin(selectedValue)
                            }}
                            >
                                <option value={1.90}>De: São Paulo DDD (11) Para : São Paulo DDD (16) Por R$ 1.90/min</option>
                                <option value={2.90}>De: São Paulo DDD (16) Para : São Paulo DDD (11) Por R$ 2.90/min</option>
                                <option value={1.70}>De: São Paulo DDD (11) Para : São Paulo DDD (17) Por R$ 1.70/min</option>
                                <option value={2.70}>De: São Paulo DDD (17) Para : São Paulo DDD (11) Por R$ 2.70/min</option>
                                <option value={0.90}>De: São Paulo DDD (11) Para : São Paulo DDD (18) Por R$ 0.90/min</option>
                                <option value={1.90}>De: São Paulo DDD (11) Para : São Paulo DDD (16) Por R$ 1.90/min</option>
                            </select>

                        {/* Captura o valor do minutos inseridos pelo cliente e faz a simulação*/}
                            <div className= {styles.minutesInput}>
                                <input
                                value={handleValue} 
                                type="number" 
                                placeholder="Insira aqui os minutos." 
                                onChange = {e => {
                                    const getValue = e.target.value;
                                    setHandleValue(getValue)
                                }}
                                />
                                <button onClick={calcValues}>Simular</button>
                            </div>

                        {/* Mostra em tela o valor final do calculo */}

                            <div className={styles.Result}>
                                <div>
                                    <h3>{`Sem o nosso Plano: R$ ${(totalMinutes).toFixed(2)}`}</h3>
                                </div>
                                <div>
                                    <h3>{`Com o nosso Plano: R$ ${minutesWithPlan}`}</h3>
                                </div>
                            </div>

                            <Link to="/Cadastro"><button>Contratar este plano</button></Link>
                            <button onClick= {closeComponent}>Voltar</button>
                        </div>

                    </div>
                </div>
            </div>
            ) : (
            null )}
        </div>
    )
 
}

export default Selected;