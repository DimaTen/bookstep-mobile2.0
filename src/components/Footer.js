import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

export default function Footer() {
  const [index, setIndex] = useState(3);

  useEffect(() => {
    setIndex(3);
  }, []);

  const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    background-color: #fafafa;
    flex-direction: row;
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

    .footer-links {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 149%;
    }
  `;

  const classNames = ['ri-headphone-fill', 'ri-file-mark-fill', 'ri-run-fill'];
  const links = ['/AudioPlayer', '/Books', '/Profile'];

  return (
    <>
      <MediaQuery query="(max-device-width: 760px)">
        <Footer>
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
      </MediaQuery>
      <MediaQuery query="(min-device-width: 761px)">
        <Footer className="footerDesktop">
          <div className="footer-links">
            <a href="">Hem</a>
            <a href="">Böcker</a>
            <a href="">Om oss</a>
            <a href="">Kontakt</a>
            <a href="">Skapa konto gratis</a>
          </div>
          <div className="sm-logos">
            <a href="">
              <div>
                <img src="./fb-logo.svg" alt="Facebook logo" />
              </div>
            </a>
            <div></div>
            <a href="">
              <div>
                <img src="./instagram-logo.svg" alt="Instagram logo" />
              </div>
            </a>
          </div>
        </Footer>
      </MediaQuery>
    </>
  );
}
