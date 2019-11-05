import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import CrearVisitador from '../Visitadores/CrearVisitador';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



import { AppContext} from "../../AppContext";

// OrdenCreada.contextType = AppContext;
CrearVisitador.contextType =AppContext;
// EditarOrden.contextType = AppContext;


class  ListadoVisitadores extends React.Component {
  render () {
    const{ dataClientes, onDeleteCliente, onClickItemCliente, onClickItemUpdateCliente }=this.context
      return (
      <div>
                  <Link  className="text-white " to="/CrearVisitador"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>
              
                  
                  
                  <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            <th></th>
            <th>Filtrar por</th>
          <th>
            <Input type="text" name="buscador" placeholder="Clave" >
            </Input>
            
          </th>
          <th>
            <Input type="select" name="nombreVendedor" >
                <option value="">Vendedor</option>
                <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                        <option value="Lazo Santiago Rubens">Lazo Santiago Rubens</option>
                        <option value="Vicente Galicia Salazar">Vicente Galicia Salazar</option>
                        <option value="America Jimenez Carlon">America Jimenez Carlon</option>
                        <option value="Daniel Hurtado Sanchez">Daniel Hurtado Sanchez</option>
                
            </Input>
          </th>
          <th>
             <Input type="select" name="tipoProyecto" >
                <option value="">Proyecto</option>
               
       
                <option value="CIVIL">CIVIL</option>
                         <option value="FINANCIERA">FINANCIERA</option>
                         <option value="INDUSTRIAL">INDUSTRIAL</option>
                         <option value="CIVIL-INDUSTRIAL">CIVIL-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA">CIVIL-FINANCIERA</option>
                         <option value="FINANCIERA-INDUSTRIAL">FINANCIERA-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">CIVIL-FINANCIERA-INDUSTRIAL</option>
            </Input>
          </th>
          <th>
          <Input type="date" name="fechaBuscador" >
            Fecha
            </Input>
          </th>
          <th>
             <Input type="select" name="estatus" >
                <option value="" >Estatus</option>
                <option value="vendido">Vendido</option>
                <option value="proceso">En proceso</option>
                <option value="cancelado">Cancelado</option>
            </Input>
          </th>
          <th><Button   color="warning text-white" ><RotateLeftIcon/> </Button></th>
        </tr>
        <tr><th></th></tr>
        
        </tbody>
 
      <thead>
       
        <tr  className="tabla-style">
        

          <th></th>
          <th className="text-center"><FolderOpenIcon/></th>
          <th >Clave</th>
          <th>Nombre</th>
          <th>Vendedor</th>
          <th>Fecha</th>
          <th>Estatus</th>
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {dataClientes.map(item =>(
            
            
     
        <tr  className="list">
          <td></td>
          <td className="text-center"><EditOutlinedIcon id={item.clave} onClick={onClickItemUpdateCliente}/><FindInPageOutlinedIcon  id={item.clave} onClick={onClickItemCliente}/></td>
          <td>{item.clave}</td>
          <td>{item.nombre}</td>
          <td>{item.vendedor}</td>
          <td>{item.getNewDate}</td>
          <td>{item.estatus}</td>
          
          <td><DeleteOutlineOutlinedIcon  id={item.clave} onClick={onDeleteCliente}/></td>
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

