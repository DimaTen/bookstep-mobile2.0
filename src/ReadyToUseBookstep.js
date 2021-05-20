import Button from './components/Button';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ReadyToUseBookstep = () => {
  const history = useHistory();

  const routeChange = () => {
    history.push('/');
  };

  return (
    <div className="readyToUse">
      <div class="readyToUse-inner">
        <h3>Nu är du redo att börja använda Bookstep</h3>
        <h5>
          Välj mellan 30 000 ljudböcker! Följ din statistik på vägen till ditt
          motions mål.
        </h5>
        <Button
          type="big"
          bgColor="#535353"
          color="white"
          onClick={routeChange}
          className="continue-btn"
        >
          Fortsätt
        </Button>
      </div>
    </div>
  );
};

export default ReadyToUseBookstep;
