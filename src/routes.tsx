import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { Home, Error } from './pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ops" exact component={Error.Error404} />
                <Route path='*'>
                    <Redirect to={{
                        pathname: '/ops',
                        state: {
                            referrer: window && window.location.href,
                            message: '404'
                        }
                    }}
                    />
                    </Route>
            </Switch>
        </Router>
    );
}

export default Routes;