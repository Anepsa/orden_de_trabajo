  
import React, { Component } from "react";
import db from "./Fire.js";
import firebase from 'firebase';


export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props){
        super(props)
        //Datos que se obtienen de las respuestas del formulario
        this.state ={
            // dataOrden:[copia, oferta, cedido, ],
            uge:"", vendedor:"", copia:"", oferta:"", cedido:"", proyecto:"", tipoCliente:"",  nombreSolicitante:"", empresaSolicitante:"", rfcSolicitante:"", direccionSolicitante:"", delegacionSolicitante:"", EDOSolicitante:"", telSolicitante:"", extTelSolicitante:"", emailSolicitante:"", objetivo:"", otroObj:"", proposito:"", otroProp:"", presentarse:"",visitador:"", fechaIns:"", telInsp:"", extInsp:"", emailInsp:"", dirInsp:"",  observaciones:"", bienes:"", otroBien:"", info:"", otraInfo:"", inicio:"", entrega:"",  facturar:"",
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
           
            clienteNombre:"", rfcCliente:"", direccionCliente:"", delegacionCliente:"", EDOCliente:"", atencionCliente:"", telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",
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
    this.handleChangeDate= this.handleChangeDate.bind(this)
    this.handleChangeFound = this.handleChangeFound.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.obtenerBD = this.obtenerBD.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChangeSeller = this.handleChangeSeller.bind(this);
    this.handleChangeProject = this.handleChangeProject.bind(this)
    this.handleEmpresa = this.handleEmpresa.bind(this)

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
            [e.target.name]:e.target.value
        },()=>{console.log(this.state)
          const montoVendido= parseInt(this.state.presupuesto) + parseInt(this.state.comision)
          this.setState({
            montoVendido: montoVendido,
           
          })
        })
        
       
        
        
    } 
    handleClick = (e) =>{
      const list = this.state.ugeList
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
      })  
      
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



    handleChangeCost = (e)=>{
        
      this.setState({ 
          [e.target.name]:e.target.value
      })
    
      
      
  } 
   



    handleChangeFound= (e)=>{
        
      const handle = e.target.value
      console.log(handle)
      console.log(this.state.buscador)
      if(handle === ""){

        db.collection("orden").onSnapshot(this.obtenerBD)
        }else {
          db.collection("orden").where("productClave", "==", handle)
          .get()
          .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
                  
                  this.setState({
                    items:data
    
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
      }  else if(name === "buscadorNombre"){
        db.collection("clientes").where("nombre", "==", handle)
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  dataClientes:data
  
                })
                
                
            });

      }  else if (name === "fechaCliente"){
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
handleChangeNombre = (e) =>{
  const name = e.target.name
  console.log(name)
  const handle = e.target.value;
  console.log(handle)
   
  if(handle === ""){

    db.collection("clientes").onSnapshot(this.obtenerClientes)
    }else {
      db.collection("clientes").where("clave", "==", handle)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                dataClientes:data

              })
              
              
          });
    }    
} 



  handleChangeSeller= (e)=>{
        
    const handle = e.target.value
    
    console.log(handle)
   
    if(handle === ""){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("vendedor", "==", handle )
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  items:data
  
                })
                
                
            });
      }
    
    
} 
handleChangeProject= (e)=>{
        
  const handle = e.target.value
  
  console.log(handle)
  console.log(this.state.buscador)
  if(handle === ""){
   
    db.collection("orden").onSnapshot(this.obtenerBD)
 
    }else {
      db.collection("orden").where("uge", "==", handle )
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
              
              this.setState({
                items:data

              })
              
              
          });
    }
  
  
} 
  handleChangeDate = (e) =>{

    const handle = e.target.value.replace(/-/g,"/")
      
    console.log(handle)
    
    if(handle === ""){
     
      db.collection("orden").onSnapshot(this.obtenerBD)
   
      }else {
        db.collection("orden").where("dateToCompare", "==", handle )
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                
                this.setState({
                  items:data
                })         
            });
      }
  }


    handleUpdate =(e) =>{

               
    const newid=  this.state.idItem
    

    db.collection("orden").where("productClave", "==", newid )
    .get()
    .then(querySnapshot =>  {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            db.collection("orden").doc(doc.id).update({

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
                objetivo:this.state.objetivo,
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
                  
            }          
            );  
          
        });
   })
  }
  handleUpdateCliente=(e) =>{

               
    const newid=  this.state.idItem
    console.log(newid)
    const estatus = this.state.estatus
    db.collection("clientes").where("clave", "==", newid )
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            db.collection("clientes").doc(doc.id).update({ estatus: estatus });
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
        
        nombre: this.state.clienteNombre,
        rfc: this.state.rfcCliente,      
        direccion: this.state.direccionCliente,
        delegacion: this.state.delegacionCliente,
        estado: this.state.EDOCliente,
        atencion:this.state.atencionCliente,
        telefono: this.state.telCliente,
        clave: claveUnica,
        email:this.state.emailCliente,
        contador:contador,
        empresa: this.state.empresa,
        vendedor:this.state.getName,
        estatus:this.state.estatus,
        extTel:this.state.extTelCliente,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        dateToCompare: new Date().toLocaleDateString("zh-TW"),
        getNewDate: new Date().toLocaleString(),
      })


     
      this.setState({
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
        atencion:this.state.atencionVisitador,
        telefono: this.state.telvisitador,
        email:this.state.emailVisitador,
        vendedor:this.state.getName,
        uge:this.state.ugeList,
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
 
         
          db.collection("orden").add({
          
            productClave: claveUnica,
            contador: contador,
            mes:dateClave,
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
            direccionSolicitante: this.state.direccionSolicitante,
            delegacionSolicitante:this.state.delegacionSolicitante,
            EDOSolicitante:this.state.EDOSolicitante,
            telSolicitante:this.state.telSolicitante,
            emailSolicitante: this.state.emailSolicitante,
            objetivo:this.state.objetivo,
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
         
          this.setState({
            modalIsOpen:true,
            newcontador: contador,
           
            

 
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
        objetivo:this.state.objetivo,
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
    this.setState({
      vendedor:"",
      uge:"",
      fecha:"",

      productClave:"",
      newcontador: contador,
   
     

      }, () => {console.log(this.state.mes)})
    }
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
                  const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
                 const dataEmpresa = querySnapshot.docs.map(doc =>  doc.data().empresa)
                  console.log(news)
                  console.log(dataEmpresa)
                this.setState({ dataClientes:dataClientes, nombresClientes:dataNombres, contClientes: news,  nombresEmpresas: dataEmpresa});
                
              
              }, console.log(this.state.dataClientes));

              db.collection("clientes").where("estatus", "==", "vendido")
              .get()
              .then(querySnapshot => {
                  
                  const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
                 
                  console.log(dataNombres)
                  
                this.setState({ nombresClientes:dataNombres});
                
              
              }, console.log(this.state.dataClientes));
    
    
            } else{

           

              db.collection("clientes").where("vendedor", "==", obtName).orderBy("date", "desc")
              .get()
              .then(querySnapshot => { 
               const dataClientes =  querySnapshot.docs.map(doc => doc.data());
               const news = dataClientes[0].contador
          
               const dataEmpresa = querySnapshot.docs.map(doc =>  doc.data().empresa)
                console.log(dataEmpresa)
               
                this.setState({  dataClientes:dataClientes, contClientes: news,  nombresEmpresas: dataEmpresa});
              });

              db.collection("clientes").where("vendedor", "==", obtName).where("estatus","==","vendido")
              .get()
              .then(querySnapshot => { 
               
               const dataNombres = querySnapshot.docs.map(doc =>  doc.data().nombre)
              
                console.log(dataNombres)
               
                this.setState({ nombresClientes:dataNombres, });
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
      
      
      let newid=  e.target.id
      console.log(newid)
  
       db.collection("orden").where("productClave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
             
             console.log(data);
             this.setState({ consulta: data , modalIsOpen:true})
             
         });      
  
     }
     onClickItemCliente(e){
      
      
      let newid=  e.target.id
      console.log(newid)
 
       db.collection("clientes").where("clave", "==", newid)
       .get()
       .then(querySnapshot => {
         const data = querySnapshot.docs.map(doc => doc.data());
             
             console.log(data);
             this.setState({ consultaCliente: data , modalIsOpen:true})
             
         });
     
        
           
 
     }
     onClickItemUpdateCliente(e){
       
       
       let newid=  e.target.id
       console.log(newid)
        db.collection("clientes").where("clave", "==", newid)
      .get()
      .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          const ven= data.vendedor
          console.log(data
           )
             
              this.setState({ idItem:newid, consultaCliente: data ,  vendedor:ven,  modalIsOpen:true})
              
          });
      
         
            
  
      }


    //Generador de clave unica

    

  
    render() {
        const {consultaCliente,newOrder, list,dataClientes, estatusEmpresa,items, listaVisitador, nombresEmpresas, dataVisitadores,
          // clienteNombre, rfcCliente, direccionCliente, delegacionCliente:"", EDOCliente:"", atencionCliente:"", telCliente:"", extTelCliente:"",emailCliente:"",empresa:"",estatus:"",
         
        visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
          consulta,getName,
           user, dateNew,obtDataCliente, message, rol, montoVendido, comision, nombresClientes,presupuesto} = this.state;
      return (
        <AppContext.Provider
        value={{
          handleChangeCliente: this.handleChangeCliente,
          onClickItem: this.onClickItem,
          onClickItemUpdate: this.onClickItemUpdate,
          handleSelectUge: this.handleSelectUge,
          handleEmpresa: this.handleEmpresa,
          handleChange: this.handleChange,
          handleChangeFound: this.handleChangeFound,
          handleChangeDate: this.handleChangeDate,
          handleChangeSeller:this.handleChangeSeller,
          handleChangeProject:this.handleChangeProject,
        
          handleClick: this.handleClick,
          handleUpdateCliente: this.handleUpdateCliente,
          handleSubmitCliente: this.handleSubmitCliente,
          handleSubmitVisitador: this.handleSubmitVisitador,
          handleSubmitVendedor: this.handleSubmitVendedor,
       
          handleSubmit: this.handleSubmit ,
          obtenerBD: this.obtenerBD,
          productClave:this.state.productClave,
          modalIsOpen:this.state.modalIsOpen,
          openModal:this.openModal,
          closeModal:this.closeModal,
          handleUpdate:this.handleUpdate,
          
          handleCliente: this.handleCliente,
          onClickItemCliente:this.onClickItemCliente,
          onClickItemUpdateCliente: this.onClickItemUpdateCliente,
         visitadorNombre, rfcVisitador, direccionVisitador, delegacionVisitador, EDOVisitador, atencionVisitador, telVisitador, extTelVisitador,emailVisitador,
     
          consultaCliente,
         
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
         

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;