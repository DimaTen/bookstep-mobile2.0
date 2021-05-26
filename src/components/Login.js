import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import Signup from './Signup';
import { useHistory, Link } from 'react-router-dom';
import Button from './Button';
import Popup from './Popup';

export default function Login({ setTrigger }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [openReady, setOpenReady] = useState(false);
  const [switchWindow, setSwitchWindow] = useState(false);

  const handleClose = () => {
    setTrigger(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setError('Välkommen!');
      handleClose();
      history.push('/');
    } catch {
      // Popup('E-post och lösenord matchar inte');
      setError('E-post och lösenord matchar inte');
    }
    setLoading(false);
  }

  const handleSwitchWindow = () => {
    setSwitchWindow(true);
  };

  return (
    <div className="login-window-wrapper">
      <div className="login-window">
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="close-button">
            <i
              className="ri-close-line ri-3x"
              style={{ marginLeft: '55%' }}
              onClick={handleClose}
            ></i>
          </div>
          <div className="credentials">
            <h6>Epost</h6>
            <input
              name="email"
              placeholder="Skriv här"
              type="text"
              ref={emailRef}
              required
            ></input>
            <h6>Lösenord</h6>
            <input
              name="password"
              placeholder="Skriv här"
              type="password"
              ref={passwordRef}
              required
            ></input>
          </div>
          <Button
            type="submit"
            disabled={loading}
            bgColor="#F0B5A4"
            onClick={handleSubmit}
          >
            Fortsätt
          </Button>
        </form>
        <p style={{ borderBottom: '1px solid #AAAAAA' }}>Glömt lösenord?</p>
        <h6>Har du inget konto?</h6>
        <Popup trigger={switchWindow}>
          <Signup setTrigger={setSwitchWindow} />
        </Popup>
        <Button
          color="white"
          bgColor="#545454"
          onClick={handleClose}
          onClick={handleSwitchWindow}
        >
          Skapa ett konto gratis
        </Button>
      </div>
    </div>
  );
}
