import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const{name,img,body,age,time}=props.item
  const add =props.add
    return (
      <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{body}</p>
          <p className='card-text'>For age: <span className='fw-semibold'>{age} </span></p>
          <p className='card-text'>Time required: <span className='fw-semibold'>{time}</span><span className='fw-semibold ms-0'>s</span> </p>
          <button onClick={()=>add(props.item)} type="button" className="btn btn-outline-primary">Add to list</button>
        </div>
      </div>
    </div>
    
    );
};

export default Cart;