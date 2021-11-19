import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'
import Image from '../../Assets/meals.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Application</h1>
        <HeaderCartButton onClick = {props.onShowCart} />
     
      </header>
      <div className={classes['main-image']}>
        <img src={Image} alt="Food Image" />
      </div>
    </Fragment>
  )
}

export default Header
