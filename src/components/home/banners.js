import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';



class Banners extends React.Component{

    renderCols(colsData){
        return colsData.map(col =>
            
          <Col className="col-md-6 col-12 my-md-5 m-0 p-0 mt-2">
            <img src={col.src} class="col-12 my-md-3 w-100 m-0 p-0 p-md-3" alt="" />
          </Col>

          
          
             
        )
    };
  
    render(){
        const {data}=this.props;
  
        return(
            this.renderCols(data)
        );
    }
  }
  
   export default Banners;