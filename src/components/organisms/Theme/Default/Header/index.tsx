import React from 'react';

import { Container, Logo } from '../../../../atoms';
import StyledHeader from './style';

import Menu from './Menu';
import { css } from 'styled-components';


const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Container
        bgcolor="var(--primary-color)"
        position="fixed"
        left="0"
        bottom="0"
        top="calc(100vh - var(--header-height))"
        direction="row-reverse"
        breakpoints={{
          tablet: css`
            flex-direction: row;
            position: relative;
            top: initial;
            bottom: initial;
            left: initial;
          `
        }}
      >
        <Logo
          position="fixed"
          top="0"
          left="0"
          breakpoints={{
            tablet: css`
              box-shadow: none !important;
              background-color: transparent;
              position: relative;
            `
          }}
        />
        <Menu />
      </Container>
    </StyledHeader>
  );
}

export default Header;