import React from "react";
import { UserContext } from "../../../../App";

import PropTypes from "prop-types";

import "./Login.css";

const Login = (props) => {
  function handleResponse(response) {
    props.setUser("chen");
    console.log("done");
  }
  function handleClick() {
    let response = null;
    handleResponse(response);
  }

  return (
    <div className={`login-login ${props.rootClassName} `}>
      <h3 className="login-text">{props.heading}</h3>
      <div className="login-form">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="login-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="login-textinput1 input"
        />
        <button onClick={handleClick} className="login-button button">
          {props.button}
        </button>
        <span
          onClick={() => props.setOpenRegister(true)}
          className="login-text1"
        >
          {props.text}
        </span>
      </div>
    </div>
  );
};

Login.defaultProps = {
  heading: "התחברות",
  text: "להרשמה",
  textinput_placeholder: "placeholder",
  textinput_placeholder1: "placeholder",
  button: "שלח",
  rootClassName: ""
};

Login.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string
};

export default Login;
