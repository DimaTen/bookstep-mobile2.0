import React from 'react';
import './popup.css';
import ReactDom from 'react-dom';

export default function Popup({ trigger, children }) {
  return trigger
    ? ReactDom.createPortal(
        <div className="popup">
          <div className="popup-inner">{children}</div>
        </div>,
        document.getElementById('portal')
      )
    : '';
}
