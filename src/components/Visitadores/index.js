import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import CrearVisitador from '../Visitadores/CrearVisitador';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import db from "../../Fire.js";


import { AppContext} from "../../AppContext";


CrearVisitador.contextType =AppContext;



class  ListadoVisitadores extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteFilter = this.deleteFilter.bind(this)
   

 
  }
  deleteFilter() {

    const {obtenerVisitadores} = this.context;
    document.getElementsByName("nombre")[0].value = "";
    document.getElementsByName("fechaBuscador")[0].value = "";
    document.getElementsByName("rfc")[0].value = "";
    document.getElementsByName("correo")[0].value= "";
    document.getElementsByName("telefono")[0].value="";
    db.collection("visitadores").onSnapshot(obtenerVisitadores)

  
  }
  render () {
    const{ dataVisitadores, handleChangeVisitador,nomonDeleteCliente, onClickItemCliente, onClickItemUpdateCliente }=this.context
      return (
      <div>
                  <Link  className="text-white " to="/CrearVisitador"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>
              
                  
                  
                  <Table>
                  <thead>
                </thead>
                <tbody>
                 
          <tr  className="filtrar-style">
          
          <th></th>
          <th >Filtrar por</th>
          
           
          <th scope="col">
            <Input type="text" name="nombre" onChange={handleChangeVisitador} placeholder="Nombre" >
            </Input>
            
          </th>
          <th  scope="col">
             <Input type="text" name="correo" placeholder="Correo" onChange={handleChangeVisitador} >

           </Input>
          </th>
          <th scope="col">
          <Input type="text" name="rfc" placeholder="RFC" onChange={handleChangeVisitador} >
            </Input>
          </th>
 
          <th scope="col" >
              <Input type="date" name="fechaBuscador" onChange={handleChangeVisitador} >
                Fecha
                </Input>
          </th>
          <th></th>
          <th  scope="col">
             <Input type="text" name="telefono" placeholder="Telefono" onChange={handleChangeVisitador} >

           </Input>
          </th>
        
        
   
      
          <th scope="col"><Button   color="warning text-white" onClick={this.deleteFilter}><RotateLeftIcon/> </Button></th>
      
        </tr>
        <tr><th></th>
        </tr>
        
        </tbody>
 
      <thead>
       
        <tr  className="tabla-style">
        
         
          <th>Nombre</th>
          <th>RFC</th>
          <th>Direccion</th>
          <th>Delegacion</th>
          <th>Estado</th>
         
          <th>Teléfono</th>
          <th>Ext</th>
          <th>Email</th>
       
          <th>Fecha</th>
        
          
          
        </tr>
       
      </thead>
      
      <tbody>
      {dataVisitadores.map(item =>(
            
            
     
        <tr  className="list">
         
          <td>{item.nombre}</td>
          <td>{item.rfc}</td>
          <td>{item.direccion}</td>
          <td>{item.delegacion}</td>
          <td >{item.estado}</td>
         
          <td >{item.telefono}</td>
          <td>{item.extension}</td>
          <td>{item.email}</td>
        
          <td>{item.getNewDate}</td>
            </tr>
     
        ))
      }
      </tbody>
     
      </Table>
   
  
    </div>
  );
}
}



export default ListadoVisitadores;

