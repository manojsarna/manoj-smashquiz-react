import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, testLogin } from "../../../redux/reducers/authSlice";
export function Login({ setAuthVal }) {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    message: "",
  });

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const loginHandler = () => {
    if (
      loginDetails.email.match(emailRegex) &&
      loginDetails.password.match(passwordRegex)
    ) {
      setErrorMessage({
        show: false,
        message: "",
      });
      dispatch(login(loginDetails));
    } else {
      setErrorMessage({
        show: true,
        message: "Invalid Credentials",
      });
    }
  };

  return (
    <div id="auth-login" className="sm-main-auth-login">
      <div
        className={`sm-notification  sm-not-error ${
          errorMessage.show ? "sm-error-show" : "sm-error-hide"
        }`}
      >
        <span className="sm-alert-icon">
          <i className="fas fa-exclamation-circle"></i>
        </span>
        <span>{errorMessage.message}</span>
      </div>
      <h2 className="fw-800">Login</h2>

      <div className="auth-email-pass">
        <div className="sm-input-container input-user">
          <input
            type="email"
            className={`input-basic input-basic-icon ${
              loginDetails.email !== ""
                ? loginDetails.email.match(emailRegex)
                  ? "sm-input-success"
                  : "sm-input-error"
                : ""
            }`}
            placeholder="Enter Email"
            name="email"
            required
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
          <i className="icon-basic fas fa-envelope"></i>
        </div>
        <div className="sm-input-container input-pass">
          <input
            type="password"
            className={`input-basic input-basic-icon ${
              loginDetails.password !== ""
                ? loginDetails.password.match(passwordRegex)
                  ? "sm-input-success"
                  : "sm-input-error"
                : ""
            }`}
            placeholder="Enter Password"
            name="password"
            required
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
      </div>

      <div className="auth-for-rem">
        <button
          className="btn btn-txt test-login"
          onClick={(e) => {
            e.preventDefault();
            dispatch(testLogin());
          }}
        >
          TEST LOGIN
        </button>
        <div className="sm-auth-rem">
          <input type="checkbox" value="" />
          <span className="auth-rem-text">Remember Me</span>
        </div>
      </div>

      <button
        className="auth-btn btn btn-primary btn-bold "
        onClick={() => loginHandler()}
      >
        Login
      </button>

      <button
        id="sm-auth-signup-btn"
        className="auth-btn btn btn-bold btn-outline "
        onClick={() => setAuthVal(false)}
      >
        Signup
      </button>
    </div>
  );
}
