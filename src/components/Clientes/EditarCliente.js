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
            className="modal-inner-lista-cliente"
            overlayClassName="Overlay"
              
            > 
            <CloseOutlinedIcon className="float-right" onClick={closeModal}/>
            <p className="text-info text-center">Editar Estatus</p>
            <hr/>
            {consultaCliente.map((item , index)=>(
              <div key={index}>
                <Form >
                  <FormGroup >
                   
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