import { useState } from 'react'
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './Store/CartProvider'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
