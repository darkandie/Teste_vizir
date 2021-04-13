
import React from 'react';

import styles from '../styles/components/Header.module.css'

const Header =() => {
    return (
     <div>
        <div className = {styles.imageContainer}>
            <img src="banner-principal.png" alt="Banner principal" width = "100%"/>
        
             <img src="features.png" alt="Banner secundário"  width="100%"/>
        </div> 
        <div className = {styles.linkContainer}>
             <img src="Component.png" alt="Banner titulos" width = "100%"/>
        </div>
    </div>
    )
}

export default Header;