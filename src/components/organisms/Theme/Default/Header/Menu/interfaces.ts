import { MouseEventHandler } from 'react';

interface MenuProps {
    children?: React.ReactNode;
    display?: string;
    toggleMenu?: MouseEventHandler<HTMLButtonElement>;
}

export default MenuProps