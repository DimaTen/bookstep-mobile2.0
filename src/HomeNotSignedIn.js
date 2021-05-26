import React, { useState } from 'react';
import Button from './components/Button';
import Slideshow from './components/Slideshow';
import Popup from './components/Popup';
import Signup from './components/Signup';
import MediaQuery from 'react-responsive';

export default function HomeNotSignedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setButtonPopup(true);
    }
  };

  return (
    <>
      <Slideshow />
      <div className="heading">
        <h4>
          Lås upp ljudböcker med motion och håll tränings- motivationen igång
        </h4>
        <Button
          color="black"
          bgColor="white"
          className="account-btn"
          onClick={handleLogin}
        >
          Skapa konto gratis
        </Button>
        <Popup trigger={buttonPopup}>
          <Signup setTrigger={setButtonPopup} />
        </Popup>
      </div>
    </>
  );
}
