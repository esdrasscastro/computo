import { MouseEventHandler } from 'react';
import GlobalProps from '../../global-interfaces';

interface ButtonProps extends GlobalProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default ButtonProps