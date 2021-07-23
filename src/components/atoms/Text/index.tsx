import React from 'react';
import {StyledText} from "./style";
import TextProps from './interfaces';

const Text: React.FunctionComponent<TextProps> = ({type, children, ...props}) => {
  return <StyledText type={type} {...props}>{children}</StyledText>;
}

Text.defaultProps = {
  type: 'p',
  fontSize: '1rem'
}

export default Text;