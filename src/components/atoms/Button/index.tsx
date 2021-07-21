import React from 'react';

import { StyledButton } from './style';
import ButtonProps from './interfaces';

const Button: React.FunctionComponent<ButtonProps> = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button;