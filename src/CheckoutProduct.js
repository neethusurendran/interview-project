import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,name,img,description,price}){

    const [{basket},dispatch]=useStateValue();
    
     const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
      }
    return (
        <div class="checkoutProduct">
            <img className="checkoutProduct_image" src={img} alt=""/>
            <div className="checkoutProduct_title">
                {name}
            </div>
            <div  className="checkoutProduct_price">
                <small>$</small>
              <strong>  {price}</strong>
            </div>
            <div class="checkoutProduct_description">
                {description}
            </div>
            <div className="remove_button">
            <button className="check_button"  onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
