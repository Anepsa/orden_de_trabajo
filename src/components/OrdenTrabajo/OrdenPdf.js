import React from 'react';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import './ordes.css';
import db from "../../Fire"
import firebase from 'firebase';
import { Divider } from '@material-ui/core';
import LogoAnepsa from '../../assets/anepsa.png';


class OrdenPdf extends React.Component {
    orden = {};
    obtDataCliente = {};
    clave = "";
    
    constructor(props){
        super(props)
        this.state = {
            estadoImpresion: false
        }
    }
    getData(){
        console.log("getData");
        const { getPagos, getOrden } = this.context;
        if (this.props.location.orden) {
            this.orden = this.props.location.orden;
        } else {// En caso de actualizar la pagina buscar orden dando su clave
            getOrden(this.clave);
        }
    }
    
    setInfoReporte(ordenPagos){
        this.orden = ordenPagos;
        this.obtDataCliente = ordenPagos.cliente;

        //this.orden.nuevaClave = ordenPagos.productClave;
        // this.orden.dateNew = ordenPagos.dateToCompare;
        
        //this.obtDataCliente.vendedor = "obtDataCliente.vendedor"; // Proveedor de Servicio
        // this.orden.objetivo = "orden.objetivo"; // obtDataCliente.servicios // orden.objetivo no se usa
        
    }
    
    
    componentDidMount(){
        if(this.props.match){
            this.clave = this.props.match.params.clave;
            this.getData();
        }else{
        }
    }
    
    componentDidUpdate(){
        console.log("update");
        if (this.state.estadoImpresion) {
            window.print();
            this.setState({ estadoImpresion: false});
            window.close();
            this.setState({ regresar:true });
        }
    }
    
    render(){
        const { ordenPagos } = this.context;
        
        if(ordenPagos.productClave){
            this.setInfoReporte(ordenPagos);
            this.setState({ estadoImpresion: true});
        } else if (this.props.location.orden){
            this.setInfoReporte(this.props.location.orden);
            this.setState({ estadoImpresion: true});
        }
        if(this.state.regresar){
            return <Redirect push to="/ListaOrdenes" />
        }
        return (
            <div id="OrdenCreada" className="div-form imprimir">
                {/* Logo Anepsa */}
                <Col sm={12} className="nav-style">
                    <Col sm={4}>
                        <img src={LogoAnepsa} alt="logo-anepsa" className="LogoAnepsa"></img>
                    </Col>
                </Col>

                {/* Form */}
                <Form className="center-box style-form" id="formClear">
                    {/* Form 1 */}
                    <fieldset className="fieldset">
                        <FormGroup row>
                            <Col sm={2}>
                                <Label sm={12}>CLAVE</Label>
                                <Col >
                                    <Input type="text" readOnly value={this.orden.productClave}></Input>
                                </Col>
                            </Col>
                            <Col sm={3}>
                                <Label sm={12}>UGE<span className="text-danger "></span></Label>
                                <Col >
                                    <Input type="text" className="obligatorio resetear" name="uge" required value={this.orden.uge}></Input>
                                </Col>
                            </Col>
                            <Col sm={3}>
                                <Label sm={12}>Vendedor Ejecutivo<span className="text-danger"></span> </Label>
                                <Col>
                                    <Input className="obligatorio" type="text" name="vendedor" value={this.orden.vendedor} required></Input>
                                </Col>
                            </Col>
                            <Col sm={2}>
                                <Label sm={12} >Fecha</Label>
                                <Col >
                                    <Input readOnly name="dateNew" value={this.orden.dateToCompare} type="text" />
                                </Col>
                            </Col>
                            <Col sm={2}>
                                <Label sm={12}>Copia para <span className="text-danger"></span> </Label>
                                <Col >
                                    <Input type="text" name="copia" value={this.orden.copia} required></Input>
                                </Col>
                            </Col>
                        </FormGroup>
                        {/* Form Group***************************** */}
                        <FormGroup row>
                            <Col sm={3}>
                                <Label sm={12} className="ot-color ">1. TIPO DE OFERTA </Label>
                                <Col >
                                    <Input type="text" name="oferta" value={this.orden.oferta} ></Input>
                                </Col>
                            </Col>
                            <Col sm={3}>
                                <Label sm={12} className="ot-color label-input">1.1 CEDIDO DE  </Label>
                                <Col >
                                    <Input type="text" name="cedido" className="resetear" value={this.orden.cedido} />
                                </Col>
                            </Col>

                            <Col sm={3}>
                                <Label sm={12} className="ot-color label-input">2. TIPO DE PROYECTO <span className="text-danger"></span>  </Label>
                                <Col >
                                    <Input type="text" name="proyecto" value={this.orden.proyecto} required></Input>
                                </Col>
                            </Col>
                            <Col sm={3}>
                                <Label sm={12} className="ot-color label-input">3. TIPO DE CLIENTE <span className="text-danger"></span> </Label>
                                <Col >
                                    <Input type="text" name="tipoCliente" value={this.orden.tipoCliente} required></Input>
                                </Col>
                            </Col>
                        </FormGroup>
                    </fieldset>
                    
                    {/* Datos del cliente */}
                    <fieldset className="fieldset">
                        <legend className="ot-color">4. DATOS DEL CLIENTE</legend>
                            <FormGroup row>
                                <Col sm={2}>
                                    <Label sm={12}>Cliente<span className="text-danger"></span></Label>
                                    <Col >
                                        <Input readOnly defaultValue={this.obtDataCliente.nombre} className="form-size" type="text" name="nombreCliente" />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}>Empresa<span className="text-danger"></span></Label>
                                    <Col >
                                        <Input readOnly defaultValue={this.obtDataCliente.empresa} className="form-size" type="text" name="empresa" />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}>Cargo Empresa<span className="text-danger"></span></Label>
                                    <Col >
                                        <Input type="text" defaultValue={this.obtDataCliente.cargo} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>

                                    <Label sm={12} >RFC </Label>
                                    <Col >
                                        <Input defaultValue={this.obtDataCliente.rfc} type="text" readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Area <span className="text-danger"></span>   </Label>
                                    <Col >
                                        <Input type="text" defaultValue={this.obtDataCliente.area} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}> Holding<span className="text-danger"></span>   </Label>
                                    <Col>
                                        <Input type="text" defaultValue={this.obtDataCliente.holding} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}>Servicio<span className="text-danger"></span></Label>
                                    <Col>
                                        <Input type="text" defaultValue={this.obtDataCliente.servicios} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Origen de Venta</Label>
                                    <Col >
                                        <Input type="text" defaultValue={this.obtDataCliente.venta} readOnly />

                                    </Col>
                                </Col>
                                
                                <Col sm={8}>
                                    <FormGroup row>
                                        <Col sm={2}>
                                            <Label sm={12}>Proveedor</Label>
                                            <Col sm={12}>
                                                <Input type="text" defaultValue={this.obtDataCliente.vendedor} readOnly /> </Col>
                                        </Col>
                                        <Col sm={3}>
                                            <Label sm={12}>Correo electronico <span className="text-danger"></span> </Label>
                                            <Col>
                                                <Input readOnly defaultValue={this.obtDataCliente.email} type="email" />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12} >Teléfono <span className="text-danger"></span> </Label>
                                            <Col>
                                                <Input readOnly defaultValue={this.obtDataCliente.telefono} type="text" />
                                            </Col>
                                        </Col>
                                        <Col sm={1}>
                                            <Label sm={12}>Ext </Label>
                                            <Col>
                                                <Input readOnly type="text" defaultValue={this.obtDataCliente.extTel} />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12}>Deleg/Municipio</Label>
                                            <Col>
                                                <Input readOnly defaultValue={this.obtDataCliente.delegacion} type="text" name="delegacionCliente" />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12}>Ciudad/EDO</Label>
                                            <Col>
                                                <Input readOnly defaultValue={this.obtDataCliente.estado} type="text" name="EDOCliente" />
                                            </Col>
                                        </Col>
                                    </FormGroup>
                                </Col>

                                <Col sm={6}>
                                    <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger"></span>   </Label>
                                    <Col>
                                        <Input type="textarea" rows={3} defaultValue={this.obtDataCliente.comentarios} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={6}>
                                    <Label sm={12} >Dirección  </Label>
                                    <Col>
                                        <Input readOnly defaultValue={this.obtDataCliente.direccion} type="textarea" rows={3} name="direccionCliente" />
                                    </Col>
                                </Col>
                            </FormGroup>
                            {/* <FormGroup row>
                            </FormGroup> */}
                        {/* </FormGroup> */}
                    </fieldset>
                    {/* Solicitante del avaluo */}
                    <fieldset className="fieldset">
                        <legend className="ot-color">5. SOLICITANTE DEL AVALÚO</legend>
                        <FormGroup >
                            <FormGroup row>
                                <Col sm={2}>
                                    <Label sm={12}>Nombre <span className="text-danger"></span>  </Label>
                                    <Col >
                                        <Input id="nombreSolicitante" type="text" name="nombreSolicitante" placeholder={this.obtDataCliente.nombre} value={this.orden.nombreSolicitante} />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}>Empresa<span className="text-danger solicitante"></span>  </Label>
                                    <Col >
                                        <Input placeholder={this.obtDataCliente.empresa} value={this.orden.empresaSolicitante} type="text" name="empresaSolicitante" />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Cargo Empresa <span className="text-danger"></span> </Label>
                                    <Col >
                                        <Input type="text" name="cargo" placeholder={this.obtDataCliente.cargo} value={this.obtDataCliente.cargo}/>
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >RFC </Label>
                                    <Col >
                                        <Input type="text" name="rfcSolicitante" placeholder={this.obtDataCliente.rfc} value={this.orden.rfcSolicitante} />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Area <span className="text-danger"></span>   </Label>
                                    <Col >
                                        <Input type="text" defaultValue={this.orden.uge} placeholder={this.obtDataCliente.area} readOnly />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}> Holding/Particular<span className="text-danger"></span>   </Label>
                                    <Col>
                                        <Input type="text" name="holdingSolicitante" value={this.orden.holdingSolicitante} placeholder={this.obtDataCliente.holding} />
                                    </Col>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={2}>
                                    <Label sm={12}>Servicio<span className="text-danger"></span>  </Label>
                                    <Col>
                                        <Input type="text" name="servicioSolicitante" value={this.orden.servicioSolicitante} placeholder={this.obtDataCliente.servicios} />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Origen de Venta</Label>
                                    <Col >
                                        <Input name="ventaSolcitante" value={this.orden.ventaSolicitante} type="text" placeholder={this.obtDataCliente.venta} />
                                    </Col>
                                </Col>
                                <Col sm={8}>
                                    <FormGroup row>
                                        <Col sm={2}>
                                            <Label sm={12}>Proveedor</Label>
                                            <Col sm={12}>
                                                <Input type="text" value={this.obtDataCliente.vendedor}/>
                                            </Col>
                                        </Col>
                                        <Col sm={3}>
                                            <Label sm={12}>Correo electronico <span className="text-danger"></span> </Label>
                                            <Col>
                                                <Input type="email" name="emailSolicitante" placeholder={this.obtDataCliente.email} value={this.orden.emailSolicitante} />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12} >Teléfono <span className="text-danger"></span> </Label>
                                            <Col>
                                                <Input type="text" name="telSolicitante" value={this.orden.telSolicitante} placeholder={this.obtDataCliente.telefono} />
                                            </Col>
                                        </Col>
                                        <Col sm={1}>
                                            <Label sm={12}>Exten </Label>
                                            <Col>
                                                <Input type="text" name="extTelSolicitante" placeholder={this.obtDataCliente.extTel} value={this.orden.extTelSolicitante} />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12}>Deleg/Municipio  </Label>
                                            <Col>
                                                <Input type="text" name="delegacionSolicitante" placeholder={this.obtDataCliente.delegacion} value={this.orden.delegacionSolicitante} />
                                            </Col>
                                        </Col>
                                        <Col sm={2}>
                                            <Label sm={12}>Ciudad/EDO </Label>
                                            <Col>
                                                <Input type="text" name="EDOSolicitante" placeholder={this.obtDataCliente.estado} value={this.orden.EDOSolicitante} />
                                            </Col>
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <Label sm={12}>Comentarios Presupuesto y Servicio<span className="text-danger"></span>   </Label>
                                    <Col>
                                        <Input type="textarea" rows={3} name="comentariosSolicitante" value={this.orden.comentariosSolicitante}  />
                                    </Col>
                                </Col>
                                <Col sm={6}>
                                    <Label sm={12} >Dirección  </Label>
                                    <Col sm={12}>
                                        <Input type="textarea" rows={3} name="direccionSolicitante"  value={this.orden.direccionSolicitante} />
                                    </Col>
                                </Col>
                            </FormGroup>
                        </FormGroup>
                    </fieldset>
                    <FormGroup row>
                        <Col sm={6}>
                            {/* Objetivo del avaluo */}
                            <fieldset className="fieldset">
                                <legend className="ot-color ">6. OBJETIVO DEL AVALÚO <span className="text-danger"></span> </legend>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Label sm={12}>Objetivo </Label>
                                        <Col>
                                            <Input type="text" readOnly defaultValue={this.obtDataCliente.servicios} value={this.obtDataCliente.servicios}></Input>
                                        </Col>
                                    </Col>
                                    <Col sm={12}>
                                        <Label sm={12}>Otro Objetivo </Label>
                                        <Col >
                                            <Input type="textarea" rows={3} name="otroObj" value={this.orden.otroObj} />
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                        <Col sm={6}>
                            {/* Proposito del avaluo */}
                            <fieldset>
                                <legend className="ot-color">7. PROPÓSITO DEL AVALÚO <span className="text-danger"></span>  </legend>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Label sm={12}> Propósito</Label>
                                        <Col >
                                            <Input type="text" name="proposito" value={this.orden.proposito} ></Input>
                                        </Col>
                                    </Col>
                                    <Col sm={12}>
                                        <Label sm={12} >Otro Propósito</Label>
                                        <Col >
                                            <Input type="textarea" rows={3} name="otroProp" value={this.orden.otroProp} />
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                    </FormGroup>
                    <FormGroup className="mb-0">
                        {/* Inspeccion fisica */}
                        <fieldset className="fieldset">
                            <legend className="ot-color">8. INSPECCIÓN FÍSICA</legend>
                            <FormGroup row>
                                <Col sm={3}>
                                    <Label sm={12} >Presentarse con <span className="text-danger"></span> </Label>
                                    <Col >
                                        <Input type="text" name="presentarse" value={this.orden.presentarse} required />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Visitador</Label>
                                    <Col>
                                        <Input type="text" name="visitador" value={this.orden.visitador}></Input>
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12}>Fecha <span className="text-danger"></span>  </Label>
                                    <Col >
                                        <Input type="text" name="fechaIns" value={this.orden.fechaIns} required />
                                    </Col>
                                </Col>

                                <Col sm={2}>
                                    <Label sm={12}>Teléfono</Label>
                                    <Col >
                                        <Input type="text" name="telInsp" value={this.orden.telInsp} />
                                    </Col>
                                </Col>
                                <Col sm={1}>
                                    <Label sm={12} >Ext </Label>
                                    <Col >
                                        <Input type="text" name="extInsp" value={this.orden.extInsp} />
                                    </Col>
                                </Col>
                                <Col sm={2}>
                                    <Label sm={12} >Correo </Label>
                                    <Col>
                                        <Input type="email" name="emailInsp" value={this.orden.emailInsp} />
                                    </Col>
                                </Col>
                                <Col sm={6}>
                                    <Label sm={12}>Direccion  <span className="text-danger"></span> </Label>
                                    <Col sm={12}>
                                        <Input type="textarea" rows={3} name="dirInsp" value={this.orden.dirInsp} required />
                                    </Col>
                                </Col>
                                <Col sm={6}>
                                    <Label sm={12} >Observaciones</Label>
                                    <Col sm={12}>
                                        <Input type="textarea" rows={3} name="observaciones" value={this.orden.observaciones} />
                                    </Col>
                                </Col>
                            </FormGroup>
                        </fieldset>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={6}>
                            {/* Bienes a valuar */}
                            <fieldset className="fieldset">
                                <legend sm={12} className="ot-color">9. BIENES A VALUAR<span className="text-danger"></span> </legend>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Label sm={12}>Bienes</Label>
                                        <Col>
                                            <Input type="text" name="bienes" value={this.orden.bienes} required></Input>
                                        </Col>
                                    </Col>
                                    <Col sm={12}>
                                        <Label sm={12}>Otros Bienes </Label>
                                        <Col >
                                            <Input type="textarea" rows={3} name="otroBien" value={this.orden.otroBien} />
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                        <Col sm={6}>
                            {/* Informacion proporcionada */}
                            <fieldset className="fieldset">
                                <legend className="ot-color">10. INFORMACIÓN PROPORCIONADA</legend>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Label sm={12}>Información</Label>
                                        <Col>
                                            <Input type="text" name="info" value={this.orden.info}></Input>
                                        </Col>
                                    </Col>
                                    <Col sm={12}>
                                        <Label sm={12}>Otra Información</Label>
                                        <Col >
                                            <Input type="textarea" rows={3} name="otraInfo" value={this.orden.otraInfo} />
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                    </FormGroup>
                    <FormGroup row id="formOcultar" className="algo ">
                        <Col sm={4}>
                            {/* Fechas */}
                            <fieldset className="fieldset ml-3">
                                <legend className="ot-color">11. FECHAS <span className="text-danger"></span> </legend>
                                <FormGroup row>
                                    <Col sm={6}>
                                        <Label sm={10}>Inicio de Proyecto </Label>
                                        <Col>
                                            <Input name="inicio" value={this.orden.inicio} type="text" required/>
                                        </Col>
                                    </Col>
                                    <Col sm={6}>
                                        <Label sm={12}>Entrega de Proyecto</Label>
                                        <Col>
                                            <Input name="entrega" value={this.orden.entrega} type="text" required/>
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                        <Col sm={8}>
                            {/* Presupuestos */}
                            <fieldset className="fieldset"><legend className="color-gray">Todos los montos son sin objeto de IVA <span className="text-danger"></span> </legend>
                                <FormGroup row>
                                    <Col sm={3}>
                                        <Label sm={12} className="ot-color">PRESUPUESTO</Label>
                                        <Col>
                                            <Input type="text" name="presupuesto" value={this.orden.presupuesto} required />
                                        </Col>
                                    </Col>
                                    <Col sm={3}>
                                        <Label sm={12} className="ot-color">COMISIÓN EXTERNA</Label>
                                        <Col>
                                            <Input type="text" name="comision" value={this.orden.comision} required />
                                        </Col>
                                    </Col>
                                    <Col sm={3}>
                                        <Label sm={12} className="ot-color">MONTO NETO VENDIDO <span className="text-danger"></span> </Label>
                                        <Col>
                                            <Input readOnly type="text" name="montoVendido" value={this.orden.montoVendido} />
                                        </Col>
                                    </Col>
                                    <Col sm={3}>
                                        <Label sm={11} className="ot-color">FACTURAR <span className="text-danger"></span> </Label>
                                        <Col>
                                            <Input name="facturar" value={this.orden.facturar} type="text" required></Input>
                                        </Col>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default OrdenPdf;