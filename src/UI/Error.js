import classes from "./Error.module.css"; // CSS for styling the error page
import errorImg from "../assets/error.png";
const ErrorPage = () => {
  return (
    <div className={classes["error-container"]}>
      <img src={errorImg} alt="Error" className="error-image" />
      <h1>Something went wrong</h1>
      <p>Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
