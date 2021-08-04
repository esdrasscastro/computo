import styled from 'styled-components';
import { applyBreakpoints, applyStyle, setSizes } from '../../../GlobalStyles';

import GlobalProps from '../../global-interfaces';

const StyledHeader = styled.header<GlobalProps>`
    width: ${({width}) => width && setSizes(width)};
    height: ${({height}) => height && setSizes(height)};
    flex: ${({flex}) => flex};
    display: ${({display}) => display};
    flex-direction: ${({direction}) => direction};
    flex-wrap: ${({flexwrap}) => flexwrap};
    align-content: ${({aligncontent}) => aligncontent};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignitems}) => alignitems};
    align-self: ${({alignself}) => alignself};
    padding: ${({padding}) => padding && setSizes(padding)};
    position: ${({position}) => position};
    top: ${({top}) => top && setSizes(top)};
    left: ${({left}) => left && setSizes(left)};
    bottom: ${({bottom}) => bottom && setSizes(bottom)};
    right: ${({right}) => right && setSizes(right)};
    color: ${({color}) => color};
    background-color: ${({bgcolor}) => bgcolor};
    box-shadow: ${({shadow}) => shadow};

    ${applyStyle}
    ${applyBreakpoints}
`;

StyledHeader.defaultProps = {
    width: '100%',
    height: 'var(--header-height)',
    padding: 0,
    display: 'flex',
    direction: 'column',
    flexwrap: 'nowrap',
    aligncontent: 'center',
    justify: 'flex-start',
    alignitems: 'center',
    alignself: 'flex-start',
    position: 'relative'
}

export default StyledHeader;