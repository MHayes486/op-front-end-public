import classes from './MerchItemForm.module.css';
import Input from './Input'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const MerchItemForm = props => {
    const dispatch = useDispatch();

     const { title, price, description, id } = props;
     
  const addCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

    return (
        <form className={classes.form}>

            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={addCartHandler}>+ Add</button>

        </form>
    );
};

export default MerchItemForm;