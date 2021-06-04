import React from 'react';
import NewPago from './NewPago';
import LogoAnepsa from '../../assets/anepsa.png';
import { Table, Button, Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

import PagosService from '../../services/PagosService';


class Pagos extends React.Component {

    pagosService;

    orden;
    adeudo;
    abono;
    abonoAnterior;

    constructor(props){
        super(props);
        this.state = {
            showNuevoPago: false,
            showButtons: true
        };
        this.inizializarData();
        this.getPDF = this.getPDF.bind(this);
    }

    setDataPagos(dataPagos){
        this.setState({
            dataPagos: dataPagos
        })
    }

    inizializarData(){// Pones en 0 todas las variables
        this.orden = { // Para inicializarlos y que no tire error el render
            productClave:"",
            cliente:{
                nombre:"",
                empresa:""
            },
            uge:"",
        };
        this.adeudo = 0;
        this.abono = 0;
        this.abonoAnterior = 0;
    }
    
    getData(){// Actualizar los datos de pagos
        const { getPagos , getOrden } = this.context;
        const clave = this.props.match.params.clave;
        if (this.props.location.orden) {
            this.orden = this.props.location.orden;
        } else {// En caso de actualizar la pagina buscar orden dando su clave
            getOrden(clave);
        }
        getPagos(clave);
    }

    sumarAbono(abonos){
        this.abono = 0;
        if(abonos.length > 0){
            abonos.forEach((abono)=>{
                this.abono += abono.abono;
            })
            if(this.abono != this.abonoAnterior){
                // this.actualizar();
            }
            this.abonoAnterior = this.abono;
        }
    }

    nuevoPago = (respuesta) =>{
        const { newPago } = this.context;
        const pago = { abono:respuesta.abono,fecha:respuesta.fecha };
        const orden = { clave: this.orden.productClave, total:this.orden.montoVendido };
        newPago(pago, orden);
        this.getPagado();
        this.togglePopup();
    }

    getPagado(){
        const { adeudoCompleto } = this.context;
        const restante = this.adeudo - this.abono;

        if( restante>0 && this.orden.pagado ){
            adeudoCompleto(this.orden.productClave, 0);
        }else if( restante <= 0 && !this.orden.pagado ){
            adeudoCompleto(this.orden.productClave, 1);
        }
    }

    getPDF(){
        this.setState({showButtons: false});
    }
    
    componentDidMount(){
        this.getData();
    }
    
    componentDidUpdate(){// Cada que el render termina
        if(!this.state.showButtons){
            window.print();
            this.setState({
                showButtons: true
            })
        }
    }

    componentWillUnmount(){
        this.inizializarData();
    }

    togglePopup() {
        this.setState({
            showNuevoPago: !this.state.showNuevoPago
        });
    }
    
    render(){
        const { ordenPagos, dataPagos, pagos } = this.context;

        console.log(pagos);
        //const { ordenPagos } = this.context;
        //const { dataPagos, pagos } = this.pagosService;
        
        if (!this.props.location.orden && ordenPagos.productClave != "") {// En caso de actualizar la pagina buscar orden dando su clave 
            this.orden = ordenPagos;
        }
        
        if ( dataPagos.sinPagos ){//En caso de no tener Pagos
            this.adeudo = this.orden.montoVendido;
        }else if( dataPagos.orden ){//En caso de tener pagos
            this.adeudo = dataPagos.orden.total;
        }
        
        this.sumarAbono(pagos);
        
        return(
            <div className="pagos-texto">
                <Container>
                    { this.state.showButtons ? //En caso de No imprimir no mostrar Botones
                        <div>
                            <Row className='float-right'>
                                <Button className='mt-2 mb-2 mr-3' color="danger" onClick={this.getPDF}>PDF</Button>
                                <Button className='mt-2 mb-2 mr-3' color="success " onClick={this.togglePopup.bind(this)}>Nuevo Pago</Button>
                                <Link to={"/ListaOrdenes"}><Button className='mt-2 mb-2 mr-3' color="success ">Atras</Button></Link>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    : // En caso de imprimir agregar el Logo
                    <div>
                        <Col sm={12} className="nav-style" >
                            <Col sm={4}>
                                <img src={LogoAnepsa} alt="logo-anepsa" className="LogoAnepsa"></img>
                            </Col>
                        </Col>
                    </div>
                    }
                    <Row>
                        <Col xs="6">
                            <Table>
                                <tbody>
                                    <tr>Clave orden de trabajo: <b>{this.orden.productClave}</b></tr>
                                    <tr>Cliente: <b>{this.orden.cliente.nombre}</b></tr>
                                    <tr>Empresa: <b>{this.orden.cliente.empresa}</b></tr>
                                    <tr>UGE: <b>{this.orden.uge}</b></tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs="6">
                            <Table>
                                <tbody>
                                    <tr>Total a Pagar: <b>${this.adeudo}</b></tr>
                                    <tr>Total Abonado: <b>${this.abono}</b></tr>
                                    <tr>-----------------------</tr>
                                    <tr>Restante: <b>${this.adeudo-this.abono}</b></tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <br></br>
                </Container>
            
                <Container>
                    <Row>
                        <Table>
                            <thead>
                                <tr className="tabla-style">
                                    <th>Fecha</th>
                                    <th>Abonos</th>
                                    <th>%</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>{
                                pagos.map((item, index) => (
                                    <tr key={index} className="list">
                                        <td>{item.fecha}</td>
                                        <td>${item.abono}</td>
                                        <td>%{(item.abono/this.adeudo) * 100}</td>
                                        <td></td>
                                    </tr>
                                ))
                            }</tbody>
                        </Table>
                    </Row>
                </Container>

                {this.state.showNuevoPago ?
                    <NewPago
                        text='Close Me'
                        clave={this.orden.productClave}
                        closePopup={this.togglePopup.bind(this)}
                        respuesta={this.nuevoPago}
                    />
                    : null
                }
                
            </div>
        )
    }
}

export default Pagos;