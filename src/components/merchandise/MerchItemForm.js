import classes from './MerchItemForm.module.css';
import Input from './Input'

const MerchItemForm = props => {

    const addCartHandler=()=>({
        // props.onAddToCart(),
});

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