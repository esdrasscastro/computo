import styled from "styled-components";

import ButtonProps from './interfaces'

const StyledButton = styled.button<ButtonProps>`
    background: none;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: center;

    :hover {
        background-color: antiquewhite;
    }
`;

export {
    StyledButton
};