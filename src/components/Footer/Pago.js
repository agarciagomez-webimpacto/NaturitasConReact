import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pago extends React.Component{

     renderCols(colsData){
         return colsData.map(col =>
                  <img src={col.texto1} alt="rrss"  className="m-2 " width="14%"/>
         );
     }
 
     render(){
         const {data}=this.props;
 
         return(
             this.renderCols(data)
         );
     }
 }


 export default Pago;