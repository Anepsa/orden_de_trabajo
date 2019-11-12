import React from 'react';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


class  OrdenTrabajo extends React.Component {
    constructor() {
        super();
    
        this.imprimir = this.imprimir.bind(this);
        this.crearNuevo = this.crearNuevo.bind(this)
    
     
      }
    
    imprimir(){
            const {closeModal} = this.context
            closeModal()
            // .then(() =>{
            //     window.print()
            // })
            setTimeout(()=>{ window.print(); }, 100);
            
               
    }
    crearNuevo(){
        const {closeModal} = this.context
        closeModal()
        document.getElementById("formClear").reset();

    }
    
  
    render(){

    
        
    const{ rol,nombresClientes, nombresEmpresas, handleSelectUge, listaVisitador, handleCliente, obtDataCliente, handleEmpresa, getName, vendedor,uge,  copia,  oferta,
    fechaIns, inicio, entrega, 
    cedido, proyecto, tipoCliente,  
    nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante,  EDOSolicitante, telSolicitante, extTelSolicitante, emailSolicitante,
     objetivo, otroObj, proposito, otroProp,
    presentarse, visitador,
    telInsp, emailInsp, dirInsp, observaciones,
    bienes,otroBien,presupuesto, comision, montoVendido, facturar, modalIsOpen,  dateNew, info, otraInfo,  message, extInsp, handleChange ,handleSubmit, closeModal, } = this.context
    if(rol === "admin"){
    return ( 
        //Ceacion formulario
        <div id="OrdenCreada"className="div-form">
            
            <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmit}>
           
               
                <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
                <br/>
                <fieldset className="fieldset">
            <FormGroup  row>
                
            <Col sm={3}>
                 <Label sm={12} >UGE <span className="text-danger">*</span>   </Label>
                 <Col >
                     <Input type="select"  className="obligatorio" name="uge" value={uge} onChange={handleSelectUge} required>
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
         
                <Col sm={3}>
                <Label sm={12}  >Vendedor Ejecutivo <span className="text-danger">*</span> </Label>
                <Col >
                    <Input   className="obligatorio" type="select" name="vendedor" value={vendedor} onChange={handleChange} required >
                    <option value="" selected>Selecciona</option>
                        <option value="Ameyalli Brito González">Ame</option>
                        <option value="Yozebeth Brito González">Yoz</option>
                        <option value="Lazo Santiago Rubens">Lazo Santiago Rubens</option>
                        <option value="Vicente Galicia Salazar">Vicente Galicia Salazar</option>
                        <option value="America Jimenez Carlon">America Jimenez Carlon</option>
                        <option value="Daniel Hurtado Sanchez">Daniel Hurtado Sanchez</option>
                        
                        </Input>
                </Col>
                </Col>
                <Col sm={3}>
                <Label sm={12} >Fecha OT</Label>
                <Col > 
                    <Input  readOnly name="dateNew" value={dateNew}  type="text"/>
                </Col> 
                </Col>  
                <Col sm={3}>
                    <Label  sm={12}>Copia para <span className="text-danger">*</span> </Label>
                <Col >
                    <Input  type="select" name="copia"  value={copia} onChange={handleChange} required>
                        <option value="">Selecciona</option>
                        <option value="civil">Civil</option>
                        <option value="direccion">Direccion</option>
                        <option value="finanzas">Finanzas</option>
                        <option value="industrial">Industrial</option>
                        <option value="administracion">Administracion o Contabilidad</option>
                        <option value="civ-ind">Civil-Industrial</option>
                        <option value="civ-fin">Civil-Finanzas</option>
                        <option value="fin-ind">Finanzas-Industrial</option>
                        <option value="ind-prod">Industrial-Producción</option>
                        <option value="civ-fin-ind">Civil-Finanzas-Industrial</option>
                    </Input>
                </Col>
                </Col>
                
            </FormGroup>
            </fieldset>
            <Col><hr/></Col>
            <fieldset className="fieldset">
            <FormGroup  row>
            
                <Col sm={3}>
            <Label  sm={12} className="ot-color label-input">1. TIPO DE OFERTA </Label>
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
                <Input  type="text" name="cedido" value={cedido} onChange={handleChange} />
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
                
                <FormGroup row>
                <Col sm={2}></Col>
                <Label sm={10} >Selecciona por: </Label>
                <Col sm={2}></Col>
                <Col sm={3}>
                <Input type="select"  onChange={handleEmpresa}>
                    <option value="">Cliente</option>
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
                  
                    <Col sm={5}>
                   
                        <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                        <Col >
                            <Input readOnly  value={obtDataCliente.nombre} className="form-size" type="text" name="nombreCliente" /> 
                        </Col> 
                        </Col>
                        <Col sm={3}>
                   
                   <Label sm={12}>Empresa<span className="text-danger">*</span>  </Label>
                   <Col >
                       <Input  readOnly value={obtDataCliente.empresa} className="form-size" type="text" name="empresa" /> 
                   </Col> 
                   </Col>
                    <Col sm={4}>
                  
                        <Label sm={12} >RFC </Label>
                        <Col >
                            <Input readOnly value={obtDataCliente.rfc}  type="text" name="rfcCliente" /> 
                        </Col>
                        </Col> 
                        
                    </FormGroup>
                   
                        <Label sm={12} >Dirección  </Label>
                        <Col sm={12}>
                        <Input readOnly   value={obtDataCliente.direccion} type="text" name="direccionCliente"  /> 
                        </Col>
                    </FormGroup>
                    <FormGroup row>  
                        <Col sm={4}>
                        <Label sm={12}>Deleg/Municipio  </Label>
                        <Col>
                        <Input  readOnly  value={obtDataCliente.delegacion} type="text" name="delegacionCliente"   /> 
                        </Col>
                         </Col> 
                         <Col sm={4}>
                       
                         <Label  sm={12}>Ciudad/EDO </Label>
                        <Col>
                         <Input  readOnly value={obtDataCliente.estado}  type="text" name="EDOCliente"    />
                            </Col>
                         </Col>
                         <Col sm={4}>
                         <Label  sm={12}>Atención </Label>
                        <Col sm={12}>
                            <Input  readOnly value={obtDataCliente.atencion} type="text" name="atencion"  /> </Col>
                         </Col>
                    </FormGroup>
                   
                    <FormGroup row>  
                        <Col sm={4}>
                        <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input readOnly  value={obtDataCliente.telefono}  type="text" name="telCliente"  />
                        </Col>
                         </Col> 
                         <Col sm={2}>
                        <Label sm={12}>Exten </Label>
                        <Col>
                            <Input readOnly type="text"   name="extTel"  />
                            </Col>
                         </Col>
                         <Col sm={6}>
                         <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                        <Col>
                        <Input  readOnly  value={obtDataCliente.email} type="email" name="emailCliente"/> 
                        </Col>
                        </Col>
                    </FormGroup>
                
           </fieldset>
           <hr/>
           <fieldset className="fieldset">
                <legend className="ot-color">5. SOLICITANTE DEL AVALÚO</legend>
                <FormGroup >
                
                <FormGroup row>
                <Col sm={5}>
               
                    <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                    <Col >
                        <Input  className="solicitante" type="text" name="nombreSolicitante"  placeholder={obtDataCliente.nombre} value={nombreSolicitante} onChange={handleChange} /> 
                    </Col> 
                    </Col>
                    <Col sm={3}>
                   
                   <Label sm={12}>Empresa<span className="text-danger solicitante">*</span>  </Label>
                   <Col >
                       <Input  className="solicitante"   placeholder={obtDataCliente.empresa}  value={empresaSolicitante} type="text" name="empresaSolicitante" onChange={handleChange} /> 
                   </Col> 
                   </Col>
                <Col sm={4}>
              
                    <Label sm={12} >RFC </Label>
                    <Col >
                        <Input className="solicitante" type="text" name="rfcSolicitante" placeholder={obtDataCliente.rfc} value={rfcSolicitante} onChange={handleChange}/> 
                    </Col>
                    </Col> 
                    
                </FormGroup>
               
                    <Label sm={12} >Dirección  </Label>
                    <Col sm={12}>
                    <Input  className="solicitante"  type="text" name="direccionSolicitante" placeholder={obtDataCliente.direccion} value={direccionSolicitante} onChange={handleChange} /> 
                    </Col>
                </FormGroup>
                <FormGroup row>  
                    <Col sm={6}>
                    <Label sm={12}>Deleg/Municipio  </Label>
                    <Col>
                    <Input  className="solicitante"  type="text" name="delegacionSolicitante"    placeholder={obtDataCliente.delegacion} value={delegacionSolicitante} onChange={handleChange} /> 
                    </Col>
                     </Col> 
                     <Col sm={6}>
                   
                     <Label  sm={12}>Ciudad/EDO </Label>
                    <Col>
                     <Input className="solicitante"  type="text" name="EDOSolicitante"  placeholder={obtDataCliente.estado} value={EDOSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>

                </FormGroup>
               
                <FormGroup row>  
                    <Col sm={4}>
                    <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input  className="solicitante"   type="text" name="telSolicitante" value={telSolicitante} placeholder={obtDataCliente.telefono} onChange={handleChange}/>
                    </Col>
                     </Col> 
                     <Col sm={2}>
                    <Label sm={12}>Exten </Label>
                    <Col>
                        <Input  className="solicitante" type="text"   name="extTelSolicitante"  placeholder={obtDataCliente.extTel} value={extTelSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>
                     <Col sm={6}>
                     <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input  className="solicitante"  type="email" name="emailSolicitante"  placeholder={obtDataCliente.email} value={emailSolicitante} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color ">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </legend>
             
            <FormGroup row>
              <Col sm={3}>
              <Label sm={12}>Objetivo </Label>
              <Col>
                <Input  type="select" name="objetivo" value={objetivo} onChange={handleChange}>
                <option value="">Selecciona</option>
                    <option value="AVALÚO BANCARIO">AVALÚO BANCARIO</option>
                    <option value="AVALÚO CATASTRAL">AVALÚO CATASTRAL</option>
                    <option value="AVALÚO COMERCIAL">AVALÚO COMERCIAL</option>
                    <option value="AVALÚO INDUSTRIAL COMERCIAL">AVALÚO INDUSTRIAL COMERCIAL</option>
                    <option value="AVALÚO INDUSTRIAL VALOR RAZONABLE">AVALÚO INDUSTRIAL VALOR RAZONABLE</option>
                    <option value="AVALÚO INDUSTRIAL VRN">AVALÚO INDUSTRIAL VRN</option>
                    <option value="AVALÚO SEGUROS">AVALÚO SEGUROS</option>
                    <option value="AVALÚO SHF">AVALÚO SHF</option>
                    <option value="CAF">CAF</option>
                    <option value="CAPACITACIÓN">CAPACITACIÓN</option>
                    <option value="C6">C6</option>
                    <option value="C15">C15</option>
                    <option value="INVENTARIO  ACTIVO FIJO">INVENTARIO  ACTIVO FIJO</option>
                    <option value="INVENTARIO DE CIRCULANTE">INVENTARIO DE CIRCULANTE</option>
                    <option value="MARCA">MARCA</option>
                    <option value="NEGOCIO EN MARCHA">NEGOCIO EN MARCHA</option>
                    <option value="NORMA INTERNACIONAL">NORMA INTERNACIONAL</option>
                    <option value="NEGOCIACIÓN">NEGOCIACIÓN</option>
                    <option value="SAAF">SAAF</option>
                    <option value="PLACAS">PLACAS</option>
                    <option value="OTRO OBJETIVO">OTRO OBJETIVO</option>

                </Input> 
                </Col>
                </Col>
                <Col sm={9}>

                <Label sm={12}>Otro Objetivo </Label>
                <Col >
                <Input  type="text" name="otroObj" value={otroObj} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset>
            <legend className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </legend>
             
            <FormGroup row>
               <Col sm={3}>
                   <Label sm={12}> Propósito</Label>
                   <Col>
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
                <Input type="text" name="otroProp" value={otroProp} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color">8. INSPECCIÓN FÍSICA</legend>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={12} >Presentarse con <span className="text-danger">*</span> </Label>
                <Col >
                <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange} required/> 
                </Col>
                </Col>
                <Col sm={6}>
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
            </FormGroup>
            <FormGroup row>
                <Col sm={3}>
                <Label sm={12}>Fecha <span className="text-danger">*</span>  </Label>
                <Col >
                <Input type="date" name="fechaIns" value={fechaIns} required/>
                </Col>
                </Col>
           
                <Col sm={3}>
                <Label sm={12}>Teléfono</Label>
                 <Col >
                 <Input  type="text" name="telInsp" value={telInsp} onChange={handleChange} /> 
                 </Col>
                </Col>
                <Col sm={2}>
                <Label sm={12} >Exten </Label>
                <Col >
                <Input  type="text" name="extenInsp" value={extInsp} onChange={handleChange}  /> 
                </Col>
                </Col>
                <Col sm={4}>
                <Label sm={12} >Correo </Label>
                <Col>
                <Input  type="email" name="emailInsp" value={emailInsp} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            <FormGroup>

                <Label sm={12}>Direccion  <span className="text-danger">*</span> </Label>
                <Col sm={12}>
                <Input  type="text" name="dirInsp" value={dirInsp} onChange={handleChange}  required/> 
                </Col>
            </FormGroup>
            <FormGroup>
                <Label sm={12} >Observaciones</Label>
                <Col sm={12}>
                <Input type="textarea" name="observaciones" value={observaciones} onChange={handleChange} /> 
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
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
                <Input type="text" name="otroBien" value={otroBien} onChange={handleChange} /> 
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color">10. FECHAS <span className="text-danger">*</span> </legend>
            <FormGroup row>
                <Col sm={6}>
                <Label sm={10} >Inicio de Proyecto </Label>
                <Col >
                    <Input name="inicio" value={inicio} type="date" required/>
                </Col>
                </Col>
              
                <Col sm={6}>
                <Label sm={12}>Entrega de Proyecto</Label>
                <Col>
                <Input name="entrega" value={entrega} type="date" required/>
                </Col>
                </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <fieldset className="fieldset">
            <legend className="ot-color">11. INFORMACIÓN PROPORCIONADA</legend>      
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
            <Input  type="text" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
            </Col>
            </Col>
            </FormGroup>
            </fieldset>
            <hr/>
            <p className="text-muted">Todos los montos son sin objeto de IVA</p>
            <fieldset className="fieldset">
            <FormGroup row>
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
                    <Input readOnly  type="number" name="montoVendido" value={montoVendido}  /> 
                    
                    </Col>
                    </Col>
                   
             
                    <Col sm={2}>
                    <Label sm={11}className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input name="facturar" value={facturar} type="select" required>
                        <option value="">-</option>
                        <option value="si">si</option>
                        <option value="no"> no</option>
                    </Input>
                    </Col>
                    </Col>
                </FormGroup>
            </fieldset>
            <hr/>
        <Button className="button-enviar" type="submit"  >Enviar</Button><br/>
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
              <Button color="info" className="float-right" onClick={this.crearNuevo}>Crear Nuevo</Button>
              
             
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
            <div className="div-form">
                
                <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmit}>
               
                   
                    <h5 className="ot-color ot-center">ORDEN DE TRABAJO</h5>
                    <br/>
                    <fieldset className="fieldset">
                <FormGroup  row>
                    
                <Col sm={3}>
                     <Label sm={12} >UGE <span className="text-danger">*</span>   </Label>
                     <Col >
                     <Input type="select"  className="obligatorio" name="uge" value={uge} onChange={handleSelectUge} required>
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
             
                    <Col sm={3}>
                    <Label sm={12}  >Vendedor Ejecutivo </Label>
                    <Col >
                        <Input  type="text" name="vendedor"  readOnly value={getName}    >
                      
                            
                            </Input>
                    </Col>
                    </Col>
                    <Col sm={3}>
                    <Label sm={12} >Fecha OT<span className="text-danger">*</span> </Label>
                    <Col > 
                        <Input  readOnly  name="dateNew" value={dateNew} type="text" />
                    </Col> 
                    </Col>  
                    <Col sm={3}>
                        <Label  sm={12}>Copia para <span className="text-danger">*</span> </Label>
                    <Col >
                        <Input  type="select" name="copia"  value={copia} onChange={handleChange} required>
                            <option value="">Selecciona</option>
                            <option value="civil">Civil</option>
                            <option value="direccion">Direccion</option>
                            <option value="finanzas">Finanzas</option>
                            <option value="industrial">Industrial</option>
                            <option value="administracion">Administracion o Contabilidad</option>
                            <option value="civ-ind">Civil-Industrial</option>
                            <option value="civ-fin">Civil-Finanzas</option>
                            <option value="fin-ind">Finanzas-Industrial</option>
                            <option value="ind-prod">Industrial-Producción</option>
                            <option value="civ-fin-ind">Civil-Finanzas-Industrial</option>
                        </Input>
                    </Col>
                    </Col>
                    
                </FormGroup>
                </fieldset>
                <Col><hr/></Col>
                <fieldset className="fieldset">
                <FormGroup  row>
                
                    <Col sm={3}>
                <Label  sm={12} className="ot-color label-input">1. TIPO DE OFERTA </Label>
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
                    <Input  type="text" name="cedido" value={cedido} onChange={handleChange} />
                    </Col>
               </Col>
               
                    <Col sm={3}>
                    <Label sm={12} className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger">*</span>  </Label>
                    <Col >
                    <Input  type="select" name="proyecto" value={proyecto} onChange={handleChange} >
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
                        <Input   type="select" name="tipoCliente" value={tipoCliente} onChange={handleChange}required >
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
                <FormGroup row>
                <Col sm={2}></Col>
                <Label sm={10} >Selecciona por: </Label>
                <Col sm={2}></Col>
                <Col sm={3}>
                <Input type="select"  onChange={handleEmpresa}>
                    <option value="">Cliente</option>
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
                  
                  <Col sm={5}>
                 
                      <Label sm={12}>Nombre  </Label>
                      <Col >
                          <Input readOnly  value={obtDataCliente.nombre} className="form-size" type="text" name="nombreCliente" /> 
                      </Col> 
                      </Col>
                      <Col sm={3}>
                 
                 <Label sm={12}>Empresa </Label>
                 <Col >
                     <Input readOnly  value={obtDataCliente.empresa} className="form-size" type="text" name="empresa" /> 
                 </Col> 
                 </Col>
                  <Col sm={4}>
                
                      <Label sm={12} >RFC </Label>
                      <Col >
                          <Input readOnly value={obtDataCliente.rfc}  type="text" name="rfcCliente" /> 
                      </Col>
                      </Col> 
                      
                  </FormGroup>
                 
                      <Label sm={12} >Dirección  </Label>
                      <Col sm={12}>
                      <Input readOnly   value={obtDataCliente.direccion} type="text" name="direccionCliente"  /> 
                      </Col>
                  </FormGroup>
                  <FormGroup row>  
                      <Col sm={4}>
                      <Label sm={12}>Deleg/Municipio  </Label>
                      <Col>
                      <Input  readOnly  value={obtDataCliente.delegacion} type="text" name="delegacionCliente"   /> 
                      </Col>
                       </Col> 
                       <Col sm={4}>
                     
                       <Label  sm={12}>Ciudad/EDO </Label>
                      <Col>
                       <Input  readOnly value={obtDataCliente.estado}  type="text" name="EDOCliente"    />
                          </Col>
                       </Col>
                       <Col sm={4}>
                       <Label  sm={12}>Atención </Label>
                      <Col sm={12}>
                          <Input  readOnly value={obtDataCliente.atencion} type="text" name="atencion"  /> </Col>
                       </Col>
                  </FormGroup>
                 
                  <FormGroup row>  
                      <Col sm={4}>
                      <Label sm={12} >Teléfono </Label>
                      <Col>
                      <Input readOnly  value={obtDataCliente.telefono}  type="text" name="telCliente"  />
                      </Col>
                       </Col> 
                       <Col sm={2}>
                      <Label sm={12}>Exten </Label>
                      <Col>
                          <Input readOnly type="text"   name="extTel"  />
                          </Col>
                       </Col>
                       <Col sm={6}>
                       <Label  sm={12}>Correo electronico</Label>
                      <Col>
                      <Input  readOnly  value={obtDataCliente.email} type="email" name="emailCliente"/> 
                      </Col>
                      </Col>
                  </FormGroup>
               </fieldset>
               <hr/>
               <fieldset className="fieldset">
                    <legend className="ot-color">5. SOLICITANTE DEL AVALÚO</legend>
                    <FormGroup >
                    
                 
                
                <FormGroup row>
                <Col sm={5}>
               
                    <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                    <Col >
                        <Input  className="form-size" type="text" name="nombreCliente"  placeholder={obtDataCliente.nombre} value={nombreSolicitante} onChange={handleChange} required/> 
                    </Col> 
                    </Col>
                    <Col sm={3}>
                   
                   <Label sm={12}>Empresa<span className="text-danger">*</span>  </Label>
                   <Col >
                       <Input  placeholder={obtDataCliente.empresa}  value={empresaSolicitante} className="form-size" type="text" name="empresa" /> 
                   </Col> 
                   </Col>
                <Col sm={4}>
              
                    <Label sm={12} >RFC </Label>
                    <Col >
                        <Input  type="text" name="rfcCliente" placeholder={obtDataCliente.rfc} value={rfcSolicitante} onChange={handleChange}/> 
                    </Col>
                    </Col> 
                    
                </FormGroup>
               
                    <Label sm={12} >Dirección  </Label>
                    <Col sm={12}>
                    <Input  type="text" name="direccionCliente" placeholder={obtDataCliente.direccion} value={direccionSolicitante} onChange={handleChange} /> 
                    </Col>
                </FormGroup>
                <FormGroup row>  
                    <Col sm={6}>
                    <Label sm={12}>Deleg/Municipio  </Label>
                    <Col>
                    <Input  type="text" name="delegacionCliente"    placeholder={obtDataCliente.delegacion} value={delegacionSolicitante} onChange={handleChange} /> 
                    </Col>
                     </Col> 
                     <Col sm={6}>
                   
                     <Label  sm={12}>Ciudad/EDO </Label>
                    <Col>
                     <Input  type="text" name="EDOCliente"  placeholder={obtDataCliente.estado} value={EDOSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>

                </FormGroup>
               
                <FormGroup row>  
                    <Col sm={4}>
                    <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input    type="text" name="telCliente" placeholder={obtDataCliente.telefono} value={telSolicitante} onChange={handleChange} required/>
                    </Col>
                     </Col> 
                     <Col sm={2}>
                    <Label sm={12}>Exten </Label>
                    <Col>
                        <Input type="text"   name="extTel"  placeholder={obtDataCliente.extTel} value={extTelSolicitante} onChange={handleChange} />
                        </Col>
                     </Col>
                     <Col sm={6}>
                     <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input   type="email" name="emailCliente"  placeholder={obtDataCliente.email} value={emailSolicitante} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset className="fieldset">
                <legend className="ot-color ">6. OBJETIVO DEL AVALÚO <span className="text-danger">*</span> </legend>
                 
                <FormGroup row>
                  <Col sm={3}>
                  <Label sm={12}>Objetivo </Label>
                  <Col>
                    <Input  type="select" name="objetivo" value={objetivo} onChange={handleChange}>
                    <option value="">Selecciona</option>
                        <option value="AVALÚO BANCARIO">AVALÚO BANCARIO</option>
                        <option value="AVALÚO CATASTRAL">AVALÚO CATASTRAL</option>
                        <option value="AVALÚO COMERCIAL">AVALÚO COMERCIAL</option>
                        <option value="AVALÚO INDUSTRIAL COMERCIAL">AVALÚO INDUSTRIAL COMERCIAL</option>
                        <option value="AVALÚO INDUSTRIAL VALOR RAZONABLE">AVALÚO INDUSTRIAL VALOR RAZONABLE</option>
                        <option value="AVALÚO INDUSTRIAL VRN">AVALÚO INDUSTRIAL VRN</option>
                        <option value="AVALÚO SEGUROS">AVALÚO SEGUROS</option>
                        <option value="AVALÚO SHF">AVALÚO SHF</option>
                        <option value="CAF">CAF</option>
                        <option value="CAPACITACIÓN">CAPACITACIÓN</option>
                        <option value="C6">C6</option>
                        <option value="C15">C15</option>
                        <option value="INVENTARIO  ACTIVO FIJO">INVENTARIO  ACTIVO FIJO</option>
                        <option value="INVENTARIO DE CIRCULANTE">INVENTARIO DE CIRCULANTE</option>
                        <option value="MARCA">MARCA</option>
                        <option value="NEGOCIO EN MARCHA">NEGOCIO EN MARCHA</option>
                        <option value="NORMA INTERNACIONAL">NORMA INTERNACIONAL</option>
                        <option value="NEGOCIACIÓN">NEGOCIACIÓN</option>
                        <option value="SAAF">SAAF</option>
                        <option value="PLACAS">PLACAS</option>
                        <option value="OTRO OBJETIVO">OTRO OBJETIVO</option>
    
                    </Input> 
                    </Col>
                    </Col>
                    <Col sm={9}>
    
                    <Label sm={12}>Otro Objetivo </Label>
                    <Col >
                    <Input  type="text" name="otroObj" value={otroObj} onChange={handleChange} /> 
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset>
                <legend className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger">*</span>  </legend>
                 
                <FormGroup row>
                   <Col sm={3}>
                       <Label sm={12}> Propósito</Label>
                       <Col>
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
                    <Input type="text" name="otroProp" value={otroProp} onChange={handleChange} /> 
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset className="fieldset">
                <legend className="ot-color">8. INSPECCIÓN FÍSICA</legend>
                <FormGroup row>
                    <Col sm={6}>
                    <Label sm={12} >Presentarse con <span className="text-danger">*</span> </Label>
                    <Col >
                    <Input  type="text" name="presentarse" value={presentarse} onChange={handleChange} required/> 
                    </Col>
                    </Col>
                    <Col sm={6}>
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
                </FormGroup>
                <FormGroup row>
                    <Col sm={3}>
                    <Label sm={12}>Fecha <span className="text-danger">*</span>  </Label>
                    <Col >
                    <Input type="date" required/>
                    </Col>
                    </Col>
               
                    <Col sm={3}>
                    <Label sm={12}>Teléfono</Label>
                     <Col >
                     <Input  type="text" name="telInsp" value={telInsp} onChange={handleChange} /> 
                     </Col>
                    </Col>
                    <Col sm={2}>
                    <Label sm={12} >Exten </Label>
                    <Col >
                    <Input  type="text" name="extenInsp" value={extInsp} onChange={handleChange}  /> 
                    </Col>
                    </Col>
                    <Col sm={4}>
                    <Label sm={12} >Correo </Label>
                    <Col>
                    <Input  type="email" name="emailInsp" value={emailInsp} onChange={handleChange}  /> 
                    </Col>
                    </Col>
                </FormGroup>
                <FormGroup>
    
                    <Label sm={12}>Direccion  <span className="text-danger">*</span> </Label>
                    <Col sm={12}>
                    <Input  type="text" name="dirInsp" value={dirInsp} onChange={handleChange}  /> 
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label sm={12} >Observaciones</Label>
                    <Col sm={12}>
                    <Input type="textarea" name="observaciones" value={observaciones} onChange={handleChange} /> 
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset className="fieldset">
                <legend sm={12} className="ot-color">9. BIENES A VALUAR<span className="text-danger">*</span> </legend>
                <FormGroup row>
                    <Col sm={3}>
                        <Label sm={12}>Bienes</Label>
                        <Col>
                    <Input  type="select" name="bienes" value={bienes} onChange={handleChange} required >
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
                    <Input type="text" name="otroBien" value={otroBien} onChange={handleChange} /> 
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset className="fieldset">
                <legend className="ot-color">10. FECHAS <span className="text-danger">*</span> </legend>
                <FormGroup row>
                    <Col sm={6}>
                    <Label sm={10} >Inicio de Proyecto </Label>
                    <Col >
                        <Input type="date" required/>
                    </Col>
                    </Col>
                  
                    <Col sm={6}>
                    <Label sm={12}>Entrega de Proyecto</Label>
                    <Col>
                    <Input type="date" required/>
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <fieldset className="fieldset">
                <legend className="ot-color">11. INFORMACIÓN PROPORCIONADA</legend>      
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
                <Input  type="text" name="otraInfo" value={otraInfo} onChange={handleChange} /> 
                </Col>
                </Col>
                </FormGroup>
                </fieldset>
                <hr/>
                <p className="text-muted">Todos los montos son sin objeto de IVA</p>
                <fieldset className="fieldset">
                <FormGroup row>
                     <Col sm={3}>
                    <Label  sm={12}className="ot-color">PRESUPUESTO</Label>
                    <Col >
                    <Input  type="number" name="presupuesto" value={presupuesto} onChange={handleChange} required /> 
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
                    <Input readOnly  type="number" name="montoVendido" value={montoVendido}  /> 
                    
                    </Col>
                    </Col>
                   
             
                    <Col sm={2}>
                    <Label sm={11}className="ot-color">FACTURAR <span className="text-danger">*</span> </Label>
                    <Col>
                    <Input type="select" required>
                        <option>si</option>
                        <option>no</option>
                    </Input>
                    </Col>
                    </Col>
                </FormGroup>
                </fieldset>
                <hr/>
            <Button className="button-enviar" type="submit"  >Enviar</Button><br/>
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
              
              <Button color="info" className="float-right" onClick={this.crearNuevo}>Crear Nuevo</Button>
              
             
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