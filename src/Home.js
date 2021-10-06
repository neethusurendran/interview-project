import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* <img className="home_image"
            src="https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
            alt=""
            /> */}

            <div className="home_row">

<Product
       
       id= "1"
       name= "Zeylanica"
       description= "Growing Zelanica deliciosa indoors"
       price= {333}
       img= "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      

        
        />

<Product
       
       id= "2"
       name= "Chinese money plant"
       description= "Growing Monstera Chinese money plant indoors"
       price= {333}
       img= "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
      

        
        />
    <Product
        id= "10"
        name= "Spotted Star"
        description= "Growing Spotted Star indoors"
        price= {4.99}
        img= "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
       
        
      />
         </div>
         <div className="home_row">
<Product
       
       id= "3"
       name= "Monstera"
       description= "Growing Monstera deliciosa indoors"
       price= {333}
       img= "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
      

        
        />


<Product
       
       id= "4"
       name= "peylanica"
       description= "Growing  indoors"
       price= {333}
       img= "https://images.unsplash.com/photo-1599476505006-b481e84020d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

        
        />

<Product
       
       id= "5"
       name= "Zamioculcas zamiifolia"
       description= "Growing Monstera deliciosa indoors"
       price= {333}
       img= "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"

        
        />


        
         </div>
        </div>
    );
}

export default Home
