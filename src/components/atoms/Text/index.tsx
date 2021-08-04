import React from 'react';
import {StyledText} from "./style";
import TextProps from './interfaces';

const Text: React.FunctionComponent<TextProps> = ({type, children, ...props}) => {
  return <StyledText type={type} {...props}>{children}</StyledText>;
}

export default Text;