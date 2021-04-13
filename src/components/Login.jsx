
import React, { useState } from 'react';

import styles from '../styles/components/Login.module.css';

const Login2 = () => {

    const [isActive, setIsActive] = useState (false)

    function toggleForm() {
        if (isActive === false) {
            setIsActive(true)
        }
        else if (isActive === true){
            setIsActive(false)
        }
        console.log(isActive)
    }       
 
    return (
        <section>
           
            <div className= { styles.loginContainer}>
             {isActive ? (
                <div className= {`${styles.user} ${styles.SigninBox}`}>
                    <div className = { styles.imgBox}><img src={process.env.PUBLIC_URL + "/telefone.jpg"}/></div>
                        <div className = { styles.formBox}>
                            <form>
                                <h2>Log In</h2>
                                <input type="text" placeholder="Usuário"/>
                                <input type="password" placeholder="Senha"/>
                                <input type="submit" value="Entrar"/>
                                <p className = {styles.signUp}>Ainda não possui uma conta? <a href="#" onClick = {toggleForm}>Cadastre-se</a></p>
                            </form>
                        </div>
                    </div>
                    ) : (
                    <div className= {`${styles.user} ${styles.SignupBox}`}>
                        <div className = { styles.imgBox}><img src={process.env.PUBLIC_URL + "/telefone2.png"}/></div>
                            <div className = { styles.formBox}>
                                <form>
                                    <h2>Cadastre-se</h2>
                                    <input type="text" placeholder="Usuário"/>
                                    <input type="email" placeholder="E-mail"/>
                                    <input type="password" placeholder="Crie uma senha"/>
                                    <input type="password" placeholder="Confirmar senha"/>
                                    <input type="submit" value="Cadastrar"/>
                                    <p className = {styles.signUp}>Já possui uma conta? <a href="#" onClick = {toggleForm}>Entrar</a></p>
                                </form>
                            </div>
                        </div>
                        )}
                    </div>
            
        </section>
    )
}

export default Login2;