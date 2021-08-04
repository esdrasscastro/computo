import React from 'react';
import { css } from 'styled-components';

import { Container, Logo } from '../..';
import Menu from '../Menu';

import StyledHeader from './style';

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader
      bgcolor="var(--primary-color)"
      shadow="1px -1px 10px var(--primary-color)"
      height="100%"
      breakpoints={{
        tablet: css`
          position: relative;
          box-shadow: none;
        `
      }}
    >
      <Container
        direction="row"
        width="70vw"
        bgcolor="#ff00ff"
        alignself="center"
      >
        <Logo
          breakpoints={{
            tablet: css`
              background-color: transparent;
              flex: 0;
            `
          }}
        />
        <Menu />
      </Container>
    </StyledHeader>
  );
}

export default Header;