
import React, { createContext, useState } from 'react';

export const ComponentContext = createContext({});

const ComponentProvider = ({children}) => {
    
    const [ price, setPrice ] = useState(0);
    const [ isActive, setIsActive ] = useState(false);

    function openComponent () {
        if(price !== 0) {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }

    return (<ComponentContext.Provider value={{ price ,isActive, setIsActive, setPrice, openComponent }}>
            {children}
        </ComponentContext.Provider>);
};

export default ComponentProvider;