import * as React from 'react';
import {StyledContainer} from './style'

import ContainerProps from './interfaces';

const Container: React.FunctionComponent<ContainerProps> = ({children, ...props}) => {
    return (
        <StyledContainer {...props}>{children}</StyledContainer>
    );
}

export default Container;