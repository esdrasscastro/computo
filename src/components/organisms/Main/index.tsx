import React from 'react';
import StyledMain from './style';
import GlobalProps from '../../global-interfaces';

const Main: React.FunctionComponent<GlobalProps> = ({children, ...props}) => {
  return <StyledMain {...props}>{children}</StyledMain>;
}

export default Main;