import * as React from 'react';
import {StyledContainer} from './style'

const Container: React.FunctionComponent = ({children, ...props}) => {
    return (
        <StyledContainer {...props}>{children}</StyledContainer>
    );
}

Container.defaultProps = {

};

export default Container;