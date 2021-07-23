import styled from "styled-components";

import TextProps from "./interfaces";
import {fontWeight, setSizes} from "../../../GlobalStyles";

const TextType = ({type, children, ...props}: TextProps): any => {
    switch(type) {
        case 'span': return <span {...props}>{children}</span>
        case 'strong': return <strong {...props}>{children}</strong>
        case 'abbr': return <abbr {...props}>{children}</abbr>
        case 'legend': return <legend {...props}>{children}</legend>
        case 'small': return <small {...props}>{children}</small>
        case 'sub': return <sub {...props}>{children}</sub>
        case 'sup': return <sup {...props}>{children}</sup>
        case 'label': return <label {...props}>{children}</label>
        default: return <p {...props}>{children}</p>
    }
}

const StyledText = styled(TextType)`
    color: ${({color}) => color};
    background-color: ${({bgcolor}) => bgcolor};
    font-weight: ${({weight}) => weight && fontWeight(weight)};
    font-size: ${({fontSize}) => fontSize && setSizes(fontSize)};
`;

export {StyledText};