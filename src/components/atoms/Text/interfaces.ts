import GlobalProps from '../../global-interfaces';

interface TextProps extends GlobalProps {
    type?: string;
    weight?: string;
    fontSize?: number|string;
    decoration?: string;
}

export default TextProps;