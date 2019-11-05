import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import OrdenCreada from "./OrdenCreada"
import EditarOrden from "./EditarOrden"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import { Link } from 'react-router-dom';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';




import { AppContext} from "../../AppContext";
OrdenCreada.contextType = AppContext;
EditarOrden.contextType = AppContext;




class  ListaOrdenes extends React.Component {
 
  render () {
    const{items, onClickItem, rol, handleUpdate, onClickItemUpdate, getName, handleChangeFound , onDelete,  handleChangeDate, handleChangeSelect, deleteFilter, handleChangeSeller, handleChangeProject}=this.context
    if(rol === "admin") {
      return (
      <div>
         
         
                
             


                  <Link  className="text-white " to="/OrdenTrabajo"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>
              
                  
                  
                  <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            <th></th>
            <th>Filtrar por</th>
          <th>
            <Input type="text" name="buscador" placeholder="Clave" onChange={handleChangeFound} >
            </Input>
            
          </th>
          <th>
            <Input type="select" name="nombreVendedor" onChange={handleChangeSeller}>
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
             <Input type="select" name="tipoProyecto" onChange={handleChangeProject}>
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
          <Input type="date" name="fechaBuscador" onChange={handleChangeDate} >
            Fecha
            </Input>
          </th>
          <th>
             <Input type="select" name="estatus" onChange={handleChangeSelect}>
                <option value="" >Estatus</option>
                <option value="vendido">Vendido</option>
                <option value="proceso">En proceso</option>
                <option value="cancelado">Cancelado</option>
            </Input>
          </th>
          <th><Button   color="warning text-white" onClick={deleteFilter}><RotateLeftIcon/> </Button></th>
        </tr>
        <tr><th></th></tr>
        
       
          
       
        
        </tbody>

        
         

        
               
            
            
           
        
 
      <thead>
       
        <tr  className="tabla-style">
        

          <th></th>
          <th className="text-center"><FolderOpenIcon/></th>
          <th >Clave</th>
          <th>Vendedor</th>
          <th>Proyecto</th>
          <th>Fecha</th>
          <th>Estatus</th>
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {items.map((item, index) =>(
            
            
     
        <tr key={index}  className="list">
          <td></td>
          <td className="text-center"><EditOutlinedIcon id={item.productClave} onClick={onClickItemUpdate} /><FindInPageOutlinedIcon  id={item.productClave} onClick={onClickItem}/></td>
          <td>{item.productClave}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.getNewDate}</td>
          <td>{item.estatus}</td>
          <td><DeleteOutlineOutlinedIcon id={item.productClave} onClick={onDelete}/></td>
        </tr>
        
        
     
        ))
                }
      </tbody>
     
      </Table>
    <OrdenCreada/>
    <EditarOrden/>
  
    </div>
  );
}else {
  return (
    <div>
       
       
              
           


                <Link  className="text-white " to="/OrdenTrabajo"><Button className='mt-2 mb-2 mr-3 float-right' color="success ">Crear</Button></Link>
            
                
                
                <Table>
                <thead>
              </thead>
              <tbody>
        <tr  className="filtrar-style">
          <th></th>
          <th>Filtrar por</th>
        <th>
          <Input type="text" name="buscador" placeholder="Clave" onChange={handleChangeFound} >
          </Input>
          
        </th>
        <th>
          <Input type="text" name="nombreVendedor" readOnly value={getName} >
            
          
              
          </Input>
        </th>
        <th>
           <Input type="select" name="tipoProyecto" onChange={handleChangeProject}>
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
        <Input type="date" name="fechaBuscador" onChange={handleChangeDate} >
          Fecha
          </Input>
        </th>
        <th>
           <Input type="select" name="estatus" onChange={handleChangeSelect}>
              <option value="" >Estatus</option>
              <option value="vendido">Vendido</option>
              <option value="proceso">En proceso</option>
              <option value="cancelado">Cancelado</option>
          </Input>
        </th>
        <th><Button   color="warning text-white" onClick={deleteFilter}><RotateLeftIcon/> </Button></th>
      </tr>
      <tr><th></th></tr>
      
     
        
     
      
      </tbody>

      
       

      
             
          
          
         
      

    <thead>
     
      <tr  className="tabla-style">
      

        <th></th>
        <th className="text-center"><FolderOpenIcon/></th>
        <th >Clave</th>
        <th>Vendedor</th>
        <th>Proyecto</th>
        <th>Fecha</th>
        <th>Estatus</th>
        <th></th>
        
      </tr>
     
    </thead>
    
    <tbody>
    {items.map((item, index) =>(
          
          
   
      <tr key={index} className="list">
        <td></td>
        <td className="text-center"><EditOutlinedIcon  id={item.productClave} onClick={onClickItemUpdate}/><FindInPageOutlinedIcon  id={item.productClave} onClick={onClickItem}/></td>
        <td>{item.productClave}</td>
        <td>{item.vendedor}</td>
        <td>{item.uge}</td>
        <td></td>
        <td>{item.estatus}</td>
        <td></td>
      </tr>
      
      
   
      ))
              }
    </tbody>
   
    </Table>
  <OrdenCreada/>
  <EditarOrden/>

  </div>
);

}
}
}



export default ListaOrdenes;