import * as React from 'react';
import {StyledContainer} from './style'

import ContainerProps from './interfaces';

const Container: React.FunctionComponent<ContainerProps> = ({children, ...props}) => {
    return (
        <StyledContainer {...props}>{children}</StyledContainer>
    );
}

Container.defaultProps = {
    display: 'flex',
    direction: 'column',
    flexwrap: 'nowrap',
    aligncontent: 'center',
    justify: 'flex-start',
    alignitems: 'center',
    flex: '1 auto',
    alignself: 'flex-start',
    width: '100%'
}

export default Container;