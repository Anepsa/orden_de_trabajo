import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import OrdenCreada from "./OrdenCreada"
import EditarOrden from "./EditarOrden"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Link } from 'react-router-dom';
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
       
    const newid=  e.target.value
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
    document.getElementsByName("cliente")[0].value = "";
    document.getElementsByName("bienes")[0].value = "";
    document.getElementsByName("proyecto")[0].value = "";
    document.getElementsByName("proposito")[0].value = "";
    db.collection("orden").onSnapshot(obtenerBD)

  
  }

  render () {
   
    const{items, rol,crearNuevo, handleChangeOrden, onClickItem}=this.context
    if(rol === "admin") {
      return (
       
        <div> 
           <Link  className="text-white " to="/OrdenTrabajo" onClick={crearNuevo}><Button className='mt-2 mb-2 mr-3 float-right' color="info" onclick={crearNuevo}>Crear</Button></Link>                 
               
        <Button  color="white" className=" mt-2 mb-2 mr-3 float-right text-black" onClick={this.generatePDF}><i className="far fa-file-pdf icono-pdf"></i></Button> 
         
        <Button  color="white" className=" mt-2 mb-2 mr-3 float-right  text-black"><CSVLink   className=""  data={items}><i className="far fa-file-excel icono-excel"></i></CSVLink></Button> 
       <Table>
              <thead>
               </thead>
                <tbody>
          <tr  className="filtrar-style">
            
            <th colspan="2">Filtrar por</th>
          <th colspan="2">
            <Input type="text" className="toUppercase" name="buscador" placeholder="Clave" onChange={handleChangeOrden} >
            </Input>
            
          </th>
          <th  colspan="2">
            <Input type="text" className="toUppercase" name="empresa" placeholder="Empresa" onChange={handleChangeOrden} >
            </Input>
            
          </th>
          <th  colspan="2">
            <Input type="select" name="nombreVendedor" onChange={handleChangeOrden}>
                <option value="">Vendedor</option>
                <option value="AMEYALLI BRITO GONZÁLEZ">Ame</option>
                        <option value="YOZEBETH BRITO GONZÁLEZ">Yoz</option>
                        <option value="LAZO SANTIAGO RUBENS">Lazo Santiago Rubens</option>
                        <option value="VICENTE GALICIA SALAZAR">Vicente Galicia Salazar</option>
                        <option value="AMERICA JIMENEZ CARLON">America Jimenez Carlon</option>
                        <option value="DANIEL HURTADO SANCHEZ">Daniel Hurtado Sanchez</option>
                
            </Input>
          </th>
          <th >
             <Input type="select" name="tipoProyecto" onChange={handleChangeOrden}>
                <option value="">UGE</option>
               
       
                <option value="CIVIL">Civil</option>
                         <option value="FINANCIERA">Financiera</option>
                         <option value="INDUSTRIAL">Industrial</option>
                         <option value="CIVIL-INDUSTRIAL">Civil-Industrial</option>
                         <option value="CIVIL-FINANCIERA">Civil-Financiera</option>
                         <option value="FINANCIERA-INDUSTRIAL">Financiera-Industrial</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">Civil-Financiera-Industrial</option>
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
                    <option value="CONSTRUCCIONES">Construcciones</option>
                    <option value="DIVERSOS">Diversos</option>
                    <option value="EQUIPO DE CÓMPUTO">Equipo de Cómputo</option>
                    <option value="HERRAMIENTAS">Herramientas</option>
                    <option value="INMUEBLES">Inmuebles</option>
                    <option value="INTANGIBLES">Intangibles</option>
                    <option value="JOYAS">Joyas</option>
                    <option value="MEJORAS">Mejoras</option>
                    <option value="MAQUINARIA Y EQUIPO">Maquinaria y Equipo</option>
                    <option value="MOLDES Y TROQUELES">Moldes y Troqueles</option>
                    <option value="MUEBLES Y ENSERES">Muebles y Enseres</option>
                    <option value="OBRAS DE ARTE">Obras de Arte</option>
                    <option value="TERRENO(S)">Terreno(s)</option>
                    <option value="TRACTOCAMIÓN">Tractocamión</option>
                    <option value="VEHÍCULOS">Vehículos</option>

            </Input>
            
          </th>
          <th colspan="2">
            <Input type="select" name="proyecto" placeholder="Proyecto" onChange={handleChangeOrden} >
            <option value="">Proyecto</option>
                    <option value="MICRO">Micro</option>
                    <option value="MECRO">Mecro</option>
                    <option value="MACRO">Macro</option>
           
            </Input>
            
          </th>
          <th>
            <Input type="select" name="proposito" placeholder="Proposito" onChange={handleChangeOrden} >
            <option value="">Proposito</option>
                <option value="ASEGURAR EL INMUEBLE">Asegura el Inmueble</option>
                <option value="CRÉDITO HIPOTECARIO">Crédito Hipotecario</option>
                <option value="DACIÓN DE PAGO">Dación de Pago</option>
                <option value="ESCRITURACIÓN">Escrituración</option>
                <option value="GARANTÍA FISCAL">Garantía Fiscal</option>
                <option value="INTESTADO">Intestado</option>
                <option value="JUSTIPRECIACION DE RENTAS">Justipreciación de Rentas</option>
                <option value="POSTURA DE COMPRA-VENTA">Postura de Compra-Venta</option>
                <option value="REMATE">Remate</option>
                <option value="SUCESIÓN TESTAMENTARIA">Sucesión Testamentaria</option>
                <option value="TRASLADO DE DOMINIO">Traslado de Dominio</option>
                <option value="TOMA DE DECISIONES INTERNAS">Toma de Decisiones Internas</option>
                <option value="OTRO PROPÓSITO">Otro Propósito</option>
                
            
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
          <th>Proposito</th>
          <th>Fecha</th> 
          <th></th>
          
        </tr>
       
      </thead>
      
      <tbody>
      {items.map((item, index) =>(
        <tr key={index}  className="list">         
          <td className="text-center"><Button className="mr-1 clave" color="white" value={item.productClave} onClick={onClickItem}></Button>
          <Button color="white"  className="busqueda" value={item.productClave} onClick={onClickItem}></Button></td>
          <td>{item.productClave}</td>
          <td>{item.cliente.empresa}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.cliente.nombre}</td>
          <td>{item.bienes  }</td>
          <td>{item.proyecto}</td>
          <td>{item.proposito}</td>
          <td>{item.getNewDate}</td>          
          <td><Button className="borrar" color="white" value={item.productClave} onClick={this.onDelete}></Button></td>
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
       
       
              
           


                <Link  className="text-white " to="/OrdenTrabajo" onClick={crearNuevo}><Button className='mt-2 mb-2 mr-3 float-right' color="success " onclick={crearNuevo}>Crear</Button></Link>
            
                
                
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
                <option value="AMEYALLI BRITO GONZÁLEZ">Ame</option>
                        <option value="YOZEBETH BRITO GONZÁLEZ">Yoz</option>
                        <option value="LAZO SANTIAGO RUBENS">Lazo Santiago Rubens</option>
                        <option value="VICENTE GALICIA SALAZAR">Vicente Galicia Salazar</option>
                        <option value="AMERICA JIMENEZ CARLON">America Jimenez Carlon</option>
                        <option value="DANIEL HURTADO SANCHEZ">Daniel Hurtado Sanchez</option>
                
            </Input>
          </th>
          <th >
             <Input type="select" name="tipoProyecto" onChange={handleChangeOrden}>
                <option value="">UGE</option>
               
       
                <option value="CIVIL">Civil</option>
                         <option value="FINANCIERA">Financiera</option>
                         <option value="INDUSTRIAL">Industrial</option>
                         <option value="CIVIL-INDUSTRIAL">Civil-Industrial</option>
                         <option value="CIVIL-FINANCIERA">Civil-Financiera</option>
                         <option value="FINANCIERA-INDUSTRIAL">Financiera-Industrial</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">Civil-Financiera-Industrial</option>
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
                    <option value="CONSTRUCCIONES">Construcciones</option>
                    <option value="DIVERSOS">Diversos</option>
                    <option value="EQUIPO DE CÓMPUTO">Equipo de Cómputo</option>
                    <option value="HERRAMIENTAS">Herramientas</option>
                    <option value="INMUEBLES">Inmuebles</option>
                    <option value="INTANGIBLES">Intangibles</option>
                    <option value="JOYAS">Joyas</option>
                    <option value="MEJORAS">Mejoras</option>
                    <option value="MAQUINARIA Y EQUIPO">Maquinaria y Equipo</option>
                    <option value="MOLDES Y TROQUELES">Moldes y Troqueles</option>
                    <option value="MUEBLES Y ENSERES">Muebles y Enseres</option>
                    <option value="OBRAS DE ARTE">Obras de Arte</option>
                    <option value="TERRENO(S)">Terreno(s)</option>
                    <option value="TRACTOCAMIÓN">Tractocamión</option>
                    <option value="VEHÍCULOS">Vehículos</option>

            </Input>
            
          </th>
          <th colspan="2">
            <Input type="select" name="proyecto" placeholder="Proyecto" onChange={handleChangeOrden} >
            <option value="">Proyecto</option>
                    <option value="MICRO">Micro</option>
                    <option value="MECRO">Mecro</option>
                    <option value="MACRO">Macro</option>
           
            </Input>
            
          </th>
          <th>
            <Input type="select" name="proposito" placeholder="Proposito" onChange={handleChangeOrden} >
            <option value="">Proposito</option>
                <option value="ASEGURAR EL INMUEBLE">Asegura el Inmueble</option>
                <option value="CRÉDITO HIPOTECARIO">Crédito Hipotecario</option>
                <option value="DACIÓN DE PAGO">Dación de Pago</option>
                <option value="ESCRITURACIÓN">Escrituración</option>
                <option value="GARANTÍA FISCAL">Garantía Fiscal</option>
                <option value="INTESTADO">Intestado</option>
                <option value="JUSTIPRECIACION DE RENTAS">Justipreciación de Rentas</option>
                <option value="POSTURA DE COMPRA-VENTA">Postura de Compra-Venta</option>
                <option value="REMATE">Remate</option>
                <option value="SUCESIÓN TESTAMENTARIA">Sucesión Testamentaria</option>
                <option value="TRASLADO DE DOMINIO">Traslado de Dominio</option>
                <option value="TOMA DE DECISIONES INTERNAS">Toma de Decisiones Internas</option>
                <option value="OTRO PROPÓSITO">Otro Propósito</option>
                
            
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
          <th>Proposito</th>
          <th>Fecha</th> 
          <th></th>
        
      </tr>
     
    </thead>
    
    <tbody>
    {items.map((item, index) =>(
          
          
   
      <tr key={index} className="list">    
        <td className="text-center"><Button className="mr-1 clave" color="white" value={item.productClave} onClick={onClickItem}></Button>
          <Button color="white"  className="busqueda" value={item.productClave} onClick={onClickItem}></Button></td>
          <td>{item.productClave}</td>
          <td>{item.cliente.empresa}</td>
          <td>{item.vendedor}</td>
          <td>{item.uge}</td>
          <td>{item.cliente.nombre}</td>
          <td>{item.bienes  }</td>
          <td>{item.proyecto}</td>
          <td>{item.proposito}</td>
          <td>{item.getNewDate}</td>          
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