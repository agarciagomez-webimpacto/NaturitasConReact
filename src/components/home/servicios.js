import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Servicios extends React.Component{

    renderCols(colsData){
        return colsData.map(col =>
          
          <Row className="mx-auto my-5  "> 
          <Col className="col-4 d-none d-md-block"><FontAwesomeIcon icon={col.icono} className="display-4"/></Col>
          <Col className="col-8 d-none d-md-block">
            <p ><strong>{col.texto1} </strong></p>  
            <p >{col.texto2} </p>  
          </Col>
          </Row>
          
             
        )
    };
  
    render(){
        const {data}=this.props;
  
        return(
            this.renderCols(data)
        );
    }
  }
  
   export default Servicios;