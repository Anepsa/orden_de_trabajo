import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Table, Button, Input, Progress } from 'reactstrap';

import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Link, BrowserRouter } from 'react-router-dom';
import db from "../../Fire.js";
import { AppContext } from "../../AppContext";

// React vis (Graficos)
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, makeWidthFlexible, RadialChart,VerticalBarSeries,LineMarkSeries, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, DiscreteColorLegend, Hint, LabelSeries } from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot); 

class Reports extends React.Component{
    periodo = { month: 1, year: 2020 };

    getTotalCategoriasPorPeriodo(ordenes, periodo){
        let data = [];
        let Categorias = [];
        ordenes.forEach((orden) => {
            let existeCategoria = false;
            const date = new Date(orden.inicio);
            if( (date.getUTCMonth()+1) == periodo.month && (date.getUTCFullYear() == periodo.year)){
                Categorias.forEach((categoria) => {
                    if (categoria.x == orden.bienes) {
                        existeCategoria = true;
                        categoria.y = +categoria.y + +orden.montoVendido;
                    }
                });
                if (!existeCategoria) {
                    Categorias.push({"x": orden.bienes,"y": orden.montoVendido});
                }   
            }
        });
        Categorias.forEach((categoria) => {data.push(categoria);});
        return data;
    }

    getTotalPorMes(ordenes, periodo){
        let data = [
            { x: 'Enero', y: 0 },
            { x: 'Febrero', y: 0 },
            { x: 'Marzo', y: 0 },
            { x: 'Abril', y: 0 },
            { x: 'Mayo', y: 0 },
            { x: 'Junio', y: 0 },
            { x: 'Julio', y: 0 },
            { x: 'Agosto', y: 0 },
            { x: 'Septiembre', y: 0 },
            { x: 'Octubre', y: 0 },
            { x: 'Noviembre', y: 0 },
            { x: 'Diciembre', y: 0 }
        ];
        ordenes.forEach((orden)=>{
            const date = new Date(orden.inicio);
            if(date.getUTCFullYear() == periodo.year){
                data[date.getUTCMonth()].y = +data[date.getUTCMonth()].y + +orden.montoVendido;
            }
        });
        return data;
    }

    getTotalVendedorPorPeriodo(ordenes, periodo){
        let data = [];
        let Vendedores = []; 
        let meta = 300000; // Hard Coded Meta por Vendedor.
        ordenes.forEach((orden)=>{
            let existeVendedor = false;
            const date = new Date(orden.inicio);
            if ((date.getUTCMonth() + 1) == periodo.month && (date.getUTCFullYear() == periodo.year)) {
                Vendedores.forEach((vendedor) => {
                    if (vendedor.label == orden.vendedor) {
                        existeVendedor = true;
                        vendedor.angle = +vendedor.angle + +orden.montoVendido;
                    }
                });
                if (!existeVendedor) {
                    Vendedores.push({ "label": orden.vendedor, "angle": orden.montoVendido, "meta": meta });
                }
            }
        });
        Vendedores.forEach((vendedor) => { data.push(vendedor); });
        return data;
    }

    createMetasVendedor = (dataVendedores) => {
        let table = [];
        // Outer loop to create parent
        dataVendedores.forEach(vendedor => {
            let metaCompletada = (vendedor.angle / vendedor.meta) * 100;
            table.push(
                <div>
                    {vendedor.label}<Progress animated value={metaCompletada}>{metaCompletada + "%"}</Progress>
                    {vendedor.angle + " / " + vendedor.meta}
                    <br></br>
                    <br></br>
                </div>
            );
        });
        
        return table
    }

    

    cambioMes(e){
        this.periodo.month = +e.target.value;
        this.setState(()=>{
            return {unseen: "cambio mes"};
        });
    }

    cambioYear(e){
        this.periodo.year = +e.target.value;
        this.setState(()=>{
            return {unseen: "cambio year"};
        });
    }

    getMaximo(datos){
        let mayor = 0;
        datos.forEach((dato) => {
            if(mayor < dato.y)
                mayor = dato.y;
        });
        return mayor * 1.2;
    }

    render(){
        const { items, rol, crearNuevo, onClickItem } = this.context;
        let dataCategorias = this.getTotalCategoriasPorPeriodo(items, this.periodo);
        let dataMeses = this.getTotalPorMes(items, this.periodo);
        let dataVendedores = this.getTotalVendedorPorPeriodo(items, this.periodo);

        return(
        <div className="card-home">
            <Table>
                <thead>
                </thead>
                <tbody>
                    <tr className="filtrar-style">
                        <th colspan="2">Filtrar por</th>
                        <th colspan="2">
                            Mes
                            <Input type="select" name="periodo.month" onChange={e => this.cambioMes(e)}>
                                {/* <option value="1">Mes</option> */}
                                <option value="1">Enero</option>
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                                <option value="4">Abril</option>
                                <option value="5">Mayo</option>
                                <option value="6">Junio</option>
                                <option value="7">Julio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Septiembre</option>
                                <option value="10">Octubre</option>
                                <option value="11">Noviembre</option>
                                <option value="12">Diciembre</option>
                            </Input>
                        </th>
                        <th colspan="2">
                            Año
                            <Input type="select" name="periodo.year" onChange={ e => this.cambioYear(e)}>
                                {/* <option value="2020">Año</option> */}
                                <option value="2019">2019</option>
                                <option selected={true} value="2020">2020</option>
                            </Input>
                        </th>
                    </tr>
                </tbody>
            </Table>
            
                <Card >
                    <h1 style={{marginLeft:"20px"}}>Reportes</h1>
                    <CardContent>

                        <Card className="report-style">
                            <CardContent>
                                <p className="centrado">Total de Categorias de {this.periodo.month} del {this.periodo.year}</p>
                                <br></br>
                                <FlexibleXYPlot 
                                    margin={{left: 70, right: 30}}
                                    xType="ordinal" 
                                    height={350}
                                    yDomain={[0, this.getMaximo(dataCategorias)]}
                                    >
                                    <HorizontalGridLines />
                                    <VerticalGridLines />
                                    <XAxis />
                                    <YAxis />
                                    <VerticalBarSeries data={dataCategorias} />
                                    <LabelSeries
                                        data={dataCategorias.map(obj => {
                                            return { ...obj, label: obj.y.toString() }
                                        })}
                                        labelAnchorX="middle"
                                        labelAnchorY="text-after-edge"
                                    />
                                </FlexibleXYPlot>
                            </CardContent>
                        </Card>

                        <Card className="report-style">
                            <CardContent >
                            <p className="centrado">Total por Mes del {this.periodo.year}</p>
                                <br></br>
                                <FlexibleXYPlot 
                                    margin={{ left: 70, right: 30 }}
                                    xType="ordinal" 
                                    height={300}
                                    yDomain={[0, this.getMaximo(dataMeses)]}
                                    >
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis />
                                    <YAxis />
                                    <VerticalBarSeries data={dataMeses} />
                                    <LabelSeries
                                        data={dataMeses.map(obj => {
                                            return { ...obj, label: obj.y.toString() }
                                        })}
                                        labelAnchorX="middle"
                                        labelAnchorY="text-after-edge"
                                    />
                                </FlexibleXYPlot>
                            </CardContent>
                        </Card>

                        <Card className="report-style">
                            <CardContent className="centrado">
                                <p>Total por Vendedor de {this.periodo.month} del {this.periodo.year}</p>
                                <RadialChart data={dataVendedores} 
                                height={300} 
                                width={300}
                                showLabels={true} />
                            </CardContent>
                        </Card>

                        <Card className="report-style">
                            <CardContent>
                                <p className="centrado">Metas por Vendedor del {this.periodo.year} </p>
                                <div style={{marginTop:25}}>
                                    {this.createMetasVendedor(dataVendedores)}
                                </div>
                            </CardContent>
                        </Card>

                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Reports;