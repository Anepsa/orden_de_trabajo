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
import db from "../../Fire.js";
import { CSVLink} from "react-csv";

import '@fortawesome/fontawesome-free/css/all.min.css';






import { AppContext} from "../../AppContext";
OrdenCreada.contextType = AppContext;
EditarOrden.contextType = AppContext;




class  ListaOrdenes extends React.Component {
  constructor(props) {
    super(props);
    
    this.onDelete = this.onDelete.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this)
    this.generatePDF = this.generatePDF.bind(this)
 

 
  }

  onDelete(e){
       
    const newid=  e.target.id
    console.log(newid)
    db.collection("orden").where("productClave", "==", newid )
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
  generatePDF(){
    window.print()
  }
  deleteFilter() {

    const {obtenerBD} = this.context;
    document.getElementsByName("buscador")[0].value = "";
    document.getElementsByName("fechaBuscador")[0].value = "";
    document.getElementsByName("empresa")[0].value = "";
    document.getElementsByName("nombreVendedor")[0].value= "";
    document.getElementsByName("tipoProyecto")[0].value="";
    db.collection("orden").onSnapshot(obtenerBD)

  
  }

  render () {
   
    const{items, rol,crearNuevo, handleChangeOrden, onClickItem,onClickItemUpdate, getName, handleChangeFound ,   handleChangeDate, handleChangeSelect,  handleChangeProject}=this.context
    if(rol === "admin") {
      return (
       
        <div> 
           <Link  className="text-white " to="/OrdenTrabajo"><Button className='mt-2 mb-2 mr-3 float-right' color="info" onclick={crearNuevo}>Crear</Button></Link>                 
               
        <Button  color="white" className=" mt-2 mb-2 mr-3 float-right text-black" onClick={this.generatePDF}><i className="far fa-file-pdf icono-pdf"></i></Button> 
         
        <Button  color="white" className=" mt-2 mb-2 mr-3 float-right  text-black"><CSVLink className=""  data={items}><i className="far fa-file-excel icono-excel"></i></CSVLink></Button> 
                    <Table>
                  <thead>
                </thead>
                <tbody>
          <tr  className="filtrar-style">
            
            <th colspan="2">Filtrar por</th>
          <th colspan="2">
            <Input type="text" name="buscador" placeholder="Clave" onChange={handleChangeOrden} >
            </Input>
            
          </th>
          <th  colspan="2">
            <Input type="text" name="empresa" placeholder="Empresa" onChange={handleChangeOrden} >
            </Input>
            
          </th>
          <th  colspan="2">
            <Input type="select" name="nombreVendedor" onChange={handleChangeOrden}>
                <option value="">Vendedor</option>
                <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                        <option value="Lazo Santiago Rubens">Lazo Santiago Rubens</option>
                        <option value="Vicente Galicia Salazar">Vicente Galicia Salazar</option>
                        <option value="America Jimenez Carlon">America Jimenez Carlon</option>
                        <option value="Daniel Hurtado Sanchez">Daniel Hurtado Sanchez</option>
                
            </Input>
          </th>
          <th >
             <Input type="select" name="tipoProyecto" onChange={handleChangeOrden}>
                <option value="">UGE</option>
               
       
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
          <Input type="date" name="fechaBuscador" onChange={handleChangeOrden} >
            Fecha
            </Input>
          </th>
         
         
          <th><Button   color="warning text-white" onClick={this.deleteFilter}><RotateLeftIcon/> </Button></th>
        </tr>
        <tr>
          <th colspan="2"></th>
        <th colspan="2">
            <Input type="text" name="cliente" placeholder="Cliente" onChange={handleChangeOrden} >
            </Input>
            
          </th>
          <th colspan="2">
            <Input type="select" name="bienes"  onChange={handleChangeOrden} >
            <option value="">Bienes</option>
                    <option value="CONSTRUCCIONES">CONSTRUCCIONES</option>
                    <option value="DIVERSOS">DIVERSOS</option>
                    <option value="EQUIPO DE CÓMPUTO">EQUIPO DE CÓMPUTO</option>
                    <option value="HERRAMIENTAS">HERRAMIENTAS</option>
                    <option value="INMUEBLES">INMUEBLES</option>
                    <option value="INTANGIBLES">INTANGIBLES</option>
                    <option value="JOYAS">JOYAS</option>
                    <option value="MEJORAS">MEJORAS</option>
                    <option value="MAQUINARIA Y EQUIPO">MAQUINARIA Y EQUIPO</option>
                    <option value="MOLDES Y TROQUELES">MOLDES Y TROQUELES</option>
                    <option value="MUEBLES Y ENSERES">MUEBLES Y ENSERES</option>
                    <option value="OBRAS DE ARTE">OBRAS DE ARTE</option>
                    <option value="TERRENO(S)">TERRENO(S)</option>
                    <option value="TRACTOCAMIÓN">TRACTOCAMIÓN</option>
                    <option value="VEHÍCULOS">VEHÍCULOS</option>

            </Input>
            
          </th>
          <th colspan="2">
            <Input type="select" name="proyecto" placeholder="Proyecto" onChange={handleChangeOrden} >
            <option value="">Proyecto</option>
                    <option value="MICRO">MICRO</option>
                    <option value="MECRO">MECRO</option>
                    <option value="MACRO">MACRO</option>
           
            </Input>
            
          </th>
          <th>
            <Input type="select" name="proposito" placeholder="Proposito" onChange={handleChangeOrden} >
            <option value="">Proposito</option>
                <option value="ASEGURAR EL INMUEBLE">ASEGURAR EL INMUEBLE</option>
                <option value="CRÉDITO HIPOTECARIO">CRÉDITO HIPOTECARIO</option>
                <option value="DACIÓN DE PAGO">DACIÓN DE PAGO</option>
                <option value="ESCRITURACIÓN">ESCRITURACIÓN</option>
                <option value="GARANTÍA FISCAL">GARANTÍA FISCAL</option>
                <option value="INTESTADO">INTESTADO</option>
                <option value="JUSTIPRECIACION DE RENTAS">JUSTIPRECIACION DE RENTAS</option>
                <option value="POSTURA DE COMPRA-VENTA">POSTURA DE COMPRA-VENTA</option>
                <option value="REMATE">REMATE</option>
                <option value="SUCESIÓN TESTAMENTARIA">SUCESIÓN TESTAMENTARIA</option>
                <option value="TRASLADO DE DOMINIO">TRASLADO DE DOMINIO</option>
                <option value="TOMA DE DECISIONES INTERNAS">TOMA DE DECISIONES INTERNAS</option>
                <option value="OTRO PROPÓSITO">OTRO PROPÓSITO</option>
                
            
            </Input>
            
          </th>
          <th >
           
          </th>
          
         </tr>

        </tbody>

 
      <thead>
       
        <tr  className="tabla-style">
        

         
          <th className="text-center"><FolderOpenIcon/></th>
          <th >Clave</th>
          <th>Empresa</th>
          <th>Vendedor</th>
          <th>UGE</th>
          <th>Cliente</th>
          <th>Bienes</th>
          <th>Proyecto</th>
          {/* <th>Tipo Cliente</th> */}
          <th>Proposito</th>
          <th>Fecha</th>
         
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {items.map((item, index) =>(
            
            
     
        <tr key={index}  className="list">
         
          <td className="text-center"><Button className="mr-1" color="white"><EditOutlinedIcon id={item.productClave} onClick={onClickItemUpdate} /></Button>
          <Button color="white"  id="productClave" value={item.productClave} onClick={onClickItem}><FindInPageOutlinedIcon/></Button></td>
          <td>{item.productClave}</td>
          <td>{item.cliente.empresa}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.cliente.nombre}</td>
          <td>{item.bienes  }</td>
          <td>{item.proyecto}</td>
          {/* <td>{item.tipoCliente}</td> */}
          <td>{item.proposito}</td>
          
          <td>{item.getNewDate}</td>
          
          <td><DeleteOutlineOutlinedIcon id={item.productClave} onClick={this.onDelete}/></td>
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
       
       
              
           


                <Link  className="text-white " to="/OrdenTrabajo"><Button className='mt-2 mb-2 mr-3 float-right' color="success " onclick={crearNuevo}>Crear</Button></Link>
            
                
                
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
        <th><Button   color="warning text-white" onClick={this.deleteFilter}><RotateLeftIcon/> </Button></th>
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
        <td className="text-center"><EditOutlinedIcon  id={item.productClave} onClick={onClickItemUpdate}/><FindInPageOutlinedIcon  id={item.productClave} onClick={onClickItem}/>
        <Button color="white"  id="productClave" value={item.productClave} onClick={onClickItem}><FindInPageOutlinedIcon  /></Button>
        </td>
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
  <OrdenCreada />
  <EditarOrden/>

  </div>
);

}
}
}



export default ListaOrdenes;