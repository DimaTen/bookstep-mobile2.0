import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidemenu({ setTrigger }) {
  const handleClose = () => {
    setTrigger(false);
  };

  // const wrapInLinkAndI = (className, children, to) => {
  //   return (
  //     <Link to={to}>
  //       <i className={className}>{children}</i>
  //     </Link>
  //   );
  // };

  return (
    <div className="sidemenu">
      <Link>
        <i
          className="ri-close-line ri-3x"
          style={{ marginLeft: '.55em' }}
          onClick={handleClose}
        ></i>
      </Link>
      <ul>
        <Link to="/">
          <li>
            <i className="ri-home-2-fill ri-3x" />
            Hem
          </li>
        </Link>
        <Link>
          <li>
            <img
              src="Blogo.svg"
              style={{ width: '15%', height: '15%', marginTop: '1em' }}
            />
            Om oss
          </li>
        </Link>
        <Link>
          <li>
            <i className="ri-phone-fill ri-3x" />
            Kontakt
          </li>
        </Link>
        <Link>
          <li>
            <i className="ri-key-fill ri-3x" />
            Logga in
          </li>
        </Link>
        <Link>
          <li>
            <img
              src="TryBooksteplogo.svg"
              style={{ width: '15%', height: '15%' }}
            />
            Prova Bookstep
          </li>
        </Link>
      </ul>
    </div>
  );
}
