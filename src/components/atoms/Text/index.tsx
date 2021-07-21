import React from 'react';
import StyledText from "./style";


const Text: React.FC = (props) => {
  return <StyledText>{props.children}</StyledText>;
}

export default Text;