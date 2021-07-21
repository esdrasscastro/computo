import React, { useState } from 'react';
import MaterialIcon from '@material/react-material-icon';

import { Container, Text, Button } from '../../../../atoms';
import StyledHeader from './style';

import Menu from './Menu';
import { css } from 'styled-components';


const Header: React.FunctionComponent = () => {

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <StyledHeader>
      <Container
        direction="row-reverse"
        breakpoints={{ desktop: css`flex-direction: row;`}}
      >
        <Container>
          <Text>Logo</Text>
        </Container>
        <Button onClick={() => setMenuVisibility(!menuVisibility)}>
          <MaterialIcon icon="menu" />
        </Button>
        <Menu toggleMenu={() => setMenuVisibility(!menuVisibility)} display={menuVisibility ? 'flex' : 'none'} />
      </Container>
    </StyledHeader>
  );
}

export default Header;