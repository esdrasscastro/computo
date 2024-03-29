import { Component } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Main from "../../organisms/Main";
import { Container } from "../../atoms";
import { css } from "styled-components";

class Default extends Component {
    render() {
        return (
            <Container
                direction="column-reverse"
                breakpoints={{
                    tablet: css`
                        flex-direction: column;
                    `
                }}
            >
                <Header />
                <Container>
                    <Main
                        margin={['var(--header-height)', '0', '0', '0']}
                        breakpoints={{
                            tablet: css`
                                margin: 0;
                            `
                        }}
                    >
                        {this.props.children}
                    </Main>
                    <Footer />
                </Container>
            </Container>
        );
    }
}

export default Default;