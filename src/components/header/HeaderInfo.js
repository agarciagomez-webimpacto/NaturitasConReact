import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class HeaderInfo extends React.Component{

     renderCols(colsData){
         return colsData.map(col =>
             col.dnone?
             <Col className={col.margin  +' d-none d-md-block text-light bg-secondary p-1 '}  md={4} key={col.icono}><FontAwesomeIcon icon={col.icono}/><span>{col.texto}</span></Col>
             :
             <Col className="textoInfoHeader text-center bg-secondary text-light p-1" md={4} key={col.icono}>
                 <FontAwesomeIcon icon={col.icono}/><span>{col.texto}</span>
             </Col>         
         );
     }
 
     render(){
         const {data}=this.props;
 
         return(
             this.renderCols(data)
         );
     }
 }


 export default HeaderInfo;
 