import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "/img/logo_naturitas.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const placeholder1 = " ¿Qué buscas hoy? Encuentra entre más de 45 mil productos..."; 
const placeholder2 = " ¿Qué buscas hoy? "; 

const HeaderSearch = () => (
    <Row  id="headerSearch" className=" col-12 m-auto py-md-4  px-md-1 p-0 pt-3 d-flex">
     
         <Col className="d-md-none col-2 m-auto  text-secondary p-auto"> 
         
          <label id="abrir"  htmlFor="menudesp"  className="m-auto p-auto ">
         
               <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
         
          </label>  

         </Col>




         <Col className="d-md-none col-2 m-auto p-auto  text-secondary "> <FontAwesomeIcon icon="phone"></FontAwesomeIcon>  </Col>
         <Col className=" col-4 col-md-2 m-auto"> <img src="/img/logo_naturitas.svg" alt="Logo"  className="w-100"/></Col>
         <Col className="input-group input-group-sm my-auto d-none d-md-flex col-12 col-md-7 m-0 p-0 " id="search"   > 
               <input type="text" placeholder={placeholder1} class="form-control p-0 m-0 col-10" ></input>
               <button class="btn  bg-primary m-0 p-0 col-2 text-light" > 
               <FontAwesomeIcon icon="search" />
               </button>
          </Col>
         
               <Col className="d-none d-md-block col-1  m-auto p-auto text-secondary" > <FontAwesomeIcon icon="heart" /> <span className="d-none d-md-inline  ">FAVORITOS</span></Col>
               <Col className="col-2 col-md-1 m-auto p-auto  text-secondary"> <FontAwesomeIcon icon="user" /> <span className="d-none d-md-inline">MI CUENTA</span> </Col>
               <Col className="col-2 col-md-1 m-auto p-auto  text-secondary"> 
               <span class="badge text-light" id="numerocarro" >3</span>
               <FontAwesomeIcon icon="shopping-basket" /> <span className="d-none d-md-inline ">17,50€</span>
               </Col>

               <Col className="input-group input-group-sm my-auto d-md-none col-12 col-md-7 m-md-0 mt-5 p-0" id="search"> 
               <input type="text" placeholder={placeholder2} class="form-control p-0 m-0 col-10" ></input>
               <button class="btn  bg-primary m-0 p-0 col-2 text-light" > 
               <FontAwesomeIcon icon="search" />
               </button>
               </Col>
               
        
    </Row>
 
 );
  
  
 export default HeaderSearch;