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
        const {modalIsOpen, closeModal, handleChange, handleSubmitCliente,  getName,
            cargo, holding, servicios,area, venta, comentarios, estatus, empresa, clienteNombre, rfcCliente, direccionCliente, delegacionCliente, EDOCliente,  telCliente, extTelCliente,emailCliente } = this.context
    return(
        <div className="div-form">
             
             <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmitCliente}>
           
               
           <h5 className="ot-color ot-center">NUEVO CLIENTE</h5>
           <br/>
        <fieldset className="fieldset">
        <legend className="ot-color"> DATOS DEL CLIENTE</legend>
        <FormGroup >
            
        <FormGroup row>
        <Col sm={3}>
       
            <Label sm={12}>Cliente<span className="text-danger">*</span>  </Label>
            <Col >
                <Input  className="form-size" type="text" name="clienteNombre" value={clienteNombre}  onChange={handleChange}  required/> 
            </Col> 
            </Col>
            <Col sm={3}>
      
      <Label sm={12} >Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text" name="empresa" value={empresa} onChange={handleChange} required/> 
      </Col>
      </Col> 
      <Col sm={3}>
      
      <Label sm={12} >Cargo Empresa <span className="text-danger">*</span> </Label>
      <Col >
          <Input  type="text" name="cargo" value={cargo} onChange={handleChange}/> 
      </Col>
      </Col> 
        <Col sm={3}>
      
            <Label sm={12} >RFC </Label>
            <Col >
                <Input  type="text" name="rfcCliente" value={rfcCliente} onChange={handleChange}/> 
            </Col>
            </Col> 
            
        </FormGroup>
        <FormGroup row>
        <Col sm={3}>
                 <Label sm={12} >UGE <span className="text-danger">*</span>   </Label>
                 <Col >
                     <Input type="select"  className="obligatorio" name="area" value={area} onChange={handleChange} required>
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
            <Input  type="select" name="holding" value={holding} onChange={handleChange} required>
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
                <Input  type="select" name="servicios" value={servicios} onChange={handleChange} required>
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
                <Input  type="select" name="venta" value={venta} onChange={handleChange} >
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
                <Input  type="text" name="atencion" value={getName} /> </Col>
             </Col>
          

           <Col sm={8}>
            <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger">*</span>   </Label>
            <Col>
            <Input  type="text" name="comentarios" value={comentarios} onChange={handleChange} required/> 
            </Col>
            </Col>
            
            </FormGroup>
         </FormGroup>
      
        <FormGroup row> 
        <Col sm={6}>
            <Label sm={12}>Dirección  </Label>
            <Col>
            <Input  type="text" name="direccionCliente" value={direccionCliente} onChange={handleChange} required/> 
            </Col>
            </Col> 
            <Col sm={3}>
            <Label sm={12}>Deleg/Municipio  </Label>
            <Col>
            <Input  type="text" name="delegacionCliente"     value={delegacionCliente} onChange={handleChange} /> 
            </Col>
             </Col> 
             <Col sm={3}>
           
             <Label  sm={12}>Ciudad/EDO </Label>
            <Col>
             <Input  type="text" name="EDOCliente"   value={EDOCliente} onChange={handleChange} />
                </Col>
             </Col>
             
        </FormGroup>
       
        <FormGroup row>  
            <Col sm={3}>
            <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
            <Col>
            <Input    type="text" name="telCliente" value={telCliente} onChange={handleChange} required/>
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
            <Input   type="email" name="emailCliente" value={emailCliente} onChange={handleChange} required /> 
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