import classes from "./Home.module.css";
import hero from "../../assets/logos/f5bf51a5-1ecf-4651-a5ee-e8afe3a091a3.jpeg";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <img className={classes.heroImage} src={hero} alt="" />
        <p>
          Welcome to SMURF Shop! Here you can find everything what you want. 😎
        </p>
        <br />
        <p>Have a good Time! ❤️</p>
      </div>
      <div className={classes.footer}>
        <a style={{marginRight: '20px'}} href='/'><BsInstagram color="black" size={50}/></a>
        <a href='/'><BsFacebook color="black" size={50}/></a>
      </div>
    </div>
  );
};

export default Home;
