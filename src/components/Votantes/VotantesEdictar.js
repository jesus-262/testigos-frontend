import React, { Component } from 'react'
import axios from 'axios';


//import ReactDOM from 'react-dom';
//import {Link}from 'react-router-dom';

export default class VotantesEdictar extends Component {
 
    state = {
        usuario:[],
        cedula:'',
        nombre:'',
        apellido:'',
        telefono:'',
        correo:'',
        direccion:'',
        tipo:'',
        departamento:'',
        municipio:'',
        comuna:'',
        contrasena:'',
        ValGuardado:false,
        divipoldepartamento:[],
        divipolmunicipio:[],
        valguardarmuni:false,
        verificacedula:null
    };
    token=()=>{
        const token = JSON.parse(localStorage.getItem('user'));
        
          return token;
      
       
      }
    cedulaChange= e => {       
        this.setState({cedula: e.target.value});
       // console.log(this.state);
       console.log(this.state.cedula)
    }

    nombreChange= e => {  this.setState({nombre: e.target.value});  }
    apellidoChange= e => {  this.setState({apellido: e.target.value});  }
    telefonoChange= e => {  this.setState({telefono: e.target.value});  }
    direccionChange= e => {  this.setState({direccion: e.target.value});  }
    correoChange= e => {  this.setState({correo: e.target.value});  }
    tipoChange= e => {  this.setState({tipo: e.target.value});  }
    departamentoChange= async (e) => {  
        this.setState({departamento: e.target.value}); 
        
        var params = {
            departamento: e.target.value,             
          }
        const res = await axios.post('http://localhost:4000/divipol/unmunicipio', params);
        
        this.setState({divipolmunicipio: res.data});
        this.setState({valguardarmuni:true});
               
      //  console.log("this.setState.valguardarmuni");
     //   console.log(this.state.valguardarmuni);
     //   console.log(this.state.divipolmunicipio);
       // console.log(res);
     }
    municipioChange= e => {  this.setState({municipio: e.target.value});  }
    comunaChange= e => {  this.setState({comuna: e.target.value}); console.log(this.state.comuna)}
    contrasenaChange= e => {  this.setState({contrasena: e.target.value});  }
    verificarurl= async()=>{  
        let nuevorol ={
        id:this.props.match.params.id,
        cedula:this.state.cedula,
        nombre:this.state.nombre,
        apellido:this.state.apellido,
        telefono:this.state.telefono,
        correo:this.state.correo,
        direccion:this.state.direccion,
        tipo:this.state.tipo,
        departamento:this.state.departamento,
        municipio:this.state.municipio,
        comuna:this.state.comuna,
        contrasena:this.state.contrasena,
        verificartipo:this.token().tipo,
        verificarid:this.token().id
        }
        
        const verificarurl=await axios.post('http://localhost:4000/roles/verificaedictar/',nuevorol)
        console.log(verificarurl.data);
        if(verificarurl.data==false){
           window.location.href = "http://localhost:3000/roles";
        }
       
        //console.log(this.state.tipo)  
       // 
            //dejar en blanco el formulario
           
        
    }
    edictarRol= async()=>{  
        let nuevorol ={
        id:this.props.match.params.id,
        cedula:this.state.cedula,
        nombre:this.state.nombre,
        apellido:this.state.apellido,
        telefono:this.state.telefono,
        correo:this.state.correo,
        direccion:this.state.direccion,
        tipo:this.state.tipo,
        departamento:this.state.departamento,
        municipio:this.state.municipio,
        comuna:this.state.comuna,
       // contrasena:this.state.contrasena,
        verificartipo:this.token().tipo,
        verificarid:this.token().id
        }
        
        await axios.put('http://localhost:4000/votantes/edictar/'+nuevorol.id,nuevorol)
       /*
        const verificarurl=await axios.post('http://localhost:4000/roles/verificaedictar/',nuevorol)
        console.log(verificarurl.data);
        if(verificarurl.data==false){
           window.location.href = "http://localhost:3000/roles";
        }else{
           
        }
        */
        //console.log(this.state.tipo)  
       // await axios.put('http://localhost:4000/roles/edictar/'+nuevorol.id,nuevorol)
            //dejar en blanco el formulario
           
        
    }
    renderroles1= () => {
    
        if(this.token().tipo=="ADMINISTRADOR"){
        return <option>ADMINISTRADOR</option> 
        
        
      }
    
    }
    renderroles2= () => {
    
        if(this.token().tipo=="ADMINISTRADOR"){
        return <option>GESTOR</option>
        
      }
    
    }
    VerificarCedula= async()=>{ 
        let cedula ={
            cedula:this.state.cedula
        }
        const verificedula=await axios.post('http://localhost:4000/roles/verificarcedula',cedula)
      
        //no existe la cedula en la bd
       if(verificedula.data.verificar==false){
           console.log("entro")
           this.setState({verificacedula: false});
           //console.log(this.state.verificacedula)
           this.edictarRol();
               
       
           this.setState({ValGuardado: true});
       }else{
        if(this.state.usuario.id==verificedula.data.usuario[0].id ){
                //creelo
                this.setState({verificacedula: false});
               // console.log(this.state.verificacedula)
                this.edictarRol();
                    
            
                this.setState({ValGuardado: true});
        }else{
            this.setState({verificacedula: true});
            console.log(this.state.verificacedula)
        }
    }
        
        
    }

    mostrardepartamentos=async()=>{

        const res = await axios.get('http://localhost:4000/divipol/departamento');
        this.setState({divipoldepartamento: res.data});
        //console.log(res);
      }
      unmunicipio=async()=>{
        //console.log(this.setState.departamento)
        const departamento="valle";
        //const res = await axios.get('http://localhost:4000/divipol/unmunicipio',municipio);
        const res = await axios.get('http://localhost:4000/divipol/unmunicipio',departamento,departamento,departamento);
        
        this.setState({divipolmunicipio: res.data});

        //console.log("este es");
        
      }
      async componentDidMount(){
         // console.log(this.props.match.params.id)
        //this.verificarurl();
        this.usuarioedictar();
        //this.mostrardepartamentos();
       //this.unmunicipio();
        
      // console.log(res);
       // console.log(this.state.divipoldepartamento);
        //console.log(this.state.divipolmunicipio[0]);
      //  console.log("paso por aqui");
      }

      usuarioedictar=async()=>{
        var params = {  
            id:this.props.match.params.id ,
          
        }

        const res = await axios.post('http://localhost:4000/votantes/unrol',params);
        //console.log(res.data.usuario)
       // console.log(res.data[0])
        this.setState({usuario:res.data[0]});
        console.log(res.data[0])
        this.setState({valguardarmuni:true});
        this.setState({cedula: this.state.usuario.cedula});
        this.setState({nombre: this.state.usuario.nombre});
        this.setState({apellido: this.state.usuario.apellido});
        this.setState({telefono: this.state.usuario.telefono});
        this.setState({direccion: this.state.usuario.direccion});
        this.setState({correo: this.state.usuario.correo});
        this.setState({tipo: this.state.usuario.tipo});
        
        this.setState({departamento: this.state.usuario.departamento});
        
        this.setState({municipio: this.state.usuario.municipio});
        this.setState({comuna: this.state.usuario.comuna});
        this.setState({contrasena: this.state.usuario.contrasena});
      
        
     //  console.log(this.state.usuario);
        
        
       // console.log("this.state.paginacion")
       //console.log("this.state.navegacion")
        //console.log(this.state.navegacion)
      }
   

        renderingreso = () => {
            if(this.state.ValGuardado===true){
                

                return <div className="container-fluid">
                <div className="d-flex align-items-center align-self-center ">
                  

                <div className="renderingreso">
               
                <div className="alert alert-success" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="alert-heading">Guardado</h4>
                <p>Su rol ah sido edictado correctamente</p>
               
              </div>
              </div> 
              </div>
              </div>
               ;
            }
       
        }
        rendercedularepetida = () => {
            if(this.state.verificacedula===true){
                

                return <div className="container-fluid">
                <div className="d-flex align-items-center align-self-center ">
                  

                <div className="renderingreso">
               
                <div className="alert alert-danger" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="alert-heading">Error</h4>
                <p>Cedula ya registrada, intente con otra</p>
               
              </div>
              </div> 
              </div>
              </div>
               ;
            }
       
        }
        rendermunicipio= () => {
            
            if(this.state.valguardarmuni===true){
                
                
                    return this.state.divipolmunicipio.map(divipol => 
                    <option key={divipol.municipio}>{divipol.municipio}</option>
                    )
                
            }
        }
    onSubmit = async e => {  
        e.preventDefault();
        
        
        if(this.state.cedula==='' ){          
            this.renderingreso();
        }else if(this.state.nombre===''){
            this.renderingreso();
        }else if(this.state.apellido===''){
            this.renderingreso();
        }else if(this.state.tipo===''){
            this.renderingreso();
        }else if(this.state.departamento===''){
            this.renderingreso();
        }else if(this.state.municipio===''){
            this.renderingreso();
        }else if(this.state.comuna===''){
            this.renderingreso();
        }else if(this.state.contrasena===''){
            this.renderingreso();
        }else{
            this.VerificarCedula()
          
        }
        
       
    }
    onSubmitdepartamento = async e => {  
        e.preventDefault();
       // estado=this.state.departamento,
        console.log("entro al depa")
    }
   
    
      
      
    render() {
        return (
           
            <div className="container">
          
            
           
          <div className="card card-body">
          <p>Los campos con * son obligatorios</p>
          
              <h3>EDICTAR VOTANTE</h3>
            
            
              <form className="form-horizontal"  onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label  className="col-lg-2 control-label">Cedula</label>
                    
                    <div className="col-lg-9">
                
                    <input type="number"   value={this.state.cedula} onChange={this.cedulaChange} className="form-control"  
                            placeholder="Cedula"></input> 
                    </div>
                    <p>*</p>
                   
                </div>
                <div className="form-group">
                    <label  className="col-lg-2 control-label" >Nombre</label>
                    <div className="col-lg-9">
                
                    <input type="text" value={this.state.nombre} onChange={this.nombreChange} className="form-control" 
                            placeholder="Nombre"></input>
                    </div>
                    <p>*</p>
                </div>
                <div className="form-group">
                    <label  className="col-lg-2 control-label">Apellido</label>
                    <div className="col-lg-9">
                
                    <input type="text" value={this.state.apellido} onChange={this.apellidoChange} className="form-control" 
                            placeholder="Apellido"></input>
                    </div>
                    <p>*</p>
                </div>
                <div className="form-group">
                    <label  className="col-lg-2 control-label">Telefono</label>
                    <div className="col-lg-9">
                
                    <input type="number" value={this.state.telefono} onChange={this.telefonoChange} className="form-control" 
                            placeholder="Telefono" ></input>
                    </div>
                </div>
                <div className="form-group">
                    <label  className="col-lg-2 control-label">Direccion</label>
                    <div className="col-lg-9">
                
                    <input type="text" value={this.state.direccion} onChange={this.direccionChange} className="form-control" 
                            placeholder="Direccion"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label  className="col-lg-2 control-label">Correo</label>
                    <div className="col-lg-9">
                
                    <input type="text" value={this.state.correo} onChange={this.correoChange} className="form-control" 
                            placeholder="Correo"></input>
                    </div>
                </div>
                  
                     
                       
               
                
                <div className="form-group">
                    <div className="col-lg-offset-2 col-lg-10">
                    
                    <button type="submit" className="btn btn-default">Guardar</button>
                    {this.renderingreso()}
                    {this.rendercedularepetida()}
                   
                    </div>
                </div>

            </form>
          </div>  
          </div>
    
        )
    }
    
}

  //ReactDOM.render(<p>Hello</p>, document.getElementById('roop'));