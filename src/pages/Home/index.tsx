import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Container, Text } from '../../components'

class Home extends Component<RouteComponentProps> {
    render() {
        return (
            <Container>
                <Text>
                    Faça sua cotação com apenas alguns cliques e receba os orçamentos de até 10 fornecedores.
                </Text>
                <Text>
                    <Text type="span">Isso tudo dentro da sua caixa de e-mail ou consultando diretamente na guia</Text>
                    <Text type="strong"> minhas cotações</Text>
                </Text>
            </Container>
        )
    }
}

export default withRouter(Home);