import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue(); 
  
  const addTobasket = () => {
     
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  };
  
  
  return ( 
    <div div className="Product">
      <div className="product__info">
        <p>{title}</p>
        <p className="Product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
            <p>⭐</p>
            ))}            
         </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addTobasket}>Add to basket</button>
    </div>
  )
}

export default Product