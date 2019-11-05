import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../components/Home'
import ListaOrdenes from '../components/OrdenTrabajo'
import OrdenTrabajo from "../components/OrdenTrabajo/CrearOrden"
import CrearCliente from "../components/Clientes/CrearCliente"
import Visitadores from "../components/Visitadores"
import CrearVisitador from "../components/Visitadores/CrearVisitador"

import ListadoClientes from "../components/Clientes"
import { AppContext} from "../AppContext";
import { NavLink } from "react-router-dom";
import AnepsaLogo from "../assets/anepsa.png"
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import {

  Navbar,

  NavbarBrand,
  Nav,
  NavItem,Button,  Col, 

 
  } from 'reactstrap';



OrdenTrabajo.contextType = AppContext;
ListaOrdenes.contextType = AppContext;
CrearCliente.contextType = AppContext;
ListadoClientes.contextType =AppContext;
Visitadores.contextType = AppContext;
CrearVisitador.contextType = AppContext;




class Menu extends Component  {  
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.toggleConfig = this.toggleConfig.bind(this)
      this.state = {
        drawerOpen: false,
        drawerOpenConfig: false
      };
    }
    toggle() {
      this.setState({
        // isOpen: !this.state.isOpen,
        drawerOpen: !this.state.drawerOpen
      });
    }
    toggleConfig() {
      this.setState({
        // isOpen: !this.state.isOpen,
        drawerOpenConfig: !this.state.drawerOpenConfig
      });
    }
  render(){
    const{handleLogout, getName, dateNew} = this.context
  return (
    <BrowserRouter>
  <Col sm={12} className="nav-style" >
    <Navbar  color="white" light expand="md">
      
    <Col sm={2}>
        <NavbarBrand > <NavLink  to="/"><img src={AnepsaLogo} alt="logo-anepsa" className="LogoAnepsa"></img></NavLink></NavbarBrand>
        </Col>
        <Col sm={6}></Col>
       <Col sm={3}>
        {/* <p>{user} </p> */}
        <p>Hola, {getName} </p>
        <p>{dateNew}</p>
        </Col>
        <Col sm={1}>
        
        <Button  color="white "  onClick={this.toggle} style={{ marginBottom: '1rem' }}><MenuIcon className="text-right"/></Button>
        <Button  color="white "  onClick={this.toggleConfig} style={{ marginBottom: '1rem' }}><SettingsIcon  className="text-right"/></Button>
        </Col>
       
       
      </Navbar>
      </Col>
    
        <Drawer
        anchor="right"
        open={this.state.drawerOpen}
        onClose={this.toggle}
       >
        

          <Nav  navbar className="navbar-style">
            
            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggle}/></NavItem>
            <div className="left ml-10 text-left ">
            <NavItem  > <NavLink to="/ListaOrdenes">Orden de trabajo</NavLink></NavItem>
            <NavItem  > 
                         <NavLink   to="/OrdenTrabajo">Crear</NavLink>
            
            
            </NavItem>
            <NavItem><NavLink to="/ListadoClientes">Directorio Clientes</NavLink></NavItem>
            <NavItem  > 
                         <NavLink   to="/CrearCliente">Crear</NavLink>
            
            
            </NavItem>
            <NavItem>Historial de Ventas</NavItem>
            <NavItem>Agenda del vendedor</NavItem>
           
            <NavItem>
           
         <Button  onClick={handleLogout} className="log-out center">Cerrar Sesión</Button>
    
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
        

          <Nav  navbar className="navbar-style">
            
            <NavItem className="text-right "  ><CloseOutlinedIcon onClick={this.toggleConfig}/></NavItem>
            <div className="left ml-10 text-left ">
          
            
            
       
            <NavItem><NavLink to="/Visitadores">Visitadores</NavLink></NavItem>
            <NavItem  > 
                         <NavLink   to="/CrearVisitador">Crear</NavLink>
            
            
            </NavItem>
            <NavItem><NavLink to="/Vendedores">Vendedores</NavLink></NavItem>
            <NavItem  > 
                         <NavLink   to="/CrearVendedor">Crear</NavLink>
            
            
            </NavItem>
           
            <NavItem>
           
         <Button  onClick={handleLogout} className="log-out center">Cerrar Sesión</Button>
    
            </NavItem>

            <NavItem>
              
            </NavItem>
            </div>
          </Nav>
     
        </Drawer>
  
  
 
  
    <div className="App">
         
            <Route exact path="/" render={() => <Home />} />
            <Route path="/OrdenTrabajo" render={() => <OrdenTrabajo />} />
            <Route path="/ListaOrdenes" render={() => <ListaOrdenes />} />
            <Route path="/CrearCliente" render={() => <CrearCliente />} />
            <Route path="/ListadoClientes" render={() => <ListadoClientes />} />
            <Route path="/Visitadores" render={() => <Visitadores />} />
            <Route path="/CrearVisitador" render={() => <CrearVisitador />} />
    
           
   </div>
      
      </BrowserRouter>
      
  );
}
}

export default Menu;