import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

export default function Button({ children, color, bgColor, onClick }) {
  const Button = styled.button`
    padding-left: 3em;
    padding-right: 3em;
    border: 1px solid #545454;
    border-radius: 15px;
    margin: 1vw;
  `;

  return (
    <Button
      onClick={onClick}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {children}
    </Button>
  );
}
