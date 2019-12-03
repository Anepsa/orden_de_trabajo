  
import React, { Component } from "react";
import db from "./Fire.js";
import firebase from 'firebase';


export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        //Datos que se obtienen de las respuestas del formulario
        this.state ={
             uge:"", vendedor:"", copia:"", oferta:"", cedido:"", proyecto:"", tipoCliente:"",  nombreSolicitante:"", empresaSolicitante:"", rfcSolicitante:"",holdingSolicitante:"",servicioSolicitante:"",ventaSolicitante:"", comentariosSolicitante:"",direccionSolicitante:"", delegacionSolicitante:"", EDOSolicitante:"", telSolicitante:"", extTelSolicitante:"", emailSolicitante:"", objetivo:"", otroObj:"", proposito:"", otroProp:"", presentarse:"",visitador:"", fechaIns:"", telInsp:"", extInsp:"", emailInsp:"", dirInsp:"",  observaciones:"", bienes:"", otroBien:"", info:"", otraInfo:"", inicio:"", entrega:"",  facturar:"",
            presupuesto: 0,
            comision:0,
            montoVendido:0,             
            empresaSelect:"",    
            productClave:"",
            items:[] ,
            newcontador: 0,
            mes: [],
            getDate:[],
            consulta:[],
            nuevaClave:"",
            consultaCliente:[],
            obtDataCliente:[],
            obtDataEmpresa:[],
            listaVisitador:[],
            dataVisitadores:[],
            ugeList:[],
            buscador:"",
            newestatus:"",
            getName:"",
            idItem:"",
            dataClientes:[],
            contClientes:[],
            nombresClientes:[],
            nombresEmpresas:[],
            estatusEmpresa:"", 
            modalIsOpen:true,
             
           getNewDate:"",
            clienteNombre:"", rfcCliente:"", direccionCliente:"", delegacionCliente:"", EDOCliente:"", atencionCliente:"", dateToCompare:"",telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",cargo:"", holding:"", servicios:"",area:"", venta:"", comentarios:"",
            visitadorNombre:"", rfcVisitador:"", direccionVisitador:"", delegacionVisitador:"", EDOVisitador:"", atencionVisitador:"", telvisitador:"", extTelVisitador:"",emailVisitador:"",
           
           
        }
    this.handleChangeCliente = this.handleChangeCliente.bind(this)
    this.handleUpdateCliente = this.handleUpdateCliente.bind(this)
    this.handleSubmitCliente = this.handleSubmitCliente.bind(this);
    this.handleCliente = this.handleCliente.bind(this)
    this.handleSubmitVisitador = this.handleSubmitVisitador.bind(this);
    this.handleSelectUge = this.handleSelectUge.bind(this)
    this.onClickItem = this.onClickItem.bind(this)
    this.onClickItemCliente = this.onClickItemCliente.bind(this)

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeVisitador = this.handleChangeVisitador.bind(this);
    this.crearNuevo = this.crearNuevo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.obtenerBD = this.obtenerBD.bind(this);
    this.obtenerClientes = this.obtenerClientes.bind(this)
    this.obtenerVisitadores = this.obtenerVisitadores.bind(this)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEmpresa = this.handleEmpresa.bind(this)
    this.handleChangeOrden = this.handleChangeOrden.bind(this)

    }
    //Funcion para cuando aparece el modal
    openModal() {
        this.setState({modalIsOpen: true});
      }

    closeModal() {
        this.setState({modalIsOpen: false});
      }
   //Actualizacion del estado por cada cambio de valor
    handleChange = (e)=>{
   
        
        this.setState({ 
            [e.target.name]:e.target.value.toUpperCase()
        },()=>{
          const montoVendido= parseInt(this.state.presupuesto) + parseInt(this.state.comision)
          this.setState({
            montoVendido: montoVendido,
           
          })
        })
        
       
        
        
    } 
    //Lista  de las UGE de los vendedores
    handleClick = (e) =>{

      const list = this.state.ugeList

     const value=  e.target.value;
     const newvalue = [value, ...list]
      
     this.setState({
       ugeList: newvalue
     })
    }


//Cambio de estado al selecionar un UGE en formulario crear orden
    handleSelectUge = (e) =>{

      const ugeSelect = e.target.value;
      this.setState({
        uge:ugeSelect
      })

  db.collection("visitadores").where("uge", "array-contains", ugeSelect)
  .get()
  .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data().nombre);          
          this.setState({
            listaVisitador:data,


          })
  
          
          
      });
      db.collection("clientes").where("area", "==", ugeSelect)
      .get()
      .then(querySnapshot => {
          const dataNom = querySnapshot.docs.map(doc => doc.data().nombre);
          const dataEmp = querySnapshot.docs.map(doc => doc.data().empresa);  
              this.setState({
                nombresClientes:dataNom,
                nombresEmpresas:dataEmp,
    
    
              })
      
              
              
          });
}

//Filtro de Empresa al seleccionar en formulario crearOrden
    handleEmpresa = (e) =>{
      e.preventDefault();
      const empresa = e.target.value
      this.setState({ 
      estatusEmpresa: empresa
    })
    if(empresa === ""){
      this.setState({
        obtDataCliente:[],
      })
      
    }else{
      db.collection("clientes").where("nombre", "==", empresa )
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());     
              this.setState({
                obtDataCliente:data[0],
              })   
          });
    }
    }
//Filtro de Cliente al seleccionar en formulario crearOrden
handleCliente = (e) =>{
  e.preventDefault();
  const cliente = e.target.value
      this.setState({ 
      estatusEmpresa: cliente,
    })
    if(cliente === ""){
      this.setState({
        obtDataCliente:[],
      })  
    }else{
      db.collection("clientes").where("empresa", "==", cliente )
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              this.setState({
                obtDataCliente:data[0],

              })
              
              
          });
    
  }
}
  
//Filtros de Los Visitadores
handleChangeVisitador = (e) =>{
  const name = e.target.name
  const handle = e.target.value;
  if(handle === ""){

    db.collection("visitadores").onSnapshot(this.obtenerVisitadores)
    }else  if(name === "nombre"){
      db.collection("visitadores").where("nombre", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                dataVisitadores:data

              })
              
              
          });
    } 
    else if(name === "correo"){
      db.collection("visitadores").where("email", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                dataVisitadores:data

              })
              
              
          });
        }else  if(name === "rfc"){
          db.collection("visitadores").where("rfc", "==", handle)
          .get()
          .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
                  
                  this.setState({
                    dataVisitadores:data
    
                  })
                  
                  
              });
        } 
        else  if(name === "fechaBuscador"){
          const fecha = handle.replace(/-/g,"/")
          db.collection("visitadores").where("newDate", "==", fecha)
          .get()
          .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
                  
                  this.setState({
                    dataVisitadores:data
    
                  })
                  
                  
              });
        } 
          


}

//Filtro  de los Clientes
  handleChangeCliente= (e)=>{
    
    const name = e.target.name
    const handle = e.target.value.toUpperCase();

    if(handle === ""){

      db.collection("clientes").onSnapshot(this.obtenerClientes)
      }else  if(name === "buscadorClave"){
        db.collection("clientes").where("clave", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });
      } 
      else if(name === "holding"){
        db.collection("clientes").where("holding", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      } 
      else if(name === "cargo"){
        db.collection("clientes").where("cargo", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      } 
      else if(name === "servicios"){
        db.collection("clientes").where("servicios", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      } 
      else if(name === "area"){
        db.collection("clientes").where("area", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      }  
      else if(name === "buscadorNombre"){
        db.collection("clientes").where("nombre", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      } 
      else if(name === "buscadorEmpresa"){
        db.collection("clientes").where("empresa", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      } else if(name === "nombreVendedor"){
        db.collection("clientes").where("vendedor", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });
          
        }else if (name === "fechaCliente"){
        const fecha = handle.replace(/-/g,"/")
        db.collection("clientes").where("dateToCompare", "==", fecha)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      }else if(name === "estatus"){
        db.collection("clientes").where("estatus", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      }
} 


//Filtro de las Ordenes
handleChangeOrden= (e)=>{
    
  const name = e.target.name

  const handle = e.target.value.toUpperCase()
  if(handle === ""){

    db.collection("orden").onSnapshot(this.obtenerBD)
    }else  if(name === "buscador"){
      db.collection("orden").where("productClave", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });
    }  
    else if(name === "bienes"){
      db.collection("orden").where("bienes", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    } 
    else if(name === "proyecto"){
      db.collection("orden").where("proyecto", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    } 
    else if(name === "proposito"){
      db.collection("orden").where("proposito", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    }
    else if(name === "tipoProyecto"){
      db.collection("orden").where("uge", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    } 
    else if(name === "empresa"){
      db.collection("orden").where("cliente.empresa", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    }
    else if(name === "cliente"){
      db.collection("orden").where("cliente.nombre", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    } 
    else if(name === "nombreVendedor"){
      db.collection("orden").where("vendedor", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });
        
      }else if (name === "fechaBuscador"){
      const fecha = handle.replace(/-/g,"/")
      db.collection("orden").where("dateToCompare", "==", fecha)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });

    }else if(name === "estatus"){
      db.collection("orden").where("estatus", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                dataClientes:data

              })
              
              
          });

    }
} 

//Editar orden de trabajo
    handleUpdate () {

               
    const newid=  this.state.idItem
    const oferta = this.state.oferta
    const copia = this.state.copia
    const visitador = this.state.visitador
    const cedido = this.state.cedido
    const proyecto= this.state.proyecto
               const tipoCliente = this.state.tipoCliente
               const  nombreSolicitante = this.state.nombreSolicitante
               const  empresaSolicitante = this.state.empresaSolicitante
               const rfcSolicitante=this.state.rfcSolicitante
               const holdingSolicitante = this.state.holdingSolicitante
               const direccionSolicitante= this.state.direccionSolicitante
               const delegacionSolicitante=this.state.delegacionSolicitante
               const    EDOSolicitante=this.state.EDOSolicitante
               const   telSolicitante=this.state.telSolicitante
               const  emailSolicitante =this.state.emailSolicitante
              const cargoSolicitante = this.state.cargoSolicitante
              const ventaSolicitante = this.state.ventaSolicitante 
              const objetivo=this.state.objetivo
               const otroObj=this.state.otroObj
               const proposito=this.state.proposito
               const otroProp= this.state.otroProp
               const presentarse= this.state.presentarse
               const fechaIns= this.state.fechaIns
               const telInsp= this.state.telInsp
               const extInsp= this.state.extInsp
               const emailInsp= this.state.emailInsp
               const dirInsp= this.state.dirInsp
               const observaciones=this.state.observaciones
               const bienes= this.state.bienes
               const otroBien= this.state.otroBien
               const info=this.state.info 
               const otraInfo = this.state.otraInfo
               const inicio=this.state.inicio
               const entrega=this.state.entrega
               const facturar=this.state.facturar
               const presupuesto= this.state.presupuesto
               const comision=this.state.comision
               const montoVendido=this.state.montoVendido  

    db.collection("orden").where("productClave", "==", newid )
    .get()
    .then(querySnapshot =>  {
        querySnapshot.forEach(function(doc) {
            db.collection("orden").doc(doc.id).update({
             
              copia:copia, 
              oferta:oferta, 
              cedido:cedido,
              proyecto: proyecto, 
              visitador:visitador, 
                tipoCliente:tipoCliente,
                nombreSolicitante: nombreSolicitante,
                empresaSolicitante: empresaSolicitante,
                rfcSolicitante:rfcSolicitante,
                direccionSolicitante: direccionSolicitante,
                delegacionSolicitante:delegacionSolicitante,
                EDOSolicitante:EDOSolicitante,
                telSolicitante:telSolicitante,
                emailSolicitante: emailSolicitante,
                cargoSolicitante:cargoSolicitante,
                holdingSolicitante:holdingSolicitante,
                ventaSolicitante:ventaSolicitante,
                objetivo:objetivo,
                otroObj:otroObj,
                proposito:proposito,
                otroProp:otroProp,
                presentarse: presentarse,
                fechaIns: fechaIns,
                telInsp: telInsp,
                extInsp: extInsp,
                emailInsp: emailInsp,
                dirInsp: dirInsp,
                observaciones:observaciones,
                bienes: bienes,
                otroBien: otroBien,
                info:info,
                otraInfo: otraInfo,
                inicio: inicio,
                entrega:entrega,
                facturar:facturar,
                presupuesto: presupuesto,
                comision:comision,
                montoVendido:montoVendido,  
                  
            }          
            );  
          
        });
   })
  }

  //Editar cliente
  handleUpdateCliente=(e) =>{

               
    const newid=  this.state.idItem
    const estatus = this.state.estatus
    const direccion = this.state.direccionCliente
    const rfc = this.state.rfcCliente
    db.collection("clientes").where("clave", "==", newid )
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            db.collection("clientes").doc(doc.id).update({ estatus: estatus ,
            direccion:direccion, rfc:rfc});
        });
   })
  }


  //Enviar formulario Cliente firebase
  handleSubmitCliente =(e)=>{
    e.preventDefault();
    let contador = parseInt(this.state.contClientes) + 1 ;
    let claveUnica;
    if( contador < 10){ 
      claveUnica =  '00'+ contador
   } else if(contador < 100 && contador >= 10){
      claveUnica =  '0'+ contador
   } else { 
      claveUnica =  contador
   }
   
      db.collection("clientes").add({
        clave: claveUnica,
        nombre: this.state.clienteNombre,
        rfc: this.state.rfcCliente,      
        direccion: this.state.direccionCliente,
        delegacion: this.state.delegacionCliente,
        estado: this.state.EDOCliente,
        telefono: this.state.telCliente,
        extTel:this.state.extTelCliente,
        email:this.state.emailCliente,
        empresa: this.state.empresa,
        vendedor:this.state.getName,
        estatus:this.state.estatus,
        cargo: this.state.cargo,
        holding: this.state.holding,
        servicios: this.state.servicios,
        area: this.state.area,
        venta:this.state.venta,
        comentarios:this.state.comentarios,
        contador:contador,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        dateToCompare: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit'}),
        getNewDate: new Date().toLocaleString(),
      })


     
      this.setState({modalIsOpen:true,
        contClientes:"",nombreCliente:"", rfcCliente:"", direccionCliente:"", delegacionCliente:"", EDOCliente:"", atencion:"", telCliente:"", extTel:"",emailCliente:"",
     })

  }

//Enviar formulario Visitador Firebase
  handleSubmitVisitador =(e)=>{

    e.preventDefault();
   
  
    document.getElementById("formClear").reset();
   

      db.collection("visitadores").add({
        nombre: this.state.visitadorNombre,
        rfc: this.state.rfcVisitador,      
        direccion: this.state.direccionVisitador,
        delegacion: this.state.delegacionVisitador,
        estado: this.state.EDOVisitador,
        telefono: this.state.telVisitador,
        extension : this.state.extTelVisitador,
        email:this.state.emailVisitador,
        newDate: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit'}),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        getNewDate: new Date().toLocaleString(),

      })

      this.setState({ modalIsOpen:true,
        nombreVisitador:"", rfcVisitador:"", direccionVisitador:"", delegacionVisitador:"", EDOVisitador:"", atencionVisitador:"", telVisitador:"", extTelVisitador:"",emailVisitador:"",ugeList:[],
      
          
        
      })

  }

 //Enviar formulario orden Firebase
    handleSubmit = (e)  => {
      
        
        e.preventDefault();

            let obtDate=  new Date().toLocaleDateString("zh-TW");   
            const ugeClave = this.state.uge.substr(0,3).toUpperCase(); 
            const dateClave = obtDate.slice(5,7).replace("/","")
            const newDate = obtDate.slice(0, 2)
            const nombreVerificar = document.getElementById("nombreSolicitante").value   
           if(dateClave ===
             this.state.mes){
              
             let contador = parseInt(this.state.getDate) + 1 ;

             let claveUnica ;
                   
              if( contador < 10){ 
                 claveUnica = newDate+ dateClave + ugeClave + '00'+ contador
              } else if(contador < 100 && contador >= 10){
                 claveUnica = newDate + dateClave + ugeClave + '0'+ contador
              } else { 
                 claveUnica = newDate + dateClave + ugeClave + contador
              }
             
              
             if( nombreVerificar === ""){ 
          db.collection("orden").add({
          
            productClave: claveUnica,
            contador: contador,
            mes:dateClave,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            dateToCompare: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit'}),
            getNewDate: new Date().toLocaleString(),
            cliente: this.state.obtDataCliente,
            vendedor: this.state.vendedor,
            uge: this.state.uge,      
            copia:this.state.copia,
            oferta:this.state.oferta,
            cedido:this.state.cedido,
            proyecto: this.state.proyecto,
            visitador: this.state.visitador,
            tipoCliente:this.state.tipoCliente,
            nombreSolicitante: this.state.obtDataCliente.nombre,
            empresaSolicitante: this.state.obtDataCliente.empresa,
            cargoSolicitante: this.state.obtDataCliente.cargo,
            areaSolicitante: this.state.obtDataCliente.area,
            holdingSolicitante: this.state.obtDataCliente.holding,
            servicioSolicitante: this.state.obtDataCliente.servicios,
            ventaSolicitante: this.state.obtDataCliente.venta,
            proveedorSolicitante:this.state.obtDataCliente.vendedor,
            comentariosSolicitante: this.state.obtDataCliente.comentarios,
            rfcSolicitante:this.state.obtDataCliente.rfc,
            direccionSolicitante: this.state.obtDataCliente.direccion,
            delegacionSolicitante:this.state.obtDataCliente.delegacion,
            EDOSolicitante:this.state.obtDataCliente.estado,
            telSolicitante:this.state.obtDataCliente.telefono,
            extTelSolicitante:this.state.obtDataCliente.extTel,
            emailSolicitante: this.state.obtDataCliente.email,
            objetivo:this.state.obtDataCliente.servicios,
            otroObj:this.state.otroObj,
            proposito:this.state.proposito,
            otroProp: this.state.otroProp,
            presentarse: this.state.presentarse,
            fechaIns: this.state.fechaIns,
            telInsp: this.state.telInsp,
            extInsp: this.state.extInsp,
            emailInsp: this.state.emailInsp,
            dirInsp: this.state.dirInsp,
            observaciones:this.state.observaciones,
            bienes: this.state.bienes,
            otroBien: this.state.otroBien,
            info:this.state.info ,
            otraInfo: this.state.otraInfo,
            inicio: this.state.inicio,
            entrega:this.state.entrega,
            facturar:this.state.facturar,
            presupuesto: this.state.presupuesto,
            comision:this.state.presupuesto,
            montoVendido:this.state.montoVendido, 


          })}else {
            db.collection("orden").add({
          
              productClave: claveUnica,
              contador: contador,
              mes:dateClave,
              // clienteNombre:this.state.clienteNombre, rfcCliente:this.state.rfcCliente, direccionCliente:this.state.direccionCliente, delegacionCliente:this.state.delegacionCliente, EDOCliente:this.state.EDOCliente, atencionCliente:this.state.atencionCliente, telCliente:this.state.telCliente, extTelCliente:this.state.extTelCliente,emailCliente:this.state.emailCliente
              // ,empresa:this.state.empresa,estatus:this.state.estatus,cargo:this.state.cargo, holding:this.state.holdgin, servicios:this.state.servicios,area:this.state.area, venta:this.state.venta, comentarios:this.state.comentarios,
              date: firebase.firestore.FieldValue.serverTimestamp(),
              dateToCompare: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit'}),
              getNewDate: new Date().toLocaleString(),
              cliente: this.state.obtDataCliente,
            
              vendedor: this.state.vendedor,
              uge: this.state.uge,      
              copia:this.state.copia,
              oferta:this.state.oferta,
              cedido:this.state.cedido,
              proyecto: this.state.proyecto,
              visitador: this.state.visitador,
              tipoCliente:this.state.tipoCliente,
              nombreSolicitante: this.state.nombreSolicitante,
              empresaSolicitante: this.state.empresaSolicitante,
              rfcSolicitante:this.state.rfcSolicitante,
              areaSolicitante: this.state.uge,
              holdingSolicitante: this.state.holdingSolicitante,
              servicioSolicitante: this.state.servicioSolicitante,
              ventaSolicitante: this.state.ventaSolicitante,
              proveedorSolicitante:this.state.obtDataCliente.vendedor,
              comentariosSolicitante: this.state.comentariosSolicitante,
              direccionSolicitante: this.state.direccionSolicitante,
              delegacionSolicitante:this.state.delegacionSolicitante,
              EDOSolicitante:this.state.EDOSolicitante,
              telSolicitante:this.state.telSolicitante,
              
              emailSolicitante: this.state.emailSolicitante,
              objetivo:this.state.obtDataCliente.servicios,
              otroObj:this.state.otroObj,
              proposito:this.state.proposito,
              otroProp: this.state.otroProp,
              presentarse: this.state.presentarse,
              fechaIns: this.state.fechaIns,
              telInsp: this.state.telInsp,
              extInsp: this.state.extInsp,
              emailInsp: this.state.emailInsp,
              dirInsp: this.state.dirInsp,
              observaciones:this.state.observaciones,
              bienes: this.state.bienes,
              otroBien: this.state.otroBien,
              info:this.state.info ,
              otraInfo: this.state.otraInfo,
              inicio: this.state.inicio,
              entrega:this.state.entrega,
              facturar:this.state.facturar,
              presupuesto: this.state.presupuesto,
              comision:this.state.presupuesto,
              montoVendido:this.state.montoVendido, 

          })
      
        }
         
          this.setState({
            modalIsOpen:true,
            newcontador: contador,
            nuevaClave: claveUnica,

           
            

 
         })

    }
   else {
    const contador = 1;
    const claveUnica = newDate + dateClave + ugeClave + '00'+ contador
       
    if( nombreVerificar === ""){ 
      db.collection("orden").add({
      
        productClave: claveUnica,
        contador: contador,
        mes:dateClave,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        dateToCompare: new Date().toLocaleDateString("zh-TW",{ year: 'numeric', month: '2-digit', day: '2-digit'}),
        getNewDate: new Date().toLocaleString(),
        cliente: this.state.obtDataCliente,
        vendedor: this.state.vendedor,
        uge: this.state.uge,      
        copia:this.state.copia,
        oferta:this.state.oferta,
        cedido:this.state.cedido,
        proyecto: this.state.proyecto,
        visitador: this.state.visitador,
        tipoCliente:this.state.tipoCliente,
        nombreSolicitante: this.state.obtDataCliente.nombre,
        empresaSolicitante: this.state.obtDataCliente.empresa,
        cargoSolicitante: this.state.obtDataCliente.cargo,
        areaSolicitante: this.state.obtDataCliente.area,
        holdingSolicitante: this.state.obtDataCliente.holding,
        servicioSolicitante: this.state.obtDataCliente.servicios,
        ventaSolicitante: this.state.obtDataCliente.venta,
        proveedorSolicitante:this.state.obtDataCliente.vendedor,
        comentariosSolicitante: this.state.obtDataCliente.comentarios,
        rfcSolicitante:this.state.obtDataCliente.rfc,
        direccionSolicitante: this.state.obtDataCliente.direccion,
        delegacionSolicitante:this.state.obtDataCliente.delegacion,
        EDOSolicitante:this.state.obtDataCliente.estado,
        telSolicitante:this.state.obtDataCliente.telefono,
        extTelSolicitante:this.state.obtDataCliente.extTel,
        emailSolicitante: this.state.obtDataCliente.email,
        objetivo:this.state.obtDataCliente.servicios,
        otroObj:this.state.otroObj,
        proposito:this.state.proposito,
        otroProp: this.state.otroProp,
        presentarse: this.state.presentarse,
        fechaIns: this.state.fechaIns,
        telInsp: this.state.telInsp,
        extInsp: this.state.extInsp,
        emailInsp: this.state.emailInsp,
        dirInsp: this.state.dirInsp,
        observaciones:this.state.observaciones,
        bienes: this.state.bienes,
        otroBien: this.state.otroBien,
        info:this.state.info ,
        otraInfo: this.state.otraInfo,
        inicio: this.state.inicio,
        entrega:this.state.entrega,
        facturar:this.state.facturar,
        presupuesto: this.state.presupuesto,
        comision:this.state.presupuesto,
        montoVendido:this.state.montoVendido, 


      })}else {
        db.collection("orden").add({
      
          productClave: claveUnica,
          contador: contador,
          mes:dateClave,
           date: firebase.firestore.FieldValue.serverTimestamp(),
          dateToCompare: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit'}),
          getNewDate: new Date().toLocaleString(),
          cliente: this.state.obtDataCliente,
        
          vendedor: this.state.vendedor,
          uge: this.state.uge,      
          copia:this.state.copia,
          oferta:this.state.oferta,
          cedido:this.state.cedido,
          proyecto: this.state.proyecto,
          visitador: this.state.visitador,
          tipoCliente:this.state.tipoCliente,
          nombreSolicitante: this.state.nombreSolicitante,
          empresaSolicitante: this.state.empresaSolicitante,
          rfcSolicitante:this.state.rfcSolicitante,
          areaSolicitante: this.state.uge,
          holdingSolicitante: this.state.holdingSolicitante,
          servicioSolicitante: this.state.servicioSolicitante,
          ventaSolicitante: this.state.ventaSolicitante,
          proveedorSolicitante:this.state.obtDataCliente.vendedor,
          comentariosSolicitante: this.state.comentariosSolicitante,
          direccionSolicitante: this.state.direccionSolicitante,
          delegacionSolicitante:this.state.delegacionSolicitante,
          EDOSolicitante:this.state.EDOSolicitante,
          telSolicitante:this.state.telSolicitante,
          emailSolicitante: this.state.emailSolicitante,
          objetivo:this.state.obtDataCliente.servicios,
          otroObj:this.state.otroObj,
          proposito:this.state.proposito,
          otroProp: this.state.otroProp,
          presentarse: this.state.presentarse,
          fechaIns: this.state.fechaIns,
          telInsp: this.state.telInsp,
          extInsp: this.state.extInsp,
          emailInsp: this.state.emailInsp,
          dirInsp: this.state.dirInsp,
          observaciones:this.state.observaciones,
          bienes: this.state.bienes,
          otroBien: this.state.otroBien,
          info:this.state.info ,
          otraInfo: this.state.otraInfo,
          inicio: this.state.inicio,
          entrega:this.state.entrega,
          facturar:this.state.facturar,
          presupuesto: this.state.presupuesto,
          comision:this.state.presupuesto,
          montoVendido:this.state.montoVendido, 

      })
  
    }
     
      this.setState({
        modalIsOpen:true,
        newcontador: contador,
        nuevaClave: claveUnica,

       
        


     })
     

    }
       
  

  }


//Eliminar estado para Crear Nuevo Formulario
  crearNuevo = () => 

  {
      this.setState({
        obtDataCliente:[],
        nombresClientes:[],
        nombresEmpresas:[],
        montoVendido:"",
        nuevaClave:"",
       
        presupuesto: "",
              comision:"",
        uge:"", vendedor:"", copia:"", oferta:"", cedido:"", proyecto:"", tipoCliente:"",  nombreSolicitante:"", empresaSolicitante:"", rfcSolicitante:"",holdingSolicitante:"",servicioSolicitante:"",ventaSolicitante:"", comentariosSolicitante:"",direccionSolicitante:"", delegacionSolicitante:"", EDOSolicitante:"", telSolicitante:"", extTelSolicitante:"", emailSolicitante:"", objetivo:"", otroObj:"", proposito:"", otroProp:"", presentarse:"",visitador:"", fechaIns:"", telInsp:"", extInsp:"", emailInsp:"", dirInsp:"",  observaciones:"", bienes:"", otroBien:"", info:"", otraInfo:"", inicio:"", entrega:"",  facturar:"",
        modalIsOpen:false, 
        clienteNombre:"", rfcCliente:"", direccionCliente:"", delegacionCliente:"", EDOCliente:"", atencionCliente:"", dateToCompare:"",telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",cargo:"", holding:"", servicios:"",area:"", venta:"", comentarios:"",
        visitadorNombre:"", rfcVisitador:"", direccionVisitador:"", delegacionVisitador:"", EDOVisitador:"", atencionVisitador:"", telvisitador:"", extTelVisitador:"",emailVisitador:"",


    })
    
  
  }


//Obteneder rol y nombre  de usuarios
  obtenerUser= ()=>{
    const usuario = this.state.user
    db.collection("usuarios").where("email","==",  usuario ).get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      
      const getUser = data[0].name
      const admin = data[0].rol
            this.setState({ getName: getUser,
            rol:admin })
          }) 
   
    
  }

// obtener base de orden de trabajo
  obtenerBD=()=>{
        const obtRol = this.state.rol
        const obtName = this.state.getName
        if(obtRol === "admin"){
    db.collection("orden").orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        const newobj = data[0].contador 
       const newmes = data[0].mes
        this.setState({ items: data, getDate:newobj, mes:newmes });
       
      });

    } else{
      db.collection("orden").orderBy("date", "desc").limit(1)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        const newobj = data[0].contador
       const newmes = data[0].mes
        this.setState({  getDate:newobj, mes:newmes });
      })
      db.collection("orden").where("vendedor", "==", obtName).orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ items: data ,});
      });
    }
  }

//obtener base de datos Visitadores  
  obtenerVisitadores=()=>{
   
db.collection("visitadores").orderBy("date", "desc")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    this.setState({ dataVisitadores: data});
   
  });

}

//obtener base de datos Clientes
  obtenerClientes=()=>{
    const obtRol = this.state.rol
    const obtName = this.state.getName
    if(obtRol === "admin"){

            db.collection("clientes").orderBy("date", "desc")
              .get()
              .then(querySnapshot => {
                const dataClientes = querySnapshot.docs.map(doc =>  doc.data())
                  const news = dataClientes[0].contador
                this.setState({ dataClientes:dataClientes,  contClientes: news});
                
              
              });
    
            } else{

           

              db.collection("clientes").where("vendedor", "==", obtName).orderBy("date", "desc")
              .get()
              .then(querySnapshot => { 
               const dataClientes =  querySnapshot.docs.map(doc => doc.data());
               const news = dataClientes[0].contador
                this.setState({  dataClientes:dataClientes, contClientes: news});
              });
          }
     }



    componentDidMount() {

      const user =  firebase.auth().currentUser.email
      this.setState({
        user:user,
        dateNew: new Date().toLocaleDateString()
      })
    
      db.collection("usuarios").onSnapshot(this.obtenerUser)
      
      setTimeout(()=>{db.collection("orden").onSnapshot(this.obtenerBD)
      
    
    },2000)
    setTimeout(()=>{
    db.collection("clientes").onSnapshot(this.obtenerClientes)
  
  },2000)
      
      setTimeout(()=>{
        db.collection("visitadores").onSnapshot(this.obtenerVisitadores)
      
      },2000)
          }
    

//Obtener data modal orden 

     onClickItem(e){
       const newid=  e.target.value
       db.collection("orden").where("productClave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
             this.setState({
              consulta:data,
              idItem:newid, 
              getNewDate:data[0].getNewDate,
              comision:data[0].comision,
              presupuesto:data[0].presupuesto,
              montoVendido:data[0].montoVendido, 
              uge:data[0].uge,
              vendedor:data[0].vendedor, 
              copia:data[0].copia,
              oferta:data[0].oferta, 
              cedido:data[0].cedido, 
              proyecto:data[0].proyecto,
              tipoCliente:data[0].tipoCliente,
              nombreSolicitante:data[0].nombreSolicitante,
              empresaSolicitante:data[0].empresaSolicitante,
              cargoSolicitante:data[0].cargoSolicitante,
              direccionSolicitante:data[0].direccionSolicitante,
              delegacionSolicitante:data[0].delegacionSolicitante,
              areaSolicitante:data[0].areaSolicitante,
              holdingSolicitante:data[0].holdingSolicitante,
              rfcSolicitante:data[0].rfcSolicitante,
              ventaSolicitante:data[0].ventaSolicitante,
              EDOSolicitante:data[0].EDOSolicitante,
              telSolicitante:data[0].telSolicitante,
              extTelSolicitante:data[0].extTelSolicitante,
              emailSolicitante:data[0].emailSolicitante,
              objetivo:data[0].objetivo, otroObj:data[0].otroObj,
              proposito:data[0].proposito, otroProp:data[0].otroProp,
              presentarse:data[0].presentarse,visitador:data[0].visitador,
              fechaIns:data[0].fechaIns, telInsp:data[0].telInsp, 
              extInsp:data[0].extInsp, emailInsp:data[0].emailInsp,
              dirInsp:data[0].dirInsp,
              bienes:data[0].bienes, otroBien:data[0].otroBien, info:data[0].info, 
              otraInfo:data[0].otraInfo, inicio:data[0].inicio,
             entrega:data[0].entrega,  facturar:data[0].facturar, productClave:data[0].productClave,
              modalIsOpen:true} 
              
              ,() => {
                const ugeSelect = this.state.uge;
                db.collection("visitadores").where("uge", "array-contains", ugeSelect)
                .get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data().nombre);
                      this.setState({
                          listaVisitador:data,
              
              
                        })
                        
                        
                    });
              })
             
         });      
  
     }

     //obtender data modal cliente
     onClickItemCliente(e){
      
      
      let newid=  e.target.value
       db.collection("clientes").where("clave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
             this.setState({ idItem: newid,consultaCliente: data , modalIsOpen:true,
              clienteNombre:data[0].nombre,
              rfcCliente:data[0].rfc,
               direccionCliente:data[0].direccion, 
               delegacionCliente:data[0].delegacion, 
               EDOCliente:data[0].estado,  
               telCliente:data[0].telefono,
               extTelCliente:data[0].extTel,
               emailCliente:data[0].email,
               empresa:data[0].empresa,
               estatus:data[0].estatus,
               cargo:data[0].cargo, 
               holding:data[0].holding, 
               servicios:data[0].servicios,
               area:data[0].area, 
               venta:data[0].venta, 
               comentarios:data[0].comentarios,
               dateToCompare:data[0].dateToCompare,
         
            })
             
         });
     
        
           
 
     }

    
    render() {
        const {consultaCliente,newOrder, list,dataClientes, estatusEmpresa,items, listaVisitador, nombresEmpresas, dataVisitadores,
          // clienteNombre, rfcCliente, direccionCliente, delegacionCliente:"", EDOCliente:"", atencionCliente:"", telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",
          uge, vendedor, copia, oferta, cedido, proyecto, tipoCliente,  nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante, EDOSolicitante, telSolicitante, extTelSolicitante, holdingSolicitante,servicioSolicitante, ventaSolicitante, comentariosSolicitante, emailSolicitante, objetivo, otroObj, proposito, otroProp, presentarse,visitador, fechaIns, telInsp, extInsp, emailInsp, dirInsp,  observaciones, bienes, otroBien, info, otraInfo, inicio, entrega,  facturar,
          clienteNombre, rfcCliente, direccionCliente, delegacionCliente, EDOCliente, atencionCliente, telCliente, extTelCliente,emailCliente,empresa,estatus,cargo, holding, servicios,area, venta, comentarios,
         areaSolicitante,  cargoSolicitante,
        visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
          consulta,getName, getNewDate, 
           user, dateNew,obtDataCliente, nuevaClave, message, rol, montoVendido, comision, nombresClientes,presupuesto, 
          dateToCompare} = this.state;
      return (
        <AppContext.Provider
        value={{
          handleChangeCliente: this.handleChangeCliente,
          onClickItem: this.onClickItem,
          handleSelectUge: this.handleSelectUge,
          handleEmpresa: this.handleEmpresa,
          handleChange: this.handleChange,
          handleClick: this.handleClick,
          handleUpdateCliente: this.handleUpdateCliente,
          handleSubmitCliente: this.handleSubmitCliente,
          handleSubmitVisitador: this.handleSubmitVisitador,
          handleSubmitVendedor: this.handleSubmitVendedor,
          handleChangeVisitador: this.handleChangeVisitador,
          handleSubmit: this.handleSubmit ,
          obtenerBD: this.obtenerBD,
          obtenerClientes: this.obtenerClientes,
          productClave:this.state.productClave,
          modalIsOpen:this.state.modalIsOpen,
          openModal:this.openModal,
          closeModal:this.closeModal,
          handleUpdate:this.handleUpdate,
          obtenerVisitadores: this.obtenerVisitadores,
          handleChangeOrden:this.handleChangeOrden,
          handleCliente: this.handleCliente,
          onClickItemCliente:this.onClickItemCliente,

         visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
          crearNuevo: this.crearNuevo,
          consultaCliente,
          getNewDate,
          areaSolicitante,cargoSolicitante,
          uge, vendedor, copia, oferta, cedido, proyecto, tipoCliente,  nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante, EDOSolicitante, telSolicitante, extTelSolicitante, emailSolicitante, objetivo, otroObj, proposito, otroProp, presentarse,visitador, fechaIns, telInsp, extInsp, emailInsp, dirInsp,  observaciones, bienes, otroBien, info, otraInfo, inicio, entrega,  facturar,holdingSolicitante,servicioSolicitante, ventaSolicitante, comentariosSolicitante,
          clienteNombre, rfcCliente, direccionCliente, delegacionCliente, EDOCliente, atencionCliente, telCliente, extTelCliente,emailCliente,empresa,estatus,cargo, holding, servicios,area, venta, comentarios,
           dateToCompare,
          obtDataCliente,
          estatusEmpresa,
          rol,
          message,
          newOrder,
          list,
          items,
          dataClientes,
          consulta,
          getName,
          user,
          dateNew,
          montoVendido,
          comision,
          nombresClientes,
          nombresEmpresas,
          presupuesto,
          listaVisitador,
          dataVisitadores,
          nuevaClave,

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;