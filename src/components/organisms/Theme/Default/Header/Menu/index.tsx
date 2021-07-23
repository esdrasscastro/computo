import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import StyledMenu, { Circle } from './style';
import { Container, Link } from '../../../../..';

import MenuProps from './interfaces';
import { css } from 'styled-components';

const Menu: React.FunctionComponent<MenuProps> = ({children, ...props}) => {
  return (
    <StyledMenu {...props}>
      <Container
        direction="row"
        width="100%"
        justify="space-evenly"
      >
        <Link color="var(--secondary-font-color)" href="#1"><MaterialIcon icon="home" /></Link>
        <Link color="var(--secondary-font-color)" href="#2"><MaterialIcon icon="local_shipping" /></Link>
        <Link margin={[-10,0,0,0]} fontSize={32} color="var(--terciary-font-color)" href="#3">
          <Circle shadow="1px -1px 10px var(--primary-color)" breakpoints={{ tablet: css`display: none;`}} />
          <MaterialIcon icon="monetization_on" />
        </Link>
        <Link color="var(--secondary-font-color)" href="#4"><MaterialIcon icon="contacts" /></Link>
        <Link color="var(--secondary-font-color)" href="#5"><MaterialIcon icon="help_center" /></Link>
      </Container>
    </StyledMenu>
  );
}

Menu.defaultProps = {
  width: '100%'
}

export default Menu;