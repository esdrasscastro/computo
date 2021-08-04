import styled from 'styled-components';
import { applyBreakpoints, applyStyle, setSizes } from '../../../GlobalStyles';

import GlobalProps from '../../global-interfaces';

const StyledMain = styled.main<GlobalProps>`
    flex: 1 1 auto;
    margin: ${({margin}) => margin && setSizes(margin)};

    ${applyStyle}
    ${applyBreakpoints}
`;

export default StyledMain;