import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class  Home extends React.Component {

  render(){
    return(
      <div className="card-home">

        <Card className="card-style">
          <CardContent>
            <p>Directorio de Clientes</p>
            <p>Mostrar , filtrar , crear ,editar y eliminar clientes</p>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to="/ListadoClientes">Ver Lista</Link></Button>
            <Button size="small"><Link to="/CrearCliente">Crear</Link></Button>
          </CardActions>
        </Card>

        <Card className="card-style">
          <CardContent>
            <p>Orden de Trabajo</p>
            <p>Mostrar , filtrar , crear ,editar y eliminar ordenes de trabajo</p>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to="/ListaOrdenes">Ver Lista</Link></Button>
            <Button size="small"><Link to="/OrdenTrabajo">Crear</Link></Button>
          </CardActions>
        </Card>

        <Card className="card-style">
          <CardContent>
            <p>Reportes</p>
            <p>Generar reportes admin</p>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to="/Reports">Ver Reportes</Link></Button>
          </CardActions>
        </Card>

     <Card className="card-style">
            <CardContent>
       <p>Directorio de Clientes</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh et nisl maximus lobortis.  </p>
    
     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
     </Card>
     <Card className="card-style">
            <CardContent>
       <p>Directorio de Clientes</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh et nisl maximus lobortis.  </p>
    
     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
     </Card>
     <Card className="card-style">
            <CardContent>
       <p>Directorio de Clientes</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nibh et nisl maximus lobortis.  </p>
    
     </CardContent>
     <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions>
     </Card>
     
     </div>

      
    

    )
  }


}

export default  Home;