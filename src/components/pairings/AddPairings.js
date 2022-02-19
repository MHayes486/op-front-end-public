import React, { useRef } from 'react';

import classes from './AddPairings.module.css';

function AddPairings(props) {
  const productRef = useRef('');
  const dishnameRef = useRef('');
  const ingredientsRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const pairs = {
        pigProduct: productRef.current.value,
        dishName: dishnameRef.current.value,
        ingredients: ingredientsRef.current.value,
    };

    props.onAddPairings(pairs);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Product</label>
        <input type='text' id='title' ref={productRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Dish Name</label>
        <textarea rows='1' id='opening-text' ref={dishnameRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Ingredients</label>
        <input type='text' id='date' ref={ingredientsRef} />
      </div>
      <button>Add Pairing</button>
    </form>
  );
}

export default AddPairings;