  
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
          // modalIsOpen:true,
             
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
    this.onClickItemUpdate =this.onClickItemUpdate.bind(this)
    this.onClickItemCliente = this.onClickItemCliente.bind(this)
    this.onClickItemUpdateCliente =this.onClickItemUpdateCliente.bind(this)
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
        },()=>{console.log(this.state)
          const montoVendido= parseInt(this.state.presupuesto) + parseInt(this.state.comision)
          this.setState({
            montoVendido: montoVendido,
           
          })
        })
        
       
        
        
    } 
    handleClick = (e) =>{
      const check = e.target
      console.log(check)
      const list = this.state.ugeList
      console.log(list)
     const value=  e.target.value;
     const newvalue = [value, ...list]
      
     this.setState({
       ugeList: newvalue
     }, () => {console.log(this.state.ugeList)})
    }

    handleSelectUge = (e) =>{

      const ugeSelect = e.target.value;
      console.log(ugeSelect)
      this.setState({
        uge:ugeSelect
      })

  db.collection("visitadores").where("uge", "array-contains", ugeSelect)
  .get()
  .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data().nombre);
    console.log(data)
          
          this.setState({
            listaVisitador:data,


          })
  
          
          
      });
      db.collection("clientes").where("area", "==", ugeSelect)
      .get()
      .then(querySnapshot => {
          const dataNom = querySnapshot.docs.map(doc => doc.data().nombre);
          const dataEmp = querySnapshot.docs.map(doc => doc.data().empresa);
        // console.log(data)
              
              this.setState({
                nombresClientes:dataNom,
                nombresEmpresas:dataEmp,
    
    
              })
      
              
              
          });
}
    handleEmpresa = (e) =>{
      e.preventDefault();
      const empresa = e.target.value
      console.log(empresa)
      this.setState({ 
      estatusEmpresa: empresa
    })
    if(empresa === ""){
      this.setState({
        obtDataCliente:[],
      },console.log(this.state.obtDataCliente))  
      
    }else{
      db.collection("clientes").where("nombre", "==", empresa )
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data[0])      
              this.setState({
                obtDataCliente:data[0],
              })   
          });
    }
    }

handleCliente = (e) =>{
  e.preventDefault();
  const cliente = e.target.value
      console.log(cliente)
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
          console.log(data[0])
              
              this.setState({
                obtDataCliente:data[0],

              })
              
              
          });
    
  }
}



    handleChangeCost = (e)=>{
        
      this.setState({ 
          [e.target.name]:e.target.value
      })
    
      
      
  } 
   


handleChangeVisitador = (e) =>{
  const name = e.target.name
  console.log(name)
  const handle = e.target.value;

  console.log(handle)
 
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
  
  handleChangeCliente= (e)=>{
    
    const name = e.target.name
    console.log(name)
    const handle = e.target.value;
 
    console.log(handle)
   
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

handleChangeOrden= (e)=>{
    
  const name = e.target.name
  console.log(name)
  const handle = e.target.value;

  console.log(handle)
 
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
               const direccionSolicitante= this.state.direccionSolicitante
               const delegacionSolicitante=this.state.delegacionSolicitante
               const    EDOSolicitante=this.state.EDOSolicitante
               const   telSolicitante=this.state.telSolicitante
               const  emailSolicitante =this.state.emailSolicitante

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
       

    console.log(newid)

    db.collection("orden").where("productClave", "==", newid )
    .get()
    .then(querySnapshot =>  {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            db.collection("orden").doc(doc.id).update({
             
              copia:copia, oferta:oferta, cedido:cedido,proyecto: proyecto, visitador:visitador, 
                tipoCliente:tipoCliente,
                nombreSolicitante: nombreSolicitante,
                empresaSolicitante: empresaSolicitante,
                rfcSolicitante:rfcSolicitante,
                direccionSolicitante: direccionSolicitante,
                delegacionSolicitante:delegacionSolicitante,
                EDOSolicitante:EDOSolicitante,
                telSolicitante:telSolicitante,
                emailSolicitante: emailSolicitante,
                objetivo:objetivo,
                otroObj:otroObj,
                proposito:proposito,
                otroProp:otroProp,
                // visitador
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
  handleUpdateCliente=(e) =>{

               
    const newid=  this.state.idItem
    console.log(newid)
    const estatus = this.state.estatus
    console.log(estatus)
    const direccion = this.state.direccionCliente
    console.log(direccion)
    const rfc = this.state.rfcCliente
    console.log(rfc)
    db.collection("clientes").where("clave", "==", newid )
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            db.collection("clientes").doc(doc.id).update({ estatus: estatus ,
            direccion:direccion, rfc:rfc});
        });
   })
  }

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
        // atencion:this.state.getName,
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
        dateToCompare: new Date().toLocaleDateString("zh-TW"),
        getNewDate: new Date().toLocaleString(),
      })


     
      this.setState({modalIsOpen:true,
        contClientes:"",nombreCliente:"", rfcCliente:"", direccionCliente:"", delegacionCliente:"", EDOCliente:"", atencion:"", telCliente:"", extTel:"",emailCliente:"",
     }, () => {console.log(this.state.mes)})

  }


  handleSubmitVisitador =(e)=>{

    e.preventDefault();
   
  
    document.getElementById("formClear").reset();
   

      db.collection("visitadores").add({
        nombre: this.state.visitadorNombre,
        rfc: this.state.rfcVisitador,      
        direccion: this.state.direccionVisitador,
        delegacion: this.state.delegacionVisitador,
        estado: this.state.EDOVisitador,
        // atencion:this.state.atencionVisitador,
        telefono: this.state.telVisitador,
        extension : this.state.extTelVisitador,
        email:this.state.emailVisitador,
        // vendedor:this.state.getName,
        // uge:this.state.ugeList,
        newDate: new Date().toLocaleDateString("zh-TW"),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        getNewDate: new Date().toLocaleString(),

      })

      this.setState({ modalIsOpen:true,
        nombreVisitador:"", rfcVisitador:"", direccionVisitador:"", delegacionVisitador:"", EDOVisitador:"", atencionVisitador:"", telVisitador:"", extTelVisitador:"",emailVisitador:"",ugeList:[],
      
          
        
      }, () => {console.log(this.state.mes)})

  }
    //Validacion del for=mulario
    handleSubmit = (e)  => {
      
        
        e.preventDefault();

            let obtDate=  new Date().toLocaleDateString("zh-TW");   
            const ugeClave = this.state.uge.substr(0,3).toUpperCase(); 
            const dateClave = obtDate.slice(5,7).replace("/","")
            const newDate = obtDate.slice(0, 2)
            
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
              const nombreVerificar = document.getElementById("nombreSolicitante").value
              console.log(nombreVerificar)
              
             if( nombreVerificar === ""){ 
          db.collection("orden").add({
          
            productClave: claveUnica,
            contador: contador,
            mes:dateClave,
            // clienteNombre:this.state.clienteNombre, rfcCliente:this.state.rfcCliente, direccionCliente:this.state.direccionCliente, delegacionCliente:this.state.delegacionCliente, EDOCliente:this.state.EDOCliente, atencionCliente:this.state.atencionCliente, telCliente:this.state.telCliente, extTelCliente:this.state.extTelCliente,emailCliente:this.state.emailCliente
            // ,empresa:this.state.empresa,estatus:this.state.estatus,cargo:this.state.cargo, holding:this.state.holdgin, servicios:this.state.servicios,area:this.state.area, venta:this.state.venta, comentarios:this.state.comentarios,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            dateToCompare: new Date().toLocaleDateString("zh-TW"),
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
            otrainfo: this.state.otraInfo,
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
              dateToCompare: new Date().toLocaleDateString("zh-TW"),
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
              otrainfo: this.state.otraInfo,
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

           
            

 
         }, () => {console.log(this.state.mes)})

    }
   else {
    const contador = 1;
    const claveUnica = newDate + dateClave + ugeClave + '00'+ contador

      db.collection("orden").add({
        productClave: claveUnica,
        contador: contador,
        mes:dateClave,
        date: firebase.firestore.FieldValue.serverTimestamp(),
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
       otrainfo: this.state.otraInfo,
        inicio: this.state.inicio,
        entrega:this.state.entrega,
        facturar:this.state.facturar,
        presupuesto: this.state.presupuesto,
        comision:this.state.presupuesto,
        montoVendido:this.state.montoVendido, 

      
     })
  
   
     

    }
    // document.getElementById("clienteSelect").value = ""
       
  

  }

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

  obtenerUser= ()=>{
    const usuario = this.state.user
    console.log(usuario)

    db.collection("usuarios").where("email","==",  usuario ).get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      
      const getUser = data[0].name
      const admin = data[0].rol
      const dataNew = data
      console.log(admin, dataNew, getUser)

            this.setState({ getName: getUser,
            rol:admin })
          }) 
   
    
  }


  obtenerBD=()=>{
        const obtRol = this.state.rol
        const obtName = this.state.getName
        console.log(obtRol, obtName)
        if(obtRol === "admin"){
    db.collection("orden").orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data)
        const newobj = data[0].contador 
       const newmes = data[0].mes
       console.log(newobj, newmes)
        this.setState({ items: data, getDate:newobj, mes:newmes });
       
      }, console.log(this.state.items));

    } else{
      db.collection("orden").orderBy("date", "desc").limit(1)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data)
        console.log(data)
        const newobj = data[0].contador
       const newmes = data[0].mes
       console.log(newobj, newmes)
        this.setState({  getDate:newobj, mes:newmes });
      })
      db.collection("orden").where("vendedor", "==", obtName).orderBy("date", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data)

 

        this.setState({ items: data ,});
      }, console.log(this.state.items));
    }
  }

  
  obtenerVisitadores=()=>{

    const obtRol = this.state.rol
    const obtName = this.state.getName
    console.log(obtRol, obtName)
   
db.collection("visitadores").orderBy("date", "desc")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data)
    this.setState({ dataVisitadores: data});
   
  }, console.log(this.state.dataVisitadores));

}


  obtenerClientes=()=>{
    const obtRol = this.state.rol
    const obtName = this.state.getName
    console.log(obtRol, obtName)
    if(obtRol === "admin"){

            db.collection("clientes").orderBy("date", "desc")
              .get()
              .then(querySnapshot => {
                const dataClientes = querySnapshot.docs.map(doc =>  doc.data())
                  const news = dataClientes[0].contador
                  // const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
                //  const dataEmpresa = querySnapshot.docs.map(doc =>  doc.data().empresa)
                  console.log(news)
                  // console.log(dataEmpresa)
                this.setState({ dataClientes:dataClientes,  contClientes: news});
                
              
              }, console.log(this.state.dataClientes));

              // db.collection("clientes").where("estatus", "==", "vendido")
              // .get()
              // .then(querySnapshot => {
                  
              //     const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
                 
              //     console.log(dataNombres)
                  
              //   this.setState({ nombresClientes:dataNombres});
                
              
              // }, console.log(this.state.dataClientes));
    
    
            } else{

           

              db.collection("clientes").where("vendedor", "==", obtName).orderBy("date", "desc")
              .get()
              .then(querySnapshot => { 
               const dataClientes =  querySnapshot.docs.map(doc => doc.data());
               const news = dataClientes[0].contador
          
              //  const dataEmpresa = querySnapshot.docs.map(doc =>  doc.data().empresa)
                // console.log(dataEmpresa)
               
                this.setState({  dataClientes:dataClientes, contClientes: news});
              });

              // db.collection("clientes").where("vendedor", "==", obtName).where("estatus","==","vendido")
              // .get()
              // .then(querySnapshot => { 
               
              //  const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
              
              //   console.log(dataNombres)
               
              //   this.setState({ nombresClientes:dataNombres, });
              // });
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
    


    onClickItemUpdate(e){
      
      
      let newid=  e.target.id
       db.collection("orden").where("productClave", "==", newid)
     .get()
     .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
         const ven= data.vendedor
         console.log(data
          )
            
             this.setState({ idItem:newid, consulta: data ,  vendedor:ven,  modalIsOpen:true})
             
         });
     
        
           
 
     }
     onClickItem(e){
       console.log(e.target)
       const newid=  e.target.value
      console.log(newid)
       db.collection("orden").where("productClave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
        
        console.log(data[0])
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
              direccionSolicitante:data[0].direccionSolicitante,
              delegacionSolicitante:data[0].delegacionSolicitante,
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
                  console.log(data)
                        
                        this.setState({
                          listaVisitador:data,
              
              
                        })
                        
                        
                    });
              })
             
         });      
  
     }
     onClickItemCliente(e){
      
      
      let newid=  document.getElementById("clave").value
      console.log(newid)
 
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
         
            },()=>{console.log(this.state)})
             
         });
     
        
           
 
     }
     onClickItemUpdateCliente(e){
       
      let newid=  document.getElementById("clave").value
      console.log(newid)
 
       db.collection("clientes").where("clave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
         
            
             this.setState({ consultaCliente: data , modalIsOpen:true,
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
         
            },()=>{console.log(this.state)})
             
         });
         
            
  
      }


    //Generador de clave unica

    

      
    render() {
        const {consultaCliente,newOrder, list,dataClientes, estatusEmpresa,items, listaVisitador, nombresEmpresas, dataVisitadores,
          // clienteNombre, rfcCliente, direccionCliente, delegacionCliente:"", EDOCliente:"", atencionCliente:"", telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",
          uge, vendedor, copia, oferta, cedido, proyecto, tipoCliente,  nombreSolicitante, empresaSolicitante, rfcSolicitante, direccionSolicitante, delegacionSolicitante, EDOSolicitante, telSolicitante, extTelSolicitante, holdingSolicitante,servicioSolicitante, ventaSolicitante, comentariosSolicitante, emailSolicitante, objetivo, otroObj, proposito, otroProp, presentarse,visitador, fechaIns, telInsp, extInsp, emailInsp, dirInsp,  observaciones, bienes, otroBien, info, otraInfo, inicio, entrega,  facturar,
          clienteNombre, rfcCliente, direccionCliente, delegacionCliente, EDOCliente, atencionCliente, telCliente, extTelCliente,emailCliente,empresa,estatus,cargo, holding, servicios,area, venta, comentarios,
           
        visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
          consulta,getName, getNewDate,
           user, dateNew,obtDataCliente, nuevaClave, message, rol, montoVendido, comision, nombresClientes,presupuesto, 
          dateToCompare} = this.state;
      return (
        <AppContext.Provider
        value={{
          handleChangeCliente: this.handleChangeCliente,
          onClickItem: this.onClickItem,
          onClickItemUpdate: this.onClickItemUpdate,
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
          onClickItemUpdateCliente: this.onClickItemUpdateCliente,
         visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
          crearNuevo: this.crearNuevo,
          consultaCliente,
          getNewDate,
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