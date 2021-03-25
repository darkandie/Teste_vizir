
import React from 'react';
import Home from './pages/Home';

import { BrowserRouter as Router } from "react-router-dom";

import Routes from './pages/routes'

function App() {
  return (
    <Router>
      <Routes>
        <Home></Home>
      </Routes>
    </Router>
  );
}

export default App;
