import React from "react";

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import Popup from "./Popup";
import Signup from "./Signup";
import Login from "./Login"


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setButtonPopup(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === "bookstep@admin.se" &&
      formData.password === "1234hemligt"
    ) {
      setIsLoggedIn(true);
      setButtonPopup(false);
      console.log("Välkommen!");
    } else {
      console.log("Epost eller lösenord är felaktigt, försök igen");
    }
  };

  return (
    <div className="menubar">
      <div className="menubar-logo">
        <Link to="/">
          <img src="./icons/Bookstep-logo.svg" />
        </Link>
      </div>
     
      <div className="login-try">
        <Button
          text={isLoggedIn ? "Logga ut" : "Logga in"}
          color="#545454"
          onClick={handleLogin}
        ></Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Login />
        </Popup>
        <Button text="Prova Bookstep" color="white" bgColor="#545454"></Button>
      </div>
    </div>
  );
}
