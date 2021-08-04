import GlobalProps from '../../global-interfaces'

interface MenuProps extends GlobalProps {
    children?: React.ReactNode;
    display?: string;
    width?: string|number;
}

export default MenuProps