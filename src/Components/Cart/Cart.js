import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../Store/Cart-Context';
import classes from './Cart.module.css'
import CartItem from './CartItem';




const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemAddHandler = ()=> {};
  const cartItemRemoveHandler = ()=> {};
  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartCtx.items.map((item) => (
       <CartItem 
       key = {item.id}
       name= {item.name}
       amount = {item.amount}
       price = {item.price}
       onAdd = {cartItemAddHandler.bind(null, item)}
       onRemove = {cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )
  return (
    <Modal onCloseCart = {props.onCloseCart}>
      {cartItems}
      <div className = {classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className = {classes.actions}>
          <button className = {classes['button--alt']} onClick = {props.onCloseCart}>Close</button>
          {hasItem && <button className = {classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart;
