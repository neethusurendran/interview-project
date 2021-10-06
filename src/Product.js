import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
   


function Product({id,name,img,description,price}) {

    const [{},dispatch]=useStateValue();
    
    const addToBasket=()=>{
    dispatch({
        type:"ADD_TO_BASKET",
        item:{
            id:id,
            name:name,
            img:img,
            description:description,
            price:price
        }
    })
}; 
    return (
        
        <div className="product">
            <img src={img} alt=""/>
            <div className="product_info">
            <p>{name}</p>
            <p className="product_price"> 
            <small>$</small>
            <strong class="product_price">{price}</strong>
            </p>
            <p>{ description}</p>
             
           <button className="poduct_button" onClick={addToBasket}>Add to basket</button>
            
        </div>
        </div>
    );
}

export default Product;
