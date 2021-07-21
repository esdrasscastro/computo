import styled from "styled-components";

import MenuProps from "./interfaces";

const StyledMenu = styled.menu<MenuProps>`
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: var(--menu-width);
    background-color: aqua;
    display: ${({display}) => display};
`;

export default StyledMenu;