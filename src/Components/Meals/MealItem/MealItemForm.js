import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealTtemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  )
}

export default MealTtemForm
