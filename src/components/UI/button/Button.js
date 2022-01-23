
import styled from 'styled-components';
import classes from './Button.module.css';

const Button = styled.button`
.button {
  font: inherit;
  border: .5 #0d273e;
  background: #3f73a2;
  color: white;
  box-shadow: 0 2 8px rgba(0, 0, 0, 0.26);
  padding: 0.2rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  height: 2rem;


}

&:hover,
&:active {
  background: #3f73a2 ;
  border-color: #0d273e ;
  color: #494848;
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.0);
  box-shadow: 0 2 8px rgba(0, 0, 0, 0.26);

}

&:focus {
  outline: none;

}


`;

// const Button = props => {
//   return <button className = {classes.button}
//   type={props.type || 'button'}
//   onClick={props.onClick}>
//     {props.children}
//   </button>
// }
export default Button;
