import React, { Component } from 'react'
import {Link}from 'react-router-dom';
export default class Header extends Component {
  Salir=async()=>{
    localStorage.removeItem('user');
    
   
  }
  autenticacion=()=>{
    const token = JSON.parse(localStorage.getItem('user'));
    var validar;
    if(token){
      console.log("hay token")
      validar=true;
    }else{
      console.log("no hay token")
      validar=false;
    }
   
    
     return validar;
    
  }
  token=()=>{
    const token = JSON.parse(localStorage.getItem('user'));
    
      return token;
  
   
  }
  renderescritinio=()=>{
    if(this.autenticacion()){
    if(this.token().tipo=="ADMINISTRADOR" ){
      return  <li className="nav-item ">
      <Link className="nav-link" to="/escrutinio">Escrutinio</Link>

      </li>
    }}
  }
  rendervotantes=()=>{
    if(this.token()){
 
      if(this.token().tipo=="ADMINISTRADOR" ){
        return  <li className="nav-item ">
        <Link className="nav-link" to="/votantes">Votantes</Link>
  
        </li>
      }
    }
  }
  renderroles=()=>{
    if(this.autenticacion()){
    if(this.token().tipo=="ADMINISTRADOR" || this.token().tipo=="GESTOR" ){
      return   <li className="nav-item">
      <Link className="nav-link" to="/roles">Roles</Link>
        
      </li>
    }}
  }
  
  renderlistado=()=>{
    if(this.token().tipo=="ADMINISTRADOR" ){
      return   <li className="nav-item">
      <Link className="nav-link" to="/listadoadmin">Listado</Link>
        
      </li>
    }else if(this.token().tipo=="LIDER ESTRUCTURA" || this.token().tipo=="FUNCIONARIO" || this.token().tipo=="LIDER INDEPENDIENTE"){
      return   <li className="nav-item">
      <Link className="nav-link" to="/listado">Listado</Link>
        
      </li>
    }else{
      return   <li className="nav-item">
      <Link className="nav-link" to="/Listadogestor">Listado</Link>
        
      </li> 
    }
  }
 
   rendervotos=()=>{
    if(this.token()){
    if(this.token().tipo=="ADMINISTRADOR" ){
      return <li className="nav-item">
      <Link className="nav-link" to="/votos">Votos</Link>
      </li>
      
    }
  }
 

  
    /*
    var url_actual = window.location;
    if(url_actual!="http://localhost:3000/votos" ||url_actual!="http://localhost:3000/votos/edictar/:id"  ){ 
     
      }
       
     */

   
   
   }
   rendersalir=()=>{
    if(this.token()){
    if(this.token().tipo=="ADMINISTRADOR" || this.token().tipo=="TESTIGOS"){
      return <li className="nav-item"><Link  to="/login" className="nav-link" onClick={()=>this.Salir()}>Salir</Link></li>
    }
  }
}
   rendertestigos=()=>{
     if(this.token()){
    if(this.token().tipo=="TESTIGOS" ){
      return <li className="nav-item">
      <Link className="nav-link" to="/testigos">Testigos</Link>
      
    </li>
    }
}
   }
  
  renderbienvenido=()=>{
    if(this.token()){
    if(this.autenticacion()){
      return <>
      <li className="nav-item mx-auto">
        <a className="navbar-brand" href="/">Bienvenido {this.token().tipo.toLowerCase()} {this.token().nombre} {this.token().apellido}</a>
        </li></>
    }
  }
  }
    render() {
      
        return (
         
          
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
                    <div className="d-flex justify-content-start">
                  
                     
                    <div className=" d-flex justify-content-end" >
                    <ul className="navbar-nav d-flex ">
                    {this.renderbienvenido()}
                    </ul>
                    </div>
                    </div>
                      
                    <div className=" d-flex justify-content-end" >
                    <ul className="navbar-nav d-flex ">
                      <li className="nav-item ">
                      
                      </li>
                    
                        
                      {this.rendertestigos()}
                      {this.rendervotos()}
                      {this.rendersalir()}
                      
                      <li className="nav-item">
    
  
     
       
      </li>
                     
                      
                    
                    </ul>
                  </div>
         
         
         
       
         </nav>
        )
    }
}

