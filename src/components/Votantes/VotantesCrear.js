import React, { Component } from 'react'
import axios from 'axios';

//import ReactDOM from 'react-dom';
//import {Link}from 'react-router-dom';

export default class VotantesCrear extends Component {
    state = {
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

    CrearVotante= async()=>{  
        let nuevorol ={
        cedula:this.state.cedula,
        nombre:this.state.nombre,
        apellido:this.state.apellido,
        telefono:this.state.telefono,
        correo:this.state.correo,
        direccion:this.state.direccion,
        id_encargado:this.token().id,
    
        }
        console.log(nuevorol);
        //console.log(this.state.tipo)  
        await axios.post('http://localhost:4000/votantes/crear',nuevorol)
            //dejar en blanco el formulario
           
        
    }
    VerificarCedula= async()=>{ 
        let cedula ={
            cedula:this.state.cedula
        }
        const verificedula=await axios.post('http://localhost:4000/votantes/verificarcedula',cedula)
       // console.log(verificedula.data);
        //this.setState({verificacedula: verificedula.data});
       
        if(verificedula.data.verificar){
            this.setState({verificacedula: true});
            console.log(this.state.verificacedula)
        }else{
            this.setState({verificacedula: false});
            console.log(this.state.verificacedula)
            this.CrearVotante();
                
            this.setState({cedula:''})
            this.setState({nombre:''})
            this.setState({apellido:''})
            this.setState({telefono:''})
            this.setState({direccion:''})
            this.setState({correo:''})
            this.setState({tipo:''})
            this.setState({departamento:''})
            this.setState({municipio:''})
            this.setState({comuna:''})
            this.setState({contrasena:''})
            this.setState({ValGuardado: true});
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
          
        this.mostrardepartamentos();
        this.unmunicipio();
      // console.log(res);
       // console.log(this.state.divipoldepartamento);
        //console.log(this.state.divipolmunicipio[0]);
      //  console.log("paso por aqui");
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
                <p>Su rol ah sido guardado correctamente</p>
               
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
        //this.CrearVotante();
        console.log("click")
        if(this.state.cedula==='' ){          
            this.renderingreso();
        }else if(this.state.nombre===''){
            this.renderingreso();
        }else if(this.state.apellido===''){
            this.renderingreso();
        }else{
            this.VerificarCedula()
            //this.CrearVotante();

               
            
           
                
          

            
            //window.location.href="/roles";
        }
        
       
    }
    onSubmitdepartamento = async e => {  
        e.preventDefault();
       // estado=this.state.departamento,
        console.log("entro al depa")
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
          
            <div className="container">
           
            
          <div className="card card-body">
          <p>Los campos con * son obligatorios</p>
          {this.renderingreso()}
              <h3>CREAR VOTANTE</h3>
             
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
                    
                    <button type="submit" className="btn btn-default">Crear</button>
                 
                    </div>
                </div>

            </form>
          </div>  
          </div>
    
        )
    }
    
}

  //ReactDOM.render(<p>Hello</p>, document.getElementById('roop'));