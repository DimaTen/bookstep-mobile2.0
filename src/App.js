import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styles from './styles.css';
import React, { useState } from 'react';
import Sidemenu from './components/Sidemenu';
import Home from './Home';
import Slideshow from './components/Slideshow';
import Popup from './components/Popup';
import Player from './components/Player';
// detta är en testkommentar
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Router>
      <Route path="/Player" component={Player} />
      <div className="container-fluid">
        <div className="header">
          <Link to="/">
            <div className="hamburger">
              {isOpen ? (
                <i className="ri-close-line ri-3x" onClick={handleClick} />
              ) : (
                <i className="ri-menu-fill ri-3x" onClick={handleClick} />
              )}
            </div>
          </Link>
          <img src="Group29.svg" />
          <div>
            <Link to="/">
              <i className="ri-notification-4-fill ri-2x" />
            </Link>
          </div>
        </div>
        <div className="hider"></div>
        <div className="content">
          <Popup trigger={isOpen}>
            <Sidemenu setTrigger={setIsOpen} />
          </Popup>
          <Slideshow />
          <div className="heading">
            <h4>
              Lås upp ljudböcker med motion och håll tränings- motivationen
              igång
            </h4>
          </div>
        </div>
        <div className="footer">
          <Link to="/Player">
            <div>
              <i className="ri-bug-2-fill ri-3x"></i>
            </div>
          </Link>
          <Link to="/">
            <div>
              <i className="ri-home-line ri-3x"></i>
            </div>
          </Link>
          <Link to="/">
            <div>
              <i className="ri-walk-line ri-3x"></i>
            </div>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
