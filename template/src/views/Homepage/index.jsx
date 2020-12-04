import React from 'react';

// ICONS
import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

// STYLED-COMPONENTS
import {
  Container,
  Logomarca,
  Body,
  Icons,
} from './styles';

// ASSETS
import logomarca from '../../assets/img/logo.png';

export default function Homepage() {
  return (
    <Container>
      <Logomarca src={logomarca} alt="Logo" />
      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>
      <Icons>
        <FaGithub className="icon" onClick={() => window.open('https://github.com/dennergazevedo')} />
        <FaLinkedinIn className="icon" onClick={() => window.open('https://www.linkedin.com/in/denner-azevedo-6b7b97199/')} />
      </Icons>
    </Container>
  );
}
