import styled from 'styled-components';

import ContainerProps from './interfaces';
import {applyBreakpoints, applyStyle, setSizes} from '../../../GlobalStyles';

const StyledContainer = styled.div<ContainerProps>`
    width: ${({width}) => width && setSizes(width)};
    flex: ${({flex}) => flex};
    display: ${({display}) => display};
    flex-direction: ${({direction}) => direction};
    flex-wrap: ${({flexwrap}) => flexwrap};
    align-content: ${({aligncontent}) => aligncontent};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignitems}) => alignitems};
    align-self: ${({alignself}) => alignself};
    padding: ${({padding}) => padding && setSizes(padding)};

    ${applyStyle}
    ${applyBreakpoints}
`;

export {
    StyledContainer
}