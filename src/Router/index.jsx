import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import ListaOrdenes from '../components/OrdenTrabajo';
import OrdenTrabajo from "../components/OrdenTrabajo/CrearOrden";
import OrdenPdf from "../components/OrdenTrabajo/OrdenPdf";
import CrearCliente from "../components/Clientes/CrearCliente";
import Visitadores from "../components/Visitadores";
import CrearVisitador from "../components/Visitadores/CrearVisitador";
import ListadoClientes from "../components/Clientes";
import Pagos from "../components/Pagos";
import Reports from "../components/Reports";

import { AppContext } from "../AppContext";
// import { PagosContext } from "../services/PagosContext";

import { NavLink } from "react-router-dom";
import AnepsaLogo from "../assets/anepsa.png"
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import firebase from 'firebase';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Col } from 'reactstrap';


OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;
CrearCliente.contextType = AppContext;
ListadoClientes.contextType = AppContext;
Visitadores.contextType = AppContext;
CrearVisitador.contextType = AppContext;
Reports.contextType = AppContext;
Pagos.contextType = AppContext;
OrdenPdf.contextType = AppContext;

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleConfig = this.toggleConfig.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            drawerOpen: false,
            drawerOpenConfig: false
        };
    }
    toggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }
    toggleConfig() {
        this.setState({
            drawerOpenConfig: !this.state.drawerOpenConfig
        });
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} ha salido`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    render() {
        const { handleLogout, getName, dateNew, rol } = this.context;
        if (rol === "admin") {
            return (
                <BrowserRouter>
                    <Col sm={12} className="nav-style" >
                        <Navbar color="white" light expand="md">

                            <Col sm={2}>
                                <NavbarBrand> <NavLink to="/"><img src={AnepsaLogo} alt="logo-anepsa" className="LogoAnepsa"></img></NavLink></NavbarBrand>
                            </Col>
                            <Col sm={6}></Col>
                            <Col sm={3}>
                                <p> {getName} </p>
                                <p>{dateNew}</p>
                            </Col>
                            <Col sm={1}>
                                <Button color="white " onClick={this.toggle} style={{ marginBottom: '1rem' }}><MenuIcon className="text-right" /></Button>
                                <Button color="white " onClick={this.toggleConfig} style={{ marginBottom: '1rem' }}><SettingsIcon className="text-right" /></Button>
                            </Col>


                        </Navbar>
                    </Col>

                    <Drawer
                        anchor="right"
                        open={this.state.drawerOpen}
                        onClose={this.toggle}
                    >


                        <Nav navbar className="navbar-style">

                            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggle} /></NavItem>
                            <div className="left ml-10 text-left ">
                                <NavItem>Orden de Trabajo</NavItem>
                                <NavItem>
                                    <NavLink className="mr-5" to="/ListaOrdenes">Ver</NavLink>
                                    <NavLink to="/OrdenTrabajo">Crear</NavLink>
                                </NavItem>
                                <NavItem>Directorio de Clientess</NavItem>
                                <NavItem><NavLink className="mr-5" to="/ListadoClientes">Ver</NavLink>
                                    <NavLink to="/CrearCliente">Crear</NavLink>


                                </NavItem>
                                <NavItem>Historial de Ventas</NavItem>
                                <NavItem>Agenda del vendedor</NavItem>

                                <NavItem>
                                    <Button onClick={this.handleLogout} className="log-out center">Cerrar Sesión</Button>
                                </NavItem>

                                <NavItem>

                                </NavItem>
                            </div>
                        </Nav>

                    </Drawer>

                    <Drawer
                        anchor="right"
                        open={this.state.drawerOpenConfig}
                        onClose={this.toggleConfig}
                    >
                        <Nav navbar className="navbar-style">
                            
                            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggleConfig} /></NavItem>
                            
                            <div className="left ml-10 text-left ">
                                <NavItem></NavItem>

                                <NavItem><NavLink to="/Visitadores">Visitadores</NavLink></NavItem>

                                <NavItem  >
                                    <NavLink to="/CrearVisitador">Crear</NavLink>
                                </NavItem>

                                <NavItem>
                                    <Button onClick={this.handleLogout} className="log-out center">Cerrar Sesión</Button>
                                </NavItem>

                                <NavItem>
                                </NavItem>
                            </div>

                        </Nav>
                    </Drawer>
                    
                    {/* Admin */}
                    <div className="App">
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
                        <Route path="/Orden/:clave/PDF" component={OrdenPdf} />
                        <Route path="/ListaOrdenes" render={() => <ListaOrdenes />} />
                        <Route path="/CrearCliente" render={() => <CrearCliente />} />
                        <Route path="/ListadoClientes" render={() => <ListadoClientes />} />
                        <Route path="/Reports" render={() => <Reports />} />
                        <Route path="/Pagos/:clave" component={Pagos} />
                        <Route path="/Visitadores" render={() => <Visitadores />} />
                        <Route path="/CrearVisitador" render={() => <CrearVisitador />} />
                    </div>

                </BrowserRouter>

            );
        } else {

            return (
                <BrowserRouter>
                    <Col sm={12} className="nav-style" >
                        <Navbar color="white" light expand="md">

                            <Col sm={2}>
                                <NavbarBrand > <NavLink to="/"><img src={AnepsaLogo} alt="logo-anepsa" className="LogoAnepsa"></img></NavLink></NavbarBrand>
                            </Col>
                            <Col sm={6}></Col>
                            <Col sm={3}>
                                {/* <p>{user} </p> */}
                                <p>Hola, {getName} </p>
                                <p>{dateNew}</p>
                            </Col>
                            <Col sm={1}>

                                <Button color="white " onClick={this.toggle} style={{ marginBottom: '1rem' }}><MenuIcon className="text-right" /></Button>

                            </Col>


                        </Navbar>
                    </Col>
                    <Drawer
                        anchor="right"
                        open={this.state.drawerOpen}
                        onClose={this.toggle}
                    >


                        <Nav navbar className="navbar-style">

                            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggle} /></NavItem>
                            <div className="left ml-10 text-left ">
                                <NavItem>Orden de Trabajo</NavItem>
                                <NavItem>
                                    <NavLink className="mr-5" to="/ListaOrdenes">Ver</NavLink>
                                    <NavLink to="/OrdenTrabajo">Crear</NavLink>
                                </NavItem>
                                <NavItem>Directorio de Clientes</NavItem>
                                <NavItem><NavLink className="mr-5" to="/ListadoClientes">Ver</NavLink>
                                    <NavLink to="/CrearCliente">Crear</NavLink>


                                </NavItem>
                                <NavItem>Historial de Ventas</NavItem>
                                <NavItem>Agenda del vendedor</NavItem>

                                <NavItem>

                                    <Button onClick={this.handleLogout} className="log-out center">Cerrar Sesión</Button>

                                </NavItem>

                                <NavItem>

                                </NavItem>
                            </div>
                        </Nav>

                    </Drawer>

                    <Drawer
                        anchor="right"
                        open={this.state.drawerOpenConfig}
                        onClose={this.toggleConfig}
                    >


                        <Nav navbar className="navbar-style">

                            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggleConfig} /></NavItem>
                            <div className="left ml-10 text-left ">




                                <NavItem><NavLink to="/Visitadores">Visitadores</NavLink></NavItem>
                                <NavItem  >
                                    <NavLink to="/CrearVisitador">Crear</NavLink>


                                </NavItem>

                                <NavItem>

                                    <Button onClick={handleLogout} className="log-out center">Cerrar Sesión</Button>

                                </NavItem>

                                <NavItem>

                                </NavItem>
                            </div>
                        </Nav>

                    </Drawer>




                    <div className="App">

                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
                        <Route path="/Orden/:clave/PDF" component={OrdenPdf} />
                        <Route path="/ListaOrdenes" render={() => <ListaOrdenes />} />
                        <Route path="/CrearCliente" render={() => <CrearCliente />} />
                        <Route path="/ListadoClientes" render={() => <ListadoClientes />} />
                        <Route path="/Reports" render={() => <Home />} />
                        <Route path="/Pagos/:clave" component={Pagos}/>
                        <Route path="/Visitadores" render={() => <Visitadores />} />
                        <Route path="/CrearVisitador" render={() => <CrearVisitador />} />


                    </div>

                </BrowserRouter>

            );

        }


    }
}

export default Menu;