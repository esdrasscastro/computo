import React from 'react';
import LinkProps from './interfaces';
import StyledLink from './style';

const Link: React.FunctionComponent<LinkProps> = (props) => {
  return <StyledLink {...props} />;
}

export default Link;