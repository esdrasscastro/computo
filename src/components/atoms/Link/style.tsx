import styled from 'styled-components';
import { applyBreakpoints, applyStyle, setSizes } from '../../../GlobalStyles';

import LinkProps from './interfaces';

const LinkType = ({href, children, ...props}: LinkProps): any => <a href={href} {...props}>{children}</a>

const StyledLink = styled(LinkType)`
    text-decoration: ${({decoration}) => decoration};
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
    margin: ${({margin}) => margin && setSizes(margin)};
    position: ${({position}) => position};
    top: ${({top}) => top && setSizes(top)};
    left: ${({left}) => left && setSizes(left)};
    bottom: ${({bottom}) => bottom && setSizes(bottom)};
    right: ${({right}) => right && setSizes(right)};
    color: ${({color}) => color};
    background-color: ${({bgcolor}) => bgcolor};

    > * {
        font-size: ${({fontSize}) => fontSize && setSizes(fontSize)};
    }

    ${applyStyle}
    ${applyBreakpoints}
`;

export default StyledLink;