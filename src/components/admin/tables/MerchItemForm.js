import classes from '../../merchandise/MerchItemForm.module.css';
import Input from '../../merchandise/Input'

const MerchItemForm = props => {

    const deleteMerchHandler=()=>({
        // props.onAddToCart(),
});

    return (
        <form className={classes.form}>

            <button onClick={deleteMerchHandler}>- Delete</button>

        </form>
    );
};

export default MerchItemForm;