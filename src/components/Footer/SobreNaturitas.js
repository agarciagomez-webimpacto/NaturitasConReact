import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SobreNaturitas extends React.Component{

     renderCols(colsData){
         return colsData.map(col =>
             <Row>
             <Col className={'ml-3 my-2'}   key={col.texto1}>{col.texto1}</Col>
             
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


 export default SobreNaturitas;