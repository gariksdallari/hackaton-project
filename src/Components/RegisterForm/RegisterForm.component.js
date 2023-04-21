import { useState } from "react";
import classes from "./RegisterForm.module.css";

const defaultInputValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [formFields, setFormFields] = useState(defaultInputValues);
  const { name, email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          name="email"
          type="email"
          value={email}
          required
          placeholder="Email..."
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
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
