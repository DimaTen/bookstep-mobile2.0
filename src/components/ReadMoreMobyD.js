import React from 'react';
import Button from './Button';
import MDbookcover from '../MobyDick-bookcover.svg';
import runningIcon from '../Union.svg';
import alarmIcon from '../alarm.svg';
import playnow from '../Playnow.svg';
import '../mobydick.css';
import { Link } from 'react-router-dom';

const ReadMoreMobyD = () => {
  return (
    <div className="moby-wrapper">
      <div className="outer-Moby">
        <div className="content-moby">
          <div className="bookcover">
            <img src={MDbookcover} />
          </div>
          <h3>Moby Dick</h3>
          <h5>Herman Melville</h5>
          {/* <div className="bookcover-as-background"></div> */}
          {/* <img src={MDbookcover} alt="bakgrundsbild"/> */}
          <div className="icons-div">
            <img src={runningIcon} alt="icon running" />
            <img src={alarmIcon} alt="icon alarm clock" />
          </div>
        </div>
      </div>
      <Link to="/AudioPlayer">
        <div className="button-position">
          <img src={playnow} alt="spela nu-knapp" />
          {/* <Button color="white" bgColor="black">
                Spela nu 
              </Button> */}
          <div />
        </div>
      </Link>
      <div />
      <div />
      <div className="moby-text">
        Romanen handlar om kapten Ahab, som blivit besatt av att jaga en vit
        kaskelot kallad Moby Dick. Kaptenen saknar ett ben, som han fick
        avslitet tidigare i sitt liv av samma val. Ahab är kapten ombord på
        Pequod, ett valfångstfartyg från ön Nantucket. En av huvudpersonerna är
        Ismael som man får följa i början av boken.
      </div>
      <div className="moby-text">
        <Button color="black" bgColor="white">
          Skapa stegmål
        </Button>
      </div>
    </div>
  );
};

export default ReadMoreMobyD;