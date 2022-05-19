import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/reducers/authSlice";

export function SignUp({ setAuthVal }) {
  const dispatch = useDispatch();
  const [signUpDetails, setsignUpDetails] = useState({
    firstName: "",
    lastName: "",
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

  const signUpHandler = () => {
    if (
      signUpDetails.firstName !== "" &&
      signUpDetails.lastName !== "" &&
      signUpDetails.email.match(emailRegex) &&
      signUpDetails.password.match(passwordRegex)
    ) {
      setErrorMessage({
        show: false,
        message: "",
      });
      dispatch(signUp(signUpDetails));
    } else {
      setErrorMessage({
        show: true,
        message: "Invalid Credentials",
      });
    }
  };

  return (
    <div id="auth-signup" className="sm-main-auth-signup">
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
      <h2 className="fw-800">Signup</h2>

      <div className="auth-email-pass">
        <div className="sm-input-container input-user-firstname">
          <input
            type="text"
            className={`input-basic input-basic-icon ${
              signUpDetails.firstName !== ""
                ? "sm-input-success"
                : "sm-input-error"
            }`}
            placeholder="Enter First Name"
            name="firstname"
            value={signUpDetails.firstName}
            onChange={(e) =>
              setsignUpDetails({ ...signUpDetails, firstName: e.target.value })
            }
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-user-lastname">
          <input
            type="text"
            className={`input-basic input-basic-icon ${
              signUpDetails.lastName !== ""
                ? "sm-input-success"
                : "sm-input-error"
            }`}
            placeholder="Enter Last Name"
            name="lastname"
            value={signUpDetails.lastName}
            onChange={(e) =>
              setsignUpDetails({ ...signUpDetails, lastName: e.target.value })
            }
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-user">
          <input
            type="email"
            className={`input-basic input-basic-icon ${
              signUpDetails.email !== ""
                ? signUpDetails.email.match(emailRegex)
                  ? "sm-input-success"
                  : "sm-input-error"
                : ""
            }`}
            placeholder="Enter Email"
            name="email"
            required
            value={signUpDetails.email}
            onChange={(e) =>
              setsignUpDetails({ ...signUpDetails, email: e.target.value })
            }
          />
          <i className="icon-basic fas fa-envelope"></i>
        </div>
        <div className="sm-input-container input-pass">
          <input
            type="password"
            className={`input-basic input-basic-icon ${
              signUpDetails.password !== ""
                ? signUpDetails.password.match(passwordRegex)
                  ? "sm-input-success"
                  : "sm-input-error"
                : ""
            }`}
            placeholder="Enter Password"
            name="password"
            required
            value={signUpDetails.password}
            onChange={(e) =>
              setsignUpDetails({ ...signUpDetails, password: e.target.value })
            }
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
      </div>

      <div className="sm-auth-accept">
        <input type="checkbox" value="" />
        <span className="sm-auth-signup-txt">
          {"  "}I accept all
          <button className="btn btn-txt">Terms &amp; Conditions</button>
        </span>
      </div>

      <button
        id="sm-auth-signup-btn"
        className="auth-btn btn btn-primary btn-bold "
        onClick={() => signUpHandler()}
      >
        Signup
      </button>

      <button
        id="sm-auth-login-btn"
        className="auth-btn btn btn-primary btn-bold btn-outline "
        onClick={() => setAuthVal(true)}
      >
        Login
      </button>
    </div>
  );
}
