import React, { Component } from "react";
import db from "../Fire";
import firebase from 'firebase';


export class PagosService extends Component {

    state;
    constructor(props, state) {
        super(props)
        console.log(state);
        this.state = state;
        this.state = {
            dataPagos: {
                sinPagos:1
            },
            pagos: [],
            ordenPagos: { cliente: {} }
        }
        console.log(this.state);
        
        this.getPagos = this.getPagos.bind(this)
        this.adeudoCompleto = this.adeudoCompleto.bind(this)
        this.newPago = this.newPago.bind(this)
        // console.log("jelow");
    }

    // Mostrar Pagos de una orden dada su productClave
    getPagos(clave){
        console.log("getPagos");
        db.collection("pagos").where("orden.clave", "==", clave)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                if (data.length > 0) {
                    this.setState({
                        dataPagos: data[0],
                        pagos: data[0].pagos
                    });
                } else {
                    this.setState({
                        dataPagos: { sinPagos: true },
                        pagos: []
                    });
                }
            })
    }

    //Agrega un nuevo Pago dado una clave
    newPago(pago, orden){
        db.collection("pagos").where("orden.clave", "==", orden.clave)
            .get()
            .then(querySnapshot => {
                let id = 0;
                const data = querySnapshot.docs.map(doc => {
                    id = doc.id;
                    return doc.data()
                });
                if (data.length > 0) {
                    let pagos = data[0].pagos;
                    pagos.push(pago);
                    db.collection("pagos").doc(id).update({ pagos: pagos })
                } else {
                    const nuevo = {
                        pagos: [pago],
                        orden: orden,
                        fechaCreacion: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit' }),
                        fechaEdicion: new Date().toLocaleDateString("zh-TW", { year: 'numeric', month: '2-digit', day: '2-digit' })
                    };
                    db.collection("pagos").add(nuevo);
                }
            })
    }

    // Al completar todo el adeudo pasar la orden a pagado
    adeudoCompleto(clave, pagado){
        db.collection("orden").where("productClave", "==", clave)
            .get()
            .then(querySnapshot => {
                let id = 0;
                const data = querySnapshot.docs.map(doc => {
                    id = doc.id;
                    return doc.data();
                });
                if (data.length > 0) {
                    db.collection("orden").doc(id).update({ pagado: pagado });
                }
            })
    }

    render() {
        console.log("render");
        const {
            dataPagos, pagos, ordenPagos
        } = this.state;
        return(
            <PagosService.Provider
                value={{
                    getPagos: this.getPagos,
                    newPago: this.newPago,
                    adeudoCompleto: this.adeudoCompleto
                }}
            ></PagosService.Provider>
        )
    }
}

export default PagosService;