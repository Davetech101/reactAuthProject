import { useRef, useContext } from "react";
import { AuthContext } from "../../Store/auth-context";
import classes from "./ProfileForm.module.css";
import { useNavigate } from "react-router-dom";


const ProfileForm = () => {
  const history = useNavigate()
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const SubmitHandler = (e) => {
    e.preventDefault();

    const enteredPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBz8e1mwIoVtWOCWKATsgxL3FW2SnGSnh8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      history("/")
    })
    e.target.reset()
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" minLength="7" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;