import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  const [index, setIndex] = useState(1);

  const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f4f4f4;
    align-items: center;
    justify-content: space-between;
    justify-content: space-around;

    .active {
      opacity: 1;
    }

    .inActive {
      opacity: 0.25;
    }

    .footer-icons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
    }
  `;

  const classNames = ['ri-headphone-fill', 'ri-file-mark-fill', 'ri-run-fill'];
  const links = ['/Player', '/Books', '/Profile'];

  return (
    <Footer className="footer">
      <div className="footer-icons">
        {classNames.map((_, idx) => (
          <Link to={`${links[idx]}`}>
            <div>
              <i
                key={idx}
                className={`${classNames[idx]} ri-3x${
                  index === idx ? ' active' : ' inActive'
                }`}
                onClick={() => {
                  setIndex(idx);
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </Footer>
  );
}
