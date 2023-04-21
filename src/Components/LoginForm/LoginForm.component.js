import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user";
import classes from "./LoginForm.module.css";

const defaultInputValues = {
  name: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultInputValues);
  const { name, password } = formFields;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentUser(formFields));
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormFields(defaultInputValues);
  };
  return (
    <div className={classes.loginContainer}>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          onChange={handleChange}
          name="name"
          type="text"
          value={name}
          required
          placeholder="Name..."
        />

        <input
          className={classes.input}
          onChange={handleChange}
          name="password"
          type="password"
          value={password}
          required
          placeholder="Password..."
        />

        <button className={classes.button} type="submit">
          JOIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
