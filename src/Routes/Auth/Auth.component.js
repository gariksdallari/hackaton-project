import LoginForm from "../../Components/LoginForm/LoginForm.component";
import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";
import classes from "./Auth.module.css";

const Auth = () => {


  return (
    <div className={classes.container}>
      <h4 className={classes.title} >Already have an account? Please login. Or create a new one ❤️</h4>
      <div className={classes.formsContainer}>
        <LoginForm />
        <RegisterForm/>
      </div>
    </div>
  );
};

export default Auth;
