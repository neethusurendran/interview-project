import React from 'react'
import {Button,Card} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Home from "./Home"
import  './Firstpage.css';


function Firstpage() {
    return (
        <div  className="first_main">
    <div className="firstpage1">
        
<br/><h1>Home page</h1><br/> 
<Button ClassName="b1" component={Link} to="/Home" variant="contained" color="primary">Product</Button><br/><br/>
<Button component={Link} to="/Checkout" variant="contained" color="primary">Wishlist</Button><br/><br/>
<Button component={Link} to="/CreateProduct"variant="contained" color="primary">Create product</Button><br/><br/>

</div>
</div>



        
    )
}

export default Firstpage



