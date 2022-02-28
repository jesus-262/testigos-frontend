import React, { Component } from 'react';
import axios from 'axios';
import { enviroments } from '../../env';
import {Link}from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Button}from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import 'jquery/dist/jquery.min.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import { json2xls } from "json2xls";
import { fs  } from "fs";
import { CSVLink } from "react-csv";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Votos extends Component {
  state = {
    csvsena:[],
    
    csvcamara:[],
    excelID:'',
    nombre: '',
    apellido: '',
    telefono: 0,
    tipo:'',
    departamento:'',
    municipio:'',
    zona:0,
    puesto:0,
    mesa:0,
    dato:'',
    estado:'',
    divipoldepartamento:[],
    divipolmunicipio:[],
    modal:false,
    opacity:1,
  
   
    mensaje:'',
    titulo:'',
    reclamos:[],
    navegacion:[],
   
  };
  rendernavegacion2= () => {
 
    var paginacion=[];
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {1} onClick={()=>this.navegacionChange(1)}> {1}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {2} onClick={()=>this.navegacionChange(2)}> {2}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {3} onClick={()=>this.navegacionChange(3)}> {3}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {4} onClick={()=>this.navegacionChange(4)}> {4}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {5} onClick={()=>this.navegacionChange(5)}> {5}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {6} onClick={()=>this.navegacionChange(6)}> {6}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {7} onClick={()=>this.navegacionChange(7)}> {7}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {8} onClick={()=>this.navegacionChange(8)}> {8}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {9} onClick={()=>this.navegacionChange(9)}> {9}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {10} onClick={()=>this.navegacionChange(10)}> {10}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {11} onClick={()=>this.navegacionChange(11)}> {11}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {12} onClick={()=>this.navegacionChange(12)}> {12}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {13} onClick={()=>this.navegacionChange(13)}> {13}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {14} onClick={()=>this.navegacionChange(14)}> {14}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {15} onClick={()=>this.navegacionChange(15)}> {15}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {16} onClick={()=>this.navegacionChange(16)}> {16}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {17} onClick={()=>this.navegacionChange(17)}> {17}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {18} onClick={()=>this.navegacionChange(18)}> {18}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {19} onClick={()=>this.navegacionChange(19)}> {19}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {20} onClick={()=>this.navegacionChange(20)}> {20}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {21} onClick={()=>this.navegacionChange(21)}> {21}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {22} onClick={()=>this.navegacionChange(22)}> {22}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {23} onClick={()=>this.navegacionChange(23)}> {23}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {24} onClick={()=>this.navegacionChange(24)}> {24}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {25} onClick={()=>this.navegacionChange(25)}> {25}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {26} onClick={()=>this.navegacionChange(26)}> {26}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {27} onClick={()=>this.navegacionChange(27)}> {27}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {28} onClick={()=>this.navegacionChange(28)}> {28}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {29} onClick={()=>this.navegacionChange(29)}> {29}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {30} onClick={()=>this.navegacionChange(30)}> {30}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {31} onClick={()=>this.navegacionChange(31)}> {31}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {32} onClick={()=>this.navegacionChange(32)}> {32}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {33} onClick={()=>this.navegacionChange(33)}> {33}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {34} onClick={()=>this.navegacionChange(34)}> {34}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {35} onClick={()=>this.navegacionChange(35)}> {35}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {36} onClick={()=>this.navegacionChange(36)}> {36}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {37} onClick={()=>this.navegacionChange(37)}> {37}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {38} onClick={()=>this.navegacionChange(38)}> {38}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {39} onClick={()=>this.navegacionChange(39)}> {39}</button>)
    paginacion.push(<button className="btn btn-secondary btn-lg" type="onSubmit" name="page" key= {40} onClick={()=>this.navegacionChange(40)}> {40}</button>)
    return paginacion;
  }
  rendernavegacion= () => {
 
    var paginacion=[];
    /*
    for(var i=1;i<=40;i++){
      console.log(i)
      var t=i;
      paginacion.push(<button className="btn btn-secondary " type="onSubmit" name="page" key= {i} onClick={()=>this.navegacionChange(3)}> {i}</button>)
    }*/
    
  
  


    if(this.state.navegacion===''){
   
    }
      if(this.state.navegacion!==''){
      

        if(this.state.navegacion.page===1){
         
          paginacion.push( <div className="page-items disabled" key= {200}><button className="btn btn-secondary" type="onSubmit" name="page" >Primera pagina</button></div>)
        }else{
          
          paginacion.push( <div className="page-items" key= {201}><button className="btn btn-secondary" type="onSubmit" name="page" value="1" onClick={()=>this.navegacionChange(1)}>Primera pagina</button></div>)

        }
        
       
    
    var i;
    if(this.state.navegacion.page>5){
      i=this.state.navegacion.page-4;
     
     
     
    }else{
      i=1;
    }
    
  
    
    if(this.state.navegacion.page!==1){
      paginacion.push(<button className="btn btn-secondary glyphicon glyphicon glyphicon-chevron-left" type="onSubmit" name="page" key= {110}  onClick={()=>this.navegacionChange(this.state.navegacion.page-1)}>  </button>)
    }
    
    
    for(;i<=Number(this.state.navegacion.page)+4 && i<=this.state.navegacion.pages;i++){
      
    }
    if(this.state.navegacion.page<this.state.navegacion.pages){
      paginacion.push(<button className="btn btn-secondary glyphicon glyphicon-chevron-right" type="onSubmit" name="page" key= {111} onClick={()=>this.navegacionChange(this.state.navegacion.page+1)}> </button>)
    }
 
    if(this.state.navegacion.page===this.state.navegacion.pages){
    
      paginacion.push( <div className="pages-items disabled" key= {100}><button className="btn btn-secondary" type="onSubmit" name="page"  >Ultima pagina</button></div>)
    }else{
     
      paginacion.push( <div className="pages-items" key= {101}><button className="btn btn-secondary" type="onSubmit" name="page" onClick={()=>this.navegacionChange(this.state.navegacion.pages)}>Ultima pagina</button></div>)
    }
    
      }
    
           
      return paginacion;
    
    }
    navegacionChange= async (e) => {  
      console.log("pagina")
      console.log(e);
      
      this.state.navegacion.page=e;
     
      var params = {  page: e, 
        nombre:this.state.nombre,
        telefono: this.state.telefono,
        tipo:this.state.tipo,
        departamento:this.state.departamento,
        municipio:this.state.municipio,
        zona:this.state.zona,
        puesto:this.state.puesto,
        mesa:this.state.mesa,
        estado:this.state.estado,
       
       
     
       
        }
              
          const res = await axios.post(enviroments.backendUrl + '/votos',params);
         
          this.setState({reclamos: res.data.reclamos}); 
         
         
       
       
       
    }

  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  token = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    return token;
  };
  modalabrir= async (e) => {  

    this.setState({modal: !this.state.modal}); 
    this.setState({opacity: 1}); 
  }
  modalcerrar= async (e) => {  
    
    this.setState({modal: false}); 
 
    this.setState({opacity: 0}); 
  
   
  }
  onSubmit = async e => {  
    e.preventDefault();

  
  
  
  }
  
  excelIDChange= async (e) => {  
    this.setState({excelID: e.target.value});
    console.log(e.target.value)
    this.excel(e.target.value);
  
  }
 
  zonaChange= async (e) => {  
    this.setState({zona: e.target.value});
   
    var params = {  zona: e.target.value,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      tipo:this.state.tipo,
      departamento:this.state.departamento,
      municipio:this.state.municipio,
      puesto:this.state.puesto,
      mesa:this.state.mesa,
      estado:this.state.estado,
      
      }
    const res =await axios.post(enviroments.backendUrl + '/votos', params);

    this.setState({reclamos: res.data.reclamos}); 
    this.setState({navegacion: res.data.navegacion});
  }
  puestoChange= async (e) => {  
    this.setState({puesto: e.target.value});
   
    var params = {  puesto: e.target.value,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      tipo:this.state.tipo,
      departamento:this.state.departamento,
      municipio:this.state.municipio,
      zona:this.state.zona,
      mesa:this.state.mesa,
      estado:this.state.estado,
      
      }
    const res =await axios.post(enviroments.backendUrl + '/votos', params);

    this.setState({reclamos: res.data.reclamos}); 
    this.setState({navegacion: res.data.navegacion});
  
  }
  mesaChange= async (e) => {  
    this.setState({mesa: e.target.value});
   
    var params = {  mesa: e.target.value,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      tipo:this.state.tipo,
      departamento:this.state.departamento,
      municipio:this.state.municipio,
      zona:this.state.zona,
      puesto:this.state.puesto,
      estado:this.state.estado,
      
      }
    const res =await axios.post(enviroments.backendUrl + '/votos', params);

    this.setState({reclamos: res.data.reclamos}); 
    this.setState({navegacion: res.data.navegacion});
  
  }
  estadoChange = async (e) => {  
    this.setState({estado: e.target.value});
    
    var params = {  estado: e.target.value,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      tipo:this.state.tipo,
      departamento:this.state.departamento,
      municipio:this.state.municipio,
      zona:this.state.zona,
      puesto:this.state.puesto,
      mesa:this.state.mesa,
      
      }
    const res =await axios.post(enviroments.backendUrl + '/votos', params);

    this.setState({reclamos: res.data.reclamos}); 
    this.setState({navegacion: res.data.navegacion});
  
  }
  tipoChange= async (e) => {  
    this.setState({tipo: e.target.value});
    
    var params = {  tipo: e.target.value,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      estado:this.state.estado,
      departamento:this.state.departamento,
      municipio:this.state.municipio,
      zona:this.state.zona,
      puesto:this.state.puesto,
      mesa:this.state.mesa,
      
      }
    const res =await axios.post(enviroments.backendUrl + '/votos', params);

    this.setState({reclamos: res.data.reclamos}); 
    this.setState({navegacion: res.data.navegacion});
  
  }
  departamentoChange= async (e) => {  
  
    this.setState({departamento: e.target.value}); 
   
    this.setState({municipio: ''}); 
     var params = {  departamento: e.target.value, 
      municipio:null,
   
      }
    const res = await axios.post(enviroments.backendUrl + '/divipol/unmunicipio', params);
    this.setState({divipolmunicipio: res.data});
    this.setState({valguardarmuni:true});
   
    var paramss = {  departamento: this.state.departamento,
      nombre:this.state.nombre,
      telefono: this.state.telefono,
      tipo:this.state.tipo,
      estado:this.state.estado,
      municipio:this.state.municipio,
      zona:this.state.zona,
      puesto:this.state.puesto,
      mesa:this.state.mesa,
      
      }
    
      
    const ress =await axios.post(enviroments.backendUrl + '/votos', paramss);

    this.setState({reclamos: ress.data.reclamos}); 
    this.setState({navegacion: ress.data.navegacion});
}
municipioChange= async (e) => {  
  this.setState({municipio: e.target.value}); 
  

  var paramss = {  municipio: e.target.value,
    nombre:this.state.nombre,
    telefono: this.state.telefono,
    tipo:this.state.tipo,
    estado:this.state.estado,
    departamento:this.state.departamento,
    zona:this.state.zona,
    puesto:this.state.puesto,
    mesa:this.state.mesa,
    
    }
  
    
  const ress =await axios.post(enviroments.backendUrl + '/votos', paramss);

  this.setState({reclamos: ress.data.reclamos}); 
  this.setState({navegacion: ress.data.navegacion});

}
rendermunicipio= () => {
            
  if(this.state.valguardarmuni===true){
      
      
    return this.state.divipolmunicipio.map(divipol => 
    <option key={divipol.municipio}>{divipol.municipio}</option>
    )

  }

}
rendervariable= (foto,variable) => {
            
  if(foto!="https://res.cloudinary.com/copete262/image/upload/v1644026979/NODISPONIBLE_nob7of.jpg"){
      
      
    return variable

  }

}
renderreclamo= () => {
            

      
      
    return  this.state.reclamos.map(reclamos => 
      <tr key={reclamos.id}>
    
      
      <td >{reclamos.nombre}</td>
      <td >{reclamos.apellido}</td>
      <td >{reclamos.telefono}</td>
      <td >{reclamos.tipo}</td>
      <td >{reclamos.departamento}</td>
      <td >{reclamos.municipio}</td>
      <td >{reclamos.zona}</td>
      <td >{reclamos.puesto}</td>
      <td >{reclamos.mesa}</td>
      <td >{this.renderestado(reclamos.estado)}</td>
      <td><Link  to={"/votos/edictar/"+reclamos.id} className="btn btn-primary glyphicon glyphicon-search" ></Link></td>
      {/* <td><Link  to="/votos" className="btn btn-danger glyphicon glyphicon-trash" onClick={()=>this.borrar(reclamos.id)}></Link></td>*/}
      <td >  <img
           class="votosimagen"
           src={reclamos.foto_url}
           alt="Card image cap"
         ></img></td>
   
      {/*this.renderbotoneliminar(reclamos)*/}
     

      </tr>             
      )
    



}
  mostrardepartamentos=async()=>{

    const res = await axios.get(enviroments.backendUrl + '/divipol/departamento');
    this.setState({divipoldepartamento: res.data});
   
  }
  unmunicipio=async () =>{

    const departamento="valle";
  
    const res = await axios.get(enviroments.backendUrl + '/divipol/unmunicipio',departamento,departamento,departamento);
    
    this.setState({divipolmunicipio: res.data});
   
  
  }
  regresarChange= async (e) => {  
    this.setState({modal: !this.state.modal}); 
  
  }
  async componentDidMount() {

    this.mostrardepartamentos();
    this.unmunicipio();
    this.reclamos();
    
  }
  reclamos=async()=>{

    
 
   
  const res = await axios.get(enviroments.backendUrl + '/votos');
  this.setState({navegacion: res.data.navegacion});
 
  this.setState({reclamos: res.data.reclamos});
  console.log(res.data.reclamos);
   
  }
  excel=async(excelID)=>{
    var params = {
      excelID:excelID
    }
    const res = await axios.post(enviroments.backendUrl + '/votos/ver/excel',params);

    this.setState({csvsena: res.data.excel});
    this.setState({csvcamara: res.data.excel2});
    
  
    
   
    
   }
  rendermodal=()=>{
  
      return <Modal  size="sm" aria-labelledby="example-modal-sizes-title-sm" style={{opacity:this.state.opacity}} show={this.state.modal} >
      <Modal.Header >
        <Modal.Title>{this.state.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{this.state.mensaje}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>this.modalcerrar()} >
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
    
  }
  renderestado=(estado)=>{
  if(estado==1){
    return <i className="glyphicon glyphicon-ok"></i>
  }else{
    return <i className="glyphicon glyphicon-remove"></i>
  }
  
}
borrar=async(id)=>{
  console.log("borro")
await axios.delete(enviroments.backendUrl + '/votos/'+id);
 
this.reclamos();
}
  render() {
 
    return (
     <>
    
   <table className="table">
            <thead className="thead-dark">
              <tr>
              
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
                
          
             
                <th scope="col">
                <select className="browser-default custom-select"  type="onSubmit" name="tipo" value={this.state.tipo} onChange={this.tipoChange}>
                    <option value="">TIPO</option>
                    <option>SENADO</option>
                    <option>CAMARA</option>
                
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
                <select className="browser-default custom-select" type="onSubmit" value={this.state.zona} onChange={this.zonaChange} 
                           >
                  <option value="">ZONA</option>
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
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                <option>60</option>
                <option>61</option>
                <option>62</option>
                <option>63</option>
                <option>64</option>
                <option>65</option>
                <option>66</option>
                <option>67</option>
                <option>68</option>
                <option>69</option>
                <option>70</option>
                <option>71</option>
                <option>72</option>
                <option>73</option>
                <option>74</option>
                <option>75</option>
                <option>76</option>
                <option>77</option>
                <option>78</option>
                <option>79</option>
                <option>80</option>
                <option>81</option>
                <option>82</option>
                <option>83</option>
                <option>84</option>
                <option>85</option>
                <option>86</option>
                <option>87</option>
                <option>88</option>
                <option>89</option>
                <option>90</option>
                <option>91</option>
                <option>92</option>
                <option>93</option>
                <option>94</option>
                <option>95</option>
                <option>96</option>
                <option>97</option>
                <option>98</option>
                <option>99</option>
                <option>100</option>
                <option>101</option>

                </select>
                </th>
                <th scope="col">
                <select className="browser-default custom-select" type="onSubmit" value={this.state.puesto} onChange={this.puestoChange} 
                           >
                  <option value="">PUESTO</option>
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
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                <option>60</option>
                <option>61</option>
                <option>62</option>
                <option>63</option>
                <option>64</option>
                <option>65</option>
                <option>66</option>
                <option>67</option>
                <option>68</option>
                <option>69</option>
                <option>70</option>
                <option>71</option>
                <option>72</option>
                <option>73</option>
                <option>74</option>
                <option>75</option>
                <option>76</option>
                <option>77</option>
                <option>78</option>
                <option>79</option>
                <option>80</option>
                <option>81</option>
                <option>82</option>
                <option>83</option>
                <option>84</option>
                <option>85</option>
                <option>86</option>
                <option>87</option>
                <option>88</option>
                <option>89</option>
                <option>90</option>
                <option>91</option>
                <option>92</option>
                <option>93</option>
                <option>94</option>
                <option>95</option>
                <option>96</option>
                <option>97</option>
                <option>98</option>
                <option>99</option>
                <option>100</option>
                <option>101</option>
                </select>
                </th>
                <th scope="col">
                <select className="browser-default custom-select" type="onSubmit" value={this.state.mesa} onChange={this.mesaChange} 
                           >
                  <option value="">MESA</option>
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
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                <option>60</option>
                <option>61</option>
                <option>62</option>
                <option>63</option>
                <option>64</option>
                <option>65</option>
                <option>66</option>
                <option>67</option>
                <option>68</option>
                <option>69</option>
                <option>70</option>
                <option>71</option>
                <option>72</option>
                <option>73</option>
                <option>74</option>
                <option>75</option>
                <option>76</option>
                <option>77</option>
                <option>78</option>
                <option>79</option>
                <option>80</option>
                <option>81</option>
                <option>82</option>
                <option>83</option>
                <option>84</option>
                <option>85</option>
                <option>86</option>
                <option>87</option>
                <option>88</option>
                <option>89</option>
                <option>90</option>
                <option>91</option>
                <option>92</option>
                <option>93</option>
                <option>94</option>
                <option>95</option>
                <option>96</option>
                <option>97</option>
                <option>98</option>
                <option>99</option>
                <option>100</option>
                <option>101</option>
                </select>
                </th>
                <th scope="col">ESTADO
                {/* 
                <select className="browser-default custom-select"  type="onSubmit" name="tipo" value={this.state.estado} onChange={this.estadoChange}>
                    <option value="">ESTADO</option>
                    <option value="1">✓</option>
                    <option value="0">×</option>
                
                </select>*/}
                </th>
                <th scope="col">Ver</th>
                <th scope="col">imagen  </th>
                
               
               
                
              
               
              </tr>
            </thead>
            
            <tbody>
            {this.renderreclamo()}
           
              
             
             
               
             
             
             
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
       

    {this.rendernavegacion()}
  
    
  

          
    
          </div>
          <div class="row mb-3">
          <div class="container">
  <div class="container " style={{ width: "66%", height: "20px"  }}>
  
    {this.rendernavegacion2()}
  
 
  </div>
</div>

   </div>
  
    <input type="number"  onChange={this.excelIDChange} style={{ width: "10%", height: "20px", margin: "20px"  }} className="form-control input-lg" 
           placeholder="Digite ID candidato"></input> 
         
          <div className="row align-items-start " style={{ width: "100%", height: "400px", margin: "20px"  }}>
          
          <div className="p-2">
        
           <label>SENADO</label>
          <ExcelFile filename="TESTIGOS SENADO" element={<button className="btn btn-info glyphicon glyphicon-download-alt"  style={{ width: "100%", height: "150%" }}  key= {110}  >  </button>}>
                <ExcelSheet data={this.state.csvsena}  name="Employees" >
                       <ExcelColumn label="ID"
                       value={(data) => data.id }/>
                         <ExcelColumn label="Candidato"
                       value={(data) => data.candidato }/>
                       <ExcelColumn label="Nombre"
                       value={(data) => data.nombre }/>
                        <ExcelColumn label="Apellido"
                       value={(data) => data.apellido }/>
                       <ExcelColumn label="Telefono"
                       value={(data) => data.telefono }/>
                       <ExcelColumn label="Tipo"
                       value={(data) => data.tipo }/>
                       <ExcelColumn label="Departamento"
                       value={(data) => data.departamento }/>
                       <ExcelColumn label="Municipio"
                       value={(data) => data.municipio }/>
                       <ExcelColumn label="Zona"
                       value={(data) => data.zona }/>
                       <ExcelColumn label="Puesto"
                       value={(data) => data.puesto }/>
                       <ExcelColumn label="Mesa"
                       value={(data) => data.mesa }/>
                       <ExcelColumn label="Estado"
                        value={(data) => data.estado }/>
                         <ExcelColumn label="Tipo"
                       value={(data) => data.tipos }/>
                       <ExcelColumn label="Partidos"
                       value={(data) => data.partidos }/>
                       <ExcelColumn label="Numero"
                       value={(data) => data.numero }/>
                       <ExcelColumn label="Votos"
                       value={(data) => data.votos }/>
                  
              
                   
                </ExcelSheet>
               
            </ExcelFile>
            </div>
            <div className="p-2">
            
            <label className="labelcamara" style={{ width: "100%" }}>CAMARA</label>
            <ExcelFile filename="TESTIGOS CAMARA" element={<button className="btn btn-info glyphicon glyphicon-download-alt botonexcel2" style={{ width: "80%", height: "150%" }}  key= {110}  >  </button>}>
                <ExcelSheet data={this.state.csvcamara}  name="Employees" >
                       <ExcelColumn label="ID"
                       value={(data) => data.id }/>
                         <ExcelColumn label="Candidato"
                       value={(data) => data.candidato }/>
                       <ExcelColumn label="Nombre"
                       value={(data) => data.nombre }/>
                        <ExcelColumn label="Apellido"
                       value={(data) => data.apellido }/>
                       <ExcelColumn label="Telefono"
                       value={(data) => data.telefono }/>
                       <ExcelColumn label="Tipo"
                       value={(data) => data.tipo }/>
                       <ExcelColumn label="Departamento"
                       value={(data) => data.departamento }/>
                       <ExcelColumn label="Municipio"
                       value={(data) => data.municipio }/>
                       <ExcelColumn label="Zona"
                       value={(data) => data.zona }/>
                       <ExcelColumn label="Puesto"
                       value={(data) => data.puesto }/>
                       <ExcelColumn label="Mesa"
                       value={(data) => data.mesa }/>
                       <ExcelColumn label="Estado"
                        value={(data) => data.estado }/>
                         <ExcelColumn label="Tipo"
                       value={(data) => data.tipos }/>
                       <ExcelColumn label="Partidos"
                       value={(data) => data.partidos }/>
                       <ExcelColumn label="Numero"
                       value={(data) => data.numero }/>
                       <ExcelColumn label="Votos"
                       value={(data) => data.votos }/>
                  
              
                   
                </ExcelSheet>
               
            </ExcelFile>
            </div>
            
            </div>
      </>
    );
  }
}

