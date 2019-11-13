import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../Pages/Main/main";
import Login from "../Pages/Login/login";
import Cadastro from "../Pages/Cadastro/cadastro";
import Dashboard from "../Pages/Dashboard/dashboard";
import Itens from "../Pages/Itens/App";
import Edit from "../Pages/Itens/Edit";
import Create from "../Pages/Itens/Create";
import Show from "../Pages/Itens/Show";
import Monstros from "../Pages/Monstros/App";
import CreateMonster from "../Pages/Monstros/Create";
import EditMonster from "../Pages/Monstros/Edit";
import ShowMonster from "../Pages/Monstros/Show";
import Magias from "../Pages/Magias/App";
import CreateMagic from "../Pages/Magias/Create";
import EditMagic from "../Pages/Magias/Edit";
import ShowMagic from "../Pages/Magias/Show";
import Historias from "../Pages/Histórias/App";
import CreateHistory from '../Pages/Histórias/Create'
import ShowHistory from '../Pages/Histórias/Show'
import Comments from '../Pages/Histórias/Comments'
import Reset from '../Pages/Login/reset'

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/reset" component={Reset}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/itens" component={Itens} />
        <Route path="/itens/edit/:id" component={Edit} />
        <Route path="/itens/create" component={Create} />
        <Route path="/itens/show/:id" component={Show} />
        <Route path="/monstros" component={Monstros} />
        <Route path="/monstros/edit/:id" component={EditMonster} />
        <Route path="/monstros/create" component={CreateMonster} />
        <Route path="/monstros/show/:id" component={ShowMonster} />
        <Route path="/magias" component={Magias} />
        <Route path="/magias/edit/:id" component={EditMagic} />
        <Route path="/magias/create" component={CreateMagic} />
        <Route path="/magias/show/:id" component={ShowMagic} />
        <Route path="/historias" component={Historias} />
        <Route path="/historias/create" component={CreateHistory}/>
        <Route path="/historias/show/:id" component={ShowHistory}/>
        <Route path="/historias/comments/:id" component = {Comments}/>
      </div>
    </Router>
  );
};

export default Routes;
