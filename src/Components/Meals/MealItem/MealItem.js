import { useContext } from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'
import CartContext from '../../../Store/Cart-Context'


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount)=> {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }
  const price = `$${props.price.toFixed()}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart = {addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
