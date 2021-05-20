import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import Button from './Button';

export default function Signup({ setTrigger }) {
  const emailRef = useRef();
  const confirmEmailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setTrigger(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value !== confirmEmailRef.current.value) {
      return setError('E-post-fälten matchar inte');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/ReadyToUseBookstep');
      handleClose();
    } catch {
      setError('Failed to create account');
    }
    setLoading(false);
  }

  return (
    <div class="login-window-wrapper">
      <div class="login-window">
        {error && <Alert variant="danger">{error}</Alert>}
        <h3>Skapa konto</h3>
        <div className="close-button">
          <Link to="/">
            <i
              className="ri-close-line ri-3x"
              style={{ marginLeft: '55%' }}
              onClick={handleClose}
            ></i>
          </Link>
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
          <h6>Bekräfta din Epost</h6>
          <input
            name="confirm-email"
            placeholder="Skriv här"
            type="email"
            ref={confirmEmailRef}
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
        <h6>Har du redan ett konto?</h6>
        <Button text="Logga in" color="white" bgColor="#545454"></Button>
      </div>
    </div>
  );
}
