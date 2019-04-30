import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CategoriasYMarcas extends React.Component{

     renderCols(colsData){
         return colsData.map(col =>
             <Row>
             <Col className={'  my-2 ml-3'}   key={col.texto1}>{col.texto1}</Col>
             
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


 export default CategoriasYMarcas;