import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Default extends Component {
    render() {
        return (
            <>
                <Header />
                <Main>{this.props.children}</Main>
                <Footer />
            </>
        );
    }
}

export default Default;