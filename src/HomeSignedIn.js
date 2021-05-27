import React, { useState } from 'react';

const HomeSignedIn = () => {
  return (
    <div className="homeWrapperSigned">
      <img src="walking.svg" />
      <div className="heading">
        <h4 style={{ marginTop: '1em' }}>
          Välkommen till ett nytt sätt att motiveras till att motionera. Välj en
          bok och börja räkna stegen. Häftigt att ha dig med!
        </h4>
      </div>
    </div>
  );
};

export default HomeSignedIn;
