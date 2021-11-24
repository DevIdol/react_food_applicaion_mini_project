import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  return (
    <form className={classes.form} onClick={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'number',
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
          step: '1',
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter A Valid Amount (1 - 5)</p>}
    </form>
  )
}

export default MealItemForm
