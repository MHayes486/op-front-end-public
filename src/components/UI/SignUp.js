import { useSelector, useDispatch } from "react-redux";
import SignUpForm from "./SignUpForm";
import styles from "./SignUp.module.css";
import useHttp from "../../hooks/use-http";
import { addMailListMember } from "../../lib/api";
import { signUpCheckActions } from "../../store/signUp-check-slice";
import { Fragment } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const signUpCheckStorage = localStorage.getItem("joined");
  if (signUpCheckStorage === "1") {
    dispatch(signUpCheckActions.validate());
  }

  const signUpValidated = useSelector((state) => state.signUpCheck.signedUp);
  const { sendRequest, status } = useHttp(addMailListMember);

  const signUpHandler = (signUpData) => {
    sendRequest(signUpData);
  };

  return (
    <div className={styles.wholeForm}>
      <h2>Connect with us</h2>

      {!signUpValidated && (
        <Fragment>
          {" "}
          <p>
            Please get in contact with any queries you have and a member of our
            team will get back to you soon.
          </p>
          <SignUpForm onSignUp={signUpHandler} />
        </Fragment>
      )}
      {signUpValidated && <h3>Thanks for joining the community!</h3>}
    </div>
  );
};

export default SignUp;
