import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Container } from '../../components'

class Home extends Component<RouteComponentProps> {
    render() {
        return (
            <Container>Home</Container>
        )
    }
}

export default withRouter(Home);