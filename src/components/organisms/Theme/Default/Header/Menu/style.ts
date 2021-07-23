import styled from "styled-components";
import { applyBreakpoints, applyStyle } from "../../../../../../GlobalStyles";

import MenuProps from "./interfaces";

const StyledMenu = styled.menu<MenuProps>`
    width: ${({width}) => width};

    ${applyStyle}
    ${applyBreakpoints}
`;

export const Circle = styled.div`
    position: absolute;
    width: 85px;
    height: 100px;
    background-color: var(--primary-color);
    border-radius: 50%;
    bottom: -30px;
    z-index: -1;
`;

export default StyledMenu;