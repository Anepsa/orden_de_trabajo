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
import db from "../../Fire.js";



import { AppContext} from "../../AppContext";
EditarCliente.contextType =AppContext

// OrdenCreada.contextType = AppContext;
CrearCliente.contextType =AppContext;
// EditarOrden.contextType = AppContext;


class  ListadoClientes extends React.Component {
  constructor() {
    super();

    this.onDelete = this.onDelete.bind(this);

 
  }

  onDelete(e){
       
    const newid=  e.target.id
    console.log(newid)
    db.collection("clientes").where("clave", "==", newid )
    .get()
    .then(querySnapshot => {
     querySnapshot.forEach((doc) => {
       doc.ref.delete().then(() => {
         console.log("Document successfully deleted!");
       }).catch(function(error) {
         console.error("Error removing document: ", error);
       });
     });
   })
   .catch(function(error) {
     console.log("Error getting documents: ", error);
   });
   }

  render () {
    const{ dataClientes, onClickItemCliente, onClickItemUpdateCliente , handleChangeCliente}=this.context
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
            <Input type="text" name="buscadorClave" onChange={handleChangeCliente} placeholder="Clave" >
            </Input>
            
          </th>
          <th>
          <Input type="text" name="buscadorNombre" onChange={handleChangeCliente}  placeholder="Cliente" >
            </Input>
          </th>

          <th>
          <Input type="date" name="fechaCliente" onChange={handleChangeCliente} >
            Fecha
            </Input>
          </th>
          <th>
             <Input type="select" name="estatus" onChange={handleChangeCliente} >
                <option value="" >Estatus</option>
                <option value="perdido">Perdido</option>
                <option value="contacto inicial">Contacto Inicial</option>
                <option value="posible cierre">Posible Cierre</option>
                <option value="estancado">Estancado</option>
                <option value="vendido">Vendido</option>

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
        
          <td>{item.getNewDate}</td>
          <td>{item.estatus}</td>
          
          <td><Button color="white"><DeleteOutlineOutlinedIcon  id={item.clave} onClick={this.onDelete}/></Button></td>
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