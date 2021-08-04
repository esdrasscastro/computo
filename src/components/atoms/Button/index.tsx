import React from 'react';

import { StyledButton } from './style';
import ButtonProps from './interfaces';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button;