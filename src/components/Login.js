import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import Signup from './Signup';
import { useHistory, Link } from 'react-router-dom';
import Button from './Button';
import { Popup as ReactPopup } from 'reactjs-popup';

export default function Login({ setTrigger }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    } catch {
      // ReactPopup.alert('E-post och lösenord matchar inte');
      setError('E-post och lösenord matchar inte');
    }
    setLoading(false);
  }

  return (
    <div className="login-window-wrapper">
      <div className="login-window">
        {error && <Alert variant="danger">{error}</Alert>}
        <h3>Logga in</h3>
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
        <Button disabled={loading} bgColor="#F0B5A4" onClick={handleSubmit}>
          Fortsätt
        </Button>
        <p style={{ borderBottom: '1px solid #AAAAAA' }}>Glömt lösenord?</p>
        <h6>Har du inget konto?</h6>
        <Button
          text="Skapa ett konto gratis"
          color="white"
          bgColor="#545454"
        ></Button>
      </div>
    </div>
  );
}
