import React from 'react';

import StyledLogo from './style';
import { Text } from '..';
import LogoProps from './interfaces';

const Logo: React.FunctionComponent<LogoProps> = (props) => {
    return (
        <StyledLogo {...props}>
            <Text fontSize={10} color="var(--secondary-font-color)" type="span">Cota</Text>
            <Text fontSize={10} color="var(--terciary-font-color)" weight="Bold" type="span">cota</Text>
        </StyledLogo>
    );
}

Logo.defaultProps = {
    direction: 'row',
    flex: 'initial',
    justify: 'center',
    bgcolor: 'var(--primary-color)',
    padding: 8
}

export default Logo;