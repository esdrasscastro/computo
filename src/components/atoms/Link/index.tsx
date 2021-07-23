import React from 'react';
import LinkProps from './interfaces';
import StyledLink from './style';

const Link: React.FunctionComponent<LinkProps> = (props) => {
  return <StyledLink {...props} />;
}

Link.defaultProps = {
  href: '#',
  fontSize: 16,
  color: 'var(--secondary-color)',
  flex: '1 auto',
  display: 'flex',
  justify: 'center',
  decoration: 'none'
};

export default Link;