
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Modal from 'react-modal';
import { Link } from 'react-router-dom';


class  Visitadores extends React.Component {
    constructor() {
        super();
        this.crearNuevo = this.crearNuevo.bind(this)
        this.reload = this.reload.bind(this)
     
      }
  
    crearNuevo(){
        const {closeModal} = this.context
        closeModal()
        document.getElementById("formClear").reset();

    }
    reload(){
        const {closeModal} =this.context
        closeModal()
        var container = document.getElementById("radioCheck");
        var content = container.innerHTML;
        container.innerHTML= content; 
    }

    
    render(){
       
        
        const {modalIsOpen,closeModal,handleChange, handleSubmitVisitador, visitadorNombre,handleClick, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador,  telVisitador, extTelVisitador,emailVisitador } = this.context
    return(
        <div className="div-form">
             
             <Form  className="center-box style-form" id="formClear" onSubmit={handleSubmitVisitador}>
           
               
           <h5 className="ot-color ot-center">Visitadores</h5>
           <br/>
        <fieldset className="fieldset">
        <legend className="ot-color"> DATOS </legend>
        <FormGroup >
            
        <FormGroup row>
        <Col sm={7}>
       
            <Label sm={12}>Nombre <span className="text-danger">*</span>  </Label>
            <Col >
                <Input  type="text" name="visitadorNombre" value={visitadorNombre}   onChange={handleChange} required/> 
            </Col> 
            </Col>
        <Col sm={5}>
      
            <Label sm={12} >RFC </Label>
            <Col >
                <Input  type="text" name="rfcVisitador" value={rfcVisitador} onChange={handleChange} /> 
            </Col>
            </Col> 
            
        </FormGroup>
       
            <Label sm={12} >Dirección  </Label>
            <Col sm={12}>
            <Input  type="text" name="direccionVisitador" value={direccionVisitador} onChange={handleChange} /> 
            </Col>
        </FormGroup>
        <FormGroup row>  
            <Col sm={6}>
            <Label sm={12}>Deleg/Municipio  </Label>
            <Col>
            <Input  type="text" name="delegacionVisitador"     value={delegacionVisitador} onChange={handleChange} /> 
            </Col>
             </Col> 
             <Col sm={6}>
           
             <Label  sm={12}>Ciudad/EDO </Label>
            <Col>
             <Input  type="text" name="EDOVisitador"   value={EDOVisitador} onChange={handleChange} />
                </Col>
             </Col>
           
        </FormGroup>
        <FormGroup row>  
            <Col sm={3}>
            <Label sm={12} >Teléfono <span className="text-danger">*</span> </Label>
            <Col>
            <Input    type="text" name="telVisitador" value={telVisitador} onChange={handleChange} required/>
            </Col>
             </Col> 
             <Col sm={2}>
            <Label sm={12}>Exten </Label>
            <Col>
                <Input type="text"   name="extTelVisitador" value={extTelVisitador} onChange={handleChange} />
                </Col>
             </Col>
             <Col sm={4}>
             <Label  sm={12}>Correo electronico <span className="text-danger">*</span> </Label>
            <Col>
            <Input   type="email" name="emailVisitador" value={emailVisitador} onChange={handleChange} required/> 
            </Col>
            </Col>
        </FormGroup>
        <Label  sm={12}>UGE<span className="text-danger">*</span> </Label>
        <FormGroup row >

        
        <Col sm={1}></Col>
        <Col sm={2}>

        <FormControlLabel control={<Checkbox  value="CIVIL"  onChange={handleClick}/>} label="Civil" />
        </Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="FINANCIERA" onChange={handleClick} />} label="Financiera" />
        </Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="INDUSTRIAL" onChange={handleClick} />} label="Industrial" />
        </Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="CIVIL-INDUSTRIAL" onChange={handleClick} />} label="Civil-Industrial" />
        </Col>
        </FormGroup>
        <FormGroup row>
            <Col sm={2}></Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="CIVIL-FINANCIERA" onChange={handleClick} />} label="Civil-Financiera" />
        </Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="FINANCIERA-INDUSTRIAL" onChange={handleClick} />} label="Financiera-Industrial" />
        </Col>
        <Col sm={3}>
        <FormControlLabel control={<Checkbox value="CIVIL-FINANCIERA-INDUSTRIAL" onChange={handleClick} />} label=" Civil-Financiera-Industrial" />
        </Col>
        </FormGroup> 
      
    

    
       </fieldset>
       <hr/>
       <Button className="button-enviar"  type="submit"  >Enviar </Button><br/>
       <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="modal-inner"
              overlayClassName="Overlay"
            
              > 
              <div>
              <h5 className="text-info text-center">Visitador Creado</h5>
              <hr/> 
              <Button color="info" ><Link to="./Visitadores" className="text-white" onClick={closeModal}> Ver Lista </Link></Button>
              <Button color="info" className="float-right" onClick={() =>{window.location.reload()}}>Crear Nuevo</Button>
             </div>
             </Modal>
       </Form>
       </div>


     ) }
}

export default Visitadores