import classes from "./Contactus.module.css";
import { useState } from "react";
const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className={classes.container}>
      {submitted ? (
        <div>Thanks for your feedback!</div>
      ) : (
        <div>
          <h3>Please fill the form to contact us!</h3>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              className={classes.input}
              type="text"
              placeholder="Organization Name"
              required
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Your email"
              required
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Your phone number"
              required
            />
            <textarea
              className={classes.inputArea}
              id="description"
              name="text"
              rows="4"
              cols="50"
              placeholder="Type your message"
            ></textarea>
            <button className={classes.button} type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
