import React from 'react';
import MaterialIcon from '@material/react-material-icon';

import StyledMenu from './style';
import { Container, Button } from '../../../../..';

import MenuProps from './interfaces';

const Menu: React.FunctionComponent<MenuProps> = ({children, toggleMenu,...props}) => {
  return (
    <StyledMenu {...props}>
      <Container width="100%">
        <Container direction="row" justify="flex-end" flex="none" padding="10px">
          <Button onClick={toggleMenu}>
            <MaterialIcon icon="close" />
          </Button>
        </Container>
        <Container>
          Menu
        </Container>
      </Container>
    </StyledMenu>
  );
}

Menu.defaultProps = {
  display: 'none',
  toggleMenu: () => {}
}

export default Menu;