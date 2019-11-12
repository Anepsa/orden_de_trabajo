import React from 'react';
import Modal from 'react-modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {Button,   Form, FormGroup, Label, Input, Col } from 'reactstrap';






class OrdenCreada extends React.Component {
  

    render() {
    
        const{getNewDate, comision, presupuesto, montoVendido, uge, vendedor, copia, oferta, cedido, proyecto, tipoCliente,  nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante, EDOSolicitante, telSolicitante, extTelSolicitante, emailSolicitante, objetivo, otroObj, proposito, otroProp, presentarse,visitador, fechaIns, telInsp, extInsp, emailInsp, dirInsp,  observaciones, bienes, otroBien, info, otraInfo, inicio, entrega,  facturar,
           
          closeModal, modalIsOpen,  consulta, handleUpdate,  handleChange, }=this.context
               
        return (
        
            <Modal
            isOpen={modalIsOpen}
            toggle={closeModal}
            className="modal-inner-lista"
            overlayClassName="Overlay"
              
            > 
            <CloseOutlinedIcon className="float-right" onClick={closeModal}/>
            <p className="text-info text-center">Orden Creada</p>
            <hr/>
            
              <div >
                <Form className="form-style">
                  <FormGroup row>
                    <Col sm={4}>
              <Label> Clave: </Label>
              <Input type="text"  defaultValue={uge} readOnly></Input>
              </Col>
             <Col sm={8}>
               
              <Label>Vendedor Ejecutivo:</Label>
              <Input name="vendedor" defaultValue={vendedor} readOnly></Input>
              </Col>
              <Col sm={4}>
              <Label> UGE: </Label> 
              <Input type="text" name="uge" value={uge} readOnly></Input>
              </Col>
              <Col sm={4}>
              <Label> FECHA OT: </Label> 
              <Input name="dateNew" type="text" value={getNewDate} readOnly></Input>
              </Col>
              
              <Col sm={4}>
              <Label> COPIA PARA </Label> 
              <Input  type="text" name="copia"  defaultValue={copia} onChange={handleChange}></Input>
              </Col>
              </FormGroup>
              <FormGroup  row>
                  <Col sm={3}>
              <Label className="ot-color label-input">1. TIPO DE OFERTA </Label>
              
                  <Input  type="text" defaultValue={oferta}  onChange={handleChange}></Input>
              </Col>
             <Col sm={3}>
                  <Label className="ot-color label-input">1.1 CEDIDO DE  </Label>
                  
                  <Input  type="text"  defaultValue={cedido}  onChange={handleChange}></Input> 
                 
             </Col>
             <Col sm={3}>
              <Label   className="ot-color label-input">2. TIPO DE PROYECTO </Label>
              
                  <Input  type="text" defaultValue={proyecto}  onChange={handleChange}></Input>
              
              </Col>
             <Col sm={3}>
                  <Label  className="ot-color label-input">3. TIPO DE CLIENTE  </Label>
                 
                  <Input  type="text"  defaultValue={tipoCliente}  onChange={handleChange}></Input>
                 
                  
             </Col>
             {/* <Col sm={12}>
               <hr/>
     */}
{/*     
             <h6 className="ot-color">4. DATOS DEL CLIENTE</h6>
             </Col>
             <Col sm={4}>
              <Label> Nombre: </Label>
              <Input type="text"  defaultValue={cliente.nombre} onChange={handleChange}></Input>
              </Col>
              <Col sm={4}>
              <Label> Empresa: </Label>
              <Input type="text"  value={cliente.empresa} readOnly ></Input>
              </Col>
             <Col sm={4}>
              <Label>Atencion:</Label>
              <Input type="text" value={cliente.atencion} readOnly></Input>
              </Col>
              <Col sm={8}>
              <Label> Dirección: </Label> 
              <Input type="text" value={cliente.direccion} readOnly></Input>
              </Col>
              <Col sm={4}>
              <Label> Ciudad/EDO </Label> 
              <Input type="text" value={cliente.estado} readOnly></Input>
              </Col>
              <Col sm={4}>
              <Label> Teléfono: </Label> 
              <Input type="text" value={cliente.telefono} readOnly></Input>
              </Col>
              <Col sm={2}>
              <Label> Extension: </Label> 
              <Input type="text" value={cliente.extTel} readOnly></Input>
              </Col>
              <Col sm={6}>
              <Label> Correo Electrónico: </Label> 
              <Input type="text" value={cliente.email} readOnly></Input>
              </Col>
              <Col sm={12}>
              <hr/>
             <h6 className="ot-color">5. SOLICITANTE DEL AVALÚO</h6>
             </Col>
             <Col sm={4}>
              <Label> Nombre Solicitante: </Label>
              <Input  type="text"  defaultValue={nombreSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label> Empresa </Label>
              <Input  type="text"  defaultValue={empresaSolicitante}  onChange={handleChange}> ></Input>
              </Col>
             <Col sm={4}>
              <Label>Dirección:</Label>
              <Input type="text" defaultValue={direccionSolicitant}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label> RFC </Label> 
              <Input type="text"  defaultValue={rfcSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label> Deleg/Municipio: </Label> 
              <Input type="text" defaultValue={delegacion}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label> Ciudad/Estado </Label> 
              <Input type="text"  defaultValue = {EDOSolicitante} onChange={handleChange}> ></Input>
              </Col>
              <Col sm={4}>
              <Label> Teléfono: </Label> 
              <Input type="text" defaultValue={telSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={2}>
              <Label> Extension: </Label> 
              <Input type="text" ></Input>
              </Col>
              <Col sm={6}>
              <Label> Correo Electrónico: </Label> 
              <Input type="text" defaultValue={emailSolicitante}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={12}><hr/></Col>
               */}
           
             <Col sm={6}>
              <Label className="ot-color"> 6. OBJETIVO DEL AVALÚO</Label>
              <Input type="text" defaultValue={objetivo}  onChange={handleChange}>></Input>
              </Col>
             <Col sm={6}>
              <Label className="ot-color">7. PROPOSITO DEL AVALÚO:</Label>
              <Input type="text" defaultValue={proposito}  onChange={handleChange}>> </Input>
              </Col>
              <Col sm={12}>
              <hr/>
             <h6 className="ot-color"> 8. INSPECCIÓN FÍSICA</h6>
             </Col>
             <Col sm={6}>
              <Label>Presentarse con:</Label>
              <Input type="text"  defaultValue={presentarse}  onChange={handleChange}>></Input>
              </Col>
             <Col sm={6}>
              <Label>Visitador</Label>
              <Input type="text" defaultValue={visitador}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={3}>
              <Label>Fecha</Label>
              <Input type="text" defaultValue={fechaIns}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={3}>
              <Label>Teléfono</Label>
              <Input type="text" defaultValue={telInsp} onChange={handleChange}> ></Input>
              </Col>
              <Col sm={2}>
              <Label>Exten</Label>
              <Input type="text" defaultValue={extInsp} onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label>Correo Electrónico</Label>
              <Input type="text" defaultValue={emailInsp} onChange={handleChange}>></Input>
              </Col>
              <Col sm={7}>
              <Label>Dirección</Label>
              <Input type="text" defaultValue={dirInsp} onChange={handleChange}>></Input>
              </Col>
              <Col sm={5}>
              <Label>Observaciones</Label>
              <Input type="text" defaultValue={observaciones} onChange={handleChange}>></Input>
              </Col>
             
              <Col sm={12}>
              <hr/>
             
             </Col>
             <Col sm={6}>
              <Label className="ot-color"> 9. BIENES A VALUAR</Label>
              <Col sm={12}>
              <Label>Bienes</Label>
              <Input type="text" defaultValue={bienes}  onChange={handleChange}>></Input>
              </Col>
              </Col>
             <Col sm={6}>
              <Label className="ot-color">10. FECHAS</Label>
              <FormGroup row >
                <Col sm={6}>
                <Label>Inicio</Label>
              <Input type="text" defaultValue={inicio} onChange={handleChange}>></Input>
              </Col>
              <Col sm={6}>
                <Label>Entrega</Label>
              <Input type="text" defaultValue={entrega} onChange={handleChange}>></Input>
              </Col>
              </FormGroup>
              </Col>
              <Col sm={12}>
              <hr/>
             <h6 className="ot-color"> 11. INFORMACIÓN PROPORCIONADA</h6>
             
              <Input type="text.area"  ></Input>
              </Col>
              <Col sm={12}>
              <hr/>
             
             </Col>
             <Col sm={3}>
              <Label className="ot-color">COMISIÓN EXTERNA</Label>
              <Input type="text" defaultValue={comision}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={3}>
              <Label className="ot-color">PRESUPUESTO</Label>
              <Input type="text" defaultValue={presupuesto}  onChange={handleChange}>></Input>
              </Col>
              <Col sm={4}>
              <Label className="ot-color">MONTO NETO VENDIDO</Label>
              <Input type="text" defaultValue={montoVendido} onChange={handleChange}> ></Input>
              </Col>
              <Col sm={2}>
              <Label className="ot-color">FACTURAR</Label>
              <Input type="text"  defaultValue={facturar} onChange={handleChange}>></Input>
              </Col>

              </FormGroup>
              </Form>  
  
              </div>
              
            
                  <hr/>   
                  <Button onClick={closeModal} >Cerrar</Button>

                  <Button className="ml-1 btn-success"  onClick={handleUpdate}>Guardar</Button>
                 
              
           
           </Modal>
        
            
        )
}}

Modal.setAppElement('body');


export default OrdenCreada