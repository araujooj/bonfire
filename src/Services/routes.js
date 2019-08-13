import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../Pages/Main/main'
import Login from '../Pages/Login/login'
import Cadastro from '../Pages/Cadastro/cadastro'
import Personagem from '../Pages/Personagem/personagem'
import Sobre from '../Pages/Sobre/sobre'
import Dashboard from '../Pages/Dashboard/dashboard'
import Artigos from '../Pages/Artigos/artigos'
import Criacoes from '../Pages/Criacoes/criacoes'

const Routes = () =>{

    return(
        <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route path = "/login" component = {Login}/>
        <Route path = '/cadastro' component = {Cadastro}/>
        <Route path = '/personagem' component = {Personagem}/>
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path = '/artigos' component = {Artigos} />
        <Route path = '/criacoes' component = {Criacoes}/>
        <Route path = '/sobre' component = {Sobre}/>
        </div>
        </Router>
    );
}


export default Routes;