import React from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './Header';
import Firstpage from './Firstpage';
import Home from './Home';
import Checkout from './Checkout';
 import CreateProduct from './CreateProduct';
 import CreateView from './CreateView';
 
function App() {
  return (
    <Router>
   <div className="app">
     <Switch>
    
     <Route path="/Home">
         <Header/>
         <Home/>
       </Route>
       <Route  path="/CreateProduct" component={CreateProduct}/>
        <Route  path="/CreateView" component={CreateView}/>
      
       
       <Route path="/checkout">
         <Header/>
         <Checkout/>
       </Route>
       <Route path="/CreateProduct">
         <Header/>
         <CreateProduct/>
       </Route>
      
       <Route path="/">
         
         <Firstpage/>
         
        
       </Route>

        
      
       </Switch>
     
    </div>
    </Router>
   
  );
}

export default App;
