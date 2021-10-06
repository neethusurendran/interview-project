import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider"

function Header() {
const [{ basket }] = useStateValue();
     console.log(basket);
    return (
        <div>
            <div className="main-header">
               <div> <h3 className="heading">INDOOR PLANTS </h3></div>
               {/* <div className="header_search">
               <input type="text" className="header_searchInput"/>
               </div> */}
               <Link to="/checkout" className="header_link">
                   <div className="header_optionBasket">
                       <ShoppingBasketIcon/>
                       <span className="header_optionLineTwo header_basketCount">
                           {basket?.length}
                           </span>
                   </div>
               </Link>
                 </div>   
                 
                         
                     </div>
                 
         
            
       
        
    )
}

export default Header
