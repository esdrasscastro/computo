import styled from "styled-components";
import { applyBreakpoints, applyStyle } from "../../../../../../GlobalStyles";
import { Container } from "../../../../..";
import MenuProps from "./interfaces";

const StyledMenu = styled.menu<MenuProps>`
    width: ${({width}) => width};

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

export default StyledMenu;