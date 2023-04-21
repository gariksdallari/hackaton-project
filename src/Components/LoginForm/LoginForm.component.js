import {useState} from 'react';
import classes from './LoginForm.module.css'

const defaultInputValues = {
    login: "",
    password: "",
  };

const LoginForm = () => {

    const [formFields, setFormFields] = useState(defaultInputValues);
    const { login, password } = formFields;
  
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
            name="login"
            type="text"
            value={login}
            required
            placeholder="Login..."
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

          <button className={classes.button} type="submit">JOIN</button>
        </form>
      </div>
    )
};

export default LoginForm;