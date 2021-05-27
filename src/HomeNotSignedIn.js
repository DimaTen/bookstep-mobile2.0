import React, { useState } from 'react';
import Button from './components/Button';
import Slideshow from './components/Slideshow';
import Popup from './components/Popup';
import Signup from './components/Signup';
import MediaQuery from 'react-responsive';
import SlideshowDesktop from './components/SlideshowDesktop';

export default function HomeNotSignedIn() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleLogin = () => {
    setButtonPopup(true);
  };

  return (
    <>
      <MediaQuery query="(max-device-width: 760px)">
        <div className="homeWrapper">
          <Slideshow />
          <div className="heading">
            <h4>
              Lås upp ljudböcker med motion och håll tränings- motivationen
              igång
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
        </div>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 761px)">
        <div>
          <SlideshowDesktop />
        </div>
      </MediaQuery>
    </>
  );
}
