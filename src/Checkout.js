import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';




function Checkout() {
    const [{basket}]=useStateValue();

    return (
        <div className="checkout">
            {/* <img className="checkout_ad" src= "https://images.unsplash.com/photo-1599476505006-b481e84020d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
            /> */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in Your basket.To buy one or "add to basket" next to the item.</p>
                    </div>
            ) : (
                <div>
                    <h2 className="checkOut_title"> Your Shopping Basket</h2>
                    {basket.map((item)=>(
                     <CheckoutProduct
                     id={item.id}
                     name={item.name}
                      img={item.img}
                    description={item.description}
                    price={item.price}
                     
                     
                     />
                     


              ))  }

                    
                </div>
            
                   
            )}
        </div>
    );
}

export default Checkout;
