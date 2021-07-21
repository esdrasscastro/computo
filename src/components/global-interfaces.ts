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
    breakpoints?: Breakpoints;
    children: React.ReactNode;
}

export default GlobalProps;