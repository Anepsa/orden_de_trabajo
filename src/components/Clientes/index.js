import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import CrearCliente from './CrearCliente';
import EditarCliente from './EditarCliente'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



import { AppContext} from "../../AppContext";
EditarCliente.contextType =AppContext

// OrdenCreada.contextType = AppContext;
CrearCliente.contextType =AppContext;
// EditarOrden.contextType = AppContext;


class  ListadoClientes extends React.Component {
  render () {
    const{ dataClientes, onDeleteCliente, onClickItemCliente, onClickItemUpdateCliente , handleChangeCliente}=this.context
      return (
      <div>
                  <Link  className="text-white " to="/CrearCliente"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>    
                  <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            <th></th>
            <th>Filtrar por</th>
          <th>
            <Input type="text" name="buscador" onChange={handleChangeCliente} placeholder="Clave" >
            </Input>
            
          </th>
          <th>
          <Input type="text" name="buscadorClienteNombre"  placeholder="Cliente" >
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
          <td className="text-center"><Button className="mr-1 " color="white" id={item.clave} onClick={onClickItemUpdateCliente}><EditOutlinedIcon id={item.clave} onClick={onClickItemUpdateCliente}/></Button>
          <Button color="white" id={item.clave} onClick={onClickItemUpdateCliente}><FindInPageOutlinedIcon  id={item.clave} onClick={onClickItemUpdateCliente}/></Button></td>
          <td>{item.clave}</td>
          <td>{item.nombre}</td>
          <td>{item.vendedor}</td>
          <td>{item.getNewDate}</td>
          <td>{item.estatus}</td>
          
          <td><Button color="white"><DeleteOutlineOutlinedIcon  id={item.clave} onClick={onDeleteCliente}/></Button></td>
        </tr>
     
        ))
      }
      </tbody>
     
      </Table>
  
  <EditarCliente/>
  
    </div>
  );
}
}



export default ListadoClientes;