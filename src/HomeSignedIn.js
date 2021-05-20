import React, { useState } from 'react';
import Popup from './components/Popup';
import ReadyToUseBookstep from './ReadyToUseBookstep';
import { useAuth } from './contexts/AuthContext';

const HomeSignedIn = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <img src="walking.svg" />
      <div className="heading">
        <h4 style={{ marginTop: '1em' }}>
          Välkommen till ett nytt sätt att motiveras till att motionera. Välj en
          bok och börja räkna stegen. Häftigt att ha dig med!
        </h4>
      </div>
    </>
  );
};

export default HomeSignedIn;
