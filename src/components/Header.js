import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Button from './Button';
import { useAuth } from '../contexts/AuthContext';
import Popup from './Popup';
import Login from './Login';

export default function Header({ isOpen, setTrigger }) {
  const [openLogin, setOpenLogin] = useState(false);
  const { currentUser, logout } = useAuth();
  const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f4f4f4;
    align-items: center;
    justify-content: space-between;
    height: 55px;

    .hamburger {
      margin-left: 5%;
    }

    .notification {
      margin-right: 5%;
    }

    .btns {
      display: flex;
      margin: 3%;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 149%;
    }

    .links {
      display: flex;
      justify-content: space-between;
      width: 30%;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 149%;
      letter-spacing: 0.005em;
    }

    img {
      margin: 2vw;
    }
  `;

  async function handleLogout() {
    try {
      await logout();
    } catch {}
  }

  const handleLogin = () => {
    if (currentUser) handleLogout();
    else setOpenLogin(true);
  };

  const handleClick = () => {
    isOpen ? setTrigger(false) : setTrigger(true);
  };

  return (
    <>
      <MediaQuery query="(max-device-width: 760px)">
        <Header className="header">
          <section className="hamburger">
            <i className="ri-menu-fill ri-3x" onClick={handleClick} />
          </section>
          <Link to="/">
            <img src="Booksteplogo.svg" alt="bookstep logo" />
          </Link>
          <section className="notification">
            <Link to="/">
              <i className="ri-notification-4-fill ri-2x" />
            </Link>
          </section>
        </Header>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 761px)">
        <Header className="header">
          <Link to="/">
            <img src="Booksteplogo.svg" alt="bookstep logo" />
          </Link>
          <section className="links">
            <Link className="routeLinks" to="/">
              Home
            </Link>
            <Link className="routeLinks" to="/Books">
              Böcker
            </Link>
            <Link className="routeLinks" to="/About">
              Om oss
            </Link>
            <Link className="routeLinks" to="/Contact">
              Kontakt
            </Link>
          </section>
          <section className="btns">
            <Button className="left" onClick={handleLogin}>
              {currentUser ? 'Logga ut' : 'Logga in'}
            </Button>
            <Button id="right" color="white" bgColor="#545454">
              Prova
            </Button>
            <Popup trigger={openLogin}>
              <Login setTrigger={setOpenLogin} />
            </Popup>
          </section>
        </Header>
      </MediaQuery>
    </>
  );
}
