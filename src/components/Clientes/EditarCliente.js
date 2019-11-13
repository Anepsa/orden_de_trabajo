import React from 'react';
import Modal from 'react-modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {Button,   Form, FormGroup, Label, Input, Col } from 'reactstrap';


class EditarCliente extends React.Component {

    render() {
        const{ consultaCliente,closeModal, modalIsOpen,  handleUpdateCliente,  handleChange, }=this.context
 
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
            {consultaCliente.map((item , index)=>(
              <div key={index}>
                <Form >
                <FormGroup >
            
            <FormGroup row>
            <Col sm={4}>
           
                <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
                <Col >
                    <Input  className="form-size" type="text" name="clienteNombre" value={item.nombre}   readOnly/> 
                </Col> 
                </Col>
                <Col sm={4}>
          
          <Label sm={12} >Empresa </Label>
          <Col >
              <Input  type="text" name="empresa" value={item.empresa} readOnly/> 
          </Col>
          </Col> 
            <Col sm={4}>
          
                <Label sm={12} >RFC </Label>
                <Col >
                    <Input  type="text" name="rfcCliente" value={item.rfc} readOnly /> 
                </Col>
                </Col> 
                
            </FormGroup>
           
                <Label sm={12} >Dirección  </Label>
                <Col sm={12}>
                <Input  type="text" name="direccionCliente" value={item.direccion}  readOnly /> 
                </Col>
            </FormGroup>
            <FormGroup row>  
                <Col sm={4}>
                <Label sm={12}>Deleg/Municipio  </Label>
                <Col>
                <Input  type="text" name="delegacionCliente"     value={item.delegacion} readOnly /> 
                </Col>
                 </Col> 
                 <Col sm={4}>
               
                 <Label  sm={12}>Ciudad/EDO </Label>
                <Col>
                 <Input  type="text" name="EDOCliente"   value={item.estado} readOnly />
                    </Col>
                 </Col>
                 <Col sm={4}>
                 <Label  sm={12}>Atención </Label>
                <Col sm={12}>
                    <Input  type="text" name="atencion" value={item.atencion} readOnly /> </Col>
                 </Col>
            </FormGroup>
           
            <FormGroup row>  
                <Col sm={3}>
                <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
                <Col>
                <Input    type="text" name="telCliente" value={item.telefono} readOnly />
                </Col>
                 </Col> 
                 <Col sm={2}>
                <Label sm={12}>Exten </Label>
                <Col>
                    <Input type="text"   name="extTel" value={item.extTel} readOnly />
                    </Col>
                 </Col>
                 <Col sm={4}>
                 <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
                <Col>
                <Input   type="email" name="emailCliente" value={item.email} readOnly /> 
                </Col>
                </Col>
                <Col sm={3}>
                 <Label  sm={12}>Estatus <span className="text-danger">*</span> </Label>
                <Col>
                <Input type="select" name="estatus" defaultValue={item.estatus} onChange={handleChange}>
                    <option value="">Selecciona</option>
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
  
              </div>
              
                ))}
                  <hr/>   
                  <Button onClick={closeModal} >Cerrar</Button>

                  <Button className="ml-1 btn-success"  onClick={handleUpdateCliente}>Guardar</Button>
                 
              
           
           </Modal>
        
            
        )
}}

Modal.setAppElement('body');


export default EditarCliente