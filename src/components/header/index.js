import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderInfo from './HeaderInfo.js';
import HeaderSearch from './HeaderSearch.js';
import HeaderMenu from './HeaderMenu.js';
import { Nav, NavItem, NavLink } from 'reactstrap';

const placeholder ="¿Qué buscas hoy? Enecuentra entre más de 45 mil productos ";
const HeaderInfoData = [
                {texto: "¿Necesitas ayuda? 919 019 101  | 932 711 184", dnone: true, icono: "phone", margin:"text-left"},
                {texto: "Envío Gratis a partir de 45€", dnone: false, icono: "shipping-fast" },
                {texto: "30 días - plazo devolucion gratuita", dnone: true, icono: "box-open" ,  margin:"text-right"},
     ];

     const HeaderMenuData = [
        {texto:'SUPLEMENTOS', href:"#", margin:""},
        {texto:'PLANTAS', href:"#", margin:""}, 
        {texto:'ALIMENTACIÓN', href:"#", margin:""},
        {texto:'COSMÉTICA', href:"#", margin:""},
        {texto:'HIGIENE', href:"#", margin:""},
        {texto:'MAMÁ Y BEBÉ', href:"#", margin:""},
        {texto:'DEPORTE', href:"#", margin:""},
        {texto:'HUERTO', href:"#", margin:""},
        {texto:'Nuestras Marcas', href:"#", margin:"ml-md-auto  "},
        {texto:'Ofertas', href:"#", colorbg:"text-danger  "},
];

const Header = () => (
    <Row  className="m-0 p-0 col-12">
         <HeaderInfo data={HeaderInfoData} ></HeaderInfo>
         <HeaderSearch data={placeholder}></HeaderSearch>
         
    <Row className="m-0 p-0  col-12 d-flex border-top border">  
    <input id="menudesp" type="checkbox" className="d-none"></input>
    <Nav className="menu col-12 d-block d-md-flex m-0 p-0" id="menudesktop">
   
    
    <HeaderMenu data={HeaderMenuData} ></HeaderMenu>
    
      </Nav>    
    </Row>
    
    </Row>
 );

 export default Header;