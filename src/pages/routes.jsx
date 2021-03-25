
import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home'
import Cadastro from './Cadastro'
import Options from './Options'

export default function mainRoutes () {
    return (
        <Switch>
            <Route exact path="/" > <Home /> </Route>
            <Route path="/cadastro"> <Cadastro /> </Route>
            <Route path="/opcoes"> <Options /> </Route>
        </Switch>
    )
}
