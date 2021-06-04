import React from 'react';
import { Table, Button, Input } from 'reactstrap';
import OrdenCreada from "./OrdenCreada"
import EditarOrden from "./EditarOrden"
import OrdenPdf from "./OrdenPdf"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Link } from 'react-router-dom';
import db from "../../Fire.js";
import { CSVLink } from "react-csv";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppContext } from "../../AppContext";

OrdenCreada.contextType = AppContext;
EditarOrden.contextType = AppContext;

class ListaOrdenes extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.deleteFilter = this.deleteFilter.bind(this)
        this.generatePDF = this.generatePDF.bind(this)



    }

    onDelete(e) {

        const newid = e.target.value
        console.log(newid)
        db.collection("orden").where("productClave", "==", newid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete().then(() => {
                        console.log("Document successfully deleted!");
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                    });
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }

    generatePDF() {
        window.print()
    }

    generateOrdenPdf(){
        
    }

    deleteFilter() {

        const { obtenerBD } = this.context;
        document.getElementsByName("buscador")[0].value = "";
        document.getElementsByName("fechaBuscador")[0].value = "";
        document.getElementsByName("empresa")[0].value = "";
        document.getElementsByName("nombreVendedor")[0].value = "";
        document.getElementsByName("tipoProyecto")[0].value = "";
        document.getElementsByName("cliente")[0].value = "";
        document.getElementsByName("bienes")[0].value = "";
        document.getElementsByName("proyecto")[0].value = "";
        document.getElementsByName("proposito")[0].value = "";
        db.collection("orden").onSnapshot(obtenerBD)


    }

    pushArregloCSV(ordenes, arreglo) {
        arreglo.forEach((objeto) => {
            ordenes.push(objeto);
        });
        // ordenes.forEach((objeto)=>{
        //    arreglo.push(objeto);
        // });
        return ordenes;
    }

    getSubtotalCategorias(ordenes, arreglo) {
        let Categorias = []; // Solo los User 
        ordenes.forEach((orden) => {
            let existeCategoria = false;
            Categorias.forEach((categoria) => {
                if (categoria.productClave == orden.bienes) {
                    existeCategoria = true;
                    categoria.montoVendido = +categoria.montoVendido + +orden.montoVendido;
                    categoria.comision = +categoria.comision + +orden.comision;
                }
            });
            if (!existeCategoria) {
                const nuevaCategoria = {
                    "productClave": orden.bienes,
                    "montoVendido": orden.montoVendido,
                    "comision": orden.comision
                };
                Categorias.push(nuevaCategoria);
            }
        });
        const tituloCategorias = {
            "productClave": "Categorias",
            "montoVendido": "Subtotal Monto",
            "comision": "Subtotal Comision"
        };
        arreglo.push({ "": "" });
        arreglo.push(tituloCategorias);
        Categorias.forEach((categoria) => {
            arreglo.push(categoria);
        });
        arreglo.push({ "": "" });
    }

    getSubtotalVendedores(ordenes, arreglo) {
        let Vendedores = []; // Solo los User 
        ordenes.forEach((orden) => {
            let existeVendedor = false;
            Vendedores.forEach((vendedor) => {
                if (vendedor.productClave == orden.vendedor) {
                    existeVendedor = true;
                    vendedor.montoVendido = +vendedor.montoVendido + +orden.montoVendido;
                    vendedor.comision = +vendedor.comision + +orden.comision;
                }
            });
            if (!existeVendedor) {
                const nuevoVendedor = {
                    "productClave": orden.vendedor,
                    "montoVendido": orden.montoVendido,
                    "comision": orden.comision
                };
                Vendedores.push(nuevoVendedor);
            }
        });
        const tituloVendedores = {
            "productClave": "Vendedores",
            "montoVendido": "Subtotal Monto",
            "comision": "Subtotal Comision"
        };
        arreglo.push(tituloVendedores);
        Vendedores.forEach((vendedor) => {
            arreglo.push(vendedor);
        });
        arreglo.push({ "": "" });
    }

    getTotales(ordenes, arreglo) { // Obtener totales y agregarlos al arreglo de JSON
        let totalVentas = 0;
        let totalComisiones = 0;
        ordenes.forEach((orden) => { // Revisar cada orden para obtener los totales
            totalVentas += +orden.montoVendido;
            totalComisiones += +orden.comision;
        });
        const Totales = { //El registro con los Totales
            "productClave": "Total",
            "montoVendido": totalVentas,
            "comision": totalComisiones
        }
        arreglo.push(Totales);
    }

    estaPagado(item){
        if(item.pagado){
            return "Ver Pagos";
        }else{
            return "Abonar Pago";
        }
    }

    estaPagadoColor(item){
        if(item.pagado){
            return "success";
        }else{
            return "danger";
        }
    }

    render() {
        // Header del archivo csv, ejemplo = { label:"nombre de la columna", key:"de donde obtiene el dato" }
        const headers = [
            { label: "productClave", key: "productClave" }, // Primero Producto Clave

            { label: "montoVendido", key: "montoVendido" }, // Segundo el Monto Vendido
            { label: "comision", key: "comision" }, // Segundo la Comision

            { label: "cliente.area", key: "cliente.area" }, // Tercero el Cliente con sus datos
            { label: "cliente.cargo", key: "cliente.cargo" }, // Tercero el Cliente con sus datos
            { label: "cliente.clave", key: "cliente.clave" }, // Tercero el Cliente con sus datos
            { label: "cliente.comentarios", key: "cliente.comentarios" }, // Tercero el Cliente con sus datos
            { label: "cliente.contador", key: "cliente.contador" }, // Tercero el Cliente con sus datos
            //{ label: "cliente.date", key:"cliente.date" }, // Tercero el Cliente con sus datos // Ya no mostrarlo
            { label: "cliente.dateToCampare", key: "cliente.dateToCampare" }, // Tercero el Cliente con sus datos
            { label: "cliente.delegacion", key: "cliente.delegacion" }, // Tercero el Cliente con sus datos
            { label: "cliente.direccion", key: "cliente.direccion" }, // Tercero el Cliente con sus datos
            { label: "cliente.email", key: "cliente.email" }, // Tercero el Cliente con sus datos
            { label: "cliente.empresa", key: "cliente.empresa" }, // Tercero el Cliente con sus datos
            { label: "cliente.estado", key: "cliente.estado" }, // Tercero el Cliente con sus datos
            { label: "cliente.estatus", key: "cliente.estatus" }, // Tercero el Cliente con sus datos
            { label: "cliente.extTel", key: "cliente.extTel" }, // Tercero el Cliente con sus datos
            { label: "cliente.getNewDate", key: "cliente.getNewDate" }, // Tercero el Cliente con sus datos
            { label: "cliente.holding", key: "cliente.holding" }, // Tercero el Cliente con sus datos
            { label: "cliente.nombre", key: "cliente.nombre" }, // Tercero el Cliente con sus datos
            { label: "cliente.rfc", key: "cliente.rfc" }, // Tercero el Cliente con sus datos
            { label: "cliente.servicios", key: "cliente.servicios" }, // Tercero el Cliente con sus datos
            { label: "cliente.telefono", key: "cliente.telefono" }, // Tercero el Cliente con sus datos
            { label: "cliente.vendedor", key: "cliente.vendedor" }, // Tercero el Cliente con sus datos
            { label: "cliente.venta", key: "cliente.venta" }, // Tercero el Cliente con sus datos

            // Cuarto todo lo demas
            { label: "EDOSolicitante", key: "EDOSolicitante" },
            { label: "areaSolicitante", key: "areaSolicitante" },
            { label: "bienes", key: "bienes" },
            { label: "cargoSolicitante", key: "cargoSolicitante" },
            { label: "cedido", key: "cedido" },
            { label: "comentariosSolicitante", key: "comentariosSolicitante" },
            { label: "contador", key: "contador" },
            { label: "copia", key: "copia" },
            //{ label: "date", key: "date"}, // Ya no mostrarlo
            { label: "dateToCompare", key: "dateToCompare" },
            { label: "delegacionSolicitante", key: "delegacionSolicitante" },
            { label: "dirInsp", key: "dirInsp" },
            { label: "direccionSolicitante", key: "direccionSolicitante" },
            { label: "emailInsp", key: "emailInsp" },
            { label: "emailSolicitante", key: "emailSolicitante" },
            { label: "empresaSolicitante", key: "empresaSolicitante" },
            { label: "entrega", key: "entrega" },
            { label: "extInsp", key: "extInsp" },
            { label: "extTelSolicitante", key: "extTelSolicitante" },
            { label: "facturar", key: "facturar" },
            { label: "fechaIns", key: "fechaIns" },
            { label: "getNewDate", key: "getNewDate" },
            { label: "holdingSolicitante", key: "holdingSolicitante" },
            { label: "info", key: "info" },
            { label: "inicio", key: "inicio" },
            { label: "mes", key: "mes" },
            { label: "nombreSolicitante", key: "nombreSolicitante" },
            { label: "objetivo", key: "objetivo" },
            { label: "observaciones", key: "observaciones" },
            { label: "oferta", key: "oferta" },
            { label: "otraInfo", key: "otraInfo" },
            { label: "otroBien", key: "otroBien" },
            { label: "otroObj", key: "otroObj" },
            { label: "otroProp", key: "otroProp" },
            { label: "presentarse", key: "presentarse" },
            { label: "presupuesto", key: "presupuesto" },
            { label: "proposito", key: "proposito" },
            { label: "proveedorSolicitante", key: "proveedorSolicitante" },
            { label: "proyecto", key: "proyecto" },
            { label: "rfcSolicitante", key: "rfcSolicitante" },
            { label: "servicioSolicitante", key: "servicioSolicitante" },
            { label: "telInsp", key: "telInsp" },
            { label: "telSolicitante", key: "telSolicitante" },
            { label: "tipoCliente", key: "tipoCliente" },
            { label: "uge", key: "uge" },
            { label: "vendedor", key: "vendedor" },
            { label: "ventaSolicitante", key: "ventaSolicitante" },
            { label: "visitador", key: "visitador" },
        ];
        const { items, rol, crearNuevo, handleChangeOrden, onClickItem, getPagos } = this.context;
        let dataCSV = JSON.parse(JSON.stringify(items));
        let arreglo = [];
        this.getSubtotalCategorias(dataCSV, arreglo);
        this.getSubtotalVendedores(dataCSV, arreglo);
        this.getTotales(dataCSV, arreglo);
        dataCSV = this.pushArregloCSV(dataCSV, arreglo);

        if (rol === "admin") {
            return (
                <div>
                    <Link className = "text-white " to = "/OrdenTrabajo" onClick = { crearNuevo }>
                    <Button className = 'mt-2 mb-2 mr-3 float-right' color = "info" onclick = { crearNuevo }>Crear</Button></Link>
                    <Button color = "white" className = " mt-2 mb-2 mr-3 float-right text-black" onClick = { this.generatePDF }><i className = "far fa-file-pdf icono-pdf"></i></Button>
                    <Button color = "white" className = " mt-2 mb-2 mr-3 float-right text-black"><CSVLink className = "" data = { dataCSV } headers = { headers }><i className = "far fa-file-excel icono-excel"></i></CSVLink></Button>
                    
                    <Table>
                        <thead>
                        </thead> 
                        <tbody>
                            <tr className = "filtrar-style">
                                <th colspan = "2">Filtrar por</th> 
                                <th colspan = "2"><Input type = "text" className = "toUppercase" name = "buscador" placeholder = "Clave" onChange = { handleChangeOrden }></Input></th>
                                <th colspan = "2"><Input type = "text" className = "toUppercase" name = "empresa" placeholder = "Empresa" onChange = { handleChangeOrden }></Input></th> 
                                <th colspan = "2">
                                    <Input type = "select" name = "nombreVendedor" onChange = { handleChangeOrden }>
                                        <option value = "" >Vendedor</option> 
                                        <option value="AMEYALLI BRITO GONZÁLEZ">AME</option>
                                        <option value="LAZO SANTIAGO RUBENS">Lazo Santiago Rubens</option>
                                        <option value="VICENTE GALICIA SALAZAR">Vicente Galicia Salazar</option>
                                        <option value="KELLIE OLIVARES HERNANDEZ">Kellie Olivares Hernandez</option>
                                        <option value="ANDREA GUZMAN ROJAS">Andrea Guzman Rojas</option>
                                        <option value="LUIS FELIPE CALLEJA">Luis Felipe Calleja António</option>
                                    </Input> 
                                </th> 
                                <th>
                                    <Input type = "select" name = "tipoProyecto" onChange = { handleChangeOrden }>
                                        <option value = "">UGE</option>
                                        <option value = "CIVIL">Civil</option>
                                        <option value = "FINANCIERA">Financiera</option>
                                        <option value = "INDUSTRIAL">Industrial</option>
                                        <option value = "CIVIL-INDUSTRIAL">Civil - Industrial</option>
                                        <option value = "CIVIL-FINANCIERA">Civil - Financiera</option>
                                        <option value = "FINANCIERA-INDUSTRIAL">Financiera - Industrial</option>
                                        <option value = "CIVIL-FINANCIERA-INDUSTRIAL">Civil - Financiera - Industrial</option>
                                    </Input> 
                                </th>

                                <th><Input type = "date" name = "fechaBuscador" onChange = { handleChangeOrden } >Fecha</Input></th>


                                <th><Button color = "warning text-white" onClick = { this.deleteFilter }><RotateLeftIcon/></Button></th>
                                </tr>
                                <tr>
                                <th colspan = "2"></th> 
                                <th colspan = "2">
                                    <Input type = "text" name = "cliente" placeholder = "Cliente" onChange = { handleChangeOrden } ></Input>
                                </th> 
                                <th colspan = "2" >
                                    <Input type = "select" name = "bienes" onChange = { handleChangeOrden } >
                                        <option value = "">Bienes</option> 
                                        <option value = "CONSTRUCCIONES">Construcciones</option> 
                                        <option value = "DIVERSOS">Diversos</option> 
                                        <option value = "EQUIPO DE CÓMPUTO">Equipo de Cómputo</option> 
                                        <option value = "HERRAMIENTAS">Herramientas</option> 
                                        <option value = "INMUEBLES">Inmuebles</option> 
                                        <option value = "INTANGIBLES">Intangibles</option> 
                                        <option value = "JOYAS">Joyas</option> 
                                        <option value = "MEJORAS">Mejoras</option> 
                                        <option value = "MAQUINARIA Y EQUIPO">Maquinaria y Equipo</option> 
                                        <option value = "MOLDES Y TROQUELES">Moldes y Troqueles</option> 
                                        <option value = "MUEBLES Y ENSERES">Muebles y Enseres</option> 
                                        <option value = "OBRAS DE ARTE">Obras de Arte</option> 
                                        <option value = "TERRENO(S)">Terreno(s)</option> 
                                        <option value = "TRACTOCAMIÓN">Tractocamión</option> 
                                        <option value = "VEHÍCULOS">Vehículos</option>
                                    </Input>
                                </th> 
                                <th colspan = "2" >
                                    <Input type = "select" name = "proyecto" placeholder = "Proyecto" onChange = { handleChangeOrden } >
                                        <option value = "">Proyecto</option> 
                                        <option value = "MICRO">Micro</option> 
                                        <option value = "MECRO">Mecro</option> 
                                        <option value = "MACRO">Macro</option>
                                    </Input>

                                </th> 
                                <th>
                                    <Input type = "select" name = "proposito" placeholder = "Proposito" onChange = { handleChangeOrden } >
                                        <option value = "">Proposito</option> 
                                        <option value = "ASEGURAR EL INMUEBLE">Asegura el Inmueble</option> 
                                        <option value = "CRÉDITO HIPOTECARIO">Crédito Hipotecario</option> 
                                        <option value = "DACIÓN DE PAGO">Dación de Pago</option> 
                                        <option value = "ESCRITURACIÓN">Escrituración</option> 
                                        <option value = "GARANTÍA FISCAL">Garantía Fiscal</option> 
                                        <option value = "INTESTADO">Intestado</option> 
                                        <option value = "JUSTIPRECIACION DE RENTAS">Justipreciación de Rentas</option> 
                                        <option value = "POSTURA DE COMPRA-VENTA">Postura de Compra - Venta</option> 
                                        <option value = "REMATE">Remate</option> 
                                        <option value = "SUCESIÓN TESTAMENTARIA">Sucesión Testamentaria</option> 
                                        <option value = "TRASLADO DE DOMINIO">Traslado de Dominio</option> 
                                        <option value = "TOMA DE DECISIONES INTERNAS">Toma de Decisiones Internas</option> 
                                        <option value = "OTRO PROPÓSITO">Otro Propósito</option>
                                    </Input>
                                </th> 
                                <th></th>
                            </tr>
                        </tbody>

                        <thead>
                            <tr className = "tabla-style">
                                <th className = "text-center"><FolderOpenIcon/></th> 
                                <th> Clave</th> 
                                <th> Empresa</th> 
                                <th> Vendedor</th> 
                                <th> UGE</th> 
                                <th> Cliente</th> 
                                <th> Bienes</th> 
                                <th> Proyecto</th> 
                                <th> Proposito</th> 
                                <th> Fecha</th>  
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>{items.map((item, index) => ( 
                            <tr key = { index } className = "list" >
                                <td className = "text-center">
                                    <Button className = "mr-1 clave" color = "white" value = { item.productClave } onClick = { onClickItem }></Button>
                                    <Button color = "white" className = "busqueda" value = { item.productClave } onClick = { onClickItem }></Button>
                                </td>
                                <td>{ item.productClave }</td> 
                                <td>{ item.cliente.empresa }</td> 
                                <td>{ item.vendedor }</td> 
                                <td>{ item.uge }</td> 
                                <td>{ item.cliente.nombre }</td> 
                                <td>{ item.bienes }</td> 
                                <td>{ item.proyecto }</td> 
                                <td>{ item.proposito }</td> 
                                <td>{ item.getNewDate }</td>           
                                <td>
                                    <Button className="botones-tabla" outline color="danger" value = { item.productClave } onClick = { this.onDelete }>Eliminar </Button>
                                    <Link to={{ pathname: '/Pagos/' + item.productClave, orden: item}}>
                                        <Button className="botones-tabla" outline color={this.estaPagadoColor(item)}>
                                            Pagos
                                        </Button>
                                    </Link>
                                    <Link to={{ pathname: '/Orden/' + item.productClave + '/Pdf', orden: item}}>
                                        <Button className="botones-tabla" outline color="danger">
                                            Pdf
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}</tbody>

                    </Table>
                    <OrdenCreada/>
                    <EditarOrden/>

                </div>
            );
        } else {
            return ( 
                <div>
                    <Link className = "text-white " to = "/OrdenTrabajo" onClick = { crearNuevo }><Button className = 'mt-2 mb-2 mr-3 float-right' color = "success ">Crear</Button></Link>

                    <Table>
                        <thead>
                        </thead> 
                        <tbody>
                            <tr className = "filtrar-style">
                                <th colspan = "2">Filtrar por</th> 
                                <th colspan = "2"><Input type = "text" name = "buscador" placeholder = "Clave" onChange = { handleChangeOrden }></Input></th>
                                <th colspan = "2"><Input type = "text" name = "empresa" placeholder = "Empresa" onChange = { handleChangeOrden }></Input></th> 
                                <th colspan = "2" >
                                    <Input type = "select" name = "nombreVendedor" onChange = { handleChangeOrden }>
                                        <option value = "">Vendedor</option> 
                                        <option value="AMEYALLI BRITO GONZÁLEZ">AME</option>
                                        <option value="LAZO SANTIAGO RUBENS">Lazo Santiago Rubens</option>
                                        <option value="VICENTE GALICIA SALAZAR">Vicente Galicia Salazar</option>
                                        <option value="KELLIE OLIVARES HERNANDEZ">Kellie Olivares Hernandez</option>
                                        <option value="ANDREA GUZMAN ROJAS">Andrea Guzman Rojas</option>
                                        <option value="LUIS FELIPE CALLEJA">Luis Felipe Calleja António</option>
                                    </Input> 
                                </th> 
                                <th>
                                    <Input type = "select" name = "tipoProyecto" onChange = { handleChangeOrden } >
                                        <option value = "">UGE</option>
                                        <option value = "CIVIL">Civil</option> 
                                        <option value = "FINANCIERA">Financiera</option> 
                                        <option value = "INDUSTRIAL">Industrial</option> 
                                        <option value = "CIVIL-INDUSTRIAL">Civil - Industrial</option> 
                                        <option value = "CIVIL-FINANCIERA">Civil - Financiera</option> 
                                        <option value = "FINANCIERA-INDUSTRIAL">Financiera - Industrial</option> 
                                        <option value = "CIVIL-FINANCIERA-INDUSTRIAL">Civil - Financiera - Industrial</option> 
                                    </Input>
                                </th>
                                <th><Input type = "date" name = "fechaBuscador" onChange = { handleChangeOrden }>Fecha</Input></th>
                                <th><Button color = "warning text-white"onClick = { this.deleteFilter }><RotateLeftIcon/></Button></th>
                            </tr>

                            <tr>
                                <th colspan = "2"></th>
                                <th colspan = "2"></th>
                                <th><Input type = "text" name = "cliente" placeholder = "Cliente" onChange = { handleChangeOrden }></Input></th>
                                <th colspan = "2">
                                    <Input type = "select" name = "bienes" onChange = { handleChangeOrden }>
                                        <option value = "">Bienes</option> 
                                        <option value = "CONSTRUCCIONES">Construcciones</option> 
                                        <option value = "DIVERSOS">Diversos</option> 
                                        <option value = "EQUIPO DE CÓMPUTO">Equipo de Cómputo</option> 
                                        <option value = "HERRAMIENTAS">Herramientas</option> 
                                        <option value = "INMUEBLES">Inmuebles</option> 
                                        <option value = "INTANGIBLES">Intangibles</option> 
                                        <option value = "JOYAS">Joyas</option> 
                                        <option value = "MEJORAS">Mejoras</option> 
                                        <option value = "MAQUINARIA Y EQUIPO">Maquinaria y Equipo</option> 
                                        <option value = "MOLDES Y TROQUELES">Moldes y Troqueles</option> 
                                        <option value = "MUEBLES Y ENSERES">Muebles y Enseres</option> 
                                        <option value = "OBRAS DE ARTE">Obras de Arte</option> 
                                        <option value = "TERRENO(S)">Terreno(s)</option> 
                                        <option value = "TRACTOCAMIÓN">Tractocamión</option> 
                                        <option value = "VEHÍCULOS">Vehículos</option>
                                    </Input>
                                </th>
                                <th colspan = "2" >
                                    <Input type = "select" name = "proyecto" placeholder = "Proyecto" onChange = { handleChangeOrden }>
                                        <option value = "">Proyecto</option> 
                                        <option value = "MICRO">Micro</option> 
                                        <option value = "MECRO">Mecro</option> 
                                        <option value = "MACRO">Macro</option>
                                    </Input>
                                </th> 
                                <th>
                                    <Input type = "select" name = "proposito" placeholder = "Proposito" onChange = { handleChangeOrden }>
                                        <option value = "">Proposito</option> 
                                        <option value = "ASEGURAR EL INMUEBLE">Asegura el Inmueble</option> 
                                        <option value = "CRÉDITO HIPOTECARIO">Crédito Hipotecario</option> 
                                        <option value = "DACIÓN DE PAGO">Dación de Pago</option> 
                                        <option value = "ESCRITURACIÓN">Escrituración</option> 
                                        <option value = "GARANTÍA FISCAL">Garantía Fiscal</option> 
                                        <option value = "INTESTADO">Intestado</option> 
                                        <option value = "JUSTIPRECIACION DE RENTAS">Justipreciación de Rentas</option> 
                                        <option value = "POSTURA DE COMPRA-VENTA">Postura de Compra - Venta</option> 
                                        <option value = "REMATE">Remate</option> 
                                        <option value = "SUCESIÓN TESTAMENTARIA">Sucesión Testamentaria</option> 
                                        <option value = "TRASLADO DE DOMINIO">Traslado de Dominio</option> 
                                        <option value = "TOMA DE DECISIONES INTERNAS">Toma de Decisiones Internas</option> 
                                        <option value = "OTRO PROPÓSITO">Otro Propósito</option>
                                    </Input>
                                </th>
                                <th></th>
                            </tr>
                        </tbody>

                        <thead>
                            <tr className = "tabla-style">
                                <th className = "text-center"><FolderOpenIcon/></th> 
                                <th>Clave</th> 
                                <th>Empresa</th> 
                                <th>Vendedor</th> 
                                <th>UGE</th> 
                                <th>Cliente</th> 
                                <th>Bienes</th> 
                                <th>Proyecto</th> 
                                <th>Proposito</th> 
                                <th>Fecha</th>  
                                <th></th>
                            </tr>
                        </thead>
                        <tbody> {
                            items.map((item, index) => (
                                <tr key = { index } className = "list">
                                    <td className = "text-center" >
                                        <Button className = "mr-1 clave" color = "white" value = { item.productClave } onClick = { onClickItem }></Button> 
                                        <Button color = "white" className = "busqueda" value = { item.productClave } onClick = { onClickItem }></Button> 
                                    </td> 
                                    <td>{ item.productClave }</td> 
                                    <td>{ item.cliente.empresa }</td> 
                                    <td>{ item.vendedor }</td> 
                                    <td>{ item.uge }</td> 
                                    <td>{ item.cliente.nombre }</td> 
                                    <td>{ item.bienes }</td> 
                                    <td>{ item.proyecto }</td> 
                                    <td>{ item.proposito }</td> 
                                    <td>{ item.getNewDate }</td>           
                                    <td>
                                         <Link to = {{pathname: '/Pagos/' + item.productClave, orden: item}}>
                                             <Button className="botones-tabla" outline color={this.estaPagadoColor(item)}>Pagos</Button>
                                        </Link>
                                        <Link to={{ pathname: '/Orden/' + item.productClave + '/Pdf', orden: item }}>
                                            <Button className="botones-tabla" outline color="danger">
                                                Pdf
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                        ))}</tbody>
                    </Table> 
                    <OrdenCreada/>
                    <EditarOrden/>
                </div>
            );
        }
    }
}



export default ListaOrdenes;