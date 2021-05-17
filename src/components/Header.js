import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header({ isOpen, setTrigger }) {
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
    justify-content: space-around;
    height: 55px;
  `;

  const handleClick = () => {
    isOpen ? setTrigger(false) : setTrigger(true);
  };

  return (
    <Header className="header">
      <Link to="/">
        <div className="hamburger">
          <i className="ri-menu-fill ri-3x" onClick={handleClick} />
        </div>
      </Link>
      <Link to="/">
        <img src="Booksteplogo.svg" alt="bookstep logo" />
      </Link>
      <div>
        <Link to="/">
          <i className="ri-notification-4-fill ri-2x" />
        </Link>
      </div>
    </Header>
  );
}
