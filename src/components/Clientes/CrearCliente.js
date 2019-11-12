import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class  DirectorioClientes extends React.Component {
    constructor() {
        super();
    
       
        this.crearNuevo = this.crearNuevo.bind(this)
    
     
      }
      crearNuevo(){
        const {closeModal} = this.context
        closeModal()
        document.getElementById("formClear").reset();

    }
      
    render(){
        const {modalIsOpen, closeModal, handleChange, handleSubmitCliente,  estatus,empresa, clienteNombre, rfcCliente, direccionCliente, delegacionCliente, EDOCliente, atencionCliente, telCliente, extTelCliente,emailCliente } = this.context
    return(
        <div className="div-form">
             
             <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmitCliente}>
           
               
           <h5 className="ot-color ot-center">NUEVO CLIENTE</h5>
           <br/>
        <fieldset className="fieldset">
        <legend className="ot-color"> DATOS DEL CLIENTE</legend>
        <FormGroup >
            
        <FormGroup row>
        <Col sm={4}>
       
            <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
            <Col >
                <Input  className="form-size" type="text" name="clienteNombre" value={clienteNombre}  onChange={handleChange}  required/> 
            </Col> 
            </Col>
            <Col sm={4}>
      
      <Label sm={12} >Empresa </Label>
      <Col >
          <Input  type="text" name="empresa" value={empresa} onChange={handleChange} required/> 
      </Col>
      </Col> 
        <Col sm={4}>
      
            <Label sm={12} >RFC </Label>
            <Col >
                <Input  type="text" name="rfcCliente" value={rfcCliente} onChange={handleChange}/> 
            </Col>
            </Col> 
            
        </FormGroup>
       
            <Label sm={12} >Dirección  </Label>
            <Col sm={12}>
            <Input  type="text" name="direccionCliente" value={direccionCliente} onChange={handleChange} /> 
            </Col>
        </FormGroup>
        <FormGroup row>  
            <Col sm={4}>
            <Label sm={12}>Deleg/Municipio  </Label>
            <Col>
            <Input  type="text" name="delegacionCliente"     value={delegacionCliente} onChange={handleChange} /> 
            </Col>
             </Col> 
             <Col sm={4}>
           
             <Label  sm={12}>Ciudad/EDO </Label>
            <Col>
             <Input  type="text" name="EDOCliente"   value={EDOCliente} onChange={handleChange} />
                </Col>
             </Col>
             <Col sm={4}>
             <Label  sm={12}>Atención </Label>
            <Col sm={12}>
                <Input  type="text" name="atencion" value={atencionCliente} onChange={handleChange} /> </Col>
             </Col>
        </FormGroup>
       
        <FormGroup row>  
            <Col sm={3}>
            <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
            <Col>
            <Input    type="text" name="telCliente" value={telCliente} onChange={handleChange} />
            </Col>
             </Col> 
             <Col sm={2}>
            <Label sm={12}>Exten </Label>
            <Col>
                <Input type="text"   name="extTel" value={extTelCliente} onChange={handleChange} />
                </Col>
             </Col>
             <Col sm={4}>
             <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
            <Col>
            <Input   type="email" name="emailCliente" value={emailCliente} onChange={handleChange} /> 
            </Col>
            </Col>
            <Col sm={3}>
             <Label  sm={12}>Estatus <span className="text-danger">*</span> </Label>
            <Col>
            <Input type="select" name="estatus" value={estatus} onChange={handleChange} required>
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
              <h5 className="text-info text-center">Cliente Creado</h5>
              <hr/> 
              <Button color="info" ><Link to="./ListadoClientes" className="text-white" onClick={closeModal}> Ver Lista </Link></Button>
              <Button color="info" className="float-right" onClick={this.crearNuevo}>Crear Nuevo</Button>
             </div>
             </Modal>
       </Form>
       </div>


     ) }
}

export default DirectorioClientes