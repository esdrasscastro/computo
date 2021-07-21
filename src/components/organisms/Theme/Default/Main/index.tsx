import React from 'react';
import StyledMain from './style';

const Main: React.FC = (props) => {
  return <StyledMain>{props.children}</StyledMain>;
}

export default Main;