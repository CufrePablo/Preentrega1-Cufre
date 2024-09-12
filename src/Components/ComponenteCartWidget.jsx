import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./ComponenteCarWidget.css"

function ComponenteCartWidget() {
    const itemCount = 5; 
  
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        <div className="notification">
          {itemCount}
        </div>
      </div>
    );
  }
  
  export default ComponenteCartWidget;