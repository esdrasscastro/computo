import styled from "styled-components";
import { Container } from "../..";

const StyledLogo = styled(Container)``;

StyledLogo.defaultProps = {
    direction: 'row',
    flex: 'initial',
    justify: 'center',
    bgcolor: 'var(--primary-color)',
    padding: 8
}

export default StyledLogo;