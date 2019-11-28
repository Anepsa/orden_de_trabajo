import React from 'react';
import Modal from 'react-modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {Button,   Form, FormGroup, Label, Input, Col } from 'reactstrap';


class EditarCliente extends React.Component {

    render() {
        const{ closeModal, modalIsOpen,  handleUpdateCliente,  handleChange, getName,
            clienteNombre, rfcCliente, direccionCliente, dateToCompare, delegacionCliente, EDOCliente, telCliente, extTelCliente,emailCliente,empresa,estatus,cargo, holding, servicios,area, venta, comentarios,
           
        }=this.context
 
        // const{ list} = this.context}
        
        
        return (
        
            <Modal
            isOpen={modalIsOpen}
            toggle={closeModal}
            className="modal-inner-lista"
            overlayClassName="Overlay"
              
            > 
            <CloseOutlinedIcon className="float-right" onClick={closeModal}/>
            <p className="text-info text-center">Editar Estatus</p>
            <hr/>
       
                <Form >
                <FormGroup >
            
                <FormGroup row>
        <Col sm={3}>
       
            <Label sm={12}>Cliente<span className="text-danger">*</span>  </Label>
            <Col >
                <Input  className="form-size" type="text"  value={clienteNombre} readOnly/> 
            </Col> 
            </Col>
            <Col sm={3}>
      
      <Label sm={12} >Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text" name="empresa" value={empresa}  readOnly/> 
      </Col>
      </Col> 
      <Col sm={3}>
      
      <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text" name="cargo" value={cargo}  readOnly/> 
      </Col>
      </Col> 
        <Col sm={3}>
      
            <Label sm={12} >RFC </Label>
            <Col >
                <Input  type="text" name="rfcCliente" defaultValue={rfcCliente} onChange={handleChange}/> 
            </Col>
            </Col> 
            
        </FormGroup>
        <FormGroup row>
        <Col sm={3}>
                 <Label sm={12} >Area<span className="text-danger">*</span>   </Label>
                 <Col >
                     <Input type="select"  className="obligatorio" name="area" value={area} readOnly>
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
            <Label sm={12}> Holding/Particular<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="select" name="holding" value={holding} readOnly>
                <option value="">Selecciona</option>
                <option value="Anepsa">Anepsa</option>
                <option value="Syvaprec">Syvaprec</option>
                <option value="SAAF">SAAF</option>
                                    
            </Input> 
            </Col>
            </Col>
          
                 <Col sm={3}>
              <Label sm={12}>Servicio<span className="text-danger">*</span>  </Label>
              <Col>
                <Input  type="select" name="servicios" value={servicios} readOnly>
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
                <Col sm={3}>
            <Label  sm={12} >Origen de Venta</Label>
            <Col >
                <Input  type="select" name="venta" value={venta} readOnly>
                <option value="">Selecciona</option>
                <option value="PROPIO">PROPIO</option>
                <option value="CEDIDO">CEDIDO</option>
                <option value="MARKETING DIGITAL">MARKETING DIGITAL</option>
                <option value="ASOCIADO">ASOCIADO</option>
                
                </Input>
            </Col>
            </Col>
                
             </FormGroup>
           <FormGroup row>
           <Col sm={4}>
             <Label  sm={12}>Proveedor de Servicio</Label>
            <Col sm={12}>
                <Input  type="text" name="atencion" value={getName}  readOnly/> </Col>
             </Col>
             <Col sm={2}>
             <Label  sm={12}>Fecha</Label>
            <Col sm={12}>
                <Input  type="text" name="atencion" value={dateToCompare}  readOnly/> </Col>
             </Col>
          

           <Col sm={6}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text" name="comentarios" value={comentarios} readOnly/> 
            </Col>
            </Col>
            
            </FormGroup>
         </FormGroup>
      
        <FormGroup row> 
        <Col sm={6}>
            <Label sm={12}>Dirección  </Label>
            <Col>
            <Input  type="text" name="direccionCliente" defaultValue={direccionCliente} onChange={handleChange}/> 
           </Col>
            </Col> 
            <Col sm={3}>
            <Label sm={12}>Deleg/Municipio  </Label>
            <Col>
            <Input  type="text" name="delegacionCliente"     value={delegacionCliente} readOnly /> 
            </Col>
             </Col> 
             <Col sm={3}>
           
             <Label  sm={12}>Ciudad/EDO </Label>
            <Col>
             <Input  type="text" name="EDOCliente"   value={EDOCliente} readOnly />
                </Col>
             </Col>
             
        </FormGroup>
       
        <FormGroup row>  
            <Col sm={3}>
            <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
            <Col>
            <Input    type="text" name="telCliente" value={telCliente} readOnly/>
            </Col>
             </Col> 
             <Col sm={2}>
            <Label sm={12}>Exten </Label>
            <Col>
                <Input type="text"   name="extTel" value={extTelCliente} readOnly />
                </Col>
             </Col>
             <Col sm={4}>
             <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
            <Col>
            <Input   type="email" name="emailCliente" value={emailCliente} readOnly /> 
            </Col>
            </Col>
            <Col sm={3}>
             <Label  sm={12}>Estatus <span className="text-danger">*</span> </Label>
            <Col>
            <Input type="select" name="estatus"  onChange={handleChange} >
        <option value="">{estatus}</option>
                <option value="perdido">Perdido</option>
                        <option value="contacto inicial">Contacto Inicial </option>
                        <option value="posible cierre">Posible Cierre</option>
                        <option value="estancado">Estancado</option>
                        <option value="vendido">Vendido</option>
                                 
            </Input>
            </Col>
            </Col>
        </FormGroup>
              </Form>  
  
              
                  <hr/>   
                  <Button onClick={closeModal} >Cerrar</Button>

                  <Button className="ml-1 btn-success"  onClick={handleUpdateCliente}>Guardar</Button>
                 
              
           
           </Modal>
        
            
        )
}}

Modal.setAppElement('body');


export default EditarCliente