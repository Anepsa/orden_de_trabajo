import React from 'react';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ordes.css';

class  OrdenTrabajo extends React.Component {
    constructor() {
        super();
    
        this.imprimir = this.imprimir.bind(this);
       
    
     
      }
    
    imprimir(){
            const {closeModal} = this.context

            closeModal()
            var elemento = document.getElementById("ocul");
            console.log(elemento)
            elemento.className += " ocultar";
            
            const ocultarBoton = document.getElementById("ocultarEnviar");
          
            ocultarBoton.className += " ocultar";

            const ocultarFormato = document.getElementById("formOcultar");
           
            ocultarFormato.className += "form-ocultar";

            const ocultarColor = document.getElementById("OrdenCreada");
           
            ocultarColor.className += " div-form-ocultar";

            setTimeout(()=>{ 
               
                
                var objeto=document.getElementById('imprimir');
                window.print(objeto); 
                window.close()
              ;
                elemento.classList.remove('ocultar');
                ocultarBoton.classList.remove('ocultar')
                ocultarFormato.classList.remove('form-ocultar')
                ocultarColor.classList.remove('div-form-ocultar')
                const {crearNuevo} = this.context
            crearNuevo() 
            }, 100);
          
            
              
            
               
    }

    
  
    render(){

    
        
    const{ rol,nombresClientes,nuevaClave, crearNuevo, nombresEmpresas, handleSelectUge, listaVisitador, handleCliente, obtDataCliente, handleEmpresa, getName, vendedor,uge,  copia,  oferta,
    fechaIns, inicio, entrega, 
    cedido, proyecto, tipoCliente,  
    nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante,  EDOSolicitante, telSolicitante, extTelSolicitante, emailSolicitante,holdingSolicitante,servicioSolicitante, ventaSolicitante, comentariosSolicitante,
      otroObj, proposito, otroProp,
    presentarse, visitador,
    telInsp, emailInsp, dirInsp, observaciones,
    bienes,otroBien,presupuesto, comision, montoVendido, facturar, modalIsOpen,  dateNew, info, otraInfo,   extInsp, handleChange ,handleSubmit, closeModal, } = this.context
    if(rol === "admin"){
    return ( 
        //Ceacion formulario
        <div id="OrdenCreada" className="div-form imprimir">
            
            <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmit}>
           
               
                <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
                <br/>
                <fieldset className="fieldset">
            <FormGroup  row>
            <Col sm={2}>
                    <Label sm={12}  >CLAVE </Label>
                    <Col >
                        <Input  type="text"   readOnly placeholder={nuevaClave}    >
                      
                            
                            </Input>
                    </Col>
                    </Col>  
            <Col sm={3}>
                 <Label sm={12} >UGE <span className="text-danger ">*</span>   </Label>
                 <Col >
                 <Input type="select"  className="obligatorio resetear" name="uge" value={uge} onChange={handleSelectUge} required>
                        <option value="" selected>Selecciona</option>
                        <option value="CIVIL">CIVIL</option>
                         <option value="FINANCIERA">FINANCIERA</option>
                         <option value="INDUSTRIAL">INDUSTRIAL</option>
                         <option value="CIVIL-INDUSTRIAL">CIVIL-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA">CIVIL-FINANCIERA</option>
                         <option value="FINANCIERA-INDUSTRIAL">FINANCIERA-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">CIVIL-FINANCIERA-INDUSTRIAL</option>
            </Input>
                 </Col>
                 </Col>
         
                <Col sm={2}>
                <Label sm={12}  >Vendedor Ejecutivo <span className="text-danger">*</span> </Label>
                <Col >
                    <Input   className="obligatorio" type="select" name="vendedor" value={vendedor} onChange={handleChange} required >
                    <option value="" >Selecciona</option>
                        <option value="AMEYALLI BRITO GONZÁLEZ">AME</option>
                        <option value="YOZEBETH BRITO GONZÁLEZ">YOZ</option>
                        <option value="LAZO SANTIAGO RUBENS">Lazo Santiago Rubens</option>
                        <option value="VICENTE GALICIA SALAZAR">Vicente Galicia Salazar</option>
                        <option value="AMERICA JIMENEZ CARLON">America Jimenez Carlon</option>
                        <option value="DANIEL HURTADO SANCHEZ">Daniel Hurtado Sanchez</option>
                        
                        </Input>
                </Col>
                </Col>
                <Col sm={2}>
                <Label sm={12} >Fecha</Label>
                <Col > 
                    <Input  readOnly name="dateNew" value={dateNew}  type="text"/>
                </Col> 
                </Col>  
                <Col sm={3}>
                    <Label  sm={12}>Copia para <span className="text-danger">*</span> </Label>
                <Col >
                    <Input  type="select" name="copia"  value={copia} onChange={handleChange} required>
                        <option value="">Selecciona</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="DIRECCION">DIRECCION</option>
                        <option value="FINANZAS">FINANZAS</option>
                        <option value="INDUSTRIAL">INDUSTRIAL</option>
                        <option value="ADMINISTRACION">ADMINISTRACIÓN O CONTABILIDAD</option>
                        <option value="CIV-IND">CIVIL-INDUSTRIAL</option>
                        <option value="CIV-FIN">CIVIL-FINANZAS</option>
                        <option value="FIN-IND">FINANZAS-INDUSTRIAL</option>
                        <option value="IND-PROD">INDUSTRIAL-PRODUCCIÓN</option>
                        <option value="CIV-FIN-IND">CIVIL-FINANZAS-INDUSTRIAL</option>
                    </Input>
                </Col>
                </Col> 
                </FormGroup> 
                <FormGroup row>          
                <Col sm={3}>
                  
                  
            <Label  sm={12} className="ot-color ">1. TIPO DE OFERTA </Label>
            <Col >
                <Input  type="select" name="oferta" value={oferta} onChange={handleChange} >
                <option value="">Selecciona</option>
                <option value="PROPIO">PROPIO</option>
                <option value="CEDIDO">CEDIDO</option>
                <option value="MARKETING DIGITAL">MARKETING DIGITAL</option>
                <option value="ASOCIADO">ASOCIADO</option>
                
                </Input>
            </Col>
            </Col>
           <Col sm={3}>
                <Label sm={12} className="ot-color label-input">1.1 CEDIDO DE  </Label>
                <Col >
                <Input  type="text" name="cedido" className="resetear" value={cedido} onChange={handleChange} />
                </Col>
           </Col>
           
                <Col sm={3}>
                <Label sm={12} className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger">*</span>  </Label>
                <Col >
                <Input  type="select" name="proyecto" value={proyecto} onChange={handleChange} required>
                <option value="">Selecciona</option>
                    <option value="MICRO">MICRO</option>
                    <option value="MECRO">MECRO</option>
                    <option value="MACRO">MACRO</option>
                </Input>
                </Col>
                </Col>
                <Col sm={3}>
                <Label sm={12} className="ot-color label-input">3. TIPO DE CLIENTE <span className="text-danger">*</span> </Label>
                <Col >
                    <Input   type="select" name="tipoCliente" value={tipoCliente} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                        <option value="NUEVO">NUEVO</option>
                        <option value="CONTINUO">CONTINUO</option>
                        <option value="PROSPECTO">PROSPECTO</option>
                    </Input>
                </Col>               
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color">4. DATOS DEL CLIENTE</legend>
            <FormGroup >
                
                <FormGroup row id="ocul" className="hola">
                <Col sm={2}></Col>
                <Label sm={10} >Selecciona por: </Label>
                <Col sm={2}></Col>
                <Col sm={3}>
                <Input type="select" id="clienteSelect"  onChange={handleEmpresa}>
                    <option value="" >Cliente</option>
                    {nombresClientes.map(item =>(

                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                </Col>
                <Col sm={2}></Col>
                <Col sm={3}>
              
                
                <Input type="select"   onChange={handleCliente}>
                    <option value="">Empresa</option>
                    {nombresEmpresas.map(item =>(
                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                </Col>
                <Col sm={2}></Col>
                </FormGroup>
                <FormGroup row>
                  
                    <Col sm={2}>
                   
                        <Label sm={12}>Cliente<span className="text-danger">*</span>  </Label>
                        <Col >
                            <Input readOnly defaultValue={obtDataCliente.nombre} className="form-size" type="text" name="nombreCliente" /> 
                        </Col> 
                        </Col>
                        <Col sm={2}>
                   
                   <Label sm={12}>Empresa<span className="text-danger">*</span>  </Label>
                   <Col >
                       <Input  readOnly defaultValue={obtDataCliente.empresa} className="form-size" type="text" name="empresa" /> 
                   </Col> 
                   </Col>
                   <Col sm={2}>
      
      <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text"  defaultValue={obtDataCliente.cargo} readOnly/> 
      </Col>
      </Col> 
        <Col sm={2}>
    
                 <Label sm={12} >RFC </Label>
                <Col >
                                        <Input  defaultValue={obtDataCliente.rfc}  type="text" readOnly/> 
                </Col>
                </Col> 
                        
                    
                    <Col sm={2}>
                 <Label sm={12} >Area <span className="text-danger">*</span>   </Label>
                 <Col >
                     <Input type="text"   defaultValue={obtDataCliente.area} readOnly/>
                 </Col>
                 </Col>
                  <Col sm={2}>
            <Label sm={12}> Holding<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text"  defaultValue={obtDataCliente.holding} onChange={handleChange} readOnly/> 
            </Col>
            </Col>
            <Col sm={2}>
              <Label sm={12}>Servicio<span className="text-danger">*</span>  </Label>
              <Col>
                <Input  type="text" defaultValue={obtDataCliente.servicios} onChange={handleChange} readOnly/>
                </Col>
                </Col>
                <Col sm={2}>
            <Label  sm={12} >Origen de Venta</Label>
            <Col >
                <Input  type="text" defaultValue={obtDataCliente.venta} onChange={handleChange} readOnly/>
         
            </Col>
            </Col>

            <Col sm={3}>
             <Label  sm={12}>Proveedor de Servicio</Label>
            <Col sm={12}>
                <Input  type="text" defaultValue={obtDataCliente.vendedor} readOnly /> </Col>
             </Col>
             <Col sm={2}>
                         <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input  readOnly  defaultValue={obtDataCliente.email} type="email"/> 
                        </Col>
                        </Col>
             <Col sm={2}>
                        <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input readOnly  defaultValue={obtDataCliente.telefono}  type="text" />
                        </Col>
                         </Col> 
                         <Col sm={1}>
                        <Label sm={12}>Ext </Label>
                        <Col>
                            <Input readOnly type="text"  defaultValue={obtDataCliente.extTel}   />
                            </Col>
                         </Col>
                 </FormGroup>
                 <FormGroup row>
           
                 <Col sm={2}>
                        <Label sm={12}>Deleg/Municipio  </Label>
                        <Col>
                        <Input  readOnly  defaultValue={obtDataCliente.delegacion} type="text" name="delegacionCliente"   /> 
                        </Col>
                         </Col> 
                         <Col sm={2}>
                       
                         <Label  sm={12}>Ciudad/EDO </Label>
                        <Col>
                         <Input  readOnly defaultValue={obtDataCliente.estado}  type="text" name="EDOCliente"    />
                            </Col>
                         </Col>

           <Col sm={4}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="textarea"  defaultValue={obtDataCliente.comentarios} readOnly/> 
            </Col>
            </Col>
                 <Col sm={4}>
                     <Label sm={12} >Dirección  </Label>
                <Col>
                 <Input readOnly   defaultValue={obtDataCliente.direccion} type="textarea" name="direccionCliente"  /> 
                </Col>
                 </Col>
            
                        </FormGroup>
                    
                    </FormGroup>
                
           </fieldset>
           <hr/>
           <fieldset className="fieldset">
                <legend className="ot-color">5. SOLICITANTE DEL AVALÚO</legend>
                <FormGroup >
                
                <FormGroup row>
                <Col sm={2}>
               
                    <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                    <Col >
                        <Input   id="nombreSolicitante" type="text" name="nombreSolicitante"  placeholder={obtDataCliente.nombre} value={nombreSolicitante} onChange={handleChange} /> 
                    </Col> 
                    </Col>
                    <Col sm={2}>
                   
                   <Label sm={12}>Empresa<span className="text-danger solicitante">*</span>  </Label>
                   <Col >
                       <Input     placeholder={obtDataCliente.empresa}  value={empresaSolicitante} type="text" name="empresaSolicitante" onChange={handleChange} /> 
                   </Col> 
                   </Col>
                   <Col sm={2}>
      
                    <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
                    <Col >
                        <Input  type="text"   name="cargo"  placeholder={obtDataCliente.cargo} onChange={handleChange}/> 
                    </Col>
                    </Col> 

                <Col sm={2}>
              
                    <Label sm={12} >RFC </Label>
                    <Col >
                        <Input  type="text" name="rfcSolicitante" placeholder={obtDataCliente.rfc} value={rfcSolicitante} onChange={handleChange}/> 
                    </Col>
                    </Col> 
                    <Col sm={2}>
                    <Label sm={12} >Area <span className="text-danger">*</span>   </Label>
                    <Col >
                        <Input type="text" defaultValue={uge}  placeholder={obtDataCliente.area} readOnly/>
                    </Col>
                    </Col>
                    <Col sm={2}>
            <Label sm={12}> Holding/Particular<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text"   name="holdingSolicitante" value={holdingSolicitante}  placeholder={obtDataCliente.holding} onChange={handleChange} /> 
            </Col>
            </Col>
                    
                </FormGroup>
                <FormGroup row>
                   
                   
            <Col sm={2}>
              <Label sm={12}>Servicio<span className="text-danger">*</span>  </Label>
              <Col>
                <Input  type="text"  name="servicioSolicitante" value={servicioSolicitante}placeholder={obtDataCliente.servicios} onChange={handleChange} />
                </Col>
                </Col>
                <Col sm={2}>
            <Label  sm={12} >Origen de Venta</Label>
            <Col >
                <Input  name="ventaSolcitante" value={ventaSolicitante} type="text" placeholder={obtDataCliente.venta} onChange={handleChange} />
         
            </Col>
            </Col>
            <Col sm={3}>
             <Label  sm={12}>Proveedor de Servicio</Label>
            <Col sm={12}>
                <Input  type="text" value={getName}  /> </Col>
             </Col>
             <Col sm={2}>
                     <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input    type="email" name="emailSolicitante"  placeholder={obtDataCliente.email} value={emailSolicitante} onChange={handleChange} /> 
                    </Col>
                    </Col>
             <Col sm={2}>
                    <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input     type="text" name="telSolicitante" value={telSolicitante} placeholder={obtDataCliente.telefono} onChange={handleChange}/>
                    </Col>
                     </Col> 
                     <Col sm={1}>
                    <Label sm={12}>Exten </Label>
                    <Col>
                        <Input   type="text"   name="extTelSolicitante"  placeholder={obtDataCliente.extTel} value={extTelSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>
                </FormGroup>
                <FormGroup row>
          
          
                <Col sm={2}>
                    <Label sm={12}>Deleg/Municipio  </Label>
                    <Col>
                    <Input    type="text" name="delegacionSolicitante"    placeholder={obtDataCliente.delegacion} value={delegacionSolicitante} onChange={handleChange} /> 
                    </Col>
                     </Col> 
                     <Col sm={2}>
                   
                     <Label  sm={12}>Ciudad/EDO </Label>
                    <Col>
                     <Input   type="text" name="EDOSolicitante"  placeholder={obtDataCliente.estado} value={EDOSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>

           <Col sm={4}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="textarea"  name="comentariosSolicitante" value={comentariosSolicitante}placeholder={obtDataCliente.comentarios} /> 
            </Col>
            </Col>
            <Col sm={4}>
                    <Label sm={12} >Dirección  </Label>
                    <Col sm={12}>
                    <Input    type="textarea" name="direccionSolicitante" placeholder={obtDataCliente.direccion} value={direccionSolicitante} onChange={handleChange} /> 
                    </Col>
        </Col>
            
            </FormGroup>
            
               
                </FormGroup>
            </fieldset>
            <hr/>
           
            <FormGroup row>

            <Col sm={6}>
            <fieldset className="fieldset">
            <legend className="ot-color ">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </legend>
             
           <FormGroup row>
              <Col sm={3}>
              <Label sm={12}>Objetivo </Label>
              <Col>
                <Input  type="text" readOnly defaultValue={obtDataCliente.servicios}></Input>
              
                </Col>
                </Col>
                <Col sm={9}>
                <Label sm={12}>Otro Objetivo </Label>
                    <Col >
                    <Input  type="textarea" name="otroObj" value={otroObj} onChange={handleChange} /> 
                    </Col>
                    </Col>
                </FormGroup>
           
            </fieldset>
            </Col> 
            <Col sm={6}>
            <fieldset >
            <legend className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </legend>
             
            <FormGroup row>
               <Col sm={3}>
                   <Label sm={12}> Propósito</Label>
                   <Col >
                <Input  type="select" name="proposito" value={proposito} onChange={handleChange} > 
                
                <option value="">Selecciona</option>
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
                </Col>
                </Col>
            <Col sm={9}>       
                <Label sm={12} >Otro Propósito</Label>
                <Col >
                <Input type="textarea" name="otroProp" value={otroProp} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            <hr/>
            <FormGroup className="mb-0">
           
            
            <fieldset className="fieldset">
            <legend className="ot-color">8. INSPECCIÓN FÍSICA</legend>
            <FormGroup row>
                <Col sm={4}>
                <Label sm={12} >Presentarse con <span className="text-danger">*</span> </Label>
                <Col >
                <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange} required/> 
                </Col>
                </Col>
                <Col sm={3}>
                <Label sm={12} >Visitador</Label>
                 <Col >
                 
                 <Input type="select" name="visitador" value={visitador} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                    {listaVisitador.map(item =>(

                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                 </Col>
                </Col>
          
                <Col sm={2}>
                <Label sm={12}>Fecha <span className="text-danger">*</span>  </Label>
                <Col >
                <Input type="date" name="fechaIns" value={fechaIns}  onChange={handleChange}required/>
                </Col>
                </Col>
           
                <Col sm={2}>
                <Label sm={12}>Teléfono</Label>
                 <Col >
                 <Input  type="text" name="telInsp" value={telInsp} onChange={handleChange} /> 
                 </Col>
                </Col>
                <Col sm={1}>
                <Label sm={12} >Ext </Label>
                <Col >
                <Input  type="text" name="extInsp" value={extInsp} onChange={handleChange}  /> 
                </Col>
                </Col>
               </FormGroup>
               <FormGroup row >
                <Col sm={2}>
                <Label sm={12} >Correo </Label>
                <Col>
                <Input  type="email" name="emailInsp" value={emailInsp} onChange={handleChange} /> 
                </Col>
                </Col>
           
           
                <Col sm={5}>
                <Label sm={12}>Direccion  <span className="text-danger">*</span> </Label>
                <Col sm={12}>
                <Input  type="textarea" name="dirInsp" value={dirInsp} onChange={handleChange}  required/> 
                </Col>
                </Col>
                <Col sm={5}>
                <Label sm={12} >Observaciones</Label>
                <Col sm={12}>
                <Input type="textarea" name="observaciones" value={observaciones} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
           
            </FormGroup>
            <hr/>
            <FormGroup row>
            <Col sm={6}>
            <fieldset className="fieldset">
            <legend sm={12} className="ot-color">9. BIENES A VALUAR<span className="text-danger">*</span> </legend>
            <FormGroup row>
                <Col sm={3}>
                    <Label sm={12}>Bienes</Label>
                    <Col>
                <Input  type="select" name="bienes" value={bienes} onChange={handleChange} >
                    <option value="">Selecciona</option>
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
                </Col>
                
                </Col>
          
               <Col sm={9}>
                <Label sm={12} >Otros Bienes </Label>
                <Col >
                <Input type="textarea" name="otroBien" value={otroBien} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
           
            <Col sm={6}>
           
            <fieldset className="fieldset">
            <legend className="ot-color">10. INFORMACIÓN PROPORCIONADA</legend>      
            <FormGroup row>
             <Col sm={3}>
                 <Label sm={12}>Información</Label>
                 <Col>
            <Input  type="select" name="info" value={info} onChange={handleChange} >
                <option value="">Selecciona</option>
                <option value="AVALÚO ANTERIOR">AVALÚO ANTERIOR</option>
                <option value="BOLETA DE AGUA">BOLETA DE AGUA</option>
                <option value="BOLETA PREDIAL">BOLETA PREDIAL</option>
                <option value="CATÁLOGO DE ARRENDAMIENTO">CATÁLOGO DE ARRENDAMIENTO</option>
                <option value="CATÁLOGO DE CUENTAS">CATÁLOGO DE CUENTAS</option>
                <option value="CONTRATO DE COMPRA-VENTA">CONTRATO DE COMPRA-VENTA</option>
                <option value="ESCRITURAS">ESCRITURAS</option>
                <option value="FACTURA">FACTURA</option>   
                <option value="FOLIO REAL">FOLIO REAL</option>
                <option value="LISTADO CONTABLE">LISTADO CONTABLE</option>
                <option value="LISTA DE ACTIVO FIJO">LISTA DE ACTIVO FIJO</option>
                <option value="LISTA DE PROVEEDORES">LISTA DE PROVEEDORES</option>
                <option value="OFICIO">OFICIO</option>
                <option value="ORDEN DE COMPRA">ORDEN DE COMPRA</option>
                <option value="PEDIMIENTO DE IMPORTACIÓN">PEDIMIENTO DE IMPORTACIÓN</option>
                <option value="PLACAS O ETIQUETAS">PLACAS O ETIQUETAS</option>   
            </Input> 
            </Col>
            </Col>
          <Col sm={9}>
            <Label sm={12}>Otra Información</Label>
            <Col >
            <Input  type="textarea" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
            </Col>
            </Col>
            </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            <hr/>
           <FormGroup row id="formOcultar" className="algo ">
                
            <Col sm={4}>
            <fieldset className="fieldset ml-3">
            <legend className="ot-color">11. FECHAS <span className="text-danger">*</span> </legend>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={10} >Inicio de Proyecto </Label>
                <Col >
                    <Input name="inicio" value={inicio} type="date" onChange={handleChange} required/>
                </Col>
                </Col>
              
                <Col sm={6}>
                <Label sm={12}>Entrega de Proyecto</Label>
                <Col>
                <Input name="entrega" value={entrega} type="date" onChange={handleChange} required/>
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
            
            <Col sm={8}>
                
            <fieldset className="fieldset" ><legend className="color-gray">Todos los montos son sin objeto de IVA <span className="text-danger">*</span> </legend>
            
            <FormGroup row >
                     <Col sm={3}>
                    <Label  sm={12}className="ot-color">PRESUPUESTO</Label>
                    <Col >
                    <Input  type="number" name="presupuesto" value={presupuesto} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                    <Col sm={3}>
                    <Label  sm={12}className="ot-color">COMISIÓN EXTERNA</Label>
                    <Col >
                    <Input  type="number" name="comision" value={comision} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                    <Col sm={3}>
                    <Label sm={12}className="ot-color">MONTO NETO VENDIDO <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input readOnly  type="number" name="montoVendido" placeholder={montoVendido}  /> 
                    
                    </Col>
                    </Col>
                   
             
                    <Col sm={3}>
                    <Label sm={11}className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input name="facturar" value={facturar} type="select" onChange={handleChange}required>
                        <option value="">-</option>
                        <option value="SI">SI</option>
                        <option value="NO"> NO</option>
                    </Input>
                    </Col>
                    </Col>
                </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            
        <Button id="ocultarEnviar" className="button-enviar" type="submit"  >Enviar</Button><br/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-inner"
          overlayClassName="Overlay"
        
          > 
             <div>
              <h5 className="text-info text-center">Orden Creada</h5>
              <hr/>
              <Button color="info" className="mr-1"><Link onClick={closeModal} className="text-white" to="./ListaOrdenes" > Ver Lista </Link></Button>       
              <Button color="info" className="float-right"  onClick={crearNuevo}>Crear Nuevo</Button>
              
             
                    <hr/>   
                    <Button color="success" onClick={this.imprimir}>Guardar PDF</Button>
             </div>
           
            
         </Modal>
        </Form>
        </div>
        )

    }else{

        return ( 
            //Ceacion formulario
            <div id="OrdenCreada" className="div-form imprimir">
            
            <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmit}>
           
               
                <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
                <br/>
                <fieldset className="fieldset">
            <FormGroup  row>
            <Col sm={2}>
                    <Label sm={12}  >CLAVE </Label>
                    <Col >
                        <Input  type="text"   readOnly placeholder={nuevaClave}    >
                      
                            
                            </Input>
                    </Col>
                    </Col>  
            <Col sm={3}>
                 <Label sm={12} >UGE <span className="text-danger ">*</span>   </Label>
                 <Col >
                 <Input type="select"  className="obligatorio resetear" name="uge" value={uge} onChange={handleSelectUge} required>
                        <option value="" selected>Selecciona</option>
                        <option value="CIVIL">CIVIL</option>
                         <option value="FINANCIERA">FINANCIERA</option>
                         <option value="INDUSTRIAL">INDUSTRIAL</option>
                         <option value="CIVIL-INDUSTRIAL">CIVIL-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA">CIVIL-FINANCIERA</option>
                         <option value="FINANCIERA-INDUSTRIAL">FINANCIERA-INDUSTRIAL</option>
                         <option value="CIVIL-FINANCIERA-INDUSTRIAL">CIVIL-FINANCIERA-INDUSTRIAL</option>
            </Input>
                 </Col>
                 </Col>
         
                <Col sm={2}>
                <Label sm={12}  >Vendedor Ejecutivo <span className="text-danger">*</span> </Label>
                <Col >
                    <Input    type="tet" name="vendedor" placeholder={getName} >
                   
                        </Input>
                </Col>
                </Col>
                <Col sm={2}>
                <Label sm={12} >Fecha</Label>
                <Col > 
                    <Input  readOnly name="dateNew" value={dateNew}  type="text"/>
                </Col> 
                </Col>  
                <Col sm={3}>
                    <Label  sm={12}>Copia para <span className="text-danger">*</span> </Label>
                <Col >
                    <Input  type="select" name="copia"  value={copia} onChange={handleChange} required>
                        <option value="">Selecciona</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="DIRECCION">DIRECCION</option>
                        <option value="FINANZAS">FINANZAS</option>
                        <option value="INDUSTRIAL">INDUSTRIAL</option>
                        <option value="ADMINISTRACION">ADMINISTRACIÓN O CONTABILIDAD</option>
                        <option value="CIV-IND">CIVIL-INDUSTRIAL</option>
                        <option value="CIV-FIN">CIVIL-FINANZAS</option>
                        <option value="FIN-IND">FINANZAS-INDUSTRIAL</option>
                        <option value="IND-PROD">INDUSTRIAL-PRODUCCIÓN</option>
                        <option value="CIV-FIN-IND">CIVIL-FINANZAS-INDUSTRIAL</option>
                    </Input>
                </Col>
                </Col> 
                </FormGroup> 
                <FormGroup row>          
                <Col sm={3}>
                  
                  
            <Label  sm={12} className="ot-color ">1. TIPO DE OFERTA </Label>
            <Col >
                <Input  type="select" name="oferta" value={oferta} onChange={handleChange} >
                <option value="">Selecciona</option>
                <option value="PROPIO">PROPIO</option>
                <option value="CEDIDO">CEDIDO</option>
                <option value="MARKETING DIGITAL">MARKETING DIGITAL</option>
                <option value="ASOCIADO">ASOCIADO</option>
                
                </Input>
            </Col>
            </Col>
           <Col sm={3}>
                <Label sm={12} className="ot-color label-input">1.1 CEDIDO DE  </Label>
                <Col >
                <Input  type="text" name="cedido" className="resetear" value={cedido} onChange={handleChange} />
                </Col>
           </Col>
           
                <Col sm={3}>
                <Label sm={12} className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger">*</span>  </Label>
                <Col >
                <Input  type="select" name="proyecto" value={proyecto} onChange={handleChange} required>
                <option value="">Selecciona</option>
                    <option value="MICRO">MICRO</option>
                    <option value="MECRO">MECRO</option>
                    <option value="MACRO">MACRO</option>
                </Input>
                </Col>
                </Col>
                <Col sm={3}>
                <Label sm={12} className="ot-color label-input">3. TIPO DE CLIENTE <span className="text-danger">*</span> </Label>
                <Col >
                    <Input   type="select" name="tipoCliente" value={tipoCliente} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                        <option value="NUEVO">NUEVO</option>
                        <option value="CONTINUO">CONTINUO</option>
                        <option value="PROSPECTO">PROSPECTO</option>
                    </Input>
                </Col>               
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color">4. DATOS DEL CLIENTE</legend>
            <FormGroup >
                
                <FormGroup row id="ocul" className="hola">
                <Col sm={2}></Col>
                <Label sm={10} >Selecciona por: </Label>
                <Col sm={2}></Col>
                <Col sm={3}>
                <Input type="select" id="clienteSelect"  onChange={handleEmpresa}>
                    <option value="" >Cliente</option>
                    {nombresClientes.map(item =>(

                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                </Col>
                <Col sm={2}></Col>
                <Col sm={3}>
              
                
                <Input type="select"   onChange={handleCliente}>
                    <option value="">Empresa</option>
                    {nombresEmpresas.map(item =>(
                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                </Col>
                <Col sm={2}></Col>
                </FormGroup>
                <FormGroup row>
                  
                    <Col sm={2}>
                   
                        <Label sm={12}>Cliente<span className="text-danger">*</span>  </Label>
                        <Col >
                            <Input readOnly defaultValue={obtDataCliente.nombre} className="form-size" type="text" name="nombreCliente" /> 
                        </Col> 
                        </Col>
                        <Col sm={2}>
                   
                   <Label sm={12}>Empresa<span className="text-danger">*</span>  </Label>
                   <Col >
                       <Input  readOnly defaultValue={obtDataCliente.empresa} className="form-size" type="text" name="empresa" /> 
                   </Col> 
                   </Col>
                   <Col sm={2}>
      
      <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text"  defaultValue={obtDataCliente.cargo} readOnly/> 
      </Col>
      </Col> 
        <Col sm={2}>
    
                 <Label sm={12} >RFC </Label>
                <Col >
                                        <Input  defaultValue={obtDataCliente.rfc}  type="text" readOnly/> 
                </Col>
                </Col> 
                        
                    
                    <Col sm={2}>
                 <Label sm={12} >Area <span className="text-danger">*</span>   </Label>
                 <Col >
                     <Input type="text"   defaultValue={obtDataCliente.area} readOnly/>
                 </Col>
                 </Col>
                  <Col sm={2}>
            <Label sm={12}> Holding<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text"  defaultValue={obtDataCliente.holding} onChange={handleChange} readOnly/> 
            </Col>
            </Col>
            <Col sm={2}>
              <Label sm={12}>Servicio<span className="text-danger">*</span>  </Label>
              <Col>
                <Input  type="text" defaultValue={obtDataCliente.servicios} onChange={handleChange} readOnly/>
                </Col>
                </Col>
                <Col sm={2}>
            <Label  sm={12} >Origen de Venta</Label>
            <Col >
                <Input  type="text" defaultValue={obtDataCliente.venta} onChange={handleChange} readOnly/>
         
            </Col>
            </Col>

            <Col sm={3}>
             <Label  sm={12}>Proveedor de Servicio</Label>
            <Col sm={12}>
                <Input  type="text" defaultValue={obtDataCliente.vendedor} readOnly /> </Col>
             </Col>
             <Col sm={2}>
                         <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input  readOnly  defaultValue={obtDataCliente.email} type="email"/> 
                        </Col>
                        </Col>
             <Col sm={2}>
                        <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input readOnly  defaultValue={obtDataCliente.telefono}  type="text" />
                        </Col>
                         </Col> 
                         <Col sm={1}>
                        <Label sm={12}>Ext </Label>
                        <Col>
                            <Input readOnly type="text"  defaultValue={obtDataCliente.extTel}   />
                            </Col>
                         </Col>
                 </FormGroup>
                 <FormGroup row>
           
                 <Col sm={2}>
                        <Label sm={12}>Deleg/Municipio  </Label>
                        <Col>
                        <Input  readOnly  defaultValue={obtDataCliente.delegacion} type="text" name="delegacionCliente"   /> 
                        </Col>
                         </Col> 
                         <Col sm={2}>
                       
                         <Label  sm={12}>Ciudad/EDO </Label>
                        <Col>
                         <Input  readOnly defaultValue={obtDataCliente.estado}  type="text" name="EDOCliente"    />
                            </Col>
                         </Col>

           <Col sm={4}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="textarea"  defaultValue={obtDataCliente.comentarios} readOnly/> 
            </Col>
            </Col>
                 <Col sm={4}>
                     <Label sm={12} >Dirección  </Label>
                <Col>
                 <Input readOnly   defaultValue={obtDataCliente.direccion} type="textarea" name="direccionCliente"  /> 
                </Col>
                 </Col>
            
                        </FormGroup>
                    
                    </FormGroup>
                
           </fieldset>
           <hr/>
           <fieldset className="fieldset">
                <legend className="ot-color">5. SOLICITANTE DEL AVALÚO</legend>
                <FormGroup >
                
                <FormGroup row>
                <Col sm={2}>
               
                    <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                    <Col >
                        <Input   id="nombreSolicitante" type="text" name="nombreSolicitante"  placeholder={obtDataCliente.nombre} value={nombreSolicitante} onChange={handleChange} /> 
                    </Col> 
                    </Col>
                    <Col sm={2}>
                   
                   <Label sm={12}>Empresa<span className="text-danger solicitante">*</span>  </Label>
                   <Col >
                       <Input     placeholder={obtDataCliente.empresa}  value={empresaSolicitante} type="text" name="empresaSolicitante" onChange={handleChange} /> 
                   </Col> 
                   </Col>
                   <Col sm={2}>
      
                    <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
                    <Col >
                        <Input  type="text"   name="cargo"  placeholder={obtDataCliente.cargo} onChange={handleChange}/> 
                    </Col>
                    </Col> 

                <Col sm={2}>
              
                    <Label sm={12} >RFC </Label>
                    <Col >
                        <Input  type="text" name="rfcSolicitante" placeholder={obtDataCliente.rfc} value={rfcSolicitante} onChange={handleChange}/> 
                    </Col>
                    </Col> 
                    <Col sm={2}>
                    <Label sm={12} >Area <span className="text-danger">*</span>   </Label>
                    <Col >
                        <Input type="text" defaultValue={uge}  placeholder={obtDataCliente.area} readOnly/>
                    </Col>
                    </Col>
                    <Col sm={2}>
            <Label sm={12}> Holding/Particular<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text"   name="holdingSolicitante" value={holdingSolicitante}  placeholder={obtDataCliente.holding} onChange={handleChange} /> 
            </Col>
            </Col>
                    
                </FormGroup>
                <FormGroup row>
                   
                   
            <Col sm={2}>
              <Label sm={12}>Servicio<span className="text-danger">*</span>  </Label>
              <Col>
                <Input  type="text"  name="servicioSolicitante" value={servicioSolicitante}placeholder={obtDataCliente.servicios} onChange={handleChange} />
                </Col>
                </Col>
                <Col sm={2}>
            <Label  sm={12} >Origen de Venta</Label>
            <Col >
                <Input  name="ventaSolcitante" value={ventaSolicitante} type="text" placeholder={obtDataCliente.venta} onChange={handleChange} />
         
            </Col>
            </Col>
            <Col sm={3}>
             <Label  sm={12}>Proveedor de Servicio</Label>
            <Col sm={12}>
                <Input  type="text" value={getName}  /> </Col>
             </Col>
             <Col sm={2}>
                     <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input    type="email" name="emailSolicitante"  placeholder={obtDataCliente.email} value={emailSolicitante} onChange={handleChange} /> 
                    </Col>
                    </Col>
             <Col sm={2}>
                    <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input     type="text" name="telSolicitante" value={telSolicitante} placeholder={obtDataCliente.telefono} onChange={handleChange}/>
                    </Col>
                     </Col> 
                     <Col sm={1}>
                    <Label sm={12}>Exten </Label>
                    <Col>
                        <Input   type="text"   name="extTelSolicitante"  placeholder={obtDataCliente.extTel} value={extTelSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>
                </FormGroup>
                <FormGroup row>
          
          
                <Col sm={2}>
                    <Label sm={12}>Deleg/Municipio  </Label>
                    <Col>
                    <Input    type="text" name="delegacionSolicitante"    placeholder={obtDataCliente.delegacion} value={delegacionSolicitante} onChange={handleChange} /> 
                    </Col>
                     </Col> 
                     <Col sm={2}>
                   
                     <Label  sm={12}>Ciudad/EDO </Label>
                    <Col>
                     <Input   type="text" name="EDOSolicitante"  placeholder={obtDataCliente.estado} value={EDOSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>

           <Col sm={4}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="textarea"  name="comentariosSolicitante" value={comentariosSolicitante}placeholder={obtDataCliente.comentarios} /> 
            </Col>
            </Col>
            <Col sm={4}>
                    <Label sm={12} >Dirección  </Label>
                    <Col sm={12}>
                    <Input    type="textarea" name="direccionSolicitante" placeholder={obtDataCliente.direccion} value={direccionSolicitante} onChange={handleChange} /> 
                    </Col>
        </Col>
            
            </FormGroup>
            
               
                </FormGroup>
            </fieldset>
            <hr/>
           
            <FormGroup row>

            <Col sm={6}>
            <fieldset className="fieldset">
            <legend className="ot-color ">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </legend>
             
           <FormGroup row>
              <Col sm={3}>
              <Label sm={12}>Objetivo </Label>
              <Col>
                <Input  type="text" readOnly defaultValue={obtDataCliente.servicios}></Input>
              
                </Col>
                </Col>
                <Col sm={9}>
                <Label sm={12}>Otro Objetivo </Label>
                    <Col >
                    <Input  type="textarea" name="otroObj" value={otroObj} onChange={handleChange} /> 
                    </Col>
                    </Col>
                </FormGroup>
           
            </fieldset>
            </Col> 
            <Col sm={6}>
            <fieldset >
            <legend className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </legend>
             
            <FormGroup row>
               <Col sm={3}>
                   <Label sm={12}> Propósito</Label>
                   <Col >
                <Input  type="select" name="proposito" value={proposito} onChange={handleChange} > 
                
                <option value="">Selecciona</option>
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
                </Col>
                </Col>
            <Col sm={9}>       
                <Label sm={12} >Otro Propósito</Label>
                <Col >
                <Input type="textarea" name="otroProp" value={otroProp} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            <hr/>
            <FormGroup>
           
            
            <fieldset className="fieldset">
            <legend className="ot-color">8. INSPECCIÓN FÍSICA</legend>
            <FormGroup row>
                <Col sm={4}>
                <Label sm={12} >Presentarse con <span className="text-danger">*</span> </Label>
                <Col >
                <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange} required/> 
                </Col>
                </Col>
                <Col sm={3}>
                <Label sm={12} >Visitador</Label>
                 <Col >
                 
                 <Input type="select" name="visitador" value={visitador} onChange={handleChange} required>
                    <option value="">Selecciona</option>
                    {listaVisitador.map(item =>(

                        <option value={item}>{item}</option>
                    )
                    )
                    }

                </Input>
                 </Col>
                </Col>
          
                <Col sm={2}>
                <Label sm={12}>Fecha <span className="text-danger">*</span>  </Label>
                <Col >
                <Input type="date" name="fechaIns" value={fechaIns}  onChange={handleChange}required/>
                </Col>
                </Col>
           
                <Col sm={2}>
                <Label sm={12}>Teléfono</Label>
                 <Col >
                 <Input  type="text" name="telInsp" value={telInsp} onChange={handleChange} /> 
                 </Col>
                </Col>
                <Col sm={1}>
                <Label sm={12} >Ext </Label>
                <Col >
                <Input  type="text" name="extInsp" value={extInsp} onChange={handleChange}  /> 
                </Col>
                </Col>
               </FormGroup>
               <FormGroup row >
                <Col sm={2}>
                <Label sm={12} >Correo </Label>
                <Col>
                <Input  type="email" name="emailInsp" value={emailInsp} onChange={handleChange} /> 
                </Col>
                </Col>
           
           
                <Col sm={5}>
                <Label sm={12}>Direccion  <span className="text-danger">*</span> </Label>
                <Col sm={12}>
                <Input  type="textarea" name="dirInsp" value={dirInsp} onChange={handleChange}  required/> 
                </Col>
                </Col>
                <Col sm={5}>
                <Label sm={12} >Observaciones</Label>
                <Col sm={12}>
                <Input type="textarea" name="observaciones" value={observaciones} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
           
            </FormGroup>
            <hr/>
            <FormGroup row>
            <Col sm={6}>
            <fieldset className="fieldset">
            <legend sm={12} className="ot-color">9. BIENES A VALUAR<span className="text-danger">*</span> </legend>
            <FormGroup row>
                <Col sm={3}>
                    <Label sm={12}>Bienes</Label>
                    <Col>
                <Input  type="select" name="bienes" value={bienes} onChange={handleChange} >
                    <option value="">Selecciona</option>
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
                </Col>
                
                </Col>
          
               <Col sm={9}>
                <Label sm={12} >Otros Bienes </Label>
                <Col >
                <Input type="textarea" name="otroBien" value={otroBien} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
           
            <Col sm={6}>
           
            <fieldset className="fieldset">
            <legend className="ot-color">10. INFORMACIÓN PROPORCIONADA</legend>      
            <FormGroup row>
             <Col sm={3}>
                 <Label sm={12}>Información</Label>
                 <Col>
            <Input  type="select" name="info" value={info} onChange={handleChange} >
                <option value="">Selecciona</option>
                <option value="AVALÚO ANTERIOR">AVALÚO ANTERIOR</option>
                <option value="BOLETA DE AGUA">BOLETA DE AGUA</option>
                <option value="BOLETA PREDIAL">BOLETA PREDIAL</option>
                <option value="CATÁLOGO DE ARRENDAMIENTO">CATÁLOGO DE ARRENDAMIENTO</option>
                <option value="CATÁLOGO DE CUENTAS">CATÁLOGO DE CUENTAS</option>
                <option value="CONTRATO DE COMPRA-VENTA">CONTRATO DE COMPRA-VENTA</option>
                <option value="ESCRITURAS">ESCRITURAS</option>
                <option value="FACTURA">FACTURA</option>   
                <option value="FOLIO REAL">FOLIO REAL</option>
                <option value="LISTADO CONTABLE">LISTADO CONTABLE</option>
                <option value="LISTA DE ACTIVO FIJO">LISTA DE ACTIVO FIJO</option>
                <option value="LISTA DE PROVEEDORES">LISTA DE PROVEEDORES</option>
                <option value="OFICIO">OFICIO</option>
                <option value="ORDEN DE COMPRA">ORDEN DE COMPRA</option>
                <option value="PEDIMIENTO DE IMPORTACIÓN">PEDIMIENTO DE IMPORTACIÓN</option>
                <option value="PLACAS O ETIQUETAS">PLACAS O ETIQUETAS</option>   
            </Input> 
            </Col>
            </Col>
          <Col sm={9}>
            <Label sm={12}>Otra Información</Label>
            <Col >
            <Input  type="textarea" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
            </Col>
            </Col>
            </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            <hr/>
           <FormGroup row id="formOcultar" className="algo ">
                
            <Col sm={4}>
            <fieldset className="fieldset">
            <legend className="ot-color">11. FECHAS <span className="text-danger">*</span> </legend>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={10} >Inicio de Proyecto </Label>
                <Col >
                    <Input name="inicio" value={inicio} type="date" onChange={handleChange} required/>
                </Col>
                </Col>
              
                <Col sm={6}>
                <Label sm={12}>Entrega de Proyecto</Label>
                <Col>
                <Input name="entrega" value={entrega} type="date" onChange={handleChange} required/>
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            </Col>
            
            <Col sm={8}>
                
            <fieldset className="fieldset"><legend className="color-gray">Todos los montos son sin objeto de IVA <span className="text-danger">*</span> </legend>
            
            <FormGroup row >
                     <Col sm={3}>
                    <Label  sm={12}className="ot-color">PRESUPUESTO</Label>
                    <Col >
                    <Input  type="number" name="presupuesto" value={presupuesto} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                    <Col sm={3}>
                    <Label  sm={12}className="ot-color">COMISIÓN EXTERNA</Label>
                    <Col >
                    <Input  type="number" name="comision" value={comision} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                    <Col sm={3}>
                    <Label sm={12}className="ot-color">MONTO NETO VENDIDO <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input readOnly  type="number" name="montoVendido" placeholder={montoVendido}  /> 
                    
                    </Col>
                    </Col>
                   
             
                    <Col sm={3}>
                    <Label sm={11}className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input name="facturar" value={facturar} type="select" onChange={handleChange}required>
                        <option value="">-</option>
                        <option value="SI">SI</option>
                        <option value="NO"> NO</option>
                    </Input>
                    </Col>
                    </Col>
                </FormGroup>
            </fieldset>
            </Col>
            </FormGroup>
            
        <Button id="ocultarEnviar" className="button-enviar" type="submit"  >Enviar</Button><br/>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-inner"
          overlayClassName="Overlay"
        
          > 
             <div>
              <h5 className="text-info text-center">Orden Creada</h5>
              <hr/>
              <Button color="info" className="mr-1"><Link onClick={closeModal} className="text-white" to="./ListaOrdenes" > Ver Lista </Link></Button>       
              <Button color="info" className="float-right"  onClick={crearNuevo}>Crear Nuevo</Button>
              
             
                    <hr/>   
                    <Button color="success" onClick={this.imprimir}>Guardar PDF</Button>
             </div>
           
            
         </Modal>
        </Form>
        </div>
        )

    }
}
}
export default OrdenTrabajo;