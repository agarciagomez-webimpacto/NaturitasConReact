import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faSearch, faHeart, faUser, faShoppingBasket  } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { slide as Menu } from 'react-burger-menu'

library.add(faStroopwafel, faSearch, faHeart, faUser, faShoppingBasket)

class HeaderMenu extends React.Component{

  renderCols(colsData){
      return colsData.map(col =>
          
        
        <NavItem  key={col.texto} className={col.margin + "d-block d-md-block  bg-light"}  >
            <NavLink href={col.href} className={col.colorbg + "d-block d-md-block pl-3"} >{col.texto}</NavLink>
        </NavItem>
        
      )
  };

  render(){
      const {data}=this.props;

      return(
          this.renderCols(data)
      );
  }
}




 export default HeaderMenu;
 