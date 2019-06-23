import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../Pages/Main/main'
import Login from '../Pages/Login/login';
import Cadastro from '../Pages/Cadastro/cadastro'
import Livros from '../Pages/Livros/livros'
import Artigos from '../Pages/Artigos/artigos'
import Dashboard from '../Pages/Dashboard/dashboard'
const Routes = () =>{

    return(
        <Router>
        <div>
        <Route exact path="/" component={Main} />
        <Route path = "/login" component = {Login}/>
        <Route path = '/cadastro' component = {Cadastro}/>
        <Route path = '/livros' component = {Livros}/>
        <Route path = '/artigos' component = {Artigos}/>
        <Route path = '/dashboard' component = {Dashboard} />
        </div>
        </Router>
    );
}


export default Routes;