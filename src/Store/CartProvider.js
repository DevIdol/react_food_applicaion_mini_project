import { useReducer } from 'react'
import CartContext from './Cart-Context'
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    )
    const existingCartItem = state.items[existingCartItemIndex]

    let updateItems
    if (existingCartItem) {
      let updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    } else {
      updateItems = state.items.concat(action.item)
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    })
  }
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id,
    })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
