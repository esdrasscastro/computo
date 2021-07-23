interface Breakpoints {
    desktop?: any;
    mobile?: any;
    tablet?: any;
    large?: any;
}

interface GlobalProps {
    display?: string;
    direction?: string;
    flexwrap?: string;
    aligncontent?: string;
    justify?: string;
    alignitems?: string;
    flex?: string;
    alignself?: string;
    padding?: string|number|Array<number>|Array<string>;
    width?: string|number|Array<number>|Array<string>;
    margin?: string|number|Array<number>|Array<string>;
    breakpoints?: Breakpoints;
    position?: string;
    bottom?: string|number;
    top?: string|number;
    left?: string|number;
    right?: string|number;
    color?: string;
    bgcolor?: string;
    children?: React.ReactNode;
}

export default GlobalProps;