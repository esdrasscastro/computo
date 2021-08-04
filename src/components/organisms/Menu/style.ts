import styled from "styled-components";
import { applyBreakpoints, applyStyle, setSizes } from "../../../GlobalStyles";
import { Container } from "../../atoms";
import MenuProps from "./interfaces";

const StyledMenu = styled.menu<MenuProps>`
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

export const Circle = styled(Container)`
    position: absolute;
    width: 85px;
    height: 100px;
    background-color: var(--primary-color);
    border-radius: 50%;
    bottom: -30px;
    z-index: -1;

    ${applyStyle}
    ${applyBreakpoints}
`;

StyledMenu.defaultProps = {
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

export default StyledMenu;