import React from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartActions";

const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(state)
  
    return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <input ></input>
      <button className="green" onClick={()=> {dispatch(addItem())}}>Add Item to Cart</button>
      <button disabled={state.numOfItems >0 ? false : true} className="red" onClick={()=>{dispatch(deleteItem())}}>Remove Item from Cart</button>
    </div>
  );
};

export default Cart;