import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import CurrenctFormat from 'react-currency-format'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  
   const [{ basket }] =useStateValue();
   return (
    <div className="checkout">
    <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._cb423492668_.jpg" alt=""/>
   {basket.length === 0 ? (
   <div>
     <h2>Your Shopping Basket is empty</h2>
     <p>
     "you have no items in your basket. to buy one ot more item click "Add to basket" next to the item.
     </p>
   </div>
   ) : (
    <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
     
    {basket.map(item => (
        <CheckoutProduct 
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        
        
        />
    ))}
     
   
    </div>
   )} 
   {basket.length > 0 && (
     <div className="checkout__right">
    
       <Subtotal />
     </div>   
       
   )}
  </div>
  );
}

export default Checkout 