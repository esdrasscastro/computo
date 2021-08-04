import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import StyledMenu from './style';
import { Container, Link } from '../../atoms';

import MenuProps from './interfaces';

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
        <Link color="var(--secondary -font-color)" href="#3"><MaterialIcon icon="monetization_on" /></Link>
        <Link color="var(--secondary-font-color)" href="#4"><MaterialIcon icon="contacts" /></Link>
        <Link color="var(--secondary-font-color)" href="#5"><MaterialIcon icon="help_center" /></Link>
      </Container>
    </StyledMenu>
  );
}

export default Menu;