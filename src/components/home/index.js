import React from 'react';
import { Button } from 'reactstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from "./Carousel.js";
import Banners from "./banners.js";
import Servicios from "./servicios.js"
import { Nav, NavItem, NavLink } from 'reactstrap';

const BannersData = [
    {src:'https://cdn.naturitas.es/media/wysiwyg/Banners/Offer/batidos_siken_2.jpg'},
    {src:'https://cdn.naturitas.es/media/wysiwyg/Banners/Offer/banner_mielmanuka.jpg'},
];

const ServciosData = [
    {texto1:'+30 mil productos',texto2:'de bienestar saludable', icono:"seedling" },
    {texto1:'15% de descuento',texto2:'respecto a otras tiendas', icono:"percent"  },
    {texto1:'Envío Gratis',texto2:'a partir de 45€', icono:"shipping-fast"  },
    {texto1:'Devolución gratuita',texto2:'durande 30 días', icono:"box-open"  },
];


const Home = () => (
    <Row  className="m-0 p-0 col-12">
   
      <Row className="carrusel m-auto">
      <CarouselHome ></CarouselHome>
      </Row>
      <Grid >
      <Row className="">
        <Banners data={BannersData} className="col-12 " id="banner"></Banners>
        <Servicios data={ServciosData} className="col-12 " id="servicios" ></Servicios>
    </Row>
    </Grid>
    </Row>
 );

 export default Home;
 