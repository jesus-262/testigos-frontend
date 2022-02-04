import React, { Component } from 'react';
import axios from 'axios';
import {Link}from 'react-router-dom';

export default class Roles extends Component {
state={
usuario:[],
navegacion:[],
cedula:'',
nombre:'',
tipo:'',
departamento:'',
municipio:'',
comuna:'',
divipoldepartamento:[],
divipolmunicipio:[],
consultanombre:false,
consultacedula:false


//valguardarmuni:false
}
rendernavegacion= () => {
 
var paginacion=[];

//primeras paginas
if(this.state.navegacion===''){
console.log("probar");
}
  if(this.state.navegacion!==''){
    //console.log(this.state.navegacion);

    if(this.state.navegacion.page===1){
     
      paginacion.push( <div className="page-items disabled" key= {200}><button className="btn btn-secondary" type="onSubmit" name="page" >Primera pagina</button></div>)
    }else{
      
      paginacion.push( <div className="page-items" key= {201}><button className="btn btn-secondary" type="onSubmit" name="page" value="1" onClick={()=>this.navegacionChange(1)}>Primera pagina</button></div>)
    }
    



   
   
//paginas

var i;
if(this.state.navegacion.page>5){
  i=this.state.navegacion.page-4;
 
 
 
}else{
  i=1;
}

//paginas

//var i=Number(this.state.navegacion.page) > 5 ? Number(this.state.navegacion.page)-4:1;

if(this.state.navegacion.page!==1){
  paginacion.push(<button className="btn btn-secondary glyphicon glyphicon glyphicon-chevron-left" type="onSubmit" name="page" key= {110}  onClick={()=>this.navegacionChange(this.state.navegacion.page-1)}>  </button>)
}


for(;i<=Number(this.state.navegacion.page)+4 && i<=this.state.navegacion.pages;i++){
  //var t=i;
  /*
if(i===this.state.navegacion.page){

//  var x = document.createElement("div");

//x.innerHTML = '<button className="btn btn-secondary" type="onSubmit" name="page"  onClick={()=>this.navegacionChange(i)} >{i}</button>';
  //var x = document.getElementsByTagName(<button className="btn btn-secondary" type="onSubmit" name="page"  onClick={()=>this.navegacionChange(i)} >{i}</button>);
 var element = <div className="page-items" > <button className="btn btn-secondary" type="onSubmit" name="page"  onClick={()=>this.navegacionChange(i)} >{i}</button></div>;
  //ReactDOM.render(element, document.getElementById('root'));
  
 // paginacion.push(element)

}else{
 //console.log(i)
 
 // paginacion.push( <button className="btn btn-secondary" type="onSubmit" name="page"  onClick={()=>this.navegacionChange(i)} >{i}</button>)
}
*/
 //paginacion.push(<button className="btn btn-secondary" type="onSubmit" name="page" onClick={()=>this.navegacionChange(this.state.navegacion.page+1)} >>></button>)

}
if(this.state.navegacion.page<this.state.navegacion.pages){
  paginacion.push(<button className="btn btn-secondary glyphicon glyphicon-chevron-right" type="onSubmit" name="page" key= {111} onClick={()=>this.navegacionChange(this.state.navegacion.page+1)}> </button>)
}
//ultimas paginas
if(this.state.navegacion.page===this.state.navegacion.pages){

  paginacion.push( <div className="pages-items disabled" key= {100}><button className="btn btn-secondary" type="onSubmit" name="page"  >Ultima pagina</button></div>)
}else{
 
  paginacion.push( <div className="pages-items" key= {101}><button className="btn btn-secondary" type="onSubmit" name="page" onClick={()=>this.navegacionChange(this.state.navegacion.pages)}>Ultima pagina</button></div>)
}

  }

  for(i=1;i<=(this.state.navegacion.page)+4 ;i++){

    //console.log(i);
    }
  //console.log(paginacion)
  
  return paginacion;

}
navegacionChange= async (e) => {  
  
  console.log("pagina ="+e)
  console.log(e)
  console.log("--------")
  this.state.navegacion.page=e;
  //this.setState({usuario: res.data.usuario});
  var params = {  page: e, 
    departamento:this.state.departamento,
    tipo:this.state.tipo,
    municipio:this.state.municipio,
    comuna:this.state.comuna 
    }
    //console.log(this.state.navegacion);
  
    const tableres =await axios.post(enviroments.backendUrl + '/roles', params);
    this.setState({usuario: tableres.data.usuario}); 
   
}
//filtro departamentos
mostrardepartamentos=async()=>{

  const res = await axios.get(enviroments.backendUrl + '/divipol/departamento');
  this.setState({divipoldepartamento: res.data});
 
}



unmunicipio=async () =>{

  const departamento="valle";

  const res = await axios.get(enviroments.backendUrl + '/divipol/unmunicipio',departamento,departamento,departamento);
  
  this.setState({divipolmunicipio: res.data});
 

}

borrar=async(id)=>{
  console.log("borro")
  await axios.delete(enviroments.backendUrl + '/roles/'+id);
 
  this.refrescarusuario();
}

refrescarusuario=async()=>{

  const res = await axios.get(enviroments.backendUrl + '/roles');
  //console.log(res.data.usuario)
  this.setState({navegacion: res.data.navegacion});
  this.setState({usuario: res.data.usuario});
 
  
  
 // console.log("this.state.paginacion")
 //console.log("this.state.navegacion")
  //console.log(this.state.navegacion)
}

  async componentDidMount(){
    this.refrescarusuario();
    this.mostrardepartamentos();
    this.unmunicipio();
    //this.rendernavegacion();
   //console.log("entro aqui")
   
    //console.log(res);
    //console.log(this.state.users);
 
  }

  departamentoChange= async (e) => {  
    this.setState({departamento: e.target.value}); 
    this.setState({municipio: ''}); 
     var params = {  departamento: e.target.value, 
      municipio:null,
      tipo:this.state.tipo,
      comuna:this.state.comuna 
      }
    const res = await axios.post(enviroments.backendUrl + '/divipol/unmunicipio', params);
    this.setState({divipolmunicipio: res.data});
    this.setState({valguardarmuni:true});
    //filtro de la tabla
   const tableres =await axios.post(enviroments.backendUrl + '/roles', params);
    this.setState({usuario: tableres.data.usuario}); 
    this.setState({navegacion: tableres.data.navegacion});
  }

  municipioChange= async (e) => {  
    this.setState({municipio: e.target.value}); 
   
    var params = {  municipio: e.target.value, 
      departamento:this.state.departamento,
      tipo:this.state.tipo,
      comuna:this.state.comuna 
      }
    
      const tableres =await axios.post(enviroments.backendUrl + '/roles', params);
      this.setState({usuario: tableres.data.usuario}); 
      this.setState({navegacion: tableres.data.navegacion});
  
  }
  comunaChange= async (e) => {  
    this.setState({comuna: e.target.value}); 
   
    var params = {  comuna: e.target.value, 
      departamento:this.state.departamento,
      tipo:this.state.tipo,
      municipio:this.state.municipio 
      }
    
      const tableres =await axios.post(enviroments.backendUrl + '/roles', params);
      this.setState({usuario: tableres.data.usuario}); 
      this.setState({navegacion: tableres.data.navegacion});
  }
  tipoChange= async (e) => {  
    this.setState({tipo: e.target.value}); 
   
    var params = {  tipo: e.target.value, 
      departamento:this.state.departamento,
      comuna:this.state.comuna,
      municipio:this.state.municipio 
      }
    
      const tableres =await axios.post(enviroments.backendUrl + '/roles', params);
      this.setState({usuario: tableres.data.usuario}); 
      this.setState({navegacion: tableres.data.navegacion});
      console.log("colocando nueva navegacion")
      console.log(this.state.navegacion)
  }

    onSubmit = async e => {  
    e.preventDefault();
  
 
  }
  cedulaChange= async (e) => {  
   // this.setState({tipo: e.target.value});
  
  this.setState({cedula: e.target.value}); 
  var params = {  cedula: e.target.value }
  const tableres =await axios.post(enviroments.backendUrl + '/roles/consultacedula',params);
  console.log(tableres)
  this.setState({usuario: tableres.data.usuario}); 
  
  this.setState({navegacion: tableres.data.navegacion}); 
  console.log(this.state.navegacion)
  }
  rendermunicipio= () => {
            
    if(this.state.valguardarmuni===true){
        
        
      return this.state.divipolmunicipio.map(divipol => 
      <option key={divipol.municipio}>{divipol.municipio}</option>
      )
  
    }

  }
  nombreChange= async (e) => {  
    // this.setState({tipo: e.target.value});
  console.log("cambionombre")
   this.setState({nombre: e.target.value}); 
   var params = {  nombre: e.target.value }
   console.log(this.state.nombre)
   const tableres =await axios.post(enviroments.backendUrl + '/roles/consultanombre',params);
   console.log(tableres)
   this.setState({usuario: tableres.data.usuario}); 
   
   this.setState({navegacion: tableres.data.navegacion}); 
   
   }
   rendermunicipio= () => {
             
     if(this.state.valguardarmuni===true){
         
         
       return this.state.divipolmunicipio.map(divipol => 
       <option key={divipol.municipio}>{divipol.municipio}</option>
       )
   
     }
 
   }
  consultacedulaChange = async (e) => {  
    this.setState({consultacedula: !this.state.consultacedula}); 
    this.setState({nombre: ''}); 
    this.setState({cedula: ''}); 
    //this.cedulaChange();
    if(this.state.consultanombre){
      this.setState({consultanombre: !this.state.consultanombre}); 
    }
  }
  consultanombreChange = async (e) => { 
    this.setState({consultanombre: !this.state.consultanombre});
    this.setState({nombre: ''}); 
    this.setState({cedula: ''}); 
    //this.cedulaChange();
    if(this.state.consultacedula){
      this.setState({consultacedula: !this.state.consultacedula}); 
    }
  } 
  
  renderconsultacedula= () => {
    if(this.state.consultacedula){
     return <input type="number" name="cedula" value={this.state.cedula} onChange={this.cedulaChange} className="form-control" 
     placeholder="Digite una cedula"></input>          
    }
  }
  renderconsultanombre= () => {
    if(this.state.consultanombre){
     return <input type="text" value={this.state.nombre} onChange={this.nombreChange} className="form-control" 
     placeholder="Digite un nombre"></input>          
    }
  }
  
  render() {
    
        return (

         
         
           
            <div className="container-fluid">
                  
                <div className="d-flex justify-content-center">
                  <h1  className="p-5">ROLES</h1>
                </div>
                <form className="form-horizontal"  onSubmit={this.onSubmit}> 
                
             <div className="align-self-center ">
                   <Link className="btn btn-primary col-md-20 p-2" to="/roles/crear">CREAR ROL</Link>
                   
                   <button className="btn btn-primary col-md-20 p-2 m-2" value="" type="onSubmit" name="cedula" onClick={()=>this.consultacedulaChange()} >CEDULA</button>
                   <button className="btn btn-primary col-md-20 p-2" value="" type="onSubmit" name="nombre" onClick={()=>this.consultanombreChange()} >NOMBRE</button>
                   {this.renderconsultacedula()}
                   {this.renderconsultanombre()}
                 
              </div>
                
             
           

          
               
            <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Cedula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Correo</th>
                <th scope="col">Contraseña</th>
                <th scope="col">
                <select className="browser-default custom-select"  type="onSubmit" name="tipo" value={this.state.tipo} onChange={this.tipoChange}>
                    <option value="">SELECCIONAR</option>
                    <option>ADMINISTRADOR</option>
                    <option>GESTOR</option>
                    <option>FUNCIONARIO</option>
                    <option>LIDER ESTRUCTURA</option>
                    <option>LIDER INDEPENDIENTE</option>
                </select>
                </th>
                <th scope="col">
                <select className="browser-default custom-select"  type="onSubmit" name="departamento" value={this.state.departamento} onChange={this.departamentoChange}>
                        <option value="">DEPARTAMENTO</option>
                        
                        {
                         this.state.divipoldepartamento.map(divipol => 
                         <option key={divipol.departamento}>{divipol.departamento}</option>
                         )
                         }
                    </select>
                </th>
                <th scope="col">
                <select className="browser-default custom-select"  type="onSubmit" name="municipio"  value={this.state.municipio} onChange={this.municipioChange}>
                        <option value="">MUNICIPIO</option>
                        {this.rendermunicipio()}
                    </select>
                </th>
              
                <th scope="col">
              
                <select className="browser-default custom-select" type="onSubmit" value={this.state.comuna} onChange={this.comunaChange} 
                           >
                  <option value="">Comuna</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
             
                </th>
                <th scope="col"></th>
                <th scope="col"></th>
              
               
              </tr>
            </thead>
            
            <tbody>
              
              {
                this.state.usuario.map(usuario => 
                <tr key={usuario.id}>
                <td >{usuario.cedula}</td>
                <td >{usuario.nombre}</td>
                <td >{usuario.apellido}</td>
                <td >{usuario.telefono}</td>
                <td >{usuario.direccion}</td>
                <td >{usuario.correo}</td>
                <td >{usuario.contrasena}</td>
                <td >{usuario.tipo}</td>
                <td >{usuario.departamento}</td>
                <td >{usuario.municipio}</td>
                <td >{usuario.comuna}</td>
                <td><Link  to={"/roles/edictar/"+usuario.id} className="btn btn-warning glyphicon glyphicon-wrench" ></Link></td>
                <td><Link  to="/roles" className="btn btn-danger glyphicon glyphicon-trash" onClick={()=>this.borrar(usuario.id)}></Link></td>

                </tr>             
                )
              }
              
             
             
               
             
             
             
            </tbody>
          </table>
         
          <div className="d-flex justify-content-center">
          {this.rendernavegacion()}
    
          </div>
         
          </form>
          
         
          </div>
          
        )
      
    }
}

