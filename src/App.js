import { Fragment, useState } from 'react'
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  )
}

export default App
