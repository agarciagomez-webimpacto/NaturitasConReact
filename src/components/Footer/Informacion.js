import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Informacion extends React.Component{

     renderCols(colsData){
         return colsData.map(col =>
             <Row>
             <Col className={'col-6'}   key={col.texto1}>{col.texto1}</Col>
             <Col className={'col-6'} ><Col className={'  col-12'}   key={col.telefono1}> <strong >{col.telefono1}</strong></Col>
             
             <Col className={'  col-12'}   key={col.telefono2}> <strong >{col.telefono2}</strong></Col></Col>
             
            </Row>
         );
     }
 
     render(){
         const {data}=this.props;
 
         return(
             this.renderCols(data)
         );
     }
 }


 export default Informacion;
 