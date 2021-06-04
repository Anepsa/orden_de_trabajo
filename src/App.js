import React, {Component} from 'react';
import './resources/styles.css';
import Menu from './Router'
import firebase from 'firebase';
import ImgNegocios from './assets/negocios.jpg'
import LogoAnepsa from './assets/anepsa.png'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {AppContextProvider, AppContext} from "./AppContext";

Menu.contextType = AppContext;


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null, 
    }
    this.handleAuth = this.handleAuth.bind(this); 
    this.handleLogout = this.handleLogout.bind(this); 
};

handleAuth() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ...
  });
}

handleLogout(){
  firebase.auth().signOut()
  .then(result => console.log(`${result.user.email} ha salido`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));
}

componentWillMount(){
  firebase.auth().onAuthStateChanged(user=>{
    this.setState({
      user: user,
      
    });
  });
}

handleRender() {
  if(this.state.user) {
    return ( 
      
      <AppContextProvider  >
         
          
        <Menu/>        
        
    
      </AppContextProvider>
      )
  }

   else {
     return (
      <div className="back-login">
      <div className="login-left">
      <img className="img-style" src={ImgNegocios} alt="negocio"></img>
      </div>
        <div className="login-right">
          <Form className="login">
            <img src={LogoAnepsa} alt="logo-anepsa" className="LogoAnepsa"></img>
            <FormGroup className="text-important">
            <hr/>
            <Label>Correo Electrónico</Label>
              <Input type="email" id="email" ></Input>
              </FormGroup>
              <FormGroup className="text-important">
            <Label >Contraseña</Label>
            <Input type="password"  id="password"></Input>
            </FormGroup>
      
        <Button  onClick={this.handleAuth}>Iniciar Sesión</Button>
        </Form>
        </div>
  
      </div>
     ); 
   }
}

  render() {
      return ( 
        <div>{this.handleRender()}</div>
        )
  }
} 


export default App;
