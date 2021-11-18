import { Fragment } from 'react'
import classes from './Header.module.css'
import Image from '../../Assets/meals.jpg'
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Application</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={Image} alt="Food Image" />
      </div>
    </Fragment>
  )
}

export default Header
