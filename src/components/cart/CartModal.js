import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './CartModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
};

const CartModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const CartModal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)};
            {ReactDOM.createPortal(<CartModalOverlay>{props.children}</CartModalOverlay>, portalElement)};
        </Fragment>
    );
};

export default CartModal;