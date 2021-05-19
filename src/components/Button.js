import React from 'react';
import styled from 'styled-components';

export default function Button({ children, color, bgColor, onClick, type }) {
  const Button = styled.button`
    padding-left: 3em;
    padding-right: 3em;
    border: 1px solid #545454;
    border-radius: 15px;
    margin: 1vw;
  `;
  return (
    <Button
      className={type}
      onClick={onClick}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {children}
    </Button>
  );
}
