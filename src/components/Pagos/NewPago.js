import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Table, Button, Input, Progress, Container, Row, Col } from 'reactstrap';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

class NewPago extends React.Component {

    abono=0;
    fecha="";

    sendData = () => {
        if(this.abono != 0 && this.fecha != ""){
            this.props.respuesta({abono: +this.abono, fecha:this.fecha});
        }
    }
    handleAbono(abono){
        this.abono = abono;
    }
    handleFecha(fecha){
        this.fecha = fecha;
    }

    render(){
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <Container>
                        <Row>
                            <Card className="card-nuevoPago">
                                Agregar un pago a la orden: <strong>{this.props.clave}</strong>
                                <br></br>
                                <br></br>
                                Abono:
                                <Input required type="number" name="abono" placeholder="Abono" onChange={e => this.handleAbono(e.target.value)}></Input>
                                <br></br>
                                <br></br>
                                Fecha:
                                <Input required type="date" name="fecha" placeholder="Fecha" onChange={e => this.handleFecha(e.target.value)}></Input>
                            </Card>
                        </Row>
                        <div className="botones-popup">
                            <Container>
                                <Row>
                                    <Col md="6">
                                        <center>
                                            <Button color="success" onClick={this.sendData}>Pagar</Button>
                                        </center>
                                    </Col>
                                    <Col md="6">
                                        <center>
                                            <Button color="danger" onClick={this.props.closePopup}>Cancelar</Button>
                                        </center>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default NewPago;