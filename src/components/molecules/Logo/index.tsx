import React from 'react';

import StyledLogo from './style';
import { Text } from '../..';
import LogoProps from './interfaces';
import { css } from 'styled-components';

const Logo: React.FunctionComponent<LogoProps> = (props) => {
    return (
        <StyledLogo {...props}>
            <Text
                fontSize={10}
                color="var(--secondary-font-color)"
                type="span"
                breakpoints={{
                    tablet: css`
                        font-size: 2rem;
                    `
                }}
            >Cota</Text>
            <Text
                fontSize={10}
                color="var(--terciary-font-color)"
                weight="Bold"
                type="span"
                breakpoints={{
                    tablet: css`
                        font-size: 2rem;
                    `
                }}
            >cota</Text>
        </StyledLogo>
    );
}

export default Logo;