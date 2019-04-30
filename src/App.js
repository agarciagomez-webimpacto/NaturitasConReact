import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/header/index.js';
import Home from './components/home/index.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faBars,faChevronDown, faPhone,faSearch, faHeart, faUser, faShoppingBasket, faSeedling , faPercent, faShippingFast, faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';
library.add(faStroopwafel, faBars, faChevronDown,  faPhone, faSearch, faHeart, faUser, faShoppingBasket, faSeedling, faPercent, faShippingFast, faBoxOpen)

function App() {
  return (
    <Grid fluid className="p-0 m-0 col-12"> 
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
    </Grid>
  );
}

export default App;
