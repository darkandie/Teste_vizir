import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ComponentProvider from './contexts/ComponentContext'


ReactDOM.render(
    <ComponentProvider>
        <App />
    </ComponentProvider>,
   document.getElementById('root')
);

