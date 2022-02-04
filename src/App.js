import React from 'react';
import Header from './components/Header';
//import {Link}from 'react-router-dom';
//instalar bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
import  "../node_modules/jquery/dist/jquery";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';


//componentes
//Roles
//import Roles from './components/Roles/Roles';
import RolesCrear from './components/Roles/RolesCrear';
import RolesEdictar from './components/Roles/RolesEdictar';
//session
import Login from './components/session/session';

//votantes
import Votantes from './components/Votantes/Votantes';
import VotantesCrear from './components/Votantes/VotantesCrear';
import VotantesEdictar from './components/Votantes/VotantesEdictar';

import VerListadoEdictar from './components/listado/VerListadoEdictar'

//listado
import ListadoAdmin from './components/listado/Listadoadmin';
import Listado from './components/listado/Listado';
import ListadoGestor from './components/listado/ListadoGestor';
import VerListado from './components/listado/VerListado';

import Escritinio from './components/Escrutinio';


//graficas
import GraficaIndividual from './components/Grafica/GraficaIndividual';
import GraficaGeneral from './components/Grafica/GraficaGeneral';

import Testigos from './components/Testigos/Testigos';
import TestigosID from './components/Testigos/TestigosID';
import Votos from './components/Votos/Votos';
import VotosEdictar from './components/Votos/VotosEdictar';
/*
/*
const oooute=(props)=>{
  if(autenticacion){
    <Route {...props}/>
  }else{
    <Redirect to="/login" />
  }
}*/

function App() {
  const autenticacion=()=>{
    const token = JSON.parse(localStorage.getItem('user'));
    var validar;
    if(token){
      console.log("hay token")
      validar=true;
    }else{
      console.log("no hay token")
      validar=false;
    }
   
    //lol =true;
    //console.log(JSON.parse(localStorage.getItem('user')).tipo)
     return validar;
    
  }
  const token=()=>{
    const token = JSON.parse(localStorage.getItem('user'));
    
    return token;
  }
/*
  renderheader= () => {
    if(this.autenticacion()){

    }
  }*/
  
  return (
    
    
    <Router>
    

    {/*TESTIGOS ID*/}
    <Route exact path="/testigos/:id" render={() => (     
          <> <Header/> 
     <Route  path="/testigos/:id" exact component={TestigosID}/>   </>) 
            
   
        
      }/>
     <Route exact path="/login" render={() => (
        autenticacion() ? (
          <> <Header/> 
        <Route  path="/votos" exact component={Votos}/> </>
        ) : (
        <Route  path="/login" exact component={Login}/> 
        )
      )}/>
<Route exact path="/votos" render={() => (     
          autenticacion() ? (
            
            token().tipo=="ADMINISTRADOR" ? (<> <Header/>  <Route  path="/votos" exact component={Votos}/>  </>) : (  <Redirect to="/testigos"/> )
           
          ) : (
            <Redirect to="/login"/>
          
          )
      )}/>

<Route exact path="/testigos" render={() => (     
          autenticacion() ? (
            token().tipo=="TESTIGOS" ? ( <> <Header/> <Route  path="/testigos" exact component={Testigos}/></> ) : (  <Redirect to="/votos"/> )
           
          ) : (
            <Redirect to="/login"/>
          
          )
      )}/>
   
   <Route exact path="/votos/edictar/:id" render={() => (     
          autenticacion() ? (
            token().tipo=="ADMINISTRADOR" ? ( <> <Header/>  <Route  path="/votos/edictar/:id" exact component={VotosEdictar}/></> ) : (  <Redirect to="/testigos"/> )
           
          ) : (
            <Redirect to="/login"/>
          
          )
      )}/>
    


    
   
    
      
     
    
     
     
     
     
     
    
    </Router>
   
  );
}

export default App;
