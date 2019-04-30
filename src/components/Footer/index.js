import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Informacion from "./Informacion.js";
import CategoriasYMarcas from "./CategoriasYMarcas.js";
import SobreNaturitas from "./SobreNaturitas.js";
import RRSS from "./RRSS.js";
import Pago from "./Pago.js";
import { UncontrolledCollapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoData = [
    {texto1:'Teléfonos', telefono1:'919 019 101', telefono2:' 932 711 184'},
    {texto1:'Email: info@naturitas.es'},
];

const CategoriasYMarcasData = [
    {texto1:'Suplementos'},
    {texto1:'Alimentación'},
    {texto1:'Cosmética e higiene'},
    {texto1:'Deporte'},
    {texto1:'Mamá y bebé'},
    {texto1:'Hogar y huerto'},
    {texto1:'Todas las marcas A-Z'},

];

const SobreData = [
    {texto1:'Centro de ayuda'},
    {texto1:'Contacto'},
    {texto1:'¿Quiénes somos?'},
    {texto1:'Métodos de pago'},
    {texto1:'Política de devoluciones'},
    {texto1:'Términos y condiciones'},
    {texto1:'Compromiso naturitas'},
    {texto1:'Blog'},
];


const RRSSData = [
    {texto1:'https://image.flaticon.com/icons/png/512/81/81341.png'},
    {texto1:'https://img.icons8.com/ios/420/instagram-new.png'},
    {texto1:'https://img.icons8.com/metro/420/twitter.png'},
];


const PagoData = [
    {texto1:'https://www.mastercard.es/content/dam/mccom/global/logos/logo-mastercard-mobile.svg'},
    {texto1:'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'},
    {texto1:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png'},
    {texto1:'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c530.png'},
    {texto1:'https://about.americanexpress.com/sites/americanexpress.newshq.businesswire.com/files/logo/image/AXP_BlueBoxLogo_EXTRALARGEscale_RGB_DIGITAL_1600x1600.png'},
    
];



const Footer = () => (
   <Grid fluid id="footer" className="m-0 p-0">
   <Col className="col-12 " id="logofooter"><img src="/img/simbolo.svg" className=" my-auto"></img></Col>
   <Col id='segundoGrid' className="m-auto col-12">
        <Row  className="" >
        
        <Col className="col-12 col-md p-3">
        
         <span  id="toggler" >
         <h5>INFORMACIÓN
         <FontAwesomeIcon icon="chevron-down" className="float-right d-md-none"></FontAwesomeIcon> 
         </h5>
         <hr/>
        </span>
        <UncontrolledCollapse toggler="#toggler" className="d-md-block">
        <Informacion data={InfoData} ></Informacion>
        </UncontrolledCollapse>

        </Col>

        <Col className="col-12 col-md p-3">
        
        <span  id="toggler1" >
         <h5>
        CATEGORÍAS & MARCAS
         <FontAwesomeIcon icon="chevron-down" className="float-right d-md-none"></FontAwesomeIcon> 
         </h5>
         
         <hr/>
        </span>
        <UncontrolledCollapse toggler="#toggler1" className="d-md-block">
        <CategoriasYMarcas data={CategoriasYMarcasData}></CategoriasYMarcas> 
        </UncontrolledCollapse>
        </Col>
        <Col className="col-12 col-md  p-3">
        

        <span  id="toggler2" >
         <h5>SOBRE NATURITAS

         <FontAwesomeIcon icon="chevron-down" className="float-right d-md-none"></FontAwesomeIcon> 

         </h5>
         <hr/>
        </span>
        <UncontrolledCollapse toggler="#toggler2" className="d-md-block">
        <SobreNaturitas data={SobreData}></SobreNaturitas>
        </UncontrolledCollapse>
        
        </Col>
        <Col className="col-12 col-md  p-3 ">
        <span  id="toggler3" >
        <h5>SÍGUENOS EN
         <FontAwesomeIcon icon="chevron-down" className="float-right d-md-none "></FontAwesomeIcon> 

        </h5>
        <hr/>
        </span>
        <Row  className="col-12 p-0 m-0">
        <Col className="m-0 p-0 col-12">
        <UncontrolledCollapse toggler="#toggler3" className="d-md-block">
        <RRSS data={RRSSData}></RRSS>
        </UncontrolledCollapse>




        <h5 className="m-0 p-0 mt-4 col-12 d-md-block d-none">ACEPTAMOS</h5>
        <span  id="toggler4" className="d-md-none">

        <h5 className="m-0 p-0 mt-4 col-12 ">METODOS DE PAGO 
        <FontAwesomeIcon icon="chevron-down" className="float-right "></FontAwesomeIcon> 
        </h5>
        </span>
        <hr />
        <UncontrolledCollapse toggler="#toggler4" className="d-md-block ">

        <Pago data={PagoData} className="col-12 mx-auto"></Pago>
        </UncontrolledCollapse>

        </Col>
        </Row>
        </Col>
        
    </Row>
    </Col>
    <Col className="text-center  m-0 p-1" id="copy">
    <span className="m-0 p-0">2018 Naturitas. Todos los derechos reservados.</span>
    </Col>
    </Grid>
 );

 export default Footer;
 