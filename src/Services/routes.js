import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Main from '../Pages/Main/main'
import Login from '../Pages/Login/login'
import Cadastro from '../Pages/Cadastro/cadastro'
import Dashboard from '../Pages/Dashboard/dashboard'
import Itens from '../Pages/Itens/App'
import Edit from '../Pages/Itens/Edit'
import Create from '../Pages/Itens/Create'
import Show from '../Pages/Itens/Show'
import Monstros from  '../Pages/Monstros/App'
import CreateMonster from  '../Pages/Monstros/Create'
import EditMonster from  '../Pages/Monstros/Edit'
import ShowMonster from  '../Pages/Monstros/Show'

const Routes = () =>{

    return(
        <Router>
        <div>
        <Route exact path="/" component = {Main} />
        <Route path = "/login" component = {Login}/>
        <Route path = '/cadastro' component = {Cadastro}/>
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path ='/itens' component = {Itens} />
        <Route path ='/itens/edit/:id' component = {Edit} />
        <Route path ='/itens/create' component = {Create} />
        <Route path ='/itens/show/:id' component = {Show} />
        <Route path ='/monstros' component = {Monstros} />
        <Route path ='/monstros/edit/:id' component = {EditMonster} />
        <Route path ='/monstros/create' component = {CreateMonster} />
        <Route path ='/monstros/show/:id' component = {ShowMonster} />
        </div>
        </Router>
    );
}


export default Routes;